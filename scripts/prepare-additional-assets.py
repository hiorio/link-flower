"""Copy verified product icons and encode whole, unmodified app captures as WebP."""
from pathlib import Path
import hashlib
import shutil
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
PROJECTS = ROOT.parent
ICONS = {
    "beauty-touch": "beautyUp/BeautyUp/Resources/Assets.xcassets/AppIcon.appiconset/AppIcon.png",
    "bluemoon": "BlueMoon/apps/desktop/app-icon.png",
    "namu-note": "hwinote/apps/windows/icon.png",
    "drawing-ground": "drawing ground/App/Resources/Assets.xcassets/AppIcon.appiconset/AppIcon.png",
    "pretty-speech": "keyboard/MainApp/Resources/Assets.xcassets/AppIcon.appiconset/AppIcon.png",
    "jamgyeol": "Sleep/Resources/Assets.xcassets/AppIcon.appiconset/AppIcon-1024.png",
    "deepplayer": "deepPlayer/assets/deepplayer.png",
}
CAPTURES = {
    "beauty-touch/home": "beautyUp/artifacts/beauty-touch-build14-home.png",
    "bluemoon/characters": "BlueMoon/docs/artifacts/editorial-character.png",
    "namu-note/canvas": "hwinote/artifacts/hwinote-native.png",
    "drawing-ground/canvas": "drawing ground/artifacts/ui-redesign/ipad-final.png",
    "jamgyeol/journal": "Sleep/artifacts/store-v2/2-journal.png",
}

if __name__ == "__main__":
    for slug, source in ICONS.items():
        target = ROOT / f"public/app-icons/{slug}.png"
        shutil.copyfile(PROJECTS / source, target)
        print(slug, hashlib.sha256(target.read_bytes()).hexdigest())
    for slug, source in CAPTURES.items():
        target = ROOT / f"public/product-shots/{slug}.webp"
        target.parent.mkdir(parents=True, exist_ok=True)
        with Image.open(PROJECTS / source) as capture:
            capture.save(target, "WEBP", quality=85, method=6)
            print(slug, capture.size, target.stat().st_size)
