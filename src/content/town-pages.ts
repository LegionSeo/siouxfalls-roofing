export interface TownPage {
  slug: string;
  name: string;
  /** Document title only. Unique per town, and it names that town. */
  documentTitle: string;
  description: string;
  sub: string;
  mapQuery: string;
  preview: string;
}

export const townPagesContent: TownPage[] = [
  {
    slug: 'brandon',
    name: 'Brandon',
    documentTitle: 'Roofer in Brandon, SD | Roof Repair and Replacement',
    description: 'Roof repair, new roofs, and storm damage help in Brandon, SD. See common roof jobs, warning signs, and what to tell us when you call {phone}.',
    sub: 'Roof repairs, new roofs, and storm help for homes across Brandon.',
    mapQuery: 'Brandon, SD',
    preview: '/images/maps/brandon.webp',
  },
  {
    slug: 'harrisburg',
    name: 'Harrisburg',
    documentTitle: 'Harrisburg, SD Roofing | Hail Damage and New Roofs',
    description: 'Roofing help in Harrisburg, SD for newer homes and older blocks near the tracks. Hail damage, repairs, and gutters. Call {phone}.',
    sub: 'Hail checks, repairs, and new roofs for a town that has grown fast.',
    mapQuery: 'Harrisburg, SD',
    preview: '/images/maps/harrisburg.webp',
  },
  {
    slug: 'tea',
    name: 'Tea',
    documentTitle: 'Roofing Contractor in Tea, SD | Repairs and Storm Help',
    description: 'Roofing in Tea, SD for growing neighborhoods and first time roof replacements. Learn the warning signs and call {phone}.',
    sub: 'Help for homes in Tea that are ready for their first big roof job.',
    mapQuery: 'Tea, SD',
    preview: '/images/maps/tea.webp',
  },
  {
    slug: 'hartford',
    name: 'Hartford',
    documentTitle: 'Hartford, SD Roof Repair | Homes and Acreages',
    description: 'Roof repair and replacement in Hartford, SD for in town homes, newer additions, and acreages with open wind exposure. Call {phone}.',
    sub: 'Roof help for in town homes, newer additions, and acreages near Hartford.',
    mapQuery: 'Hartford, SD',
    preview: '/images/maps/hartford.webp',
  },
  {
    slug: 'dell-rapids',
    name: 'Dell Rapids',
    documentTitle: 'Dell Rapids, SD Roofer | Older Home Roof Repair',
    description: 'Roofing in Dell Rapids, SD for older homes near downtown and newer ones on the edge of town. Repairs, new roofs, and siding. Call {phone}.',
    sub: 'Careful roof work for older Dell Rapids homes and newer ones too.',
    mapQuery: 'Dell Rapids, SD',
    preview: '/images/maps/dell-rapids.webp',
  },
  {
    slug: 'canton',
    name: 'Canton',
    documentTitle: 'Canton, SD Roofing | Repairs for Older Homes',
    description: 'Roof repair and replacement in Canton, SD, where many homes are older and may hide layers and worn flashing. Call {phone}.',
    sub: 'Roof help for the older homes and river town weather of Canton.',
    mapQuery: 'Canton, SD',
    preview: '/images/maps/canton.webp',
  },
  {
    slug: 'lennox',
    name: 'Lennox',
    documentTitle: 'Lennox, SD Roof Replacement and Repair | Local Help',
    description: 'Roofing in Lennox, SD for homes of every age and buildings on the edge of town. Repairs, storm checks, and gutters. Call {phone}.',
    sub: 'From older homes in town to outbuildings on the edge of Lennox.',
    mapQuery: 'Lennox, SD',
    preview: '/images/maps/lennox.webp',
  },
];

export function townPageBySlug(slug: string | undefined) {
  return townPagesContent.find((page) => page.slug === slug);
}
