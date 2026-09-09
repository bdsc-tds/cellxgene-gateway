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
        --out data/vitessce_configs/xenium_D1903482.vitessce.json
"""

# Import utility modules
import argparse
import json
import math
import os

from vitessce import CoordinationLevel as CL
from vitessce import (
    SpatialDataWrapper,
    VitessceConfig,
    get_initial_coordination_scope_prefix,
)

# Bitmask label images and polygon shapes are both valid segmentations, but
# polygons avoid rasterising full-resolution mask during conversion
SEGMENTATION_GROUPS = ['labels', 'shapes']

# Each config holds one dataset, so fixed uid is enough and keeps derived
# coordination scope names stable
DATASET_UID = 'A'

# Layer name in viewer comes from obsType, so transcripts need one of their own
POINT_OBS_TYPE = 'transcript'

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


# Function to read pixel dimensions of multiscale image element
def read_image_shape(image_dir):
    """
    Read (width, height) of image element's full-resolution level.

    Parameters:
    -----------
    image_dir: str
      Path to image element directory within store.

    Returns:
    --------
    shape: tuple of int or None
      (width, height) in pixels, or None if it could not be determined.
    """
    meta_path = os.path.join(image_dir, 'zarr.json')
    if not os.path.isfile(meta_path):
        return None
    with open(meta_path) as handle:
        attrs = json.load(handle).get('attributes', {})
    multiscales = attrs.get('ome', {}).get('multiscales', [])
    if not multiscales:
        return None

    level = multiscales[0]['datasets'][0]['path']
    level_meta = os.path.join(image_dir, level, 'zarr.json')
    if not os.path.isfile(level_meta):
        return None
    with open(level_meta) as handle:
        # Axes are cyx, so last two entries are height then width
        shape = json.load(handle).get('shape')

    return (shape[-1], shape[-2]) if shape and len(shape) >= 2 else None


# Function to compute zoom level that fits extent in viewport
def fit_zoom(image_shape, viewport=(800, 450)):
    """
    Compute Vitessce zoom level that fits image in spatial view.

    Vitessce renders one world unit per 2**zoom screen pixels and opens on
    default zoom which leaves images too small, so fitting it here frames
    dataset automatically.

    Parameters:
    -----------
    image_shape: tuple of int or None
      (width, height) of image in pixels.
    viewport: tuple of int
      Approximate (width, height) of spatial view in screen pixels.

    Returns:
    --------
    zoom: float or None
      Zoom level, or None when image size is unknown.
    """
    if not image_shape:
        return None

    return math.log2(
        min(viewport[0] / image_shape[0], viewport[1] / image_shape[1])
    )


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
      Keys 'image_shape', 'image_path', 'obs_segmentations_path',
      'other_segmentation_paths', 'table_path', 'obs_points_path',
      'coordinate_system', 'obs_set_cols' and 'obs_embeddings'.
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
    other_seg_paths = []
    for group in SEGMENTATION_GROUPS:
        members = list_group_members(os.path.join(zarr_path, group))
        if not members:
            continue
        name = segmentations or members[0]
        if name in members:
            seg_path = f'{group}/{name}'
            # Nuclei and any further segmentation become their own layers, each
            # needing separate file def since one file def carries one path
            other_seg_paths = [
                f'{group}/{other}' for other in members if other != name
            ]
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
        'image_shape': read_image_shape(
            os.path.join(zarr_path, 'images', image)
        ),
        'image_path': f'images/{image}',
        'obs_segmentations_path': seg_path,
        'other_segmentation_paths': other_seg_paths,
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


# Function to unbind extra segmentations from cells' annotation table
def drop_extra_segmentation_table_paths(config, extra_file_uids):
    """
    Strip tablePath from file defs of segmentations that no table annotates.

    Loader prefers tablePath over element's own index when both exist, so extra
    segmentation inherits cells' obs index, mismatched in both ids and length.
    Dropping it makes loader read element's own parquet index instead.
    SpatialDataWrapper emits tablePath whether or not table_path is passed, so
    it can only be removed after config is built.

    Matching is on fileUid rather than obsType because extra segmentations
    share primary's obsType, so obsType cannot tell their file defs apart.

    Parameters:
    -----------
    config: dict
      Vitessce config, modified in place.
    extra_file_uids: list of str
      fileUid of each extra segmentation, identifying its file def.

    Returns:
    --------
    n_stripped: int
      Number of file defs whose tablePath was removed.
    """
    n_stripped = 0
    for dataset in config.get('datasets', []):
        for file_def in dataset.get('files', []):
            file_uid = file_def.get('coordinationValues', {}).get('fileUid')
            if file_uid not in extra_file_uids:
                continue
            options = file_def.get('options', {}).get('obsSegmentations', {})
            if options.pop('tablePath', None) is not None:
                n_stripped += 1

    return n_stripped


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
    # Segmentations get own file defs below: each needs own fileUid, and one
    # set here would apply to image and table views too, blanking image
    wrapper = SpatialDataWrapper(
        sdata_url=sdata_url,
        image_path=paths['image_path'],
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
        coordination_values={'obsType': obs_type},
    )
    # uid is fixed because layer scope names are derived from it, and viewer
    # skips its own auto-initialisation only when it finds those exact names
    dataset = vc.add_dataset(name=name, uid=DATASET_UID).add_object(wrapper)

    # Cells keep table so spatial view can colour them by set or gene
    primary_file_uid = region.replace('_boundaries', '')
    dataset.add_object(
        SpatialDataWrapper(
            sdata_url=sdata_url,
            obs_segmentations_path=paths['obs_segmentations_path'],
            table_path=table_path,
            coordinate_system=paths['coordinate_system'],
            region=region,
            coordination_values={
                'obsType': obs_type,
                'fileUid': primary_file_uid,
            },
        )
    )

    # Transcripts get their own file def and obsType. Sharing cells' file def
    # made viewer label point layer 'Cell', since layer name comes from obsType
    if paths['obs_points_path']:
        dataset.add_object(
            SpatialDataWrapper(
                sdata_url=sdata_url,
                obs_points_path=paths['obs_points_path'],
                # Kept so feature index resolves against gene names
                table_path=table_path,
                coordinate_system=paths['coordinate_system'],
                # Defaults resolve through spatialdata_attrs.feature_key, which
                # is fragile across re-parse; naming them keeps fast path from
                # silently degrading to whole-file fetch
                obs_points_feature_index_column='feature_name_codes',
                obs_points_morton_code_column='morton_code_2d',
                coordination_values={'obsType': POINT_OBS_TYPE},
            )
        )

    # Extra segmentations carry no table, so they get their own file def, but
    # they must keep views' obsType to render at all
    extra_file_uids = []
    for seg_path in paths['other_segmentation_paths']:
        extra_file_uid = seg_path.split('/')[-1].replace('_boundaries', '')
        extra_file_uids.append(extra_file_uid)
        dataset.add_object(
            SpatialDataWrapper(
                sdata_url=sdata_url,
                obs_segmentations_path=seg_path,
                coordinate_system=paths['coordinate_system'],
                # obsType must match views', or spatial view drops layer and
                # element loads but never renders; fileUid then tells
                # same-type file defs apart
                coordination_values={
                    'obsType': obs_type,
                    'fileUid': extra_file_uid,
                },
            )
        )

    spatial = vc.add_view('spatialBeta', dataset=dataset)
    controller = vc.add_view('layerControllerBeta', dataset=dataset)
    scatterplot = vc.add_view('scatterplot', dataset=dataset, mapping='UMAP')
    obs_sets = vc.add_view('obsSets', dataset=dataset)
    heatmap = vc.add_view('heatmap', dataset=dataset)
    # Genes on rows, cells on columns; prop undocumented but present in bundle
    heatmap.set_props(transpose=True)
    feature_list = vc.add_view('featureList', dataset=dataset)
    # Shift-click enables multi-gene selection with distinct transcript colours
    # Defaults false for single-select behavior and no deselection
    feature_list.set_props(enableMultiSelect=True)
    distribution = vc.add_view(
        'obsSetFeatureValueDistribution', dataset=dataset
    )
    description = vc.add_view('description', dataset=dataset)
    description.set_props(description=os.path.splitext(name)[0])
    status = vc.add_view('status', dataset=dataset)

    # Every view shares one obsType, or they will not select each other's cells
    vc.link_views(
        [
            spatial,
            controller,
            scatterplot,
            obs_sets,
            heatmap,
            feature_list,
            distribution,
        ],
        ['obsType'],
        [obs_type],
    )

    # Colour encoding and selections are shared scope objects rather than plain
    # values, so picking a gene or cell set elsewhere recolours spatial view too
    (
        color_encoding,
        feature_selection,
        obs_set_selection,
        obs_set_color,
        colormap_range,
    ) = vc.add_coordination(
        'obsColorEncoding',
        'featureSelection',
        'obsSetSelection',
        'obsSetColor',
        'featureValueColormapRange',
    )
    color_encoding.set_value('cellSetSelection')
    feature_selection.set_value(None)
    obs_set_selection.set_value(None)
    obs_set_color.set_value(None)
    colormap_range.set_value([0.0, 1.0])

    for view in (
        spatial,
        controller,
        scatterplot,
        obs_sets,
        heatmap,
        feature_list,
        distribution,
    ):
        view.use_coordination(
            color_encoding,
            feature_selection,
            obs_set_selection,
            obs_set_color,
            colormap_range,
        )

    # Cells are annotated, so their channel reuses shared selection scopes.
    # Extra segmentations have no table and only ever carry a fixed colour
    segmentation_layers = [
        {
            'obsType': obs_type,
            # Both segmentation layers share obsType, so every layer needs its
            # own fileUid; layer without one resolves to wrong file def
            'fileUid': primary_file_uid,
            'spatialLayerVisible': True,
            'spatialLayerOpacity': 1,
            'segmentationChannel': CL([
                {
                    'obsType': obs_type,
                    'spatialTargetC': 0,
                    'spatialChannelColor': [255, 255, 255],
                    'spatialChannelOpacity': 1,
                    'spatialChannelVisible': True,
                    'spatialSegmentationFilled': True,
                    'spatialSegmentationStrokeWidth': 1,
                    'obsColorEncoding': color_encoding,
                    'featureSelection': feature_selection,
                    'obsSetSelection': obs_set_selection,
                    'obsSetColor': obs_set_color,
                    'featureValueColormapRange': colormap_range,
                }
            ]),
        }
    ]
    # Extras appended last so they draw on top of filled cells; controller
    # lists layers reversed, so this also shows Nucleus above Cell
    segmentation_layers += [
        {
            'obsType': obs_type,
            'fileUid': extra_file_uid,
            # Controller's eye toggles channel, not layer, so disabled layer
            # could never be switched on from UI; off by default lives in
            # spatialChannelVisible below
            'spatialLayerVisible': True,
            'spatialLayerOpacity': 1,
            'segmentationChannel': CL([
                {
                    # Channel obsType only drives row label, capitalised by
                    # viewer; layer and file def must keep views' obsType. Cost
                    # is that spatial footer stops counting these segmentations
                    'obsType': extra_file_uid,
                    'spatialTargetC': 0,
                    # Deep blue (#00008B): mid blue is lost against bright DAPI
                    'spatialChannelColor': [0, 0, 139],
                    'spatialChannelOpacity': 1,
                    # Off by default: nuclei sit inside cells
                    'spatialChannelVisible': False,
                    # Filled, not outlined: stroke width is in world units, so
                    # 1-unit outline is ~0.01 screen px at default zoom
                    'spatialSegmentationFilled': True,
                    'spatialSegmentationStrokeWidth': 1,
                    'obsColorEncoding': 'spatialChannelColor',
                }
            ]),
        }
        for extra_file_uid in extra_file_uids
    ]

    # Image layer is left to viewer's own initialisation, which derives contrast
    # windows from pixel statistics that this script cannot compute without
    # reading pyramid
    vc.link_views_by_dict(
        [spatial, controller],
        {'segmentationLayer': CL(segmentation_layers)},
        scope_prefix=get_initial_coordination_scope_prefix(
            DATASET_UID, 'obsSegmentations'
        ),
    )

    # Transcripts are off by default: 13.5M points obscure everything beneath
    # and are only meaningful once genes are selected
    if paths['obs_points_path']:
        vc.link_views_by_dict(
            [spatial, controller],
            {
                'pointLayer': CL([
                    {
                        'obsType': POINT_OBS_TYPE,
                        'spatialLayerVisible': False,
                        # Half brightness: points are dense enough at full
                        # opacity to hide morphology image under them
                        'spatialLayerOpacity': 0.5,
                        # Distinct colour per gene rather than one flat colour
                        'obsColorEncoding': 'randomByFeature',
                        # Draw only genes picked in gene list, not all 13.5M
                        # detections. Checkbox in viewer sets this same string
                        'featureFilterMode': 'featureSelection',
                        'featureSelection': feature_selection,
                    }
                ])
            },
            scope_prefix=get_initial_coordination_scope_prefix(
                DATASET_UID, 'obsPoints'
            ),
        )

    # Channel names read horizontally, matching rest of controller. Only this
    # one property is set, so viewer still initialises channels and their
    # contrast windows itself
    vc.link_views_by_dict(
        [spatial, controller],
        {'imageLayer': CL([{'spatialChannelLabelsOrientation': 'horizontal'}])},
        scope_prefix=get_initial_coordination_scope_prefix(
            DATASET_UID, 'image'
        ),
    )

    # Vitessce otherwise opens zoomed too far out
    zoom = fit_zoom(paths['image_shape'])
    if zoom is not None:
        width, height = paths['image_shape']
        vc.link_views(
            [spatial, controller],
            ['spatialZoom', 'spatialTargetX', 'spatialTargetY'],
            [zoom, width / 2, height / 2],
        )

    # Explicit grid rather than vc.layout()'s row splitting, which only makes
    # equal-sized panels. Mirrors codeluppi-2018 reference layout: narrow left
    # sidebar, large spatial view, embedding and selectors right, plots below.
    # Scatterplot takes both embedding slots of reference, which shows t-SNE and
    # UMAP, because Xenium Ranger gives one embedding
    for view, (x, y, w, h) in (
        (description, (0, 0, 3, 1)),
        (controller, (0, 1, 3, 4)),
        (status, (0, 5, 3, 1)),
        (spatial, (3, 0, 4, 4)),
        (scatterplot, (7, 0, 3, 4)),
        (feature_list, (10, 0, 2, 2)),
        (obs_sets, (10, 2, 2, 2)),
        (heatmap, (3, 4, 5, 2)),
        (distribution, (8, 4, 4, 2)),
    ):
        view.set_xywh(x, y, w, h)

    config = vc.to_dict()
    drop_extra_segmentation_table_paths(config, extra_file_uids)

    os.makedirs(os.path.dirname(os.path.abspath(out_path)), exist_ok=True)
    with open(out_path, 'w') as handle:
        json.dump(config, handle, indent=2)

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
        help='Output config path (default: '
        '<store dir>/vitessce_configs/<store>.vitessce.json).',
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
    if args.out:
        out = args.out
    else:
        # Keep configs in own subfolder, separated from data stores
        stem = os.path.basename(os.path.splitext(zarr_path)[0])
        out = os.path.join(
            os.path.dirname(zarr_path),
            'vitessce_configs',
            stem + '.vitessce.json',
        )
    generate_config(
        zarr_path,
        args.serve_base,
        out,
        image=args.image,
        segmentations=args.segmentations,
        obs_type=args.obs_type,
    )
