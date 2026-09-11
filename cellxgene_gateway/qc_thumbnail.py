# Import utility modules
import os
import tempfile

from PIL import Image

# Import other functions from package
from cellxgene_gateway import env

# Grid cards are ~230 px wide. Width targets 2x card for HiDPI; height cap
# bounds very tall stacked figures
THUMB_WIDTH = 700
THUMB_MAX_HEIGHT = 2800
THUMB_QUALITY = 80

# Vector figures are already small and Pillow cannot rasterise them
PASSTHROUGH_EXTENSIONS = ('.svg',)

# Combined figures exceed Pillow's bomb threshold; these are local pipeline
# output, never uploads
Image.MAX_IMAGE_PIXELS = 400_000_000


def is_thumbnailable(image_path):
    """
    Function to report whether figure can be downscaled by Pillow.

    Parameters:
    -----------
    image_path: str
      Path or filename of figure.

    Returns:
    --------
    thumbnailable: bool
      False for vector formats, which are served unchanged.
    """
    return not image_path.lower().endswith(PASSTHROUGH_EXTENSIONS)


def _thumbnail_size(width, height):
    """
    Function to compute thumbnail dimensions preserving aspect ratio.

    Parameters:
    -----------
    width: int
      Source figure width in pixels.
    height: int
      Source figure height in pixels.

    Returns:
    --------
    size: tuple of int
      Target (width, height), never larger than source.
    """
    scale = min(1.0, THUMB_WIDTH / width, THUMB_MAX_HEIGHT / height)
    return max(1, round(width * scale)), max(1, round(height * scale))


def _render_thumbnail(src_path, dest_path):
    """
    Function to write downscaled copy of figure to thumbnail cache.

    Parameters:
    -----------
    src_path: str
      Absolute path of source figure.
    dest_path: str
      Absolute path to write thumbnail to.

    Returns:
    --------
    None
    """
    dest_dir = os.path.dirname(dest_path)
    os.makedirs(dest_dir, exist_ok=True)

    with Image.open(src_path) as img:
        size = _thumbnail_size(*img.size)
        # Let JPEG decoder downscale while reading, full decode is slow
        img.draft('RGB', size)
        thumb = img.convert('RGB').resize(size, Image.LANCZOS)

    # Write via temporary file so concurrent requests never serve partial JPEG
    fd, tmp_path = tempfile.mkstemp(dir=dest_dir, suffix='.tmp')
    os.close(fd)
    try:
        thumb.save(tmp_path, 'JPEG', quality=THUMB_QUALITY, optimize=True)
        # mkstemp is owner-only; cache may be warmed by a different user
        os.chmod(tmp_path, 0o644)
        os.replace(tmp_path, dest_path)
    except BaseException:
        if os.path.exists(tmp_path):
            os.remove(tmp_path)
        raise
    finally:
        thumb.close()


def get_thumbnail(dataset_id, image_path):
    """
    Function to return cached thumbnail for QC figure, building if stale.

    Parameters:
    -----------
    dataset_id: str
      Dataset identifier, used as first path segment under both QC root and
      thumbnail cache.
    image_path: str
      Figure path relative to dataset QC folder. Caller is responsible for
      rejecting traversal attempts.

    Returns:
    --------
    dest_path: str
      Absolute path of thumbnail file.
    """
    src_path = os.path.join(env.qc_data, dataset_id, image_path)
    dest_path = os.path.join(env.qc_thumb_cache, dataset_id, image_path)

    # Filenames are stable across pipeline reruns, so mtime is only signal
    src_mtime = os.path.getmtime(src_path)
    if os.path.exists(dest_path) and os.path.getmtime(dest_path) >= src_mtime:
        return dest_path

    _render_thumbnail(src_path, dest_path)
    return dest_path
