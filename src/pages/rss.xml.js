import rss from '@astrojs/rss';
import { pages } from '../data/content';
import { SITE } from '../consts';

export function GET(context) {
  const items = pages.map((p) => ({
    title: p.h1,
    description: p.meta_desc,
    link: `${p.tag === 'Guide' ? '/guider' : '/kopguider'}/${p.slug}/`,
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
