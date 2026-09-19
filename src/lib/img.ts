/**
 * Responsive photos. `python3 scripts/image-cuts.py` writes the WebP cuts next to each source and the
 * manifest in src/data/image-cuts.json; this turns a source path into the srcset of the cuts that exist,
 * so a phone downloads a 480px file instead of the 1400px original.
 *
 *   <img {...photo(s.image.src, '(max-width: 900px) 92vw, 520px')} alt={s.image.alt} loading="lazy" decoding="async">
 *
 * `sizes` is how wide the image actually renders, so give it the real CSS width, not the file's width.
 */
import cuts from '../data/image-cuts.json';

type Cut = { widths: number[]; width: number; height: number };
const MAP = cuts as Record<string, Cut>;
const cut = (src: string, w: number) => src.replace(/\.(jpe?g|png|webp)$/i, `-${w}.webp`);

export const photo = (src: string, sizes: string) => {
  const c = MAP[src];
  if (!c || c.widths.length === 0) return { src, sizes: undefined, srcset: undefined };
  const widest = c.widths[c.widths.length - 1];
  return {
    src: cut(src, widest),
    srcset: c.widths.map((w) => `${cut(src, w)} ${w}w`).join(', '),
    sizes,
    width: c.width,
    height: c.height,
  };
};
