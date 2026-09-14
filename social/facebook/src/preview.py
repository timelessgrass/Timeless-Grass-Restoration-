"""Builds social/facebook/preview.html from README.md so captions live in one place.
Usage: python3 social/facebook/src/preview.py
"""
import html
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
readme = (ROOT / 'README.md').read_text()


def fenced_after(label):
    m = re.search(re.escape(label) + r'.*?```text\n(.*?)\n```', readme, re.S)
    return m.group(1) if m else ''


bio = fenced_after('**Bio')
about = fenced_after('**Details / About:**')
posts = re.findall(r'### Post (\d) · ([^\n]+)\n\nImage: `([^`]+)`\n\n```text\n(.*?)\n```', readme, re.S)

cards = []
for n, title, image, caption in posts:
    title = title.replace(' (pin this)', '')
    pinned = '<span class="pin">Pinned</span>' if n == '1' else ''
    cards.append(f'''
  <article class="card">
    <header><img class="av" src="profile-picture-dark-720.png" alt=""><div><b>Timeless Turf Restoration</b><small>Post {n} · {html.escape(title)}</small></div>{pinned}</header>
    <p class="cap">{html.escape(caption)}</p>
    <img class="shot" src="{image}" width="1080" height="1350" alt="{html.escape(title)} post image">
  </article>''')

page = f'''<!doctype html>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Timeless Turf Restoration: Facebook page preview</title>
<style>
  :root{{--bg:#eef0f2;--card:#fff;--ink:#1c1e21;--muted:#65676b;--line:#dadde1;--green:#2e7a0b}}
  *{{box-sizing:border-box}}
  body{{margin:0;background:var(--bg);color:var(--ink);font:15px/1.45 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}}
  .top{{background:var(--card);border-bottom:1px solid var(--line)}}
  .top__in{{max-width:980px;margin:0 auto;padding:0 16px 16px}}
  .cover{{display:block;width:100%;aspect-ratio:1640/624;object-fit:cover;border-radius:0 0 10px 10px}}
  .id{{display:flex;align-items:flex-end;gap:18px;margin-top:-56px;padding:0 18px;flex-wrap:wrap}}
  .pp{{width:168px;height:168px;border-radius:50%;border:4px solid #fff;background:#fff}}
  .id h1{{margin:0 0 6px;font-size:30px;line-height:1.15}}
  .id p{{margin:0 0 10px;color:var(--muted)}}
  .btn{{margin:0 0 12px auto;background:var(--green);color:#fff;font-weight:600;border-radius:8px;padding:9px 16px}}
  main{{max-width:980px;margin:16px auto;padding:0 16px;display:grid;grid-template-columns:minmax(0,340px) minmax(0,1fr);gap:16px;align-items:start}}
  .box,.card{{background:var(--card);border-radius:10px;box-shadow:0 1px 2px rgba(0,0,0,.12)}}
  .box{{padding:16px}}
  .box h2{{margin:0 0 8px;font-size:18px}}
  .box p{{margin:0 0 10px}}
  .feed{{display:grid;gap:16px}}
  .card header{{display:flex;align-items:center;gap:10px;padding:12px 16px}}
  .card header b{{display:block}}
  .card header small{{color:var(--muted)}}
  .av{{width:40px;height:40px;border-radius:50%}}
  .pin{{margin-left:auto;font-size:12px;font-weight:600;color:var(--green);border:1px solid var(--green);border-radius:999px;padding:2px 10px}}
  .cap{{margin:0;padding:0 16px 12px;white-space:pre-wrap}}
  .shot{{display:block;width:100%;height:auto}}
  @media (max-width:760px){{main{{grid-template-columns:1fr}}.id{{margin-top:-40px}}.pp{{width:120px;height:120px}}.btn{{margin-left:0}}}}
</style>
<div class="top"><div class="top__in">
  <img class="cover" src="cover-1640x624.png" alt="Cover banner">
  <div class="id">
    <img class="pp" src="profile-picture-dark-720.png" alt="Profile picture">
    <div><h1>Timeless Turf Restoration</h1><p>{html.escape(bio)}</p></div>
    <span class="btn">Call now</span>
  </div>
</div></div>
<main>
  <aside class="box"><h2>Intro</h2><p>{html.escape(bio)}</p><p>{html.escape(about)}</p><p>303-349-2368<br>timelessgrass@gmail.com<br>Serves Shallotte, NC to Burgess, SC</p></aside>
  <section class="feed">{''.join(cards)}
  </section>
</main>
'''
(ROOT / 'preview.html').write_text(page)
print(f'preview.html: {len(posts)} posts, bio {len(bio)} chars, about {len(about)} chars')
