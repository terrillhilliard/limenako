# Design — Limenako

Locked design system. Theme: **Lumen (Night Foundry)**, tuned to the base44
navy/cream/gold palette. Structure/DNA studied from the Hallmark Lumen example;
content + colour from the base44 Limenako site.

/ Hallmark · genre: editorial · theme: Lumen · macrostructure: Marquee Hero · designed-as-app /

## Genre
editorial (Lumen register, adapted from AI-tool to botanical apothecary)

## Macrostructure family
- Marketing (`/`): **Marquee Hero** — botanical specimen apparatus at hero-right,
  lowercase serif headline + gold verb at hero-left, meter strip below.
- App (`/checkout`): **Workbench** — order summary + form, no apparatus.

## Theme — Lumen Night, base44 palette (OKLCH)
- `--paper`   oklch(17% 0.03 258)   /* deep navy canvas */
- `--paper-2` oklch(21% 0.035 258)  /* base44 navy #1A2B42 — cards/bands */
- `--ink`     oklch(97% 0.01 92)    /* cream #FDFBF7 headlines */
- `--ink-2`   oklch(88% 0.012 92)   /* cream body */
- `--accent`  oklch(78% 0.12 90)    /* gold #D4AF37 — brass accent / verb landmark */
- `--rule`    oklch(97% 0.01 92 / 0.16)  /* hairline */

## Typography — two-register (Lumen signature)
- Display: Instrument Serif 400, **lowercase, upright, no italic ever**
- Body:    Geist 400/500, **lowercase**
- Mono:    JetBrains Mono — **UPPERCASE labels only** (eyebrows, callouts, stat labels)
- All prose lowercase (headlines, nav, brand, footer, place & proper names).
  Mono labels are the only uppercase surface. This split is non-negotiable.

## Seven signature moves (all required)
1. Hand-built **botanical specimen apparatus** (not a glowing orb) with leader-line
   callouts carrying REAL facts (100% NATURAL · COLD-PROCESSED · LEMONGRASS).
2. Lowercase serif headline with exactly **one gold verb** + 1px draw-in underline.
3. Mono UPPERCASE eyebrow above every section (`00 · THE RITUAL`).
4. Blueprint grid background (4% hairline) on the hero.
5. Meter strip below the hero (procedural ticks + mono labels, real values).
6. Hairline cards lit from within (inner gold radial ≤ 6% rest / 12% hover).
7. Three-stat row in Instrument Serif numerals, tabular-nums (100% · 4 · 2 — honest).

## Motion
- Apparatus filament: 3% pulse, 4s, never rotates.
- Verb underline: draws in once (340ms, delay 820ms), then permanent.
- Section heads: fade-up on view. Reduced-motion → instant final state (MotionConfig).

## CTA voice
- Primary: solid gold pill, dark ink text (lowercase).
- Secondary: hairline outline pill.

## Anti-patterns (Lumen)
No italics anywhere · no glowing orb · no invented metrics · no title/sentence case
prose · no emoji-in-eyebrow · three-cell stat rows only.
