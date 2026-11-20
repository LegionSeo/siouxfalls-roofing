import { SITE } from '../config/site';
import { faqNode } from '../lib/schema';
import { breadcrumb } from '../lib/page-schema';

export interface Guide {
  slug: string;
  /** Full <title>. Must include the city. */
  title: string;
  h1: string;
  description: string;
  /** One line for the guides index card. */
  summary: string;
  datePublished: string;
  dateLabel: string;
  faqs: { q: string; a: string }[];
  /** Article, FAQPage and BreadcrumbList nodes, placed in the head as written. */
  schema: Record<string, unknown>[];
}

const leakFaqs = [
  {
    q: 'Why does my ceiling stain keep growing when it has stopped raining?',
    a: 'Water can sit in insulation and on top of drywall for a while after the rain ends. A stain that grows or stays damp is a good reason to have it checked.',
  },
  {
    q: 'Should I poke a hole in a bulging ceiling?',
    a: 'Please do not stand under it. Keep people out of that area, put a bucket nearby, and call for help. If you are worried about the ceiling coming down, stay out of the room.',
  },
  {
    q: 'Should I get up on the roof to look?',
    a: 'No. Wet, icy, or storm damaged roofs are dangerous. You can learn a lot from the ground and from the attic, if it is safe to get into.',
  },
];

function leakSchema(): Record<string, unknown>[] {
  const url = `${SITE.origin}/guides/roof-leak-after-storm`;
  const headline = 'Roof Leak After a Storm? What to Check First in Sioux Falls';
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      '@id': `${url}#article`,
      headline,
      description: 'What to do first when your Sioux Falls roof leaks after a storm.',
      url,
      mainEntityOfPage: url,
      datePublished: '2026-11-09',
      dateModified: '2026-11-09',
      inLanguage: 'en-US',
      author: { '@type': 'Organization', name: SITE.name, url: SITE.origin },
      publisher: { '@type': 'Organization', name: SITE.name, url: SITE.origin },
    },
    {
      '@context': 'https://schema.org',
      ...faqNode(leakFaqs.map((item) => ({ question: item.q, paragraphs: [item.a] }))),
    },
    {
      '@context': 'https://schema.org',
      ...breadcrumb([
        { name: 'Home', path: '/' },
        { name: 'Guides', path: '/guides' },
        { name: headline, path: '/guides/roof-leak-after-storm' },
      ]),
    },
  ];
}

export const guides: Guide[] = [
  {
    slug: 'roof-leak-after-storm',
    title: 'Roof Leak After a Storm? Sioux Falls Homeowner Guide',
    h1: 'Roof Leak After a Storm? What to Check First in Sioux Falls',
    description: `Roof leaking after a storm in Sioux Falls? Here is what to do first, what to check safely, and when to call ${SITE.phoneDisplay}.`,
    summary: 'What to do first, what you can safely check, and when it is time to call a roofer.',
    datePublished: '2026-11-09',
    dateLabel: 'November 9, 2026',
    faqs: leakFaqs,
    schema: leakSchema(),
  },
];
