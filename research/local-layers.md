# Grand Strand local layers for turf-cleaning pages (checked 2026-09-12)

Per-town facts, with their source URLs, live in `src/data/towns.ts` (each town's `sources[]`). This file keeps the layers that are shared across towns. Facts read through search extracts because the government host blocked fetching are marked (via extract).

## Stormwater / wash-water rules by jurisdiction
| Jurisdiction | Rule | What it means for a turf clean |
|---|---|---|
| Horry County (unincorporated: Carolina Forest, Socastee, Little River, Longs, Burgess, Garden City Horry side) | Ch. 17.7 Art. III, Ord. 53-17 (2017). §17.7-27: illicit discharge = anything to the MS4 not entirely stormwater. §17.7-30: unlawful to discharge matter causing pollution/blockage; accidental discharges reported immediately. Exempt list (via extract) includes irrigation, lawn watering, individual residential car washing, dechlorinated pool water. | Wash water with detergents is not exempt. Bag solids; let treatments dwell rather than flushing to the curb; rinse volume matched to absorption. |
| City of Myrtle Beach | Ch. 18, Ord. 2007-51. §18-5(a) prohibits animal feces, grass clippings, sand, oils, discolored/odorous discharges, pool chemicals to the storm system; §18-5(b) exempts residential car washing, irrigation, street wash water, dechlorinated pool water. | Same handling; the explicit "animal feces … sand … odorous" list is quotable. |
| City of North Myrtle Beach | Ch. 13 Art. IV, Ord. 19-33 (2019), am. 21-02. §13-83(c): nothing to the SMS4 except stormwater or city-engineer-approved unpolluted water. Exemptions §13-83(e) incl. car washing, dechlorinated pool water, street wash water. | Same. |
| Town of Surfside Beach | Code §14-56: no organic/inorganic matter into town stormwater system incl. streets; accidental discharges reported to building dept. | Same; storm drain is at the curb feet from the turf. |
| City of Conway | Title 3 Ch. 6, Ord. 2015-05-04(C). §3-6-27(a): no matter causing pollution/blockage; exempts irrigation, lawn watering, individual car washing, street wash water; accidental discharges reported by 5 p.m. next business day. | Same. |
| Brunswick County NC (Calabash, Sunset Beach, OIB, Shallotte) | Stormwater Quality Management and Discharge Control Ordinance (2008). Illicit connection expressly includes conveyances carrying "wash water"; pollutants include untreated commercial car wash water. Exempts residential car washing, dechlorinated pool water, street wash water. | Wash water is named. Same handling. |
| Georgetown County (Murrells Inlet, Garden City Georgetown side) | Stormwater Management Ordinance, Oct 2014 (text not reviewed). | Assume same. |

Sources: horrycounty-sc.elaws.us (ch17.7 art III §§27, 30); library.municode.com (Myrtle Beach CH18STMA; North Myrtle Beach CH13STMAERCO; Conway TIT3PUWO_CH6STMASECO); surfsidebeach.org/239; brunswickcountync.gov/DocumentCenter/View/642; gtcountysc.gov/DocumentCenter/View/447.

## Water providers and hardness
- GSWSA: ~130,000 customers; Myrtle Beach surface plant (Intracoastal) + Bull Creek plant (Great Pee Dee). Bull Creek also supplies Conway, Little River (LRWS acquired 2023-09-01), Loris, Georgetown County W&SD, part of NMB. No hardness published. (gswsa.com/about_us.cfm?page=17; 2025 Water Quality Report)
- City of Myrtle Beach: hardness 54 mg/L, "soft" (city post 2019-08-08, via extract). Only published figure on the SC side.
- North Myrtle Beach: blend of MB surface plant + Bull Creek + city well (<5%); Barefoot (west of ICW) Bull Creek only; sodium 51/31/270 ppm by source; no hardness. (nmb.us 2025 Water Quality Report)
- Georgetown County W&SD: Waccamaw Neck WTP + groundwater; Garden City Point buys GSWSA; no hardness. (2025 CCR)
- Brunswick County Public Utilities: hardness 28.07 (26.0–43.0), sampled 2024-09-23, units unlabeled (≈ mg/L); wholesale to Holden Beach, Oak Island, OIB, Bald Head. (2024 CCR)
- Implication for copy: white crust on Grand Strand turf is usually private-well irrigation or dried salt, not municipal tap water.

## Climate and biology
- Myrtle Beach rainfall 53.56 in/yr (Wikipedia) / 48.5 in on 122 days (NCEI 1991–2020 via currentresults.com); wettest June–Sept; humid subtropical.
- Relative humidity 85% at 4 a.m., 55% at 1 p.m. (NCEI normals).
- Pine pollen begins February, peaks late March–early April (NC State Extension, 2026-03-04); Grand Strand culprits oak, pine, willow, birch (WPDE 2023-03).
- Hurricane season June 1–Nov 30; 45 SC landfalls 1851–2025; none later than Oct 31; 84% annual chance of a tropical-cyclone impact (SC State Climatology Office, 2026-04-20). Florence 2018 eye over Conway; Hazel 1954 and Hugo 1989 devastated Garden City.
- Fire ants: activity peaks spring and fall; Clemson HGIC 2501 two-step method.
- Soils: Coastal Plain sandy/loamy sand, rapid percolation, poorly drained finer subsoils in low areas near the coast (SC SWAP 2025). Horry County survey: ~2/3 of county poorly to moderately drained flatwoods; Carolina Forest area Leon-type sand with spodic hardpan within 30 in. Conway: ~26 soil types, sand predominant, Meggett loam 17% poorly draining.
- Black film on outdoor surfaces in the humid Southeast is commonly the cyanobacterium Gloeocapsa magma plus algae/mold; needs moisture, shade, organic food.

## Dog-beach rules
| Beach | In-season ban | Leash |
|---|---|---|
| Myrtle Beach | May 1–Labor Day: only before 10 a.m. / after 5 p.m. | ≤7 ft |
| North Myrtle Beach | May 15–Labor Day: no dogs 10 a.m.–4 p.m. | ≤7 ft always |
| Surfside Beach | May 1–Labor Day: no dogs 10 a.m.–5 p.m. | leashed otherwise |
| Horry County unincorporated | May 1–Labor Day: no dogs 10 a.m.–5 p.m. | ≤7 ft |
| Georgetown County | leashed 9 a.m.–7 p.m.; voice control other hours (Ord. 22-10) | — |
| Sunset Beach NC | Fri before Memorial Day–Labor Day: no dogs 9 a.m.–6 p.m. | leashed; no e-leashes |
| Ocean Isle Beach NC | Memorial Day–Labor Day: no dogs 9 a.m.–6 p.m. | leashed always |

## Not found / unverified (kept off the pages)
Hardness for GSWSA, NMB, Conway, Loris, GCWSD; Horry County exempt-discharge list text (extract only); Surfside 7-ft and Sunset Beach 10-ft leash lengths (secondary sources); named HOAs inside Surfside town limits; STR permit ordinances for Horry County, Georgetown County, OIB, Calabash, Shallotte, Loris, Conway; Loris Nature Park address.

## Wave-2 towns researched, not yet built
Garden City, Loris, Burgess, Calabash NC, Sunset Beach NC, Ocean Isle Beach NC, Shallotte NC. Facts are in the 2026-09-12 research output; each has enough for 3 town-specific blocks (housing/rental profile, pets, golf, water, storm history) and should be built next wave.
