/**
 * Hand-written hero standfirsts, keyed by page path, for ledes whose first sentence alone is too long for the
 * hero (see splitLede in src/lib/text.ts). The full lede still opens the article body, so a dek only
 * restates what the lede says: no new facts here. 25 words at most.
 */
export const DEKS: Record<string, string> = {
  '/cost/dog-daycare-turf-cleaning-cost/': 'A daycare yard sees a year of backyard traffic in a week, so it is priced as a program, not a band.',
  '/cost/hoa-and-commercial-turf-maintenance-cost/': 'Shared greens, dog parks and commercial turf are a different pricing conversation from a backyard, with the schedule set by contract.',
  '/cost/pet-odor-treatment-cost/': 'Odor treatment comes built into a Premium Restoration. Here is when a yard needs more, and what that costs.',
  '/cost/putting-green-restoration-cost/': 'Every green is quoted on its own. Here is where a typical backyard green lands, and why.',
  '/cost/turf-infill-replacement-cost/': 'Spreading out the infill you have and replacing it are two very different prices. Here are both, on a real yard.',

  '/guides/buying-a-home-with-artificial-turf-inspection-checklist/': 'A twenty-minute turf walkthrough for the showing, and what each finding costs to put right.',
  '/guides/coastal-turf-maintenance-calendar/': 'Turf here never gets a winter off. Here is the coastal year, month by month.',
  '/guides/dog-daycare-turf-maintenance-plan/': 'A plan for heavy-use dog turf: what staff handle, what a professional handles, and when the infill gets replaced.',
  '/guides/enzyme-vs-vinegar-vs-bleach-for-turf-odor/': 'All three get recommended for dog smell. Only one removes what is causing it.',
  '/guides/grand-strand-pollen-and-your-turf/': 'Pine pollen is the biggest organic load a yard here takes all year. Here is how to keep it from becoming a summer problem.',
  '/guides/how-often-to-clean-artificial-turf/': 'It depends on the dog. Here is the schedule by number of dogs and yard size.',
  '/guides/monthly-vs-quarterly-cleaning-for-dog-yards/': 'What monthly and quarterly cleaning each buy a dog yard, and who really needs the shorter interval.',
  '/guides/pet-turf-care-by-season/': 'Dogs do not take a season off, but what you are fighting in the turf changes through the year.',

  '/how-to/brush-and-fluff-artificial-grass/': 'Brushing does not add anything to turf. It gives the fiber back the angle it was made to hold.',
  '/how-to/check-infill-depth/': 'Infill depth is the one turf measurement you can take yourself, and it tells you more than looking ever will.',
  '/how-to/clean-artificial-turf-after-a-storm/': 'Most storm cleanup is simple. The order matters, and flushing out salt and sand is the step that is easy to let slide.',
  '/how-to/daily-pet-turf-routine/': 'Yards that never smell are the ones where waste never sits. Here is the three-minute daily habit.',
  '/how-to/dry-artificial-grass-faster/': 'Faster drying means less time for bacteria and algae, and it is mostly about moving air through the fibers.',
  '/how-to/get-rid-of-ants-in-artificial-grass/': 'Fire ants mound at the edges, not in the turf. The usual two-step method works, minus the digging and flooding.',
  '/how-to/measure-artificial-turf-for-a-quote/': 'We price by square footage. Here is how to measure your yard with a tape and land close.',
  '/how-to/remove-moss-from-artificial-grass/': 'Moss is not algae, and the fix is not the same. Here is how to clear a shaded patch and keep it clear.',
  '/how-to/use-a-power-broom-on-artificial-turf/': 'A power broom saves hours, and it is also the tool most likely to scar turf. What to rent and how to run it.',

  '/putting-greens/backyard-short-game-area-care/': 'A short-game area is four surfaces working together, and trouble in one usually starts in the one next to it.',
  '/putting-greens/nylon-vs-polyethylene-putting-green-care/': 'Which fiber your green has changes how much sand it wants, how it takes brushing and how it handles heat.',
  '/putting-greens/putting-green-looks-fuzzy/': 'A fuzzy green has one of four causes, and which one you have changes the fix.',
  '/putting-greens/putting-greens-at-vacation-rentals/': 'A rental green takes years of wear in one season. What damages it, a check between stays, and when to restore.',
  '/putting-greens/restore-or-resurface-a-putting-green/': 'Clean and top-dress, or new turf? It depends on what is failing, not on how old the green is.',

  '/service-areas/briarcliffe-acres/': 'The smallest, wealthiest town in our area: oceanfront acre lots under a protected maritime canopy.',
  '/service-areas/burgess/': 'Our southern edge, and almost all golf. A backyard green is common here; one cleaned right is not.',
  '/service-areas/carolina-forest/': 'Master-planned pine flatwoods with the heaviest March pollen on the Strand, and families and dogs in every yard.',
  '/service-areas/carolina-shores/': 'Eight subdivisions in under three square miles, more than half of residents 65 or older, ringed by golf.',
  '/service-areas/conway/': 'The county seat on the Waccamaw River, fourteen miles inland and the youngest town on the Strand.',
  '/service-areas/little-river/': 'The old fishing village at the state line, now a retirement suburb where turf went in so nobody has to mow.',
  '/service-areas/longs/': 'Golf subdivisions and pine-ringed acreage along SC 9, with more pollen and needles than anywhere on the Strand.',
  '/service-areas/loris/': 'The small inland end of our area, where pine pollen and dog boarding matter more than salt spray.',
  '/service-areas/murrells-inlet/': 'More backyard putting greens per street than anywhere on the coast. We restore them, and clean the turf.',
  '/service-areas/myrtle-beach/': 'Fifty-three inches of rain a year and 85 percent humidity before dawn, and every kind of yard gets dirty differently.',
  '/service-areas/north-myrtle-beach/': 'Two cities in one: oceanfront rentals and the golf side. Salt on one, pine straw on the other.',
  '/service-areas/red-hill/': 'The highest, best-drained ground in our area. No salt air here; heat and UV are what stress turf.',
  '/service-areas/socastee/': 'Where the Grand Strand boards its dogs, and where kennel runs are the hardest-working turf on the coast.',
  '/service-areas/sunset-beach/': 'Two towns in one: an island of vacation rentals, and a mainland side built around golf.',
  '/service-areas/surfside-beach/': 'The Family Beach: weekly rentals, dogs on the sand, and turf that takes salt, sand and guest turnover.',

  '/turf-101/zeolite-infill-explained/': 'Zeolite traps ammonia in microscopic pores. That explains why it works, and why it eventually needs attention.',

  '/turf-care/pool-surround-turf/': 'Pool-side turf stays wet and collects chlorine or salt residue, which is why it needs a tighter routine.',
  '/turf-care/restaurant-and-patio-turf/': 'Restaurant patio turf takes spills, food and grease all day, so cleaning has to fit around service hours.',
  '/turf-care/rooftop-and-balcony-turf/': 'No hose bib, no soil and a weight limit. A rooftop routine is built around those first.',
  '/turf-care/sports-and-practice-turf/': 'Practice turf wears from cleats and drills, not pets, so its routine is built around load, not odor.',

  '/turf-problems/artificial-grass-edges-lifting/': 'A lifting edge almost always means whatever held it down let go, and it is one of the cheaper repairs.',
  '/turf-problems/artificial-grass-shedding-fibers/': 'Some shedding in the first months is normal. Handfuls coming out of an older lawn are worth a look.',
  '/turf-problems/cat-urine-smell-in-artificial-grass/': 'Cat urine is stronger than dog urine and often sprayed up fences and borders, so one treatment is often not the end of it.',
  '/turf-problems/fire-ants-in-artificial-grass/': 'Fire ants mound under turf just as they do under a lawn. Digging and flooding wreck the turf; baiting works.',
  '/turf-problems/fleas-and-ticks-in-artificial-grass/': 'Turf gives fleas and ticks no soil, but dirty infill gives them shelter. Clean infill takes it away.',
  '/turf-problems/matted-artificial-grass-walking-paths/': 'Matted paths look years older than the rest of the yard. The fibers are bent, not broken, and they come back up.',
  '/turf-problems/moss-on-artificial-grass/': 'Moss needs only moisture, shade and a foothold, and a shaded strip of infill gives it all three.',
  '/turf-problems/pressure-washer-damaged-artificial-turf/': 'A pressure washer strips infill and frays fibers. Most of it recovers, and it is why we never use one.',
  '/turf-problems/rust-stains-on-artificial-grass/': 'Rust stains come from metal on the fibers or iron in the water, and they come back until the source is dealt with.',
  '/turf-problems/sand-and-salt-on-artificial-grass-after-storm/': 'Salt, sand and a floated edge after a storm are a cleaning job, if they are dealt with in the weeks that follow.',
  '/turf-problems/static-shock-from-artificial-grass/': 'A shock off turf in dry weather is ordinary static, not a safety problem, and a rinse helps.',
  '/turf-problems/sunscreen-and-oil-stains-on-artificial-grass/': 'Sunscreen and tanning oil are made to resist water, so a hose will not lift them. A degreaser will.',
  '/turf-problems/wrinkles-and-ripples-in-artificial-turf/': 'A ripple that comes and goes with the sun is normal. A wrinkle that stays year-round needs a real fix.',
};
