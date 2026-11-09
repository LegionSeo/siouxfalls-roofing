/**
 * Renter-swappable business details.
 * Every email, town, and photo path on the site comes from here.
 * The phone number lives in ./phone.ts as a single constant.
 *
 * Leave smsEnabled false until the number can receive texts.
 *
 * Photos are illustrations and credited town photos. Point the paths at real job
 * photos when those exist. Never show anyone as this company's crew unless they are.
 */

import { PHONE, PHONE_E164, PHONE_HREF, PHONE_SMS_HREF } from './phone';

export interface PostalAddress {
  city: string;
  region: string;
  country: string;
}

export interface GeoPoint {
  lat: number;
  lng: number;
}

export interface OpeningHours {
  label: string;
  specification: {
    dayOfWeek: string | string[];
    opens: string;
    closes: string;
  }[];
}

export interface JobPhoto {
  src: string;
  alt: string;
  width: number;
  height: number;
}

/** Swappable responsive photo. Change the paths when a real photo replaces it. */
export interface PhotoSlot {
  alt: string;
  width: number;
  height: number;
  src: string;
  webpSrcset: string;
  avifSrcset: string;
  /** Editor note. Rendered as an HTML comment, not as visible copy. */
  note: string;
}

export interface SiteConfig {
  name: string;
  origin: string;
  phoneDisplay: string;
  phoneE164: string;
  phoneHref: string;
  smsHref: string;
  /** Show sms: links only when the tracking number can receive texts. */
  smsEnabled: boolean;
  email: string;
  address: PostalAddress;
  /** Fill only from a verified geocode. */
  geo: GeoPoint | null;
  /** null hides the hours line and openingHoursSpecification. */
  hours: OpeningHours | null;
  serviceTowns: string[];
  listOnlyTowns: string[];
  /** Add a Google or Facebook profile only after it really exists. */
  sameAs: string[];
  /** Legal operator named in the footer disclosure. Empty hides that line. */
  operator: string;
  /** Dark-surface lockup for the header and footer. */
  logo: string;
  /** Light-surface lockup. */
  logoLight: string;
  /** Roof mark without the wordmark. */
  logoIcon: string;
  /** Alt text, and the name to show if the logo image does not load. */
  logoText: string;
  ogImage: string;
  /** Homepage hero. Replace src, srcset, and alt together. */
  heroPhoto: PhotoSlot;
  /** Real job photos for the proof block. Empty keeps that block hidden. */
  jobPhotos: JobPhoto[];
  /**
   * HTTPS action for the request form. Null hides that form.
   * The live value is FormSubmit. Mail is sent by formsubmit.co, not this site.
   */
  formEndpoint: string | null;
  /** Palette id. Live tokens are Storm Slate and Copper. */
  theme: string;
  /**
   * GA4 measurement id, such as G-ABC123. Empty loads no tag.
   * Ignored when gtmId is set.
   */
  ga4Id: string;
  /**
   * GTM container id, such as GTM-ABC123. Empty loads no tag.
   * When both ids are set, only GTM loads.
   */
  gtmId: string;
}

function photo(
  base: string,
  large: number,
  small: number,
  height: number,
  alt: string,
  note: string,
): PhotoSlot {
  return {
    alt,
    width: large,
    height,
    src: `/images/${base}-${large}.webp`,
    webpSrcset: `/images/${base}-${small}.webp ${small}w, /images/${base}-${large}.webp ${large}w`,
    avifSrcset: `/images/${base}-${small}.avif ${small}w, /images/${base}-${large}.avif ${large}w`,
    note,
  };
}

const SERVICE_EMAIL = 'service@siouxfalls-roofing.com';

export const SITE: SiteConfig = {
  name: 'Sioux Falls Roofing',
  origin: 'https://www.siouxfalls-roofing.com',
  phoneDisplay: PHONE,
  phoneE164: PHONE_E164,
  phoneHref: PHONE_HREF,
  smsHref: PHONE_SMS_HREF,
  smsEnabled: false,
  email: SERVICE_EMAIL,
  address: {
    city: 'Sioux Falls',
    region: 'SD',
    country: 'US',
  },
  geo: null,
  hours: null,
  serviceTowns: [
    'Sioux Falls',
    'Brandon',
    'Harrisburg',
    'Tea',
    'Hartford',
    'Dell Rapids',
    'Canton',
    'Lennox',
  ],
  listOnlyTowns: ['Crooks', 'Renner', 'Baltic'],
  sameAs: [],
  // TODO: confirm this legal entity also operates this site, or set to ''.
  operator: 'Midwest Leads LLC',
  logo: '/logo-white.svg',
  logoLight: '/logo.svg',
  logoIcon: '/logo-icon.svg',
  logoText: 'Sioux Falls Roofing',
  ogImage: '/brand/og-image.jpg',
  heroPhoto: photo(
    'hero-area',
    1280,
    800,
    720,
    'Aerial view of rooftops in a neighborhood near Sioux Falls',
    'Temporary hero. Replace hero-area files, or heroPhoto, with a real job photo.',
  ),
  jobPhotos: [],
  formEndpoint: `https://formsubmit.co/${SERVICE_EMAIL}`,
  theme: 'storm-slate-copper',
  ga4Id: '',
  gtmId: '',
};

const GTM_ID = /^GTM-[A-Z0-9]+$/;
const GA4_ID = /^G-[A-Z0-9]+$/;

/** Which tag to load. GTM wins when both ids are set. Empty or invalid ids load nothing. */
/** AJAX endpoint on the same FormSubmit host. HTTPS only, no API key. */
export function leadAjaxEndpoint(): string {
  return `https://formsubmit.co/ajax/${SITE.email}`;
}

export function activeAnalytics(): { provider: 'gtm' | 'ga4'; id: string } | null {
  const gtmId = SITE.gtmId.trim();
  if (gtmId) return GTM_ID.test(gtmId) ? { provider: 'gtm', id: gtmId } : null;
  const ga4Id = SITE.ga4Id.trim();
  if (ga4Id) return GA4_ID.test(ga4Id) ? { provider: 'ga4', id: ga4Id } : null;
  return null;
}

export function formatAddress(): string {
  return `${SITE.address.city}, ${SITE.address.region}`;
}

export function mapsUrl(): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(formatAddress())}`;
}

/** Absolute canonical URL. Homepage has no trailing slash. */
export function canonicalUrl(pathname: string): string {
  let path = pathname.split('?')[0].split('#')[0];
  // `build.format: 'file'` reports /about.html during the build. Canonicals never carry the extension.
  path = path.replace(/\/index\.html$/, '/').replace(/\.html$/, '');
  if (path === '' || path === '/') return SITE.origin;
  return `${SITE.origin}${path.replace(/\/+$/, '')}`;
}

export function absoluteUrl(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  return `${SITE.origin}${path.startsWith('/') ? path : `/${path}`}`;
}
