/**
 * Guides: the resource and comparison pages. Tables, calendars and real arithmetic,
 * written for the homeowner deciding what to do rather than for a search engine.
 */
import { pricing, money } from './site';
const P = pricing;

export type Guide = {
  slug: string;
  short: string;
  kind: 'guide' | 'comparison';
  title: string;
  description: string;
  h1: string;
  lede: string;
  question: string;
  answer: string;
  updated: string;
  image?: { src: string; alt: string };
  sections: { h2: string; html: string }[];
  faq: { q: string; a: string }[];
  services: string[];
  problems: string[];
  related: string[];
};

export const GUIDES: Guide[] = [
  {
    slug: 'how-often-to-clean-artificial-turf',
    short: 'How often to clean turf',
    kind: 'guide',
    title: 'How Often to Clean Artificial Turf (Table) | TIMELESS',
    description: `How often turf needs professional cleaning by dogs, shade and yard size: a table, what to do between visits, and yearly cost on the Grand Strand.`,
    h1: 'How often should artificial turf be cleaned? A table, not a guess.',
    lede: 'The honest answer is "it depends on the dog," so here is what it depends on, laid out by number of dogs and yard size, with what you should do yourself between visits. Coastal humidity moves everything one notch more frequent than the brochure said.',
    question: 'How often should artificial turf be professionally cleaned?',
    answer: 'A people-only artificial lawn needs a professional deep clean once or twice a year. A yard used by one dog does best with a quarterly clean; two or more dogs, a dog run or a daycare needs monthly to quarterly attention with odor treatment. Shaded, damp coastal yards need an algae check once a year regardless. Between visits: pick up waste daily, rinse pet zones weekly, and blow off debris every couple of weeks. TIMELESS Turf Restoration schedules this across the Grand Strand with quarterly memberships from $89 a month.',
    updated: '2026-09-12',
    sections: [
      { h2: 'The table', html: `<div class="tbl"><table><thead><tr><th>Your yard</th><th>Professional clean</th><th>What you do between</th><th>Yearly cost at our rates*</th></tr></thead><tbody><tr><td>No pets, under 1,000 sq ft, sunny</td><td>1 Essential Clean a year, after pollen season</td><td>Blow off monthly; hand-broom paths</td><td>${money(P.rows[1].essential!)}</td></tr><tr><td>No pets, shaded or under trees</td><td>1 Premium Restoration a year (algae check)</td><td>Blow off every 2 weeks in leaf and pollen season</td><td>${money(P.rows[1].premium!)}</td></tr><tr><td>1 dog, up to 1,500 sq ft</td><td>Quarterly (Essential Care) or 2 Premium Restorations a year</td><td>Pick up daily; rinse pet zone weekly in summer</td><td>${money(P.memberships[0].monthly * 12)} on Essential Care</td></tr><tr><td>2+ dogs, or one dog with a small yard</td><td>Quarterly Premium Restoration (TIMELESS ELITE)</td><td>Pick up daily; rinse pet zone 2–3× a week; watch infill depth</td><td>${money(P.memberships[1].monthly * 12)} on ELITE</td></tr><tr><td>Daily-potty yard, dog run, multiple large dogs</td><td>Quarterly deep restoration plus odor treatment; monthly in bad summers</td><td>Rinse most days in summer; enzyme spray on the zone weekly</td><td>${money(P.memberships[2].monthly * 12)} on Pet Turf ELITE</td></tr><tr><td>Putting green</td><td>Quarterly brush and check; yearly top-dress</td><td>Blow off weekly; brush monthly</td><td>Quoted by green</td></tr><tr><td>Vacation rental with a turf yard</td><td>Before peak season, plus post-storm check</td><td>Turnover blow-off by the cleaner</td><td>2 visits, from ${money(P.rows[1].essential! * 2)}</td></tr></tbody></table></div><p>*Prices for yards in the 501–1,000 sq ft band; see the <a href="/pricing/">full price table</a>. Memberships are billed monthly and include four visits a year.</p>` },
      { h2: 'Why the coast moves everything up a notch', html: `<p>Turf-care advice written for a drier climate assumes the infill dries out between rains. On the Grand Strand it does not, from spring through fall. Damp infill keeps odor bacteria active and grows algae in the shade, and the spring pollen load adds a layer of organic matter every year that the dry-climate advice never mentions. So a yard that would be fine with one clean a year elsewhere wants two here, and a one-dog yard that could go twice a year inland wants quarterly on the coast.</p>` },
      { h2: 'The signs you are overdue', html: `<ul><li>You notice the smell before you see the dog.</li><li>The paths stay flat after you broom them.</li><li>Green or black film in the shade.</li><li>Water sitting on the surface an hour after rain.</li><li>You can see backing between the fibers in the pet zone.</li><li>The putting green has slowed and the ball drifts on one side.</li></ul><p>Any one of these is a visit. Two or more usually means a <a href="/services/artificial-turf-cleaning/">Premium Restoration</a> rather than an Essential Clean.</p>` },
      { h2: 'What you should be doing between visits', html: `<p>Ten minutes a week covers it. Pick up solid waste daily. Rinse the pet zone with the hose in the evening. Blow leaves and needles off before they mat in, especially off a green. Hand-broom the main path against the grain every few weeks. Do not pressure wash, do not use bleach, and do not add a bag of sand on top of a smell. Our guide to <a href="/guides/diy-turf-cleaning-mistakes/">DIY mistakes</a> covers the rest.</p>` },
    ],
    faq: [
      { q: 'Is quarterly cleaning overkill for one dog?', a: 'On the coast, no. One dog in a small yard concentrates urine in a few square feet, and the infill there stays damp most of the year. Quarterly keeps it from ever building up; twice a year usually means a stronger smell by late summer.' },
      { q: 'Can I just do it myself?', a: 'The between-visit work, yes. The deep clean needs a power brush, a high-volume rinse and enzyme and antimicrobial products applied in the right order, which is what you are paying for. Renting a power broom once a year and doing the rest yourself is a reasonable middle path for a people-only yard.' },
    ],
    services: ['artificial-turf-cleaning', 'pet-odor-removal'],
    problems: ['artificial-grass-smells-like-dog-pee', 'matted-artificial-grass-walking-paths'],
    related: ['artificial-turf-cleaning-cost', 'coastal-turf-maintenance-calendar', 'diy-turf-cleaning-mistakes'],
  },
  {
    slug: 'artificial-turf-cleaning-cost',
    short: 'What turf cleaning costs',
    kind: 'guide',
    title: 'Artificial Turf Cleaning Cost: 2026 Prices | TIMELESS',
    description: `Artificial turf cleaning costs $199–$899 by square footage and condition. What moves the price, add-ons for odor, infill and repairs, memberships from $89/mo.`,
    h1: 'What artificial turf cleaning costs, with our actual prices',
    lede: 'Most turf cleaning companies make you call for a quote. Here is our price table, what moves a yard from one band to the next, and where the add-ons come in, so you know the number before we do.',
    question: 'How much does professional artificial turf cleaning cost?',
    answer: `On the Grand Strand, TIMELESS Turf Restoration charges by square footage and condition: an Essential Clean runs ${money(P.rows[0].essential!)} for up to 500 sq ft to ${money(P.rows[5].essential!)} for up to 5,000 sq ft, and a Premium Restoration with odor and antimicrobial treatment runs ${money(P.rows[0].premium!)} to ${money(P.rows[5].premium!)}. Heavy odor, new infill and repairs are add-ons quoted after inspection. Quarterly memberships run $89 to $169 a month. The minimum visit is ${money(P.minimum)}.`,
    updated: P.updated,
    sections: [
      { h2: 'The price table', html: `<p>Prices as of September 2026. The size bands are the area of turf, not the lot.</p>` },
      { h2: 'What moves the price', html: `<ul><li><strong>Square footage.</strong> The main driver. Measure length times width of each turf area and add them up; a typical Grand Strand backyard lawn is 500 to 1,500 square feet, a side-yard strip is under 300, a dog run is under 500.</li><li><strong>Pets.</strong> A yard dogs use needs the Premium Restoration, because the odor treatment is what you are actually paying for.</li><li><strong>Condition.</strong> Algae, heavy pollen paste, matted paths and a first-ever professional clean all push toward Premium. A yard that has been cleaned in the last year and has no pets is an Essential Clean.</li><li><strong>Infill.</strong> If the infill has gone thin or is saturated, topping up or replacing it is a separate line at $0.35–$1.50 per square foot.</li><li><strong>Access.</strong> A yard we can reach with the equipment from the driveway is standard. A rooftop, a fenced courtyard with no gate, or a green at the bottom of a hill takes longer and we say so up front.</li></ul>` },
      { h2: 'Add-ons, with prices', html: `<div class="tbl"><table><thead><tr><th>Add-on</th><th>Price</th><th>When it applies</th></tr></thead><tbody>${P.addons.map((a) => `<tr><td>${a.name}</td><td>${a.price}</td><td></td></tr>`).join('')}</tbody></table></div><p>We do not advertise add-ons to upsell; we quote them after the inspection when the yard needs one, and you say yes or no before any of it happens.</p>` },
      { h2: 'One-time clean or membership?', html: `<p>Run the numbers on your yard. A one-dog, 800-square-foot yard cleaned twice a year with Premium Restorations is ${money(P.rows[1].premium! * 2)}. The same yard on Essential Care is ${money(P.memberships[0].monthly * 12)} a year for four visits with priority scheduling. For a yard that needs the odor treatment every time, TIMELESS ELITE at ${money(P.memberships[1].monthly * 12)} a year buys four Premium Restorations that would cost ${money(P.rows[1].premium! * 4)} bought one at a time. Whether the membership pays off depends on your own yard's numbers: the more visits a year it needs, the more a flat membership price is worth it, and a one-time clean is simplest if you only need one visit. Our <a href="/guides/how-often-to-clean-artificial-turf/">frequency guide</a> tells you which you are.</p>` },
      { h2: 'Cleaning versus replacing', html: `<p>Turf replacement on the Grand Strand runs several dollars per square foot installed, so a 1,000-square-foot lawn is a four-figure job. A Premium Restoration with infill replacement in the pet zone is a few hundred dollars and adds years to turf that is dirty rather than dead. Replacement is only the right answer when the base has failed, the backing is breaking down, or the fibers are worn through across most of the yard. We inspect before we quote and will tell you which one you have.</p>` },
    ],
    faq: [
      { q: 'Do you charge by the hour?', a: 'No. By square footage and condition, quoted before we start. A slow yard does not cost you more.' },
      { q: 'Is there a trip charge?', a: `No trip charge inside our service area; the ${money(P.minimum)} minimum visit covers it. Outside the Grand Strand we quote travel honestly or refer you to someone closer.` },
      { q: 'Why is the minimum $199?', a: 'Because a proper clean involves a power brush, a high-volume rinse, treatment products and about two hours on site, and we would rather do a small yard properly than quickly.' },
    ],
    services: ['artificial-turf-cleaning', 'infill-replenishment', 'turf-repair'],
    problems: ['can-you-get-urine-smell-out-of-artificial-turf'],
    related: ['how-often-to-clean-artificial-turf', 'clean-or-replace-artificial-turf', 'diy-turf-cleaning-mistakes'],
  },
  {
    slug: 'diy-turf-cleaning-mistakes',
    short: 'DIY mistakes that damage turf',
    kind: 'guide',
    title: 'DIY Turf Cleaning Mistakes That Damage It | TIMELESS',
    description: `Pressure washers, bleach, wire brushes, sand on top of the smell: the DIY turf cleaning methods that make it worse, why, and what to do instead.`,
    h1: 'The DIY turf cleaning mistakes we get called to fix',
    lede: 'Most of these come from advice written for concrete, carpet or a natural lawn. Turf is none of those. Here is what each one does to the fibers, the backing or the infill, and the cheap thing that works instead.',
    question: 'What should you not use to clean artificial grass?',
    answer: 'Do not use a pressure washer, chlorine bleach, a wire brush or metal-tined rake, strong acids, solvents, or a bag of sand poured over a smell. Pressure washers blow out infill and lift seams; bleach lightens fibers and degrades backing; wire brushes tear fibers; acids etch them; sand on top buries odor for a few weeks. Use a leaf blower, a hose on a gentle setting, a synthetic-bristle broom against the grain, and an enzyme cleaner made for pet turf.',
    updated: '2026-09-12',
    sections: [
      { h2: 'Pressure washing', html: `<p><strong>What it does:</strong> a 2,000-plus PSI jet blows the infill out of the turf in a stripe, can separate seams, and frays fiber tips. We see yards where the owner "cleaned" the whole lawn and left it with no infill in the pattern of the wand strokes. <strong>Instead:</strong> a hose on a shower or flat-spray setting with plenty of volume. Volume flushes; pressure destroys.</p>` },
      { h2: 'Bleach', html: `<p><strong>What it does:</strong> lightens turf color, especially on dark green and on older turf, breaks down the polyurethane backing over repeated use, kills every plant at the border it runs to, and goes down the storm drain to a creek or the beach. It also does not remove the organic layer algae or odor bacteria live on, so the problem returns. <strong>Instead:</strong> an enzyme cleaner for odor, a turf-safe algaecide or oxidizer for growth.</p>` },
      { h2: 'Wire brushes and metal rakes', html: `<p><strong>What it does:</strong> tears and splits fibers, which then mat and shed. A metal leaf rake dragged across turf leaves scratches you cannot undo. <strong>Instead:</strong> a synthetic-bristle push broom against the grain, or a rented power broom for the whole yard.</p>` },
      { h2: 'Muriatic acid and strong descalers', html: `<p><strong>What it does:</strong> etches fibers and is dangerous to handle around pets and plants. People reach for it on white hard-water crust. <strong>Instead:</strong> diluted white vinegar on a light film, or a mild descaler made for synthetic surfaces on a heavy one, then a thorough rinse.</p>` },
      { h2: 'Solvents on stains', html: `<p><strong>What it does:</strong> mineral spirits, acetone and similar solvents soften and can melt polyethylene fibers. <strong>Instead:</strong> for sap and gum, freeze and lift; for grease, a degreasing turf cleaner; for drinks, an enzyme cleaner as soon as possible.</p>` },
      { h2: 'Sand on top of the smell', html: `<p><strong>What it does:</strong> buries the urine residue under fresh sand, so the yard smells better for a few weeks and then worse, and the fibers are now over-filled. <strong>Instead:</strong> treat the residue, then top up infill only where the depth is actually low.</p>` },
      { h2: 'Deodorizer sprays and turf perfumes', html: `<p><strong>What it does:</strong> masks ammonia with fragrance. Harmless, and useless after the first day. <strong>Instead:</strong> an enzyme cleaner that digests the residue, applied to the infill and left to dwell.</p>` },
      { h2: 'Household disinfectant on dirty turf', html: `<p><strong>What it does:</strong> disinfects the dirt. The bacteria you are after are in the infill under the organic layer. <strong>Instead:</strong> clean first, then treat. Sequence is most of what a professional visit is.</p>` },
      { h2: 'Leaving the green under the oak all fall', html: `<p><strong>What it does:</strong> leaf litter mats into the fibers, contaminates the sand, and the green slows and goes bumpy by spring. <strong>Instead:</strong> blow it off weekly. It is the one maintenance task that matters most and costs nothing.</p>` },
    ],
    faq: [
      { q: 'What can I safely use to clean artificial grass myself?', a: 'A leaf blower, a hose, a synthetic-bristle broom, an enzyme cleaner labeled for pet turf, diluted white vinegar for light mineral film, and a rented power broom once a year. That covers ninety percent of home maintenance.' },
      { q: 'I already pressure washed it. Is it ruined?', a: 'Usually not. The infill has been displaced and needs re-leveling and probably topping up, and we check every seam. That is a Premium Restoration plus infill, not a replacement.' },
    ],
    services: ['artificial-turf-cleaning', 'infill-replenishment', 'turf-repair'],
    problems: ['artificial-grass-smells-like-dog-pee', 'white-chalky-patches-on-artificial-turf', 'black-patches-algae-on-artificial-grass'],
    related: ['how-often-to-clean-artificial-turf', 'coastal-turf-maintenance-calendar'],
  },
  {
    slug: 'coastal-turf-maintenance-calendar',
    short: 'Grand Strand turf calendar',
    kind: 'guide',
    title: 'Grand Strand Turf Maintenance Calendar | TIMELESS',
    description: `A month-by-month turf maintenance calendar for the Grand Strand: pollen season, live-oak leaf drop, summer odor, hurricane season. What to do and when.`,
    h1: 'A turf maintenance calendar for the Grand Strand',
    lede: 'Turf here does not have a winter to rest in; it has a pollen season, a leaf drop, a long humid summer and a storm season. This is the year as it actually happens between Shallotte and Burgess, with what to do in each month.',
    question: 'When is the best time of year to deep clean artificial turf on the Grand Strand?',
    answer: 'Late spring, right after pine pollen season ends, is the best time for the annual deep clean on the Grand Strand: it removes the pollen layer before summer humidity turns it into algae and odor, and gets the yard ready for its busiest months. A second, lighter visit in early fall after hurricane season clears storm debris and salt. Pet yards add quarterly odor treatment on top. TIMELESS Turf Restoration schedules around this calendar across the Grand Strand.',
    updated: '2026-09-12',
    sections: [
      { h2: 'The calendar', html: `<div class="tbl"><table><thead><tr><th>Month</th><th>What is happening</th><th>Do it yourself</th><th>Book</th></tr></thead><tbody><tr><td>January</td><td>Cool, damp, occasional frost. Yard used least.</td><td>Blow off; hand-broom paths</td><td>Repairs: seams, edges, patches. Best time, yard is quiet.</td></tr><tr><td>February</td><td>Pine pollen begins on warm days. Camellias and early bloom.</td><td>Blow off weekly</td><td>Putting green top-dress before the season</td></tr><tr><td>March</td><td>Peak pine pollen. Everything turns yellow; rain turns it to paste.</td><td>Blow off twice a week; rinse the green</td><td>Hold the deep clean until pollen ends</td></tr><tr><td>April</td><td>Live-oak leaf drop and catkins. Pollen tailing off.</td><td>Blow off twice a week, especially greens and shade strips</td><td>—</td></tr><tr><td>May</td><td>Pollen over. Humidity arrives. Algae starts in shade.</td><td>Rinse pet zones weekly from here on</td><td><strong>Annual Premium Restoration.</strong> The single best-timed visit of the year.</td></tr><tr><td>June</td><td>Hurricane season opens. Yard use peaks. Afternoon storms.</td><td>Pick up daily; rinse pet zones 2–3× a week in the evening</td><td>Vacation rentals: pre-season clean before peak bookings</td></tr><tr><td>July</td><td>Hottest, most humid. Fibers softest; paths flatten fastest. Odor peaks.</td><td>Hand-broom paths; keep dogs' zone rinsed</td><td>Pet yards: quarterly odor treatment</td></tr><tr><td>August</td><td>Muggy nights keep infill damp without rain. Peak odor complaints.</td><td>Same as July; watch for green film in shade</td><td>Algae check on shaded strips</td></tr><tr><td>September</td><td>Peak hurricane month. Sand, salt and debris risk.</td><td>Clear branches after storms; blow off</td><td><strong>Post-storm check:</strong> flush salt and sand, walk seams and edges</td></tr><tr><td>October</td><td>Humidity breaks. Pleasant, dry. Second-busiest use.</td><td>Blow off; hand-broom</td><td>Fall Essential Clean; membership quarterly visit</td></tr><tr><td>November</td><td>Hurricane season closes. Leaf drop from deciduous trees.</td><td>Blow off weekly, greens especially</td><td>Green brush and check before winter</td></tr><tr><td>December</td><td>Cool and damp. Holiday guests.</td><td>Blow off before guests</td><td>Pre-holiday refresh for rentals and hosts</td></tr></tbody></table></div>` },
      { h2: 'Why May is the month', html: `<p>Pollen is the biggest single load a Grand Strand yard takes all year, and it is organic: once rain turns it to paste in the infill it is food for algae and bacteria through the whole humid summer. Cleaning in March removes half of it and the rest lands the next week. Cleaning in late May removes all of it, before the humidity that makes it dangerous. A yard deep-cleaned in May with a pet-zone rinse through summer goes into fall in good shape; a yard cleaned in March is green in the shade by August.</p>` },
      { h2: 'Storm season', html: `<p>The Grand Strand's hurricane season runs June through November and peaks in September. After a storm, the priority order is: branches and heavy debris off, blow off loose material, then flush salt spray and windblown beach sand through the infill within a few weeks, before the salt dries into a crust and bonds. Standing water can float edges and open seams, so every <a href="/services/storm-and-seasonal-cleanup/">post-storm visit</a> includes a seam-and-edge walk.</p>` },
      { h2: 'Rentals and hosts', html: `<p>Vacation rentals run on a different clock: the yard has to be right for the first booking of peak season and right again after every storm, because the next guests arrive regardless. A pre-season clean in late May or June and a standing post-storm check cover most of it; the turnover blow-off between guests is something the cleaning crew can do.</p>` },
    ],
    faq: [
      { q: 'Does turf need anything in winter here?', a: 'Very little. Blow off leaves, keep the paths broomed, and use the quiet months for any repairs. Frost does not hurt turf; do not scrape ice off it with metal.' },
      { q: 'What about pollen on a putting green?', a: 'It is the worst thing that happens to a green all year. Rinse and brush it through March and April, and book the top-dress after the pollen has stopped rather than before.' },
    ],
    services: ['storm-and-seasonal-cleanup', 'artificial-turf-cleaning', 'putting-green-restoration'],
    problems: ['pine-needles-and-oak-leaves-on-turf', 'sand-and-salt-on-artificial-grass-after-storm', 'black-patches-algae-on-artificial-grass'],
    related: ['how-often-to-clean-artificial-turf', 'diy-turf-cleaning-mistakes', 'artificial-turf-cleaning-cost'],
  },
  {
    slug: 'clean-or-replace-artificial-turf',
    short: 'Clean or replace?',
    kind: 'comparison',
    title: 'Clean or Replace Artificial Turf? The Tells | TIMELESS',
    description: `When a tired artificial lawn is worth restoring and when to replace it: the five tells of a failed base or backing, the cost of each path, a 5-minute check.`,
    h1: 'Clean or replace? How to tell if your turf is dirty or dead.',
    lede: 'Most turf that looks finished is dirty, flat and thin on infill. Some of it is actually failing underneath, and no clean will save it. The difference is worth a few thousand dollars, so here are the tells, the arithmetic, and a five-minute check you can do yourself.',
    question: 'Should I clean my artificial turf or replace it?',
    answer: 'Clean it if the problems are dirt, odor, algae, flattened fibers or thin infill; a deep clean with infill top-up costs a few hundred dollars and adds years. Replace it if the base has settled so water pools and seams keep opening, if the backing is cracking or fibers are pulling out in sheets, or if fibers are worn through across most of the yard. TIMELESS Turf Restoration inspects before quoting on the Grand Strand and says which one you have; replacements go to our sister installer.',
    updated: '2026-09-12',
    sections: [
      { h2: 'Five tells that it is replacement', html: `<ol><li><strong>Water pools in the same place after every rain</strong>, and it is not a blocked drain or a downspout. The base has settled.</li><li><strong>Seams that were repaired open again</strong>, or the surface ripples every summer. The turf was never tensioned properly or the base is moving.</li><li><strong>Fibers pull out</strong> when you tug a tuft, or the backing shows cracks. The polyurethane backing has broken down, usually from age and UV.</li><li><strong>Bald turf across most of a dog run or play area</strong>, not just a corner. Patching is cheaper than replacing when the bald turf is limited to part of the area; once most of the run or play area is bald, replace the section.</li><li><strong>The smell is coming from the ground</strong> rather than the turf. Lift an edge: if it is stronger underneath, urine is in the base.</li></ol>` },
      { h2: 'Everything else is cleaning', html: `<p>Dull color that brightens when wet: dirty. Flat paths: matted. White crust: hard water. Smell that fades in a dry week: residue in the infill. Green film in the shade: algae. Bumpy surface with sand piled at the low edge: infill migrated. Weeds: dirty infill. A bald corner in a dog run: a patch. All of it is a <a href="/services/artificial-turf-cleaning/">Premium Restoration</a>, an <a href="/services/infill-replenishment/">infill top-up</a> or a <a href="/services/turf-repair/">repair</a>, and all of it is a few hundred dollars rather than a few thousand.</p>` },
      { h2: 'The arithmetic', html: `<p>Take a 1,000-square-foot lawn with one dog that has never been professionally cleaned. Premium Restoration: ${money(P.rows[1].premium!)}. Infill top-up across the pet zone, say 150 square feet of new odor-control infill at the top of the range: about $225. Total under ${money(P.rows[1].premium! + 225)}, done in a day, and the turf is good for years with upkeep. Replacing the same lawn at typical installed prices on the Grand Strand is a four-figure job that takes days and involves removing and disposing of the old turf. If the base is sound, restoring it wins by an order of magnitude. If the base has failed, restoring it is money spent twice.</p>` },
      { h2: 'The five-minute check', html: `<ul><li>Walk the yard an hour after rain and press your palm down at the low spots. Squelching is a base problem.</li><li>Tug a tuft of fibers. Fibers that come away with backing attached mean the backing is going.</li><li>Look along each seam in low sun. A seam that shows as a line is cosmetic; one that shows as a gap is a repair; one that gaps in several places is tension or base.</li><li>Part the fibers in the pet zone. Loose infill is treatable; a crust is replaceable infill; smell stronger below than above is the base.</li><li>Hand-broom a flat patch against the grain. Fibers that stand up are matted; fibers that stay short are worn.</li></ul><p>If you are still not sure, that is what the inspection is for, and it is free with a quote.</p>` },
    ],
    faq: [
      { q: 'How long should artificial turf last?', a: 'Well-built residential turf that is maintained commonly lasts fifteen years or more. Fiber wear in high-traffic spots shows sooner and is patched. Turf laid on a poor base fails from underneath long before the fibers are worn.' },
      { q: 'Can you replace just part of the turf?', a: 'Yes. A dog run, a worn strip or a settled section can be rebuilt without touching the rest, if a reasonable match is available. That is a job for our sister company, and we hand it across with the inspection notes.' },
    ],
    services: ['artificial-turf-cleaning', 'turf-repair', 'infill-replenishment'],
    problems: ['water-pooling-on-artificial-turf', 'can-you-get-urine-smell-out-of-artificial-turf', 'matted-artificial-grass-walking-paths'],
    related: ['artificial-turf-cleaning-cost', 'how-often-to-clean-artificial-turf'],
  },
];

export const guideBySlug = (slug: string) => GUIDES.find((g) => g.slug === slug);
