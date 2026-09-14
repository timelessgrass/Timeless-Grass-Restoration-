import type { Article } from './types';

/* SOURCES:
 * National Home Watch Association was formed in 2009 to set standards for the home
 * watch industry (accreditation, background checks, insurance/bonding for member
 * companies) across the U.S. and Canada. https://www.nationalhomewatchassociation.org/about-us
 * checked 2026-09-13
 * A home watch visit report typically includes photos, timestamps and notes, sent to
 * the owner after each scheduled visit. https://www.nationalhomewatchassociation.org/homeowner
 * checked 2026-09-13
 */

export const COMMERCIAL_3: Article[] = [
  {
    slug: 'custom-home-builders-and-post-construction',
    short: 'Builders & post-construction',
    kind: 'partners',
    title: `Turf Cleanup Before Your Home Closes | TIMELESS`,
    description: `New artificial turf catches drywall dust, paint and mortar before a home closes. Cleaned before the walkthrough, priced by published bands.`,
    h1: `Turf cleanup for custom home builders, before closing`,
    lede: `New turf usually goes in before the last trades finish, so it catches drywall dust, paint and mortar before anyone notices.`,
    question: `Do you clean new artificial turf after construction, before a home closes?`,
    answer: `Yes. TIMELESS Turf Restoration cleans new artificial turf across the Grand Strand before the final walkthrough: drywall dust, paint overspray, mortar splatter, sawdust and stray fasteners, picked up and blown clean. Install defects get reported to your installer, not patched over. Pricing follows our published bands, one clean per home or a standing schedule for the community.`,
    takeaways: [
      `New turf catches drywall dust, paint, mortar and sawdust.`,
      `We pick up debris, especially metal, before we clean.`,
      `Install defects get reported to your installer, not patched.`,
      `Several closings a month? A standing schedule works better.`,
    ],
    sections: [
      { h2: `What construction leaves on new turf`, html: `<ul class="checklist"><li>Drywall dust and mud tracked in by boot traffic</li><li>Paint <a href="/how-to/remove-paint-from-artificial-grass/">overspray</a> from trim and touch-up work</li><li>Grout and mortar splatter from stonework</li><li>Sawdust, cut-offs and stray fasteners</li></ul>` },
      { h2: `What we do about it`, html: `<p>We hand-pick debris first, fasteners especially, then run the normal process: blow, power brush, low-pressure rinse, with spot work wherever paint or mortar has dried in.</p>` },
      { h2: `What we flag instead of fixing`, html: `<div class="callout callout--warn"><b>Heads up.</b> A <a href="/turf-problems/seams-showing-in-artificial-grass/">seam</a> or edge that wasn't seated right is an install issue, not ours to fix — we photograph and report it to your installer.</div>` },
      { h2: `Timing and standing schedules`, html: `<p>Tell us the walkthrough date and we work backward from it. A builder closing several homes a month is better served by a <a href="/commercial/installer-and-landscaper-partners/">standing arrangement</a> than a separate quote each time, and a home also going to market can pair with <a href="/commercial/real-estate-agents-and-listing-prep/">listing prep</a>.</p>` },
      { h2: `What it costs`, html: `<p>Pricing follows our published <a href="/pricing/">bands</a>: Essential Clean from $199, Premium Restoration from $299, both scaling with square footage. New-construction debris usually calls for Premium. Homes over 5,000 square feet are quoted after a walk-through.</p>` },
    ],
    faq: [
      { q: `Will you fix a seam or edge that wasn't installed right?`, a: `No. We aren't the installer, so we don't repair install defects. We photograph them and report back to your installer instead.` },
      { q: `Do you need special equipment for construction debris?`, a: `No. We hand-pick loose debris, especially metal, before running our normal process: blow, brush, rinse.` },
      { q: `Can you schedule around our closing date instead of a fixed day?`, a: `Yes. Tell us the walkthrough date and we work backward from it.` },
      { q: `Do you work with builders on more than one home at a time?`, a: `Yes. A community with several closings a month is usually better served by a standing arrangement than a separate call each time.` },
    ],
    services: ['artificial-turf-cleaning', 'power-brushing', 'turf-repair'],
    related: ['real-estate-agents-and-listing-prep', 'installer-and-landscaper-partners', 'home-watch-and-second-home-owners'],
    updated: '2026-09-14',
  },
  {
    slug: 'real-estate-agents-and-listing-prep',
    short: 'Agents & listing prep',
    kind: 'partners',
    title: `Turf & Green Prep for Listings | TIMELESS`,
    description: `Getting artificial turf and a backyard green photo- and showing-ready before a Grand Strand listing goes live, timed to your photographer.`,
    h1: `Getting turf and a putting green ready for a listing`,
    lede: `A camera finds every flat spot, dull patch and algae line a homeowner stopped noticing. So does a buyer on the patio.`,
    question: `Can you get artificial turf and a putting green ready before a house is listed?`,
    answer: `Yes. TIMELESS Turf Restoration cleans artificial turf and backyard putting greens across the Grand Strand before a listing photographer or a showing: matting brushed out, dull color and algae treated, pet odor addressed, greens cleared and rolling true. We work around a vacant home's lockbox schedule and say when something is a disclosure item, not a clean.`,
    takeaways: [
      `Buyers notice matted paths, dull color and algae lines.`,
      `Pet odor is worst at an open house, no AC.`,
      `We time the visit right before the photographer, not weeks out.`,
      `Past cleaning? We say so — that's a disclosure issue.`,
    ],
    sections: [
      { h2: `What shows up in a listing photo`, html: `<ul class="checklist"><li>Matted, flattened paths where the family or dog crosses daily</li><li>Dull, dirty color next to a neighbor's turf that looks new</li><li>An algae line at the fence or under a deck</li><li>A green that looks fuzzy or dirty instead of tight and uniform</li></ul>` },
      { h2: `Pet odor at an open house`, html: `<p>Doors propped open, AC sometimes off, strangers standing close: an open house is the worst-case test for <a href="/services/pet-odor-removal/">pet odor</a>. Enzyme treatment needs days to dwell, not the morning of.</p>` },
      { h2: `Getting a green ready to show`, html: `<p>We clear, brush, top-dress and roll a listing's green the same as we would for an owner keeping it, through <a href="/services/putting-green-restoration/">putting green restoration</a>, and check speed before calling it done.</p>` },
      { h2: `Timing it to the photographer`, html: `<p>Pollen, rain and a week of pet use undo a clean fast here, so the visit that matters is the one closest to the camera. For a vacant listing, we coordinate lockbox access directly with the agent.</p>` },
      { h2: `When it isn't a clean`, html: `<div class="callout callout--warn"><b>Heads up.</b> A settled base or failed backing is a <a href="/guides/clean-or-replace-artificial-turf/">replacement</a> issue, not a deep-clean one. We tell you before you list, not after an inspector finds it.</div>` },
      { h2: `What it costs`, html: `<p>Turf prices by our published <a href="/pricing/">square-footage bands</a>: Essential Clean from $199, Premium Restoration from $299. A backyard green is quoted after we walk the property.</p>` },
    ],
    faq: [
      { q: `How far ahead of the listing photos should we schedule?`, a: `As close as your schedule allows. Pollen, rain and pet use undo a clean fast here, so the visit closest to the camera date holds up best.` },
      { q: `Can you work a vacant listing without the owner present?`, a: `Yes. Coordinate lockbox access with us the same way you would with any other vendor.` },
      { q: `What if the turf needs more than a clean before we list?`, a: `We say so. A settled base or failed backing is a disclosure conversation, not something we clean over to get through a showing.` },
      { q: `Do you clean putting greens for a listing too?`, a: `Yes, cleared, brushed, top-dressed and checked for speed like any other restoration, quoted after a look.` },
    ],
    services: ['pet-odor-removal', 'putting-green-restoration', 'algae-and-mold-removal'],
    related: ['custom-home-builders-and-post-construction', 'home-watch-and-second-home-owners', 'golf-communities-and-amenity-greens'],
    updated: '2026-09-14',
  },
  {
    slug: 'home-watch-and-second-home-owners',
    short: 'Home watch & 2nd homes',
    kind: 'private property',
    title: `Turf Care for Second Homes & Home Watch | TIMELESS`,
    description: `Turf and putting-green upkeep for absentee owners of Grand Strand second homes, coordinated with your home-watch company or manager.`,
    h1: `Turf care for second homes and the companies that watch them`,
    lede: `A green nobody plays and a lawn nobody walks fail quietly — algae, leaves and fire ants get a head start.`,
    question: `Do you maintain turf for second homes when the owner is not there?`,
    answer: `Yes. TIMELESS Turf Restoration schedules turf and putting-green visits for absentee owners of Grand Strand second homes, whether you book directly or through your home-watch company. Unused turf still fails: algae in the shade, leaves and pollen packed into infill, weeds, fire ant mounds. We visit on a set schedule, send photos after, and check the property following any tropical system.`,
    takeaways: [
      `Unused turf fails quietly: algae, leaves, weeds, fire ants.`,
      `This isn't a rental — see our vacation rentals page for that.`,
      `Scheduled visits come with photos, like a home-watch report.`,
      `We check after storms and reset before the owner arrives.`,
    ],
    sections: [
      { h2: `What happens to turf nobody uses`, html: `<ul class="checklist"><li><a href="/turf-problems/black-patches-algae-on-artificial-grass/">Algae</a> takes hold fastest in undisturbed shade</li><li><a href="/turf-problems/pine-needles-and-oak-leaves-on-turf/">Leaves and pollen</a> sit through a whole season</li><li><a href="/turf-problems/weeds-growing-in-artificial-grass/">Weeds</a> establish at a seam nobody notices</li><li>Fire ant mounds get weeks to build, not days</li></ul>` },
      { h2: `Not a rental`, html: `<p>This is different from our <a href="/commercial/vacation-rentals-and-property-managers/">vacation rentals page</a>: a rental turns over guests weekly, a second home sits empty most of the year and gets used hard for a few weeks at a time.</p>` },
      { h2: `Working with your home-watch company`, html: `<p>We coordinate with whoever already holds access for the property, a home-watch company or a manager, and work turf into whatever visit cadence they've already set rather than adding a separate schedule.</p>` },
      { h2: `Scheduled visits and storm checks`, html: `<p>We set the interval by shade and use, typically quarterly, and send dated photos after every visit. Any property on our schedule gets a check after a named storm and a reset before the owner's next stay.</p>` },
      { h2: `What it costs`, html: `<p>Pricing follows the same square-footage <a href="/pricing/">bands</a> as any residential yard, whether booked directly or through a home-watch company. A standing schedule is set to how often the property is actually used.</p>` },
    ],
    faq: [
      { q: `How often does a second home's turf need a visit if nobody is there?`, a: `Quarterly is a reasonable baseline for moderate shade and use; a lot under heavy tree cover usually needs it more often.` },
      { q: `Can you coordinate directly with our home-watch company instead of the owner?`, a: `Yes. We work with whoever already holds access and scheduling, and send the same photo documentation they'd expect from any vendor.` },
      { q: `Do you check the property after a hurricane or tropical storm automatically?`, a: `Yes, for properties on a standing schedule: debris, standing water and a check of edges and seams, without waiting to be asked.` },
      { q: `Is this the same service as your vacation rental program?`, a: `No. A rental turns over guests weekly; a second home sits empty most of the time and gets used occasionally. The schedule differs.` },
    ],
    services: ['artificial-turf-cleaning', 'algae-and-mold-removal', 'storm-and-seasonal-cleanup'],
    related: ['vacation-rentals-and-property-managers', 'resorts-and-oceanfront-condos', 'real-estate-agents-and-listing-prep'],
    updated: '2026-09-14',
  },
];
