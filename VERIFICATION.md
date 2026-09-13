# SHIFT conversion redesign — implementation and verification

## Delivery
- Repository: https://github.com/mickeycap/saltcandy
- Branch: feature/shift-conversion-redesign
- Implementation commit: 63382e87346da885fe979c976db6eb3a6db661f4
- Draft PR: https://github.com/mickeycap/saltcandy/pull/2
- Successful Vercel Preview: https://saltcandy-ovapbnqhg-jcapupusholdingsllc.vercel.app
- GitHub deployment 6417035812: environment Preview, state success.
- No production deployment, merge, DNS or account-setting changes were made.

## What changed
A conversion-focused editorial homepage with a large cream/plum hero, clear live
SHIFT wordmark, responsive day/dusk flavor photography, expandable concept
details, shorter philosophy and lifestyle sections, compact FAQ and lavender
signup section. Every primary CTA leads to the same launch signup.
The form remains an explicitly labeled demo; conversion uplift is not measured.

New photography replaces undersized board crops. The hero logo was regenerated
to show all five letters. Original references and crops are preserved.
Mobile signup navigation closes the menu; Escape returns focus. Consent choices
are equally prominent and can be reopened/withdrawn. On mobile the notice stays
in document flow so it does not cover essential controls.
Fixed empty site-origin fallback and misleading privacy copy about hosting logs.
Patched js-yaml 4.3.1 to 4.3.2.

## Pre-edit inspection
No applicable AGENTS.md was found in the repository or accessible ancestor
directories. Stack: TanStack Start, React 19, Vite 7, Nitro and Tailwind 4.
Initial remote checkout was clean, main at 6529dc7.
Read handoff/shift/START-HERE.md and inspected the board, desktop/mobile/logo
references and original hero/morning/evening/lifestyle images.
The requested shift-handoff path is named handoff/shift in the repository;
its public assets already live in public/shift.
The Desktop checkout and then the Documents checkout contained iCloud dataless
files which stalled reads. Final work was committed from /tmp/shift-conversion-repo,
a fresh checkout of the same connected repository. The Desktop work was untouched.

## Commands and actual results
| Command | Actual result |
| --- | --- |
| npm ci --cache /tmp/shift-npm-cache | Installed 154 packages. Initially found one high js-yaml advisory. |
| npm update js-yaml --cache /tmp/shift-npm-cache | Updated only js-yaml patch in lockfile. |
| npm audit --cache /tmp/shift-npm-cache | 0 vulnerabilities. |
| npm run typecheck | Passed, exit 0. |
| npm run build | Passed, exit 0; all four public routes prerendered. |
| npm run --if-present lint | Skipped: no lint script exists. |
| npm run --if-present test | Skipped: no unit-test script exists. |
| npm run dev -- --port 3102 --host 127.0.0.1 | Failed: EMFILE file-watcher limit. |
| PORT=3103 HOST=127.0.0.1 npm run start | Production server started successfully. |
| node scripts/verify-preview.mjs http://127.0.0.1:3103 | All route, metadata, noindex/header, sitemap, 404 and asset checks passed. |
| git diff --check | Passed. |
| Secret-pattern scan over src, public, compiled client assets | No matching key/private-key patterns. Not a comprehensive secret audit. |
| Lighthouse mobile against local build | Failed: unable to connect to Chrome. No new Lighthouse scores or field INP claimed. |
| HTTP preview smoke check against Vercel URL | Blocked by Vercel login redirect; returned login HTML rather than application. |
| HTTP to HTTPS preview request | 308 redirect to HTTPS verified. |
| git push feature/shift-conversion-redesign | Successful; Vercel Preview completed. |

Framework build emits unused external-import and ignored use-client warnings
from dependencies; these do not fail the build. CSS ~8.11 KB gzip; main runtime
~107.4 KB gzip; homepage chunk ~4.45 KB gzip.

## Browser verification
Compiled local build tested in the in-app browser:
- Viewports 360, 390, 768 and 1440px: no horizontal overflow.
- All four homepage images loaded; lazy images load when brought into view.
- Mobile open/close, Escape and signup CTA close behavior verified.
- Empty and malformed email show accessible inline errors.
- Valid synthetic email shows demo-only message; no real success claim.
- Accept, reject, manage, category toggles, reload persistence and withdrawal
  verified. No browser error logs observed during successful checks.
- FAQ expands and displays the answer.
- Privacy, terms and story render with unique titles and no mobile overflow.
- Custom 404 renders with branded recovery link and HTTP 404.
- Source inspection confirms no fetch/XHR/beacon or tracking integration in
  the signup/consent code; storage use is limited to consent. Full network
  interception was not available in this browser session.
- 1200×630 social image visually inspected. SVG favicon, ICO, Apple icon,
  robots and all responsive image endpoints return 200.
- Preview is protected: hosted page rendering, noindex/security headers and
  hosted interactions still need checking after Vercel login.

Desktop and mobile viewport screenshots are supplied with this report.
The browser full-page capture produced stitching artifacts; clean viewport
captures are provided instead.

## Image sizes and limitations
- Hero WebP: 640px 33.5 KB, 1200px 76.5 KB, 1536px 104.9 KB.
- Morning WebP: 480px 18.7 KB, 960px 51.3 KB.
- Evening WebP: 480px 21.9 KB, 960px 61.6 KB.
- 1536×1024 PNG source concepts in handoff/shift/generated.
- Built-in image-generation tool used; prompt briefs saved there.
- Generated visuals need final product/packaging approval before launch.
- Retained old hero contains clipped copy; product crops have clipped headings;
  old lifestyle has baked text. None is used on the redesigned homepage.

## Remaining launch blockers
Connect an authorized signup provider with a server-side handler and abuse
protection; confirm canonical domain and sitemap origin; supply entity/address,
contact details, retention and jurisdiction; complete legal and formulation/claims
reviews; approve actual packaging and final-product photography; measure preview
performance after authentication. See LAUNCH-BLOCKERS.md.

## Files changed
- Homepage: src/components/Hero.tsx, ProductConcepts.tsx, Philosophy.tsx,
  Lifestyle.tsx, LaunchSignup.tsx; src/styles.css.
- Navigation and conversion: Header.tsx, LaunchCta.tsx.
- Consent/privacy: CookieConsent.tsx, src/routes/privacy.tsx.
- Metadata/build: src/lib/site.ts, vite.config.ts.
- Dependency patch: package-lock.json.
- New graphics: public/shift/*-v2-*.webp and handoff/shift/generated/*.
- Documentation: README.md, LAUNCH-BLOCKERS.md, VERIFICATION.md.
- Repeatable HTTP checks: scripts/verify-preview.mjs.

