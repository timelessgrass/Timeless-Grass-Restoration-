/**
 * The one place every business fact lives. Pages, JSON-LD, llms.txt and the vCard
 * all read from here so NAP (name / phone / area) can never drift between them.
 *
 * OPEN ITEMS (change here, nowhere else):
 *  - NAME: "TIMELESS Turf Restoration" is the working name Brian used on the
 *    2026-09-04 call (00:50:09). Confirm before launch. The logo matches it; every logo
 *    file is generated from brand/logo-source.png by scripts/brand-assets.py.
 *  - PHONE: 303-349-2368 is the only real number we have. A separate brand needs
 *    its own local (843) number so the GBP and this site match byte-for-byte.
 *  - SITE_URL: live since 2026-09-14. Netlify's primary domain is the bare domain and
 *    www redirects to it, so canonicals, the sitemap and every ad link use the bare one.
 *  - PRELAUNCH: while true every page is noindex and robots.txt blocks crawling
 *    (Meta's ad and link-preview crawlers excepted). Flip to false only after name,
 *    phone and GBP are settled.
 */
export const PRELAUNCH = true;
export const SITE_URL = 'https://timelessturfrestoration.com';
/** Meta Pixel (Events Manager, 2026-09-14). Loads on every page; PageView on load, Lead on a submitted quote
 *  form, Contact on a call/text tap or the Instant Form follow-up form. Set to '' to switch it off. */
export const META_PIXEL_ID = '1047663254935147';
/** Make.com webhooks the site's lead forms post to (automations/make/README.md). No Netlify Forms. */
export const LEAD_HOOKS = {
  organic: 'https://hook.us2.make.com/2rtexoaexdzczor72y9xtw2xyo29pf42', // "quote" form → Organic website lead scenario
  campaign: 'https://hook.us2.make.com/6sad5csnuuzxxnwzfnao957roumxfdky', // lp-* and fb-* forms → Facebook leads router
};

export const brand = {
  name: 'TIMELESS Turf Restoration',
  short: 'Timeless',
  tagline: 'Turf cleaning, pet odor removal & putting green restoration on the Grand Strand',
  owner: 'Brian',
  ownerYears: 13, // Brian, 2026-09-04 call 00:32:45: "I've been doing turf for 13 years"
  founded: 2024,
  phone: '303-349-2368',
  phoneHref: 'tel:+13033492368',
  smsHref: 'sms:+13033492368',
  email: 'timelessgrass@gmail.com',
  /** Sister company: same owner, installs turf. Linked once, in the footer, never with shared NAP. */
  sister: { name: 'TIMELESS Grass & Greens', url: 'https://www.timelessgrass.com' },
};

/** The service polygon as the user drew it on 2026-09-12: Shallotte NC to Burgess SC,
 *  along the coast and inland through Loris and Conway. */
export const area = {
  name: 'the Grand Strand',
  short: 'Grand Strand',
  line: 'Shallotte, NC to Burgess, SC — the coast, plus Conway, Loris and Longs inland',
  counties: ['Horry County, SC', 'Brunswick County, NC'],
};

export type PriceRow = { size: string; sqft: [number, number | null]; essential: number | null; premium: number | null };
/** Launch pricing from the 2026-08-30 planning doc Brian adopted (call 00:37:31). Priced by sq ft + condition, never hourly. */
export const pricing = {
  updated: '2026-09-12',
  minimum: 199,
  rows: <PriceRow[]>[
    { size: 'Up to 500 sq ft', sqft: [0, 500], essential: 199, premium: 299 },
    { size: '501–1,000 sq ft', sqft: [501, 1000], essential: 249, premium: 399 },
    { size: '1,001–1,500 sq ft', sqft: [1001, 1500], essential: 299, premium: 499 },
    { size: '1,501–2,000 sq ft', sqft: [1501, 2000], essential: 349, premium: 599 },
    { size: '2,001–3,000 sq ft', sqft: [2001, 3000], essential: 449, premium: 749 },
    { size: '3,001–5,000 sq ft', sqft: [3001, 5000], essential: 599, premium: 899 },
    { size: 'Over 5,000 sq ft', sqft: [5001, null], essential: null, premium: null },
  ],
  essential: {
    name: 'Essential Clean',
    for: 'Regular upkeep for people-only yards, or a refresh between deep cleans.',
    includes: ['Debris removal', 'Turf blowing', 'Power brushing', 'Surface rinse', 'Basic spot treatment', 'Final grooming'],
    excludes: ['Pet-odor & antimicrobial treatment', 'Infill redistribution'],
  },
  premium: {
    name: 'Premium Restoration',
    for: 'A deep clean for pet yards, odor, algae and tired, matted turf.',
    includes: ['Everything in Essential Clean', 'Deep turf cleaning', 'Pet-odor treatment', 'Antimicrobial treatment', 'Organic buildup (algae, mold) treatment', 'Detailed grooming', 'Infill redistribution', 'Minor weed & debris removal', 'Edge & seam inspection', 'Before & after photos'],
    excludes: [],
  },
  addons: [
    { name: 'Heavy pet-odor treatment', price: '$75–$150' },
    { name: 'Antimicrobial treatment (stand-alone)', price: '$75–$125' },
    { name: 'Weed removal', price: 'from $75' },
    { name: 'Infill redistribution', price: '$0.35–$0.65 / sq ft' },
    { name: 'New infill, installed', price: '$0.75–$1.50 / sq ft' },
    { name: 'Minor turf repair', price: 'from $250' },
    { name: 'Seam repair', price: 'from $250' },
    { name: 'Edge repair', price: 'from $175' },
    { name: 'Pet spot treatment', price: '$50–$100' },
    { name: 'Deep stain treatment', price: '$75–$150' },
  ],
  memberships: [
    { slug: 'essential-care', name: 'Essential Care', monthly: 89, visits: 4, for: 'Light maintenance, four times a year.', includes: ['Blow-off & grooming', 'Light rinse', 'Basic odor treatment', 'Priority scheduling'] },
    { slug: 'timeless-elite', name: 'TIMELESS ELITE', monthly: 139, visits: 4, for: 'A Premium Restoration every quarter.', includes: ['Deep cleaning', 'Antimicrobial & pet-odor treatment', 'Grooming & brushing', 'Infill conditioning', 'Edge & seam inspection', 'Minor spot treatment', 'Priority scheduling', '10% off repairs & add-ons'] },
    /* Pet Turf ELITE: the planning doc gives the price only. What it adds over ELITE is not on file — the card says so. */
    { slug: 'pet-turf-elite', name: 'Pet Turf ELITE', monthly: 169, visits: 4, for: 'Built for multi-dog and daily-potty yards.', includes: ['Everything in TIMELESS ELITE'], note: 'The extra pet-yard steps in this plan are being finalized with Brian — ask when he calls.' },
  ],
};

export const money = (n: number) => `$${n.toLocaleString('en-US')}`;
