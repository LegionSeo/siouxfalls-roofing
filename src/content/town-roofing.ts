import type { FaqItem } from './home';

export interface TownFaq {
  q: string;
  a: string;
}

/** Text fields may hold [label](/internal/path) links and the {phone} token. */
export interface TownBlock {
  slug: string;
  name: string;
  answer: string;
  workIntro: string;
  jobs: string[];
  warningLead: string;
  warnings: string[];
  warningNote: string;
  housing: string[];
  housingSource: string;
  housingSourceHref: string;
  tellUsLead: string;
  tellUs: string[];
  faqs: TownFaq[];
  serving: string;
  mapNote: string;
}

function census(geo: string) {
  return `https://censusreporter.org/data/table/?table=B25034&geo_ids=${geo}&primary_geo_id=${geo}`;
}

const replacement = '/services/roof-replacement';
const repair = '/services/roof-repair';
const storm = '/services/storm-hail-damage';
const insurance = '/services/insurance-claim-help';
const gutters = '/services/gutters';
const siding = '/services/siding';
const inspections = '/services/roof-inspections';
const area = '/service-area';

export const townBlocks: TownBlock[] = [
  {
    slug: 'brandon',
    name: 'Brandon',
    answer:
      'Need a roofer in Brandon, SD? We help with leaks, storm damage, and new roofs on homes all over town. Call {phone} and tell us your street and what you are seeing. We are glad to talk it through.',
    workIntro: 'Brandon has plenty of newer subdivisions and an older core near Main Street. The roof job often depends on which one you live in.',
    jobs: [
      `[Hail and wind checks](${storm}) after a storm rolls through the Big Sioux valley.`,
      `[A first full replacement](${replacement}) on homes built during the growth of the last few decades.`,
      `[Flashing and vent repairs](${repair}) on roofs that are otherwise holding up well.`,
      `[Gutter repairs](${gutters}) and downspouts that keep spring melt away from finished basements.`,
    ],
    warningLead: 'Walk around your house after the next storm. These are the things to look for in Brandon.',
    warnings: [
      'Dents on gutters, vents, or the top of your air conditioner.',
      'Shingles in the yard, especially on the side facing the wind.',
      'Dark streaks or fresh stains on a ceiling near an outside wall.',
      'Lots of shingle grit at the bottom of your downspouts.',
      'Thick ice along your eaves in the middle of winter.',
    ],
    warningNote: 'Please look from the ground. If anything worries you, take a photo and give us a call.',
    housing: [
      'Brandon sits five miles east of Sioux Falls in Minnehaha County, with the Big Sioux River and Split Rock Creek running through it. The census counted 3,238 housing units in 2010 and 4,038 in 2020.',
      'Survey estimates put about 3,291 homes in Brandon as built in 1980 or later, and about 898 as built in 1979 or earlier. So many Brandon roofs are either on their first replacement or coming up on it. Homes near Main Street may have seen several roofs already, and it is worth asking what is under the top layer.',
    ],
    housingSource: 'Source: U.S. Census Bureau, American Community Survey 2024 5-year estimates, table B25034, Brandon city, South Dakota. These figures are estimates.',
    housingSourceHref: census('16000US4606840'),
    tellUsLead: 'A few details help us understand your Brandon roof before anyone heads out.',
    tellUs: [
      'Your street, and whether you are in a newer addition or near Main Street.',
      'About how old the roof is, if you know.',
      'Where you see the problem, inside or outside.',
      'When the last big storm hit your place.',
      'Whether you have talked with your insurance company yet.',
    ],
    faqs: [
      { q: 'Do you work in all of Brandon?', a: 'Yes, we take roofing calls from across Brandon, in the newer subdivisions and along the older streets. Call {phone} and tell us your street.' },
      { q: 'How do I know if my Brandon home has hail damage?', a: `Start with what you can see from the ground, like dents on gutters and vents. Shingle damage takes a closer look. Our [storm and hail damage](${storm}) page explains what we check.` },
      { q: 'My Brandon home is about 20 years old. Do I need a new roof?', a: `Not necessarily. Age is only one clue. Weather, airflow, and the quality of the shingles matter too. A [roof inspection](${inspections}) will tell you where you stand.` },
      { q: 'Do I need a permit for a new roof in Brandon?', a: 'It is best to check with the City of Brandon before work starts, since rules can change. Tell us you are in Brandon and we will talk through what applies to your job.' },
    ],
    serving: `Brandon is east of Sioux Falls, with Interstate 90 along the north side of town and South Dakota Highway 11 running through it. We also serve [Harrisburg](/locations/harrisburg) and [Dell Rapids](/locations/dell-rapids), and you can see every town on our [service area](${area}) page.`,
    mapNote: 'This pin marks the town, not your house. When you call, give us the address where you need us.',
  },
  {
    slug: 'harrisburg',
    name: 'Harrisburg',
    answer:
      'Looking for a roofer in Harrisburg, SD? Most of the homes here are fairly new, and hail does not care how old your roof is. Call {phone} and tell us your addition and what you have noticed. We would be happy to help.',
    workIntro: 'Harrisburg has grown fast since 2000. A smaller group of older homes still sits near the original town and the railroad tracks.',
    jobs: [
      `[Hail inspections](${storm}) on newer homes, where damage is easy to miss from the street.`,
      `[Insurance claim questions](${insurance}) from homeowners going through the process for the first time.`,
      `[Shingle and pipe boot repairs](${repair}) on roofs that are ten to twenty years in.`,
      `[Roof replacement](${replacement}) on the older houses near Railroad Avenue.`,
    ],
    warningLead: 'Newer roofs can still have problems. Here is what to watch for in Harrisburg.',
    warnings: [
      'Shingles that have lifted or folded back after strong south winds.',
      'Dented downspouts or spatter marks on your fence or siding.',
      'Cracked rubber around your plumbing vents.',
      'A damp spot in the attic near a bathroom fan.',
      'Valleys collecting shingle grit or debris.',
    ],
    warningNote: 'Newer roofs have problems too. If something looks off, it is worth a call.',
    housing: [
      'Harrisburg is in Lincoln County, just south of Sioux Falls. The town grew up with the railroad, and the old State Bank building still stands on Railroad Avenue. The census counted 1,507 housing units in 2010 and 2,399 in 2020.',
      'Survey estimates suggest around 2,520 Harrisburg homes were built in 2000 or later, while about 321 were built in 1979 or earlier. That means a lot of houses here are getting close to their first roof replacement around the same time, and a single hail storm can affect a whole neighborhood at once.',
    ],
    housingSource: 'Source: U.S. Census Bureau, American Community Survey 2024 5-year estimates, table B25034, Harrisburg city, South Dakota. These figures are estimates.',
    housingSourceHref: census('16000US4627260'),
    tellUsLead: 'These details make your first call about a Harrisburg roof easier.',
    tellUs: [
      'Your addition or the nearest cross street.',
      'The year your home was built, if you know it.',
      'What you noticed, and when you first saw it.',
      'Whether neighbors have had roofs looked at or replaced.',
      'Any photos of the damage you can text or email later.',
    ],
    faqs: [
      { q: 'My Harrisburg home is fairly new. Can it still have hail damage?', a: `Yes. A new roof can be hit just as hard as an old one. A careful look will tell you for sure. See our [storm and hail damage](${storm}) page for what we check.` },
      { q: 'Lots of my neighbors are getting new roofs. Should I?', a: 'Not just because they are. Roofs on the same street can take different hits, and yours may be fine. It is reasonable to get it looked at so you know.' },
      { q: 'Will insurance cover my Harrisburg roof?', a: `We cannot say. Your insurer decides based on your policy and the damage. Our [insurance claim help](${insurance}) page explains how the process usually works.` },
      { q: 'Do you work on the older homes near the tracks?', a: 'Yes. Older houses can have extra layers of shingles or board decking, so tell us if your home is one of those when you call {phone}.' },
    ],
    serving: `Harrisburg is south of Sioux Falls, with Interstate 29 at 273rd Street and South Dakota Highway 115 nearby. We also serve [Tea](/locations/tea) and [Canton](/locations/canton), and our [service area](${area}) page lists the rest.`,
    mapNote: 'The marker is Harrisburg, not your address. Tell us the street when you call.',
  },
  {
    slug: 'tea',
    name: 'Tea',
    answer:
      'Need roofing help in Tea, SD? A lot of the homes here went up during the same years, so many roofs are aging together. Call {phone} and tell us your street and what is going on with your roof.',
    workIntro: 'Tea added many houses from the 1990s on. Older streets make up a smaller share, but those roofs have their own needs.',
    jobs: [
      `[First time roof replacements](${replacement}) on homes built in the 1990s and early 2000s.`,
      `[Storm and hail checks](${storm}) across neighborhoods with little wind protection yet.`,
      `[Gutter repairs](${gutters}) where young landscaping and new grading send water toward the house.`,
      `[A roof inspection](${inspections}) before you buy, or when your roof is getting up in years.`,
    ],
    warningLead: 'Young trees mean less wind protection. Here is what to watch for around Tea.',
    warnings: [
      'Missing shingles along the ridge or at the edges of the roof.',
      'Shingles that look wavy or have started to curl.',
      'Gutters overflowing at the corners in a heavy rain.',
      'Bath fan ducts that end in the attic instead of outside.',
      'Stains around chimneys and where a roof meets a wall.',
    ],
    warningNote: 'Stay on the ground. A phone camera and a good zoom can show you plenty.',
    housing: [
      'Tea is a Lincoln County suburb of Sioux Falls, laid out in 1894. The census counted 600 housing units in 2000, 1,354 in 2010, and 1,970 in 2020. That is a lot of new homes in a short stretch.',
      'Survey estimates put about 1,992 Tea homes as built in 1980 or later, including about 348 from 2020 or later, and about 344 as built in 1979 or earlier. A roof put on during the early growth years may be ready for a closer look now, even if it has never given you trouble.',
    ],
    housingSource: 'Source: U.S. Census Bureau, American Community Survey 2024 5-year estimates, table B25034, Tea city, South Dakota. These figures are estimates.',
    housingSourceHref: census('16000US4663100'),
    tellUsLead: 'Before you call about your Tea roof, it helps to have these handy.',
    tellUs: [
      'Your street, or the park or school you are close to.',
      'The year your home was built, or how long you have owned it.',
      'Whether the roof has ever been replaced.',
      'Where you see the trouble, and whether it changes when it rains.',
      'Whether your home is one story or two.',
    ],
    faqs: [
      { q: 'How do I know if my roof in Tea is near the end of its life?', a: `Curling, bald spots, and grit in the gutters are the usual clues. If your roof is 15 years old or more, a [roof inspection](${inspections}) can help you plan.` },
      { q: 'Why did my shingles blow off when my house is not that old?', a: 'Strong wind can break the seal between shingles, and open neighborhoods get more of it. Those spots can often be repaired if the rest of the roof is sound.' },
      { q: 'Do you help with gutters in Tea too?', a: `Yes. New gutters and repairs are part of what we do. See our [gutters](${gutters}) page, or call {phone}.` },
      { q: 'Do I need a permit in Tea?', a: 'Check with the City of Tea before work begins, since requirements can change. Tell us you are in Tea and we will talk through what applies.' },
    ],
    serving: `Tea sits southwest of Sioux Falls, with Interstate 29 along the east side and 271st Street into town. We also serve [Harrisburg](/locations/harrisburg) and [Lennox](/locations/lennox), and the full list is on our [service area](${area}) page.`,
    mapNote: 'You are seeing Tea on the map. The address we need is the one you give us by phone.',
  },
  {
    slug: 'hartford',
    name: 'Hartford',
    answer:
      'Looking for a roofer in Hartford, SD? We help with homes in town, newer additions, and acreages out where the wind has room to run. Call {phone} and tell us where you are and what you see.',
    workIntro: 'Hartford is a real mix. Older homes, newer additions, and country places all sit close together, and they wear out in different ways.',
    jobs: [
      `[Wind damage repairs](${repair}) on homes with open fields to the west.`,
      `[Roof replacement](${replacement}) on older homes in town that have reached the end of their shingles.`,
      `[Siding repairs](${siding}) on the side of the house that takes the worst of the weather.`,
      `[Hail checks](${storm}) on your house, and notes on anything else you want us to look at.`,
    ],
    warningLead: 'Open country means more wind. Here is what to look for around Hartford.',
    warnings: [
      'Shingles lifting or missing on the west and northwest slopes.',
      'Loose ridge caps or vents that rattle in the wind.',
      'Siding that has come loose or cracked on the windy side.',
      'Snow drifting into the attic through old vents.',
      'Water stains that show up after a driving rain but not a gentle one.',
    ],
    warningNote: 'If it only leaks when the wind blows, tell us that. It is a helpful clue.',
    housing: [
      'Hartford began as Oaksville in 1878 and took its current name in 1881. It sits in Minnehaha County about 10 miles west of Sioux Falls, and the census counted 1,294 housing units in 2020.',
      'Survey estimates put about 922 Hartford homes as built in 1980 or later and about 477 as built in 1979 or earlier. That is a true split, so we ask about your home before we assume anything. An older house may have board decking and more than one layer of shingles, while a newer one may just need a close look after a storm.',
    ],
    housingSource: 'Source: U.S. Census Bureau, American Community Survey 2024 5-year estimates, table B25034, Hartford city, South Dakota. These figures are estimates.',
    housingSourceHref: census('16000US4627540'),
    tellUsLead: 'These details help us understand your Hartford property.',
    tellUs: [
      'Whether you are in town, in a newer addition, or on an acreage.',
      'Which side of the house took the damage.',
      'About how old the roof is, and how many layers it may have.',
      'Whether the leak happens in every rain or only in strong wind.',
      'How to get to your place, if it is out of town.',
    ],
    faqs: [
      { q: 'Do you work on acreages near Hartford?', a: 'Yes, tell us where you are when you call {phone}. Give us directions if your place is hard to find.' },
      { q: 'Why does my roof only leak when it is windy?', a: 'Wind can push rain under shingles and flashing. It often points to a problem at a vent, a wall, or the edge of the roof.' },
      { q: 'Can you look at my siding too?', a: `Yes. If storm damage hit your roof, it may have hit your siding too. See our [siding](${siding}) page.` },
      { q: 'Should I repair or replace an older Hartford roof?', a: `It depends on how worn the shingles are and how many layers are up there. Our [roof repair](${repair}) page explains how we think about it.` },
    ],
    serving: `Hartford is west of Sioux Falls, with South Dakota Highway 38 running out to town and meeting Interstate 90. We also serve [Dell Rapids](/locations/dell-rapids) and [Tea](/locations/tea), and our [service area](${area}) page has every town.`,
    mapNote: 'The pin is Hartford. We still need your street or your acreage address.',
  },
  {
    slug: 'dell-rapids',
    name: 'Dell Rapids',
    answer:
      'Need a roofer in Dell Rapids, SD? Many homes here have been around a long time, and older roofs need a careful hand. Call {phone} and tell us about your house and what is going on.',
    workIntro: 'Dell Rapids has a lot of homes from before 1940 and a good number built after 1980. The job really does follow the house.',
    jobs: [
      `[Full tear offs](${replacement}) on older homes that may have several layers on them.`,
      `[Chimney and flashing repairs](${repair}) where old masonry meets the roof.`,
      `[Siding work](${siding}) on older homes where water has found its way behind a wall.`,
      `[Roof inspections](${inspections}) for buyers looking at one of the older homes in town.`,
    ],
    warningLead: 'Older roofs tend to tell you when they need help. Look for these in Dell Rapids.',
    warnings: [
      'Sagging between the rafters that you can see from the street.',
      'Loose or cracked flashing around an old chimney.',
      'Daylight through the attic boards.',
      'Ice dams along the eaves of a home with little attic insulation.',
      'Moss or dark growth on the shady side of the roof.',
    ],
    warningNote: 'Older homes can have surprises under the shingles. We will show you what we find.',
    housing: [
      'Dell Rapids sits on the Big Sioux River in northern Minnehaha County. After a fire burned most of the main street, the town rebuilt in Sioux quartzite, the pink stone quarried here. Those blocks still give downtown its look.',
      'Survey estimates count about 1,606 homes in town. About 832 were built in 1980 or later, and about 774 were built in 1979 or earlier. The largest single group, about 415 homes, dates from 1939 or earlier. On homes that old, we expect to find board decking, older flashing, and sometimes more than one roof stacked up.',
    ],
    housingSource: 'Source: U.S. Census Bureau, American Community Survey 2024 5-year estimates, table B25034, Dell Rapids city, South Dakota. These figures are estimates.',
    housingSourceHref: census('16000US4615980'),
    tellUsLead: 'For an older Dell Rapids home, these details are extra helpful.',
    tellUs: [
      'About when your home was built.',
      'Whether you have a brick or stone chimney.',
      'Whether you know how many layers are on the roof.',
      'What your attic looks like, and whether you can get into it.',
      'Your street, and whether parking near the house is easy.',
    ],
    faqs: [
      { q: 'Can you work on older homes in Dell Rapids?', a: 'Yes. Older homes take more care, and we will talk with you about board decking, layers, and chimneys. Call {phone} and tell us about your house.' },
      { q: 'Why does my old chimney leak?', a: `It is often the flashing where the chimney meets the roof, or worn mortar up top. Our [roof repair](${repair}) page has more on this.` },
      { q: 'How many layers can a roof have?', a: 'Too many layers add weight and hide problems. We usually suggest taking them all off so we can see the wood underneath.' },
      { q: 'Do you work on buildings downtown?', a: 'Tell us what you have when you call. Flat roofs on older downtown buildings are a different kind of job, and we will be upfront about whether it is a fit.' },
    ],
    serving: `Dell Rapids is north of Sioux Falls along Interstate 29, with South Dakota Highway 115 into town. We also serve [Hartford](/locations/hartford) and [Brandon](/locations/brandon), and our [service area](${area}) page has the full list.`,
    mapNote: 'This view is Dell Rapids, not your house. Tell us the address when you call.',
  },
  {
    slug: 'canton',
    name: 'Canton',
    answer:
      'Looking for a roofer in Canton, SD? A lot of homes here are older, so we pay close attention to what is under the shingles. Call {phone} and tell us your address and what you need.',
    workIntro: 'Most Canton homes were built before 1980, and many before 1940. Newer houses are the smaller share here.',
    jobs: [
      `[Roof replacement](${replacement}) on older homes that have had several roofs over the years.`,
      `[Leak repairs](${repair}) around chimneys, dormers, and porch roofs.`,
      `[Gutters and downspouts](${gutters}) on homes along the river and low spots around town.`,
      `[Storm checks](${storm}) when hail or wind comes up the Big Sioux.`,
    ],
    warningLead: 'Older homes and river weather can be tough on a roof. Here is what to look for in Canton.',
    warnings: [
      'Porch roofs that are pulling away or leaking where they meet the house.',
      'Dormers with stained trim or soft spots near the corners.',
      'Thick ice dams in homes with older attic insulation.',
      'Roof lines that dip or sag in the middle.',
      'Gutters that stay full of water long after a rain.',
    ],
    warningNote: 'Soft spots are a good reason to stay off the roof. Let us take a look for you.',
    housing: [
      'Canton is the Lincoln County seat, 18 miles south of Sioux Falls on the Big Sioux River across from Beloit, Iowa. Downtown keeps buildings from the late 1800s, and the Lincoln County Courthouse dates to 1889.',
      'Survey estimates count about 1,540 homes in Canton. About 1,105 were built in 1979 or earlier, including about 653 from 1939 or earlier. About 435 were built in 1980 or later. So a Canton roof job often starts with finding out what past roofers left behind, like extra layers, old flashing, or plank decking.',
    ],
    housingSource: 'Source: U.S. Census Bureau, American Community Survey 2024 5-year estimates, table B25034, Canton city, South Dakota. These figures are estimates.',
    housingSourceHref: census('16000US4609500'),
    tellUsLead: 'A few details about your Canton home go a long way.',
    tellUs: [
      'The address, and whether it is in town or out on an acreage.',
      'About when the home was built.',
      'Whether there is a porch roof or dormers involved.',
      'When the roof was last replaced, if you know.',
      'What you see inside, such as stains, drips, or damp insulation.',
    ],
    faqs: [
      { q: 'Do you work on older homes in Canton?', a: 'Yes, and we will talk through the things older homes tend to have, like plank decking and extra layers. Call {phone} and tell us about yours.' },
      { q: 'My porch roof leaks. Is that a big job?', a: `It can be small or large depending on what is underneath. It is often at the spot where the porch meets the house. See our [roof repair](${repair}) page.` },
      { q: 'Do I need to replace the wood under my shingles?', a: 'Only where it is damaged. We will show you any soft or rotted boards we find so you can see them yourself.' },
      { q: 'Do I need a permit for a new roof in Canton?', a: 'Check with the City of Canton before work starts, since rules can change. Outside city limits, the county may be the right place to ask.' },
    ],
    serving: `Canton is south of Sioux Falls, with Interstate 29 to US Highway 18 as the usual way to reach it. We also serve [Harrisburg](/locations/harrisburg) and [Lennox](/locations/lennox), and our [service area](${area}) page lists every town.`,
    mapNote: 'The pin lands on Canton. Tell us your house or acreage address.',
  },
  {
    slug: 'lennox',
    name: 'Lennox',
    answer:
      'Need a roofer in Lennox, SD? We help with older homes in town, newer streets, and buildings on the edge of town. Call {phone} and tell us your street and what you are seeing.',
    workIntro: 'More than half of the homes in Lennox were built before 1980, with one group from before the war and another from the 1970s.',
    jobs: [
      `[Roof replacement](${replacement}) on homes from the 1970s that are due for another round.`,
      `[Hail and wind checks](${storm}) when storms cross the open land around town.`,
      `[Repairs](${repair}) on leaks, vents, and older flashing.`,
      `[Insurance claim questions](${insurance}) after a big storm, so you know what the steps are.`,
    ],
    warningLead: 'A town this size has homes of every age. These are worth watching for in Lennox.',
    warnings: [
      'Shingles that are brittle, cracked, or missing corners.',
      'Stains around bath fans and plumbing vents.',
      'Dented metal vents and gutters after hail.',
      'Older metal flashing with rust along the seams.',
      'Water marks on the ceiling near a chimney.',
    ],
    warningNote: 'If you are not sure whether it is a problem, call and describe it to us.',
    housing: [
      'Lennox is in Lincoln County, about 20 miles southwest of Sioux Falls. Settlers arrived in 1879, and the town was named for Ben Lennox of the Milwaukee Railroad. The census counted 961 housing units in 2020.',
      'Survey estimates count about 1,032 homes, with about 579 built in 1979 or earlier and about 453 built in 1980 or later. Within the older group, about 222 date from 1939 or earlier and about 234 from the 1970s. A home from the 1970s and one from the 1930s can need very different roof work, even on the same block.',
    ],
    housingSource: 'Source: U.S. Census Bureau, American Community Survey 2024 5-year estimates, table B25034, Lennox city, South Dakota. These figures are estimates.',
    housingSourceHref: census('16000US4636380'),
    tellUsLead: 'Here is what helps us most when you call about a Lennox roof.',
    tellUs: [
      'Your street or rural address.',
      'Which building needs work, if you have more than one.',
      'About when the home was built and when it was last roofed.',
      'What the weather was doing when you noticed the problem.',
      'Whether you have reported the damage to your insurer.',
    ],
    faqs: [
      { q: 'Do you come out to Lennox?', a: 'Yes, Lennox is one of the towns we serve. Call {phone} and tell us your street or rural address.' },
      { q: 'Can you look at a shed or garage roof too?', a: 'Tell us what you have when you call. It is often easiest to look at everything on the same trip.' },
      { q: 'My home was built in the 1970s. What should I look for?', a: `Check for brittle shingles and old flashing, and find out how many layers are up there. A [roof inspection](${inspections}) can give you the full picture.` },
      { q: 'Do I need to file a claim after a hail storm?', a: `That is your choice. It can help to know what the roof looks like first. Our [insurance claim help](${insurance}) page explains the usual steps.` },
    ],
    serving: `Lennox is southwest of Sioux Falls, and Interstate 29 to South Dakota Highway 44 is the usual way in. We also serve [Tea](/locations/tea) and [Canton](/locations/canton), and our [service area](${area}) page has the full list.`,
    mapNote: 'Lennox is the pin. Your call still needs your street or rural address.',
  },
];

export function townBlockBySlug(slug: string | undefined) {
  return townBlocks.find((block) => block.slug === slug);
}

export function fillTokens(text: string, phone: string) {
  return text.replaceAll('{phone}', phone);
}

function plainLinks(text: string) {
  return text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
}

export function faqItemsFor(block: TownBlock, phone: string): FaqItem[] {
  return block.faqs.map((item) => ({
    question: item.q,
    paragraphs: [plainLinks(fillTokens(item.a, phone))],
  }));
}
