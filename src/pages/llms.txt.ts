import type { APIRoute } from 'astro';
import { pages } from '../data/content';
import { SITE } from '../consts';

export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL || '/';
  const abs = (p: string) => new URL(`${base}${p.replace(/^\//, '')}`, site).href;
  const lines = [
    `# ${SITE.name}`,
    '',
    `> ${SITE.description}`,
    '',
    '## Guider',
    ...pages.filter((p) => p.tag === 'Guide').map((p) => `- [${p.h1}](${abs(`/guider/${p.slug}/`)}): ${p.meta_desc}`),
    '',
    '## Köpguider',
    ...pages.filter((p) => p.tag === 'Köpguide').map((p) => `- [${p.h1}](${abs(`/kopguider/${p.slug}/`)}): ${p.meta_desc}`),
    '',
    '## Verktyg',
    `- [Poolkalkylatorn](${abs('/kalkylator/')}): räkna ut vattenvolym och dosering.`,
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
