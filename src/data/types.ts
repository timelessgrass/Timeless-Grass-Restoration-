/** Shared article shape for the how-to, care, cost, turf-101, commercial and comparison tiers. */
export type Faq = { q: string; a: string };
export type Section = { h2: string; html: string };
export type Img = { src: string; alt: string };
export type DiagramName = 'cross-section' | 'green';
export type Article = {
  slug: string;
  /** short label for menus, footer, sidebars (≤ 32 chars) */
  short: string;
  /** tier-specific sub-kind, e.g. 'stain' | 'odor' for how-tos; 'comparison' for guides */
  kind?: string;
  /** ≤ 60 chars, buyer phrasing, ends " | TIMELESS" where it fits */
  title: string;
  /** ≤ 140 chars, no phone number (the template appends it) */
  description: string;
  h1: string;
  /** 40–70 words under the h1 */
  lede: string;
  /** the literal question this page answers */
  question: string;
  /** 50–70 word direct answer; names TIMELESS Turf Restoration and the Grand Strand */
  answer: string;
  /** 3–4 one-line takeaways */
  takeaways?: string[];
  image?: Img;
  diagram?: DiagramName;
  /** 4–8 sections, 500–900 words total, HTML in `html` (p, ul, ol, strong, a, h3, div.tbl>table, div.callout) */
  sections: Section[];
  /** 3–5 questions; answers lead with the direct answer */
  faq: Faq[];
  services?: string[];
  problems?: string[];
  guides?: string[];
  howtos?: string[];
  /** same-tier slugs */
  related?: string[];
  updated: string;
};

/** A neighborhood guide: an Article about one named community, filed under its town. */
export type Neighborhood = Article & {
  /** display name, e.g. 'Grande Dunes' */
  place: string;
  /** town slug from towns.ts / towns-2.ts */
  town: string;
  /** every neighborhood-specific fact on the page, with the page that supports it */
  sources: { label: string; url: string }[];
};
