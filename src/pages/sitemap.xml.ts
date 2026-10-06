import type { APIRoute } from 'astro';

// Kompatibilitets-route: många verktyg och användare testar /sitemap.xml.
// Astro genererar sitemap-index.xml + sitemap-0.xml – den här pekar på indexen.
export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL || '/';
  const abs = new URL(`${base}sitemap-0.xml`, site).href;
  const body =
    '<?xml version="1.0" encoding="UTF-8"?>' +
    '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' +
    `<sitemap><loc>${abs}</loc></sitemap>` +
    '</sitemapindex>';
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
