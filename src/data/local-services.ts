/**
 * Service × town pages: only for the services that genuinely change town to town
 * (pet odor, putting greens, storm cleanup, algae). Each entry is hand-written:
 * a local angle built on that town's facts, and its own FAQ. Shared service
 * content stays short (the included list); the unique part is the long part.
 */
import type { Section, Faq } from './types';
export type LocalService = {
  town: string;
  service: string;
  title: string;
  description: string;
  h1: string;
  lede: string;
  question: string;
  answer: string;
  /** 2–4 blocks, 300–500 words, true only of this town × service */
  blocks: Section[];
  faq: Faq[];
  updated: string;
};
