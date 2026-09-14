"""Builds social/facebook/kit.html from README.md: every image gets a download button,
every caption and page detail gets a copy button. Also writes small JPG thumbnails for display.
Usage: python3 social/facebook/src/kit.py
"""
import html
import re
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
readme = (ROOT / 'README.md').read_text()
esc = html.escape


def fenced_after(label):
    m = re.search(re.escape(label) + r'.*?```text\n(.*?)\n```', readme, re.S)
    return m.group(1)


bio = fenced_after('**Bio')
about = fenced_after('**Details / About:**')
specialties = re.findall(r'^\d+\. \*\*(.+?)\*\*: (.+)$', readme, re.M)
posts = re.findall(r'### Post (\d) · ([^\n]+)\n\nImage: `([^`]+)`\n\n(?:Tip: ([^\n]+)\n\n)?```text\n(.*?)\n```', readme, re.S)

(ROOT / 'thumbs').mkdir(exist_ok=True)


def thumb(name, width):
    out = ROOT / 'thumbs' / (Path(name).stem + '.jpg')
    im = Image.open(ROOT / name).convert('RGB')
    im = im.resize((width, round(im.height * width / im.width)), Image.LANCZOS)
    im.save(out, quality=86, optimize=True, progressive=True)
    return f'thumbs/{out.name}', im.size


DL = '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 3v9m0 0-4-4m4 4 4-4M4 15.5h12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>'
CP = '<svg viewBox="0 0 20 20" aria-hidden="true"><rect x="7" y="7" width="9.5" height="9.5" rx="2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M13 4.5V4a1.5 1.5 0 0 0-1.5-1.5h-7A1.5 1.5 0 0 0 3 4v7a1.5 1.5 0 0 0 1.5 1.5H5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>'


def dl_btn(file, label):
    return f'<a class="btn btn--main" href="{file}" download data-download="{file}">{DL}<span>{label}</span></a>'


def copy_btn(target, label, small=False):
    size = ' btn--sm' if small else ''
    return f'<button class="btn btn--line{size}" type="button" data-copy="{target}">{CP}<span>{label}</span></button>'


cover_t, cover_s = thumb('cover-1640x624.png', 1200)
pp_t, pp_s = thumb('profile-picture-720.png', 360)
gc_t, gc_s = thumb('google-business-cover-1400x788.jpg', 1000)

post_html = []
for n, title, image, tip, caption in posts:
    t, (w, h) = thumb(image, 640)
    chip = f'<p class="chip">{esc(tip)}</p>' if tip else ''
    post_html.append(f'''
    <article class="post" id="post-{n}">
      <figure class="post__img"><img src="{t}" width="{w}" height="{h}" alt="{esc(title)} post image"></figure>
      <div class="post__body">
        <div class="post__head"><p class="eyebrow">Post {n}</p><h3>{esc(title)}</h3>{chip}</div>
        <div class="actions">{dl_btn(image, 'Download image')}{copy_btn(f'cap-{n}', 'Copy caption')}</div>
        <p class="hint">Saving isn't available in this view. Right-click or long-press the image to save it.</p>
        <div class="cap" id="cap-{n}" tabindex="0">{esc(caption)}</div>
        <p class="count">{len(caption):,} characters · {image}</p>
      </div>
    </article>''')

spec_html = []
for i, (name, desc) in enumerate(specialties, 1):
    spec_html.append(f'''
      <li class="spec">
        <b class="spec__name" id="spec-{i}-name">{esc(name)}</b>
        <p class="spec__desc" id="spec-{i}-desc">{esc(desc)}</p>
        <p class="count">{len(desc)} / 150</p>
        <div class="actions">{copy_btn(f'spec-{i}-name', 'Copy name', True)}{copy_btn(f'spec-{i}-desc', 'Copy description', True)}</div>
      </li>''')

page = f'''<!doctype html>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Timeless Facebook Kit</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap">
<style>
  :root{{
    --ground:#f3f5ee; --surface:#ffffff; --sunk:#f0f3ea; --ink:#0f170c; --muted:#56654f; --line:#dce3d3;
    --accent:#2e7a0b; --accent-hover:#225c06; --on-accent:#ffffff; --chip-bg:#f8efcf; --chip-ink:#6b5104; --focus:#48a008;
  }}
  @media (prefers-color-scheme: dark){{
    :root:not([data-theme="light"]){{
      --ground:#0a1308; --surface:#121f0e; --sunk:#0d180a; --ink:#e6eee0; --muted:#a1b39b; --line:#243a1c;
      --accent:#8ad132; --accent-hover:#a2e052; --on-accent:#0c1809; --chip-bg:#2e2808; --chip-ink:#e7c552; --focus:#8ad132;
    }}
  }}
  :root[data-theme="dark"]{{
    --ground:#0a1308; --surface:#121f0e; --sunk:#0d180a; --ink:#e6eee0; --muted:#a1b39b; --line:#243a1c;
    --accent:#8ad132; --accent-hover:#a2e052; --on-accent:#0c1809; --chip-bg:#2e2808; --chip-ink:#e7c552; --focus:#8ad132;
  }}
  *{{box-sizing:border-box}}
  body{{margin:0;background:var(--ground);color:var(--ink);font:400 15px/1.6 Poppins,ui-sans-serif,system-ui,-apple-system,"Segoe UI",sans-serif;-webkit-font-smoothing:antialiased}}
  img{{max-width:100%;height:auto;display:block}}
  .wrap{{max-width:1080px;margin:0 auto;padding:36px 20px 88px}}
  .top{{display:grid;gap:12px;padding-bottom:26px;border-bottom:1px solid var(--line)}}
  .eyebrow{{margin:0;font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--accent)}}
  h1{{margin:0;font-size:clamp(30px,5vw,44px);line-height:1.05;font-weight:800;letter-spacing:-.03em;text-wrap:balance}}
  .lede{{margin:0;max-width:62ch;color:var(--muted);font-size:16px}}
  .jump{{display:flex;flex-wrap:wrap;gap:8px;margin:6px 0 0;padding:0;list-style:none}}
  .jump a{{display:inline-block;padding:6px 14px;border:1px solid var(--line);border-radius:999px;background:var(--surface);color:var(--ink);font-size:13px;font-weight:600;text-decoration:none}}
  .jump a:hover{{border-color:var(--accent)}}
  h2{{margin:52px 0 4px;font-size:24px;line-height:1.2;font-weight:800;letter-spacing:-.02em;scroll-margin-top:16px}}
  .sec-note{{margin:0 0 18px;color:var(--muted);max-width:62ch}}
  h3{{margin:0;font-size:17px;line-height:1.3;font-weight:700;letter-spacing:-.01em}}
  .btn{{display:inline-flex;align-items:center;gap:8px;min-height:40px;padding:8px 16px;border:1.5px solid transparent;border-radius:999px;font:600 14px/1 Poppins,ui-sans-serif,system-ui,sans-serif;text-decoration:none;white-space:nowrap;cursor:pointer;transition:background-color .15s,border-color .15s,color .15s}}
  .btn svg{{width:18px;height:18px;flex:none}}
  .btn--main{{background:var(--accent);color:var(--on-accent)}}
  .btn--main:hover{{background:var(--accent-hover)}}
  .btn--line{{background:transparent;color:var(--ink);border-color:var(--line)}}
  .btn--line:hover{{border-color:var(--accent)}}
  .btn--sm{{min-height:34px;padding:6px 12px;font-size:13px}}
  .btn--sm svg{{width:16px;height:16px}}
  .btn.is-done{{border-color:var(--accent);color:var(--accent)}}
  .btn--main.is-done{{color:var(--on-accent)}}
  .btn:focus-visible,.cap:focus-visible,.jump a:focus-visible{{outline:3px solid var(--focus);outline-offset:2px}}
  .actions{{display:flex;flex-wrap:wrap;gap:8px}}
  .hint{{display:none;margin:0;font-size:13px;color:var(--muted)}}
  .no-save .hint{{display:block}}
  .count{{margin:0;font-size:12.5px;color:var(--muted);font-variant-numeric:tabular-nums}}
  .cap{{margin:0;padding:14px 16px;max-height:340px;overflow:auto;border:1px solid var(--line);border-radius:12px;background:var(--sunk);font-size:14.5px;line-height:1.6;white-space:pre-wrap;overflow-wrap:anywhere}}

  .assets{{display:grid;grid-template-columns:minmax(0,2.3fr) minmax(0,1fr);gap:16px}}
  .asset{{display:grid;gap:14px;align-content:space-between;padding:16px;border:1px solid var(--line);border-radius:16px;background:var(--surface)}}
  .mock{{position:relative;padding-bottom:34px}}
  .mock__cover{{width:100%;aspect-ratio:1640/624;object-fit:cover;border-radius:8px}}
  .mock__pp{{position:absolute;left:3%;bottom:0;width:19%;aspect-ratio:1;border:3px solid var(--surface);border-radius:50%}}
  .pp{{width:min(100%,200px);aspect-ratio:1;margin:0 auto;border:1px solid var(--line);border-radius:50%}}
  .asset__foot{{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:10px 16px}}
  .meta{{margin:2px 0 0;font-size:13px;color:var(--muted)}}
  .gcover{{width:100%;aspect-ratio:16/9;object-fit:cover;border-radius:8px}}
  .glogo{{width:min(100%,200px);aspect-ratio:1;margin:0 auto;border:1px solid var(--line);border-radius:12px}}

  .posts{{display:grid;gap:16px}}
  .post{{display:grid;grid-template-columns:minmax(0,300px) minmax(0,1fr);gap:24px;padding:18px;border:1px solid var(--line);border-radius:16px;background:var(--surface);scroll-margin-top:16px}}
  .post__img{{margin:0}}
  .post__img img{{width:100%;aspect-ratio:4/5;object-fit:cover;border-radius:10px}}
  .post__body{{display:grid;gap:12px;align-content:start;min-width:0}}
  .post__head{{display:flex;flex-wrap:wrap;align-items:center;gap:4px 12px}}
  .post__head .eyebrow{{flex-basis:100%}}
  .chip{{margin:0;padding:3px 10px;border-radius:999px;background:var(--chip-bg);color:var(--chip-ink);font-size:12.5px;font-weight:600}}

  .fields{{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:16px}}
  .field{{display:grid;gap:10px;align-content:start;padding:16px;border:1px solid var(--line);border-radius:16px;background:var(--surface)}}
  .field__head{{display:flex;align-items:center;justify-content:space-between;gap:12px}}
  .specs{{margin:16px 0 0;padding:0;list-style:none;border:1px solid var(--line);border-radius:16px;background:var(--surface)}}
  .spec{{display:grid;grid-template-columns:minmax(0,230px) minmax(0,1fr) auto;gap:4px 20px;align-items:start;padding:14px 16px;border-top:1px solid var(--line)}}
  .spec:first-child{{border-top:0}}
  .spec__name{{grid-row:1 / span 2;font-weight:700}}
  .spec__desc{{margin:0}}
  .spec .count{{grid-column:2}}
  .spec .actions{{grid-column:3;grid-row:1 / span 2;flex-direction:column;align-items:stretch}}

  .toast{{position:fixed;left:50%;bottom:24px;z-index:10;max-width:calc(100% - 32px);transform:translateX(-50%);padding:10px 18px;border-radius:999px;background:var(--ink);color:var(--ground);font-size:14px;font-weight:600;box-shadow:0 10px 30px -10px rgba(0,0,0,.45)}}

  @media (max-width:760px){{
    .assets,.post{{grid-template-columns:1fr}}
    .post__img img{{max-width:340px}}
    .spec{{grid-template-columns:1fr}}
    .spec__name,.spec .count,.spec .actions{{grid-column:auto;grid-row:auto}}
    .spec .actions{{flex-direction:row}}
  }}
  @media (prefers-reduced-motion:reduce){{*{{transition:none!important}}}}
</style>

<div class="wrap">
  <header class="top">
    <p class="eyebrow">Timeless Turf Restoration</p>
    <h1>Facebook kit</h1>
    <p class="lede">Download an image, copy its caption, then paste both into a new post on the Page. Post them in order and pin post 1.</p>
    <ul class="jump">
      <li><a href="#images">Cover &amp; profile</a></li>
      <li><a href="#google">Google profile</a></li>
      <li><a href="#posts">Posts</a></li>
      <li><a href="#details">Page details</a></li>
    </ul>
  </header>

  <h2 id="images">Cover &amp; profile picture</h2>
  <p class="sec-note">Shown the way Facebook lays them out on a computer.</p>
  <section class="assets">
    <article class="asset">
      <div class="mock"><img class="mock__cover" src="{cover_t}" width="{cover_s[0]}" height="{cover_s[1]}" alt="Cover photo"><img class="mock__pp" src="{pp_t}" width="{pp_s[0]}" height="{pp_s[1]}" alt=""></div>
      <div class="asset__foot"><div><h3>Cover photo</h3><p class="meta">1640 × 624 PNG</p></div><div class="actions">{dl_btn('cover-1640x624.png', 'Download cover')}</div></div>
    </article>
    <article class="asset">
      <img class="pp" src="{pp_t}" width="{pp_s[0]}" height="{pp_s[1]}" alt="Profile picture">
      <div class="asset__foot"><div><h3>Profile picture</h3><p class="meta">720 × 720 PNG</p></div><div class="actions">{dl_btn('profile-picture-720.png', 'Download')}</div></div>
    </article>
  </section>

  <h2 id="google">Google Business Profile</h2>
  <p class="sec-note">Google favors a real photo with no text for the cover, so this one has none. The logo is the same image as the Facebook profile picture.</p>
  <section class="assets">
    <article class="asset">
      <img class="gcover" src="{gc_t}" width="{gc_s[0]}" height="{gc_s[1]}" alt="Google Business Profile cover photo">
      <div class="asset__foot"><div><h3>Cover photo</h3><p class="meta">1400 × 788 JPG</p></div><div class="actions">{dl_btn('google-business-cover-1400x788.jpg', 'Download cover')}</div></div>
    </article>
    <article class="asset">
      <img class="glogo" src="{pp_t}" width="{pp_s[0]}" height="{pp_s[1]}" alt="Google Business Profile logo">
      <div class="asset__foot"><div><h3>Logo</h3><p class="meta">720 × 720 PNG</p></div><div class="actions">{dl_btn('google-business-logo-720.png', 'Download')}</div></div>
    </article>
  </section>

  <h2 id="posts">Posts</h2>
  <p class="sec-note">Each image is 1080 × 1350, so it fills the screen on phones.</p>
  <section class="posts">{''.join(post_html)}
  </section>

  <h2 id="details">Page details</h2>
  <p class="sec-note">Paste these into the Page's Details and Specialties sections.</p>
  <section class="fields">
    <div class="field"><div class="field__head"><h3>Bio</h3>{copy_btn('bio', 'Copy')}</div><div class="cap" id="bio" tabindex="0">{esc(bio)}</div><p class="count">{len(bio)} / 101</p></div>
    <div class="field"><div class="field__head"><h3>Details / About</h3>{copy_btn('about', 'Copy')}</div><div class="cap" id="about" tabindex="0">{esc(about)}</div><p class="count">{len(about)} characters</p></div>
  </section>
  <h3 style="margin-top:28px">Specialties</h3>
  <ul class="specs">{''.join(spec_html)}
  </ul>
</div>

<p class="toast" id="toast" role="status" aria-live="polite" hidden></p>

<script>
(() => {{
  const toastEl = document.getElementById('toast');
  let timer;
  const toast = (msg) => {{
    toastEl.textContent = msg;
    toastEl.hidden = false;
    clearTimeout(timer);
    timer = setTimeout(() => {{ toastEl.hidden = true; }}, 3000);
  }};

  // Saving goes through the viewer's downloads capability when it exists; otherwise the plain link is left alone.
  let saver = null;
  if (window.claude && typeof window.claude.use === 'function') {{
    window.claude.use('downloads').then(
      (d) => {{ saver = d; if (!d) document.body.classList.add('no-save'); }},
      () => document.body.classList.add('no-save')
    );
  }}

  const flash = (btn, text) => {{
    const label = btn.querySelector('span');
    if (!btn.dataset.label) btn.dataset.label = label.textContent;
    label.textContent = text;
    btn.classList.add('is-done');
    setTimeout(() => {{ label.textContent = btn.dataset.label; btn.classList.remove('is-done'); }}, 1800);
  }};

  async function save(btn, file) {{
    try {{
      const res = await fetch(file);
      if (!res.ok) throw new Error('fetch failed');
      await saver.save({{ filename: file, data: await res.blob() }});
      flash(btn, 'Saved');
    }} catch (err) {{
      const code = err && err.code;
      if (code === 'declined') return;
      if (code === 'rate_limited') {{ toast('A save is already open. Finish that one first.'); return; }}
      document.body.classList.add('no-save');
      toast("Couldn't save from here. Right-click or long-press the image instead.");
    }}
  }}

  async function copyText(text) {{
    try {{ await navigator.clipboard.writeText(text); return true; }} catch (e) {{}}
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.cssText = 'position:fixed;top:0;left:0;opacity:0';
    document.body.appendChild(ta);
    ta.select();
    let ok = false;
    try {{ ok = document.execCommand('copy'); }} catch (e) {{}}
    ta.remove();
    return ok;
  }}

  document.addEventListener('click', (e) => {{
    const dl = e.target.closest('[data-download]');
    if (dl && saver) {{ e.preventDefault(); save(dl, dl.dataset.download); return; }}
    const cp = e.target.closest('[data-copy]');
    if (!cp) return;
    const src = document.getElementById(cp.dataset.copy);
    copyText(src.textContent).then((ok) => {{
      if (ok) {{ flash(cp, 'Copied'); return; }}
      const range = document.createRange();
      range.selectNodeContents(src);
      const sel = getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
      toast('Text selected. Press ⌘C or Ctrl+C to copy.');
    }});
  }});
}})();
</script>
'''
(ROOT / 'kit.html').write_text(page)
print(f'kit.html: {len(posts)} posts, {len(specialties)} specialties, bio {len(bio)} chars')
for name, desc in specialties:
    if len(desc) > 150:
        print('  over 150:', name, len(desc))
