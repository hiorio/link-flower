"""Encode existing simulator captures; no synthetic UI or personal data."""
from pathlib import Path
from PIL import Image, ImageOps

source = Path('C:/Projects/planudid/marketing/app-store')
target = Path(__file__).resolve().parents[1] / 'public/product-shots/daymirror'
for locale in ('ko', 'en-US'):
    output = target / locale
    output.mkdir(parents=True, exist_ok=True)
    for device, name in [('iphone', '01-daily'), ('iphone', '04-todos'), ('iphone', '07-review'), ('iphone', '08-theme-paper'), ('iphone', '08-theme-midnight'), ('ipad', '06-monthly'), ('ipad', '06-monthly-actual')]:
        with Image.open(source / locale / 'raw' / device / f'{name}.png') as img:
            img = ImageOps.exif_transpose(img)
            img.thumbnail((1800, 2400))
            img.save(output / f'{name}.webp', 'WEBP', quality=88, method=6)
            print(locale, name, img.size)
