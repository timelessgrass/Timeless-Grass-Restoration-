/**
 * Town pages. A town earns a page only when it has at least three substantive blocks
 * that no other page has, at least two of them town-specific. Facts carry a source and
 * a check date; anything unverified stays out (the page renders nothing for it).
 * Filled from research/grand-strand-towns.json (sibling project, 2026-09-07) and
 * research/local-layers.md (2026-09-12).
 */
import { brand } from './site';
export type Town = {
  slug: string;
  name: string;
  state: 'SC' | 'NC';
  county: string;
  kind: 'city' | 'town' | 'unincorporated';
  zips: string[];
  /** oceanfront | waterway (Intracoastal) | inland */
  band: 'oceanfront' | 'waterway' | 'inland';
  water?: string;
  title: string;
  description: string;
  h1: string;
  /** 90–130 words, unique, names real places */
  intro: string;
  question: string;
  answer: string;
  image: { src: string; alt: string };
  /** the town-specific blocks; each names its source */
  blocks: { h2: string; html: string }[];
  communities: string[];
  golf: string[];
  pets: string[];
  faq: { q: string; a: string }[];
  nearby: string[];
  sources: string[];
};

export const TOWNS: Town[] = [
  {
    slug: 'myrtle-beach',
    name: 'Myrtle Beach',
    state: 'SC',
    county: 'Horry County',
    kind: 'city',
    zips: ['29577', '29572', '29579', '29588'],
    band: 'oceanfront',
    water: 'City of Myrtle Beach (GSWSA-treated), 54 mg/L, soft',
    title: 'Artificial Turf Cleaning in Myrtle Beach, SC | TIMELESS',
    description: `Turf cleaning, pet odor removal and putting green restoration in Myrtle Beach, from Market Common to Grande Dunes to the rentals. From $199. Call ${brand.phone}.`,
    h1: 'Artificial turf cleaning in Myrtle Beach',
    intro: 'Myrtle Beach turf lives a hard life: 53 inches of rain a year, humidity that sits at 85 percent before dawn, twenty million visitors, and more dogs per block than almost anywhere on the coast. The yards range from the 1,200-plus homes on the old Air Force base at Market Common to the Intracoastal lots at Grande Dunes and the short-term rentals east of Kings Highway, and each kind gets dirty differently. We clean, deodorize and restore all of them, from a single pet zone to a putting green, priced by square foot before we come out.',
    question: 'Who does artificial turf cleaning in Myrtle Beach?',
    answer: 'TIMELESS Turf Restoration cleans, deodorizes and restores artificial turf and putting greens across the City of Myrtle Beach, from Market Common and Grande Dunes to the rental blocks east of Kings Highway. Owner-operated by Brian, 13 years in turf. Essential Clean from $199 and Premium Restoration with pet-odor treatment from $299, both priced by square foot.',
    image: { src: '/assets/img/backyard-putting-green-landscaped-boulders.jpg', alt: 'Backyard putting green framed by landscaped boulders' },
    blocks: [
      { h2: 'Three kinds of Myrtle Beach yard, three kinds of dirty', html: `<p><strong>Market Common.</strong> Built on the Air Force base that closed in March 1993, now 1,200-plus homes on small lots with a lot of dogs and a lot of turf, because a 20-by-30 backyard is exactly the size people give up on mowing. Small lots concentrate pet use into a few square feet, which is why the odor calls from here are about one corner, not the whole yard. <strong>Grande Dunes and the Intracoastal side.</strong> Bigger lots, irrigation systems, and lakes at the golf club. The turf problems here are sprinkler overspray leaving white mineral crust, and algae along the shaded, damp edges near water. <strong>East of Kings Highway.</strong> The short-term rental blocks. Turf there takes a new set of guests every week from May through September and has to be presentable for each of them, which makes it a schedule, not a one-time clean.</p>` },
      { h2: 'Soft city water, hard well water', html: `<p>The City of Myrtle Beach publishes its water hardness: about 54 mg/L, which the city classifies as soft. That means the white, chalky crust we get called about in Myrtle Beach is almost never from a hose on city water. It is from an irrigation system on a private well, or from salt spray that dried on the fibers after a storm. Knowing that saves a wrong diagnosis: if your turf has white patches and you are on city water, we look at the sprinkler heads and the last nor'easter first, not the tap. Our page on <a href="/turf-problems/white-chalky-patches-on-artificial-turf/">white chalky patches</a> explains the wet-finger test.</p>` },
      { h2: 'What we can and cannot rinse into a Myrtle Beach storm drain', html: `<p>The city's stormwater ordinance (Chapter 18, section 18-5) is specific: it prohibits discharging animal feces, grass clippings, sand, oils, discolored or odorous water and pool chemicals to the storm system, and exempts individual residential car washing and irrigation water. A turf clean produces rinse water with pet residue and cleaning products in it, so we manage it: solids are bagged, treatments are applied and allowed to dwell rather than flushed to the curb, and rinse volume is kept to what the turf and the ground under it can absorb. It is the same reason we do not use bleach, which would be both bad for the turf and exactly what section 18-5 is written to keep out of the drains that empty onto the beach.</p>` },
      { h2: 'Dogs: three city parks and a beach schedule', html: `<p>Myrtle Beach built three dog parks: Barc Parc South on Mallard Lake Drive (14 acres, with a lake), Barc Parc North on Claire Chapin Epps Drive, and the New Town Bark Park on Collins Street, opened in December 2022. From May 1 through Labor Day dogs are only allowed on the beach before 10 a.m. and after 5 p.m., on a leash no longer than 7 feet. Between the parks, the beach and the small lots, this is a city where the dog uses the backyard turf every day, and the backyard turf is the one thing nobody cleans. Our <a href="/services/pet-odor-removal/">pet odor removal</a> treats the infill where the smell lives, and the <a href="/pricing/#memberships">Pet Turf ELITE</a> membership keeps it treated quarterly.</p>` },
      { h2: 'Short-term rentals', html: `<p>The city defines a short-term rental as under 90 days, requires a business license (the license year runs June 1 to May 31), and bars new short-term rentals in the residential zones apart from RMV; a January 2025 overlay covering 114 blocks east of Kings Highway went the other way and stopped short-term rental buildings being converted to long-term. If you manage rentals inside that overlay, your turf is a guest-facing surface every week of peak season. We do pre-season cleans in late May, post-storm checks after any tropical system, and turnover-friendly Essential Cleans priced by square foot, and we can put a portfolio on one schedule.</p>` },
      { h2: 'Putting greens, in the town that has a hundred courses', html: `<p>Pine Lakes Country Club and the Dunes Golf & Beach Club are two of the historic courses that give Myrtle Beach its reputation as a golf destination. People who move here to be near that golf put greens in their backyards, and a backyard green under a live oak is the surface that needs us most. <a href="/services/putting-green-restoration/">Putting green restoration</a>: cleaned, top-dressed, brushed and rolled by someone who has built greens for thirteen years.</p>` },
    ],
    communities: ['Market Common', 'Grande Dunes', 'Arcadian Shores', 'Forest Dunes', 'Myrtlewood', 'Pine Lakes'],
    golf: ['Pine Lakes Country Club', 'The Dunes Golf & Beach Club', 'Grande Dunes Resort Club'],
    pets: ['Barc Parc South', 'Barc Parc North', 'New Town Bark Park', 'Camp Bow Wow Myrtle Beach'],
    faq: [
      { q: 'Do you clean turf at short-term rentals in Myrtle Beach?', a: 'Yes. A pre-season clean in late May, a post-storm check after any tropical system, and turnover Essential Cleans as needed. Rental managers can put several properties on one schedule and one invoice.' },
      { q: 'Is Myrtle Beach water hard enough to leave white crust on turf?', a: 'City water is soft, about 54 mg/L by the city\'s own figure. White crust on Myrtle Beach turf usually comes from a private irrigation well or from dried salt spray. Either way it comes off with a turf-safe descaler.' },
      { q: 'Which Myrtle Beach neighborhoods do you cover?', a: 'All of them: Market Common, Grande Dunes, Arcadian Shores, Forest Dunes, Myrtlewood, Pine Lakes, the oceanfront and the rental blocks east of Kings Highway, plus the 29579 and 29588 addresses that carry a Myrtle Beach mailing address.' },
    ],
    nearby: ['carolina-forest', 'socastee', 'surfside-beach', 'north-myrtle-beach'],
    sources: ['https://en.wikipedia.org/wiki/Myrtle_Beach,_South_Carolina', 'https://www.cityofmyrtlebeach.com/news_detail_T6_R624.php', 'https://library.municode.com/sc/myrtle_beach/codes/code_of_ordinances?nodeId=COOR_CH18STMA', 'https://www.visitmyrtlebeach.com/plan/pet-friendly-myrtle-beach', 'https://www.cityofmyrtlebeach.com/news_detail_T6_R1468.php', 'https://www.avalara.com/mylodgetax/en/blog/2025/1/myrtle-beach-law-bans-converting-short-term-rentals-to-long-term-rentals-in-key-areas.html', 'https://www.myhorrynews.com/news/the-history-of-market-common-from-air-force-base-to-thriving-urban-center/article_5c5bdba0-697b-11ef-940d-8772c38c715b.html', 'https://www.currentresults.com/Weather/South-Carolina/Places/myrtle-beach-weather-averages.php'],
  },
  {
    slug: 'carolina-forest',
    name: 'Carolina Forest',
    state: 'SC',
    county: 'Horry County',
    kind: 'unincorporated',
    zips: ['29579'],
    band: 'inland',
    water: 'Grand Strand Water & Sewer Authority',
    title: 'Turf Cleaning in Carolina Forest, SC | TIMELESS',
    description: `Turf cleaning and pet odor removal in Carolina Forest: Plantation Lakes, Waterbridge, The Farm, Berkshire Forest. Family yards, dogs, pollen.`,
    h1: 'Turf cleaning in Carolina Forest',
    intro: 'Carolina Forest was pine timberland until International Paper and Horry County master-planned it in the mid-1990s, and that history is still in every yard: the ground is sandy flatwoods soil with a hardpan under it, the pollen in March is the heaviest on the Strand, and the 10,000-plus homes in Plantation Lakes, Waterbridge, The Farm, Avalon, Berkshire Forest and the rest are full of families and dogs. The 2020 census found an 11.7 percent vacancy rate here, among the lowest on the Strand, which means these are year-round yards, used every day. That is the turf we clean.',
    question: 'Who cleans artificial turf in Carolina Forest?',
    answer: 'TIMELESS Turf Restoration cleans, deodorizes and restores artificial turf across Carolina Forest, from Plantation Lakes and Waterbridge to The Farm, Avalon and Berkshire Forest. Owner-operated by Brian, 13 years in turf. Essential Clean from $199, Premium Restoration with pet-odor and algae treatment from $299, priced by square foot; no trip charge in 29579.',
    image: { src: '/assets/img/artificial-lawn-with-playset.jpg', alt: 'Artificial lawn with a children\'s playset' },
    blocks: [
      { h2: 'Built in a pine forest, and the pollen shows it', html: `<p>Every March, Carolina Forest turns yellow. The community sits in what was longleaf pine timberland, and the pine pollen that coats cars on Carolina Forest Boulevard coats the turf too, then the first rain turns it to a paste that settles into the infill. Left there, it is the organic layer that feeds algae along the north side of the house and bacteria in the pet zone all summer. The single best-timed visit of the year here is a Premium Restoration in late May, after the pollen has stopped, and our <a href="/guides/coastal-turf-maintenance-calendar/">Grand Strand calendar</a> explains why March is too early.</p>` },
      { h2: 'Wet ground under dry turf', html: `<p>The USDA soil survey for Horry County maps this area as poorly to very poorly drained flatwoods sand with a spodic hardpan within 30 inches of the surface and a seasonal high water table; the Carolina bays in Lewis Ocean Bay Heritage Preserve on the east edge are the same landscape. For turf that means water can come up from below in a wet spring as easily as down from above, and a yard that was built without enough base sits damp for days. Damp infill is where odor and algae live. On the inspection we check how long your turf holds water after rain and tell you whether the fix is a clean, infill, or a conversation about the base. See <a href="/turf-problems/water-pooling-on-artificial-turf/">water pooling on turf</a>.</p>` },
      { h2: 'Family yards, dogs, and one corner', html: `<p>Carolina Forest's median age is under 40 and a third of households have children; two new elementary schools, Pine Island and Ten Oaks, opened in August 2025 to keep up. The turf here is a play surface and a dog run at the same time, and the dog picks one corner. Camp Bow Wow on Bush Drive does daycare. When the corner starts to smell after a summer storm, the fix is treating the infill in that corner, not spraying the yard: our <a href="/services/pet-odor-removal/">pet odor removal</a>. For the sanitized play surface parents ask about, add <a href="/services/antimicrobial-sanitizing/">antimicrobial sanitizing</a>.</p>` },
      { h2: 'HOA rules, county drains', html: `<p>There is no City of Carolina Forest. Land use is Horry County, and the day-to-day gatekeeper on anything visible from the street is your HOA's architectural review committee. Cleaning needs no approval, but an infill top-up that changes the look of the turf or a patch repair in a front yard occasionally does; we will tell you if we think yours might. Rinse water follows Horry County's stormwater ordinance (Chapter 17.7), which treats any discharge that is not stormwater as an illicit discharge apart from a short exempt list; we bag solids, let treatments dwell rather than flushing them to the curb, and keep the rinse to what the ground absorbs.</p>` },
      { h2: 'Golf on three sides', html: `<p>Carolina Forest is ringed by courses rather than built around one: Man O' War, The Wizard and The Witch to the west, Legends and Burning Ridge on the 501 corridor, Arrowhead on the Intracoastal side. Backyard greens are common in the golf-adjacent subdivisions, and a green under the pines here needs the same spring restoration the lawns do: cleared, top-dressed, brushed and rolled. <a href="/services/putting-green-restoration/">Putting green restoration</a>.</p>` },
    ],
    communities: ['Plantation Lakes', 'Waterbridge', 'The Farm', 'Avalon', 'Berkshire Forest', 'Walkers Woods', 'Black Creek Plantation', 'Covington Lake'],
    golf: ['Man O\' War', 'The Wizard', 'The Witch', 'Legends Golf Resort', 'Burning Ridge'],
    pets: ['Camp Bow Wow Myrtle Beach (Bush Dr)', 'Barc Parc North (nearest city park)'],
    faq: [
      { q: 'When is the best time to clean turf in Carolina Forest?', a: 'Late May, after the pine pollen has stopped. Cleaning in March removes half the season\'s load and the rest lands the next week. A late-May Premium Restoration takes all of it out before summer humidity turns it into algae and odor.' },
      { q: 'My Carolina Forest turf stays wet for days after rain. Is that normal?', a: 'Not normal, but common here. The ground is poorly drained flatwoods sand with a hardpan, and turf built on a thin base holds water. We check on the inspection whether the infill has clogged, which a clean fixes, or the base is the problem, which it does not.' },
      { q: 'Do I need HOA approval for a turf cleaning?', a: 'No. Cleaning changes nothing an architectural committee reviews. A repair or a large infill change in a front yard occasionally does, and we will flag it if so.' },
    ],
    nearby: ['myrtle-beach', 'socastee', 'conway', 'longs'],
    sources: ['https://en.wikipedia.org/wiki/Carolina_Forest,_South_Carolina', 'https://www.jprealestateexperts.com/carolina-forest-history/', 'https://www.horrycountyschools.net/newsroom/2024-2025-news-pages/cfnewschools', 'https://www.govinfo.gov/content/pkg/CZIC-s599-s6-s65-1986/html/CZIC-s599-s6-s65-1986.htm', 'https://horrycounty-sc.elaws.us/code/coor_ch17.7_artiii_div1_sec17.7-27', 'https://forestry.ces.ncsu.edu/news/pine-pollen-season', 'https://www.campbowwow.com/myrtle-beach/', 'https://www.golfpass.com/travel-advisor/articles/witch-wizard-and-man-o-war-golf-in-myrtle-beach-south-carolina-is-ever-evolving'],
  },
  {
    slug: 'socastee',
    name: 'Socastee',
    state: 'SC',
    county: 'Horry County',
    kind: 'unincorporated',
    zips: ['29588'],
    band: 'waterway',
    water: 'Grand Strand Water & Sewer Authority',
    title: 'Turf Cleaning in Socastee, SC | TIMELESS',
    description: `Turf cleaning and pet odor removal in Socastee and Forestbrook, including dog daycare runs. Brandy Mill, Riverbend, Cypress River Plantation.`,
    h1: 'Turf cleaning in Socastee and Forestbrook',
    intro: 'Socastee is where the Grand Strand boards its dogs. Dog Boarding at the Beach on Tyner Street, K9 Cabana on Dick Pond Road and Dog Boarding of Myrtle Beach on 544 are all inside the 29588 ZIP, and their runs are the hardest-working turf on the coast. The neighborhoods around them, from 1990s Brandy Mill and Hunters Ridge to the townhomes at Riverbend on the Intracoastal and the gated lots of Cypress River Plantation, have the same dogs at home. We clean the daycare runs and the backyards the same way: through the infill, where the smell is.',
    question: 'Who cleans artificial turf in Socastee?',
    answer: 'TIMELESS Turf Restoration cleans and deodorizes artificial turf across Socastee and Forestbrook (ZIP 29588), including dog daycare and boarding runs and the backyards in Brandy Mill, Hunters Ridge, Riverbend, Arrowhead and Cypress River Plantation. Owner-operated by Brian, 13 years in turf. Premium Restoration with pet-odor treatment from $299, priced by square foot; daycare runs quoted as a schedule.',
    image: { src: '/assets/img/pet-turf-dog-resting-under-deck.jpg', alt: 'Dog resting on clean pet turf under a deck' },
    blocks: [
      { h2: 'Daycare runs: the highest pet load turf sees', html: `<p>A backyard has one or two dogs. A boarding run on Tyner Street or Dick Pond Road has dozens, every day, on the same few thousand square feet, in a climate where the infill does not dry out between rains from May to October. That is the maximum bacterial load synthetic turf can carry, and it is why a run that is only hosed smells within weeks. The treatment that holds is a schedule: solids off daily by staff, and on our visit a high-volume flush, enzyme treatment of the whole run, an <a href="/services/antimicrobial-sanitizing/">antimicrobial</a>, and <a href="/services/infill-replenishment/">infill replacement</a> in the zones that have crusted. We quote runs as a monthly or quarterly program, priced by square foot, and we can work around your intake hours.</p>` },
      { h2: 'Backyards on the Waterway', html: `<p>Socastee sits on the Intracoastal, at the swing bridge, and the townhomes at Riverbend and the lots along Cypress River Plantation get the Waterway's humidity on top of the region's. Shaded strips near the water grow algae first. Inland, the 1990s subdivisions, Brandy Mill and Hunters Ridge, have turf that has been down long enough for the infill to have gone thin and the paths to have flattened, which is a brush-and-top-up job rather than a replacement. The 2022-built homes in Forestbrook Estates and Crescent Cove have new turf that just needs its first proper clean after the builder's pollen season.</p>` },
      { h2: 'Two golf clubs, one shared problem', html: `<p>Arrowhead Country Club's 27 holes run along the Waterway and Prestwick, the Pete Dye course, is close by. The backyard greens in the golf-adjacent streets share a problem with the club practice greens: pine straw and oak leaves on the surface all fall, and a green that is not blown off is slow and bumpy by spring. <a href="/services/putting-green-restoration/">Putting green restoration</a> brings the speed and the roll back; blowing it off weekly keeps it.</p>` },
      { h2: 'County drains, no city rules', html: `<p>Socastee is unincorporated Horry County. The county stormwater ordinance (Chapter 17.7) makes any discharge to the storm system that is not stormwater an illicit discharge, with a short exempt list that covers car washing and irrigation but not wash water with cleaning products in it. We work inside that: solids bagged, treatments applied to dwell rather than flushed, rinse volume matched to what the sandy ground absorbs. For daycare operators, that also means a written note of what we used and when, if your licensing needs it.</p>` },
    ],
    communities: ['Brandy Mill', 'Hunters Ridge', 'Riverbend', 'Arrowhead', 'Cameron Village', 'Crescent Cove', 'Forestbrook Estates', 'Cypress River Plantation'],
    golf: ['Arrowhead Country Club', 'Prestwick Country Club'],
    pets: ['Dog Boarding at the Beach (Tyner St)', 'K9 Cabana Dog Resort (Dick Pond Rd)', 'Dog Boarding of Myrtle Beach (Hwy 544)', 'Barc Parc South (nearest park)'],
    faq: [
      { q: 'Do you clean turf at dog daycares and boarding kennels?', a: 'Yes, and Socastee has more of them than anywhere on the Strand. Runs are quoted as a monthly or quarterly program by square foot, scheduled around intake hours, with enzyme and antimicrobial treatment every visit and infill replacement where zones have crusted.' },
      { q: 'How often does a backyard with two dogs in Socastee need cleaning?', a: 'Quarterly, with the pet zone rinsed a couple of times a week between visits. Two dogs in a 29588-size backyard put the urine in one small area, and the Waterway humidity keeps that area damp. That is what the TIMELESS ELITE membership schedules.' },
    ],
    nearby: ['myrtle-beach', 'surfside-beach', 'carolina-forest', 'murrells-inlet'],
    sources: ['https://en.wikipedia.org/wiki/Socastee,_South_Carolina', 'https://www.dogboardingatthebeach.com/', 'https://dogboardingofmyrtlebeach.com/', 'https://www.yelp.com/biz/k9-cabana-dog-resort-and-training-center-myrtle-beach', 'https://arrowheadcc.com/', 'https://prestwickcountryclub.com/', 'https://horrycounty-sc.elaws.us/code/coor_ch17.7_artiii_div1_sec17.7-30', 'https://www.crghomes.com/socastee-real-estate/'],
  },
  {
    slug: 'surfside-beach',
    name: 'Surfside Beach',
    state: 'SC',
    county: 'Horry County',
    kind: 'town',
    zips: ['29575', '29587'],
    band: 'oceanfront',
    water: 'Grand Strand Water & Sewer Authority (since 1994)',
    title: 'Turf Cleaning in Surfside Beach, SC | TIMELESS',
    description: `Turf cleaning for Surfside Beach rentals and beach cottages: salt and sand flushed, pet odor treated, turnover cleans by square foot. From $199.`,
    h1: 'Turf cleaning in Surfside Beach',
    intro: 'Surfside Beach is two square miles of beach cottages and condos, incorporated in 1964 and rented by the week since before that: the town itself describes thousands of homes owned by people who do not live here. It calls itself The Family Beach, and families bring dogs, which the town lets on the sand outside 10 to 5 in season and lets loose at the Bark Park on 1st Avenue North all year. Turf on a Surfside lot takes salt spray, blown sand, weekly guest turnover and a dog it has never met before. We clean it for the owner, the manager, and the next check-in.',
    question: 'Who cleans artificial turf in Surfside Beach?',
    answer: 'TIMELESS Turf Restoration cleans, deodorizes and restores artificial turf in Surfside Beach, including weekly-rental cottages and condos, with salt and sand flushed, pet odor treated and turnover cleans priced by square foot. Owner-operated by Brian, 13 years in turf. Essential Clean from $199, Premium Restoration from $299; post-storm checks after any tropical system.',
    image: { src: '/assets/img/artificial-turf-backyard-patio.jpg', alt: 'Clean artificial turf beside a backyard patio' },
    blocks: [
      { h2: 'Rental turf is a schedule', html: `<p>A Surfside rental has a new set of guests every Saturday from Memorial Day to Labor Day, and every one of them walks out the back door onto the turf. The town treats every rental as a business and requires a business license (the licensing chapter was rewritten in 2021, effective the May 2022 license year), and the reviews that decide next year's bookings mention the yard when it smells. For managers we run a pre-season Premium Restoration in late May, turnover-friendly Essential Cleans as needed through the summer, and a post-storm check after any tropical system, with a portfolio on one schedule and one invoice. Owners of a single cottage get the same visits, priced by square foot.</p>` },
      { h2: 'Salt, sand and the two-week window', html: `<p>Two blocks from the ocean, salt spray dries on turf fibers as a white film that dulls the color, and in a nor'easter or a tropical storm the beach itself blows into the yard. Both flush out with a fresh-water rinse if it is done within a few weeks; left through a dry fall, the salt bonds with the infill into a crust and the beach sand fills the spaces between infill grains and slows drainage. South Carolina has an 84 percent chance of a tropical-cyclone impact in any given year and has never had a landfall later than October 31, so the post-storm window is predictable. <a href="/services/storm-and-seasonal-cleanup/">Storm and seasonal cleanup</a> from $199.</p>` },
      { h2: 'The Bark Park and the beach', html: `<p>The town's Bark Park on 1st Avenue North, next to the library, is open sunrise to sunset with separate small- and large-dog areas. On the beach, dogs are banned from 10 a.m. to 5 p.m. from May 1 through Labor Day and must be leashed otherwise. So a Surfside dog is on the beach at 7 a.m., at the park at 9, and on the backyard turf the rest of the day. That is why the odor calls here come from small yards with one dog rather than big yards with three: the whole day's use lands on a few square feet. <a href="/services/pet-odor-removal/">Pet odor removal</a> treats that zone's infill; the <a href="/pricing/#memberships">Essential Care</a> membership keeps a rental's turf on a quarterly rhythm.</p>` },
      { h2: 'Town drains', html: `<p>Surfside's own code (section 14-56) prohibits discharging any organic or inorganic matter into the town stormwater system, including the streets, that could pollute or block it, and requires accidental discharges to be reported. On a lot this size the storm drain is at the curb a few feet from the turf, so we bag solids, let treatments dwell instead of flushing them, and keep rinse volume to what the sandy lot absorbs.</p>` },
    ],
    communities: ['Beach cottages and condos inside town limits', 'Ocean Boulevard rentals', 'Surfside Drive'],
    golf: ['Tupelo Bay Golf Center (Garden City)', 'Indian Wells Golf Club (Garden City)'],
    pets: ['Surfside Bark Park (412 1st Ave N)', 'Annie\'s grooming & boarding (Hwy 17 N)', 'Ark Animal Hospital'],
    faq: [
      { q: 'Can you clean a rental between check-out and check-in?', a: 'An Essential Clean on a cottage-sized yard takes a couple of hours and the turf is usable once dry, so a Saturday turnover window works if it is booked ahead. Most managers schedule the deep clean before peak season and turnover cleans only when a guest leaves a mess.' },
      { q: 'Does salt air ruin artificial grass in Surfside?', a: 'No. The fibers are salt-tolerant. The residue is the problem: it dulls the color and bonds with the infill if it is left for months. A fresh-water flush within a few weeks of a storm removes it completely.' },
    ],
    nearby: ['myrtle-beach', 'socastee', 'murrells-inlet'],
    sources: ['https://en.wikipedia.org/wiki/Surfside_Beach,_South_Carolina', 'https://www.surfsidebeach.org/200/Beaches', 'https://www.surfsidebeach.org/facilities/facility/details/Bark-Park-2', 'https://www.surfsidebeach.org/180/Business-Licensing', 'https://www.surfsidebeach.org/239/Drainage-Systems-Maintenance', 'https://www.dnr.sc.gov/climate/sco/hurricanes/pdfs/SCHurricanesExecutiveSummary.pdf', 'https://www.golfpass.com/travel-advisor/course-directory/6793-surfside-beach/'],
  },
  {
    slug: 'murrells-inlet',
    name: 'Murrells Inlet',
    state: 'SC',
    county: 'Georgetown County',
    kind: 'unincorporated',
    zips: ['29576'],
    band: 'waterway',
    water: 'Georgetown County Water & Sewer District (Horry-side addresses: GSWSA)',
    title: 'Turf & Putting Green Care, Murrells Inlet | TIMELESS',
    description: `Putting green restoration and turf cleaning in Murrells Inlet: Prince Creek, Wachesaw Plantation, Blackmoor, International Club, Woodlake Village.`,
    h1: 'Turf and putting green care in Murrells Inlet',
    intro: 'Murrells Inlet grew 29 percent between the censuses, and most of that growth went into golf communities: the 2,800 acres of Prince Creek around TPC Myrtle Beach, Wachesaw Plantation on the old rice plantation with its Fazio course, Blackmoor with a Gary Player design, the International Club, and 55-plus neighborhoods like Woodlake Village and Seasons at Prince Creek West. Nowhere else on the coast has more backyard putting greens per street. The Inlet also has the marsh, which keeps the air wet, and a public dog park at A Dog\'s Way Inn. We restore the greens and clean the turf, both to the standard of someone who builds them.',
    question: 'Who restores backyard putting greens in Murrells Inlet?',
    answer: 'TIMELESS Turf Restoration cleans and restores synthetic putting greens and artificial turf across Murrells Inlet, including Prince Creek, Wachesaw Plantation, Blackmoor, the International Club and Woodlake Village. Brian, the owner, has built and maintained putting greens for 13 years. Greens are cleared, top-dressed, brushed and rolled; turf is cleaned from $199 and deodorized from $299, by square foot.',
    image: { src: '/assets/img/putting-green-fire-pit-stone-wall.jpg', alt: 'Backyard putting green beside a stone wall and fire pit' },
    blocks: [
      { h2: 'The backyard green, one street from the TPC', html: `<p>People who buy in Prince Creek or Wachesaw did it for the golf, and a lot of them put a green behind the house. A backyard green is the one piece of turf that has to perform: speed comes from firm, even sand held in short fibers and a surface that has been rolled; a true roll comes from consistency across the whole green. What ruins both in the Inlet is the live oak. Spring leaf drop and catkins mat into the fibers, pollen paste softens the sand, and a green that sits under an oak all fall is slow and bumpy by spring. Our <a href="/services/putting-green-restoration/">restoration</a> clears it, brushes it, cleans the cups and fringe, top-dresses with green sand to depth, rolls it and checks the speed. Blowing it off weekly is what keeps it there.</p>` },
      { h2: 'Marsh air', html: `<p>The Inlet is a tidal creek and salt marsh, and the MarshWalk is a half mile of it. Humidity off the marsh keeps turf damp overnight most of the year, which is the condition algae and odor bacteria want. The shaded side of a Prince Creek house, the strip along a privacy fence in Woodlake Village, the ground under a deck in Collins Creek Landing: those are the first places to grow green film. <a href="/services/algae-and-mold-removal/">Algae and mold removal</a> takes the organic layer out and treats the growth, and a late-May visit, after the pollen, is the right time.</p>` },
      { h2: 'Two counties, two water districts', html: `<p>Murrells Inlet is unincorporated Georgetown County, but the 29576 ZIP runs north into Horry County, so neighbors can be on different utilities: Georgetown County Water and Sewer's Waccamaw Neck plant on the Georgetown side, Grand Strand Water and Sewer on the Horry side. Neither publishes a hardness figure. If white crust is building on your turf, the irrigation system on a well is the usual reason, and we check the heads on the inspection. Rinse water on the Georgetown side follows the county's 2014 stormwater ordinance and on the Horry side Chapter 17.7; in practice the same rules for us: solids bagged, treatments allowed to dwell, rinse kept to what the sandy ground takes.</p>` },
      { h2: 'Dogs in the Inlet', html: `<p>A Dog's Way Inn on Pendergrass Avenue runs boarding and daycare and a two-acre public dog park; Bark! Pet Resort on the Frontage Road and Inlet Dog Boarding cover the rest. On Georgetown County beaches dogs must be leashed from 9 a.m. to 7 p.m. and may be under voice control outside those hours, and Huntington Beach State Park allows them on the south end. For the 55-plus neighborhoods the typical yard is small, with one dog and a lot of shade, and a quarterly clean with odor treatment is what keeps it right. <a href="/services/pet-odor-removal/">Pet odor removal</a>.</p>` },
    ],
    communities: ['Prince Creek', 'Highwood', 'Collins Creek Landing', 'Seasons at Prince Creek West', 'Wachesaw Plantation', 'Blackmoor', 'International Club', 'Woodlake Village'],
    golf: ['TPC Myrtle Beach', 'Wachesaw Plantation Club', 'Blackmoor Golf Club', 'International Club', 'Indigo Creek'],
    pets: ['A Dog\'s Way Inn (dog park, boarding)', 'Bark! Pet Resort (Frontage Rd)', 'Inlet Dog Boarding & Daycare'],
    faq: [
      { q: 'How often should a backyard putting green in Murrells Inlet be restored?', a: 'A full top-dress and roll once a year, after pollen season, with monthly brushing between. Greens under live oaks may need a second lighter visit in late fall. Blowing it off weekly matters more than any of it.' },
      { q: 'Do you serve the Horry County side of 29576?', a: 'Yes. The ZIP crosses the county line, and so do we. Garden City, Burgess and the Inlet itself are all covered.' },
    ],
    nearby: ['surfside-beach', 'socastee', 'myrtle-beach'],
    sources: ['https://en.wikipedia.org/wiki/Murrells_Inlet,_South_Carolina', 'https://www.privatecommunities.com/southcarolina/princecreek/index.htm', 'https://www.wachesaw.com/', 'https://adogswayinn.com/', 'https://www.gtcountysc.gov/236/Beach-Information-Safety', 'https://irp.cdn-website.com/39aa0646/files/uploaded/CCR+2025+Full+-+060926.pdf', 'https://www.gtcountysc.gov/DocumentCenter/View/447/Stormwater-Ordinance---October-2014-PDF', 'https://www.55places.com/south-carolina/communities/woodlake-village'],
  },
  {
    slug: 'north-myrtle-beach',
    name: 'North Myrtle Beach',
    state: 'SC',
    county: 'Horry County',
    kind: 'city',
    zips: ['29582'],
    band: 'oceanfront',
    water: 'City of North Myrtle Beach (GSWSA blend + city well; Barefoot: Bull Creek)',
    title: 'Turf Cleaning in North Myrtle Beach, SC | TIMELESS',
    description: `Turf cleaning and putting green restoration in North Myrtle Beach: Cherry Grove, Ocean Drive, Barefoot Resort, Tidewater, and the rentals. Call ${brand.phone}.`,
    h1: 'Turf cleaning in North Myrtle Beach',
    intro: 'North Myrtle Beach was four beach towns, Cherry Grove, Ocean Drive, Crescent Beach and Windy Hill, until they merged in 1968, and it is still two cities in one: the oceanfront, with roughly 5,400 short-term rentals, and the golf side west of the Waterway, Barefoot Resort with its Norman, Love, Fazio and Dye courses and Tidewater between the Waterway and Cherry Grove Inlet. The median age is 62 and more than four in ten residents are over 65, which means small, well-kept yards, a lot of putting greens, and dogs that get walked to Waggin\' Tails. Turf here gets salt on the beach side and pine straw on the golf side. We clean both.',
    question: 'Who cleans artificial turf in North Myrtle Beach?',
    answer: 'TIMELESS Turf Restoration cleans, deodorizes and restores artificial turf and putting greens across North Myrtle Beach, from Cherry Grove and Ocean Drive on the beach side to Barefoot Resort and Tidewater on the golf side, including short-term rentals. Owner-operated by Brian, 13 years in turf. Essential Clean from $199, Premium Restoration from $299, by square foot.',
    image: { src: '/assets/img/putting-green-landscape-lighting-at-dusk.jpg', alt: 'Backyard putting green with landscape lighting at dusk' },
    blocks: [
      { h2: 'The rental side', html: `<p>The city has a large short-term rental market, and it has been debating a permit and a 24/7 local-agent rule since 2025 without adopting one as of June 2026. What is on the books now: a short-term rental is under 90 days, every one needs a city business license, the 2021 ordinance requires listing on-site parking spaces at license application, and rental trash is collected Friday through Sunday. For an owner or manager, turf is the surface guests judge first from the back door. We run pre-season cleans in late May, turnover Essential Cleans priced by square foot, and post-storm checks, and we put a portfolio on one schedule.</p>` },
      { h2: 'Barefoot and Tidewater: the greens', html: `<p>Barefoot Resort has four championship courses and Tidewater sits on the bluffs between the Waterway and the inlet; the neighborhoods around them are full of retirees who put a green in the backyard to practice. Those greens sit under pines and live oaks, and on the west side of the Waterway they also get Bull Creek water only, which the city's water report says is higher in sodium than the beach-side blend. A green that is blown off weekly and top-dressed once a year holds its speed; one that sits under straw all winter is slow and bumpy by spring. <a href="/services/putting-green-restoration/">Putting green restoration</a>, done by someone who builds them.</p>` },
      { h2: 'Salt on the beach side', html: `<p>Cherry Grove and Ocean Drive turf gets salt spray on every onshore wind, and a nor'easter or a tropical system leaves a white film that dulls the color and, if it is left through a dry fall, bonds with the infill. Fresh-water flush within a few weeks and it is gone. The city's own rule for dogs on the beach, no dogs 10 a.m. to 4 p.m. from May 15 through Labor Day and a 7-foot leash always, means the beach-side dog spends the middle of every summer day on the backyard turf, which is where the odor treatment goes. <a href="/services/storm-and-seasonal-cleanup/">Storm cleanup</a> and <a href="/services/pet-odor-removal/">pet odor removal</a>.</p>` },
      { h2: 'The city\'s drains', html: `<p>North Myrtle Beach's illicit-discharge ordinance (Chapter 13, Article IV, 2019, amended 2021) makes it unlawful to discharge anything to the city's storm system except stormwater or unpolluted water the city engineer approves, with the usual exemptions for irrigation, car washing and dechlorinated pool water. Turf rinse water with pet residue and treatment products in it is not on the exempt list, so we bag solids, let treatments dwell rather than flushing them to the curb, and keep rinse volume to what the lot absorbs. It is also why we do not use bleach on turf two blocks from the ocean.</p>` },
    ],
    communities: ['Cherry Grove', 'Ocean Drive', 'Crescent Beach', 'Windy Hill', 'Barefoot Resort', 'Tidewater', 'Seabrook Plantation'],
    golf: ['Barefoot Resort (Norman, Love, Fazio, Dye)', 'Tidewater Golf Club', 'Surf Golf & Beach Club', 'Beachwood Golf Club', 'Azalea Sands'],
    pets: ['Waggin\' Tails Dog Park (NMB Park & Sports Complex)', 'Coastal Paws Pet Resort (Hwy 17 S)'],
    faq: [
      { q: 'Do you handle turf for a rental portfolio in North Myrtle Beach?', a: 'Yes. Several properties go on one schedule: a late-May Premium Restoration, turnover Essential Cleans when a guest leaves a mess, and a post-storm check after any tropical system, on one invoice.' },
      { q: 'Is Barefoot Resort water different from the beach side?', a: 'Per the city\'s 2025 water quality report, addresses west of the Waterway get Bull Creek water only while the beach side gets a blend that includes a city well. Neither publishes hardness. White crust on turf here is more often a private irrigation well or dried salt than the tap.' },
    ],
    nearby: ['little-river', 'myrtle-beach', 'longs'],
    sources: ['https://en.wikipedia.org/wiki/North_Myrtle_Beach,_South_Carolina', 'https://www.nmb.us/833/Short-term-Rentals', 'https://www.nmb.us/DocumentCenter/View/5580/Short-term-Rental-Rules', 'https://www.heremyrtlebeach.com/2026/06/30/north-myrtle-beach-rental-rule-debate/', 'https://www.nmb.us/179/Beach-Ordinances', 'https://www.nmb.us/DocumentCenter/View/5192/North-Myrtle-Beach_2025-Water-Quality-Report', 'https://library.municode.com/sc/north_myrtle_beach/codes/code_of_ordinances?nodeId=COOR_CH13STMAERCO', 'https://www.nmb.us/387/Dog-Park'],
  },
  {
    slug: 'little-river',
    name: 'Little River',
    state: 'SC',
    county: 'Horry County',
    kind: 'unincorporated',
    zips: ['29566'],
    band: 'waterway',
    water: 'Grand Strand Water & Sewer Authority (Bull Creek; acquired Little River Water & Sewerage Sept 2023)',
    title: 'Turf Cleaning in Little River, SC | TIMELESS',
    description: `Turf cleaning for Little River's 55-plus and golf neighborhoods: Cypress Village, Heather Lakes, Lafayette Park, River Hills, Glen Dornoch. Call ${brand.phone}.`,
    h1: 'Turf cleaning in Little River',
    intro: 'Little River is the old fishing village on the Waterway at the North Carolina line, and it grew into a retirement suburb: median age 60, four in ten residents over 65, and neighborhoods built for them, from the 404 homes of Cypress Village to Heather Lakes, Lafayette Park, Bridgewater and the golf lots at River Hills and Glen Dornoch. The yards are small, the dogs are walked at Waggin\' Tails on Citizens Circle, and the turf was put in precisely so nobody has to mow. It still needs cleaning, and on the Waterway it needs it a little more often than the brochure said.',
    question: 'Who cleans artificial turf in Little River?',
    answer: 'TIMELESS Turf Restoration cleans, deodorizes and restores artificial turf and putting greens across Little River, including Cypress Village, Heather Lakes, Lafayette Park, Bridgewater, River Hills and Glen Dornoch. Owner-operated by Brian, 13 years in turf. Essential Clean from $199, Premium Restoration from $299, priced by square foot; we also cover the Calabash and Sunset Beach side of the state line.',
    image: { src: '/assets/img/artificial-lawn-fenced-yard-rock-border.jpg', alt: 'Groomed artificial lawn in a fenced yard with a rock border' },
    blocks: [
      { h2: 'Small yards, one dog, a lot of shade', html: `<p>A Cypress Village or Heather Lakes backyard is a few hundred square feet between a screened porch and a fence, often on the shaded side of the house, with one dog that uses the same corner. That is the yard where a single pet zone holds the whole odor problem and a fence-line strip grows green film every summer. It is also the cheapest yard to keep right: most fall in our lowest price band, a <a href="/services/pet-odor-removal/">Premium Restoration</a> is $299 for up to 500 square feet, and the <a href="/pricing/#memberships">Essential Care</a> membership keeps it on a quarterly rhythm for $89 a month. Humidity off the Waterway is the reason quarterly, not twice a year.</p>` },
      { h2: 'Water from Bull Creek', html: `<p>Grand Strand Water and Sewer bought the Little River Water and Sewerage Company in September 2023 after supplying it wholesale since 1980, so the tap here is GSWSA's Bull Creek water. No hardness figure is published. In practice the white crust we see on Little River turf comes from irrigation systems on private wells, from sprinkler heads set to throw onto the turf, and, on the Cherry Grove side, from salt. We check the heads on the inspection; turf does not need watering and every pass leaves minerals. <a href="/services/hard-water-and-stain-removal/">Hard-water removal</a>.</p>` },
      { h2: 'Golf lots and greens', html: `<p>Glen Dornoch runs 260 acres along the Waterway, River Hills is Tom Jackson's and has made Golfweek's Southeast list, and Eagle Nest sits between them. The golf-lot yards here have greens, and the greens sit under pines. A green that is blown off weekly and top-dressed once a year after pollen season holds its speed; one that collects straw all winter is slow and bumpy by March. <a href="/services/putting-green-restoration/">Putting green restoration</a>.</p>` },
      { h2: 'Both sides of the line', html: `<p>Little River is the last South Carolina community before Calabash, and we work both sides of the state line: Calabash, Carolina Shores, Sunset Beach and Ocean Isle Beach are in the service area. Little River itself is unincorporated Horry County, so rinse water follows the county's stormwater ordinance (Chapter 17.7): nothing but stormwater to the storm system apart from a short exempt list, which is why we bag solids and let treatments dwell rather than flushing them to the street.</p>` },
    ],
    communities: ['Cypress Village', 'Heather Lakes', 'Lafayette Park', 'Bridgewater', 'Eagle Trace', 'River Hills', 'Cypress Bay'],
    golf: ['Glen Dornoch Waterway Golf Links', 'River Hills Golf & Country Club', 'Eagle Nest Golf Club'],
    pets: ['Waggin\' Tails Dog Park (150 Citizens Circle)', 'K9 Country Club (Nelson Rd)'],
    faq: [
      { q: 'Do you cover Calabash and Sunset Beach from Little River?', a: 'Yes. The service area runs to Shallotte, so the Brunswick County beaches and the golf communities around Calabash are covered with no trip charge.' },
      { q: 'Is a small Little River yard worth a professional clean?', a: 'A small yard is where a professional clean pays off most: it is in the lowest price band, the dog uses one corner, and treating that corner properly ends the smell. Most Cypress Village and Heather Lakes yards are a $199 or $299 visit.' },
    ],
    nearby: ['north-myrtle-beach', 'longs', 'myrtle-beach'],
    sources: ['https://en.wikipedia.org/wiki/Little_River,_South_Carolina', 'https://www.gswsa.com/redirect/lr/', 'https://www.myhorrynews.com/news/grand-strand-water-and-sewer-buys-little-river-water-and-sewerage-what-customers-need-to/article_fe170a92-37ad-11ee-aeca-33a121e9b05b.html', 'https://www.nmb.us/387/Dog-Park', 'https://www.55places.com/south-carolina/communities/cypress-village', 'https://www.playgolfmyrtlebeach.com/news/little-river-golf-courses-deliver-big-fun/', 'https://horrycounty-sc.elaws.us/code/coor_ch17.7_artiii_div1_sec17.7-27'],
  },
  {
    slug: 'longs',
    name: 'Longs',
    state: 'SC',
    county: 'Horry County',
    kind: 'unincorporated',
    zips: ['29568'],
    band: 'inland',
    water: 'Grand Strand Water & Sewer Authority',
    title: 'Turf Cleaning in Longs, SC | TIMELESS',
    description: `Turf cleaning and putting green restoration in Longs: Colonial Charters, Long Bay, Aberdeen and the rural lots on SC 9. Pollen, greens, wells.`,
    h1: 'Turf cleaning in Longs',
    intro: 'Longs is the SC 9 corridor between the beach and the Waccamaw River, and it is two things at once: golf subdivisions, with Colonial Charters and its nine sub-communities on the Willard Byrd course, Long Bay on the Nicklaus course, and Aberdeen\'s 27 holes backing onto the river preserve; and rural lots on acreage with pines on three sides. The golf lots have backyard greens. The acreage lots have pollen and needles like nowhere else on the Strand, and a fair number are on private wells. Both kinds of turf need the same thing after every spring, which is a proper clean.',
    question: 'Who cleans artificial turf in Longs?',
    answer: 'TIMELESS Turf Restoration cleans, deodorizes and restores artificial turf and putting greens in Longs, including Colonial Charters, Sun Colony, Palmetto Greens, Long Bay and Aberdeen. Owner-operated by Brian, 13 years in turf and putting greens. Essential Clean from $199, Premium Restoration from $299, priced by square foot; no trip charge on the SC 9 corridor.',
    image: { src: '/assets/img/backyard-putting-green-driveway-view.jpg', alt: 'Backyard putting green seen from the driveway' },
    blocks: [
      { h2: 'Greens on the golf lots', html: `<p>Colonial Charters alone has nine neighborhoods around one course, from the 1999 Sun Colony condos to Palmetto Greens and Patriot Pointe; Long Bay Club sits on a Jack Nicklaus design; Aberdeen Country Club's three nines were laid out by Tom Jackson in 1989 with the Waccamaw preserve behind them. People buy on these courses to play, and a lot of them put a green in the backyard. A backyard green in Longs sits under pines, and pine straw plus March pollen is what turns a fast green into a slow, bumpy one by spring. <a href="/services/putting-green-restoration/">Restoration</a> clears it, top-dresses with green sand, brushes and rolls it; weekly blowing keeps it there.</p>` },
      { h2: 'Acreage, pines and wells', html: `<p>Off the subdivisions, Longs is rural: lots of an acre or more, longleaf pines and oaks on the property line, and turf put down so that the part of the yard the family uses does not need mowing. That turf takes the heaviest leaf, needle and pollen load on the coast, and it needs blowing weekly in spring and a power brush and flush after the pollen ends. Some of these lots irrigate from a private well, and well water is the usual reason for white, chalky mineral crust on turf here. Turf does not need watering: point the heads away from it. <a href="/services/hard-water-and-stain-removal/">Hard-water removal</a> takes off what has built up.</p>` },
      { h2: 'Nine miles from the ocean', html: `<p>Longs is about nine miles inland, far enough that salt spray is not the issue it is in Cherry Grove, but not far enough to escape the humidity or the storms: the eye of Hurricane Florence passed over Conway in 2018 and the Waccamaw flooded for weeks. After a storm here the job is branches, blown debris and standing water rather than sand and salt, and the seam-and-edge walk matters because turf that sat in water can float at the edges. <a href="/services/storm-and-seasonal-cleanup/">Storm cleanup</a>.</p>` },
      { h2: 'Dogs and drains', html: `<p>Fur-ever Friends on Highway 9 East runs cage-free boarding and daycare; there is no public dog park in Longs, with Waggin' Tails in Little River the nearest. The dogs here have room to run, which spreads the pet load out, and the odor calls we get from Longs are usually the one spot by the back door rather than a whole yard. Longs is unincorporated Horry County, so rinse water follows the county stormwater ordinance (Chapter 17.7); on acreage the rinse goes into the ground, and we still bag solids and let treatments dwell.</p>` },
    ],
    communities: ['Colonial Charters', 'Sun Colony', 'Palmetto Greens', 'Colonial Lakes', 'Patriot Pointe', 'Long Bay Club', 'Aberdeen Country Club'],
    golf: ['Colonial Charters Golf Club', 'Long Bay Club', 'Aberdeen Country Club'],
    pets: ['Fur-ever Friends Pet Resort and Spa (Hwy 9 E)', 'Waggin\' Tails Dog Park (Little River, nearest)'],
    faq: [
      { q: 'My Longs turf turns yellow every March. Is that damage?', a: 'No, it is pine pollen, and it rinses off. The damage is what it does inside the infill if it is left: it becomes the organic layer algae and odor bacteria feed on all summer. Blow it off weekly in March and April and book the deep clean for late May.' },
      { q: 'Does well water hurt artificial turf?', a: 'Not the fibers. It leaves minerals every time it dries on them, which builds into a white crust near the sprinkler heads. The crust comes off with a turf-safe descaler; the fix is aiming the irrigation away from the turf.' },
    ],
    nearby: ['little-river', 'north-myrtle-beach', 'conway', 'carolina-forest'],
    sources: ['https://en.wikipedia.org/wiki/Longs,_South_Carolina', 'https://www.northmyrtlebeachrealestate.net/longs-sc/colonial-charters-homes/', 'https://www.scgolf.com/golfcourses/aberdeen-country-club', 'https://www.abesafa.com/longs-condos/sun-colony-golf-resort-condos-for-sale/', 'https://kennelindex.com/facility/fur-ever-friends-pet-resort-and-spa-longs', 'https://cms1files.revize.com/conway/Natural%20Resources%20element%20-%20FINAL.pdf', 'https://horrycounty-sc.elaws.us/code/coor_ch17.7_artiii_div1_sec17.7-27'],
  },
  {
    slug: 'conway',
    name: 'Conway',
    state: 'SC',
    county: 'Horry County',
    kind: 'city',
    zips: ['29526', '29527', '29528'],
    band: 'inland',
    water: 'City of Conway (GSWSA Bull Creek water)',
    title: 'Turf Cleaning in Conway, SC | TIMELESS',
    description: `Turf cleaning in Conway: Wild Wing Plantation, Shaftesbury Glen, Burning Ridge, the CCU rentals and the historic district. Post-flood cleanups too.`,
    h1: 'Turf cleaning in Conway',
    intro: 'Conway is the county seat on the Waccamaw River, fourteen miles from the ocean, and it grew 45 percent between the last two censuses. It is the youngest town on the Strand, median age 30, because of Coastal Carolina University and the families in the golf subdivisions along 501 and 90: Wild Wing Plantation, Shaftesbury Glen, Burning Ridge, Hillsborough. Turf here gets kids, dogs, student tenants, pine pollen without the salt, and, in 2016 and 2018, the river. We clean it for homeowners, landlords and the people who bought on a golf course to practice.',
    question: 'Who cleans artificial turf in Conway?',
    answer: 'TIMELESS Turf Restoration cleans, deodorizes and restores artificial turf and putting greens across Conway, including Wild Wing Plantation, Shaftesbury Glen, Burning Ridge, Hillsborough and rentals near Coastal Carolina University. Owner-operated by Brian, 13 years in turf. Essential Clean from $199, Premium Restoration from $299, priced by square foot; post-flood cleanups quoted on site.',
    image: { src: '/assets/img/practice-nets-and-goals-on-turf.jpg', alt: 'Practice nets and goals on artificial turf' },
    blocks: [
      { h2: 'Kids, dogs and student tenants', html: `<p>A Conway backyard is a play surface. The median age is 30, the subdivisions are full of families, and near the university the turf belongs to landlords whose tenants change every August. That is turf that takes a soccer goal, a dog and a cookout in the same weekend, and it is why the two most common calls from Conway are a flattened path and a pet corner that smells after rain. <a href="/services/power-brushing/">Power brushing</a> stands the paths back up and is included in every clean; <a href="/services/pet-odor-removal/">pet odor removal</a> treats the corner's infill. For landlords, an Essential Clean at each August turnover keeps the yard from being the thing in the move-out dispute.</p>` },
      { h2: 'The river', html: `<p>The eye of Hurricane Florence passed over Conway in September 2018, and the Waccamaw stayed above flood stage for weeks; Matthew did it in 2016. Turf that has been under river water is a different job from turf that has been rained on: silt settles into the infill, the surface holds organic matter from the flood, and edges and seams may have floated. The city's own natural-resources plan notes that while most Conway soil is sand, about 17 percent is Meggett loam, which drains poorly, and yards on that soil hold water longest. A post-flood visit clears debris, flushes silt through the infill, treats the organic load and walks every seam. <a href="/services/storm-and-seasonal-cleanup/">Storm cleanup</a>, quoted on site after a flood.</p>` },
      { h2: 'Golf subdivisions', html: `<p>Wild Wing Plantation has 27 holes, with the Avocet and Hummingbird courses, and its neighborhoods, the Fairways and the Sanctuary, back onto them; Shaftesbury Glen and Burning Ridge are the same pattern; the Hackler Course is on the university campus. Backyard greens in these neighborhoods sit under pines, get March pollen and fall straw, and slow down accordingly. <a href="/services/putting-green-restoration/">Putting green restoration</a>: cleared, top-dressed, brushed and rolled.</p>` },
      { h2: 'Dog park and drains', html: `<p>Conway Dog Park on New Road opens 6 a.m. to 6 p.m. with separate big- and small-dog areas and an agility course; The Pet Doctor on Myrtle Ridge Drive and The Cottage on East 501 do daycare and boarding. Inside the city, rinse water follows Conway's stormwater ordinance (Title 3, Chapter 6, 2015), which prohibits discharging anything that could pollute or block the storm system and exempts individual car washing and irrigation; it also requires accidental discharges to be reported by the next business day. We bag solids, let treatments dwell rather than flushing them to the street, and keep rinse volume to what the yard absorbs.</p>` },
    ],
    communities: ['Wild Wing Plantation', 'The Fairways at Wild Wing', 'The Sanctuary', 'Shaftesbury Glen', 'Burning Ridge', 'Willow Trace', 'Hillsborough', 'Historic downtown'],
    golf: ['Wild Wing Plantation (Avocet, Hummingbird)', 'Burning Ridge Golf Club', 'Shaftesbury Glen Golf & Fish Club', 'The Hackler Course at CCU'],
    pets: ['Conway Dog Park (1806 New Rd)', 'The Pet Doctor Doggie Daycare & Boarding', 'The Cottage Grooming & Daycare'],
    faq: [
      { q: 'Can turf that flooded in Conway be saved?', a: 'Usually. Flood water leaves silt and organic matter in the infill and can float edges; a post-flood clean flushes the silt, treats the organic load and re-secures edges. Turf whose base washed out or settled is the exception, and we tell you on the inspection.' },
      { q: 'Do you clean rental turf near Coastal Carolina?', a: 'Yes. An Essential Clean at the August turnover, priced by square foot, is the usual arrangement for landlords, with a Premium Restoration if the previous tenants had a dog.' },
    ],
    nearby: ['carolina-forest', 'longs', 'myrtle-beach'],
    sources: ['https://en.wikipedia.org/wiki/Conway,_South_Carolina', 'https://cms1files.revize.com/conway/Natural%20Resources%20element%20-%20FINAL.pdf', 'https://library.municode.com/sc/conway/codes/code_of_ordinances?nodeId=TIT3PUWO_CH6STMASECO', 'https://www.gswsa.com/about_us.cfm?page=17', 'https://www.playwildwing.com/', 'https://dogparksnearby.com/park/conway-dog-park/', 'https://www.golfpass.com/travel-advisor/course-directory/6695-conway/'],
  },
];
export const townBySlug = (slug: string) => TOWNS.find((t) => t.slug === slug);
