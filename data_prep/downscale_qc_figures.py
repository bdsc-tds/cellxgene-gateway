"""
Script to rewrite QC figures at lower dpi, without rerunning pipeline.

Figures are exported at 600 dpi, print resolution carrying about 16x more
pixels than any screen can use. This resamples them to 150 dpi.

Output goes to separate tree, leaving originals untouched. Check result, then
swap trees yourself and re-run build_qc_thumbnails.py.

Usage:
    python data_prep/downscale_qc_figures.py \
        --qc-data analysis_qc/ \
        --output analysis_qc_150dpi/ \
        --dpi 150
"""

# Import utility modules
import argparse
import os
import shutil
import sys
import time

from PIL import Image

# Combined figures exceed Pillow's bomb threshold; these are local pipeline
# output, never uploads
Image.MAX_IMAGE_PIXELS = 400_000_000

# Output is written as JPEG, so only JPEG sources are resampled
JPEG_EXTENSIONS = ('.jpg', '.jpeg')


# Function to read dpi figure was exported at
def source_dpi(img, fallback):
    """
    Read horizontal dpi recorded in image metadata.

    Parameters:
    -----------
    img: PIL.Image.Image
      Opened figure.
    fallback: float
      Value to use when metadata carries no dpi.

    Returns:
    --------
    (dpi, from_metadata): tuple of float and bool
      Resolved dpi, and whether it came from metadata.
    """
    dpi = img.info.get('dpi')
    if dpi and dpi[0]:
        return float(dpi[0]), True
    return float(fallback), False


# Function to resample one figure to target dpi
def downscale(src_path, dest_path, target_dpi, fallback_dpi, quality):
    """
    Write copy of figure resampled to target dpi.

    Parameters:
    -----------
    src_path: str
      Absolute path of source figure.
    dest_path: str
      Absolute path to write to.
    target_dpi: float
      Wanted output dpi.
    fallback_dpi: float
      Assumed source dpi when figure records none.
    quality: int
      JPEG quality of output.

    Returns:
    --------
    from_metadata: bool
      Whether source dpi came from metadata rather than fallback.
    """
    with Image.open(src_path) as img:
        dpi, from_metadata = source_dpi(img, fallback_dpi)
        scale = min(1.0, target_dpi / dpi)
        width = max(1, round(img.width * scale))
        height = max(1, round(img.height * scale))
        img.draft('RGB', (width, height))
        small = img.convert('RGB').resize((width, height), Image.LANCZOS)

    # Record new dpi so re-running is a no-op, not second downscale
    small.save(
        dest_path,
        'JPEG',
        quality=quality,
        optimize=True,
        dpi=(target_dpi, target_dpi),
    )
    small.close()
    return from_metadata


# Function to walk QC tree and rewrite every figure
def main():
    """
    Parse arguments and build downscaled copy of QC tree.

    Parameters:
    -----------
    None

    Returns:
    --------
    None
    """
    parser = argparse.ArgumentParser(
        description='Rewrite QC figures at lower dpi.'
    )
    parser.add_argument(
        '--qc-data',
        default=os.environ.get('QC_DATA', 'analysis_qc'),
        help='QC root directory to read (default: $QC_DATA or analysis_qc).',
    )
    parser.add_argument(
        '--output', help='Output directory (default: <qc-data>_<dpi>dpi).'
    )
    parser.add_argument(
        '--dpi', type=float, default=150, help='Target dpi (default: 150).'
    )
    parser.add_argument(
        '--source-dpi',
        type=float,
        default=600,
        help='Assumed dpi for figures recording none (default: 600).',
    )
    parser.add_argument(
        '--quality', type=int, default=85, help='JPEG quality (default: 85).'
    )
    args = parser.parse_args()

    qc_data = os.path.abspath(args.qc_data)
    output = os.path.abspath(args.output or f'{qc_data}_{args.dpi:g}dpi')
    if not os.path.isdir(qc_data):
        sys.exit(f'QC directory not found: {qc_data}')
    if os.path.exists(output) and os.listdir(output):
        sys.exit(f'Output directory is not empty: {output}')

    print(f'Reading:  {qc_data}')
    print(f'Writing:  {output}')
    print(f'Target:   {args.dpi:g} dpi, JPEG quality {args.quality}')

    resampled = copied = failed = 0
    tagged = assumed = 0
    src_bytes = dest_bytes = 0
    start = time.perf_counter()

    for root, dirs, files in os.walk(qc_data):
        dirs.sort()
        dest_root = os.path.join(output, os.path.relpath(root, qc_data))
        os.makedirs(dest_root, exist_ok=True)
        for name in sorted(files):
            src_path = os.path.join(root, name)
            dest_path = os.path.join(dest_root, name)
            src_bytes += os.path.getsize(src_path)
            # Copy anything not resampled, so output is a drop-in replacement
            if not name.lower().endswith(JPEG_EXTENSIONS):
                shutil.copy2(src_path, dest_path)
                copied += 1
            else:
                try:
                    from_metadata = downscale(
                        src_path,
                        dest_path,
                        args.dpi,
                        args.source_dpi,
                        args.quality,
                    )
                    resampled += 1
                    if from_metadata:
                        tagged += 1
                    else:
                        assumed += 1
                except OSError as exc:  # One bad figure is not fatal
                    failed += 1
                    print(f'  failed: {src_path}: {exc}')
                    continue
            dest_bytes += os.path.getsize(dest_path)

    elapsed = time.perf_counter() - start
    print(
        f'Resampled {resampled} ({tagged} from recorded dpi, {assumed} '
        f'assumed {args.source_dpi:g}), copied {copied}, failed {failed} '
        f'in {elapsed:.1f}s'
    )
    print(
        f'Size {src_bytes / 1e9:.2f} GB -> {dest_bytes / 1e9:.2f} GB '
        f'({src_bytes / max(dest_bytes, 1):.1f}x smaller)'
    )
    print(
        '\nCheck output, then swap trees and rebuild thumbnails:\n'
        f'  mv {qc_data} {qc_data}_600dpi_backup\n'
        f'  mv {output} {qc_data}\n'
        '  PYTHONPATH=. python data_prep/build_qc_thumbnails.py'
    )


if __name__ == '__main__':
    main()
