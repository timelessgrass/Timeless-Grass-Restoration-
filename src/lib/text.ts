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

/** A hero lede past this many words runs 7+ lines on a phone and pushes the buttons below the fold. */
export const LEDE_MAX = 30;
/** The standfirst a long lede is cut down to. */
const DEK_MAX = 25;
const words = (s: string) => strip(s).split(' ').filter(Boolean).length;

/**
 * Splits a long article lede into a short hero standfirst and the rest, which opens the article body, so no
 * copy is lost. A lede that already fits stays whole. Otherwise the dek is the leading sentences that fit in
 * DEK_MAX words, or a hand-written `dek` (src/data/deks.ts) when even the first sentence is longer; the build
 * fails if neither exists.
 */
export function splitLede(lede: string, dek?: string): { dek: string; rest: string } {
  if (dek) return { dek, rest: lede };
  if (words(lede) <= LEDE_MAX) return { dek: lede, rest: '' };
  const sentences = lede.split(/(?<=[.!?])\s+(?=[A-Z“"(])/);
  let n = 0, k = 0;
  while (k < sentences.length && n + words(sentences[k]) <= DEK_MAX) n += words(sentences[k++]);
  if (!k) throw new Error(`Lede needs a hand-written dek in src/data/deks.ts (first sentence over ${DEK_MAX} words): ${lede.slice(0, 90)}…`);
  return { dek: sentences.slice(0, k).join(' '), rest: sentences.slice(k).join(' ') };
}

/** Word count of a lede, for the SubHero length check. */
export const ledeWords = words;
