import { SITE } from '../consts';
import { abs, slugify } from './urls';

type Ld = Record<string, any>;

const org = () => ({
  '@type': 'Organization',
  name: SITE.name,
  url: abs('/'),
  logo: { '@type': 'ImageObject', url: abs('/favicon.svg') },
});

export const schemaGraph = (nodes: Ld[]): string =>
  JSON.stringify({ '@context': 'https://schema.org', '@graph': nodes }, null, 0);

/** Förstärkt organisation för E-E-A-T: kontaktpunkt, språk, område. */
export const orgProfile = (): Ld => ({
  '@type': 'Organization',
  name: SITE.name,
  url: abs('/'),
  logo: { '@type': 'ImageObject', url: abs('/favicon.svg') },
  description: SITE.description,
  areaServed: { '@type': 'Country', name: 'Sverige' },
  knowsLanguage: 'sv-SE',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    email: 'hej@pooldoktorn.se',
    availableLanguage: 'Swedish',
  },
});

export const website = (): Ld => ({
  '@type': 'WebSite',
  name: SITE.name,
  url: abs('/'),
  inLanguage: 'sv-SE',
  description: SITE.description,
  publisher: org(),
});

export const webPage = (title: string, desc: string, path: string): Ld => ({
  '@type': 'WebPage',
  name: title,
  description: desc,
  url: abs(path),
  inLanguage: 'sv-SE',
  isPartOf: { '@type': 'WebSite', url: abs('/') },
  publisher: org(),
});

export const article = (
  title: string, desc: string, path: string, img: string, published: string, modified: string
): Ld => ({
  '@type': 'Article',
  headline: title,
  description: desc,
  inLanguage: 'sv-SE',
  datePublished: published,
  dateModified: modified,
  mainEntityOfPage: { '@type': 'WebPage', '@id': abs(path) },
  image: [abs(`/bilder/${img}-1200.webp`)],
  author: org(),
  publisher: org(),
});

export const collectionPage = (
  title: string, desc: string, path: string, items: { name: string; url: string }[]
): Ld => ({
  '@type': 'CollectionPage',
  name: title,
  description: desc,
  url: abs(path),
  inLanguage: 'sv-SE',
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: items.length,
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      url: it.url,
    })),
  },
});

export const faqPage = (faq: { q: string; a: string }[]): Ld => ({
  '@type': 'FAQPage',
  mainEntity: faq.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a.replace(/<[^>]+>/g, '') },
  })),
});

export const howTo = (
  name: string, desc: string, img: string, steps: { name: string; text: string }[], path: string
): Ld => ({
  '@type': 'HowTo',
  name,
  description: desc,
  image: abs(`/bilder/${img}-1200.webp`),
  totalTime: 'PT1H',
  step: steps.map((s, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: s.name,
    text: s.text.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim(),
    url: `${abs(path)}#${slugify(s.name)}`,
  })),
});

export const breadcrumbs = (trail: { name: string; path: string }[]): Ld => ({
  '@type': 'BreadcrumbList',
  itemListElement: trail.map((t, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: t.name,
    item: abs(t.path),
  })),
});
