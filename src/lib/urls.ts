// Hjälpare som lägger på Astros base-prefix på interna URL:er.
// BASE_URL är '/' eller '/pooldoktorn/' beroende på hosting.

const BASE = import.meta.env.BASE_URL || '/';

/** Intern URL med base-prefix. u('/guider/') -> '/pooldoktorn/guider/' */
export const u = (path: string): string => BASE + String(path).replace(/^\//, '');

/**
 * Absolut URL mot kanonisk domän + base (för canonical, og:url, og:image, schema).
 * MÅSTE inkludera BASE_URL, annars pekar canonical/og/schema på 404-URL:er
 * när sajten ligger i en undersökväg (t.ex. GitHub Pages /pooldoktorn/).
 * abs('/guider/') -> 'https://host/pooldoktorn/guider/'
 * abs('/')        -> 'https://host/pooldoktorn/'
 */
export const abs = (path: string): string => {
  const site = (import.meta.env.SITE || '').replace(/\/$/, '');
  const base = BASE.replace(/\/$/, ''); // '' eller '/pooldoktorn'
  return `${site}${base}/${String(path).replace(/^\//, '')}`;
};

/** Rubrik -> ankare. Måste vara identisk i ArticleView och schema (HowTo). */
export const slugify = (s: string): string =>
  s.toLowerCase()
    .replace(/[åä]/g, 'a').replace(/ö/g, 'o').replace(/é/g, 'e')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
