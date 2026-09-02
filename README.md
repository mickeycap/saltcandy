# Salty Sour Suckers

Marketing storefront for Salty Sour Suckers — pocket tins of pressed salty-sour
electrolyte candy. Two tins with an identical mineral load, split by caffeine:
Coral Grapefruit at 75mg, Sea Salt Citrus at none. Built headless-ready: every
piece of product data flows through one typed catalog layer.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # client + SSR bundles into dist/
npm run start    # serve the production build
npm run typecheck
```

## Stack

- **TanStack Start v1** (React 19, Vite 7) — file-based routing, SSR, per-route
  `head()` metadata.
- **Tailwind CSS v4** via `src/styles.css` — native `@import "tailwindcss"` and
  `@theme` tokens. No `tailwind.config.js`.

## Design tokens

Every colour is an oklch token in [`src/styles.css`](src/styles.css). Components
reference semantic roles (`bg-surface`, `text-ink`, `border-border`,
`text-accent-text`) — never a raw hex or a stock Tailwind colour.

The palette is contrast-checked against cream. Accents ship in two strengths:
the raw accent (`--color-coral`) for shapes, and an `-ink` variant
(`--color-coral-ink`) that clears WCAG AA as text on cream. `src/lib/accents.ts`
maps each flavour to the safe member of its family.

Texture and motion utilities live in the same file: `grain` (printed dot
screen), `litho` / `litho-soft` (letterpress misregistration), `rule`,
`block-shadow`, `lift`, `stamp`. All motion is disabled under
`prefers-reduced-motion`.

## Catalog layer

[`src/lib/catalog.ts`](src/lib/catalog.ts) is the only module that knows where
products come from. It exports `Product`, `Money`, `getProducts()`,
`getProduct(handle)` and `formatMoney()`, shaped to mirror the Shopify
Storefront schema (product GIDs, `{ amount, currencyCode }` money). Swapping the
two function bodies for GraphQL calls is the whole migration — the file ends
with step-by-step notes, including where cart state and the `localStorage` cart
id belong.

No component hardcodes product data. The index route loads the catalog and
builds its JSON-LD `ItemList` from the same objects it renders.

## The mark

The S³ mark — coral bolt, coral flame with sun rays, a cluster of violet salt
crystals, a blue swell breaking across the base — is
[`src/components/Emblem.tsx`](src/components/Emblem.tsx): inline SVG, every fill
a token, so it recolours with the theme and stays crisp from favicon to hero.
`logo.jpeg` is the colourway reference it was drawn from.

`public/img/` holds only what has to be raster: the two tin renders and the
1200×630 `og-cover.png`. Both composite the same vector mark, rasterised per
flavour tint, so there is one source of truth for the artwork.
