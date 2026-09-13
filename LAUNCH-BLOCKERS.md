# SHIFT launch blockers — conversion redesign

This is a prelaunch prototype. Nothing is for sale. The signup is a labeled demo
that validates locally, sends no request and stores no email address.

## Engineering

- Select and authorize a signup provider; implement server-side validation,
  rate limiting and abuse protection. Update the privacy policy before enabling
  collection. Show a real confirmation only after backend success.
- Confirm the production domain. `VITE_SITE_URL` is deliberately unset and uses
  `https://shift.example` in canonical, social URLs and sitemap. Empty values now
  correctly fall back too. Set a confirmed origin before public launch.
- Add the confirmed sitemap URL to robots.txt before production launch.
- Previews have noindex meta and X-Robots-Tag. Production removes this only when
  VERCEL_ENV=production. Noindex is not access control.
- Current browser verification is on the compiled local build. See
  VERIFICATION.md for actual deployment and performance results.
- Lighthouse could not connect to a standalone Chrome process in the local
  sandbox. Do not reuse historical scores from the previous design as results
  for this redesign. Re-measure mobile performance on the preview.
- HSTS and a nonce/hash-based CSP remain future hosting work; enable after the
  production domain and framework behavior are confirmed.
- Existing framework build warnings: unused external imports and ignored
  use-client directives in dependency bundles. Builds succeed.
- js-yaml patched from 4.3.1 to 4.3.2; npm audit reports zero vulnerabilities.

## Owner decisions

- Legal entity and registered address.
- Privacy and general contact emails; correspondence retention.
- Hosting-log retention period.
- Governing jurisdiction.
- Final product names, flavors and launch order. No launch date is promised.
- Provider and intended frequency for launch communications.

## Legal review

Privacy and terms remain visibly labeled drafts with placeholders. Review
jurisdiction-dependent privacy rights, transfers, children's disclosures,
consent/storage treatment, limitations and jurisdiction before launch.
No purchase, refund or subscription policies apply to this prototype.
Vercel is identified as the host; logs may contain personal information.
No analytics, marketing pixels or third-party embeds are installed.
Optional consent choices are persistent and withdrawable; accepting does not
enable a tracker on this prototype. On phones the consent notice is in normal
document flow so it cannot obscure navigation or the signup keyboard area.

## Formulation and claims

Final format, ingredient amounts, serving sizes, safety, dental/GI behavior,
manufacturing and shipping stability require development and review.
Morning nootropic ingredients and evening magnesium are exploratory only.
No focus, sleep, clinical, hydration, recovery or safety benefits are promised.
There are no prices, reviews, ratings, quantities or available-stock claims.

## Creative assets

Original board crops are preserved and no longer used on the homepage:
hero 492×289 with stray headline text; morning 355×333 and evening 351×333 with
clipped headings; lifestyle 297×304 with baked copy/logo.
The new hero and flavor photographs are 1536×1024 AI concept illustrations,
served as responsive compressed WebP, with five clear letters in the hero logo.
Generation briefs and editable source-image locations are documented in
handoff/shift/generated/README.md.
They still require approval against final product and packaging before launch.
Do not treat the illustrated pouches as print-ready artwork. Replace with final
product photography once manufactured. A separate lifestyle shoot is optional;
the redesign currently reuses the morning still life.
The retained 1200×630 social card and SVG/PNG/ICO favicon set were inspected.
