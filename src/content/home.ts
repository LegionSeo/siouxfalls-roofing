import { joinNames, townPages } from '../config/catalog';
import { SITE } from '../config/site';

export interface FaqItem {
  question: string;
  paragraphs: string[];
}

/** Visible FAQ copy. Schema uses the same strings. */
export const homeFaqs: FaqItem[] = [
  {
    question: 'How do I find a good roofer in Sioux Falls?',
    paragraphs: [
      'Take your time and ask plenty of questions. A good roofer will explain the problem in plain words, put the scope of work in writing, and give you room to think it over.',
      'Be careful with anyone who pressures you to sign on the spot, or who offers to cover your insurance deductible.',
    ],
  },
  {
    question: 'What does a roof cost in Sioux Falls, and what affects the price?',
    paragraphs: [
      'There is no single price. It changes with the size and steepness of your roof, how many layers come off, the shape of the deck underneath, and the materials you choose.',
      `Call ${SITE.phoneDisplay} and we can talk through your project.`,
    ],
  },
  {
    question: 'How do I know if my roof has hail damage?',
    paragraphs: [
      'Start on the ground. Look for dents on gutters, vents, and your air conditioner, and for shingle grit at the bottom of your downspouts.',
      'Shingle damage is hard to see from the yard, so a close look is the only way to be sure. Please stay off the roof yourself.',
    ],
  },
  {
    question: 'Can you help with my insurance claim?',
    paragraphs: [
      'We can look at your roof, give you photos and notes, and explain how the process usually works. Your insurance company decides what is covered.',
      'We cannot promise an outcome, and we do not act as your adjuster.',
    ],
  },
  {
    question: 'What should I do if my roof is leaking right now?',
    paragraphs: [
      'Catch the water with a bucket and move your belongings. If a ceiling is bulging, keep people out from under it, and stay off the roof.',
      `Take photos, then call ${SITE.phoneDisplay}. We cannot promise when someone will be able to get there, but we will talk through your next step.`,
    ],
  },
  {
    question: 'Should I repair my roof or replace it?',
    paragraphs: [
      'If the damage is in one area and the rest of the roof has life left, a repair often makes sense. If the shingles are worn everywhere, or you keep chasing leaks, a new roof may be the better use of your money.',
    ],
  },
  {
    question: 'Do I need a permit for a new roof in Sioux Falls?',
    paragraphs: [
      'Many cities ask for one, and rules can change. It is a good idea to confirm with the city before work starts. Tell us your town and we will talk through what applies to your job.',
    ],
  },
  {
    question: 'Which towns around Sioux Falls do you serve?',
    paragraphs: [
      `We serve ${joinNames(townPages.map((town) => town.name))}, South Dakota. We also take calls from ${joinNames(SITE.listOnlyTowns)}.`,
    ],
  },
];

export function faqAnswerText(item: FaqItem): string {
  return item.paragraphs.join(' ');
}

export function homepageFaqs(): FaqItem[] {
  return homeFaqs;
}
