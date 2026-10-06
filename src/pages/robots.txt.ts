import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL || '/';
  const flat = new URL(`${base}sitemap.xml`, site).href;
  const index = new URL(`${base}sitemap-index.xml`, site).href;
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${flat}\nSitemap: ${index}\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
