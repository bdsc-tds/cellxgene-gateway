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
from spatialdata.models import TableModel

# Single-threaded: dask's default scheduler runs one task per core, and each
# task materialises an image chunk, so peak memory scales with core count
dask.config.set(scheduler='synchronous')

# Written one at a time, lightest first, so failure leaves partial store rather
# than losing everything. Shapes precede table because table annotates them by
# region name
ELEMENT_ORDER = [
    'cell_boundaries',
    'table',
    'cell_labels',
    'morphology_focus',
    'transcripts',
]


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


# Function to read Xenium bundle into SpatialData object
def read_xenium(xenium_dir, transcripts, cells_labels):
    """
    Read Xenium Ranger bundle, skipping elements not used by viewer.

    4 GB morphology MIP is always skipped in favour of multi-channel
    morphology_focus images, and nucleus elements are skipped because viewer
    segments on cells.

    Parameters:
    -----------
    xenium_dir: str
      Path to Xenium Ranger output directory.
    transcripts: bool
      Whether to include transcripts point cloud.
    cells_labels: bool
      Whether to rasterise cell segmentation masks. Polygon boundaries are
      preferred; this is fallback when viewer cannot render them.

    Returns:
    --------
    sdata: spatialdata.SpatialData
      Lazily loaded SpatialData object.
    """
    return spatialdata_io.xenium(
        xenium_dir,
        cells_boundaries=True,
        nucleus_boundaries=False,
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
def write_incrementally(source, out_path):
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

    Returns:
    --------
    None
    """
    # gen_elements yields (element_type, name, element)
    names = [name for _, name, _ in source.gen_elements()]
    ordered = [n for n in ELEMENT_ORDER if n in names]
    ordered += [n for n in names if n not in ordered]

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
    backed.write_consolidated_metadata()


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
        '--transcripts',
        action='store_true',
        help='Include the transcripts point cloud (large).',
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
    sdata = read_xenium(args.xenium_dir, args.transcripts, args.cells_labels)
    print(f'read in {time.time() - start:.1f}s', flush=True)
    print(sdata, flush=True)

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

    # Peak memory is reported so cap can be sized from real run
    write_incrementally(sdata, args.out)
    print(
        f'done in {time.time() - start:.1f}s, peak RSS '
        f'{peak_rss_gb():.2f} GB -> {args.out}',
        flush=True,
    )
