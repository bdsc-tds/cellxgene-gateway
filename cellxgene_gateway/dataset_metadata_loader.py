# Import utility modules
import csv
import logging
import os


# Set up logger for logging messages within this module
logger = logging.getLogger(__name__)


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

                # Check whether a QC folder exists for this dataset
                qc_base = os.environ.get('QC_DATA', 'analysis_qc')
                did = row.get('dataset_id', '')
                row['has_qc'] = bool(
                    did and os.path.isdir(os.path.join(qc_base, did))
                )

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

                datasets.append(row)

        print(f'Loaded {len(datasets)} datasets from {tsv_path}')
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
