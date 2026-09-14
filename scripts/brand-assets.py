"""Builds every logo asset from brand/logo-source.png (the 1024x1024 logo on white).

Outputs
  public/assets/brand/  logo.png (header), logo-reverse.png (dark footer, white outline),
                        favicon.png (doodle face), apple-touch-icon.png, og-default.jpg (share image)
  public/favicon.ico    16/32/48 doodle face
  brand/                logo-transparent.png, logo-outline-white.png, logo-on-white-1024.png (full-size masters)
  social/facebook/      profile-picture-720.png, google-business-logo-720.png, google-business-cover-1400x788.jpg
  social/facebook/src/  logo-sticker.png (used by banner.html)
Usage: python3 scripts/brand-assets.py
"""
from itertools import product
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFilter

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / 'brand' / 'logo-source.png'
WEB = ROOT / 'public' / 'assets' / 'brand'
SOCIAL = ROOT / 'social' / 'facebook'
PHOTO = ROOT / 'public' / 'assets' / 'img' / 'backyard-putting-green-landscaped-boulders.jpg'
WHITE = (255, 255, 255)
DARK = (7, 11, 7)


def cut_out(rgb):
    """Remove the white background that touches the edges and soften the edge band so no white fringe is left."""
    W, H = rgb.size
    work = rgb.copy()
    mag = (255, 0, 255)
    seeds = [(x, y) for x in range(0, W, 7) for y in (0, H - 1)] + [(x, y) for y in range(0, H, 7) for x in (0, W - 1)]
    for s in seeds:
        p = work.getpixel(s)
        if p != mag and min(p) > 225:
            ImageDraw.floodfill(work, s, mag, thresh=60)
    w = np.asarray(work)
    a = np.asarray(rgb).astype(np.float32)
    bg = (w[..., 0] == 255) & (w[..., 1] == 0) & (w[..., 2] == 255)
    near = np.zeros_like(bg)
    for dy, dx in product(range(-2, 3), repeat=2):
        near |= np.roll(np.roll(bg, dy, 0), dx, 1)
    band = near & ~bg
    alpha = np.where(bg, 0.0, 1.0)
    alpha[band] = np.clip((255 - a.min(axis=2)) / 70.0, 0, 1)[band]
    af = alpha[..., None]
    col = np.where(af > 0.02, (a - (1 - af) * 255) / np.maximum(af, 1e-3), a)
    out = Image.fromarray(np.dstack([np.clip(col, 0, 255), alpha * 255]).astype(np.uint8), 'RGBA')
    return out.crop(out.getchannel('A').point(lambda v: 255 if v > 24 else 0).getbbox())


def enclosing_circle(logo):
    """Smallest circle around the logo's outline, found by grid search: (radius, cx, cy)."""
    A = np.pad(np.asarray(logo.getchannel('A')) > 24, 1)
    edge = A & ~(np.roll(A, 1, 0) & np.roll(A, -1, 0) & np.roll(A, 1, 1) & np.roll(A, -1, 1))
    ys, xs = np.nonzero(edge)
    pts = np.stack([xs - 1, ys - 1], 1)[::3].astype(np.float32)
    best = None
    for cx in np.arange(logo.width / 2 - 60, logo.width / 2 + 61, 2):
        for cy in np.arange(logo.height / 2 - 60, logo.height / 2 + 61, 2):
            r = np.sqrt(((pts - (cx, cy)) ** 2).sum(1)).max()
            if best is None or r < best[0]:
                best = (r, cx, cy)
    return best


def centred(logo, circle, size, ground, margin):
    """Logo scaled so its enclosing circle fills a size x size square (less margin), centred on that circle."""
    r, cx, cy = circle
    scale = size / 2 * (1 - 2 * margin) / r
    big = logo.resize((round(logo.width * scale), round(logo.height * scale)), Image.LANCZOS)
    canvas = Image.new('RGBA', (size, size), ground + ((255,) if ground else ()))
    canvas.alpha_composite(big, (round(size / 2 - cx * scale), round(size / 2 - cy * scale)))
    return canvas


def outlined(logo, px, color=WHITE):
    """Logo with a solid outline around its silhouette, so black edges read on dark backgrounds."""
    pad = px * 2
    base = Image.new('RGBA', (logo.width + 2 * pad, logo.height + 2 * pad), (0, 0, 0, 0))
    base.alpha_composite(logo, (pad, pad))
    mask = base.getchannel('A').point(lambda v: 255 if v > 60 else 0)
    grown = mask.filter(ImageFilter.GaussianBlur(px * 0.8)).point(lambda v: 255 if v > 18 else 0).filter(ImageFilter.GaussianBlur(1.2))
    sticker = Image.new('RGBA', base.size, color + (0,))
    sticker.putalpha(grown)
    sticker.alpha_composite(base)
    return sticker.crop(sticker.getchannel('A').getbbox())


def width(im, w):
    return im.resize((w, round(im.height * w / im.width)), Image.LANCZOS)


def cover_crop(photo, w, h, y_bias):
    scale = max(w / photo.width, h / photo.height)
    big = photo.resize((round(photo.width * scale), round(photo.height * scale)), Image.LANCZOS)
    x = (big.width - w) // 2
    y = round((big.height - h) * y_bias)
    return big.crop((x, y, x + w, y + h))


source = Image.open(SRC).convert('RGB')
logo = cut_out(source)
circle = enclosing_circle(logo)
sticker = outlined(logo, 12)
src_px = np.asarray(source).reshape(-1, 3).astype(int)
greens = src_px[(src_px[:, 1] > src_px[:, 0] + 60) & (src_px[:, 1] > src_px[:, 2] + 60) & (src_px[:, 1] > 120)]
green = tuple(int(v) for v in np.median(greens, 0))
print('logo', logo.size, 'circle r=%.0f at (%.0f, %.0f)' % circle, 'brand green #%02x%02x%02x' % green)

# full-size masters
(ROOT / 'brand').mkdir(exist_ok=True)
logo.save(ROOT / 'brand' / 'logo-transparent.png', optimize=True)
sticker.save(ROOT / 'brand' / 'logo-outline-white.png', optimize=True)
centred(logo, circle, 1024, WHITE, 0.03).convert('RGB').save(ROOT / 'brand' / 'logo-on-white-1024.png', optimize=True)

# website
for name, im in (('logo', width(logo, 420)), ('logo-reverse', width(sticker, 460))):
    im.save(WEB / f'{name}.png', optimize=True)  # structured data and anything that needs a PNG
    im.save(WEB / f'{name}.webp', quality=90, method=6)  # what the header and footer load
centred(logo, circle, 180, WHITE, 0.06).convert('RGB').save(WEB / 'apple-touch-icon.png', optimize=True)
# favicon: the right doodle's face in a white disc with a green ring
face = source.crop((617, 69, 917, 369))
disc = Image.new('RGBA', (300, 300), (0, 0, 0, 0))
m = Image.new('L', (300, 300), 0)
ImageDraw.Draw(m).ellipse((10, 10, 289, 289), fill=255)
disc.paste(face, (0, 0), m)
ImageDraw.Draw(disc).ellipse((5, 5, 294, 294), outline=green + (255,), width=12)
disc = disc.resize((1200, 1200), Image.LANCZOS).resize((300, 300), Image.LANCZOS)
disc.resize((192, 192), Image.LANCZOS).save(WEB / 'favicon.png', optimize=True)
disc.save(ROOT / 'public' / 'favicon.ico', sizes=[(16, 16), (32, 32), (48, 48)])
# default share image: sharp photo, dark panel, outlined logo
photo = Image.open(PHOTO).convert('RGB')
og = cover_crop(photo, 1200, 630, 0.72).convert('RGBA')
ramp = np.clip((np.arange(1200) - 560) / 260, 0, 1) * 0.97
shade = Image.fromarray(np.dstack([np.full((630, 1200), c, np.uint8) for c in DARK] + [np.tile((ramp * 255).astype(np.uint8), (630, 1))]), 'RGBA')
og.alpha_composite(shade)
og_logo = width(sticker, 400)
og.alpha_composite(og_logo, (955 - og_logo.width // 2, 315 - og_logo.height // 2))
og.convert('RGB').save(WEB / 'og-default.jpg', quality=88, optimize=True, progressive=True)

# Facebook and Google Business Profile
profile = centred(logo, circle, 720, WHITE, 0.035).convert('RGB')
profile.save(SOCIAL / 'profile-picture-720.png', optimize=True)
profile.save(SOCIAL / 'google-business-logo-720.png', optimize=True)
photo.crop((0, 150, 1400, 938)).save(SOCIAL / 'google-business-cover-1400x788.jpg', quality=90, optimize=True, progressive=True)
sticker.save(SOCIAL / 'src' / 'logo-sticker.png', optimize=True)

for p in [WEB / 'logo.png', WEB / 'logo.webp', WEB / 'logo-reverse.png', WEB / 'logo-reverse.webp', WEB / 'favicon.png', WEB / 'apple-touch-icon.png', WEB / 'og-default.jpg', ROOT / 'public' / 'favicon.ico', SOCIAL / 'profile-picture-720.png', SOCIAL / 'google-business-cover-1400x788.jpg']:
    print(f'{p.relative_to(ROOT)}  {Image.open(p).size}  {p.stat().st_size // 1024} KB')
