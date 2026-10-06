// Hjälpare som lägger på Astros base-prefix på interna URL:er.
// BASE_URL är '/' eller '/pooldoktorn/' beroende på hosting.
const BASE = import.meta.env.BASE_URL;

/** Intern URL med base-prefix. u('/guider/') -> '/pooldoktorn/guider/' */
export const u = (path: string): string => BASE + String(path).replace(/^\//, '');

/** Absolut URL mot kanonisk domän (för canonical, og:url, schema). */
export const abs = (path: string): string => (import.meta.env.SITE || '').replace(/\/$/, '') + '/' + String(path).replace(/^\//, '');
