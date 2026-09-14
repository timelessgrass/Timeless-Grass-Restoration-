/** Which icon represents a service, problem cluster, commercial segment or section heading. */

export const SERVICE_ICON: Record<string, string> = {
  'artificial-turf-cleaning': 'sparkle',
  'pet-odor-removal': 'paw',
  'antimicrobial-sanitizing': 'shield',
  'algae-and-mold-removal': 'leaf',
  'hard-water-and-stain-removal': 'drop',
  'power-brushing': 'broom',
  'infill-replenishment': 'sand',
  'putting-green-restoration': 'flag',
  'turf-repair': 'wrench',
  'storm-and-seasonal-cleanup': 'storm',
};

export const KIND_ICON: Record<string, string> = {
  hospitality: 'building', community: 'users', commercial: 'building', facility: 'building', partners: 'award',
  pet: 'paw', recreation: 'flag', 'private property': 'home', guide: 'layers', comparison: 'layers', pricing: 'tag',
  'putting green': 'flag', infill: 'sand', repair: 'wrench', 'pet odor': 'paw', problem: 'alert', cost: 'tag', explainer: 'layers', neighborhood: 'map',
};

const KEYWORDS: [RegExp, string][] = [
  [/(dog|pet|urine|pee|poop|paw|kennel|daycare)/i, 'paw'],
  [/(smell|odor|ammonia|musty|mildew)/i, 'odor'],
  [/(green|golf|putt|chip|stimp|cup|fringe)/i, 'flag'],
  [/(algae|moss|mold|leaf|leaves|pollen|oak|pine|weed|tree)/i, 'leaf'],
  [/(storm|hurricane|flood|rain|salt)/i, 'storm'],
  [/(water|drain|rinse|hose|pool|irrigation|well|mineral|crust)/i, 'drop'],
  [/(sand|infill|zeolite)/i, 'sand'],
  [/(seam|edge|repair|patch|burn|tear)/i, 'wrench'],
  [/(brush|matted|flat|broom|groom)/i, 'broom'],
  [/(bacteria|sanitiz|antimicrobial|disinfect|safe)/i, 'shield'],
  [/(cost|price|pay|budget|quote|\$)/i, 'tag'],
  [/(schedule|season|month|week|calendar|year|often)/i, 'calendar'],
  [/(gate|access|hoa|poa|board|review|rules|association)/i, 'users'],
  [/(sun|heat|uv|fade)/i, 'sun'],
  [/(ant|flea|tick|fly|flies|gnat|bug|pest|snake)/i, 'bug'],
  [/(home|house|lot|estate|yard|rental|listing)/i, 'home'],
  [/(town|area|neighborhood|map|where|waterway|ocean|marsh)/i, 'map'],
  [/(check|inspect|test|measure|tell|sign)/i, 'search'],
];

/** Best icon for a heading or topic, falling back to `fallback`. */
export const iconFor = (text: string, fallback = 'sparkle') => (KEYWORDS.find(([re]) => re.test(text)) ?? [null, fallback])[1];
