# Import utility modules
import csv
import logging
import os
import re


# Set up logger for logging messages within this module
logger = logging.getLogger(__name__)


# Function to extract experiment information from file path
def extract_experiment_info(file_path):
    """
    Extract experiment name and version from file path.

    Parameters:
    -----------
    file_path: str
      File path from which experiment information should be extracted. This
      should be a full path to a `.h5ad` file.

    Returns:
    --------
    (experiment_name, version, display_name): tuple
      Tuple containing 3 elements:
        - experiment_name (str or None): name of experiment
        - version (str or None): version of experiment. Returns "base" if no
        version is found
        - display_name (str): human-readable name for experiment, which
        includes experiment name and version. Returns original file path if no
        match is found

    Examples:
    ---------
    - qc_KNK_URT007_scRNA.TCR_jul25.h5ad -> ("URT007", None, "URT007")
    - qc_KNK_URT007_scRNA.TCR_jul25_v2.h5ad -> ("URT007", "v2", "URT007 v2")
    - qc_KNK_URT005_scRNA.CSP.TCR_dec24_v3.h5ad -> ("URT005", "v3", "URT005 v3")
    - qc_ACV02_all.h5ad -> ("ACV02", "all", "ACV02 All")
    - qc_ACV02_atac.pseudorna.h5ad -> ("ACV02", "atac", "ACV02 ATAC")
    """
    # Return early if file_path is empty or None
    if not file_path:
        return None, None, file_path

    # Remove .h5ad extension
    basename = file_path.replace('.h5ad', '')

    # Look for URT pattern (main experiments)
    urt_match = re.search(r'URT(\d+)', basename)
    if urt_match:
        experiment_num = urt_match.group(1)
        experiment_name = f'URT{experiment_num}'

        # Look for version pattern (_v\d+)
        version_match = re.search(r'_v(\d+)$', basename)
        if version_match:
            version = f'v{version_match.group(1)}'
            display_name = f'{experiment_name} {version}'
        else:
            version = 'base'
            display_name = experiment_name

        return experiment_name, version, display_name

    # Look for ACV pattern with specific subtypes
    acv_match = re.search(r'(ACV\d+)_(.+)$', basename)
    if acv_match:
        experiment_name = acv_match.group(1)
        subtype = acv_match.group(2)

        # Map common subtypes to readable names
        subtype_map = {'all': 'All', 'atac.pseudorna': 'ATAC', 'cd4': 'CD4'}
        version = subtype
        display_name = (
            f'{experiment_name} {subtype_map.get(subtype, subtype.title())}'
        )

        return experiment_name, version, display_name

    # Look for other patterns
    other_match = re.search(r'(ACV\d+)', basename)
    if other_match:
        experiment_name = other_match.group(1)
        # Check for version
        version_match = re.search(r'_v(\d+)$', basename)
        if version_match:
            version = f'v{version_match.group(1)}'
            display_name = f'{experiment_name} {version}'
        else:
            version = 'base'
            display_name = experiment_name
        return experiment_name, version, display_name

    # Fallback - no grouping
    return None, None, file_path


# Function to find annotation files for a given dataset file
def find_annotations_for_file(file_path, data_dir):
    """
    Find annotation files for a given dataset file.

    Parameters:
    -----------
    file_path: str
      Path to dataset file for which annotations are requested.

    data_dir: str
      Directory where dataset and annotation files are stored.

    Returns:
    --------
    (loadable_annotations, all_annotations): tuple
      Tuple containing 2 elements:
        - loadable_annotations (list): list of dictionaries for annotations that
        are loadable (excluding "gene_sets")
        - all_annotations (list): list of dictionaries for all annotation files
        available for download in .csv format
    """
    # Return early if file_path is empty or None
    if not file_path:
        return [], []

    full_file_path = os.path.join(data_dir, file_path)
    if not os.path.exists(full_file_path):
        return [], []

    # Look for annotation directory
    annotation_dir = full_file_path.replace('.h5ad', '_annotations')
    if not os.path.exists(annotation_dir):
        return [], []

    loadable_annotations = []
    all_annotations = []
    try:
        for item in os.listdir(annotation_dir):
            if item.endswith('.csv'):
                annotation_dict = {
                    'name': item.replace('.csv', ''),
                    'file': item,
                    'path': os.path.join(annotation_dir, item),
                }
                # Add to all_annotations for download
                all_annotations.append(annotation_dict)
                # Only add to loadable_annotations if no 'gene_sets'
                if 'gene_sets' not in item:
                    loadable_annotations.append(annotation_dict)
    except Exception:
        pass

    return loadable_annotations, all_annotations


# Function to load dataset metadata from .tsv file and group by experiment
def load_dataset_metadata_tsv(tsv_path, data_dir=None):
    """
    Load dataset metadata from .tsv file and group entries by experiment.

    Parameters:
    -----------
    tsv_path: str
      Path to dataset metadata .tsv file.

    data_dir: str or None
      Directory containing dataset files. If None, value is loaded from
      CELLXGENE_DATA environment variable (defaults to 'cellxgene_data').

    Returns:
    --------
    (datasets,
     sorted(assays),
     sorted(diseases),
     sorted(tissues),
     sorted(sexes),
     cell_count_range,
     gene_count_range,
     year_range
    ): tuple
      Tuple containing 8 elements:
        - datasets (list): list of grouped experiment dicts or individual rows
        - assays (list): sorted list of unique assay values
        - diseases (list): sorted list of unique disease values
        - tissues (list): sorted list of unique tissue values
        - sexes (list): sorted list of unique sex values
        - cell_count_range (tuple): (min, max) cell count across all datasets
        - gene_count_range (tuple): (min, max) gene count across all datasets
        - year_range (tuple): (min, max) year across all datasets
    """
    datasets = []
    experiment_groups = {}
    assays = set()
    diseases = set()
    tissues = set()
    sexes = set()
    cell_counts = []
    gene_counts = []
    years = []

    if data_dir is None:
        data_dir = os.environ.get('CELLXGENE_DATA', 'cellxgene_data')

    def _parse_multi(value):
        """Split a semicolon-separated field into individual stripped values."""
        if not value:
            return []
        return [v.strip() for v in value.split(';') if v.strip()]

    try:
        if not os.path.exists(tsv_path):
            print(
                f'Warning: .tsv file {tsv_path} not found. Using empty dataset list.'
            )
            return (datasets, [], [], [], [], (0, 0), (0, 0), (0, 0))

        with open(tsv_path, newline='') as tsvfile:
            reader = csv.DictReader(tsvfile, delimiter='\t')
            for row in reader:
                # Find annotations for this dataset
                loadable_annotations, all_annotations = (
                    find_annotations_for_file(
                        row.get('file_path', ''), data_dir
                    )
                )
                row['annotations'] = loadable_annotations
                row['all_annotations'] = all_annotations
                row['has_annotations'] = len(loadable_annotations) > 0

                # Compute file size in bytes
                fp = row.get('file_path', '')
                full_path = os.path.join(data_dir, fp) if fp else ''
                try:
                    row['file_size_bytes'] = (
                        os.path.getsize(full_path)
                        if full_path and os.path.exists(full_path)
                        else 0
                    )
                except OSError:
                    row['file_size_bytes'] = 0

                # Extract experiment information
                experiment_name, version, display_name = (
                    extract_experiment_info(row.get('file_path', ''))
                )
                row['experiment_name'] = experiment_name
                row['version'] = version
                row['display_name'] = display_name

                # Collect filter values from multi-value fields
                for val in _parse_multi(row.get('assay', '')):
                    assays.add(val)
                for val in _parse_multi(row.get('disease', '')):
                    diseases.add(val)
                for val in _parse_multi(row.get('tissue', '')):
                    tissues.add(val)
                for val in _parse_multi(row.get('sex', '')):
                    sexes.add(val)

                # Collect numeric ranges
                try:
                    cell_counts.append(int(row.get('cell_count', '') or 0))
                except (ValueError, TypeError):
                    pass
                try:
                    gene_counts.append(int(row.get('gene_count', '') or 0))
                except (ValueError, TypeError):
                    pass
                try:
                    years.append(int(row.get('year', '') or 0))
                except (ValueError, TypeError):
                    pass

                # Group by experiment if we have one
                if experiment_name:
                    if experiment_name not in experiment_groups:
                        experiment_groups[experiment_name] = {
                            'experiment_name': experiment_name,
                            'versions': [],
                            'assay': row.get('assay', ''),
                            'disease': row.get('disease', ''),
                            'tissue': row.get('tissue', ''),
                            'sex': row.get('sex', ''),
                            'cell_count': row.get('cell_count', ''),
                            'gene_count': row.get('gene_count', ''),
                            'year': row.get('year', ''),
                            'authors': row.get('authors', ''),
                            'journal': row.get('journal', ''),
                            'doi': row.get('doi', ''),
                            'description': row.get('description', ''),
                            'has_annotations': False,
                        }

                    experiment_groups[experiment_name]['versions'].append(row)

                    if row['has_annotations']:
                        experiment_groups[experiment_name][
                            'has_annotations'
                        ] = True
                else:
                    datasets.append(row)

        # Convert experiment groups to list and sort versions
        for group in experiment_groups.values():

            def sort_key(x):
                version = x['version'] or 'base'
                if version == 'base':
                    return (0, '')
                elif version.startswith('v'):
                    try:
                        return (1, int(version[1:]))
                    except Exception:
                        return (2, version)
                else:
                    return (3, version)

            group['versions'].sort(key=sort_key)
            datasets.append(group)

        print(f'Loaded {len(datasets)} datasets/groups from {tsv_path}')
    except Exception as e:
        print(f'Error loading .tsv {tsv_path}: {e}. Using empty dataset list.')

    # Calculate numeric ranges, ignoring zero values
    cell_counts_nz = [c for c in cell_counts if c > 0]
    gene_counts_nz = [g for g in gene_counts if g > 0]
    years_nz = [y for y in years if y > 0]
    cell_count_range = (
        (min(cell_counts_nz), max(cell_counts_nz)) if cell_counts_nz else (0, 0)
    )
    gene_count_range = (
        (min(gene_counts_nz), max(gene_counts_nz)) if gene_counts_nz else (0, 0)
    )
    year_range = (min(years_nz), max(years_nz)) if years_nz else (0, 0)

    return (
        datasets,
        sorted(assays),
        sorted(diseases),
        sorted(tissues),
        sorted(sexes),
        cell_count_range,
        gene_count_range,
        year_range,
    )
