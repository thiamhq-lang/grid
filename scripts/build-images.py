"""
Builds web-ready images from the originals.

Put large original photos in images/originals/ (JPEG or PNG), then run:

    python3 scripts/build-images.py

For every original it writes resized copies to images/ in two formats:
  - WebP (small, modern browsers)
  - JPEG (fallback for older browsers)

at a few widths, never larger than the original. index.html uses these
with <picture> + srcset so each device downloads only the size it needs.

Requires Pillow:  pip install Pillow
"""
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "images" / "originals"
OUT = ROOT / "images"
WIDTHS = [480, 960, 1440, 2000]
WEBP_QUALITY = 72
JPEG_QUALITY = 78


def targets(width: int) -> list[int]:
    """Standard widths below the original, plus the original width itself."""
    return sorted({w for w in WIDTHS if w < width} | {width})


def main() -> None:
    originals = sorted(p for p in SRC.iterdir() if p.suffix.lower() in {".jpg", ".jpeg", ".png"})
    if not originals:
        print(f"No images found in {SRC}")
        return
    for path in originals:
        image = Image.open(path).convert("RGB")
        for w in targets(image.width):
            h = round(image.height * w / image.width)
            resized = image.resize((w, h), Image.LANCZOS)
            resized.save(OUT / f"{path.stem}-{w}.webp", "WEBP", quality=WEBP_QUALITY, method=6)
            resized.save(OUT / f"{path.stem}-{w}.jpg", "JPEG", quality=JPEG_QUALITY, optimize=True, progressive=True)
        print(f"{path.name}: {image.width}x{image.height} -> widths {targets(image.width)}")


if __name__ == "__main__":
    main()
