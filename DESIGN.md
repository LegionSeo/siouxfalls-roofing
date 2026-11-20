# Sioux Falls Roofing design system

Direction: sturdy, local and plain spoken. Warm paper, deep spruce and brick red,
like a Midwest house with a fresh roof. Heavy headings, big real photos, square
corners. It should not look like the electrician site (navy and copper, Inter).

UXKIN was not connected, so this direction is not based on a UXKIN comparison.
It is based on the brief, the photos and common patterns on local trade sites.

## Color

| Token | Value | Role |
| --- | --- | --- |
| ink | #17201c | Body text, header, dark panels |
| spruce | #23443a (`--color-night`) | Dark bands, hero panel, footer |
| brick | #b4441f (`--color-accent`) | Call buttons, the main action. White text, 5.5:1 |
| brick deep | #9a3517 (`--color-accent-deep`) | Button hover |
| rust | #a63d1a (`--color-copper`) | Links, eyebrows, icons on light. 5.7:1 on paper |
| warm | #f2b48f (`--color-copper-bright`) | Eyebrows and icons on dark. 6:1 on spruce |
| paper | #f6f3ee | Page background |
| mist | #ece6dc | Soft panels |
| line | #ddd4c6 | Borders and rules |
| muted | #4f5a54 | Secondary text, 6.5:1 on paper |

Only brick fills buttons. Only one accent per screen. No gradients except the
photo shade that keeps text readable.

## Typography

- Headings: Archivo 800 (700 for h3), self hosted from @fontsource.
- Body: Source Sans 3 400, 600 and 700.
- Scale: h1 clamp(2.4rem, 5vw, 4.25rem) / 1.02; h2 clamp(1.85rem, 3.4vw, 2.75rem) / 1.08;
  h3 1.25rem / 1.25; body 1.0625rem / 1.65; small 0.875rem; eyebrow 0.8125rem caps, 0.14em tracking.
- Lines stay near 65 characters.

## Spacing and shape

- 8 px base. Sections 64 px tall padding on phones, 96 px on desktop. Content width 1200 px.
- Radius: 6 px on cards and inputs, 4 px on buttons. No pill shapes.
- One shadow for raised cards: 0 12px 28px rgb(23 32 28 / 0.12). Most things are flat with a 1 px line.

## Components

- Buttons: primary brick fill with white text; line button white outline on dark,
  ink outline on light. 56 px tall. Focus ring 3 px rust (warm on dark).
- Header: ink bar with a 4 px brick rule on top. Call button always visible on desktop,
  icon call button and menu on phones. A sticky call bar sits at the bottom on phones.
- Hero: full bleed photo with a spruce panel on the left on desktop. The panel has a
  roof pitch top edge. On phones the photo sits on top and the copy below.
- Service list: photo rows (thumbnail, name, one line, arrow), not identical cards.
- Fact box: mist panel with a rust rule on the left, used for sourced local facts.
- FAQ: details and summary with plus and minus.

## Imagery and icons

- Real photos only. Unsplash stock today, credited on the About page and in
  src/lib/photos.ts. Alt text never says the people shown are this company's crew.
- Town pages use credited Wikimedia photos of each town.
- Icons: one inline sprite, 2.25 stroke, line style.
- Logo: gable chevron in brick over staggered shingle courses, with SIOUX FALLS over ROOFING.
