import { SITE } from './site';

export function joinNames(names: string[]): string {
  if (names.length <= 1) return names.join('');
  if (names.length === 2) return `${names[0]} and ${names[1]}`;
  return `${names.slice(0, -1).join(', ')}, and ${names[names.length - 1]}`;
}

export interface ServiceItem {
  name: string;
  href: string;
  icon: string;
  summary: string;
  /** False until the page exists. Dead URLs stay out of nav, footer, cards, and schema. */
  live: boolean;
}

const serviceList: Omit<ServiceItem, 'live'>[] = [
  {
    name: 'Roof replacement',
    href: '/services/roof-replacement',
    icon: 'roof',
    summary: 'A full tear off and a new roof when patching no longer makes sense. We walk you through materials before anything starts.',
  },
  {
    name: 'Roof repair',
    href: '/services/roof-repair',
    icon: 'hammer',
    summary: 'Leaks, missing shingles, and worn flashing. We find where the water really gets in, then fix that spot.',
  },
  {
    name: 'Storm and hail damage',
    href: '/services/storm-hail-damage',
    icon: 'hail',
    summary: 'Hail hits and wind lifted shingles are easy to miss from the ground. We look closely and show you what we find.',
  },
  {
    name: 'Insurance claim help',
    href: '/services/insurance-claim-help',
    icon: 'clipboard',
    summary: 'Filing a roof claim can feel confusing. We explain the steps and give you clear photos and notes. Your insurer makes the decision.',
  },
  {
    name: 'Gutters',
    href: '/services/gutters',
    icon: 'gutter',
    summary: 'New gutters, downspouts, and repairs that move water away from your roof and foundation.',
  },
  {
    name: 'Siding',
    href: '/services/siding',
    icon: 'siding',
    summary: 'Repairs and new siding for hail dents, cracks, and wind damage. We tie it in cleanly around your windows and trim.',
  },
  {
    name: 'Roof inspections',
    href: '/services/roof-inspections',
    icon: 'search',
    summary: 'A careful look at your shingles, flashing, vents, and attic. You get a plain report on what we saw.',
  },
];

export const services: ServiceItem[] = serviceList.map((service) => ({
  ...service,
  live: true,
}));

export function townHref(name: string): string {
  if (name === 'Sioux Falls') return '/';
  return `/locations/${name.toLowerCase().replace(/\s+/g, '-')}`;
}

/**
 * One entry per town page. Crooks, Renner, and Baltic
 * are list-only names in site.ts and must not be added here.
 */
const TOWN_ENTRIES: { name: string; live: boolean }[] = [
  { name: 'Sioux Falls', live: true },
  { name: 'Brandon', live: true },
  { name: 'Harrisburg', live: true },
  { name: 'Tea', live: true },
  { name: 'Hartford', live: true },
  { name: 'Dell Rapids', live: true },
  { name: 'Canton', live: true },
  { name: 'Lennox', live: true },
];

for (const name of SITE.listOnlyTowns) {
  if (TOWN_ENTRIES.some((town) => town.name === name)) {
    throw new Error(`${name} is list-only and must not have a town page entry`);
  }
}

export const townPages = TOWN_ENTRIES.map((town) => ({
  name: town.name,
  href: townHref(town.name),
  live: town.live,
}));

export const footerTowns = townPages.filter((town) => town.name !== 'Sioux Falls');
