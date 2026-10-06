// Slår ihop bas-innehållet (content.json) med utbyggnaden och lägger till
// interna länkar mellan sidor (stärker intern länkning = SEO).
import base from './content.json';
import { EXTRA_GUIDER } from './extra-guider';
import { EXTRA_GUIDER2 } from './extra-guider2';
import { EXTRA_KOPGUIDER } from './extra-kopguider';
import { EXTRA_BYGGE } from './extra-bygge';
import { EXTRA_SPA } from './extra-spa';
import { EXTRA_RECENSIONER } from './extra-recensioner';

export interface FaqItem { q: string; a: string }
export interface Aff { title: string; text: string; cta: string; url: string }
export interface Page {
  slug: string;
  tag: 'Guide' | 'Köpguide' | 'Bygge' | 'Spa' | 'Recension';
  h1: string;
  meta_title: string;
  meta_desc: string;
  lead: string;
  img: string;
  image_prompt: string;
  sections: { h2: string; html: string }[];
  faq: FaqItem[];
  aff?: Aff;
  related: string[];
}

// Extra interna länkar: befintlig sida -> nya sidor den bör länka till.
const RELATED_ADDITIONS: Record<string, string[]> = {
  'gront-poolvatten': ['chockklorering', 'grumligt-poolvatten', 'algmedel-pool'],
  'ph-och-klor': ['algmedel-pool', 'grumligt-poolvatten', 'chockklorering'],
  'vinterstangning-pool': ['algmedel-pool'],
  'varstart-pool': ['chockklorering', 'smart-pool-automation'],
  'poolfilter-guide': ['grumligt-poolvatten', 'basta-poolrengoraren', 'basta-poolroboten'],
  'poolvard-vecka': ['smart-pool-automation', 'basta-poolrengoraren', 'basta-poolroboten'],
  'pooltackning-sakerhet': ['poolbelysning'],
  'basta-poolroboten': ['basta-poolrengoraren'],
  'varmepump-pool': ['smart-pool-automation'],
  'saltklorinator': ['smart-pool-automation'],
};

// Korslänkning spabad <-> befintlig spabad-köpguide
const SPA_LINKS: Record<string, string[]> = {
  'spabad-kopguide': ['spabad-komplett-guide', 'spabad-energiforbrukning', 'spabad-vattenbalans'],
};

const normSections = (s: any): { h2: string; html: string }[] =>
  (s || []).map((x: any) => (Array.isArray(x) ? { h2: x[0], html: x[1] } : x));
const normFaq = (f: any): FaqItem[] =>
  (f || []).map((x: any) => (Array.isArray(x) ? { q: x[0], a: x[1] } : x));

const all: Page[] = [
  ...(base.pages as unknown as Page[]),
  ...(EXTRA_GUIDER as unknown as Page[]),
  ...(EXTRA_GUIDER2 as unknown as Page[]),
  ...(EXTRA_KOPGUIDER as unknown as Page[]),
  ...(EXTRA_BYGGE as unknown as Page[]),
  ...(EXTRA_SPA as unknown as Page[]),
  ...(EXTRA_RECENSIONER as unknown as Page[]),
].map((p: any) => ({ ...p, sections: normSections(p.sections), faq: normFaq(p.faq) }));

export const pages: Page[] = all.map((p) => {
  const extra = [...(RELATED_ADDITIONS[p.slug] || []), ...(SPA_LINKS[p.slug] || [])];
  const merged = [...p.related];
  for (const s of extra) if (!merged.includes(s) && all.some((x) => x.slug === s)) merged.push(s);
  return { ...p, related: merged.slice(0, 4) };
});

export const guider = pages.filter((p) => p.tag === 'Guide');
export const kopguider = pages.filter((p) => p.tag === 'Köpguide');
export const bygge = pages.filter((p) => p.tag === 'Bygge');
export const spa = pages.filter((p) => p.tag === 'Spa');
export const recensioner = pages.filter((p) => p.tag === 'Recension');

const sectionOf = (tag: Page['tag']) =>
  tag === 'Guide' ? 'guider'
  : tag === 'Köpguide' ? 'kopguider'
  : tag === 'Bygge' ? 'poolbygge'
  : tag === 'Spa' ? 'spabad'
  : 'recensioner';

export const bySlug = (slug: string) => pages.find((p) => p.slug === slug);
export const href = (slug: string) => {
  const p = bySlug(slug);
  return p ? `/${sectionOf(p.tag)}/${p.slug}/` : '/';
};
