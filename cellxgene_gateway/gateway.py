# Copyright 2019 Novartis Institutes for BioMedical Research Inc. Licensed
# under the Apache License, Version 2.0 (the "License"); you may not use
# this file except in compliance with the License. You may obtain a copy
# of the License at http://www.apache.org/licenses/LICENSE-2.0. Unless
# required by applicable law or agreed to in writing, software distributed
# under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES
# OR CONDITIONS OF ANY KIND, either express or implied. See the License for
# the specific language governing permissions and limitations under the License.
# import BaseHTTPServer
import json
import logging
import os
import urllib.parse
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
from cellxgene_gateway.util import current_time_stamp, CustomRequestHandler

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
                    initialise_data_sources()

                    env.validate()
                    if not item_sources or not len(item_sources):
                        raise Exception(
                            'No data sources specified for Cellxgene Gateway'
                        )

                    global default_item_source
                    if default_item_source is None:
                        default_item_source = item_sources[0]

                    data_sources_initialized = True
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

    logging.basicConfig(
        level=env.log_level,
        format='%(asctime)s:%(name)s:%(levelname)s:%(message)s',
    )
    logger = logging.getLogger(__name__)

    cellxgene_data = os.environ.get('CELLXGENE_DATA', None)
    cellxgene_bucket = os.environ.get('CELLXGENE_BUCKET', None)

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
        raise Exception('Please specify CELLXGENE_DATA or CELLXGENE_BUCKET')
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

    loaded = [e for e in cache.entry_list if e.status == CacheEntryStatus.loaded]
    if not loaded:
        raise CacheException('No running cellxgene instance to serve static assets', 503)
    port = loaded[0].port
    from requests import get as requests_get
    resp = requests_get(f'http://127.0.0.1:{port}/static/{path}')
    return make_response(resp.content, resp.status_code, {'Content-Type': resp.headers.get('Content-Type', 'application/octet-stream')})


@app.route('/')
def homepage():
    """
    Render application home page.

    Returns:
    --------
    flask.Response
      Rendered HTML page for homepage.
    """

    return render_template(
        'homepage.html',
        ip=env.ip,
        cellxgene_data=env.cellxgene_data,
        extra_scripts=get_extra_scripts(),
    )


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
    data_dir = os.environ.get('CELLXGENE_DATA', 'cellxgene_data')
    tsv_path = os.environ.get('DATASET_METADATA_TSV', 'datasets.tsv')

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
            if hi_active and v > hi:
                return False
            return True

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
                    ds.get('experiment_name', ''),
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
        raise Exception(f'Could not find matching item source {source_name}')
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

    return json.dumps(
        {
            'launchtime': app.extensions.get('cellxgene_gateway', {}).get(
                'launchtime'
            ),
            'entry_list': [map_entry(entry) for entry in cache.entry_list],
        }
    )


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


@app.route('/metadata/ip_address', methods=['GET'])
def ip_address():
    """
    Return configured gateway IP address as a plain-text response.

    Returns:
    --------
    flask.Response
      Plain-text response containing IP address with no-cache headers.
    """

    resp = make_response(env.ip)
    return set_no_cache(resp)


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

    # Get data directory path
    data_dir = env.cellxgene_data

    # Check if file exists
    file_path = os.path.join(data_dir, filename)
    if not os.path.exists(file_path):
        raise CacheException(
            f"Dataset file '{filename}' was not found on the server.",
            404,
            context='download',
            filename=filename,
        )

    # Serve the file
    return send_from_directory(
        data_dir,
        filename,
        as_attachment=True,
        mimetype='application/octet-stream',
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
    Start pruner thread, record launchtime, and run Flask dev server.

    Returns:
    --------
    None
    """

    start_pruner_thread()

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
