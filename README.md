# SHIFT — prelaunch prototype

## Conversion redesign

Feature branch: `feature/shift-conversion-redesign`.
Editorial hero, responsive concept photography, distinct day/dusk flavor cards,
compact exploratory details, a clearer signup destination and mobile menu fix.
All primary CTAs lead to `/#launch-updates`; the form remains an explicit demo.
No marketing provider or tracker has been added.

The supplied `shift-handoff` corresponds to `handoff/shift` in this repository.
Read `handoff/shift/START-HERE.md` and `handoff/shift/generated/README.md`.
Original images are preserved; the homepage now uses the new `*-v2-*.webp` files.

Production-build smoke check (preview/noindex environment):

```bash
npm ci
npm run typecheck
npm run build
PORT=3103 npm run start
node scripts/verify-preview.mjs http://127.0.0.1:3103
```

The repository does not define lint or unit-test scripts. Browser interaction
checks supplement typecheck and the HTTP smoke check. If the local file watcher
hits EMFILE, serve the compiled build with `npm run start`.

**Candy for moments.** A responsive prelaunch website for SHIFT, a candy brand
in development. Two concepts — Morning Shift (salty lemon + ginger) and
Evening Shift (tart cherry) — presented as *in development*. Nothing is for
sale: no cart, no prices, no checkout. The one conversion action is
**Get launch updates**, and every instance leads to the same signup section.

See [`LAUNCH-BLOCKERS.md`](LAUNCH-BLOCKERS.md) for everything that still needs
an owner decision, legal review, or replacement assets before this can launch.
The visual handoff it was built from is in [`handoff/shift/`](handoff/shift/).

## Local setup

```bash
npm install
npm run dev        # http://localhost:3000
```

```bash
npm run typecheck  # tsc --noEmit
npm run build      # prerenders all public routes, writes sitemap.xml, Nitro output in .output/
npm run start      # serve the production build (PORT=3000 by default)
```

Requires Node 22. Builds are slow-ish on first run (~50s) because Nitro
bundles the server.

## Environment variables

Copy `.env.example` to `.env.local` (gitignored). Names only — no real values
are committed.

| Variable | Scope | Purpose |
| --- | --- | --- |
| `VITE_SITE_URL` | **Public** (inlined into the client bundle) | Confirmed production origin, no trailing slash. Drives canonical URLs, Open Graph URLs and the sitemap host. Unset = the documented placeholder `https://shift.example`. |
| `SIGNUP_PROVIDER` | Server-only | Reserved for the launch-list provider. **Not read by the prototype.** |
| `SIGNUP_PROVIDER_API_KEY` | Server-only | Reserved. Never expose with a `VITE_` prefix. |
| `SIGNUP_PROVIDER_LIST_ID` | Server-only | Reserved. |

`VERCEL_ENV` (set automatically by Vercel) decides indexability at build time:
only `production` omits the `noindex` meta tag and `X-Robots-Tag` header.
Previews, branch deploys and local builds are always `noindex`.

## Stack and conventions

- **TanStack Start v1** (React 19, Vite 7), file routes in `src/routes/`,
  per-route `head()` built through `pageHead()` in `src/lib/site.ts` so
  titles, canonicals, social cards and the preview `noindex` stay consistent.
- **Nitro** Vite plugin for the Vercel build; security headers are set in
  `vite.config.ts` route rules. HSTS is deliberately not set yet.
- **Tailwind CSS v4** via `src/styles.css` only: `@import "tailwindcss"` and
  `@theme` tokens, no `tailwind.config.js`. Every colour is an oklch token;
  components use semantic roles (`bg-surface`, `text-ink`, `text-link`) and
  never a raw hex or stock Tailwind colour.
- **Fonts** are self-hosted from `@fontsource` (Geist 700, Inter 400/500/600,
  latin subsets) — no third-party font request.
- **Prerendering**: all four public routes are rendered to static HTML at
  build. The custom 404 is server-rendered with a real 404 status.

## Palette and contrast

Board values: Cream `#F8F4E9`, Ink `#2E1B3D`, Citrus `#FAB223`, Cherry
`#882C3F`, Dusk `#C9B8E6`. Every text/background pair in use clears WCAG AA
(lowest is cherry on the evening card tint at 6.97:1). Citrus and dusk are
**never** small text on cream — both sit around 1.7:1 — they are shapes,
tints and large accents only. Cherry is the link colour (7.7:1 on cream).

## The mark

`src/components/Logo.tsx` is live type plus an editable SVG symbol (offset
citrus/cherry semicircles). All five letters of SHIFT are real text — the
board's generated wordmark obscured the "I" by swapping it for the symbol.
`public/favicon.svg` and the PNG/ICO/Apple icons in `public/icons/` are the
same geometry.

## Imagery

`public/shift/` holds the exact board crops from the handoff, converted to
WebP with half-size variants; the PNG originals are preserved alongside. They
are prototype-resolution (≈350–490px) with packaging labels baked in, and are
never displayed above their native width. Replacement briefs are in
`LAUNCH-BLOCKERS.md`.

## Consent

`src/lib/consent.ts` + `src/components/CookieConsent.tsx`. The prototype loads
no analytics, pixels or marketing scripts; the only storage is the preference
record itself (`localStorage`, `shift.consent.v1`). Anything optional added
later must check `isAllowed(category)` before loading. "Cookie preferences" in
the footer reopens the dialog; consent can be withdrawn there.

## Signup form

A labelled **demo**. It validates locally and transmits nothing — no provider
is configured. It never shows a real success message. Wire a provider up
server-side (with validation and abuse protection) before removing the demo
label; see `LAUNCH-BLOCKERS.md`.
