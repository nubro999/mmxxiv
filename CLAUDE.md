@AGENTS.md

# MMXXIV Design System

## Color Palette (Chanel-inspired, luxury VC)

| Token    | Hex       | Role                                              |
|----------|-----------|---------------------------------------------------|
| `black`  | `#000000` | Dark backgrounds, body text on light, authority     |
| `white`  | `#ffffff` | Clean surfaces, cards, text on dark                 |
| `silver` | `#c0c0c0` | Borders, secondary text, dividers, restraint        |
| `cream`  | `#fffdd0` | Warm section backgrounds, soft luxury               |
| `rose`   | `#ffc0cb` | Precious accent — CTAs, key highlights (sparingly)  |

### 60/30/10 Rule

- **60%** black + white (structure)
- **30%** silver + cream (texture)
- **10%** rose (precious accent — never overuse)

### Derived values

- Text on light backgrounds: `black` at 100% or 60% opacity
- Text on dark backgrounds: `white` at 100%, 70%, or 40% opacity
- Borders on light: `silver/40` or `black/10`
- Borders on dark: `white/10` or `silver/20`
- Hover states: opacity shifts, border color changes (restrained)

## Section Color Rhythm

Never stack two sections of the same background color consecutively.

```
Hero            → white      (clean entrance, rose accent)
WhatWeDo        → cream      (warm services)
HowWeWork       → black      (dramatic pipeline, rose + cream accents)
KeyFocus        → white      (clean 3-column)
BentoStats      → black      (dramatic stats, rose numbers)
Contact         → cream      (warm, inviting form)
Footer          → black      (anchoring close)
```

## Typography Rules

- Headings: DM Serif Display for primary headlines (luxury serif), Inter Black for secondary
- Body: Inter Regular/Medium
- Stats & numbers: DM Serif Display, rose on dark / black on light
- Section labels: Inter 11px (`text-[0.6875rem]`), uppercase, tracking `[0.3em]`, **rose** on dark / **silver** on light

## Component Rules

- **Buttons (primary CTA)**: On dark → `bg-rose text-black`, On light → `bg-black text-white`
- **Buttons (secondary)**: Ghost — `border border-silver/40 text-black` on light, `border-white/20 text-white` on dark
- **Cards on light bg**: `bg-white border border-silver/30` — thin, precise, no shadow
- **Cards on dark bg**: `bg-white/5 border border-white/10`
- **Accent borders**: `border-l-2 border-rose` (use sparingly)
- **Hover on service cards**: border transitions to rose, restrained opacity shift
- **Spacing**: Generous padding (p-10 to p-12), luxury = breathing room

## Do NOT

- Introduce new colors outside the 5-token palette
- Use shadows (luxury = precision, not depth)
- Use gradients
- Overuse rose — it must remain precious and rare
- Use bright/saturated colors for backgrounds
