# Copyright 2019 Novartis Institutes for BioMedical Research Inc. Licensed
# under the Apache License, Version 2.0 (the "License"); you may not use
# this file except in compliance with the License. You may obtain a copy
# of the License at http://www.apache.org/licenses/LICENSE-2.0. Unless
# required by applicable law or agreed to in writing, software distributed
# under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES
# OR CONDITIONS OF ANY KIND, either express or implied. See the License for
# the specific language governing permissions and limitations under the License.
# import BaseHTTPServer


# Import utility modules
import csv
import json
import logging
import os
import re
import urllib.parse
from datetime import datetime, timezone
from threading import Lock, Thread

from flask import (
    Flask,
    make_response,
    redirect,
    render_template,
    request,
    send_from_directory,
    url_for,
)
from werkzeug.middleware.proxy_fix import ProxyFix
from werkzeug.utils import safe_join

# Import other functions from package
from cellxgene_gateway import env, flask_util
from cellxgene_gateway.backend_cache import BackendCache
from cellxgene_gateway.cache_entry import CacheEntryStatus
from cellxgene_gateway.cache_exception import CacheException
from cellxgene_gateway.cache_key import CacheKey
from cellxgene_gateway.cellxgene_exception import CellxgeneException
from cellxgene_gateway.dataset_metadata_loader import load_dataset_metadata_tsv
from cellxgene_gateway.extra_scripts import get_extra_scripts
from cellxgene_gateway.filecrawl import render_item_source
from cellxgene_gateway.prune_process_cache import PruneProcessCache
from cellxgene_gateway.util import CustomRequestHandler, current_time_stamp

app = Flask(__name__)

item_sources = []
default_item_source = None

# Guard for lazy initialization so tests can import this module without
# triggering environment-dependent side effects. initialise_data_sources()
# will set this to True when it has run.
data_sources_initialized = False
data_sources_init_lock = Lock()


# Set up logger for logging messages within this module
logger = logging.getLogger(__name__)


def _force_https(app):
    """
    WSGI middleware to override URL scheme based on EXTERNAL_PROTOCOL env var.

    Parameters:
    -----------
    app: callable
      WSGI application to wrap.

    Returns:
    --------
    callable
      Wrapped WSGI application that sets wsgi.url_scheme before delegating.
    """

    def wrapper(environ, start_response):
        if env.external_protocol is not None:
            environ['wsgi.url_scheme'] = env.external_protocol
        return app(environ, start_response)

    return wrapper


def set_no_cache(resp):
    """
    Set HTTP headers on Flask response to prevent caching.

    Parameters:
    -----------
    resp: flask.Response
      Response object to modify.

    Returns:
    --------
    resp: flask.Response
      Modified response with no-cache headers.
    """

    resp.headers['Cache-Control'] = 'no-cache, no-store, must-revalidate'
    resp.headers['Pragma'] = 'no-cache'
    resp.headers['Expires'] = '0'
    resp.headers['Cache-Control'] = 'public, max-age=0'

    return resp


# Bundle entry point: keeps a stable name across rebuilds, so it must be
# revalidated. Every other file under static/vitessce/ carries a content hash,
# and static/vendor/ files carry a version, so both can be cached forever
BUNDLE_ENTRY_PATH = '/static/vitessce/spatial-viewer.js'


@app.after_request
def set_static_cache_headers(resp):
    """
    Mark content-addressed static assets as immutable so browsers stop
    revalidating them on every page load. Flask otherwise sends `no-cache`,
    which costs a round trip per file, and Vitessce bundle alone is 29 files.

    Parameters:
    -----------
    resp: flask.Response
      Response about to be returned.

    Returns:
    --------
    resp: flask.Response
      Response with a long-lived Cache-Control header where applicable.
    """
    path = request.path
    is_versioned = path.startswith('/static/vendor/') or (
        path.startswith('/static/vitessce/') and path != BUNDLE_ENTRY_PATH
    )
    if is_versioned and resp.status_code == 200:
        resp.headers['Cache-Control'] = 'public, max-age=31536000, immutable'
    return resp


app.wsgi_app = _force_https(app.wsgi_app)
if (
    env.proxy_fix_for > 0
    or env.proxy_fix_proto > 0
    or env.proxy_fix_host > 0
    or env.proxy_fix_port > 0
    or env.proxy_fix_prefix > 0
):
    app.wsgi_app = ProxyFix(
        app.wsgi_app,
        x_for=env.proxy_fix_for,
        x_proto=env.proxy_fix_proto,
        x_host=env.proxy_fix_host,
        x_port=env.proxy_fix_port,
        x_prefix=env.proxy_fix_prefix,
    )


# WSGI middleware to ensure data sources are initialized before the first
# WSGI request is handled. This guarantees initialization works under
# Gunicorn/uWSGI (which import the module but don't call main()). The
# initialise_data_sources() function is idempotent-protected by
# data_sources_initialized and data_sources_init_lock.
def _init_on_first_wsgi_request(wsgi_app):
    def middleware(environ, start_response):
        global data_sources_initialized
        if not data_sources_initialized:
            with data_sources_init_lock:
                if not app.extensions.get('cellxgene_gateway', {}).get(
                    'launchtime'
                ):
                    app.extensions.setdefault('cellxgene_gateway', {})[
                        'launchtime'
                    ] = current_time_stamp()

                if not data_sources_initialized:
                    logging.basicConfig(
                        level=env.log_level,
                        format='[%(asctime)s]  %(name)8s  %(levelname)-8s  %(message)s',
                        datefmt='%Y.%m.%d - %H:%M:%S',
                    )
                    initialise_data_sources()

                    env.validate()
                    if not item_sources or not len(item_sources):
                        raise ValueError(
                            'No data sources specified for Cellxgene Gateway'
                        )

                    global default_item_source
                    if default_item_source is None:
                        default_item_source = item_sources[0]

                    data_sources_initialized = True
                    start_pruner_thread()
        return wsgi_app(environ, start_response)

    return middleware


# Wrap the WSGI app so Gunicorn/uWSGI will trigger initialization when the
# first request comes in. Tests that need initialization can call
# initialise_data_sources() directly.
app.wsgi_app = _init_on_first_wsgi_request(app.wsgi_app)

cache = BackendCache()


# Initialize data sources - this is defined later in the file but called here
# to ensure initialization happens when WSGI servers (Gunicorn) import module
def initialise_data_sources():
    """
    Initialise data sources from environment variables.

    Reads CELLXGENE_DATA and CELLXGENE_BUCKET to set up local file and S3
    item sources. Called lazily on the first WSGI request so Gunicorn workers
    can import the module without triggering side effects at import time.

    Returns:
    --------
    None

    Raises:
    -------
    Exception
      If neither CELLXGENE_DATA nor CELLXGENE_BUCKET is set.
    """

    global default_item_source

    cellxgene_data = env.cellxgene_data
    cellxgene_bucket = env.cellxgene_bucket

    if cellxgene_bucket is not None:
        from cellxgene_gateway.items.s3.s3item_source import S3ItemSource

        s3_source = S3ItemSource(cellxgene_bucket, name='s3')
        item_sources.append(s3_source)
        default_item_source = s3_source
        logger.info('Initialized S3 data source')
        logger.debug(f'S3 bucket: {cellxgene_bucket}')
    if cellxgene_data is not None:
        from cellxgene_gateway.items.file.fileitem_source import FileItemSource

        file_source = FileItemSource(cellxgene_data, name='local')
        item_sources.append(file_source)
        default_item_source = file_source
        logger.info('Initialized local file data source')
        logger.debug(f'Data directory: {cellxgene_data}')
    if len(item_sources) == 0:
        raise ValueError('Please specify CELLXGENE_DATA or CELLXGENE_BUCKET')
    flask_util.include_source_in_url = len(item_sources) > 1


@app.errorhandler(CacheException)
def handle_invalid_usage(error):
    """
    Handle CacheException and render custom error page.

    Parameters:
    -----------
    error: CacheException
      Raised exception containing message and HTTP status.

    Returns:
    --------
    tuple:
      Rendered error template and HTTP status code.
    """

    return (
        render_template(
            'cache_error.html',
            extra_scripts=get_extra_scripts(),
            message=error.message,
            http_status=error.http_status,
            context=getattr(error, 'context', None),
            filename=getattr(error, 'filename', None),
        ),
        error.http_status,
    )


@app.errorhandler(CellxgeneException)
def handle_invalid_process(error):
    """
    Handle Cellxgene CellxgeneException raised during process launch.

    Parameters:
    -----------
    error: CellxgeneException
      Raised exception with process context and error details.

    Returns:
    --------
    tuple:
      Rendered error template and HTTP status code.
    """

    message = []

    message.append(error.message)
    message.append(f'{error.http_status} Error.')
    message.append(f'Stdout: {error.stdout}')
    message.append(f'Stderr: {error.stderr}')

    return (
        render_template(
            'cellxgene_error.html',
            extra_scripts=get_extra_scripts(),
            message=error.message,
            http_status=error.http_status,
            stdout=error.stdout,
            stderr=error.stderr,
            relaunch_url=error.key.relaunch_url(),
            annotation_file=error.key.annotation_descriptor,
        ),
        error.http_status,
    )


@app.route('/favicon.png')
@app.route('/favicon.ico')
def favicon():
    """
    Serve custom favicon from static directory.

    Handles both /favicon.png (used by gateway templates) and /favicon.ico
    (auto-requested by browsers regardless of page path).

    Returns:
    --------
    flask.Response
      Favicon.png file with appropriate MIME type.
    """

    return send_from_directory(
        os.path.join(app.root_path, 'static'),
        'favicon.png',
        mimetype='image/png',
    )


@app.route('/robots.txt')
def robots():
    """
    Serve robots.txt that keeps crawlers away from expensive routes.

    /view/ launches one cellxgene subprocess per dataset on plain GET, so bots
    walking links on /filecrawl would start one process per dataset. Data routes
    are disallowed because they stream whole files and Zarr chunks. Note: this
    only deters well-behaved crawlers; it is not access control.

    Returns:
    --------
    flask.Response
      robots.txt body as plain text.
    """

    body = 'User-agent: *\nDisallow: /view/\nDisallow: /spatial-data/\nDisallow: /download/\n'
    response = make_response(body)
    response.mimetype = 'text/plain'
    return response


@app.route('/view/static/<path:path>')
def view_static(path):
    """
    Proxy static asset requests that land at /view/static/ back to a running
    cellxgene instance.

    Cellxgene's JS bundle references assets with a '../' prefix, so from a page
    at /view/<dataset>/ the browser resolves them to /view/static/. These assets
    (e.g. the logo PNG) are bundled with cellxgene, not with the gateway, so we
    forward the request to any loaded cellxgene process.

    Returns:
    --------
    flask.Response
      Proxied asset content, or 503 if no cellxgene instance is running.
    """

    loaded = [
        e for e in cache.entry_list if e.status == CacheEntryStatus.loaded
    ]
    if not loaded:
        raise CacheException(
            'No running cellxgene instance to serve static assets', 503
        )
    port = loaded[0].port
    from requests import get as requests_get

    resp = requests_get(f'http://127.0.0.1:{port}/static/{path}')
    return make_response(
        resp.content,
        resp.status_code,
        {
            'Content-Type': resp.headers.get(
                'Content-Type', 'application/octet-stream'
            )
        },
    )


@app.route('/')
def homepage():
    """
    Render application home page.

    Returns:
    --------
    flask.Response
      Rendered HTML page for homepage.
    """

    return render_template('homepage.html', extra_scripts=get_extra_scripts())


@app.route('/filecrawl')
@app.route('/filecrawl/<path:path>')
def filecrawl(path=None):
    """
    Render file crawl page (dataset browser page):
      - Metadata-based filterable view of datasets if metadata .tsv is present
      - File list from configured item sources otherwise

    Parameters:
    -----------
    path: str, optional
      Subpath within item source to explore (used in fallback mode).

    Returns:
    --------
    flask.Response
      Rendered HTML page showing datasets or file structure.
    """
    # Try to load dataset metadata from TSV file if present
    data_dir = env.cellxgene_data
    tsv_path = env.dataset_metadata_tsv

    if os.path.exists(tsv_path):
        (
            datasets,
            assays,
            diseases,
            tissues,
            sexes,
            cell_count_range,
            gene_count_range,
            year_range,
        ) = load_dataset_metadata_tsv(tsv_path, data_dir)

        selected_assay = request.args.getlist('assay')
        selected_disease = request.args.getlist('disease')
        selected_tissue = request.args.getlist('tissue')
        selected_sex = request.args.getlist('sex')
        search_term = request.args.get('search', '').strip().lower()

        # Helper function to safely parse integers with a default fallback
        def _safe_int(val, default):
            try:
                return int(val)
            except (TypeError, ValueError):
                return default

        # Only restrict by range if user moved the slider away from the bound.
        # This prevents datasets with empty values from being incorrectly
        # filtered out when the slider is at its default position
        year_min_param = _safe_int(request.args.get('year_min'), year_range[0])
        year_max_param = _safe_int(request.args.get('year_max'), year_range[1])
        cc_min_param = _safe_int(
            request.args.get('cell_count_min'), cell_count_range[0]
        )
        cc_max_param = _safe_int(
            request.args.get('cell_count_max'), cell_count_range[1]
        )
        gc_min_param = _safe_int(
            request.args.get('gene_count_min'), gene_count_range[0]
        )
        gc_max_param = _safe_int(
            request.args.get('gene_count_max'), gene_count_range[1]
        )

        # Range is 'active' (restricting) only when moved away from the bound
        year_min_active = year_min_param > year_range[0]
        year_max_active = year_max_param < year_range[1]
        cc_min_active = cc_min_param > cell_count_range[0]
        cc_max_active = cc_max_param < cell_count_range[1]
        gc_min_active = gc_min_param > gene_count_range[0]
        gc_max_active = gc_max_param < gene_count_range[1]

        def _multi_matches(field_value, selected):
            """
            Return True if any selected value appears in semicolon field.

            Datasets with empty field always pass through so that missing data
            does not exclude dataset from filtered results.
            """
            if not selected:
                return True
            if not field_value or not field_value.strip():
                return True
            parts = {v.strip() for v in field_value.split(';')}
            return bool(parts & set(selected))

        def _in_range(raw_val, lo, hi, lo_active, hi_active):
            """
            Return True if the value is within [lo, hi], skipping if empty.
            """
            if not raw_val:
                return True  # Missing value always passes through
            try:
                v = int(raw_val)
            except (ValueError, TypeError):
                return True
            if lo_active and v < lo:
                return False
            return not (hi_active and v > hi)

        filtered = []
        for ds in datasets:
            # Apply existing filters
            if selected_assay and not _multi_matches(
                ds.get('assay', ''), selected_assay
            ):
                continue
            if selected_disease and not _multi_matches(
                ds.get('disease', ''), selected_disease
            ):
                continue
            if selected_tissue and not _multi_matches(
                ds.get('tissue', ''), selected_tissue
            ):
                continue
            if selected_sex and not _multi_matches(
                ds.get('sex', ''), selected_sex
            ):
                continue

            if not _in_range(
                ds.get('year', ''),
                year_min_param,
                year_max_param,
                year_min_active,
                year_max_active,
            ):
                continue
            if not _in_range(
                ds.get('cell_count', ''),
                cc_min_param,
                cc_max_param,
                cc_min_active,
                cc_max_active,
            ):
                continue
            if not _in_range(
                ds.get('gene_count', ''),
                gc_min_param,
                gc_max_param,
                gc_min_active,
                gc_max_active,
            ):
                continue

            # Apply search filter if search term provided
            if search_term:
                searchable = [
                    ds.get('name', ''),
                    ds.get('description', ''),
                    ds.get('disease', ''),
                    ds.get('authors', ''),
                ]
                if not any(
                    search_term in (f or '').lower() for f in searchable
                ):
                    continue

            filtered.append(ds)

        # Calculate totals for displayed datasets
        total_cells = 0
        total_patients = 0
        for ds in filtered:
            try:
                total_cells += int(ds.get('cell_count') or 0)
            except (ValueError, TypeError):
                pass
            try:
                total_patients += int(ds.get('patients') or 0)
            except (ValueError, TypeError):
                pass

        resp = make_response(
            render_template(
                'filecrawl.html',
                extra_scripts=get_extra_scripts(),
                datasets=filtered,
                total_cells=total_cells,
                total_patients=total_patients,
                assays=assays,
                diseases=diseases,
                tissues=tissues,
                sexes=sexes,
                cell_count_range=cell_count_range,
                gene_count_range=gene_count_range,
                year_range=year_range,
                enable_annotations=env.enable_annotations,
                use_metadata=True,
            )
        )
    else:
        # Fall back to file-based interface when no datasets.tsv is present
        source_name = request.args.get('source')
        sources = (
            filter(
                lambda x: x.name == urllib.parse.unquote_plus(source_name),
                item_sources,
            )
            if source_name
            else item_sources
        )
        rendered_sources = [
            render_item_source(item_source, path) for item_source in sources
        ]
        rendered_html = '\n'.join(rendered_sources)

        resp = make_response(
            render_template(
                'filecrawl.html',
                extra_scripts=get_extra_scripts(),
                rendered_html=rendered_html,
                path=path,
                use_metadata=False,
            )
        )

    set_no_cache(resp)
    return resp


entry_lock = Lock()


def matching_source(source_name):
    """
    Return item source matching given name.

    Parameters:
    -----------
    source_name: str or None
      Name of item source to look up. Falls back to default_item_source name
      when None.

    Returns:
    --------
    ItemSource
      Matching item source object.

    Raises:
    -------
    Exception
      If no single item source matches given name.
    """

    if source_name is None and default_item_source is not None:
        source_name = default_item_source.name
    matching = [i for i in item_sources if i.name == source_name]
    if len(matching) != 1:
        raise ValueError(f'Could not find matching item source {source_name}')
    source = matching[0]
    return source


@app.route(
    '/source/<path:source_name>/view/<path:path>',
    methods=['GET', 'PUT', 'POST'],
)
@app.route('/view/<path:path>', methods=['GET', 'PUT', 'POST'])
def do_view(path, source_name=None):
    """
    Proxy requests to a running cellxgene instance serving given dataset.

    Looks up or launches a cellxgene process for dataset, then proxies request
    to it. Creates a new cache entry if none exists for key.

    Parameters:
    -----------
    path: str
      Dataset path within item source.
    source_name: str or None
      Name of item source. Uses default source when None.

    Returns:
    --------
    flask.Response
      Proxied response from cellxgene process, or a loading page if the process
      is still starting up.
    """

    source = matching_source(source_name)
    match = cache.check_path(source, path)

    if match is None:
        lookup = source.lookup(path)
        if lookup is None:
            raise CacheException(
                f'Could not find item for path <{path.rstrip("/")}> in source <{source.name}>',
                404,
            )
        key = CacheKey.for_lookup(source, lookup)
        logger.info(
            f'Viewing dataset={key.file_path}, key={key.descriptor}, annotation_file={key.annotation_file_path}, source={key.source_name}, source_name={source_name}, path={path}'
        )
        with entry_lock:
            match = cache.check_entry(key)
            if match is None:
                uascripts = get_extra_scripts()
                match = cache.create_entry(key, uascripts)

    match.timestamp = current_time_stamp()

    if (
        match.status == CacheEntryStatus.loaded
        or match.status == CacheEntryStatus.loading
    ):
        if source.is_authorized(match.key.descriptor):
            return match.serve_content(path)
        else:
            raise CacheException('User not authorized to access this data', 403)
    elif match.status == CacheEntryStatus.error:
        raise CellxgeneException.from_cache_entry(match)
    else:
        raise CacheException(
            f'Unexpected cache entry status {match.status} for key {match.key.descriptor}',
            500,
        )


@app.route('/instances', methods=['GET'])
def do_instances():
    """
    Serve web page displaying current cache entries and statuses.

    Returns:
    --------
    Response
      Rendered HTML template showing cache entry details.
    """

    return render_template(
        'instances.html',
        entry_list=cache.entry_list,
        extra_scripts=get_extra_scripts(),
    )


@app.route('/instances.json', methods=['GET'])
def do_instances_json():
    """
    Return cache status information as a JSON response.

    Returns:
    --------
    str
      JSON-encoded object with gateway launchtime and a list of active cache
      entries, each including dataset path, annotation file, status, and
      timestamps.
    """

    def map_entry(entry):
        dataset = entry.key.h5ad_item.descriptor
        annotation_file = entry.key.annotation_descriptor
        return {
            'dataset': dataset,
            'annotation_file': annotation_file,
            'launchtime': entry.launchtime,
            'last_access': entry.timestamp,
            'status': entry.status.name,
        }

    return json.dumps({
        'launchtime': app.extensions.get('cellxgene_gateway', {}).get(
            'launchtime'
        ),
        'entry_list': [map_entry(entry) for entry in cache.entry_list],
    })


def get_cache_key(path):
    """
    Build a CacheKey for given path using source from request args.

    Parameters:
    -----------
    path: str
      Dataset path to look up within item source.

    Returns:
    --------
    CacheKey
      Cache key identifying dataset and its source.
    """

    if request.args.get('source_name'):
        source_name = request.args.get('source_name')
    elif default_item_source:
        source_name = default_item_source.name
    else:
        source_name = None
    source = matching_source(source_name)
    key = CacheKey.for_lookup(source, source.lookup(path))
    return key


@app.route('/relaunch/<path:path>', methods=['GET'])
def do_relaunch(path):
    """
    Terminate any existing process for a dataset and redirect to relaunch.

    Parameters:
    -----------
    path: str
      Path of dataset to relaunch.

    Returns:
    --------
    Response
      Redirect response to dataset's view URL.
    """

    key = get_cache_key(path)
    match = cache.check_entry(key)
    if match is not None:
        match.terminate()

    return redirect(key.view_url, code=302)


@app.route('/terminate/<path:path>', methods=['GET'])
def do_terminate(path):
    """
    Terminate process serving a dataset and redirect to cache status page.

    Parameters:
    -----------
    path: str
      Path of dataset to terminate.

    Returns:
    --------
    Response
      Redirect response to cache status page.
    """

    key = get_cache_key(path)
    match = cache.check_entry(key)
    if match is not None:
        match.terminate()

    return redirect(url_for('do_instances'), code=302)


@app.route('/terminate-back/<path:path>', methods=['GET'])
def do_terminate_back(path):
    """
    Terminate process serving a dataset and redirect to filecrawl page.

    Parameters:
    -----------
    path: str
      Path of dataset to terminate.

    Returns:
    --------
    Response
      Redirect response to filecrawl page.
    """

    key = get_cache_key(path)
    match = cache.check_entry(key)
    if match is not None:
        match.terminate()

    return redirect(url_for('filecrawl'), code=302)


@app.route('/metadata/ip_address', methods=['GET'])
def ip_address():
    """
    Return configured gateway IP address as a plain-text response.

    Returns:
    --------
    flask.Response
      Plain-text response containing IP address with no-cache headers.
    """

    # env.ip is None when GATEWAY_IP is unset, and make_response(None) raises,
    # so fall back to empty body instead of returning 500
    resp = make_response(env.ip or '')
    return set_no_cache(resp)


# Map filename suffixes to short display titles
_FIGURE_TITLES = {
    # Preprocessing (combined)
    'all_QC_raw_data_total_counts': 'Total counts',
    'all_QC_raw_data_n_genes_by_counts': 'Genes per cell',
    'all_QC_raw_data_pct_counts_mt': 'MT fraction',
    'all_QC_raw_data_pct_counts_ribo': 'Ribosomal fraction',
    'all_QC_raw_data_pct_counts_globin': 'Globin fraction',
    'all_QC_raw_data_pct_counts_in_top_20_genes': 'Top 20 gene fraction',
    'all_QC_filtered_data_total_counts': 'Total counts',
    'all_QC_filtered_data_n_genes_by_counts': 'Genes per cell',
    'all_QC_filtered_data_pct_counts_mt': 'MT fraction',
    'all_QC_filtered_data_pct_counts_ribo': 'Ribosomal fraction',
    'all_QC_filtered_data_pct_counts_globin': 'Globin fraction',
    'all_QC_filtered_data_pct_counts_in_top_20_genes': 'Top 20 gene fraction',
    # Preprocessing (per sample)
    'QC_raw_data_counts_metrics': 'QC metrics',
    'QC_raw_data_counts_mt': 'Mitochondrial counts',
    'QC_raw_data_highest_expression': 'Highest expressed genes',
    'QC_filtered_data_counts_metrics': 'QC metrics (filtered)',
    'QC_filtered_data_counts_mt': 'Mitochondrial counts (filtered)',
    'QC_filtered_data_highest_expression': 'Highest expressed genes (filtered)',
    'doublet_score_distribution': 'Doublet score distribution',
    'doublet_score_stats': 'Doublet score statistics',
    # Normalisation
    'all_normalisation_distributions': 'Normalisation effect',
    'all_normalisation_qc_mean_var': 'Mean–variance relationship',
    'all_normalisation_qc_qq': 'QQ plots',
    'all_normalisation_qc_cv': 'Coefficient of variation',
    'all_normalisation_qc_corr': 'Cell–cell correlation',
    # Dimensionality reduction
    'all_highly_variable_genes': 'Highly variable genes',
    'all_highly_variable_genes_batches': 'HVG batch consistency',
    'all_pca_variance_ratio': 'PCA variance ratio',
    'all_pca_loadings': 'Gene loadings by PC',
    'all_pca_qc': 'PCA QC metrics',
    'all_umap_qc': 'UMAP QC metrics',
    # Clustering
    'all_clusters_resolutions': 'Clustering resolutions',
    # Integration & Annotation (results)
    'all_scanvi_qc_integration': 'Integration quality',
    'all_scanvi_label_transfer_umap': 'Label transfer UMAP',
    'all_scanvi_umap_qc': 'scANVI UMAP QC',
    'all_scanvi_clusters_resolutions': 'Clustering resolutions',
    'joint_scanvi_umap_cell_origin': 'Cell origin UMAP',
    # Integration & Annotation (training)
    'all_scanvi_qc_elbo': 'ELBO',
    'all_scanvi_qc_kl': 'KL divergence',
    'all_scanvi_qc_reconstruction': 'Reconstruction loss',
}

# annotation_qc figures use a dynamic suffix (resolution value)
_ANNOTATION_QC_RE = re.compile(r'^annotation_qc_res([\d.]+)$')


def _figure_title(stem):
    """
    Function to return display title for figure filename stem.

    Parameters:
    -----------
    stem: str
      Filename without extension.

    Returns:
    --------
    title: str
      Human-readable title, or cleaned-up version of stem.
    """
    if stem in _FIGURE_TITLES:
        return _FIGURE_TITLES[stem]
    # Per-sample figures: strip leading sample prefix then look up suffix
    m_qc = re.match(r'^.+?_(QC_(?:raw|filtered)_data_.+)$', stem)
    if m_qc and m_qc.group(1) in _FIGURE_TITLES:
        return _FIGURE_TITLES[m_qc.group(1)]
    m_db = re.match(r'^.+?(doublet_score_(?:distribution|stats))$', stem)
    if m_db and m_db.group(1) in _FIGURE_TITLES:
        return _FIGURE_TITLES[m_db.group(1)]
    m_ann = _ANNOTATION_QC_RE.match(stem)
    if m_ann:
        return f'Annotation QC (res {m_ann.group(1)})'
    # Fallback: convert underscores to spaces and title-case
    return stem.replace('_', ' ').replace('all ', '').title()


# Ordered row definitions for tabs with thematic groupings
# Each entry: (row_label, list_of_filename_stems_in_order)
_ROW_DEFS = {
    '2_normalisation': [
        ('Distribution', ['all_normalisation_distributions']),
        (
            'Statistical QC',
            [
                'all_normalisation_qc_mean_var',
                'all_normalisation_qc_qq',
                'all_normalisation_qc_cv',
                'all_normalisation_qc_corr',
            ],
        ),
    ],
    '3_dimensionality_reduction': [
        (
            'Feature Selection',
            ['all_highly_variable_genes', 'all_highly_variable_genes_batches'],
        ),
        ('PCA', ['all_pca_variance_ratio', 'all_pca_loadings', 'all_pca_qc']),
        ('UMAP', ['all_umap_qc']),
    ],
    '5_integration_annotation/results': [
        ('Integration QC', ['all_scanvi_qc_integration']),
        (
            'UMAP',
            [
                'all_scanvi_label_transfer_umap',
                'all_scanvi_umap_qc',
                'joint_scanvi_umap_cell_origin',
            ],
        ),
        (
            'Clustering',
            [
                'all_scanvi_clusters_resolutions',
                'annotation_qc_res0.5',
                'annotation_qc_res1.0',
                'annotation_qc_res1.5',
                'annotation_qc_res2.0',
            ],
        ),
    ],
}


def _arrange_into_rows(imgs, step_key):
    """
    Function to arrange a flat list of image paths into labelled thematic rows.

    Parameters:
    -----------
    imgs: list of str
      Relative image paths.
    step_key: str
      Key into _ROW_DEFS (e.g. '2_normalisation').

    Returns:
    --------
    rows: list of dicts
      Each dict has 'label' (str or None) and 'imgs' (list of dicts with
      'path' and 'title' keys). Figures not matched by any row definition are
      appended in a final unlabelled row.
    """
    if not imgs:
        return []

    if step_key not in _ROW_DEFS:
        # No thematic arrangement — single row with all figures
        return [
            {
                'label': None,
                'imgs': [
                    {
                        'path': p,
                        'title': _figure_title(
                            os.path.splitext(os.path.basename(p))[0]
                        ),
                    }
                    for p in imgs
                ],
            }
        ]

    # Build stem→path lookup
    stem_to_path = {}
    for p in imgs:
        stem = os.path.splitext(os.path.basename(p))[0]
        stem_to_path[stem] = p

    rows = []
    placed = set()
    for row_label, stems in _ROW_DEFS[step_key]:
        row_imgs = []
        for stem in stems:
            if stem in stem_to_path:
                row_imgs.append({
                    'path': stem_to_path[stem],
                    'title': _figure_title(stem),
                })
                placed.add(stem)
            else:
                # Try prefix match for annotation_qc with varying resolutions
                for s, p in stem_to_path.items():
                    if s.startswith(stem) and s not in placed:
                        row_imgs.append({'path': p, 'title': _figure_title(s)})
                        placed.add(s)
        if row_imgs:
            rows.append({'label': row_label, 'imgs': row_imgs})

    # Append any figures not captured by the row definitions
    leftover = [
        {
            'path': p,
            'title': _figure_title(os.path.splitext(os.path.basename(p))[0]),
        }
        for p in imgs
        if os.path.splitext(os.path.basename(p))[0] not in placed
    ]
    if leftover:
        rows.append({'label': None, 'imgs': leftover})

    return rows


def _annotate_per_sample(per_sample):
    """
    Function to attach display titles to per-sample image paths.

    Parameters:
    -----------
    per_sample: dict
      Mapping of sample id to list of relative image paths.

    Returns:
    --------
    annotated: dict
      Same structure but each path replaced with {'path': str, 'title': str}.
    """
    annotated = {}
    for sample, paths in per_sample.items():
        annotated[sample] = [
            {
                'path': p,
                'title': _figure_title(
                    os.path.splitext(os.path.basename(p))[0]
                ),
            }
            for p in paths
        ]
    return annotated


def _walk_images(root_path, qc_dir):
    """
    Walk a directory tree and return combined and per-sample image lists.

    Parameters:
    -----------
    root_path: str
      Absolute path of directory to walk.
    qc_dir: str
      Absolute path of dataset QC root (used to compute relative paths).

    Returns:
    --------
    (combined_imgs, per_sample, group_label): tuple
      combined_imgs is a sorted list of relative image paths.
      per_sample is an ordered dict mapping sample/dataset id to list of
      relative paths.
      group_label is 'Sample' or 'Dataset', depending on which grouping was
      detected in the walked paths.
    """
    combined_imgs = []
    per_sample = {}
    group_label = 'Sample'

    for root, dirs, files in os.walk(root_path):
        dirs.sort()
        rel_root = os.path.relpath(root, qc_dir)
        imgs = sorted(
            f
            for f in files
            if f.lower().endswith(('.jpg', '.jpeg', '.png', '.svg'))
        )
        for img in imgs:
            rel_path = os.path.join(rel_root, img)
            if 'per_dataset' in rel_path:
                group_label = 'Dataset'
            if (
                'per_sample' in rel_path
                or 'per_dataset' in rel_path
                or '3_doublets' in rel_path
            ):
                # Group by sample/dataset id: strip known QC/doublet suffixes
                m = re.match(r'^(.+?)(?:_QC_|_doublet_)', img)
                sample = m.group(1) if m else img
                per_sample.setdefault(sample, []).append(rel_path)
            else:
                combined_imgs.append(rel_path)

    return combined_imgs, per_sample, group_label


@app.route('/qc/<dataset_id>')
def qc_report(dataset_id):
    """
    Render QC report page for a dataset.

    Parameters:
    -----------
    dataset_id: str
      Dataset identifier matching a subfolder in QC base directory.

    Returns:
    --------
    flask.Response
      Rendered QC report page, or 404 if no QC folder exists.
    """
    qc_base = env.qc_data
    qc_dir = os.path.normpath(os.path.join(qc_base, dataset_id))

    # Security: reject traversal attempts
    if not qc_dir.startswith(os.path.normpath(qc_base)):
        raise CacheException('Invalid dataset id.', 400)

    if not os.path.isdir(qc_dir):
        raise CacheException(
            f"No QC data found for dataset '{dataset_id}'.", 404
        )

    # Map top-level subdirectories to human-readable step names
    step_labels = {
        '1_preprocessing': 'Preprocessing',
        '1_qc': 'QC',
        '2_normalisation': 'Normalisation',
        '3_dimensionality_reduction': 'Dimensionality Reduction',
        '4_clustering_unintegrated': 'Clustering',
        '5_integration_annotation': 'Integration & Annotation',
    }

    # Sub-labels for named subdirectories inside a step (used as headings)
    sub_labels = {
        '1_raw': 'Raw Data',
        '2_filtered': 'Filtered Data',
        'filtered': 'Filtered Data',
        '3_doublets': 'Doublets',
        'results': 'Results',
        'training': 'Model Training',
    }

    steps = []
    for step_dir in sorted(os.listdir(qc_dir)):
        step_path = os.path.join(qc_dir, step_dir)
        if not os.path.isdir(step_path):
            continue

        label = step_labels.get(step_dir, step_dir.replace('_', ' ').title())

        # Each step is a list of sections: {'label': str, 'combined': [],
        # 'per_sample': {}}. Most steps have one implicit section; integration
        # has named subsections
        raw_subdirs = sorted(
            d
            for d in os.listdir(step_path)
            if os.path.isdir(os.path.join(step_path, d))
        )
        named_subdirs = [d for d in raw_subdirs if d in sub_labels]

        if named_subdirs:
            # Walk each named subdir as its own section
            sections = []
            for sub in named_subdirs:
                sub_path = os.path.join(step_path, sub)
                combined_imgs, per_sample, group_label = _walk_images(
                    sub_path, qc_dir
                )
                sub_key = f'{step_dir}/{sub}'
                rows = _arrange_into_rows(combined_imgs, sub_key)
                sections.append({
                    'label': sub_labels[sub],
                    'rows': rows,
                    'per_sample': _annotate_per_sample(per_sample),
                    'group_label': group_label,
                })
        else:
            # Single implicit section — walk whole step directory
            combined_imgs, per_sample, group_label = _walk_images(
                step_path, qc_dir
            )
            rows = _arrange_into_rows(combined_imgs, step_dir)
            sections = [
                {
                    'label': None,
                    'rows': rows,
                    'per_sample': _annotate_per_sample(per_sample),
                    'group_label': group_label,
                }
            ]

        # Square-crop combined thumbnails for tabs with wide figures
        cap_combined = step_dir in (
            '2_normalisation',
            '3_dimensionality_reduction',
            '4_clustering_unintegrated',
            '5_integration_annotation',
        )
        steps.append({
            'id': step_dir,
            'label': label,
            'sections': sections,
            'cap_combined': cap_combined,
        })

    # Find dataset name from TSV for page title
    tsv_path = env.dataset_metadata_tsv
    dataset_name = dataset_id
    if os.path.exists(tsv_path):
        with open(tsv_path, newline='') as f:
            for row in csv.DictReader(f, delimiter='\t'):
                if row.get('dataset_id') == dataset_id:
                    dataset_name = row.get('name', dataset_id)
                    break

    return render_template(
        'qc_report.html',
        extra_scripts=get_extra_scripts(),
        dataset_id=dataset_id,
        dataset_name=dataset_name,
        steps=steps,
    )


@app.route('/qc-image/<dataset_id>/<path:image_path>')
def qc_image(dataset_id, image_path):
    """
    Serve a QC image file for a dataset.

    Parameters:
    -----------
    dataset_id: str
      Dataset identifier.
    image_path: str
      Relative path to image within dataset QC folder.

    Returns:
    --------
    flask.Response
      Image file response.
    """
    qc_base = env.qc_data
    qc_dir = os.path.normpath(os.path.join(qc_base, dataset_id))

    # Security: reject traversal in either segment
    if not qc_dir.startswith(os.path.normpath(qc_base)):
        raise CacheException('Invalid dataset id.', 400)
    if '..' in image_path:
        raise CacheException('Invalid image path.', 400)

    img_dir = os.path.dirname(image_path)
    img_file = os.path.basename(image_path)
    return send_from_directory(os.path.join(qc_dir, img_dir), img_file)


@app.route('/download/<filename>')
def download_file(filename):
    """
    Serve downloadable .h5ad file from data directory.

    Parameters:
    -----------
    filename: str
      Name of dataset file to download.

    Returns:
    --------
    Response
      Requested file if valid and exists, or an error response.
    """

    # Security: only allow .h5ad files
    if not filename.endswith('.h5ad'):
        raise CacheException(
            'Only .h5ad files can be downloaded.',
            400,
            context='download',
            filename=filename,
        )

    # Security: prevent directory traversal
    if '..' in filename or '/' in filename or '\\' in filename:
        raise CacheException(
            'Invalid filename.', 400, context='download', filename=filename
        )

    # Get data directory path. Unset with only a bucket configured is a valid
    # setup (nothing to download from disk in that case)
    data_dir = env.cellxgene_data
    if data_dir is None:
        raise CacheException(
            f"Dataset file '{filename}' was not found on the server.",
            404,
            context='download',
            filename=filename,
        )

    # Check if file exists
    file_path = os.path.join(data_dir, filename)
    if not os.path.exists(file_path):
        raise CacheException(
            f"Dataset file '{filename}' was not found on the server.",
            404,
            context='download',
            filename=filename,
        )

    # env.cellxgene_data is already absolute: Flask resolves a relative
    # directory against app.root_path (package dir), not configured data dir
    return send_from_directory(
        data_dir,
        filename,
        as_attachment=True,
        mimetype='application/octet-stream',
    )


@app.route('/spatial-data/<path:subpath>')
def spatial_data(subpath):
    """
    Serve file from spatial data directory (SpatialData .zarr stores and
    generated Vitessce config JSON). send_from_directory safe-joins path and
    inherits HTTP range-request support, which Vitessce viewer relies on when
    streaming Zarr chunks.

    Parameters:
    -----------
    subpath: str
      Path of file within spatial data directory (e.g.
      xenium_D1903482.zarr/images/... or xenium_D1903482.vitessce.json).

    Returns:
    --------
    flask.Response
      Requested file response, or 404 if it does not exist.
    """
    if '..' in subpath:
        raise CacheException('Invalid spatial path.', 400)

    # Unset with only bucket configured is valid setup, no spatial data on disk
    data_dir = env.cellxgene_data
    if data_dir is None:
        raise CacheException(
            f"Spatial file '{subpath}' was not found on server.",
            404,
            context='spatial',
            filename=subpath,
        )

    # env.cellxgene_data is already absolute: Flask resolves relative directory
    # against app.root_path (package dir), not configured data dir
    return send_from_directory(data_dir, subpath)


@app.route('/spatial-viewer')
def spatial_viewer():
    """
    Render standalone Vitessce viewer page for spatial dataset. Page loads
    self-hosted Vitessce bundle from static directory, which reads config JSON
    named by `config` query parameter (URL served by /spatial-data route) from
    browser's location.

    Config is checked here so broken link fails with 404 before browser fetches
    21 MB bundle. Check is not exhaustive: config can exist yet name missing
    zarr store, which only viewer sees, so page keeps own error state too.

    Returns:
    --------
    flask.Response
      Rendered viewer HTML page.

    Raises:
    -------
    CacheException
      If `config` is missing, is not served by /spatial-data, or names dataset
      absent from spatial data directory.
    """
    # Prefix matches dataset_metadata_loader, which writes these URLs
    prefix = '/spatial-data/'
    config_url = request.args.get('config', '')
    if not config_url:
        raise CacheException(
            'No spatial dataset was requested. Open one from the dataset '
            'catalogue.',
            400,
            context='spatial',
        )
    if not config_url.startswith(prefix):
        raise CacheException(
            'This viewer can only open spatial datasets hosted by this '
            'gateway.',
            400,
            context='spatial',
        )
    subpath = config_url[len(prefix) :]

    # Unset with only bucket configured is valid setup, no spatial data on disk
    data_dir = env.cellxgene_data
    # safe_join returns None on traversal, same guard send_from_directory uses
    full_path = None if data_dir is None else safe_join(data_dir, subpath)
    if full_path is None or not os.path.isfile(full_path):
        # Report dataset name rather than config file serving it
        dataset_name = subpath.removesuffix('.vitessce.json')
        raise CacheException(
            f"Spatial dataset '{dataset_name}' is not available on this "
            'server. It may have been moved or renamed.',
            404,
            context='spatial',
            filename=subpath,
        )

    # Nothing is launched server-side, so start time is when page was handed
    # over. tz-aware so offset matches single-cell loading page
    return render_template(
        'spatial_viewer.html',
        extra_scripts=get_extra_scripts(),
        launchtime=datetime.now(timezone.utc).astimezone(),
    )


def start_pruner_thread():
    """
    Start background thread that prunes expired cellxgene processes.

    Thread is started as a daemon so it does not block interpreter shutdown when
    main thread exits (e.g. on Ctrl-C). This avoids "Exception ignored in:
    <module 'threading'...>" at exit.

    Returns:
    --------
    None
    """

    pruner = PruneProcessCache(cache)
    background_thread = Thread(target=pruner, daemon=True)
    # daemon=True ensures pruner thread does not block interpreter shutdown.
    background_thread.start()


def launch():
    """
    Record launchtime and run Flask dev server.

    Returns:
    --------
    None
    """

    app.extensions.setdefault('cellxgene_gateway', {})['launchtime'] = (
        current_time_stamp()
    )
    app.run(
        host='0.0.0.0',
        port=env.gateway_port,
        debug=False,
        request_handler=CustomRequestHandler,
    )


app.extensions.setdefault('cellxgene_gateway', {})['launchtime'] = None


def main():
    """
    Configure logging and item sources, then launch gateway.

    Parameters:
    -----------
    None

    Returns:
    --------
    None
    """

    logging.basicConfig(
        level=env.log_level,
        format='[%(asctime)s]  %(name)8s  %(levelname)-8s  %(message)s',
        datefmt='%Y.%m.%d - %H:%M:%S',
    )
    launch()


# App execution
if __name__ == '__main__':
    main()
