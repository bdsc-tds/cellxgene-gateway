"""
Script to generate Vitessce view-config JSON for SpatialData .zarr store.

Config references store through gateway's Zarr-serving route (default
/spatial-data/<name>), so URLs are relative and resolve same-origin when viewer
page is served by gateway.

Run in `spatial` conda env, which holds both spatialdata (for conversion) and
vitessce (for this script).

Usage:
    python data_prep/generate_spatial_config.py \
        --zarr data/xenium_D1903482.zarr \
        --serve-base /spatial-data \
        --out data/xenium_D1903482.vitessce.json
"""

# Import utility modules
import argparse
import json
import os

from vitessce import SpatialDataWrapper, VitessceConfig

# Bitmask label images and polygon shapes are both valid segmentations, but
# polygons avoid rasterising full-resolution mask during conversion
SEGMENTATION_GROUPS = ['labels', 'shapes']

# Display names for obsm keys conventionally used for embeddings
EMBEDDING_NAMES = {'X_umap': 'UMAP', 'X_pca': 'PCA', 'X_tsne': 't-SNE'}

# obs columns that describe cells rather than annotate them
NON_SET_OBS_COLS = {
    'cell_id',
    'region',
    'z_level',
    'segmentation_method',
    'transcript_counts',
    'control_probe_counts',
    'genomic_control_counts',
    'control_codeword_counts',
    'unassigned_codeword_counts',
    'deprecated_codeword_counts',
    'total_counts',
    'cell_area',
    'nucleus_area',
    'nucleus_count',
}


# Function to list child element names of zarr group directory
def list_group_members(group_dir):
    """
    List element names inside SpatialData zarr group directory.

    Parameters:
    -----------
    group_dir: str
      Path to group directory within store (e.g. <store>/images).

    Returns:
    --------
    members: list of str
      Sorted names of child elements, excluding zarr bookkeeping entries.
    """
    if not os.path.isdir(group_dir):
        return []
    skip = {'zarr.json', '.zgroup', '.zattrs', '.zmetadata', 'zmetadata'}

    return sorted(name for name in os.listdir(group_dir) if name not in skip)


# Function to read SpatialData coordinate-system name of an element
def read_coordinate_system(element_dir):
    """
    Read output coordinate-system name of SpatialData zarr element.

    Name is taken from element's NGFF coordinateTransformations (output.name),
    which SpatialData sets to coordinate system element lives in (e.g. a
    per-sample or 'global' system).

    Name comes from element's NGFF coordinateTransformations (output.name),
    which SpatialData sets to element's coordinate system (e.g. per-sample or
    "global").

    Parameters:
    -----------
    element_dir: str
      Path to element directory within store (holds a zarr.json).

    Returns:
    --------
    name: str or None
      Coordinate-system name, or None if it could not be determined.
    """
    meta_path = os.path.join(element_dir, 'zarr.json')
    if not os.path.isfile(meta_path):
        return None
    with open(meta_path) as handle:
        attrs = json.load(handle).get('attributes', {})

    # Shapes/points store transformations at top level; images nest them under
    # ome/multiscales metadata
    transforms = attrs.get('coordinateTransformations')
    if not transforms:
        multiscales = attrs.get('ome', {}).get('multiscales', [])
        if multiscales:
            transforms = multiscales[0].get('coordinateTransformations')
    if not transforms:
        return None

    return transforms[0].get('output', {}).get('name')


# Function to auto-detect element paths of a spatial store
def detect_elements(zarr_path, image=None, segmentations=None):
    """
    Pick image, segmentation and table element paths from store.

    Parameters:
    -----------
    zarr_path: str
      Path to SpatialData .zarr store on disk.
    image: str or None
      Image element name to use; first one found when None.
    segmentations: str or None
      Segmentation element name; first labels or shapes element when None.

    Returns:
    --------
    paths: dict
      Keys 'image_path', 'obs_segmentations_path', 'table_path',
      'obs_points_path' and 'coordinate_system'.
    """
    images = list_group_members(os.path.join(zarr_path, 'images'))
    tables = list_group_members(os.path.join(zarr_path, 'tables'))
    points = list_group_members(os.path.join(zarr_path, 'points'))

    if not images:
        raise ValueError(f'No image elements found in {zarr_path}/images')
    if not tables:
        raise ValueError(f'No table elements found in {zarr_path}/tables')

    image = image or images[0]

    # Prefer segmentation representation currently held by store
    seg_path = None
    for group in SEGMENTATION_GROUPS:
        members = list_group_members(os.path.join(zarr_path, group))
        if not members:
            continue
        name = segmentations or members[0]
        if name in members:
            seg_path = f'{group}/{name}'
            break
    if seg_path is None:
        raise ValueError(f'No labels or shapes elements found in {zarr_path}')

    # SpatialData convention places annotation table at tables/table
    table_name = 'table' if 'table' in tables else tables[0]

    coordinate_system = (
        read_coordinate_system(os.path.join(zarr_path, *seg_path.split('/')))
        or read_coordinate_system(os.path.join(zarr_path, 'images', image))
        or 'global'
    )

    table_dir = os.path.join(zarr_path, 'tables', table_name)

    return {
        'image_path': f'images/{image}',
        'obs_segmentations_path': seg_path,
        'table_path': f'tables/{table_name}',
        'obs_points_path': f'points/{points[0]}' if points else None,
        'coordinate_system': coordinate_system,
        'obs_set_cols': [
            name
            for name in list_group_members(os.path.join(table_dir, 'obs'))
            if name not in NON_SET_OBS_COLS and not name.startswith('_')
        ],
        # 'spatial' holds centroids, not an embedding; spatial view covers it
        'obs_embeddings': [
            name
            for name in list_group_members(os.path.join(table_dir, 'obsm'))
            if name != 'spatial'
        ],
    }


# Function to build and write Vitessce config for SpatialData store
def generate_config(
    zarr_path,
    serve_base,
    out_path,
    image=None,
    segmentations=None,
    obs_type='cell',
):
    """
    Build Vitessce view-config for SpatialData store and write it to disk.

    Layout mirrors reference Vitessce demos: spatial view with its layer
    controller on left, and scatterplot, cell sets, expression heatmap and gene
    list alongside: https://vitessce.io/#?dataset=codeluppi-2018

    Parameters:
    -----------
    zarr_path: str
      Path to SpatialData .zarr store on disk.
    serve_base: str
      URL prefix under which store is served (e.g. /spatial-data).
    out_path: str
      Destination path for generated config JSON.
    image: str or None
      Image element override passed to detection.
    segmentations: str or None
      Segmentation element override passed to detection.
    obs_type: str
      Label used for observations throughout views.

    Returns:
    --------
    out_path: str
      Path config JSON was written to.
    """
    name = os.path.basename(os.path.normpath(zarr_path))
    sdata_url = f'{serve_base.rstrip("/")}/{name}'
    paths = detect_elements(zarr_path, image=image, segmentations=segmentations)

    table_path = paths['table_path']
    region = paths['obs_segmentations_path'].split('/')[-1]

    vc = VitessceConfig(schema_version='1.0.17', name=name)
    wrapper = SpatialDataWrapper(
        sdata_url=sdata_url,
        image_path=paths['image_path'],
        obs_segmentations_path=paths['obs_segmentations_path'],
        obs_points_path=paths['obs_points_path'],
        table_path=table_path,
        coordinate_system=paths['coordinate_system'],
        # Table-derived views are inherited from AnnDataWrapper, so their paths
        # are given relative to store rather than to table
        obs_feature_matrix_path=f'{table_path}/X',
        obs_set_paths=[f'{table_path}/obs/{c}' for c in paths['obs_set_cols']],
        obs_set_names=[
            c.replace('_', ' ').title() for c in paths['obs_set_cols']
        ],
        obs_embedding_paths=[
            f'{table_path}/obsm/{e}' for e in paths['obs_embeddings']
        ],
        obs_embedding_names=[
            EMBEDDING_NAMES.get(e, e) for e in paths['obs_embeddings']
        ],
        region=region,
        coordination_values={'obsType': obs_type},
    )
    dataset = vc.add_dataset(name=name).add_object(wrapper)

    spatial = vc.add_view('spatialBeta', dataset=dataset)
    controller = vc.add_view('layerControllerBeta', dataset=dataset)
    scatterplot = vc.add_view('scatterplot', dataset=dataset, mapping='UMAP')
    obs_sets = vc.add_view('obsSets', dataset=dataset)
    heatmap = vc.add_view('heatmap', dataset=dataset)
    feature_list = vc.add_view('featureList', dataset=dataset)

    # Every view shares one obsType, or they will not select each other's cells
    vc.link_views(
        [spatial, controller, scatterplot, obs_sets, heatmap, feature_list],
        ['obsType'],
        [obs_type],
    )
    vc.layout(
        (spatial | controller)
        / (scatterplot | obs_sets)
        / (heatmap | feature_list)
    )

    with open(out_path, 'w') as handle:
        json.dump(vc.to_dict(), handle, indent=2)

    print(
        f'Wrote {out_path} (image={paths["image_path"]}, '
        f'segmentations={paths["obs_segmentations_path"]}, '
        f'points={paths["obs_points_path"]}, '
        f'coordinate_system={paths["coordinate_system"]})'
    )

    return out_path


# Function to parse command-line arguments
def parse_args():
    """
    Parse command-line arguments for spatial config generation.

    Returns:
    --------
    args: argparse.Namespace
      Parsed arguments (zarr, serve_base, out, image, segmentations, obs_type).
    """
    parser = argparse.ArgumentParser(
        description='Generate a Vitessce config JSON for a SpatialData store.'
    )
    parser.add_argument(
        '--zarr', required=True, help='Path to SpatialData .zarr store.'
    )
    parser.add_argument(
        '--serve-base',
        default='/spatial-data',
        help='URL prefix under which store is served by gateway.',
    )
    parser.add_argument(
        '--out',
        default=None,
        help='Output config path (default: <store>.vitessce.json).',
    )
    parser.add_argument(
        '--image', default=None, help='Image element name override.'
    )
    parser.add_argument(
        '--segmentations',
        default=None,
        help='Labels or shapes element name override.',
    )
    parser.add_argument(
        '--obs-type',
        default='cell',
        help='Observation label used across views (default: cell).',
    )

    return parser.parse_args()


if __name__ == '__main__':
    args = parse_args()
    zarr_path = os.path.normpath(args.zarr)
    out = args.out or (os.path.splitext(zarr_path)[0] + '.vitessce.json')
    generate_config(
        zarr_path,
        args.serve_base,
        out,
        image=args.image,
        segmentations=args.segmentations,
        obs_type=args.obs_type,
    )
