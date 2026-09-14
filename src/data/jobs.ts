/**
 * Before/after job photos. Each `file` is a base name in public/assets/img/jobs/ with two renditions:
 * `<file>.webp` (1080px, lightbox) and `<file>-640.webp` (grid). A photo only renders once its files exist
 * (ProofGallery checks at build time). Originals live in assets-src/jobs/ (not deployed).
 * Captions describe only what the photo shows, never a town unless Brian confirms it.
 * `services` limits a photo to those service pages; leave it off to show it everywhere.
 */
export type Job = { file: string; title: string; caption: string; alt: string; services?: string[] };

export const JOBS: Job[] = [
  {
    file: 'dog-yard-turf-cleaned-before-after',
    title: 'Dog yard.',
    caption: 'Waste and debris cleared, fibers brushed back up.',
    alt: 'Before and after: artificial turf dog yard with pet waste, then cleaned and brushed',
    services: ['artificial-turf-cleaning', 'pet-odor-removal', 'antimicrobial-sanitizing'],
  },
  {
    file: 'side-yard-turf-power-brushed-before-after',
    title: 'Side yard, mid-clean.',
    caption: 'Brushed and cleared past the line. The front is how we found it.',
    alt: 'Narrow side-yard artificial turf half cleaned, with a power brush resting on the finished section',
    services: ['artificial-turf-cleaning', 'power-brushing'],
  },
  {
    file: 'front-lawn-turf-leaves-cleared-before-after',
    title: 'Front lawn.',
    caption: 'Leaves and debris cleared, turf blown clean.',
    alt: 'Before and after: artificial front lawn covered in dry leaves, then cleared and blown clean',
    services: ['artificial-turf-cleaning', 'storm-and-seasonal-cleanup'],
  },
];
