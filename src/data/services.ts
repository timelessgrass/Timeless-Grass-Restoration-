/**
 * Service pages. Each is written longhand — the method, what it does and does not fix,
 * what is included at which price tier, and the questions that come up on the phone.
 * `problems` and `related` are slugs; the page renders them as real links.
 */
import { pricing, brand } from './site';

export type Service = {
  slug: string;
  name: string;
  /** one line under the name in menus */
  short: string;
  tier: 'core' | 'restore';
  title: string;
  description: string;
  h1: string;
  lede: string;
  question: string;
  answer: string;
  image: { src: string; alt: string };
  sections: { h2: string; html: string }[];
  included: string[];
  /** which price tier covers it, and the one-line price note for the sidebar */
  plan: 'essential' | 'premium' | 'addon' | 'quote';
  priceLine: string;
  faq: { q: string; a: string }[];
  problems: string[];
  related: string[];
};

const P = pricing;

export const SERVICES: Service[] = [
  {
    slug: 'artificial-turf-cleaning',
    name: 'Artificial Turf Cleaning',
    short: 'Deep clean, groom, blown-clean finish',
    tier: 'core',
    title: 'Artificial Turf Cleaning, Grand Strand SC | TIMELESS',
    description: `Deep artificial turf cleaning from Myrtle Beach to Shallotte: debris out, power brushed, rinsed, sanitized, groomed. From $199. Call ${brand.phone}.`,
    h1: 'Artificial turf cleaning that goes through the blades, not over them',
    lede: 'Rinsing the top of the grass is not cleaning it. Dirt, pollen, pet waste and organic film settle down into the infill and onto the backing, and that is where we clean. Every visit ends the same way: blown clean, groomed, and dry enough to walk on the same day.',
    question: 'What does professional artificial turf cleaning include?',
    answer: 'A professional turf clean removes debris and leaves, lifts and power-brushes the fibers, rinses dirt and pollen out of the infill, treats odor and organic buildup, then grooms the blades upright and levels the infill. TIMELESS Turf Restoration does this across the Grand Strand from $199 for yards up to 500 sq ft, with a Premium Restoration for pet yards and heavy buildup.',
    image: { src: '/assets/img/artificial-turf-backyard-patio.jpg', alt: 'Clean artificial turf lawn beside a backyard patio' },
    sections: [
      { h2: 'Why turf on the coast gets dirty faster than the brochure said', html: `<p>Artificial grass is sold as low-maintenance, and it is. It is not no-maintenance, and on the Grand Strand three things work against it: roughly fifty inches of rain a year, humidity that keeps the infill damp for days after a storm, and the yellow pine pollen that coats every outdoor surface from late winter into spring. Add live-oak leaf drop, sand tracked in from the beach, and a dog or two, and the infill slowly fills with organic matter. That organic layer is what holds odor, feeds algae in shaded corners, and mats the fibers flat.</p><p>Nothing about that is a defect in the turf. It is the same reason a patio needs washing. The difference is that turf holds the dirt <em>inside</em> the surface, where a hose cannot reach it.</p>` },
      { h2: 'How we clean it', html: `<ol><li><strong>Inspect and diagnose.</strong> We walk the yard before we start: where the odor is, where water is standing, how deep the infill is, whether seams and edges are sound, and which areas are matted. You get told what we find, in plain language.</li><li><strong>Clear the surface.</strong> Leaves, needles, sticks and loose debris are blown and collected. Pet waste is removed and bagged.</li><li><strong>Power brush against the grain.</strong> A rotating turf brush lifts fibers that traffic has flattened, and pulls embedded pollen, hair and fine debris up out of the pile. This is the step a leaf blower cannot do.</li><li><strong>Rinse and treat.</strong> A low-pressure rinse flushes dirt through the backing. On a Premium Restoration we pre-treat pet areas with an enzyme-based odor treatment, treat algae and organic film, and apply an antimicrobial to the infill. We do not use pressure washers on turf; high pressure blows infill out and can lift seams.</li><li><strong>Groom and level.</strong> Infill is brushed back to an even depth so the blades stand up and the surface drains the way it was built to.</li><li><strong>Blown clean.</strong> The last thing we do on any job is blow the surface, the borders and the patio clean. Brian's test of a turf job is simple: if you cannot even blow off your green, you are not done.</li></ol>` },
      { h2: 'Essential Clean or Premium Restoration?', html: `<p>Pick by who uses the turf, not by how it looks. A yard with no pets, light dirt and flattened traffic lanes needs an <strong>Essential Clean</strong>: debris, brushing, rinse, spot treatment and grooming. A yard that dogs use, that smells after rain, or that has green or black film in the shade needs a <strong>Premium Restoration</strong>, which adds the odor treatment, antimicrobial, organic-buildup treatment and infill redistribution. If you are not sure, the <a href="/pricing/">pricing page</a> lays both out side by side and the <a href="/#turf-quiz">30-second quiz</a> on the homepage will point you to one.</p>` },
      { h2: 'What cleaning will not fix', html: `<p>We would rather tell you now than after you have paid. Cleaning does not fix <a href="/turf-problems/water-pooling-on-artificial-turf/">water that pools</a> because the base underneath has settled, seams that have opened, or fibers that have been worn through in a dog run. Those are <a href="/services/turf-repair/">repairs</a>, and some of them are replacements. A clean also will not make thin, sun-faded turf look new again. It will make it look clean, which is a different and usually cheaper thing. If we think your turf is past cleaning we will say so and quote the repair instead.</p>` },
    ],
    included: P.premium.includes,
    plan: 'premium',
    priceLine: `Essential Clean from $${P.rows[0].essential} · Premium Restoration from $${P.rows[0].premium}`,
    faq: [
      { q: 'How long does a turf cleaning take?', a: 'Most residential yards are done in one visit, typically two to four hours on site depending on size and condition. The turf is ready to use as soon as it is dry, usually the same day.' },
      { q: 'Do you pressure wash artificial grass?', a: 'No. A pressure washer blows infill out of the turf, can separate seams and can fray fibers. We use a low-pressure rinse with enough volume to flush the infill without displacing it.' },
      { q: 'Is the cleaning safe for kids and dogs?', a: 'The products we use are labeled for use on pet turf and are safe once the surface is dry. We will tell you the dry time before we leave. If you have a specific sensitivity or allergy, tell us and we will adjust what we use.' },
      { q: 'How often should artificial turf be professionally cleaned?', a: 'A people-only yard is usually fine with one or two cleans a year. A yard with one dog benefits from a quarterly clean; heavy pet use or multiple dogs needs that quarterly schedule kept without gaps, with the pet zone rinsed a few times a week in between, which is what the memberships are for. Our guide on <a href="/guides/how-often-to-clean-artificial-turf/">how often to clean turf</a> gives a table by dogs and square footage.' },
      { q: 'Do I need to do anything before you arrive?', a: 'Pick up toys, furniture you can move, and any pet waste from the last day. Leave the hose bib accessible. We bring water for treatments, but a rinse uses your outdoor spigot.' },
    ],
    problems: ['artificial-grass-smells-like-dog-pee', 'black-patches-algae-on-artificial-grass', 'matted-artificial-grass-walking-paths', 'pine-needles-and-oak-leaves-on-turf'],
    related: ['pet-odor-removal', 'power-brushing', 'algae-and-mold-removal'],
  },
  {
    slug: 'pet-odor-removal',
    name: 'Pet Odor Removal',
    short: 'Urine pulled out, not perfumed over',
    tier: 'core',
    title: 'Pet Urine Odor Removal for Turf, Myrtle Beach | TIMELESS',
    description: `Dog urine smell lives in the infill, not the blades. Enzyme and antimicrobial treatment that removes it across the Grand Strand. From $299.`,
    h1: 'Pet odor removal that treats the infill, where the smell actually lives',
    lede: 'Dog urine drains through the grass and dries in the infill and on the backing. Bacteria turn it into ammonia, humidity and rain release it, and a deodorizer spray only covers it for a day. We break the residue down and treat the infill so the smell does not come back on the next wet morning.',
    question: 'How do you get dog urine smell out of artificial turf?',
    answer: 'Dog urine smell in artificial turf comes from urine residue and bacteria in the infill and backing, not the grass blades. It is removed by flushing the infill, applying an enzyme treatment that breaks the residue down, and following with an antimicrobial so bacteria cannot regrow. TIMELESS Turf Restoration does this on the Grand Strand as part of a Premium Restoration, from $299.',
    image: { src: '/assets/img/pet-turf-dog-resting-under-deck.jpg', alt: 'Dog resting on clean pet turf under a deck' },
    sections: [
      { h2: 'Why the smell comes back after you hose it', html: `<p>Water rinses the fresh urine off the blades. It does very little to the part that smells: dried residue bound to the sand or crumb infill and to the turf backing, and the bacteria living on it. Those bacteria break urea down into ammonia, which is the sharp smell you notice on a warm, damp morning. Rain and humidity make it worse, not better, because moisture reactivates the bacteria. That is why yards on the Grand Strand smell strongest after a summer storm and why the smell seems to disappear in a dry spell, then return.</p><p>Deodorizer sprays and "turf fresheners" mask ammonia with fragrance. They do not remove the residue, so the cycle repeats.</p>` },
      { h2: 'How we treat it', html: `<ol><li><strong>Find the zones.</strong> Dogs use the same spots. We map them by smell and by where the infill has crusted, and we treat those areas more heavily than the rest of the yard.</li><li><strong>Flush.</strong> A high-volume, low-pressure rinse moves loose residue down through the backing and out of the drainage.</li><li><strong>Enzyme treatment.</strong> An enzyme-based cleaner is applied to the infill and left to dwell. Enzymes digest the urine residue rather than covering it, which is the difference between a treatment and a spray.</li><li><strong>Antimicrobial.</strong> After the residue is broken down, an antimicrobial treatment reduces the bacteria that would otherwise start the cycle again.</li><li><strong>Groom.</strong> The infill in the pet zones is brushed, leveled and, if it has been depleted by years of rinsing, topped up. Thin infill holds odor faster because urine reaches the backing directly.</li></ol>` },
      { h2: 'When odor treatment is not enough', html: `<p>Some yards are past treatment. If the infill is years old, saturated, and crusted into a hard pan, no amount of enzyme will restore it; the fix is <a href="/services/infill-replenishment/">removing and replacing the infill</a> in the pet zones, sometimes with an odor-control infill designed for dogs. If the turf backing itself has held urine for years with no drainage under it, the smell is in the base, and that is a repair conversation. We will tell you which case you are in during the inspection, and we will not sell you a treatment that will not hold.</p>` },
      { h2: 'Keeping it gone', html: `<p>Between professional treatments, rinse the pet zones with the hose a couple of times a week in summer and pick up solid waste daily. Skip the bleach: it can discolor turf, damage the backing, and washes straight into the storm drain. For multi-dog yards the honest answer is a schedule, which is why the <a href="/pricing/#memberships">Pet Turf ELITE membership</a> exists.</p>` },
    ],
    included: ['Odor zone mapping', 'High-volume flush', 'Enzyme odor treatment', 'Antimicrobial treatment', 'Pet-zone infill grooming', 'Before & after photos'],
    plan: 'premium',
    priceLine: `Included in Premium Restoration from $${P.rows[0].premium} · heavy-odor add-on $75–$150`,
    faq: [
      { q: 'Can you ever fully get the pee smell out of artificial turf?', a: 'Yes, if the infill and backing are sound. The residue is removed with enzymes, the bacteria are treated, and the smell is gone rather than covered. The exception is turf where the infill has become a saturated crust or the base beneath holds urine; then the infill needs replacing or the turf needs repair. We tell you which during the inspection.' },
      { q: 'Why does my turf only smell after it rains?', a: 'Moisture reactivates the bacteria living on the urine residue in the infill, and humidity keeps it going. In a dry spell the smell fades; after a storm it returns. Treating the residue is what breaks that cycle; our page on <a href="/turf-problems/artificial-turf-smells-after-rain/">turf that smells after rain</a> explains the drainage check we do too.' },
      { q: 'Is the enzyme treatment safe for my dog?', a: 'The treatments we use are labeled for pet turf and are safe once dry. Keep dogs off until the surface is dry, usually a couple of hours in warm weather.' },
      { q: 'Should I add zeolite or an odor-control infill?', a: 'It helps for heavy-use dog yards. Zeolite-type infills capture ammonia and release it slowly; they need occasional recharging with a rinse and, like any infill, they eventually need replacing. We can add it to the pet zones during an infill replenishment.' },
    ],
    problems: ['artificial-grass-smells-like-dog-pee', 'artificial-turf-smells-after-rain', 'can-you-get-urine-smell-out-of-artificial-turf', 'how-to-clean-dog-poop-off-artificial-grass'],
    related: ['artificial-turf-cleaning', 'antimicrobial-sanitizing', 'infill-replenishment'],
  },
  {
    slug: 'antimicrobial-sanitizing',
    name: 'Antimicrobial Sanitizing',
    short: 'Bacteria, mold and odor control',
    tier: 'core',
    title: 'Turf Sanitizing & Antimicrobial Treatment | TIMELESS',
    description: `Antimicrobial sanitizing for pet yards, play areas and dog daycares on the Grand Strand. Cuts bacteria, mold and odor in the infill. From $75.`,
    h1: 'Antimicrobial sanitizing for turf that kids, dogs and paying customers use',
    lede: 'Turf infill is a warm, damp, organic environment for most of the year on the coast. Sanitizing treats the bacteria and mold that live in it, which is what keeps a pet yard, a playground or a daycare run from smelling and from growing black film in the shade.',
    question: 'What does an antimicrobial treatment do for artificial turf?',
    answer: 'An antimicrobial treatment reduces the bacteria, mold and mildew living in artificial turf infill, which is what causes lingering odor and the dark film that grows in shaded, damp areas. It is applied after the turf has been cleaned and rinsed so it treats the infill rather than the dirt on top. TIMELESS Turf Restoration includes it in every Premium Restoration and offers it as a stand-alone add-on on the Grand Strand.',
    image: { src: '/assets/img/artificial-lawn-with-playset.jpg', alt: 'Artificial lawn with a children\'s playset' },
    sections: [
      { h2: 'What lives in turf infill', html: `<p>Infill is sand or coated sand sitting in a damp mat of plastic fibers, out of direct sun. On the Grand Strand it stays wet for days after rain from spring through fall. Anything organic that lands on it, from pollen and leaf litter to pet waste and food from a party, becomes a food source for bacteria and mold. That is what causes the "old turf" smell that is not quite urine, the slippery dark film in the shade of a fence, and the mildew smell you notice when you open a bag of toys left on the grass.</p>` },
      { h2: 'How the treatment works', html: `<p>Sanitizing is a finishing step, not a substitute for cleaning. Applying it to dirty turf treats the dirt. So the sequence is: debris off, power brush, rinse the infill, treat odor and organic buildup where needed, <em>then</em> apply the antimicrobial to the clean infill and let it dwell. We use a product labeled for synthetic turf and pet areas; it does not contain chlorine bleach, which is hard on turf backing and on whatever the runoff reaches.</p>` },
      { h2: 'Who asks for it', html: `<ul><li><strong>Pet yards and dog daycares.</strong> Multiple dogs on the same turf every day is the highest bacterial load turf sees. Pairing sanitizing with odor treatment on a schedule is what keeps a run usable.</li><li><strong>Play areas and playgrounds.</strong> Parents ask what their toddler is crawling on. A clean, sanitized surface is the honest answer.</li><li><strong>Shaded yards.</strong> North sides of houses, under decks and along privacy fences stay damp longest and grow film first. Sanitizing after an <a href="/services/algae-and-mold-removal/">algae treatment</a> slows regrowth.</li><li><strong>Vacation rentals.</strong> A turnover clean with sanitizing between guest groups is a small line item next to a bad review about a smelly yard.</li></ul>` },
    ],
    included: ['Applied after cleaning and rinse', 'Turf- and pet-labeled product', 'Dwell time on the infill', 'Dry-time guidance before use'],
    plan: 'addon',
    priceLine: `Included in Premium Restoration · stand-alone add-on $75–$125`,
    faq: [
      { q: 'Is the sanitizer safe for pets and children?', a: 'Yes once the turf is dry. We use products labeled for synthetic turf and pet areas, and we tell you the dry time before we leave.' },
      { q: 'How long does the antimicrobial effect last?', a: 'It depends on use and weather. A people-only yard may go months; a multi-dog yard in a wet summer may need it monthly. That is the reason the memberships schedule it quarterly.' },
      { q: 'Can I just spray a disinfectant myself?', a: 'You can spot-treat, but household disinfectants and bleach are not made for turf backing, and applying anything to dirty infill treats the dirt rather than the turf. The value of a professional treatment is that it lands on clean infill after a rinse.' },
    ],
    problems: ['black-patches-algae-on-artificial-grass', 'artificial-grass-smells-like-dog-pee', 'flies-and-gnats-on-artificial-grass'],
    related: ['pet-odor-removal', 'artificial-turf-cleaning', 'algae-and-mold-removal'],
  },
  {
    slug: 'algae-and-mold-removal',
    name: 'Algae, Moss & Mold Removal',
    short: 'Black and green film in shaded, damp turf',
    tier: 'core',
    title: 'Algae & Mold Removal for Artificial Turf | TIMELESS',
    description: `Green or black film on turf is algae on damp, dirty infill. We remove the buildup and treat the growth, no bleach. Grand Strand, from $299.`,
    h1: 'Algae, moss and mold removal for turf that stays damp',
    lede: 'The black or green film that shows up along fences, under decks and on the north side of the house is not the turf failing. It is algae and mold growing on a layer of pollen, leaf litter and dust that never dried out. Remove the layer, treat the growth, fix the reason it stayed wet, and it stops coming back.',
    question: 'How do you remove algae and mold from artificial grass?',
    answer: 'Algae and mold on artificial grass grow on organic buildup in infill that stays damp. Removal means clearing debris, power-brushing the film loose, rinsing the organic layer out of the infill, applying a turf-safe algaecide or oxidizing treatment, and following with an antimicrobial. TIMELESS Turf Restoration does this on the Grand Strand as part of a Premium Restoration, and checks drainage so the area dries faster afterward.',
    image: { src: '/assets/img/artificial-turf-side-yard-concrete-edge.jpg', alt: 'Narrow artificial turf side yard along a concrete edge' },
    sections: [
      { h2: 'Why the coast grows it', html: `<p>Algae needs moisture, shade and food. The Grand Strand supplies all three: fifty-odd inches of rain, humidity that keeps surfaces damp overnight most of the year, and a spring pollen load that coats the infill with exactly the fine organic matter algae feeds on. Side yards between two houses, the strip along a privacy fence, the ground under a deck and any spot where a downspout discharges are where it starts. In a wet year it spreads out into the open lawn too.</p><p>Moss follows the same pattern and shows up on the shadiest edges. Mold and mildew are the smell rather than the color: a musty note in the turf that is not urine.</p>` },
      { h2: 'How we remove it', html: `<ol><li><strong>Clear and dry-brush.</strong> Debris off, then a power brush lifts the film and the matted organic layer up out of the pile.</li><li><strong>Rinse the food source out.</strong> The point is to remove the layer algae grows on, not just the algae. A high-volume rinse flushes it through the backing.</li><li><strong>Treat.</strong> A turf-safe algaecide or oxidizing treatment kills what is left in the infill. We do not use chlorine bleach: it can discolor turf, degrade the backing, kills the plants at the border, and the runoff goes to a storm drain that empties into a creek or the beach.</li><li><strong>Sanitize.</strong> An <a href="/services/antimicrobial-sanitizing/">antimicrobial</a> slows regrowth.</li><li><strong>Fix the wet.</strong> If the area is damp because a downspout dumps on it, the infill is too deep to drain, or the turf sits below grade, we tell you, because otherwise you will see us again in a season.</li></ol>` },
      { h2: 'What it costs', html: `<p>Algae treatment is part of a <a href="/pricing/">Premium Restoration</a>, priced by square footage. A heavily affected side yard is usually a small area and often falls in the lowest price band. If the buildup has matted into a crust that brushing cannot lift, the honest fix is <a href="/services/infill-replenishment/">replacing the infill</a> in that strip, which we quote on site.</p>` },
    ],
    included: ['Debris clearing and power brush', 'Organic layer rinsed from infill', 'Turf-safe algaecide / oxidizer', 'Antimicrobial follow-up', 'Drainage and shade check'],
    plan: 'premium',
    priceLine: `Part of Premium Restoration from $${P.rows[0].premium}`,
    faq: [
      { q: 'Is the black stuff on my turf mold or algae?', a: 'Usually both, growing together on the same damp organic layer. Green film is algae; black or dark grey film is often algae plus mold and trapped dirt; a musty smell is mildew in the infill. The treatment is the same: remove the layer, treat the growth, dry the area out.' },
      { q: 'Can I use bleach on artificial grass algae?', a: 'We advise against it. Diluted bleach will kill algae on contact, but it can lighten turf color, is hard on the backing, kills border plants, and runs into the storm system. A turf-safe algaecide or oxidizer does the job without that.' },
      { q: 'Will it come back?', a: 'If the area stays damp and shaded, eventually yes, but slower after treatment and much slower if the drainage problem is fixed. Shaded coastal yards typically need an algae check once or twice a year, which the memberships cover.' },
    ],
    problems: ['black-patches-algae-on-artificial-grass', 'artificial-turf-smells-after-rain', 'weeds-growing-in-artificial-grass'],
    related: ['antimicrobial-sanitizing', 'artificial-turf-cleaning', 'infill-replenishment'],
  },
  {
    slug: 'hard-water-and-stain-removal',
    name: 'Hard Water & Stain Removal',
    short: 'White crust, rust, sap, food and drink stains',
    tier: 'core',
    title: 'Hard Water Stains on Artificial Turf, Removed | TIMELESS',
    description: `White chalky patches on turf are mineral deposits, not fading. Turf-safe removal of hard-water crust, rust, sap and stains. From $75. Call ${brand.phone}.`,
    h1: 'Hard-water crust and stain removal',
    lede: 'That white, chalky patch where the sprinkler hits the turf is not fading. It is calcium and other minerals left behind every time water evaporates off the fibers. It comes off with the right cleaner and the wrong one makes it worse. Same for sap, rust, sunscreen, grease and the mystery stain from the last cookout.',
    question: 'What removes hard water stains from artificial turf?',
    answer: 'White chalky patches on artificial turf are mineral deposits, mostly calcium, left by irrigation overspray or hard water evaporating on the fibers. They are removed with a mild, turf-safe descaling cleaner that dissolves the minerals, followed by a thorough rinse; strong acids and pressure washing damage the turf. TIMELESS Turf Restoration removes hard-water deposits and treats stains across the Grand Strand as a spot service from $75 or within a Premium Restoration.',
    image: { src: '/assets/img/artificial-turf-between-concrete-pavers.jpg', alt: 'Artificial turf strips between concrete pavers' },
    sections: [
      { h2: 'Where the white crust comes from', html: `<p>Every time water dries on a turf blade it leaves whatever minerals it carried. Irrigation heads that overspray onto the turf do it several times a week; a hose left dripping does it in one spot; well water does it fastest. Over a season the deposit builds into a chalky, slightly rough crust that dulls the color and, in bad cases, glues the infill into a hard layer. It is most visible on dark green turf and on the edges nearest the sprinkler heads.</p>` },
      { h2: 'How we remove it', html: `<p>A mild descaling cleaner made for synthetic surfaces dissolves the mineral layer. It dwells, is agitated with a soft brush, and is rinsed thoroughly. What we do not use: muriatic or other strong acids, which etch the fibers and are dangerous around pets and plants, and pressure washers, which strip the deposit along with the infill. If the crust has bonded the infill, that section gets the infill loosened, cleaned or replaced.</p>` },
      { h2: 'Stains we see on the Grand Strand', html: `<div class="tbl"><table><thead><tr><th>Stain</th><th>Cause</th><th>What works</th></tr></thead><tbody><tr><td>White chalky patches</td><td>Irrigation overspray, hard water</td><td>Turf-safe descaler, rinse</td></tr><tr><td>Orange or brown streaks</td><td>Iron in well or irrigation water, metal furniture</td><td>Rust remover formulated for synthetics, rinse</td></tr><tr><td>Sticky dark spots</td><td>Pine sap, live-oak drip</td><td>Solvent-free sap remover, mineral-spirits-free; patience</td></tr><tr><td>Greasy patches</td><td>Grill drippings, sunscreen, food</td><td>Degreasing turf cleaner, brush, rinse</td></tr><tr><td>Pink or dark rings</td><td>Wine, soda, sports drinks</td><td>Enzyme cleaner, rinse; sooner is better</td></tr><tr><td>Chewing gum</td><td>Guests</td><td>Freeze and lift</td></tr></tbody></table></div><p>The one stain we cannot remove is a burn: melted fibers from a grill, a fire pit ember, or sunlight reflected off a low-E window. That is a <a href="/services/turf-repair/">patch repair</a>.</p>` },
      { h2: 'Stopping it coming back', html: `<p>Adjust the irrigation heads so they do not throw onto the turf; turf does not need watering and every pass adds minerals. Move the drip line of a hose. If you are on a well or your water is hard, a quick hose rinse on a hot afternoon is what leaves the crust, so rinse in the evening or skip it. We check the heads during the visit and will point out which ones are the culprit.</p>` },
    ],
    included: ['Deposit identification', 'Turf-safe descaler or stain treatment', 'Soft-brush agitation', 'Thorough rinse', 'Irrigation overspray check'],
    plan: 'addon',
    priceLine: 'Spot treatment $75–$150 · included in Premium Restoration where affected',
    faq: [
      { q: 'Is the white on my turf fading or hard water?', a: 'Rub it with a wet finger. Mineral deposit feels slightly gritty and lightens when wet; fading does not change when wet and is usually even across the sunniest area rather than concentrated near sprinkler heads.' },
      { q: 'Can vinegar remove hard water from artificial grass?', a: 'Diluted white vinegar will dissolve light deposits and is turf-safe. It is slow on a built-up crust and it will not touch bonded infill. For anything more than a light film a purpose-made descaler is faster and needs less rinsing.' },
      { q: 'Do you remove burn marks?', a: 'A burn is melted fiber, so nothing cleans it. We cut out the section and patch it with matching turf. See turf repair.' },
    ],
    problems: ['white-chalky-patches-on-artificial-turf', 'burn-marks-on-artificial-turf'],
    related: ['artificial-turf-cleaning', 'turf-repair'],
  },
  {
    slug: 'power-brushing',
    name: 'Power Brushing',
    short: 'Matted paths lifted, infill leveled',
    tier: 'restore',
    title: 'Power Brushing for Matted Artificial Grass | TIMELESS',
    description: `Flattened paths and dog runs stand back up with power brushing against the grain and leveled infill. Included in every clean on the Grand Strand.`,
    h1: 'Power brushing: the step that makes turf look like turf again',
    lede: 'Traffic pushes turf fibers over and packs the infill down. The lawn goes flat and shiny in the paths, lumpy elsewhere, and looks worn out years before it is. A power brush run against the grain stands the fibers back up and levels the infill. It is the single most visible thing we do.',
    question: 'How do you fix matted artificial grass?',
    answer: 'Matted artificial grass is fixed by power brushing: a rotating turf brush is run against the grain of the fibers to stand them up, and the infill is redistributed to an even depth so the blades are supported. Hand brooming helps on small spots but cannot lift fibers a season of traffic has flattened. TIMELESS Turf Restoration includes power brushing in every clean on the Grand Strand and offers it as a stand-alone visit.',
    image: { src: '/assets/img/artificial-lawn-fenced-yard-rock-border.jpg', alt: 'Groomed artificial lawn in a fenced yard with a rock border' },
    sections: [
      { h2: 'Why turf goes flat', html: `<p>Turf fibers are held upright by the infill packed around their base. Every step compresses that infill and bends the fiber in the direction of travel. Do it a thousand times along the route from the back door to the gate and the fibers lie down, the infill compacts, and the path takes on a dull shine because you are seeing the side of the blade instead of the tip. Dog runs, the strip beside the pool, and the spot under a swing do the same. Heat makes it worse: fibers are softest on a hot afternoon.</p>` },
      { h2: 'What power brushing does', html: `<p>A power brush is a rotating bristle drum driven across the turf. Run against the grain it does three things at once: it lifts and separates the fibers, it fluffs the compacted infill so the fibers are supported again, and it pulls embedded debris, hair and pollen up out of the pile. On a heavily matted path we brush in more than one direction and add infill where traffic has pushed it out. The result is turf that stands up, feels softer underfoot and looks a shade greener because you are looking at the tips again.</p>` },
      { h2: 'What it will not do', html: `<p>Brushing restores fibers that are bent. It cannot restore fibers that are broken off, worn thin, or melted. A dog run that has been used for six years may have fiber loss in the corners; brushing will improve it but the corners will still show. Turf that has faded in the sun will stand up but not change color. We tell you which you have before we start.</p>` },
      { h2: 'How often', html: `<p>Every clean we do includes power brushing. Between cleans, a light hand broom against the grain on the main paths every few weeks keeps them from packing down. For busy yards, dog runs and putting-green fringes the memberships schedule a brush quarterly, which is about the interval at which paths start to show again on the coast.</p>` },
    ],
    included: ['Multi-direction power brush', 'Infill fluffed and leveled', 'Embedded debris lifted', 'Infill top-up on worn paths (quoted)'],
    plan: 'essential',
    priceLine: `Included in every clean · stand-alone brushing visit from $${P.minimum}`,
    faq: [
      { q: 'Can I power brush artificial grass myself?', a: 'Yes, with a rented turf power broom, and it is the best DIY maintenance there is. Brush against the grain, keep the brush moving, and do not use a stiff wire brush or a metal-tined rake, both of which tear fibers. Our guide to <a href="/guides/diy-turf-cleaning-mistakes/">DIY mistakes that damage turf</a> covers what to avoid.' },
      { q: 'Does brushing damage the turf?', a: 'Not with the right brush. Synthetic-bristle turf brooms are made for it. What damages turf is wire brushes, pressure washers and dragging heavy furniture across it.' },
      { q: 'Why does my turf look worse in summer?', a: 'Fibers are softest in the heat and flatten more easily, and July afternoons on the Grand Strand are exactly when the yard gets used most. A brush at the start and end of summer keeps ahead of it.' },
    ],
    problems: ['matted-artificial-grass-walking-paths', 'crunchy-artificial-grass'],
    related: ['artificial-turf-cleaning', 'infill-replenishment', 'putting-green-restoration'],
  },
  {
    slug: 'infill-replenishment',
    name: 'Infill Replenishment',
    short: 'Cushion, drainage and odor control restored',
    tier: 'restore',
    title: 'Turf Infill Replacement & Top-Up | TIMELESS',
    description: `Thin, hard or saturated infill makes turf smell and go flat. Redistribute, top up or replace it, with odor-control infill for pet zones. From $0.35/sq ft.`,
    h1: 'Infill replenishment for turf that has gone thin, hard or sour',
    lede: 'Infill is the part of a turf system nobody sees and everybody feels. It supports the fibers, cushions the surface, lets water through and, in pet yards, holds or releases the smell. Years of rinsing, brushing and rain wash it out; years of urine saturate it. Putting it back right is how old turf gets a second life.',
    question: 'When does artificial turf infill need to be replaced?',
    answer: 'Turf infill needs topping up when the fibers lie flat because there is not enough sand supporting them, when the surface feels hard or drains slowly because the infill has compacted, or when pet zones smell even after treatment because the infill is saturated. TIMELESS Turf Restoration measures and redistributes infill in every Premium Restoration, and tops up or replaces it across the Grand Strand, from $0.35 per square foot to redistribute and $0.75–$1.50 per square foot for new infill installed.',
    image: { src: '/assets/img/artificial-turf-edge-against-rock-border.jpg', alt: 'Artificial turf edge against a rock border, infill visible at the seam' },
    sections: [
      { h2: 'How to tell your infill is the problem', html: `<ul><li><strong>The fibers will not stand up</strong> even right after brushing. Part the grass: if you can see backing with less than half an inch of sand over it, the fibers have nothing to lean on.</li><li><strong>The surface feels hard</strong> or crunchy, and water sits on it after rain. The infill has compacted into a pan or been bonded by mineral deposits.</li><li><strong>The pet zones still smell after treatment.</strong> The infill is saturated and holding residue faster than treatment can break it down.</li><li><strong>The turf looks lumpy.</strong> Infill has migrated: pushed out of the paths, piled at the low edge.</li></ul>` },
      { h2: 'Redistribute, top up, or replace', html: `<p><strong>Redistribute</strong> when there is enough infill overall but it has moved. Power brushing and a drag mat level it back out; this is included in a Premium Restoration. <strong>Top up</strong> when the depth has dropped: new silica sand or coated infill is spread, brushed in and leveled to the depth the turf was designed for, usually within about a quarter inch of the fiber tips. <strong>Replace</strong> when the existing infill is saturated with years of pet use, bonded into a crust, or full of organic matter that no rinse will clear. The old infill in that zone is extracted, the backing is cleaned and treated, and fresh infill goes in.</p>` },
      { h2: 'Infill for dog yards', html: `<p>For pet zones we recommend an odor-control infill rather than plain sand. Zeolite-type infills hold ammonia and release it slowly so the yard does not spike after every rain; coated antimicrobial sands resist the bacteria that cause the smell in the first place. They cost more per bag and they are worth it in the ten square feet the dog actually uses. We often replace only the pet zones and top up the rest with standard infill, which keeps the price sensible.</p>` },
      { h2: 'What it costs', html: `<p>Redistribution runs $0.35–$0.65 per square foot and is included in a Premium Restoration. New infill installed runs $0.75–$1.50 per square foot depending on the product and how much has to come out first. We measure depth on the inspection and quote the exact number before any bag is opened.</p>` },
    ],
    included: ['Infill depth measured', 'Redistribution by power brush and drag', 'Top-up with silica or coated infill', 'Pet-zone extraction and replacement', 'Odor-control infill option'],
    plan: 'addon',
    priceLine: 'Redistribute $0.35–$0.65 / sq ft · new infill installed $0.75–$1.50 / sq ft',
    faq: [
      { q: 'How much infill should turf have?', a: 'It depends on pile height. Most residential turf is designed to carry infill to within roughly a quarter to half an inch of the fiber tips. Sand-filled putting greens run much fuller. We measure yours against what the turf was built for rather than a generic number.' },
      { q: 'Does adding infill fix the smell?', a: 'Only if the old infill was the problem. Adding fresh sand on top of saturated infill buries the smell for a few weeks. For a pet zone that has not responded to treatment, the fix is extracting the old infill and replacing it, ideally with an odor-control product.' },
      { q: 'Can you replace infill without pulling up the turf?', a: 'Yes for most residential turf. The old infill is loosened and extracted from the top, the backing is rinsed and treated, and the new infill is brushed in. Pulling turf up is only needed if the base or backing is failing.' },
    ],
    problems: ['artificial-grass-smells-like-dog-pee', 'crunchy-artificial-grass', 'water-pooling-on-artificial-turf', 'matted-artificial-grass-walking-paths'],
    related: ['pet-odor-removal', 'power-brushing', 'putting-green-restoration'],
  },
  {
    slug: 'putting-green-restoration',
    name: 'Putting Green Restoration',
    short: 'Speed, roll and color back on your green',
    tier: 'restore',
    title: 'Putting Green Restoration, Grand Strand SC | TIMELESS',
    description: `Slow, bumpy or dirty backyard putting green? Cleaned, top-dressed, brushed and rolled by someone who has built greens for 13 years. Grand Strand.`,
    h1: 'Putting green restoration by someone who builds them',
    lede: 'A synthetic green is the one piece of turf that has to perform, not just look good. Speed comes from sand depth and how it is rolled; a true roll comes from a level, consistent surface; a clean green is one you can actually blow off. Brian has built and cared for putting greens for thirteen years.',
    question: 'How do you restore a backyard putting green?',
    answer: 'A synthetic putting green is restored by clearing debris, brushing the surface to lift fibers and loosen compacted sand, deep cleaning the fringe and cups, top-dressing with fresh green-grade sand to the correct depth, brushing it in evenly, and rolling to compact and true the surface, which is what sets the speed. TIMELESS Turf Restoration does this across the Grand Strand; Brian has built and maintained putting greens for 13 years.',
    image: { src: '/assets/img/putting-green-fire-pit-stone-wall.jpg', alt: 'Backyard putting green beside a stone wall and fire pit' },
    sections: [
      { h2: 'Why greens slow down and go bumpy', html: `<p>A sand-filled green rolls fast because the ball runs on a firm, level bed of sand held in short fibers. Three things ruin that. Sand washes out of the high side and piles up on the low side, so the ball drifts and the high side goes slow and fuzzy. Leaves, needles and pollen build up in the fibers and the surface goes soft. And the sand that is left gets contaminated with organic matter and compacts unevenly, so the green rolls true in one line and hops in another. On the Grand Strand, pine pollen in spring and live-oak leaf drop are the usual culprits; so is a green that never gets blown off.</p>` },
      { h2: 'The restoration', html: `<ol><li><strong>Blow and clear.</strong> All debris off the green, fringe and collar. If there are leaves on your green when we arrive, that is the first thing we fix.</li><li><strong>Brush.</strong> A green-grade brush lifts the fibers and loosens compacted, contaminated sand.</li><li><strong>Clean.</strong> Cups are cleared and cleaned; the fringe, which is longer turf and holds more dirt, gets the same clean as a lawn.</li><li><strong>Top-dress.</strong> Fresh, kiln-dried, rounded green sand is spread to the correct depth and brushed in evenly. Depth is what sets the speed, and getting it consistent across the whole green is what sets the roll.</li><li><strong>Roll.</strong> A weighted roller compacts and trues the surface. We roll in more than one direction.</li><li><strong>Check speed.</strong> A ball rolled from a consistent release tells you whether the green is running where you want it. We adjust sand and rolling until it does.</li></ol>` },
      { h2: 'What else we check', html: `<p>Seams at the fringe, cups that have shifted, edges that have lifted, and drainage. A green that puddles after rain has a base problem and no amount of sand fixes it; we will say so. If your green was built without enough base or with the wrong sand, we can tell you what it would take to make it right, and because our sister company builds greens, we know what that costs.</p>` },
      { h2: 'Keeping it fast', html: `<p>Blow it off. That is most of it. A green that is cleared of leaves weekly and brushed monthly holds its speed for a season; one that sits under a live oak all fall needs a spring restoration every year. For serious golfers the memberships schedule a brush and check quarterly with a full top-dress once a year.</p>` },
    ],
    included: ['Debris cleared from green, fringe and collar', 'Brushed and loosened', 'Cups and fringe cleaned', 'Green-sand top-dress to depth', 'Rolled and speed-checked', 'Seam, edge and drainage check'],
    plan: 'quote',
    priceLine: 'Quoted by green size and condition · typical backyard greens fall in the Premium bands',
    faq: [
      { q: 'How fast can you make my green?', a: 'Sand depth and rolling set the speed, and the ceiling depends on the turf product your green was built with. Most backyard nylon or polyethylene greens can be brought to a firm, consistent roll that plays like a well-kept club practice green. Tell us what you want it to roll at and we will tell you if the surface can get there.' },
      { q: 'How often should a putting green be top-dressed?', a: 'Once a year for most home greens, with brushing between. Greens under trees or with heavy use may need it twice. Blowing it off weekly is what makes the difference between the two.' },
      { q: 'Can you fix a green that puddles?', a: 'Cleaning and top-dressing will not. Puddling means the base has settled or was never built to drain. We can diagnose it and, through our sister company, rebuild the section properly.' },
      { q: 'Do you clean the fringe and chipping area too?', a: 'Yes. Fringe is longer turf that holds more debris and dirt than the green itself, and it gets the same clean as a lawn: brushed, rinsed and groomed.' },
    ],
    problems: ['putting-green-rolls-slow-or-bumpy', 'pine-needles-and-oak-leaves-on-turf', 'matted-artificial-grass-walking-paths'],
    related: ['power-brushing', 'infill-replenishment', 'artificial-turf-cleaning'],
  },
  {
    slug: 'turf-repair',
    name: 'Turf Repair',
    short: 'Seams, edges, burns and worn spots',
    tier: 'restore',
    title: 'Artificial Turf Repair: Seams, Edges, Burns | TIMELESS',
    description: `Open seams, lifted edges, burn marks and worn dog-run corners repaired so they blend in. Artificial turf repair on the Grand Strand from $175.`,
    h1: 'Turf repair: seams, edges, burns and worn spots',
    lede: 'Most turf does not need replacing when it looks tired. It needs the one seam that opened re-glued, the edge the dog dug up re-secured, the burn from the grill patched, and then a proper clean. Those are repairs, and they cost a fraction of new turf.',
    question: 'Can artificial turf be repaired instead of replaced?',
    answer: 'Yes. Open seams are re-joined with seaming tape and adhesive, lifted edges are re-secured with nails or edge adhesive, and burns, tears and worn spots are cut out and patched with matching turf so the repair blends. Replacement is only needed when the backing is failing or the base underneath has settled. TIMELESS Turf Restoration repairs turf across the Grand Strand, from $175 for edges and $250 for seams and patches.',
    image: { src: '/assets/img/backyard-putting-green-driveway-view.jpg', alt: 'Backyard putting green and lawn seen from the driveway' },
    sections: [
      { h2: 'What we repair', html: `<div class="tbl"><table><thead><tr><th>Problem</th><th>What causes it</th><th>The repair</th></tr></thead><tbody><tr><td>Seam opening or showing</td><td>Adhesive failure, tension, base movement</td><td>Re-seam with tape and turf adhesive; re-infill and brush so the line disappears</td></tr><tr><td>Edge lifting</td><td>Nails backed out, dog digging, edge board failure</td><td>Re-secure with nails or edge adhesive; replace edge restraint if needed</td></tr><tr><td>Burn mark</td><td>Grill, fire pit, cigarette, reflected sunlight from a window</td><td>Cut out, patch with matching turf, seam and infill</td></tr><tr><td>Worn or bald spot</td><td>Dog run corners, under a swing, gate path</td><td>Patch, or brush and top up if fibers remain</td></tr><tr><td>Tear or cut</td><td>Furniture, tools, animals</td><td>Patch or invisible seam depending on size</td></tr><tr><td>Wrinkle or ripple</td><td>Heat expansion, poor tensioning, base movement</td><td>Lift, re-stretch and re-secure; base repair if it has moved</td></tr></tbody></table></div>` },
      { h2: 'Matching the turf', html: `<p>A patch only disappears if the turf matches: same pile height, similar color and fiber, same grain direction. If you have offcuts from the install, keep them; they are the perfect match. If not, we match as closely as the market allows and place the patch where it will be least visible. We are honest about this: a patch in the middle of a five-year-old faded lawn will read a shade greener for a season until it weathers in.</p>` },
      { h2: 'When it is not a repair', html: `<p>Seams that keep opening after being fixed, a surface that ripples every summer, water that pools in the same spot, and edges that lift everywhere at once all point to the base or the backing rather than the turf. Those are rebuilds, and cleaning or patching them is wasting your money. Because our sister company installs turf, we can tell you what a proper fix involves and what it costs, and we will not pretend a repair will hold when it will not.</p>` },
    ],
    included: ['Seam re-joining', 'Edge re-securing', 'Cut-and-patch for burns, tears and bald spots', 'Re-tensioning for wrinkles', 'Infill and brush so the repair blends'],
    plan: 'addon',
    priceLine: 'Edge repair from $175 · seam repair from $250 · patch repair from $250',
    faq: [
      { q: 'Will the repair be visible?', a: 'A seam repair on the same turf disappears once it is infilled and brushed. A patch is as invisible as the match: with offcuts from the original install it vanishes; with a close match it may read slightly different for a season. We place patches where the light and the traffic hide them.' },
      { q: 'My dog dug up the edge. Can that be fixed?', a: 'Yes, and it is one of the most common repairs we do on the Grand Strand. The edge is cleaned, re-tensioned and re-secured, and if the edge restraint has failed we replace it with one the dog cannot get a claw under.' },
      { q: 'Do you install new turf?', a: 'We repair and restore. New turf lawns and putting greens are built by our sister company, TIMELESS Grass & Greens, run by the same owner. If your turf is past repair we will say so and can hand you straight across.' },
    ],
    problems: ['burn-marks-on-artificial-turf', 'water-pooling-on-artificial-turf', 'matted-artificial-grass-walking-paths'],
    related: ['artificial-turf-cleaning', 'infill-replenishment', 'putting-green-restoration'],
  },
  {
    slug: 'storm-and-seasonal-cleanup',
    name: 'Storm & Seasonal Cleanup',
    short: 'Sand, salt, pollen and leaf drop cleared',
    tier: 'restore',
    title: 'Post-Storm & Seasonal Turf Cleanup | TIMELESS',
    description: `After a storm, pollen season or leaf drop: sand and salt flushed, debris cleared, infill re-leveled, seams checked. Grand Strand, from $199.`,
    h1: 'Storm and seasonal cleanup for coastal turf',
    lede: 'The Grand Strand has four turf seasons and none of them is winter. There is pollen season, when everything turns yellow; leaf drop, when the live oaks let go; summer, when the yard is used hardest and rains most; and hurricane season, when sand, salt and half a tree can end up on the lawn. Each one needs a different cleanup.',
    question: 'How do you clean artificial turf after a hurricane or tropical storm?',
    answer: 'After a storm, artificial turf is cleaned by removing branches and heavy debris, blowing off loose material, flushing salt and windblown sand down through the infill with a high-volume fresh-water rinse before it bonds, checking seams and edges that wind and standing water may have lifted, and re-leveling the infill. TIMELESS Turf Restoration does post-storm cleanups across the Grand Strand from $199.',
    image: { src: '/assets/img/putting-green-at-sunset-wide.jpg', alt: 'Wide view of a backyard putting green at sunset' },
    sections: [
      { h2: 'The four seasons of coastal turf', html: `<div class="tbl"><table><thead><tr><th>Season</th><th>What lands on the turf</th><th>What it needs</th></tr></thead><tbody><tr><td>Late winter to spring</td><td>Pine pollen, in a yellow layer that rain turns to paste in the infill</td><td>Power brush and flush before it feeds algae; a good time for the annual Premium Restoration</td></tr><tr><td>Spring</td><td>Live-oak leaf drop and catkins, which mat into the fibers</td><td>Clear and brush; greens especially</td></tr><tr><td>Summer</td><td>Heaviest use, heaviest rain, pet odor at its peak</td><td>Odor and antimicrobial treatment; quarterly brush</td></tr><tr><td>June to November</td><td>Storm debris, windblown beach sand, salt spray, standing water</td><td>Post-storm cleanup: debris, flush, seam and edge check</td></tr></tbody></table></div>` },
      { h2: 'After a storm', html: `<p>Salt spray dries into a white film that dulls the color and, left long enough, bonds with the infill. Beach sand blown in from the dunes is a different grain than turf infill and changes how the surface drains and feels. Both flush out with a fresh-water rinse if it is done within a few weeks; both become a mineral crust if they are left through a dry fall. Standing water from a storm surge or a blocked drain is the bigger risk: it can float the edges and open seams. Every post-storm visit includes a walk of every seam and edge before we leave.</p>` },
      { h2: 'Vacation rentals and HOAs', html: `<p>Rental managers along the beach book a post-storm turf check the same way they book a roof check, because the next guests arrive whether the yard is ready or not. HOA common areas and amenity greens get the same service at community scale. We schedule those visits in the days after a storm passes, once the roads are open.</p>` },
    ],
    included: ['Branch and heavy debris removal', 'Blow-off', 'Salt and sand flush', 'Seam and edge walk', 'Infill re-leveling', 'Drainage check'],
    plan: 'essential',
    priceLine: `Post-storm or seasonal cleanup from $${P.minimum} · debris hauling quoted`,
    faq: [
      { q: 'Does salt water damage artificial grass?', a: 'The fibers are salt-tolerant, which is why turf is popular near the beach. The problem is the dried residue: it dulls the color and bonds with the infill if left. A fresh-water flush within a few weeks of a storm removes it.' },
      { q: 'Can I just blow the sand off?', a: 'Loose sand on top, yes. Sand that has worked down into the fibers has to be flushed and the infill re-leveled, otherwise it changes the surface and the drainage.' },
      { q: 'When is the best time for a yearly deep clean on the coast?', a: 'Right after pollen season ends, typically late spring. That removes the pollen paste before summer humidity turns it into algae, and gets the yard ready for the months it is used most.' },
    ],
    problems: ['sand-and-salt-on-artificial-grass-after-storm', 'pine-needles-and-oak-leaves-on-turf', 'water-pooling-on-artificial-turf'],
    related: ['artificial-turf-cleaning', 'turf-repair', 'power-brushing'],
  },
];

export const serviceBySlug = (slug: string) => SERVICES.find((s) => s.slug === slug);
