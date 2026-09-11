"""
Script to pre-build QC report thumbnails for every dataset.

Gateway builds thumbnails on demand, so first visit to freshly synced QC
folder would be slower than serving originals. Run this after each pipeline
sync.

Usage:
    python data_prep/build_qc_thumbnails.py \
        --qc-data analysis_qc/ \
        --cache analysis_qc_thumbs/
"""

# Import utility modules
import argparse
import os
import sys
import time


# Function to collect figures needing thumbnail
def find_figures(qc_data):
    """
    Walk QC tree and yield dataset id and relative path of each figure.

    Parameters:
    -----------
    qc_data: str
      Absolute path of QC root directory.

    Yields:
    -------
    (dataset_id, rel_path): tuple of str
      Dataset folder name and figure path relative to that folder.
    """
    for dataset_id in sorted(os.listdir(qc_data)):
        dataset_dir = os.path.join(qc_data, dataset_id)
        if not os.path.isdir(dataset_dir):
            continue
        for root, dirs, files in os.walk(dataset_dir):
            dirs.sort()
            for name in sorted(files):
                rel_path = os.path.relpath(
                    os.path.join(root, name), dataset_dir
                )
                yield dataset_id, rel_path


# Function to run thumbnail pre-build over whole QC tree
def main():
    """
    Parse arguments and build any missing or stale thumbnails.

    Parameters:
    -----------
    None

    Returns:
    --------
    None
    """
    parser = argparse.ArgumentParser(
        description='Pre-build QC report thumbnails.'
    )
    parser.add_argument(
        '--qc-data',
        default=os.environ.get('QC_DATA', 'analysis_qc'),
        help='QC root directory (default: $QC_DATA or analysis_qc).',
    )
    parser.add_argument(
        '--cache',
        default=os.environ.get('QC_THUMB_CACHE'),
        help='Thumbnail cache directory (default: <qc-data>_thumbs).',
    )
    args = parser.parse_args()

    # Set environment before importing gateway modules, which read it at import
    os.environ['QC_DATA'] = os.path.abspath(args.qc_data)
    if args.cache:
        os.environ['QC_THUMB_CACHE'] = os.path.abspath(args.cache)

    from cellxgene_gateway import env
    from cellxgene_gateway.qc_thumbnail import get_thumbnail, is_thumbnailable

    if not os.path.isdir(env.qc_data):
        sys.exit(f'QC directory not found: {env.qc_data}')

    print(f'QC data:   {env.qc_data}')
    print(f'Thumbnails: {env.qc_thumb_cache}')

    processed = skipped = failed = 0
    start = time.perf_counter()
    for dataset_id, rel_path in find_figures(env.qc_data):
        if not is_thumbnailable(rel_path):
            skipped += 1
            continue
        try:
            get_thumbnail(dataset_id, rel_path)
            processed += 1
        except OSError as exc:  # Keep going: one bad figure is not fatal
            failed += 1
            print(f'  failed: {dataset_id}/{rel_path}: {exc}')

    elapsed = time.perf_counter() - start
    print(
        f'Thumbnails ready {processed}, skipped {skipped}, failed {failed} '
        f'in {elapsed:.1f}s'
    )


if __name__ == '__main__':
    main()
