"""Optimize selected, existing project captures. Never synthesizes or retouches UI.

Run with the folder containing the source projects as the sole argument.
Icons are copied byte-for-byte separately; this script only encodes screenshots.
"""
import sys
from pathlib import Path
from PIL import Image

sources = [
    ("counter/docs/evidence/design-refresh-final/actual-import-five-objects.png", "countlens/result.webp"),
    ("duo studio/artifacts/studio-final.png", "duo-studio/studio.webp"),
    ("duo studio/artifacts/ipad-editor-reopened.png", "duo-studio/editor.webp"),
    ("picture-draw/artifacts/field-notes-final/street-bicycle/card.png", "archive-ink/field-note.webp"),
    ("hihorun/artifacts/stats-placement.png", "hiho-run/editor.webp"),
    ("planudid/artifacts/ux/routine-filled.png", "daymirror/today.webp"),
]
projects = Path(sys.argv[1]).resolve()
destination = Path(__file__).resolve().parents[1] / "public/product-shots"
for source, output in sources:
    target = destination / output
    target.parent.mkdir(parents=True, exist_ok=True)
    with Image.open(projects / source) as image:
        # Preserve the full frame and pixel dimensions, including sample labels.
        image.save(target, "WEBP", quality=88, method=6)
        print(f"{output}: {image.width} x {image.height}, {target.stat().st_size:,} bytes")
