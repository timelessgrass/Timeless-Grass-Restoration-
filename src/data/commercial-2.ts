import type { Article } from './types';

/* SOURCES:
 * 1. The Grand Strand holds the Guinness World Record for the highest concentration of miniature
 *    golf courses: 33 active minigolf venues and at least 53 eighteen-hole courses across roughly
 *    60 miles of coastline (about one course every 1.1 miles), verified 1 September 2022.
 *    https://www.guinnessworldrecords.com/world-records/717869-highest-concentration-of-miniature-golf-courses
 *    checked 2026-09-13.
 * 2. Miniature golf greens are usually built with a distinct short-pile synthetic carpet product
 *    made for putt-putt play, sometimes installed without infill, rather than the taller
 *    residential turf or sand-filled putting-green product used on a backyard green.
 *    https://www.greatmats.com/the-best-artificial-grass-for-indoor-outdoor-putt-putt-courses.php
 *    checked 2026-09-13.
 * 3. Practice putting greens often see more traffic than any other green on a course; the USGA's
 *    guidance for superintendents is to move hole locations on the practice green more often than
 *    on the course itself, sometimes rotating through zones of the green, to spread that wear.
 *    https://www.usga.org/content/usga/home-page/course-care/green-section-record/58/16/move-holes-to-move-traffic.html
 *    checked 2026-09-13.
 * 4. Home-use golf simulator turf can last several years, but high-traffic commercial simulator
 *    turf wears faster, and repeated hitting from the same spot can create depressions that
 *    change ball position and strike; standard care guidance includes keeping seams flat and
 *    edges secured. https://www.carlofet.com/blog/golf-simulator-flooring checked 2026-09-13.
 */

export const COMMERCIAL_2: Article[] = [
  {
    slug: 'mini-golf-courses',
    short: 'Mini golf courses',
    kind: 'recreation',
    title: 'Mini Golf Course Turf Cleaning | TIMELESS',
    description: `Turf cleaning for Grand Strand mini golf courses: sticky spills, gum, shaded-hole algae, worked hole by hole before opening or off-season.`,
    h1: 'Turf care for miniature golf courses',
    lede: `The Grand Strand has more mini golf courses per mile than anywhere in the country, and every one runs from open to close, all season.`,
    question: 'Do you clean and restore the turf on miniature golf courses?',
    answer: `Yes. TIMELESS Turf Restoration cleans and restores turf on Grand Strand mini golf courses: debris, gum and drink residue off bumpers and borders, algae treated on shaded holes, cups cleared every visit. We work hole by hole, before opening or in the slower winter months, so the rest of the course stays open.`,
    takeaways: [
      `Grand Strand holds the world record for mini golf courses per mile.`,
      `Mini golf turf is often shorter carpet, sometimes without infill.`,
      `Spilled drinks draw fire ants and leave sticky patches.`,
      `We work hole by hole so the course stays open.`,
    ],
    sections: [
      { h2: `What mini golf turf goes through`, html: `<p>Mini golf turf is often a shorter, denser carpet than a lawn, sometimes laid without infill, and it never gets a day off in season.</p><ul class="checklist"><li>Ten-plus hours of play, every day in season</li><li>Spilled drinks and sunscreen draw fire ants, leave sticky patches</li><li><a href="/how-to/remove-chewing-gum-from-artificial-turf/">Gum</a> works into the fibers</li><li>Shaded and water-feature holes grow <a href="/turf-problems/black-patches-algae-on-artificial-grass/">algae</a> faster</li></ul>` },
      { h2: `What a visit covers`, html: `<p>A visit runs the same core steps, with more attention where mini golf gets dirty differently.</p><div class="tbl"><table><thead><tr><th>Where</th><th>What we do</th></tr></thead><tbody><tr><td>Bumpers & borders</td><td>Cleared, brushed each visit</td></tr><tr><td>Sticky spots</td><td><a href="/services/hard-water-and-stain-removal/">Spot-treated</a>, rinsed</td></tr><tr><td>Shaded holes</td><td>Turf-safe <a href="/services/algae-and-mold-removal/">algae treatment</a></td></tr><tr><td>Cups</td><td>Cleared on every visit</td></tr></tbody></table></div>` },
      { h2: `Scheduling around your hours`, html: `<p>We work hole by hole before opening or in the slower winter months, roping off one hole at a time so the rest of the course stays open and playable.</p>` },
      { h2: `Documentation and runoff`, html: `<p>Dated before-and-after photos come with every Premium Restoration visit, useful if a guest or owner asks what was applied.</p><div class="callout callout--warn"><b>Heads up.</b> Courses sit close to parking and storm drains, so solids are bagged and treatments dwell before any rinse runs off.</div>` },
      { h2: `What it costs`, html: `<p>An 18-hole course usually runs past 5,000 square feet once every hole is added up, so we measure and quote after a walk-through. A single hole or small course can land inside our <a href="/pricing/">Premium Restoration bands</a>, from $299.</p>` },
    ],
    faq: [
      { q: `Can you clean a course without closing it?`, a: `Yes. We work hole by hole, roping off one at a time, so the rest of the course stays open.` },
      { q: `Does spilled soda or sunscreen damage the turf?`, a: `No, not permanently. It leaves a sticky film if it sits, and we treat it like any patio spill, never bleach.` },
      { q: `What about holes that have faded from direct sun?`, a: `No. Cleaning does not reverse UV fade — that's a fading question, not a cleaning one.` },
      { q: `Is a whole course quoted like a backyard?`, a: `No. Most 18-hole courses run past 5,000 square feet once every hole is counted, so we measure and quote after a walk-through.` },
    ],
    services: ['hard-water-and-stain-removal', 'algae-and-mold-removal', 'power-brushing'],
    problems: ['fire-ants-in-artificial-grass', 'artificial-grass-feels-sticky-or-tacky', 'black-patches-algae-on-artificial-grass'],
    howtos: ['remove-chewing-gum-from-artificial-turf'],
    related: ['golf-courses-and-practice-facilities', 'indoor-golf-and-simulator-venues'],
    updated: '2026-09-14',
  },
  {
    slug: 'golf-courses-and-practice-facilities',
    short: 'Golf courses & ranges',
    kind: 'recreation',
    title: 'Synthetic Tee Line & Range Turf Care | TIMELESS',
    description: `Synthetic tee lines, practice greens and chipping areas for Grand Strand golf courses and ranges, worked around tee sheets and range hours.`,
    h1: 'Turf care for golf courses and practice facilities',
    lede: `A course or range's synthetic tee lines and practice greens take more rounds in a week than a backyard sees in a season.`,
    question: 'Do you maintain synthetic tee lines, practice greens and chipping areas at golf courses?',
    answer: `Yes. TIMELESS Turf Restoration cleans and restores synthetic tee lines, practice greens, chipping areas and cart-staging turf for Grand Strand courses and ranges: broken tees cleared, greens top-dressed and checked for speed, cart and pro-shop turf cleaned like any commercial lawn. Work is scheduled early or inside the maintenance window your tee sheet already blocks off.`,
    takeaways: [
      `Practice greens take more rounds than a backyard sees all year.`,
      `We rotate cup locations to spread wear, like superintendents do.`,
      `Work happens early or inside your existing maintenance window.`,
      `Residents in golf communities are covered on a separate page.`,
    ],
    sections: [
      { h2: `What course and range turf goes through`, html: `<p>A practice green takes more rounds before lunch than a backyard sees in a year, which is why superintendents move cup locations often to spread the wear.</p><ul class="checklist"><li>Tee lines wear in the stance band and collect broken tees</li><li>Chipping aprons wear from repeated short shots</li><li>Cart and pro-shop turf takes vehicle and foot traffic</li></ul>` },
      { h2: `What a visit covers`, html: `<p>A visit follows the same core steps, tuned to where each zone wears.</p><div class="tbl"><table><thead><tr><th>Zone</th><th>What we do</th></tr></thead><tbody><tr><td>Tee line</td><td><a href="/services/power-brushing/">Brushed</a>, tees cleared</td></tr><tr><td>Practice green</td><td>Top-dressed, rolled, speed checked</td></tr><tr><td>Chipping area</td><td>Brushed, apron and edges checked</td></tr><tr><td>Cart & pro shop</td><td>Cleaned like any commercial lawn</td></tr></tbody></table></div>` },
      { h2: `Scheduling around tee sheets`, html: `<p>We work early, before the first tee time, or inside whatever maintenance block the pro shop already holds, and rotate through green sections rather than closing the whole surface.</p>` },
      { h2: `Logging speed for the pro shop`, html: `<p>Every practice-green visit includes a speed check, logged for the shop, plus dated before-and-after photos with each <a href="/services/putting-green-restoration/">Premium Restoration</a> visit.</p>` },
      { h2: `What we don't do`, html: `<div class="callout callout--warn"><b>Heads up.</b> A tee line or mat worn through to the base is a resurfacing job, referred to our sister company, not something we patch.</div>` },
      { h2: `What it costs`, html: `<p>A single tee line or small chipping area often fits our standard <a href="/pricing/">bands</a>; a full facility with green and cart staging usually crosses 5,000 square feet and is quoted after a walk-through.</p>` },
    ],
    faq: [
      { q: `Do you work with course and range operators directly, not just residents?`, a: `Yes. This page covers course and range operators. Residents and HOAs in golf communities are covered on our <a href="/commercial/golf-communities-and-amenity-greens/">golf communities page</a>.` },
      { q: `Can the practice green stay open while you work?`, a: `Yes. We work it in sections, similar to rotating cup locations, rather than closing the whole surface.` },
      { q: `Do you log green speed?`, a: `Yes, every visit includes a speed reading, left on record for the pro shop.` },
      { q: `If a tee line or green mat is worn through, do you replace it?`, a: `No. We clean, brush and repair seams and edges. A surface worn through to the base is a resurfacing job for our sister company, TIMELESS Grass & Greens.` },
    ],
    services: ['power-brushing', 'putting-green-restoration', 'turf-repair'],
    problems: ['putting-green-rolls-slow-or-bumpy', 'matted-artificial-grass-walking-paths'],
    guides: ['putting-green-care-schedule'],
    related: ['golf-communities-and-amenity-greens', 'mini-golf-courses', 'indoor-golf-and-simulator-venues'],
    updated: '2026-09-14',
  },
  {
    slug: 'indoor-golf-and-simulator-venues',
    short: 'Indoor golf & simulators',
    kind: 'recreation',
    title: 'Golf Simulator & Indoor Putting Turf | TIMELESS',
    description: `Cleaning for golf simulator bays and indoor putting turf on the Grand Strand: vacuumed and brushed, bay by bay, after close, no rinsing.`,
    h1: 'Turf care for indoor golf and simulator venues',
    lede: `A simulator bay's hitting turf takes the same swing in the same few square feet, session after session, with no rain or sun to help it recover.`,
    question: 'Do you clean the turf in golf simulator bays and indoor putting areas?',
    answer: `Yes. TIMELESS Turf Restoration cleans and sanitizes turf in golf simulator bays and indoor putting areas across the Grand Strand: hitting turf and tee holes cleared and brushed, putting surfaces checked for roll, and an antimicrobial pass for sweat and shared use. Work happens after close, bay by bay, using controlled, minimal water.`,
    takeaways: [
      `Hitting turf wears in one small, repeated impact zone.`,
      `Indoor turf gets no rain or sun to self-clean.`,
      `Food-and-drink venues add spills on top of sweat and dust.`,
      `We work bay by bay, after close.`,
    ],
    sections: [
      { h2: `What indoor golf turf goes through`, html: `<p>A sim bay's strike zone wears fast because the same swing lands in the same spot, session after session, with no rain to flush it clean.</p><ul class="checklist"><li>Broken-tee debris collects at the strike zone</li><li>Sweat, dust and spills sit until removed</li><li>Dry indoor air builds static, so dust clings to fibers</li></ul>` },
      { h2: `What a visit covers`, html: `<ul class="checklist"><li>Hitting turf and tee holes cleared, strike zone brushed</li><li>Putting surfaces vacuumed and checked for roll</li><li>Bar or lounge turf spot-treated for spills, never bleach</li><li>Whole-bay <a href="/services/antimicrobial-sanitizing/">antimicrobial treatment</a>, left to dwell</li></ul>` },
      { h2: `Scheduling bay by bay`, html: `<p>We follow the same <a href="/turf-care/indoor-turf/">indoor turf</a> method: vacuum, brush, then a damp treatment rather than a rinse, worked bay by bay after close, with time to dry before the first booking.</p>` },
      { h2: `What we don't do`, html: `<div class="callout callout--warn"><b>Heads up.</b> A strike zone worn through to the backing needs a new panel, a resurfacing job we refer to our sister company.</div>` },
      { h2: `What it costs`, html: `<p>A single bay is usually small, often inside our lowest <a href="/pricing/">Essential Clean or Premium Restoration bands</a>, from $199. A multi-bay venue is measured and quoted as one program.</p>` },
    ],
    faq: [
      { q: `Do you clean simulator turf the same way as an outdoor lawn?`, a: `No. We vacuum rather than blow, and use minimal, contained water instead of a hose, the same method as any indoor installation.` },
      { q: `Can you work without shutting down the whole venue?`, a: `Yes. We work bay by bay, usually after close, so the rest of the venue stays open.` },
      { q: `What if the hitting turf is worn through in the strike zone?`, a: `No, cleaning can't fix that. A strike zone worn through to the backing needs the panel replaced, referred to our sister company.` },
      { q: `Do you sanitize for sweat and shared use?`, a: `Yes, the same antimicrobial pass we use anywhere shared surfaces are a concern, left to dwell before the bay reopens.` },
    ],
    services: ['antimicrobial-sanitizing', 'power-brushing', 'hard-water-and-stain-removal'],
    problems: ['artificial-grass-feels-sticky-or-tacky'],
    related: ['golf-courses-and-practice-facilities', 'mini-golf-courses'],
    updated: '2026-09-14',
  },
  {
    slug: 'private-estates-and-large-properties',
    short: 'Estates & large properties',
    kind: 'private property',
    title: 'Turf Care for Estates & Large Properties | TIMELESS',
    description: `How we walk, zone-map, sequence and quote turf care for a large property with a green, pet area, pool surround, play area and lawn.`,
    h1: 'Turf care for private estates and large properties',
    lede: `A property with a green, pet area, pool surround, play area and lawn is not one job, it is five, and each wears differently.`,
    question: 'How do you maintain turf on a large private property with several turf areas?',
    answer: `TIMELESS Turf Restoration walks a large Grand Strand property first and maps every turf area as its own zone: green, pet area, pool surround, play area, lawn, rather than pricing off one number. Turf over 5,000 square feet is quoted after that walk-through. We coordinate access and timing with whoever manages the property, and every Premium Restoration includes dated photos.`,
    takeaways: [
      `A green, pet area, pool, play area and lawn need different care.`,
      `Past 5,000 square feet total, we quote after a walk-through.`,
      `We coordinate with staff, managers or the household directly.`,
      `Every visit includes dated before-and-after photos, zone by zone.`,
    ],
    sections: [
      { h2: `The walk-through and zone map`, html: `<p>A property like this is walked once, not priced off one number: every turf area is measured and mapped as its own zone.</p><div class="tbl"><table><thead><tr><th>Zone</th><th>What it needs</th></tr></thead><tbody><tr><td>Green</td><td><a href="/services/putting-green-restoration/">Top-dress, brush, speed check</a></td></tr><tr><td>Pet area</td><td><a href="/services/pet-odor-removal/">Odor treatment</a>, its own cycle</td></tr><tr><td>Pool surround</td><td>Rinse for chlorine, algae watch</td></tr><tr><td>Play area</td><td>Debris and seam checks</td></tr><tr><td>Lawn</td><td><a href="/services/artificial-turf-cleaning/">Standard cleaning</a> and grooming</td></tr></tbody></table></div>` },
      { h2: `Sequencing the visit`, html: `<p>The pet zone's treatment goes down first so it can dwell; the green is finished last so nothing gets tracked onto fresh sand.</p>` },
      { h2: `Working with staff and access`, html: `<p>We coordinate with whoever holds the keys, a manager, staff, or a landscaping foreman, and work around whatever gate code or quiet hours the household already runs on.</p>` },
      { h2: `Storm checks`, html: `<div class="callout callout--warn"><b>Heads up.</b> Hurricane season runs June through November, peaking in September, and a multi-zone property has more seams and edges a storm can find.</div>` },
      { h2: `What it costs`, html: `<p>Each zone follows our published <a href="/pricing/">Essential Clean and Premium Restoration bands</a>, up to 5,000 square feet; a green is quoted after inspection. Past that combined total, the whole property is quoted as one program after a walk-through.</p>` },
    ],
    faq: [
      { q: `Do you quote the whole property as one number, or zone by zone?`, a: `5,000 square feet is the line: below it, each zone is priced on its own; above it, the whole property is quoted as one figure after a walk-through.` },
      { q: `Who do you coordinate with if the owner isn't on site?`, a: `Whoever manages the property day to day: staff, a manager, or a landscaping foreman, using whatever access the household already has set up.` },
      { q: `Do you check the property after a storm automatically?`, a: `Yes, for properties on a standing schedule. For a one-time client, call after a named storm and we will fit the check in.` },
      { q: `Is the green treated differently from the rest of the property?`, a: `Yes. A putting green gets its own process, top-dress, brush, cups, speed check, separate from the lawn or pool surround.` },
    ],
    services: ['artificial-turf-cleaning', 'putting-green-restoration', 'pet-odor-removal'],
    guides: ['multi-surface-backyard-care-plan'],
    related: ['hoas-and-communities', 'golf-communities-and-amenity-greens'],
    updated: '2026-09-14',
  },
];
