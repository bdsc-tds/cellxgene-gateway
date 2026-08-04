"""
Script to convert Xenium Ranger output bundle into SpatialData .zarr store for
for Vitessce spatial viewer.

Memory is a binding constraint: full-resolution morphology image is
(4, 40866, 14354), so naive `SpatialData.write()` under dask's default threaded
scheduler exhausts a 16 GB workstation. This script forces a single-threaded
scheduler, small chunks, and writes one element at a time so peak usage stays
bounded and failure is partial rather than total.

Always run it under a cgroup memory cap so a runaway cannot take desktop down
with it:

Usage:
    systemd-run --user --scope -p MemoryMax=5G -p MemorySwapMax=0 \
        conda run -n spatial python data_prep/convert_xenium.py \
            --xenium-dir /path/to/xenium_output \
            --out data/xenium_sample.zarr
"""

# Import utility modules
import argparse
import os
import resource
import time

import dask
import pandas as pd
import spatialdata_io
from spatialdata import SpatialData
from spatialdata.models import PointsModel, TableModel
from spatialdata.transformations import get_transformation, set_transformation
from vitessce.data_utils import (
    sdata_morton_sort_points,
    sdata_points_modify_row_group_size,
)

# Single-threaded: dask's default scheduler runs one task per core, and each
# task materialises an image chunk, so peak memory scales with core count
dask.config.set(scheduler='synchronous')

# Written one at a time, lightest first, so failure leaves partial store rather
# than losing everything. Shapes precede table because table annotates them by
# region name
ELEMENT_ORDER = [
    'cell_boundaries',
    'nucleus_boundaries',
    'table',
    'cell_labels',
    'morphology_focus',
    'transcripts',
]

# Only columns viewer reads. Xenium carries nine more per transcript, and at
# 13.5M rows dropping them is what keeps sort and store affordable
TRANSCRIPT_COLUMNS = ['x', 'y', 'z', 'feature_name']

# Row group small enough that browser can fetch spatial tile as byte range
# instead of pulling whole file
TRANSCRIPT_ROW_GROUP_SIZE = 50_000


# Function to report peak resident memory of process
def peak_rss_gb():
    """
    Report peak resident set size of current process.

    Returns:
    --------
    peak: float
      Maximum resident set size reached so far, in gibibytes.
    """
    return resource.getrusage(resource.RUSAGE_SELF).ru_maxrss / 1024 / 1024


# Function to attach cell type labels to table
def add_cell_types(table, csv_path):
    """
    Attach externally curated cell type labels to SpatialData table.

    Cells missing from annotation file are labelled 'Unassigned' rather than
    left as NaN, since Vitessce's obsSets view cannot render missing values.

    Parameters:
    -----------
    table: anndata.AnnData
      Table element of SpatialData object, indexed by cell id.
    csv_path: str
      Path to .csv with 'cell_id' and 'group' columns.

    Returns:
    --------
    n_unassigned: int
      Number of cells without annotation.
    """
    types = pd.read_csv(csv_path).set_index('cell_id')['group']
    mapped = table.obs['cell_id'].map(types).fillna('Unassigned')
    table.obs['cell_type'] = pd.Categorical(mapped)

    return int((mapped == 'Unassigned').sum())


# Function to attach precomputed UMAP embedding to table
def add_umap(table, csv_path):
    """
    Attach Xenium Ranger UMAP projection to SpatialData table.

    Parameters:
    -----------
    table: anndata.AnnData
      Table element of SpatialData object, indexed by cell id.
    csv_path: str
      Path to Xenium Ranger's umap projection.csv ('Barcode', 'UMAP-1', 'UMAP-2').

    Returns:
    --------
    n_missing: int
      Number of cells with no embedding coordinates, filled with zeros.
    """
    umap = pd.read_csv(csv_path).set_index('Barcode')
    aligned = umap.reindex(table.obs['cell_id'])
    n_missing = int(aligned.isna().any(axis=1).sum())
    table.obsm['X_umap'] = aligned.fillna(0.0).to_numpy()

    return n_missing


# Function to make string columns readable by the viewer
def normalise_string_dtypes(table):
    """
    Rewrite pandas string-dtype columns as plain object columns.

    AnnData writes pandas `str` dtype as 'nullable-string-array', which is zarr
    group of mask and values arrays. Vitessce only reads plain 'string-array',
    so gene names and any string annotation stored like this load as empty and
    heatmap/gene list render nothing.

    Parameters:
    -----------
    table: anndata.AnnData
      Table element whose var index and obs columns are rewritten in place.

    Returns:
    --------
    converted: list of str
      Names of columns that were rewritten ('var index' for index).
    """
    converted = []
    if table.var.index.dtype != object:
        table.var.index = pd.Index(table.var.index.astype(object))
        converted.append('var index')
    for frame_name, frame in (('obs', table.obs), ('var', table.var)):
        for column in frame.columns:
            dtype = frame[column].dtype
            # Categoricals already write their categories as plain string-array,
            # and SpatialData requires region column to stay categorical
            if isinstance(dtype, pd.CategoricalDtype) or dtype == object:
                continue
            if pd.api.types.is_string_dtype(frame[column]):
                frame[column] = frame[column].astype(object)
                converted.append(f'{frame_name}/{column}')

    return converted


# Function to point table at segmentation element that was written
def retarget_table_region(sdata, region):
    """
    Repoint table's annotated region at element held by store.

    Xenium reader annotates table against 'cell_labels', but rasterised label
    pyramid is skipped when polygon boundaries are used. Vitessce joins table to
    segmentations through region name, so a dangling reference leaves every view
    unlinked.

    Parameters:
    -----------
    sdata: spatialdata.SpatialData
      Object whose table should be repointed.
    region: str
      Name of element annotated by table.

    Returns:
    --------
    None
    """
    table = sdata.tables['table']
    table.obs['region'] = pd.Categorical([region] * table.n_obs)
    TableModel.parse(
        table,
        region=region,
        region_key='region',
        instance_key='cell_id',
        overwrite_metadata=True,
    )


# Function to index nucleus polygons by cell they belong to
def reindex_nucleus_boundaries(sdata):
    """
    Replace nucleus boundaries' positional index with their cell id.

    Xenium reader leaves nuclei on meaningless integer range with cell id in
    ordinary column, so parquet records '__index_level_0__' as index column.
    Vitessce reads that metadata for its obs index whenever file def carries no
    tablePath, which is how extra segmentations are served, so ids there must
    mean something. Cells are already indexed by cell id, so this mirrors them.

    Index is deliberately left non-unique: cells carrying several nucleus
    polygons repeat their id, and dropping those polygons would lose real data.

    Parameters:
    -----------
    sdata: spatialdata.SpatialData
      Object whose 'nucleus_boundaries' element is reindexed in place.

    Returns:
    --------
    n_duplicated: int
      Number of nuclei whose cell id is shared with another nucleus.
    """
    nuclei = sdata.shapes['nucleus_boundaries']

    # Assigned in place: set_index returns new frame, losing transform in .attrs
    nuclei.index = pd.Index(nuclei['cell_id'])
    del nuclei['cell_id']

    return int(nuclei.index.duplicated().sum())


# Function to re-parse points element without losing its coordinate transform
def parse_points_keeping_transform(points, transformations):
    """
    Parse points element and restore coordinate transform afterwards.

    PointsModel.parse refuses transformations passed alongside an element that
    already carries one, and applies identity when none is given. Setting it
    after parsing sidesteps both, and identity here would place transcripts in
    microns while image and shapes are in pixels.

    Parameters:
    -----------
    points: dask.dataframe.DataFrame
      Points to parse.
    transformations: dict
      Coordinate-system name to transformation, as captured before parsing.

    Returns:
    --------
    parsed: dask.dataframe.DataFrame
      Parsed points element carrying original transform.
    """
    parsed = PointsModel.parse(points, feature_key='feature_name')
    set_transformation(parsed, transformations, set_all=True)

    return parsed


# Function to make transcripts spatially queryable by viewer
def prepare_transcripts(sdata, var_names):
    """
    Rewrite transcripts point cloud in form Vitessce can query by region.

    Viewer fetches points for visible rectangle only when store carries a
    Morton (Z-order) code per point and rows are sorted by it. It also needs
    integer index into table's var names per point, since it colours points by
    gene without reading gene strings. Dictionary-encoded columns must be
    rightmost, which is why columns are reordered last.

    Parameters:
    -----------
    sdata: spatialdata.SpatialData
      Object whose 'transcripts' element is rewritten in place.
    var_names: pandas.Index
      Gene names of annotating table, defining feature index per point.

    Returns:
    --------
    n_dropped: int
      Number of control-probe detections removed.
    """
    points = sdata.points['transcripts']

    # Captured because morton sort re-parses element without them, which would
    # silently reset micron-to-pixel scale to identity
    transformations = get_transformation(points, get_all=True)

    # Control probes are absent from var names, so they cannot carry feature
    # index; dropping beats writing them with sentinel code
    counts = points['is_gene'].value_counts().compute()
    n_dropped = int(counts.get(False, 0))
    points = points[points['is_gene']][TRANSCRIPT_COLUMNS]

    # Map through categories rather than per-row lookup: 13.5M string lookups
    # against list is minutes, this is one pass over ~500 categories
    points['feature_name'] = points['feature_name'].cat.as_known()
    lookup = pd.Series(
        [
            var_names.get_loc(name) if name in var_names else -1
            for name in points['feature_name'].cat.categories
        ],
        dtype='int32',
    )
    points['feature_name_codes'] = (
        points['feature_name']
        .cat.codes.map(lookup, meta=('feature_name_codes', 'int32'))
        .astype('int32')
    )

    sdata.points['transcripts'] = parse_points_keeping_transform(
        points, transformations
    )
    sdata_morton_sort_points(sdata, 'transcripts')

    # Reordered after sort because sort appends its own numeric columns
    sorted_points = sdata.points['transcripts']
    ordered = [
        name
        for name in sorted_points.columns
        if not isinstance(sorted_points[name].dtype, pd.CategoricalDtype)
    ]
    ordered += [name for name in sorted_points.columns if name not in ordered]
    sdata.points['transcripts'] = parse_points_keeping_transform(
        sorted_points[ordered], transformations
    )

    return n_dropped


# Function to read Xenium bundle into SpatialData object
def read_xenium(xenium_dir, transcripts, cells_labels, nucleus_boundaries):
    """
    Read Xenium Ranger bundle, skipping elements not used by viewer.

    4 GB morphology MIP is always skipped in favour of multi-channel
    morphology_focus images, and nucleus labels are skipped because nuclei are
    drawn from polygon boundaries.

    Parameters:
    -----------
    xenium_dir: str
      Path to Xenium Ranger output directory.
    transcripts: bool
      Whether to include transcripts point cloud.
    cells_labels: bool
      Whether to rasterise cell segmentation masks. Polygon boundaries are
      preferred; this is fallback when viewer cannot render them.
    nucleus_boundaries: bool
      Whether to include nucleus polygon boundaries as second segmentation.

    Returns:
    --------
    sdata: spatialdata.SpatialData
      Lazily loaded SpatialData object.
    """
    return spatialdata_io.xenium(
        xenium_dir,
        cells_boundaries=True,
        nucleus_boundaries=nucleus_boundaries,
        cells_labels=cells_labels,
        nucleus_labels=False,
        transcripts=transcripts,
        morphology_mip=False,
        morphology_focus=True,
        aligned_images=False,
        cells_table=True,
        n_jobs=1,
        image_models_kwargs={'chunks': (1, 2048, 2048)},
        labels_models_kwargs={'chunks': (2048, 2048)},
    )


# Function to write SpatialData object one element at a time
def write_incrementally(source, out_path, skip=()):
    """
    Write SpatialData store element by element, reporting peak memory.

    Writing whole object in one call materialises several large pyramids
    concurrently; writing per element bounds peak. Empty store is created first
    because write_element requires object to be backed.

    Parameters:
    -----------
    source: spatialdata.SpatialData
      Lazily loaded object whose elements are copied into store.
    out_path: str
      Destination .zarr store path.
    skip: tuple of str
      Element names to leave unwritten, for elements needing preparation that
      must happen after heavier elements have been written and released.

    Returns:
    --------
    backed: spatialdata.SpatialData
      Store-backed object, ready for further write_element calls.
    """
    # gen_elements yields (element_type, name, element)
    names = [name for _, name, _ in source.gen_elements()]
    ordered = [n for n in ELEMENT_ORDER if n in names]
    ordered += [n for n in names if n not in ordered]
    ordered = [n for n in ordered if n not in skip]

    # write_element only works on backed object, so establish store first
    backed = SpatialData()
    backed.write(out_path, overwrite=True)

    for name in ordered:
        start = time.time()
        backed[name] = source[name]
        backed.write_element(name, overwrite=True)
        print(
            f'  wrote {name} in {time.time() - start:.1f}s '
            f'(peak RSS {peak_rss_gb():.2f} GB)',
            flush=True,
        )

    return backed


# Function to parse command-line arguments
def parse_args():
    """
    Parse command-line arguments for Xenium conversion.

    Returns:
    --------
    args: argparse.Namespace
      Parsed arguments.
    """
    parser = argparse.ArgumentParser(
        description='Convert a Xenium bundle to a SpatialData .zarr store.'
    )
    parser.add_argument(
        '--xenium-dir', required=True, help='Xenium Ranger output directory.'
    )
    parser.add_argument(
        '--out', required=True, help='Destination .zarr store path.'
    )
    parser.add_argument(
        '--cell-types',
        default=None,
        help="Optional .csv with 'cell_id' and 'group' columns.",
    )
    parser.add_argument(
        '--no-transcripts',
        dest='transcripts',
        action='store_false',
        help='Skip the transcripts point cloud (much the slowest element).',
    )
    parser.add_argument(
        '--no-nucleus-boundaries',
        dest='nucleus_boundaries',
        action='store_false',
        help='Skip nucleus polygon boundaries.',
    )
    parser.add_argument(
        '--cells-labels',
        action='store_true',
        help='Rasterise cell masks instead of using polygon boundaries.',
    )

    return parser.parse_args()


if __name__ == '__main__':
    args = parse_args()

    # Fail before expensive read rather than on silently empty result
    if not os.path.isdir(args.xenium_dir):
        raise FileNotFoundError(
            f'Xenium directory {os.path.abspath(args.xenium_dir)} does not exist.'
        )

    # Elements are dask-backed, so cheap operation
    start = time.time()
    sdata = read_xenium(
        args.xenium_dir,
        args.transcripts,
        args.cells_labels,
        args.nucleus_boundaries,
    )
    print(f'read in {time.time() - start:.1f}s', flush=True)
    print(sdata, flush=True)

    if 'nucleus_boundaries' in sdata.shapes:
        n = reindex_nucleus_boundaries(sdata)
        print(f'nuclei reindexed by cell id ({n} duplicate ids)', flush=True)

    # Enrich table before writing it: store is written once, per element
    table = sdata.tables['table']
    if not args.cells_labels:
        retarget_table_region(sdata, 'cell_boundaries')
        print('table region repointed to cell_boundaries', flush=True)
    if args.cell_types:
        n = add_cell_types(table, args.cell_types)
        print(f'cell types attached ({n} cells unassigned)', flush=True)

    # Xenium Ranger's own UMAP, so viewer doesn't need another embedding
    umap_csv = os.path.join(
        args.xenium_dir,
        'analysis',
        'umap',
        'gene_expression_2_components',
        'projection.csv',
    )
    if os.path.isfile(umap_csv):
        n = add_umap(table, umap_csv)
        print(f'UMAP attached ({n} cells without coordinates)', flush=True)

    # Must run last, after every column the steps above may have added
    converted = normalise_string_dtypes(table)
    if converted:
        print(f'string dtypes normalised: {", ".join(converted)}', flush=True)

    # Peak memory is reported so cap can be sized from real run. Transcripts are
    # held back so their sort does not run alongside image pyramids
    backed = write_incrementally(sdata, args.out, skip=('transcripts',))

    if args.transcripts:
        step = time.time()
        n = prepare_transcripts(sdata, table.var.index)
        print(
            f'transcripts prepared in {time.time() - step:.1f}s '
            f'({n} control-probe detections dropped)',
            flush=True,
        )
        step = time.time()
        backed['transcripts'] = sdata['transcripts']
        backed.write_element('transcripts', overwrite=True)
        print(
            f'  wrote transcripts in {time.time() - step:.1f}s '
            f'(peak RSS {peak_rss_gb():.2f} GB)',
            flush=True,
        )
        sdata_points_modify_row_group_size(
            backed, 'transcripts', TRANSCRIPT_ROW_GROUP_SIZE
        )

    backed.write_consolidated_metadata()
    print(
        f'done in {time.time() - start:.1f}s, peak RSS '
        f'{peak_rss_gb():.2f} GB -> {args.out}',
        flush=True,
    )
