@AGENTS.md

# MMXXIV Design System

## Color Palette (4 colors only)

| Token    | Hex       | Role                                              |
|----------|-----------|---------------------------------------------------|
| `navy`   | `#282846` | Dark backgrounds, body text on light, footer       |
| `teal`   | `#007580` | Primary brand, links, interactive elements          |
| `gold`   | `#FED049` | Accent, CTAs, highlights (especially on dark)       |
| `sage`   | `#D8EBE4` | Light backgrounds, soft cards, dividers             |

### Derived values (no new hues — only opacity/white/black)

- **White** `#FFFFFF` — card surfaces, form inputs, text on dark
- **Black** — never use pure `#000000`, use `navy` instead
- Text on light backgrounds: `navy` at 100% or 70% opacity
- Text on dark backgrounds: `#FFFFFF` at 100%, 80%, or 50% opacity
- Borders on light: `navy/10` — Borders on dark: `white/10`
- Hover states: lighten/darken by layering `white/10` or `black/10`

## Section Color Rhythm

Sections follow a **gravity descent + relief** pattern. Never stack two
sections of the same background color consecutively.

```
Hero            → sage
Services        → white
BentoStats      → navy       (gold accents)
TierComparison  → teal       (gold + white accents)
ReadinessCheck  → navy       (gold labels)
Fundamentals    → sage       (navy text, teal accents)
ListingSupport  → white      (teal accents)
Contact         → sage       (navy form card)
Footer          → navy       (gold + white/50 text)
```

## Typography Rules

- Headings: Inter Black (font-weight 900), tracking-tighter
- Body: Inter Regular/Medium
- Serif accent: DM Serif Display — numbers & stats only (e.g., `$2.4B`, `99.8%`)
- Section labels: Inter 11px (`text-[0.6875rem]`), uppercase, tracking `[0.2em]`, **gold** on dark / **teal** on light

## Component Rules

- **Buttons (primary CTA)**: `bg-gold text-navy` — rounded-md, font-black, uppercase tracking-widest
- **Buttons (secondary)**: `bg-white/10 text-white` on dark, `bg-navy/5 text-navy` on light
- **Cards on light bg**: `bg-white` with no border
- **Cards on dark bg**: `bg-white/5 backdrop-blur-sm border border-white/10`
- **Accent borders**: `border-l-2 border-gold` on dark, `border-l-2 border-teal` on light
- **Hover on service cards**: swap bg from white → teal, text from navy → white

## Do NOT

- Introduce new colors (no reds, no intermediate greens, no grays outside navy opacity)
- Use shadows on dark backgrounds
- Use gradients
- Mix teal and gold on the same element (one accent per context)
