// Slår ihop bas-innehållet (content.json) med utbyggnaden och lägger till
// interna länkar mellan sidor (stärker intern länkning = SEO).
import base from './content.json';
import { EXTRA_GUIDER } from './extra-guider';
import { EXTRA_GUIDER2 } from './extra-guider2';
import { EXTRA_KOPGUIDER } from './extra-kopguider';
import { EXTRA_BYGGE } from './extra-bygge';
import { EXTRA_SPA } from './extra-spa';
import { EXTRA_RECENSIONER } from './extra-recensioner';
import { EXTRA_BATCH1 } from './extra-batch1';
import { EXTRA_BATCH2 } from './extra-batch2';
import { EXTRA_BATCH3 } from './extra-batch3';
import { EXTRA_BATCH4 } from './extra-batch4';
import { EXTRA_BATCH5 } from './extra-batch5';

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
  // Batch 1 – kopplar in nya vattenvårdsguider i internlänkningen
  'gront-poolvatten': ['klorvarde-pool', 'chockklorering', 'grumligt-poolvatten', 'algmedel-pool', 'cyanursyra-pool', 'mjolkigt-vatten-pool'],
  'ph-och-klor': ['klorvarde-pool', 'algmedel-pool', 'grumligt-poolvatten', 'chockklorering', 'cyanursyra-pool', 'veckoklor', 'snabbklor', 'poolkemikalier', 'vattentester-pool'],
  'vinterstangning-pool': ['brunt-vatten-pool', 'algmedel-pool', 'alger-efter-vintern'],
  'varstart-pool': ['brunt-vatten-pool', 'chockklorering', 'smart-pool-automation', 'alger-efter-vintern'],
  'poolfilter-guide': ['cirkulationspump-pool', 'grumligt-poolvatten', 'basta-poolrengoraren', 'basta-poolroboten', 'backspolning-pool', 'mjolkigt-vatten-pool', 'sandfilterpump', 'poolservice', 'filterbollar-pool', 'vattentester-pool'],
  'chockklorering': ['snabbklor', 'mjolkigt-vatten-pool', 'cyanursyra-pool', 'alger-efter-vintern', 'flockningsmedel-pool', 'poolkemikalier'],
  'grumligt-poolvatten': ['brunt-vatten-pool', 'mjolkigt-vatten-pool', 'backspolning-pool', 'flockningsmedel-pool'],
  'poolvard-vecka': ['klorvarde-pool', 'smart-pool-automation', 'basta-poolrengoraren', 'basta-poolroboten', 'poolservice'],
  'pooltackning-sakerhet': ['poolbelysning', 'poolstege'],
  'basta-poolroboten': ['basta-poolrengoraren', 'pooldammsugare'],
  'varmepump-pool': ['driftkostnad-pool', 'smart-pool-automation', 'solfangare-pool', 'forangare-varmepump', 'pooltermometer', 'inomhuspool'],
  'saltklorinator': ['smart-pool-automation'],
  // Batch 2 – köpguider & guider in i internlänkningen
  'poolpump': ['cirkulationspump-pool', 'sandfilterpump', 'poolfilter-guide', 'solfangare-pool', 'forangare-varmepump', 'poolslang'],
  'glasfiberpool': ['poolliner'],
  'barnpool': ['poolstege'],
  // Batch 3 – köpguider & guider in i internlänkningen
  'spabad-vattenbalans': ['grumligt-vatten-spabad', 'spabad-barn'],
  'att-kopa-pool': ['poolpaket', 'poolsarg', 'tjallendens-pool', 'inomhuspool'],
  'spabad-kemikalier': ['grumligt-vatten-spabad'],
  'skotsel-av-spabad': ['spabad-barn', 'kopa-begagnat-spabad'],
  // Batch 5 – kopplar in nya guider i internlänkningen
  'installera-spabad-markarbete': ['elanslutning-spabad'],
  'spabad-energiforbrukning': ['elanslutning-spabad'],
};

// Korslänkning spabad <-> befintlig spabad-köpguide
const SPA_LINKS: Record<string, string[]> = {
  'spabad-kopguide': ['elanslutning-spabad', 'spabad-komplett-guide', 'spabad-energiforbrukning', 'spabad-vattenbalans', 'spabad-uppblasbart', 'swimspa', 'wellness-spabad', 'kopa-begagnat-spabad', 'spabad-barn', 'basta-spabad'],
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
  ...(EXTRA_BATCH1 as unknown as Page[]),
  ...(EXTRA_BATCH2 as unknown as Page[]),
  ...(EXTRA_BATCH3 as unknown as Page[]),
  ...(EXTRA_BATCH4 as unknown as Page[]),
  ...(EXTRA_BATCH5 as unknown as Page[]),
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
