import rss from '@astrojs/rss';
import { pages } from '../data/content';
import { SITE } from '../consts';

const SECTION = {
  Guide: '/guider',
  'Köpguide': '/kopguider',
  Bygge: '/poolbygge',
  Spa: '/spabad',
  Recension: '/recensioner',
};

export function GET(context) {
  const items = pages.map((p) => ({
    title: p.h1,
    description: p.meta_desc,
    link: `${SECTION[p.tag] ?? '/guider'}/${p.slug}/`,
    pubDate: new Date('2026-10-06'),
  }));
  return rss({
    title: `${SITE.name} – guider för pool och spa`,
    description: SITE.description,
    site: context.site,
    items,
    customData: '<language>sv-se</language>',
  });
}
