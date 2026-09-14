import type { Article } from './types';

/* SOURCES:
 * 1. Coastal and other popular RV destinations run close to full during summer and holiday
 *    peaks, with lower occupancy off-season. https://sageoutdooradvisory.com/blog/rv-resort-industry-overview-2024/
 *    checked 2026-09-13.
 * 2. The Myrtle Beach area holds more than 30 camping destinations along its coastline, and
 *    summer is the area's busiest camping season, though camping options exist year-round.
 *    https://thedyrt.com/magazine/local/myrtle-beach-camping-trip/ checked 2026-09-13.
 * 3. Ocean Lakes Family Campground in Myrtle Beach sits on 310 oceanfront acres with 859
 *    campsites and is described as the largest campground on the East Coast — cited only as
 *    geography/scale context for how large a Grand Strand campground property can run, not as
 *    a TIMELESS customer. https://www.oceanlakes.com/about-us/ checked 2026-09-13.
 * 4. The Myrtle Beach area draws over 17 million visitors annually and has more than 80
 *    championship golf courses and 35-plus miniature golf courses.
 *    https://www.visitmyrtlebeach.com/media/media-resources/fact-sheet checked 2026-09-13.
 */

export const COMMERCIAL_4: Article[] = [
  {
    slug: 'rv-resorts-and-campgrounds',
    short: 'RV resorts & campgrounds',
    kind: 'hospitality',
    title: 'Turf Maintenance for RV Resorts & Campgrounds | TIMELESS',
    description: `Turf care for Grand Strand RV resorts and campgrounds: site pads, dog walks, play and lawn-game areas, worked around check-in and check-out.`,
    h1: 'Turf maintenance for RV resorts and campgrounds',
    lede: `An RV resort's turf works harder than a backyard's: the same pad, the same pet loop, no off-season in summer.`,
    question: 'Do you maintain artificial turf at RV resorts and campgrounds?',
    answer: `Yes. TIMELESS Turf Restoration cleans and restores artificial turf at RV resorts and campgrounds across the Grand Strand: site pads and patios, pet-relief loops, playgrounds and lawn-game areas. We treat hookup-area spills with the same enzyme and antimicrobial approach as any organic residue, turn a site around between guests, and work site by site so the rest of the property stays open.`,
    takeaways: [
      `Occupancy swings hard by season — the schedule follows it.`,
      `Sites turn over between guests, in the open, not fenced.`,
      `Hookup spills get the same enzyme and antimicrobial treatment.`,
      `Got a mini golf hole? That's covered on our mini golf page.`,
    ],
    sections: [
      { h2: `What RV resort turf goes through`, html: `<p>Site pads take tire and jack pressure stay after stay; pet loops see a different dog nearly every night; play areas take barefoot traffic and sunscreen all season.</p><div class="callout callout--warn"><b>Heads up.</b> What reaches turf near a hookup is usually a dripping fitting or spilled dish water, not raw waste — we treat it the same as any organic spill.</div>` },
      { h2: `What a visit covers`, html: `<div class="tbl"><table><thead><tr><th>Zone</th><th>What we do</th></tr></thead><tbody><tr><td>Site pads</td><td><a href="/services/hard-water-and-stain-removal/">Brushed, spot-treated</a></td></tr><tr><td>Pet loops</td><td><a href="/services/pet-odor-removal/">Enzyme treatment</a>, antimicrobial pass</td></tr><tr><td>Play areas</td><td>Debris cleared, <a href="/services/power-brushing/">power brushed</a></td></tr><tr><td>Shaded sites</td><td><a href="/services/algae-and-mold-removal/">Algae check</a> and treatment</td></tr></tbody></table></div>` },
      { h2: `Occupancy and turnover`, html: `<p>Occupancy runs near full in summer and drops well under that off-season, so we build a standing schedule around that curve, heavier in-season, lighter in the off-months.</p>` },
      { h2: `Scheduling around check-in and check-out`, html: `<p>Most parks run a gap between checkout and the next check-in. We phase across the property in that order, occupied sites left alone, checked-out sites reset first.</p>` },
      { h2: `What it costs`, html: `<p>Site pads and pet loops price by our published <a href="/pricing/">bands</a>, from $199. A full property almost always crosses 5,000 square feet once measured, so it is walked and quoted as one program.</p>` },
    ],
    faq: [
      { q: `Do you adjust the schedule for the off-season?`, a: `Yes. Occupancy swings hard between summer and winter here, and the standing program follows that curve, not a flat monthly visit.` },
      { q: `Can you work while sites are occupied?`, a: `Usually. We phase around checkout and check-in, leaving occupied sites alone and resetting the ones that just turned over.` },
      { q: `Do you treat spills from water or sewer hookups?`, a: `Yes, the same enzyme and antimicrobial approach as any organic residue, though most of what we find is a dripping fitting, not raw waste.` },
      { q: `Is a whole property quoted like one backyard?`, a: `No. Most campgrounds run well past 5,000 square feet once every pad and loop is added up, so we measure and walk it first.` },
    ],
    services: ['pet-odor-removal', 'antimicrobial-sanitizing', 'hard-water-and-stain-removal'],
    problems: ['black-patches-algae-on-artificial-grass', 'matted-artificial-grass-walking-paths'],
    guides: ['coastal-turf-maintenance-calendar'],
    related: ['mini-golf-courses', 'vacation-rentals-and-property-managers', 'resorts-and-oceanfront-condos', 'family-entertainment-centers-and-attractions'],
    updated: '2026-09-14',
  },
  {
    slug: 'family-entertainment-centers-and-attractions',
    short: 'Attractions & FECs',
    kind: 'recreation',
    title: 'Family Entertainment Center Turf Care | TIMELESS',
    description: `Turf cleaning for Grand Strand attractions: play areas, lawn games, splash-pad surrounds and queue lines, worked before opening.`,
    h1: 'Turf care for family entertainment centers and attractions',
    lede: `A family attraction's turf never gets a quiet day in season: strollers, kids and a splash pad's overspray all day.`,
    question: 'Do you clean the artificial turf at family attractions and entertainment centers?',
    answer: `Yes. TIMELESS Turf Restoration cleans non-golf turf at family entertainment centers and attractions across the Grand Strand: play areas, lawn-game zones, queue lines, splash-pad surrounds and event lawns. We clear spilled drinks, food, gum and sunscreen, treat algae near water features, and schedule before opening or in the slower off-season so the attraction never has to close.`,
    takeaways: [
      `Strollers and crowds mat down paths faster than any lawn.`,
      `Spilled drinks, gum and sunscreen show up daily, not occasionally.`,
      `Splash-pad overspray grows algae the way constant shade does.`,
      `Golf holes on-site are covered on our mini golf page.`,
    ],
    sections: [
      { h2: `What attraction turf goes through`, html: `<p>Strollers, running kids and standing crowds mat down a queue line or path in a season, wear a residential yard would take years to show.</p><div class="callout callout--warn"><b>Heads up.</b> A splash pad's overspray keeps turf damp longer than shade alone, which is exactly what algae needs.</div>` },
      { h2: `What a visit covers`, html: `<div class="tbl"><table><thead><tr><th>Zone</th><th>What we do</th></tr></thead><tbody><tr><td>Play & lawn-game zones</td><td><a href="/services/power-brushing/">Debris cleared, brushed</a></td></tr><tr><td>Queue lines</td><td>Matted paths lifted, edges checked</td></tr><tr><td>Splash-pad surrounds</td><td><a href="/services/algae-and-mold-removal/">Algae treatment</a>, never chlorine</td></tr><tr><td>Event lawns</td><td><a href="/services/hard-water-and-stain-removal/">Spot stain treatment</a></td></tr></tbody></table></div>` },
      { h2: `Scheduling before opening`, html: `<p>Routine visits run before the gates open, early enough to dwell and dry before the first car parks. A full restoration fits the slower months after Labor Day.</p>` },
      { h2: `What it costs`, html: `<p>A single play area or queue line often fits our standard <a href="/pricing/">Premium Restoration bands</a>, from $299. A full property almost always crosses 5,000 square feet and is quoted after a walk-through.</p>` },
    ],
    faq: [
      { q: `Can you clean without closing part of the attraction?`, a: `Usually. Routine visits run before opening so treatment dries before the first guest, and a full restoration waits for the slower months.` },
      { q: `Does splash-pad overspray cause algae the way shade does?`, a: `Yes. Constant moisture keeps turf damp longer than shade alone, exactly the condition algae needs, so those zones get checked every visit.` },
      { q: `Do you clean mini golf holes at an attraction too?`, a: `That's covered on our mini golf page — it's usually a different turf product, built for putting, not play or queue-line turf.` },
      { q: `Is a whole property quoted like a backyard?`, a: `No. Most attractions run well past 5,000 square feet once every zone is added up, so we measure and walk it first.` },
    ],
    services: ['hard-water-and-stain-removal', 'algae-and-mold-removal', 'power-brushing'],
    problems: ['artificial-grass-feels-sticky-or-tacky', 'matted-artificial-grass-walking-paths', 'black-patches-algae-on-artificial-grass'],
    howtos: ['remove-chewing-gum-from-artificial-turf'],
    related: ['mini-golf-courses', 'rv-resorts-and-campgrounds', 'restaurants-breweries-and-patios'],
    updated: '2026-09-14',
  },
  {
    slug: 'model-homes-and-sales-centers',
    short: 'Model homes & sales centers',
    kind: 'partners',
    title: 'Model Home & Sales Center Turf Care | TIMELESS',
    description: `Presentation care for Grand Strand model homes: weekend walk-throughs, footpaths, and a display green or pet yard kept show-ready.`,
    h1: 'Turf care for model homes and sales centers',
    lede: `A model home's turf is a sales tool, not a lawn — it has to look the same every day, not just on weekends.`,
    question: 'Do you maintain the turf at model homes and new-community sales centers?',
    answer: `Yes. TIMELESS Turf Restoration keeps turf presentation-ready at Grand Strand model homes and sales centers: a walk-through before weekend traffic, footpaths brushed out, pollen and leaves cleared in season, and a model's putting green or pet-yard display kept sharp for photos. This is standing presentation care, not the post-construction clean covered on our builders page.`,
    takeaways: [
      `Standing presentation care, not the one-time closing-day clean.`,
      `We time the visit before the weekend rush, not a fixed day.`,
      `A model's green or pet yard is part of the sale.`,
      `One schedule can cover every model in a community.`,
    ],
    sections: [
      { h2: `Presentation care, not the closing-day clean`, html: `<p>A model has to read as move-in ready every day it's open, for as long as the community sells, not just the day it closed — a different job from our <a href="/commercial/custom-home-builders-and-post-construction/">builders page</a>.</p>` },
      { h2: `Ahead of the weekend, ahead of the season`, html: `<p>Sales-center traffic runs heaviest Friday through the weekend, and pollen and leaf drop add their own layer in season. We time the walk-through to land before the rush, not on a fixed date.</p>` },
      { h2: `What a visit covers`, html: `<div class="tbl"><table><thead><tr><th>Area</th><th>What we do</th></tr></thead><tbody><tr><td>Front lawn & footpaths</td><td><a href="/services/power-brushing/">Brushed</a> to lift matted paths</td></tr><tr><td>Green or pet-yard display</td><td><a href="/services/putting-green-restoration/">Green restoration</a> or grooming</td></tr><tr><td>Seasonal debris</td><td>Pollen and leaves cleared, rinsed</td></tr></tbody></table></div>` },
      { h2: `Photos, and working around your landscaping crew`, html: `<p>Every Premium Restoration visit includes dated photos, proof the model was reset before a specific weekend. We coordinate timing with whatever landscaping crew already services the community.</p>` },
      { h2: `What it costs`, html: `<p>A single model prices per our published <a href="/pricing/">bands</a>: Essential Clean from $199, Premium Restoration from $299. Several models in one community are usually better served by a standing schedule, quoted after a walk-through.</p>` },
    ],
    faq: [
      { q: `How is this different from your post-construction cleanup?`, a: `The post-construction clean is a one-time visit before a home closes, covered on our builders page. This is standing care for as long as the sales office is open.` },
      { q: `Can you time the visit before a weekend without a fixed weekly date?`, a: `Yes. Sales-center traffic runs heaviest Friday through the weekend, so we time the walk-through just ahead of that.` },
      { q: `Do you maintain a model's putting green or pet-yard display?`, a: `Yes, the same restoration process as any backyard green or pet turf, kept to a standard that reads well in photos.` },
      { q: `Can you set up one schedule for a whole community of model homes?`, a: `Yes. A standing rotation across the community, quoted once we've walked the site rather than per model.` },
    ],
    services: ['power-brushing', 'putting-green-restoration', 'artificial-turf-cleaning'],
    guides: ['coastal-turf-maintenance-calendar'],
    related: ['custom-home-builders-and-post-construction', 'real-estate-agents-and-listing-prep', 'installer-and-landscaper-partners'],
    updated: '2026-09-14',
  },
];
