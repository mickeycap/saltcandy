# SHIFT prototype — launch blockers

What stands between this prototype and a public launch, grouped by who has to
act. Nothing here is hidden in the site: draft placeholders are visibly marked
on the legal pages, and the signup form is labelled as a demo.

Status as of 2026-09-12, branch `shift-prototype`.

## 1. Unfinished engineering

| Item | Detail |
| --- | --- |
| **Launch-list provider** | The signup form is a labelled demo: it validates locally and transmits nothing. To go live: pick a provider, add a server function that validates and sanitises input, rate-limits and adds abuse protection (honeypot and/or a challenge), calls the provider with server-only credentials from `.env`, never logs the address, and returns success only on a successful provider response. Then remove the demo label and update the privacy policy. |
| **Production domain** | Unknown. `VITE_SITE_URL` is unset, so canonical URLs, Open Graph URLs and `sitemap.xml` use the documented placeholder `https://shift.example`. Set the variable in Vercel for the production environment and rebuild. Add a `Sitemap:` line to `public/robots.txt` at the same time. |
| **Indexability gate** | Builds are `noindex` (meta tag + `X-Robots-Tag`) unless `VERCEL_ENV=production`. Note this means a Vercel production deploy on the default `*.vercel.app` domain *would* be indexable. If a private review period is needed, use Vercel Deployment Protection on that project — `noindex` and `robots.txt` are not access controls. |
| **Deployed HTTPS checks** | No deployed URL exists yet (the Vercel project has not been created/imported). Outstanding: verify HTTPS, HTTP→HTTPS redirect, no mixed content, and that the security headers in `vite.config.ts` route rules are present on the deployed response. Do not add an application-level HTTPS redirect (Vercel already redirects; doubling it risks loops). |
| **HSTS** | Deliberately not set. Enable only after confirming the production domain and whether every subdomain will be HTTPS-only. |
| **Content-Security-Policy** | Not set. TanStack Start hydrates with inline scripts, so a CSP needs nonces or hashes; evaluate once the hosting setup is fixed. |
| **Prerendered HTML on Vercel** | Locally, all four routes prerender and the sitemap serves. Whether Nitro's Vercel preset serves the prerendered HTML statically (vs SSR on request) has not been verified on a real deployment — functionally identical, but worth confirming for performance. |
| **Performance** | See measurements below. Remaining levers: the router/React runtime bundle (~100 KB gzipped), and replacing the low-resolution crops (which forces the hero to render small). |

## 2. Missing business details (owner decisions)

- Legal entity name and registered address (privacy + terms).
- Privacy contact email and general contact email.
- Data retention periods (correspondence; launch list once a provider exists).
- Hosting provider confirmation for the privacy policy (assumed Vercel) and its log-retention period.
- Governing law and jurisdiction for the terms.
- Whether refills/subscriptions will be offered at launch — currently described as "future possibilities."
- Product names, flavour directions and the two-product plan are treated as approved from the brief; confirm before the site is public.

## 3. Legal review

- **Privacy policy** and **terms** are drafts written to match what the site actually does. They are not lawyer-approved and are not claimed to be compliant anywhere. Placeholders are marked `[Draft: …]` in yellow on the pages.
- Jurisdiction-specific items flagged in the privacy policy: GDPR/UK GDPR lawful basis and representative; CCPA/CPRA notice-at-collection and "Do Not Sell or Share" if thresholds apply; children's privacy statement; international transfer disclosures for hosting and email providers.
- **Cookie consent**: the banner is built (accept / reject / manage, equal prominence, withdrawable via the footer) but the site currently sets no cookies and loads no optional scripts; the only storage is the consent record itself. Before any analytics or marketing tool is added, confirm the consent flow and banner copy meet the requirements of the jurisdictions sold into (ePrivacy/GDPR consent-before-load in the EU/UK; CCPA opt-out framing in California).
- Terms currently exclude purchase, refund, shipping and subscription terms because nothing is sold. Those need drafting and review before any store.

## 4. Formulation and claims review

The site avoids claims deliberately, but the following must be reviewed by whoever owns regulatory/claims before launch and again whenever formulation changes:

- All function language is phrased as exploration ("nootropic ingredients under exploration", "magnesium and other evening ingredients under exploration"). No focus, sleep, anxiety, hydration, recovery or clinical claims appear anywhere. Keep it that way until a finished formulation supports a specific, substantiated claim.
- No serving sizes, ingredient quantities, calorie counts or nutrition information are published. Do not add them until final.
- "Hard or sour candy" is stated as the starting format and explicitly subject to change.
- Dental/GI considerations, sugar content and safety are described only as development priorities, never as product properties ("tooth-safe", "gentle", "safe for everyone" are all absent and should stay absent).
- No "approved", "certified", "clinically proven", "tested" or similar language. No Product/Offer/Review structured data — only Organization/WebSite JSON-LD.

## 5. Replacement creative assets

The supplied images are exact crops from the brand board and are prototype-resolution. They are displayed at or below native width and will still look soft on high-DPI screens. None are transparent cutouts; all have packaging text baked in. Replace before launch:

| Current asset | Native size | Problem | Brief |
| --- | --- | --- | --- |
| `public/shift/hero-scene` | 492×289 | Baked headline fragment "ts." on the left edge and "DIFFERENT MOMENTS. SAME YOU." on the right; too small for a hero on 2× screens. | Text-free two-pouch lifestyle hero at ≥1600×1000, same art direction and colours, with a version cropped for portrait phones. |
| `public/shift/morning-product` | 355×333 | "MORNING SHIFT" caption from the board cut off along the top edge; soft at card size. | Dedicated Morning Shift pouch render ≥1200 px, on cream or as an explicit transparent cutout, plus a single-candy macro. |
| `public/shift/evening-product` | 351×333 | Same as above ("EVENING SHIFT" cut at top). | Dedicated Evening Shift pouch render, matching spec. |
| `public/shift/social-moment` | 297×304 | Headline and SHIFT logo baked in; shown small on purpose. | Text-free candy-on-stone lifestyle image ≥1200 px. |
| `public/og/shift-social.png` | 1200×630 | Generated from the live wordmark/symbol — fine to ship; swap in photography once the hero render exists if desired. | Optional. |

Also: final packaging artwork requires its own design pass and review — the pouch labels shown are concept renders from the board, not print-ready files.

## Measurements (lab, not field)

Lighthouse 12 against the production build served locally (`node .output/server/index.mjs`, Brotli-compressed assets, simulated throttling). These are lab numbers on a loaded workstation; there is no real-user (field) data, and no INP figure is claimed.

| Run | Performance | Accessibility | Best practices | SEO | FCP | LCP | TBT | CLS |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Mobile (Moto G-class emulation, slow 4G simulated) | **93** | 100 | 100 | 69* | 2.1 s | 2.6 s | 10 ms | 0 |
| Desktop | **100** | 100 | 100 | 69* | 0.5 s | 0.6 s | 0 ms | 0 |

\* SEO is 69 solely because the page is `noindex` — the only failing audit is "Page is blocked from indexing", which is the intended preview behaviour. A production build (`VERCEL_ENV=production`) removes the tag and this audit passes.

Test URL: `http://localhost:3101/` (homepage). Mobile LCP element is the hero image. Mobile LCP is 0.1 s over the 2.5 s target; the biggest remaining opportunities Lighthouse reports are unused JavaScript (~300 ms, the React/router runtime) and text compression of the HTML document itself (~150 ms — static assets are pre-compressed with Brotli, the SSR HTML from the local Node server is not; Vercel compresses responses at the edge). Re-measure on the deployed URL before treating any of this as final.

## Verification performed (local production build)

- `npm run typecheck` and `npm run build`: pass.
- Status codes: `/`, `/our-story`, `/privacy`, `/terms` → 200; unknown path → **404**; `/sitemap.xml` → 200 valid XML listing only the four public routes; `/robots.txt` → 200.
- Headers on every response: `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`, `Permissions-Policy`, and `X-Robots-Tag: noindex` (non-production).
- Each page: unique `<title>` and description, exactly one `<h1>`, canonical, Open Graph and Twitter card tags; the 404 page has its own title.
- No requests to any host other than the site itself (fonts self-hosted; no analytics/pixels). Console: no errors.
- 360 / 390 / 768 / 1440 px: no horizontal overflow; images load; concept cards and hero stack.
- Mobile menu opens/closes, Escape closes and returns focus; keyboard tab order reaches skip link, nav, and CTAs with visible focus rings.
- Consent: Reject stores `{analytics:false, marketing:false}` and dismisses the banner; Manage opens a native `<dialog>`; footer link reopens it; withdraw is available.
- Signup demo: invalid email shows an inline error (`role="alert"`); valid email shows the demo-only message; **zero** POST/server-function requests are made.
- No inherited branding strings (Celtic Tide, Salty Sour, RESURGE, 11 Candies, Na) in the built output.
- Not verified: anything on a deployed URL (see section 1).
