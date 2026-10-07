"""Resize genuine TimeRoots 1.2 release captures, without modifying their UI."""
from pathlib import Path
from PIL import Image

source = Path('C:/Projects/time-product-suite/time-tracker-app/docs/release/app-store-screenshots/1.2.0')
target = Path(__file__).resolve().parents[1] / 'public/product-shots/timeroots'
target.mkdir(parents=True, exist_ok=True)
for name in ('03-timeline', '04-analytics'):
    with Image.open(source / f'{name}.png') as image:
        image.thumbnail((792, 1721))
        image.save(target / f'{name}.webp', 'WEBP', quality=87, method=6)
        print(name, image.size)
