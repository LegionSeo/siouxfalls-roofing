import type { PhotoSlot } from '../config/site';

/** Credited Wikimedia Commons photo for one town. */
export interface TownPlace {
  slug: string;
  photo: PhotoSlot;
  caption: string;
  author: string;
  license: string;
  licenseUrl: string;
  sourceUrl: string;
}

function placePhoto(base: string, alt: string, height: number, sourceUrl: string): PhotoSlot {
  return {
    alt,
    width: 1600,
    height,
    src: `/images/${base}-1600.webp`,
    webpSrcset: `/images/${base}-800.webp 800w, /images/${base}-1600.webp 1600w`,
    avifSrcset: `/images/${base}-800.avif 800w, /images/${base}-1600.avif 1600w`,
    note: `Resized from ${sourceUrl}`,
  };
}

const SA4 = { license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0' };
const SA3 = { license: 'CC BY-SA 3.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0' };

function commons(file: string) {
  return `https://commons.wikimedia.org/wiki/File:${file}`;
}

export const townPlaces: TownPlace[] = [
  {
    slug: 'brandon',
    photo: placePhoto('place-brandon', 'Downtown Brandon, SD', 900, commons('Downtown_Brandon.jpg')),
    caption: 'Downtown Brandon, looking north on Main Street.',
    author: 'TCN7JM',
    ...SA4,
    sourceUrl: commons('Downtown_Brandon.jpg'),
  },
  {
    slug: 'harrisburg',
    photo: placePhoto(
      'place-harrisburg',
      'A DAIR locomotive in Harrisburg, SD',
      1067,
      commons('DAIR_3024,_Harrisburg_-_Flickr_-_chief_huddleston.jpg'),
    ),
    caption: 'A DAIR locomotive in Harrisburg.',
    author: 'Jerry Huddleston',
    license: 'CC BY 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/4.0',
    sourceUrl: commons('DAIR_3024,_Harrisburg_-_Flickr_-_chief_huddleston.jpg'),
  },
  {
    slug: 'tea',
    photo: placePhoto('place-tea', 'Entrance to Tea Area High School in Tea, SD', 1205, commons('Tea_Area_High_School.jpg')),
    caption: 'The entrance to Tea Area High School.',
    author: 'WavingDolphin',
    license: 'CC0 1.0',
    licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
    sourceUrl: commons('Tea_Area_High_School.jpg'),
  },
  {
    slug: 'hartford',
    photo: placePhoto('place-hartford', 'Downtown Hartford, SD', 756, commons('Hartford,_South_Dakota_5.jpg')),
    caption: 'Downtown Hartford.',
    author: 'Jon Platek',
    ...SA3,
    sourceUrl: commons('Hartford,_South_Dakota_5.jpg'),
  },
  {
    slug: 'dell-rapids',
    photo: placePhoto('place-dell-rapids', 'Downtown Dell Rapids, SD', 1067, commons('Downtown_Dell_Rapids,_South_Dakota.JPG')),
    caption: 'Downtown Dell Rapids in winter.',
    author: 'Michaelzamboni',
    ...SA4,
    sourceUrl: commons('Downtown_Dell_Rapids,_South_Dakota.JPG'),
  },
  {
    slug: 'canton',
    photo: placePhoto('place-canton', 'Downtown Canton, SD', 785, commons('Canton,_South_Dakota_5.jpg')),
    caption: 'Downtown Canton.',
    author: 'AlexiusHoratius',
    ...SA3,
    sourceUrl: commons('Canton,_South_Dakota_5.jpg'),
  },
  {
    slug: 'lennox',
    photo: placePhoto('place-lennox', 'Downtown Lennox, SD', 710, commons('Lennox,_South_Dakota_5.jpg')),
    caption: 'Downtown Lennox.',
    author: 'Jon Platek',
    ...SA3,
    sourceUrl: commons('Lennox,_South_Dakota_5.jpg'),
  },
];

export function townPlaceBySlug(slug: string | undefined) {
  return townPlaces.find((place) => place.slug === slug);
}
