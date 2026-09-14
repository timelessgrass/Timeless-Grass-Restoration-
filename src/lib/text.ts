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
 * Card teaser from an answer or lede: skips a bare "Yes." / "No." opener, then keeps the text from its
 * first word and cuts at the last real sentence end (the next word starts a new sentence) under `max`.
 */
export function teaser(text: string, max = 150): string {
  const t = strip(text).replace(/^(yes|no)\s*[.,!:;—–-]\s*/i, '');
  if (t.length <= max) return t;
  const head = t.slice(0, max);
  const ends = [...head.matchAll(/[.!?](?=\s+[A-Z“"(])/g)].map((m) => m.index ?? 0).filter((n) => n >= 50);
  return ends.length ? head.slice(0, ends[ends.length - 1] + 1) : clip(t, max);
}
