# TIMELESS Turf Restoration

Static site (Astro 5, no client framework) for the turf cleaning and restoration company on the Grand Strand. Built by To The Max Media.

## Run

```
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
```

Netlify: build `npm run build`, publish `dist` (declared in `netlify.toml`). Two Netlify Forms: `quote` (home and /quote/) and `fb-followup` (/fb/). Enable form notifications after the first deploy.

## Before launch (all in `src/data/site.ts`)

- `PRELAUNCH = true` puts `noindex` on every page and a blanket `Disallow` in robots.txt. Flip to `false` only when the items below are settled.
- `brand.name` — working name from Brian's call. Logo still reads "Grass & Greens".
- `brand.phone` — currently the Grass & Greens number. A separate brand needs its own local (843) number so the Google Business Profile and the site match byte-for-byte.
- `SITE_URL` — no domain registered yet; canonicals and the sitemap use it.
- Then: create the GBP as a service-area business, mirror NAP to Yelp / Nextdoor / Bing / Apple / Facebook, verify Search Console + Bing Webmaster, submit `/sitemap.xml`.

## Where things live

| What | Where |
|---|---|
| Business facts, pricing, memberships | `src/data/site.ts` |
| Services (10) | `src/data/services.ts` |
| Problem pages (15) | `src/data/problems.ts` |
| Guides (5) | `src/data/guides.ts` |
| Town pages (9), each with `sources[]` | `src/data/towns.ts` |
| Layout, entity graph (one `#business` node) | `src/layouts/Base.astro` |
| Research notes | `research/` |
| Original static build | `archive/` |

Every page: unique title ≤60, description ≤160, self-canonical, breadcrumbs + `BreadcrumbList`, `WebPage` → `#business`, `FAQPage` mirroring the printed FAQ, an answer-box (`.answer-box__a`, speakable). Never `aggregateRating`.

## Adding content

- A new town: add an entry to `TOWNS` with at least three blocks that are true only of that town, each fact traceable to a URL in `sources[]`. The sitemap, footer, service pages and area index pick it up automatically.
- A new problem or guide: add to the array; link it from the service that fixes it (`problems[]`) so it is never orphaned.
- Job photos from Brian: drop into `public/assets/img/`, reference from the town, service or problem page. Before/after pairs replace the "our work" note on the homepage.
