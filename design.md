# Design — Limenako

A locked design system for this app, produced by `hallmark redesign` (Garden theme,
editorial genre). Every page redesign reads this file before emitting code. Do not
regenerate per page — extend or amend this file when the system needs to grow.

/ Hallmark · genre: editorial · theme: Garden · design-system: design.md · designed-as-app /

## Genre
editorial

## Macrostructure family
- Marketing pages (`/`): **Catalogue** — botanical almanac rhythm; index-style section
  heads, specimen tags, generous section gaps. Hero is typographic (no enrichment beyond
  CSS botanical tints).
- App pages (`/checkout`, `/checkout/success`): **Workbench** — function-first, order
  summary + form, no enrichment.

Pages within a family share the family's shape; they vary only in component archetypes.

## Theme — Garden (OKLCH)
- `--color-paper`    oklch(95.5% 0.022 92)   /* warm oat cream */
- `--color-paper-2`  oklch(92.5% 0.026 92)   /* tinted band */
- `--color-paper-3`  oklch(88.5% 0.030 90)   /* hover / deeper */
- `--color-rule`     oklch(83%   0.028 115)  /* soft green-grey hairline */
- `--color-ink`      oklch(24%   0.052 152)  /* botanical near-black green */
- `--color-ink-soft` oklch(40%   0.045 142)  /* body / captions */
- `--color-leaf`     oklch(47%   0.13  140)  /* living leaf-green — primary accent */
- `--color-leaf-deep`oklch(33%   0.050 150)  /* deep green — dark sections */
- `--color-clay`     oklch(54%   0.14  46)   /* earthy clay/terracotta — secondary pop */
- `--color-sand`     oklch(80%   0.09  85)   /* warm oat — on-dark eyebrows */
- `--color-focus`    oklch(47%   0.13  140)

Accent placement ≤ 5% per viewport. Leaf is the primary landmark; clay is the warm pop
(carries the brand's terracotta lineage). No indigo.

## Typography
- Display: Young Serif, weight 400, style normal (roman — organic botanical serif)
- Body:    Hanken Grotesk, weight 400/500
- Serif:   Newsreader (running prose / quotes; italic allowed in body only)
- Label:   uppercase Hanken, tracking 0.14em (herbarium specimen tags)
- Display tracking: -0.006em
- Type scale anchor: --text-display = clamp(2.85rem, 5.2vw + 1rem, 5rem)

**No italic headers** (Hallmark gate 38a). Emphasis in headings is carried by the leaf
or clay accent colour, never italics. Italic survives only in running body / quotes.

## Spacing
4-point named scale in `tokens.css`. Pages use named tokens, never raw values.

## Motion
- Easing: cubic-bezier(0.16, 1, 0.3, 1) named `--ease-out`
- Reveal pattern: fade + short slide, once, on scroll into view
- Reduced-motion fallback: opacity-only, ≤ 150 ms; marquee + smooth-scroll disabled

## Microinteractions stance
- Silent success over celebratory toasts (add-to-cart pulses inline)
- Hover underline grows from left; focus ring instant, never animated
- Under three motion primitives per page

## CTA voice
- Primary CTA: solid ink pill, hover → leaf fill, arrow nudge on hover
- Secondary CTA: hairline outline pill, hover → ink fill

## Per-page allowances
- Marketing (`/`) MAY use CSS botanical tints (moss/clay section bands) — Tier-A only.
- App (`/checkout`) MUST NOT use enrichment — function carries the page.

## What pages MUST share
- The Limenako wordmark (Young Serif, uppercase, specimen-tag ✳).
- The accent colours (leaf primary, clay pop) and ≤ 5% placement.
- Young Serif display + Hanken body + Newsreader serif.
- The CTA pill voice (shape, padding, hover).
- Section heading rhythm: specimen tag (uppercase, tracked) + display heading.

## What pages MAY differ on
- Macrostructure within the page-type family.
- Hero / section-head archetype within the family's allowance.
