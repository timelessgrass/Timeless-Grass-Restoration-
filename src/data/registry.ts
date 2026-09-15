/** One import for every content tier, so pages, sitemap, footer and llms.txt never disagree. */
import { SERVICES } from './services';
import { PROBLEMS } from './problems';
import { PROBLEMS_2 } from './problems-2';
import { PROBLEMS_3 } from './problems-3';
import { GUIDES } from './guides';
import { GUIDES_2 } from './guides-2';
import { GUIDES_3 } from './guides-3';
import { COMPARISONS } from './comparisons';
import { TOWNS } from './towns';
import { TOWNS_2 } from './towns-2';
import { HOWTOS as HOWTOS_1 } from './howtos';
import { HOWTOS_2 } from './howtos-2';
import { CARE } from './care';
import { COSTS } from './costs';
import { EXPLAINERS } from './explainers';
import { COMMERCIAL as COMMERCIAL_1 } from './commercial';
import { COMMERCIAL_2 } from './commercial-2';
import { COMMERCIAL_3 } from './commercial-3';
import { GUIDES_4 } from './guides-4';
import { GREENS_1 } from './greens-1';
import { GREENS_2 } from './greens-2';
import { GREENS_3 } from './greens-3';
import { COMMERCIAL_4 } from './commercial-4';
import { NEIGHBORHOODS_1 } from './neighborhoods-1';
import { NEIGHBORHOODS_2 } from './neighborhoods-2';
import { NEIGHBORHOODS_3 } from './neighborhoods-3';
import { NEIGHBORHOODS_4 } from './neighborhoods-4';
import { LOCAL_SERVICES_1 } from './local-services-1';
import { LOCAL_SERVICES_2 } from './local-services-2';
import { brand } from './site';

const uniq = <T extends { slug: string }>(arr: T[], name: string): T[] => {
  const seen = new Set<string>();
  for (const x of arr) { if (seen.has(x.slug)) throw new Error(`duplicate slug in ${name}: ${x.slug}`); seen.add(x.slug); }
  return arr;
};

export const ALL_SERVICES = SERVICES;
export const ALL_PROBLEMS = uniq([...PROBLEMS, ...PROBLEMS_2, ...PROBLEMS_3], 'problems');
export const ALL_GUIDES = uniq([...GUIDES, ...GUIDES_2, ...GUIDES_3, ...GUIDES_4, ...COMPARISONS], 'guides');
export const HOWTOS = uniq([...HOWTOS_1, ...HOWTOS_2], 'howtos');
export const ALL_TOWNS = uniq([...TOWNS, ...TOWNS_2], 'towns');
export const COMMERCIAL = uniq([...COMMERCIAL_1, ...COMMERCIAL_2, ...COMMERCIAL_3, ...COMMERCIAL_4], 'commercial');
export const GREENS = uniq([...GREENS_1, ...GREENS_2, ...GREENS_3], 'greens');
export const NEIGHBORHOODS = uniq([...NEIGHBORHOODS_1, ...NEIGHBORHOODS_2, ...NEIGHBORHOODS_3, ...NEIGHBORHOODS_4], 'neighborhoods');
export { CARE, COSTS, EXPLAINERS };
export const LOCAL_SERVICES = (() => { const all = [...LOCAL_SERVICES_1, ...LOCAL_SERVICES_2]; const seen = new Set<string>(); for (const l of all) { const k = `${l.town}/${l.service}`; if (seen.has(k)) throw new Error(`duplicate local page ${k}`); seen.add(k); } return all; })();

/** Tier metadata: base path, index title, kicker. */
export const TIERS = {
  problems: { base: '/turf-problems/', name: 'Turf problems', kicker: 'Problem' },
  howtos: { base: '/how-to/', name: 'How-to', kicker: 'How-to' },
  guides: { base: '/guides/', name: 'Guides', kicker: 'Guide' },
  care: { base: '/turf-care/', name: 'Turf care', kicker: 'Turf care' },
  costs: { base: '/cost/', name: 'Costs', kicker: 'Cost' },
  explainers: { base: '/turf-101/', name: 'Turf 101', kicker: 'Turf 101' },
  commercial: { base: '/commercial/', name: 'Commercial', kicker: 'Commercial' },
  greens: { base: '/putting-greens/', name: 'Putting greens', kicker: 'Putting greens' },
  neighborhoods: { base: '/neighborhoods/', name: 'Neighborhoods', kicker: 'Neighborhood' },
} as const;

export const findProblem = (slug: string) => ALL_PROBLEMS.find((p) => p.slug === slug);
export const findGuide = (slug: string) => ALL_GUIDES.find((g) => g.slug === slug);
export const findService = (slug: string) => SERVICES.find((s) => s.slug === slug);
export const findTown = (slug: string) => ALL_TOWNS.find((t) => t.slug === slug);
export const findHowto = (slug: string) => HOWTOS.find((h) => h.slug === slug);

/** Description helper: append the phone when the writer left room for it. */
/** Description helper: append the phone when the writer left room; trim overruns at a sentence boundary so nothing exceeds 160. */
export const withPhone = (d: string) => {
  if (d.includes(brand.phone)) return d;
  if (d.length <= 139) return `${d} Call ${brand.phone}.`;
  if (d.length <= 160) return d;
  const cut = d.slice(0, 157); const i = Math.max(cut.lastIndexOf('. '), cut.lastIndexOf(', '), cut.lastIndexOf(' '));
  return cut.slice(0, i > 60 ? i : 157).replace(/[,\s]+$/, '') + (cut.charAt(i) === '.' ? '.' : '…');
};

/** Every indexable route, for the sitemap and llms.txt. */
export const allRoutes = (): string[] => [
  '/', '/services/', '/pricing/', '/about/', '/privacy/', '/service-areas/',
  ...Object.values(TIERS).map((t) => t.base),
  ...SERVICES.map((s) => `/services/${s.slug}/`),
  ...ALL_PROBLEMS.map((p) => `/turf-problems/${p.slug}/`),
  ...HOWTOS.map((h) => `/how-to/${h.slug}/`),
  ...ALL_GUIDES.map((g) => `/guides/${g.slug}/`),
  ...CARE.map((c) => `/turf-care/${c.slug}/`),
  ...COSTS.map((c) => `/cost/${c.slug}/`),
  ...EXPLAINERS.map((e) => `/turf-101/${e.slug}/`),
  ...COMMERCIAL.map((c) => `/commercial/${c.slug}/`),
  ...GREENS.map((g) => `/putting-greens/${g.slug}/`),
  ...NEIGHBORHOODS.map((n) => `/neighborhoods/${n.slug}/`),
  ...ALL_TOWNS.map((t) => `/service-areas/${t.slug}/`),
  ...LOCAL_SERVICES.map((l) => `/service-areas/${l.town}/${l.service}/`),
];
