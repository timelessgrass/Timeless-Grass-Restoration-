/** Text helpers for cards, teasers and meta copy built from content data. */

const strip = (s: string) => s.replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&#39;|&rsquo;/g, '’').replace(/\s+/g, ' ').trim();

/** Trim to a whole word under `max` characters, ending with an ellipsis only when something was cut. */
export function clip(text: string, max = 140): string {
  const t = strip(text);
  if (t.length <= max) return t;
  const cut = t.slice(0, max);
  const i = cut.lastIndexOf(' ');
  return cut.slice(0, i > max * 0.6 ? i : max).replace(/[,;:\-–—\s]+$/, '') + '…';
}

/**
 * Card teaser from an answer or lede: skips a bare "Yes." / "No." opener, keeps whole sentences
 * until the teaser says something (60+ chars), and never exceeds `max`.
 */
export function teaser(text: string, max = 150): string {
  const t = strip(text).replace(/^(yes|no)\s*[.,!:;—–-]\s*/i, '');
  const sentences = t.match(/[^.!?]+[.!?]+(?=\s|$)/g) ?? [t];
  let out = '';
  for (const s of sentences) {
    const next = (out + ' ' + s.trim()).trim();
    if (next.length > max && out) break;
    out = next;
    if (out.length >= 60) break;
  }
  return clip(out || t, max);
}
