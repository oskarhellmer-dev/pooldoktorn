import type { APIRoute } from 'astro';
import { pages } from '../data/content';
import { abs } from '../lib/urls';

// Platt sitemap på /sitemap.xml – listar ALLA sidor direkt (inte via index).
// Astro:s plugin genererar dessutom sitemap-index.xml + sitemap-0.xml.
const STATIC = [
  '/',
  '/guider/',
  '/kopguider/',
  '/poolbygge/',
  '/kalkylator/',
  '/pooljournal/',
  '/om/',
  '/annonsdeklaration/',
  '/integritetspolicy/',
];

export const GET: APIRoute = () => {
  const sectionOf = (tag: string) => (tag === 'Guide' ? 'guider' : tag === 'Köpguide' ? 'kopguider' : 'poolbygge');
  const urls = [
    ...STATIC,
    ...pages.map((p) => `/${sectionOf(p.tag)}/${p.slug}/`),
  ];
  const unique = [...new Set(urls)];
  const today = new Date().toISOString().slice(0, 10);
  const body =
    '<?xml version="1.0" encoding="UTF-8"?>' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' +
    unique
      .map((u) => `<url><loc>${abs(u)}</loc><lastmod>${today}</lastmod></url>`)
      .join('') +
    '</urlset>';
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
