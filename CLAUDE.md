@AGENTS.md

# MMXXIV Design System

## Tech Stack

- Next.js 16.2.2 (Turbopack, App Router)
- React 19.2.4
- Tailwind CSS v4 (with `@tailwindcss/postcss`)
- Framer Motion 12.x (animations & scroll interactions)
- Lucide React (icons)
- Spline 3D (Hero section iframe embed)

## Color Palette

Defined in `globals.css` via `@theme inline`:

| Token      | Hex       | Role                                              |
|------------|-----------|---------------------------------------------------|
| `black`    | `#000000` | Dark section backgrounds, body text, authority      |
| `charcoal` | `#111111` | Defined but currently unused                        |
| `ash`      | `#f5f5f7` | Neutral section backgrounds, card fills on light    |
| `white`    | `#ffffff` | Clean surfaces, cards, text on dark                 |
| `silver`   | `#c0c0c0` | Currently used only in CSS definition               |
| `cream`    | `#fffdd0` | Currently used only in CSS definition               |
| `rose`     | `#ffc0cb` | Accent — CTAs, section labels, highlights           |

### Currently active colors

The live site primarily uses: `black`, `white`, `ash`, `rose`.
`silver`, `cream`, `charcoal` are defined as tokens but not yet used in components.

### Derived values (in use)

- Text on light backgrounds: `text-black`, `text-black/50`, `text-black/45`, `text-black/70`
- Text on dark backgrounds: `text-white`, `text-white/50`, `text-white/45`, `text-white/55`
- Borders on light: `border-black/[0.04]`, `border-black/8`, `border-black/10`, `border-black/15`
- Borders on dark: `border-white/5`, `border-white/8`, `border-white/10`, `border-white/15`
- Card fills on light: `bg-ash/60`, `bg-rose/10`, `bg-rose/15`
- Card fills on dark: `bg-white/[0.04]`, `bg-white/5`, `bg-rose/25`

## Page Structure & Section Backgrounds

Component order in `page.tsx`:

```
Navbar          → fixed, bg-black/70 backdrop-blur
Hero            → bg-black       (Spline 3D iframe, left text / right 3D)
WhatWeDo        → bg-white       (6 services, icon + label + hover tooltip)
Framework       → bg-ash/50      (timeline with 5 pillars)
KeyFocus        → bg-white       (2-col: SVG left, 3 focus cards right)
HowWeWork       → bg-black       (2-col: SVG left, task force lists right)
WhyUs           → bg-white       (horizontal scroll cards, first card black)
BentoStats      → bg-ash/50      (3 stat counters with CountUp animation)
ContactSection  → bg-white       (2-col: text+SVG left, form right)
Footer          → bg-black       (logo + links)
```

Note: `bg-white` appears consecutively (WhatWeDo→Framework breaks it with ash, but KeyFocus→HowWeWork and WhyUs→BentoStats have contrasting pairs).

## Typography

- **Font families**: Inter (sans, `--font-inter`) + DM Serif Display (serif, `--font-dm-serif`)
- **Primary headings**: `font-[family-name:var(--font-dm-serif)] text-4xl md:text-5xl tracking-tight`
- **Hero heading**: `text-4xl sm:text-5xl lg:text-6xl leading-[1.08]`
- **Body text**: Inter, `text-base leading-relaxed` or `text-lg leading-relaxed`
- **Section labels**: `text-sm font-semibold uppercase tracking-[0.2em] text-rose` (used on both light and dark bgs)
- **Hero badge**: `text-[0.6875rem] font-semibold uppercase tracking-[0.15em] text-rose` (slightly smaller)
- **HowWeWork sub-labels**: `text-sm font-semibold uppercase tracking-[0.15em]`
- **Stat numbers**: `font-[family-name:var(--font-dm-serif)] text-6xl md:text-7xl text-black`
- **Stat captions**: `text-sm font-medium uppercase tracking-widest text-black/30`

## Component Patterns

### Buttons
- **Primary CTA (dark bg)**: `bg-rose px-7 py-3.5 text-sm font-bold text-black hover:bg-rose/85`
- **Primary CTA (light bg)**: `bg-black py-4 text-base font-semibold text-white hover:bg-black/85`
- **Secondary (dark bg)**: `border border-white/15 text-white hover:border-white/30 hover:bg-white/5`
- **Navbar CTA**: `bg-rose px-5 py-2 text-sm font-semibold text-black`

### Cards
- **On light bg**: `border border-black/[0.04] bg-ash/60` with `hover:bg-ash` transition
- **On dark bg**: `border border-white/8 bg-white/[0.04]`
- **Featured card (WhyUs first)**: `bg-black text-white` with `bg-rose/25` icon container
- **Framework timeline cards**: `bg-white shadow-sm hover:shadow-md` (inactive), `bg-black shadow-lg` (active)
- **Framework pillar chips**: `bg-white shadow-sm hover:bg-black` with rose accent bar

### Icons (Lucide)
- Service icons: `h-9 w-9 md:h-10 md:w-10 strokeWidth={1.4}` in `bg-rose/10` container
- WhyUs icons: `h-5 w-5 strokeWidth={1.8}` in `h-11 w-11` container
- Icon containers on light: `bg-rose/10` or `bg-rose/15`
- Icon containers on dark: `bg-rose/25`

### Hover & Interaction
- Button scale: `whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}`
- Card transitions: `transition-colors duration-300`
- WhatWeDo: hover tooltip pattern (absolute positioned, opacity + translate-y transition)
- Framework pillars: `hover:bg-black` with text color inversion
- WhyUs: horizontal scroll with `no-scrollbar` class

### Motion (Framer Motion)
- Fade-in from below: `initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}`
- Fade-in from side: `initial={{ opacity: 0, x: -20 }}` or `x: 20`
- Staggered children: `delay: i * 0.06` to `i * 0.08`
- Viewport trigger: `viewport={{ once: true }}` (all animations fire once)
- Duration: 0.35s–0.5s, easing: default Framer Motion easing

### CountUp Component
- Custom spring-based number animation (`src/components/CountUp.tsx`)
- Props: `to`, `from`, `duration`, `separator`
- Triggers on viewport intersection via `useInView`

## SVG Assets

Located in `public/assets/`:
- `MMIXX_ASSET_2.svg` — used in HowWeWork (token architecture diagram)
- `MMIXX_ASSET_4.svg` — used in KeyFocus (analysis illustration)
- `MMIXX_ASSET_5.svg` — used in ContactSection (signal illustration)
- Assets 1, 3, 6 exist but are not currently referenced in components

## Spline 3D

- URL: `https://my.spline.design/tvatimedoor-SLhH6tcrqs2n6GObMGCsH4OG/`
- Desktop: right 52% of Hero, full iframe
- Mobile: full-screen iframe at 20% opacity as background
- Edge blend: `bg-gradient-to-r from-black to-transparent` (24px wide) on left edge of iframe

## Scrollbar Hiding

`.no-scrollbar` utility defined in `globals.css` — hides scrollbar for horizontal scroll containers (used in WhyUs).

## Known Patterns to Preserve

- WhatWeDo uses icon + label + hover tooltip (not card grid)
- WhyUs uses horizontal scroll with fixed-width cards and `aspectRatio: "1 / 1.05"`
- Framework uses vertical timeline with spine/node pattern
- Shadows ARE used in Framework section (shadow-sm, shadow-lg) despite luxury aesthetic
- Gradient IS used in Hero for Spline iframe edge blending
- All section labels use `text-rose` regardless of background color
