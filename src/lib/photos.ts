import type { PhotoSlot } from '../config/site';

/**
 * Stock photos from Unsplash. Each one is free to use under the Unsplash License
 * (https://unsplash.com/license), checked on its photo page in Nov 2026.
 * Files load from images.unsplash.com, as Unsplash allows.
 * None of the people shown work for this company, so alt text never says they do.
 * Swap a key's id for a real job photo when one exists.
 */
export interface StockPhoto {
  /** images.unsplash.com path id. */
  id: string;
  alt: string;
  photographer: string;
  /** Unsplash photo page. */
  page: string;
  /** imgix crop focus. Defaults to the middle. */
  crop?: string;
}

export const STOCK = {
  hero: {
    id: 'photo-1635424824849-1b09bdcc55b1',
    alt: 'Roofer in a safety vest and harness using a nail gun on an asphalt shingle roof',
    photographer: 'Raze Solar',
    page: 'https://unsplash.com/photos/Scaj0T40nFI',
  },
  replacement: {
    id: 'photo-1633759593085-1eaeb724fc88',
    alt: 'Roofers tearing off old shingles down to the roof deck',
    photographer: 'Zohair Mirza',
    page: 'https://unsplash.com/photos/GXITWKvgm-k',
  },
  carrying: {
    id: 'photo-1643225523483-e2c434191bba',
    alt: 'Roofer carrying a bundle of shingles across a roof',
    photographer: 'Zohair Mirza',
    page: 'https://unsplash.com/photos/4XMHsy4Rvi8',
  },
  tarping: {
    id: 'photo-1786295866839-d17f879c65cd',
    alt: 'Worker in a blue shirt on a porch roof by a window, with a ladder below',
    photographer: 'Matt Adams',
    page: 'https://unsplash.com/photos/Rh1FunvzXVM',
  },
  metal: {
    id: 'photo-1780445392484-5fb7d5610708',
    alt: 'Hands using a tool on metal roof trim',
    crop: 'bottom',
    photographer: 'Sergio Martins',
    page: 'https://unsplash.com/photos/E07VvBCSSNE',
  },
  storm: {
    id: 'photo-1595810033299-5a6fcda2aa71',
    alt: 'Dark storm clouds building over open farmland',
    photographer: 'Dave Hoefler',
    page: 'https://unsplash.com/photos/llEjCH71E9o',
  },
  repair: {
    id: 'photo-1782274951165-b88199bde548',
    alt: 'Gray shingle roof with a patch of missing shingles',
    photographer: 'blue soda',
    page: 'https://unsplash.com/photos/jUiyOUQMHeE',
  },
  gutters: {
    id: 'photo-1634853982486-c06f0e17940f',
    alt: 'Rain dripping off the edge of a wet shingle roof',
    photographer: 'Luke Southern',
    page: 'https://unsplash.com/photos/ZzZouwiQWV0',
  },
  siding: {
    id: 'photo-1773101883541-42a4881daef3',
    alt: 'Lap siding on the side of a house',
    photographer: 'Franco Debartolo',
    page: 'https://unsplash.com/photos/3PScsGdblRw',
  },
  inspection: {
    id: 'photo-1632759145351-1d592919f522',
    alt: 'Roofer in a red shirt standing on a house roof next to a ladder',
    photographer: 'Zohair Mirza',
    page: 'https://unsplash.com/photos/-1l0iZaM8ms',
  },
  house: {
    id: 'photo-1691039923170-c275e01cce89',
    alt: 'Blue house with a dark shingle roof',
    photographer: 'Greg Rosenke',
    page: 'https://unsplash.com/photos/Vl8HcVhuUt0',
  },
  aerial: {
    id: 'photo-1654848232800-20fbc9cdbc10',
    alt: 'Aerial view of house roofs in a Midwest neighborhood',
    photographer: 'K C',
    page: 'https://unsplash.com/photos/63QXU8HtxTQ',
  },
  shingles: {
    id: 'photo-1791955455643-26813110f80e',
    alt: 'Close view of rows of asphalt shingles',
    photographer: 'Martin Leitgeb',
    page: 'https://unsplash.com/photos/5IilXEIe9hU',
  },
} satisfies Record<string, StockPhoto>;

export type StockKey = keyof typeof STOCK;

const WIDTHS = [640, 960, 1280, 1920];

function url(id: string, width: number, ratio: number, format: string, crop = 'center'): string {
  const height = Math.round(width / ratio);
  return `https://images.unsplash.com/${id}?w=${width}&h=${height}&fit=crop&crop=${crop}&q=68&fm=${format}`;
}

/** Responsive photo. ratio is width over height. */
export function stockPhoto(key: StockKey, ratio = 16 / 9, altOverride?: string): PhotoSlot {
  const photo: StockPhoto = STOCK[key];
  const set = (format: string) =>
    WIDTHS.map((width) => `${url(photo.id, width, ratio, format, photo.crop)} ${width}w`).join(', ');
  return {
    alt: altOverride ?? photo.alt,
    width: 1280,
    height: Math.round(1280 / ratio),
    src: url(photo.id, 1280, ratio, 'jpg', photo.crop),
    webpSrcset: set('webp'),
    avifSrcset: set('avif'),
    note: `Unsplash photo by ${photo.photographer}. Not this company's crew.`,
  };
}

export function pagePhoto(key: StockKey, alt?: string): PhotoSlot {
  return stockPhoto(key, 16 / 9, alt);
}

export const photoCredits = (Object.values(STOCK) as StockPhoto[]).map((photo) => ({
  photographer: photo.photographer,
  page: photo.page,
  alt: photo.alt,
}));
