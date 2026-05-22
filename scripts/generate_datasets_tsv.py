"""
Script to generate datasets.tsv from .h5ad files in a directory.

Usage:
    python scripts/generate_datasets_tsv.py \
        --data-dir cellxgene_data/ \
        --output datasets.tsv
"""


# Import utility modules
import argparse
import csv
import os
import re


# Define columns for output TSV file
TSV_COLUMNS = [
    'dataset_id',
    'name',
    'description',
    'file_path',
    'assay',
    'disease',
    'tissue',
    'sex',
    'patients',
    'cell_count',
    'gene_count',
    'year',
    'authors',
    'journal',
    'doi',
]


# Function to extract year from date string using regex
def extract_year(date_str):
    """
    Extract 4-digit year from date string.

    Parameters:
    -----------
    date_str: str
      Date string potentially containing a year.

    Returns:
    --------
    year: str
      4-digit year string, or empty string if none found.
    """
    if not date_str:
        return ''
    match = re.search(r'\b(19|20)\d{2}\b', str(date_str))

    return match.group(0) if match else ''


# Function to read field from uns dict
def read_uns_field(uns, key):
    """
    Safely read field from AnnData uns dict, handling lists/arrays. Always
    returns semicolon-separated string to keep TSV consistent.

    Parameters:
    -----------
    uns: dict
      AnnData uns dictionary.
    key: str
      Key to retrieve.

    Returns:
    --------
    value: str
      Semicolon-separated string of values, or empty string if missing.
    """
    val = uns.get(key, '')
    if val is None:
        return ''
    if hasattr(val, 'tolist'):
        val = val.tolist()
    if isinstance(val, list):
        return '; '.join(str(v).strip() for v in val)
    # Normalize comma-separated strings (from uns metadata) to semicolons
    text = str(val).strip()
    if ', ' in text and ';' not in text:
        return '; '.join(v.strip() for v in text.split(', '))

    return text


# Function to sort semicolon-separated field
def sort_semicolon_field(value, fixed_order=None):
    """
    Sort semicolon-separated field alphabetically, with NA values last.

    Parameters:
    -----------
    value: str
      Semicolon-separated string.
    fixed_order: list or None
      If provided, sort tokens by their position in this list. Tokens not in
      the list sort alphabetically after those that are.

    Returns:
    --------
    sorted_value: str
      Re-joined semicolon-separated string with NAs last, or empty string if
      all tokens were NA/empty.
    """
    if not value:
        return ''
    tokens = [t.strip() for t in value.split(';') if t.strip()]
    if not tokens:
        return ''

    NA_VALUES = {'na', 'n/a', 'nan', 'none'}

    def sort_key(token):
        token_lower = token.lower()
        is_na = token_lower in NA_VALUES
        if fixed_order is not None:
            try:
                pos = [f.lower() for f in fixed_order].index(token_lower)
            except ValueError:
                pos = len(fixed_order)
            return (1 if is_na else 0, pos, token_lower)
        return (1 if is_na else 0, token_lower)

    tokens.sort(key=sort_key)

    return '; '.join(tokens)


# Function to strip specific tokens from semicolon-separated field
def strip_tokens(value, to_strip):
    """
    Remove specific tokens (case-insensitive) from semicolon-separated field.

    Parameters:
    -----------
    value: str
      Semicolon-separated string.
    to_strip: set of str
      Token values to remove (compared case-insensitively).

    Returns:
    --------
    cleaned: str
      Re-joined semicolon-separated string with the tokens removed, or empty
      string if all tokens were removed.
    """
    if not value:
        return ''
    to_strip_lower = {v.lower() for v in to_strip}
    tokens = [
        t.strip()
        for t in value.split(';')
        if t.strip() and t.strip().lower() not in to_strip_lower
    ]

    return '; '.join(tokens)


# Function to extract metadata from .h5ad file's uns dict
def extract_h5ad_metadata(h5ad_path):
    """
    Extract dataset metadata from an .h5ad file's uns dict.

    Parameters:
    -----------
    h5ad_path: str
      Absolute path to the .h5ad file.

    Returns:
    --------
    meta: dict
      Dictionary with keys: dataset_id, name, description, assay, disease,
      tissue, sex, patients, cell_count, gene_count, year, authors, journal,
      doi. All values are strings.
    """
    filename_stem = os.path.splitext(os.path.basename(h5ad_path))[0]

    empty = {
        'dataset_id': '',
        'name': filename_stem,
        'description': '',
        'assay': '',
        'disease': '',
        'tissue': '',
        'sex': '',
        'patients': '',
        'cell_count': '',
        'gene_count': '',
        'year': '',
        'authors': '',
        'journal': '',
        'doi': '',
    }

    if not os.path.exists(h5ad_path):
        return empty

    try:
        import anndata

        adata = anndata.read_h5ad(h5ad_path, backed='r')
        uns = adata.uns

        meta = {
            'dataset_id': read_uns_field(uns, 'dataset_name_short'),
            'name': read_uns_field(uns, 'dataset_name') or filename_stem,
            'description': read_uns_field(uns, 'article_title'),
            'assay': read_uns_field(uns, 'assay'),
            'disease': read_uns_field(uns, 'disease'),
            'tissue': read_uns_field(uns, 'tissue'),
            'sex': read_uns_field(uns, 'sex'),
            'patients': read_uns_field(uns, 'patients'),
            'cell_count': read_uns_field(uns, 'cell_count'),
            'gene_count': read_uns_field(uns, 'gene_count'),
            'year': extract_year(read_uns_field(uns, 'article_date')),
            'authors': read_uns_field(uns, 'article_authors'),
            'journal': read_uns_field(uns, 'article_journal'),
            'doi': read_uns_field(uns, 'article_doi'),
        }

        adata.file.close()
        return meta

    except Exception as e:
        print(f'  Warning: could not read {h5ad_path}: {e}')
        return empty


# Function to recursively find all .h5ad files in directory
def find_h5ad_files(data_dir):
    """
    Recursively find all .h5ad files under data_dir.

    Parameters:
    -----------
    data_dir: str
      Root directory to search.

    Returns:
    --------
    file_paths: list of str
      Relative paths (relative to data_dir) of all .h5ad files found, sorted.
    """
    found = []
    for dirpath, _dirnames, filenames in os.walk(data_dir):
        for fname in filenames:
            if fname.endswith('.h5ad'):
                full = os.path.join(dirpath, fname)
                found.append(os.path.relpath(full, data_dir))

    return sorted(found)


# Function to generate datasets.tsv summary of .h5ad files
def generate_tsv(data_dir, output_path):
    """
    Generate datasets.tsv by scanning data_dir for .h5ad files.

    Parameters:
    -----------
    data_dir: str
      Directory containing .h5ad files (searched recursively).
    output_path: str
      Path for the output .tsv file.
    """
    rows = []

    file_paths = find_h5ad_files(data_dir)
    if not file_paths:
        print(f'No .h5ad files found in {data_dir}')
        return

    for file_path in file_paths:
        h5ad_path = os.path.join(data_dir, file_path)
        print(f'Processing: {file_path}')
        meta = extract_h5ad_metadata(h5ad_path)

        # Strip Healthy from disease; strip NA from tissue and sex
        meta['disease'] = sort_semicolon_field(
            strip_tokens(meta['disease'], {'healthy'})
        )
        meta['tissue'] = sort_semicolon_field(
            strip_tokens(meta['tissue'], {'na', 'n/a', 'nan', 'none'})
        )
        meta['sex'] = sort_semicolon_field(
            strip_tokens(meta['sex'], {'na', 'n/a', 'nan', 'none'}),
            fixed_order=['female', 'male'],
        )

        out_row = {'file_path': file_path, **meta}
        rows.append(out_row)

    with open(output_path, 'w', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=TSV_COLUMNS, delimiter='\t')
        writer.writeheader()
        writer.writerows(rows)

    print(f'\nWrote {len(rows)} rows to {output_path}')


# Main function to parse arguments and create TSV
def main():
    """
    Function to parse arguments and run TSV generation.
    """
    parser = argparse.ArgumentParser(
        description='Generate datasets.tsv from .h5ad files in a directory.'
    )
    parser.add_argument(
        '--data-dir',
        default=os.environ.get('CELLXGENE_DATA', 'cellxgene_data'),
        help='Directory containing .h5ad files (default: $CELLXGENE_DATA or cellxgene_data)',
    )
    parser.add_argument(
        '--output',
        default='datasets.tsv',
        help='Output path for datasets.tsv (default: datasets.tsv)',
    )
    args = parser.parse_args()

    generate_tsv(args.data_dir, args.output)


# Main script entry point
if __name__ == '__main__':
    main()
