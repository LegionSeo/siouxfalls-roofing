export interface ServicePage {
  slug: string;
  /** Visible H1. */
  title: string;
  /** Full document title. Must include the city. */
  documentTitle: string;
  /** Schema serviceType. Must differ from the catalog name. */
  serviceType: string;
  /** Finishes the sentence "Need help with ...?" in the bottom call to action. */
  ctaName: string;
  sub: string;
  description: string;
  photo: string;
  alt: string;
  answer: string;
  includedHeading: string;
  includedLead: string;
  included: string[];
  signsHeading: string;
  signsLead: string;
  signs: string[];
  /** Side by side list. Omitted on pages that do not need one. */
  compare?: {
    heading: string;
    lead: string;
    rows: { title: string; text: string }[];
  };
  costHeading: string;
  costLead: string;
  cost: string[];
  urgentHeading: string;
  urgent: string;
  /** Sentences are split evenly into three visit steps. */
  visit: string;
  faqs: { q: string; a: string }[];
  related: string[];
}

const replacement = '/services/roof-replacement';
const repair = '/services/roof-repair';
const storm = '/services/storm-hail-damage';
const insurance = '/services/insurance-claim-help';
const gutters = '/services/gutters';
const siding = '/services/siding';
const inspections = '/services/roof-inspections';

export const servicePages: ServicePage[] = [
  {
    slug: 'roof-replacement',
    title: 'Roof Replacement in Sioux Falls, SD',
    documentTitle: 'Roof Replacement in Sioux Falls, SD | New Roof Help',
    serviceType: 'Residential reroofing and full tear off',
    ctaName: 'a new roof',
    sub: 'When patching stops making sense, we help you plan a new roof from the deck up.',
    description:
      'Thinking about a new roof in Sioux Falls? See what a roof replacement includes, the signs it is time, and what changes the price. Call {phone}.',
    photo: 'service-roof-replacement',
    alt: 'Illustration of a roof half covered in new shingles with a ladder and shingle bundles',
    answer:
      'A roof replacement in Sioux Falls means taking the old roof off, checking the wood deck underneath, and building a new roof system on top. It makes sense when the shingles are worn out or the damage is too spread out to patch. Call {phone} and tell us about your house. We will talk it through with you.',
    includedHeading: 'What a roof replacement includes',
    includedLead: 'A roof is more than shingles. Every layer has a job, and we go over each one with you.',
    included: [
      'Tearing off the old shingles so we can see what is underneath.',
      'Checking the roof deck. Soft or rotted boards get pointed out to you before they get covered up.',
      'Underlayment, plus ice and water barrier along the eaves and in the valleys where ice likes to back up.',
      'New flashing around chimneys, walls, and pipes where the old metal is worn.',
      'Vents and airflow. A roof that cannot breathe ages faster and can lead to ice dams in winter.',
      'Cleanup when we finish, including a sweep for nails in your yard and driveway.',
    ],
    signsHeading: 'Signs it may be time for a new roof',
    signsLead: 'One of these alone does not always mean replacement. Several together usually mean it is worth a closer look.',
    signs: [
      'Shingles are curling, cracking, or going bald in patches.',
      'You find a lot of shingle grit in your gutters or at the bottom of your downspouts.',
      'You have patched leaks in more than one spot over the last few years.',
      'The roof line looks wavy or sags between the rafters.',
      'Hail or wind damaged shingles across many parts of the roof, not just one area.',
    ],
    costHeading: 'What affects the price of a new roof',
    costLead: 'Every roof is different, so we do not post one price here. These are the things that change it.',
    cost: [
      'The size of your roof and how steep it is. A steep roof takes more time and more safety setup.',
      'How many layers need to come off, and whether any of the deck needs to be replaced.',
      'The material you choose. Shingle grade, color, and style all play a part.',
      'How complicated the roof is. Valleys, dormers, skylights, and chimneys all add detail work.',
    ],
    urgentHeading: 'If your roof is leaking right now',
    urgent:
      'Move what you can out of the way and catch the water with a bucket. Please stay off the roof, especially when it is wet or icy. Take photos of what you see, then call {phone}. We cannot promise when someone will be able to get there, but we will tell you honestly what we can do.',
    visit:
      'Call us and tell us how old your roof is, if you know. Mention any leaks you have had. We look at the roof, the attic, and the flashing. Then we talk through what we found and what your options are. If you decide to go ahead, we go over materials and scheduling with you. When the job is done, we walk the property with you.',
    faqs: [
      {
        q: 'How long does a roof last in Sioux Falls?',
        a: 'It depends on the material, the attic airflow, and the weather your roof has seen. Many asphalt shingle roofs last somewhere around 15 to 30 years. Hail can shorten that by a lot. If you are not sure where yours stands, a [roof inspection](/services/roof-inspections) is a good first step.',
      },
      {
        q: 'Can you put new shingles over my old ones?',
        a: 'Sometimes it is allowed, but we usually suggest a full tear off. It lets us see the deck and fix problems before they get covered. An extra layer also adds weight. We will tell you what makes sense for your house.',
      },
      {
        q: 'How much does a new roof cost in Sioux Falls?',
        a: 'We do not list a set price because roofs vary so much. Size, steepness, layers, and materials all change the number. Call {phone} and we will talk through your project.',
      },
      {
        q: 'Do I need a permit to replace my roof?',
        a: 'Many cities ask for one, and the rules can change. It is a good idea to check with your city before work starts. Tell us your town and we will talk through what applies to your job.',
      },
      {
        q: 'Can you replace a roof in the winter?',
        a: 'Shingles seal best in warmer weather, so most people plan around that. Cold weather work is possible on some days, and it takes extra care. If your roof cannot wait, call us and we will talk about your options.',
      },
    ],
    related: [inspections, storm, gutters],
  },
  {
    slug: 'roof-repair',
    title: 'Roof Repair in Sioux Falls, SD',
    documentTitle: 'Roof Repair in Sioux Falls, SD | Leaks and Shingles',
    serviceType: 'Roof leak and shingle repair',
    ctaName: 'a roof repair',
    sub: 'Leaks, missing shingles, and worn flashing. We find the source and fix that spot.',
    description:
      'Roof repair in Sioux Falls for leaks, missing shingles, and worn flashing. Learn the warning signs and when a repair makes sense. Call {phone}.',
    photo: 'service-roof-repair',
    alt: 'Illustration of a hammer resting beside a patched section of shingles',
    answer:
      'Roof repair in Sioux Falls usually means fixing a leak, replacing a few shingles, or resealing flashing around a chimney, vent, or wall. Water often travels before it shows up on your ceiling, so the first job is finding where it really gets in. Call {phone} and tell us where you see the problem.',
    includedHeading: 'Roof repairs we help with',
    includedLead: 'Most small problems stay small if you catch them early. These are the repairs people call about most.',
    included: [
      'Tracing a leak back to where the water actually enters the roof.',
      'Replacing shingles that blew off, cracked, or lifted in the wind.',
      'Fixing flashing around chimneys, skylights, and walls. This is one of the most common places for a leak.',
      'Replacing cracked rubber boots around plumbing vent pipes.',
      'Repairing small soft spots once we see how far the moisture has spread.',
      'Sealing up gaps where birds, bats, or squirrels are getting in.',
    ],
    signsHeading: 'Signs you need a roof repair',
    signsLead: 'Water damage grows quietly. If you notice any of these, it is worth a call.',
    signs: [
      'A brown stain on your ceiling, or one that keeps growing.',
      'Shingles in your yard after a windy night.',
      'A musty smell or damp insulation in the attic.',
      'Paint peeling or bubbling near the top of a wall.',
      'Daylight showing through the attic boards.',
    ],
    compare: {
      heading: 'Repair or replace?',
      lead: 'We will tell you which one we would choose if it were our own house.',
      rows: [
        { title: 'A repair often makes sense', text: 'The damage is in one area and the rest of the roof still has good life left.' },
        { title: 'A new roof may make more sense', text: 'Shingles are worn everywhere, or you keep paying for leaks in different spots. See [roof replacement](/services/roof-replacement).' },
      ],
    },
    costHeading: 'What affects the price of a repair',
    costLead: 'We do not post one price for repairs, because the problem is different every time.',
    cost: [
      'How easy the spot is to reach, and how steep your roof is there.',
      'Whether the damage stops at the shingles or goes into the deck below.',
      'Finding shingles that match, especially on an older roof.',
      'How much flashing or vent work needs to be redone.',
    ],
    urgentHeading: 'If water is coming in right now',
    urgent:
      'Put a bucket under the drip and move your belongings. If a ceiling is bulging, keep people out from under it. If water is near lights or outlets, stay clear of that area. Please do not climb on the roof. Then call {phone}. We cannot promise a time, but we will talk through what to do next.',
    visit:
      'Call us and tell us where you see water or damage. Photos from the ground help a lot. We check the roof above the problem and look in the attic if we can. We show you what we find before we fix anything. Then we make the repair we talked about. If we run into something else, we stop and tell you first.',
    faqs: [
      {
        q: 'Why is my roof leaking when the shingles look fine?',
        a: 'Most leaks start at flashing, vent boots, or valleys, not in the middle of the shingles. Water can also run along a rafter before it drips, so the stain may be a long way from the real leak.',
      },
      {
        q: 'Can you match my existing shingles?',
        a: 'We try to get as close as we can. Older shingles fade and some styles are no longer made, so a repair can look a little different at first. We will tell you what to expect before we start.',
      },
      {
        q: 'Is it a leak or an ice dam?',
        a: 'If you see water in winter near the outer edge of your ceiling or walls, and there is thick ice along your eaves, it may be an ice dam. Heat escaping from the house melts snow, and the water refreezes at the edge. Tell us what you see when you call {phone}.',
      },
      {
        q: 'Should I try to fix it myself?',
        a: 'Please be careful. Roofs are dangerous, especially when they are wet or frosty. Catching the water inside and taking photos from the ground is the safest thing you can do.',
      },
      {
        q: 'How much does a roof repair cost in Sioux Falls?',
        a: 'It depends on what is wrong and how hard it is to reach. We do not list a set price. Call {phone} and tell us what you are seeing.',
      },
    ],
    related: [replacement, inspections, storm],
  },
  {
    slug: 'storm-hail-damage',
    title: 'Storm and Hail Damage Roof Help in Sioux Falls, SD',
    documentTitle: 'Storm and Hail Damage Roof Repair in Sioux Falls, SD',
    serviceType: 'Hail and wind damage roof assessment and repair',
    ctaName: 'storm or hail damage',
    sub: 'Hail marks are hard to see from the ground. We take a close look and show you what is there.',
    description:
      'Had hail or high wind in Sioux Falls? Learn what storm damage looks like, what to do first, and how we can help with your roof. Call {phone}.',
    photo: 'service-storm-hail',
    alt: 'Illustration of hail falling from dark clouds onto a shingled roof',
    answer:
      'After hail or high wind in Sioux Falls, your roof can be damaged even when it looks fine from the yard. Hail knocks the protective granules off shingles. Wind can lift them and break the seal. Take photos, stay off the roof, and call {phone}. We will look it over and tell you plainly what we see.',
    includedHeading: 'What we look at after a storm',
    includedLead: 'Storm damage is rarely in just one place, so we check the whole outside of your home.',
    included: [
      'Shingles, for bruises, lost granules, cracks, and creases from wind.',
      'Soft metals like vents and flashing, which often show hail marks clearly.',
      'Ridge caps and edges, where wind usually gets a grip first.',
      'Gutters and downspouts, for dents and loose sections. See [gutters](/services/gutters).',
      'Siding and window trim on the sides of the house that faced the storm. See [siding](/services/siding).',
      'Photos and notes you can keep, whether or not you decide to file a claim.',
    ],
    signsHeading: 'Signs of storm or hail damage',
    signsLead: 'You do not need to climb up to spot these. Look from the ground and around your yard.',
    signs: [
      'Dents on gutters, downspouts, or your air conditioner.',
      'Shingle pieces or heavy granules on the ground or in your gutters.',
      'Spatter marks where hail knocked the grime off your siding or fence.',
      'Shingles that look lifted, folded, or are missing.',
      'New stains on your ceiling after the storm has passed.',
    ],
    costHeading: 'What affects the cost of storm repairs',
    costLead: 'Storm damage ranges from a few shingles to a whole roof, so we do not post one price.',
    cost: [
      'How much of the roof was hit, and on which slopes.',
      'Whether gutters, siding, or vents were also damaged.',
      'The age and type of your current roof.',
      'If you file a claim, your policy and your deductible will shape what you pay. Your insurer makes those decisions.',
    ],
    urgentHeading: 'What to do right after a storm',
    urgent:
      'First, make sure everyone is safe. Stay away from any downed power lines and call the utility about them. Take dated photos of the damage. If a tree is on the house, call 911 if anyone is in danger. When things are calm, call {phone}. Storms keep everybody busy, so we cannot promise a time, but we will be straight with you.',
    visit:
      'Call us and tell us when the storm came through. Let us know if you have seen any leaks. We check the roof and the outside of your home. We take photos so you can see what we saw. Then we go over repair options with you. If you want to file a claim, we can explain how the process usually works.',
    faqs: [
      {
        q: 'How can I tell if hail damaged my roof?',
        a: 'From the ground, look for dents on gutters, vents, and your air conditioner. On the shingles, hail often leaves dark spots where the granules were knocked away. A close look is the only way to know for sure.',
      },
      {
        q: 'Should I call my insurance company first?',
        a: 'That is up to you. Some people like to know what the roof looks like before they decide. Read your policy for any deadlines on reporting damage. Our [insurance claim help](/services/insurance-claim-help) page explains the usual steps.',
      },
      {
        q: 'What if someone knocks on my door after a storm?',
        a: 'Take your time. Ask for their business name and a local address, and do not sign anything on the spot. Be careful with anyone who offers to cover your deductible. A good roofer will give you room to think it over.',
      },
      {
        q: 'Will hail damage get worse if I wait?',
        a: 'It can. Bruised shingles lose protection and may wear out sooner. Your policy may also have a time limit for claims, so it is smart to check it soon after a storm.',
      },
      {
        q: 'Can wind damage a newer roof?',
        a: 'Yes. Strong gusts can break the seal between shingles, even on a roof that is only a few years old. Those lifted shingles can leak later on.',
      },
    ],
    related: [insurance, repair, replacement],
  },
  {
    slug: 'insurance-claim-help',
    title: 'Roof Insurance Claim Help in Sioux Falls, SD',
    documentTitle: 'Roof Insurance Claim Help in Sioux Falls, SD | How It Works',
    serviceType: 'Roof damage documentation for homeowner insurance claims',
    ctaName: 'a roof claim',
    sub: 'A plain look at how a roof claim usually works, and where we can help along the way.',
    description:
      'Filing a roof claim in Sioux Falls? Here is how the process usually works, what to document, and how we can help. Your insurer decides coverage. Call {phone}.',
    photo: 'service-insurance-claim',
    alt: 'Illustration of a clipboard with a checklist next to a small house',
    answer:
      'A roof insurance claim in Sioux Falls usually starts with you reporting the damage to your insurer. An adjuster reviews it, and your insurer decides what your policy covers. We can show you the damage, give you photos and notes, and explain the steps. We cannot promise an outcome, and we do not speak for your insurance company. Call {phone} with your questions.',
    includedHeading: 'How we can help with your claim',
    includedLead: 'You stay in charge of your claim. We help you understand your roof and keep good records.',
    included: [
      'A close look at your roof so you know what is actually up there.',
      'Clear photos and written notes you can share with your insurer if you choose to.',
      'Plain explanations of terms you may see on your paperwork.',
      'Being there when the adjuster comes, if you would like us to point out what we found.',
      'A written scope of the roofing work, so you can compare it with your insurer\'s paperwork.',
      'Doing the repair or replacement if you decide to hire us.',
    ],
    signsHeading: 'When it may be worth looking into a claim',
    signsLead: 'Not every problem is covered. These are the situations where people usually start asking.',
    signs: [
      'A recent hail or wind storm hit your neighborhood.',
      'You can see dents on gutters, vents, or your air conditioner.',
      'Shingles were torn off or a tree limb hit the roof.',
      'A leak started right after a storm.',
      'A neighbor with a similar house had storm damage confirmed.',
    ],
    compare: {
      heading: 'How a roof claim usually works',
      lead: 'Every insurer is a little different. Here is the general path most claims follow.',
      rows: [
        { title: 'Document the damage', text: 'Take dated photos and write down when the storm happened.' },
        { title: 'Read your policy', text: 'Look at your deductible, your deadlines, and how roofs are covered.' },
        { title: 'Report the claim', text: 'You contact your insurer and get a claim number.' },
        { title: 'Meet the adjuster', text: 'The insurer sends someone to look at the damage and write it up.' },
        { title: 'Review the decision', text: 'Your insurer tells you what it will and will not cover. Ask questions if something is unclear.' },
        { title: 'Do the work', text: 'You choose who does the repair, and you pay your deductible.' },
      ],
    },
    costHeading: 'What affects what you pay',
    costLead: 'Your policy decides this, not us. These are the things to look for.',
    cost: [
      'Your deductible. Some policies use a set amount and others use a percentage for wind and hail.',
      'Whether your policy pays replacement cost or actual cash value on the roof.',
      'What the adjuster includes in the scope of the damage.',
      'Any upgrades you choose that go beyond what was there before.',
    ],
    urgentHeading: 'A few honest cautions',
    urgent:
      'We cannot tell you a claim will be approved or how much it will pay. We are not your adjuster and we do not negotiate on your behalf. Your deductible is yours to pay, so be wary of anyone offering to cover it. If you have a dispute, your insurer or the South Dakota Division of Insurance can explain your options. Have a question for us? Call {phone}.',
    visit:
      'Call us and tell us what happened and when. Have your policy handy if you can. We look at your roof and take photos and notes. You decide whether a claim makes sense for you. If you file, you work with your insurer on the decision. If you hire us, we go over the scope with you before work starts.',
    faqs: [
      {
        q: 'Will my insurance pay for a new roof?',
        a: 'We cannot say. It depends on your policy, the cause of the damage, and what your insurer decides after its review. We can show you what we see on the roof so you have good information.',
      },
      {
        q: 'Does filing a claim make my rates go up?',
        a: 'That depends on your insurer and your history. Your agent is the best person to ask, and you can ask before you file.',
      },
      {
        q: 'Do I have to use the roofer my insurance suggests?',
        a: 'In most cases you can choose who you hire. Check your policy and ask your insurer if you are not sure.',
      },
      {
        q: 'Can you handle the claim for me?',
        a: 'The claim is between you and your insurer. We can share photos and notes and explain the roofing side. We do not act as your adjuster or negotiate on your behalf.',
      },
      {
        q: 'What if my claim is denied?',
        a: 'Ask your insurer to explain the reason in writing, and ask what your options are. You can also contact the South Dakota Division of Insurance. We cannot promise a different result, but we can go over what we saw on your roof.',
      },
      {
        q: 'How long do I have to file?',
        a: 'Deadlines vary from policy to policy. Look at your policy or call your agent soon after the storm so you do not miss one.',
      },
    ],
    related: [storm, replacement, inspections],
  },
  {
    slug: 'gutters',
    title: 'Gutters in Sioux Falls, SD',
    documentTitle: 'Gutter Installation and Repair in Sioux Falls, SD',
    serviceType: 'Seamless gutter and downspout installation and repair',
    ctaName: 'your gutters',
    sub: 'Gutters and downspouts that move water off your roof and away from your foundation.',
    description:
      'Gutter repair and new gutters in Sioux Falls. Learn the signs of failing gutters and what changes the price. Call {phone} to talk about your home.',
    photo: 'service-gutters',
    alt: 'Illustration of a gutter along a roof edge with water running to a downspout',
    answer:
      'Gutters in Sioux Falls do a hard job. They carry spring melt and summer downpours off your roof and away from your foundation. When they sag, leak, or overflow, water ends up where you do not want it. We help with new gutters, downspouts, and repairs. Call {phone} and tell us what you are seeing.',
    includedHeading: 'Gutter work we help with',
    includedLead: 'Sometimes a few fixes will do. Sometimes it is better to start over. We will tell you which.',
    included: [
      'New gutters sized for your roof and the way water runs off it.',
      'Downspouts placed so water drains away from your house.',
      'Fixing sagging runs and loose hangers.',
      'Sealing leaky corners and seams.',
      'Replacing sections dented by hail. See [storm and hail damage](/services/storm-hail-damage).',
      'Checking the drip edge and fascia behind the gutter while we are there.',
    ],
    signsHeading: 'Signs your gutters need attention',
    signsLead: 'Walk around your house during the next good rain. You will learn a lot.',
    signs: [
      'Water spills over the edge instead of going down the spout.',
      'Gutters pull away from the house or sag in the middle.',
      'Peeling paint or dark streaks on the fascia boards.',
      'Puddles or washed out soil along your foundation.',
      'Thick ice building up along the gutters in winter.',
    ],
    costHeading: 'What affects the price of gutters',
    costLead: 'We do not post one price for gutters. These are the main things that change it.',
    cost: [
      'How many feet of gutter your home needs, and how tall the house is.',
      'The number of corners and downspouts.',
      'The material and color you choose.',
      'Whether the fascia behind the gutter needs repair first.',
    ],
    urgentHeading: 'If a gutter has come loose',
    urgent:
      'Keep people and cars out from under it, and do not try to hold it up from a ladder in wind or on ice. If it fell, set it aside once it is safe to do so. Then call {phone}. We cannot promise a time, but we will help you figure out what comes next.',
    visit:
      'Call us and tell us what your gutters are doing. Photos from a rainy day are a big help. We look at your gutters, downspouts, and the boards behind them. We also check how water drains around the house. Then we talk through what needs fixing. If you decide to go ahead, we do the work and walk it with you when we finish.',
    faqs: [
      {
        q: 'How often should I clean my gutters?',
        a: 'Most homes do well with a cleaning in spring and fall. If you have big trees close to the house, you may need to do it more often.',
      },
      {
        q: 'Do gutters help with ice dams?',
        a: 'Gutters alone do not cause or cure ice dams. Those usually come from heat escaping into the attic. Clean gutters still help water drain when it does melt.',
      },
      {
        q: 'Where should my downspouts drain?',
        a: 'Well away from your foundation. Extensions or splash blocks help send water out onto ground that slopes away from the house.',
      },
      {
        q: 'Should I replace my gutters when I get a new roof?',
        a: 'Not always. If they are in good shape, they can often stay. If they are dented, sagging, or leaking, doing them at the same time can make sense.',
      },
      {
        q: 'How much do new gutters cost in Sioux Falls?',
        a: 'It depends on the length, height, and material. We do not list a set price. Call {phone} and we can talk through your home.',
      },
    ],
    related: [replacement, siding, storm],
  },
  {
    slug: 'siding',
    title: 'Siding Repair and Replacement in Sioux Falls, SD',
    documentTitle: 'Siding Repair and Replacement in Sioux Falls, SD',
    serviceType: 'Exterior siding repair and installation',
    ctaName: 'your siding',
    sub: 'Repairs and new siding for hail dents, cracks, and wind damage.',
    description:
      'Siding repair and replacement in Sioux Falls for hail dents, cracks, and wind damage. See the warning signs and what changes the price. Call {phone}.',
    photo: 'service-siding',
    alt: 'Illustration of lap siding on a house wall around a window',
    answer:
      'Siding in Sioux Falls takes a beating from hail, wind, and big swings in temperature. When it cracks, loosens, or gets dented, water can work its way behind it. We help with siding repairs and full replacement, and we tie it in cleanly around your windows and trim. Call {phone} and tell us what is going on.',
    includedHeading: 'Siding work we help with',
    includedLead: 'Whether it is one damaged wall or the whole house, we start by looking at what is behind the problem.',
    included: [
      'Replacing cracked, dented, or missing panels.',
      'Fixing loose sections that rattle or blow around in the wind.',
      'Checking the weather barrier behind the siding when panels come off.',
      'Flashing and trim around windows and doors.',
      'Soffit and fascia that have been damaged along with the siding.',
      'Full siding replacement when repairs no longer make sense.',
    ],
    signsHeading: 'Signs your siding needs help',
    signsLead: 'Take a slow walk around your house, and pay extra attention to the side that faces the weather.',
    signs: [
      'Dents, holes, or chips after a hail storm.',
      'Panels that are cracked, warped, or coming loose.',
      'Stains or peeling paint on the walls inside.',
      'Soft spots near the bottom of a wall.',
      'Heavy fading on one side compared to the others.',
    ],
    costHeading: 'What affects the price of siding',
    costLead: 'We do not post one price for siding. Here is what changes the number.',
    cost: [
      'How much wall area is involved, and how tall your home is.',
      'The material and style you pick.',
      'Whether matching panels are still available for a repair.',
      'Any damage to the wall behind the siding, and how many windows and corners need detail work.',
    ],
    urgentHeading: 'If a panel blows off',
    urgent:
      'Pick up any pieces once it is safe, and keep them if you can. They can help with matching. Take photos of the bare spot. Then call {phone}. We cannot promise a time, but we will talk through how to protect that wall in the meantime.',
    visit:
      'Call us and tell us which walls are affected. Photos are a big help. We look at the damaged areas and check for moisture behind them. We let you know if matching will be tricky. Then we go over your options together. If you decide to go ahead, we do the work and walk it with you when we are done.',
    faqs: [
      {
        q: 'Can you replace just one section of siding?',
        a: 'Often, yes. The tricky part is matching color and style, especially on older or faded siding. We will tell you how close we think we can get before you decide.',
      },
      {
        q: 'Can hail damage my siding?',
        a: 'Yes. Hail can dent metal siding and crack or punch holes in vinyl. Damage is often worst on the side that faced the storm.',
      },
      {
        q: 'Should I do my roof and siding at the same time?',
        a: 'If both need work, it can make sense because the flashing where they meet gets done together. There is no need to do both if only one is damaged.',
      },
      {
        q: 'Is siding damage covered by insurance?',
        a: 'That depends on your policy and the cause of the damage. Your insurer decides. Our [insurance claim help](/services/insurance-claim-help) page explains the usual steps.',
      },
      {
        q: 'How much does new siding cost in Sioux Falls?',
        a: 'It depends on your home and the material you pick. We do not list a set price. Call {phone} and tell us about your project.',
      },
    ],
    related: [storm, gutters, insurance],
  },
  {
    slug: 'roof-inspections',
    title: 'Roof Inspections in Sioux Falls, SD',
    documentTitle: 'Roof Inspections in Sioux Falls, SD | Know Your Roof',
    serviceType: 'Residential roof condition inspection',
    ctaName: 'a roof inspection',
    sub: 'A careful look at your roof, and a plain explanation of what we saw.',
    description:
      'Roof inspections in Sioux Falls for homeowners, buyers, and anyone after a storm. See what we check and what we will tell you. Call {phone}.',
    photo: 'service-roof-inspection',
    alt: 'Illustration of a magnifying glass over roof shingles',
    answer:
      'A roof inspection in Sioux Falls tells you what shape your roof is really in. We look at the shingles, flashing, vents, and attic, then explain what we saw in plain words. It is a good idea after a storm, before you buy a home, or when your roof is getting older. Call {phone} to talk about yours.',
    includedHeading: 'What we check',
    includedLead: 'We look at the whole roof system, not just the shingles you can see from the street.',
    included: [
      'Shingle condition, including granule loss, cracks, and curling.',
      'Flashing around chimneys, walls, skylights, and valleys.',
      'Vents, pipe boots, and ridge caps.',
      'The attic, where we can get to it, for stains, damp insulation, and airflow.',
      'Gutters and drip edge, and how water leaves the roof.',
      'Photos and a plain summary of what we found.',
    ],
    signsHeading: 'Good times to get your roof inspected',
    signsLead: 'You do not need a leak to have a good reason to look.',
    signs: [
      'A hail or wind storm just came through your area.',
      'You are buying or selling a home.',
      'Your roof is getting older and you want to plan ahead.',
      'You have noticed a stain, a musty smell, or missing shingles.',
      'You had heavy ice dams last winter.',
    ],
    costHeading: 'What affects the price of an inspection',
    costLead: 'Ask about the cost when you call. These are the things that can change it.',
    cost: [
      'The size and steepness of your roof.',
      'Whether you want the attic checked as well.',
      'Whether you need written notes and photos for a home sale or a claim.',
    ],
    urgentHeading: 'If you already have a leak',
    urgent:
      'Skip the planning and let us know right away that water is coming in. Catch it with a bucket and move your things. Please stay off the roof. Call {phone} and tell us where you see it. We cannot promise a time, but we will talk through your next step.',
    visit:
      'Call us and tell us why you want the roof checked. Let us know how old it is, if you know. We look over the roof and the attic if we can get to it. We take photos as we go. Then we explain what we found in plain words. If something needs work, we talk about your options, and the choice is yours.',
    faqs: [
      {
        q: 'How often should I have my roof inspected?',
        a: 'Once a year is a good habit, and again after any big hail or wind storm. Older roofs benefit from a closer eye.',
      },
      {
        q: 'What will I get after the inspection?',
        a: 'We will walk you through what we saw and share photos. If you need written notes for a sale or a claim, let us know when you call.',
      },
      {
        q: 'Can you inspect a roof before I buy a house?',
        a: 'Yes, tell us your timeline and we will let you know what we can do. A roofer can give you a closer look at the roof than a general home inspection usually does.',
      },
      {
        q: 'Do you need to get on the roof?',
        a: 'Usually, if it is safe. If the roof is too steep, icy, or wet, we may look another way or come back in better weather.',
      },
      {
        q: 'Will you tell me I need a new roof?',
        a: 'Only if we think you do. Many roofs just need a small repair, and some need nothing at all. If that is what we see, that is what we will say.',
      },
    ],
    related: [repair, replacement, storm],
  },
];

export function servicePageBySlug(slug: string | undefined) {
  return servicePages.find((page) => page.slug === slug);
}
