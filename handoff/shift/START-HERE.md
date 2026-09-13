# SHIFT prototype handoff

Build the website in the existing repository with Claude Code. Do not overwrite unrelated work or change frameworks unnecessarily. Use Git for source and Vercel preview deployments for review; do not promote to production automatically.

## Prompt for Claude Code

Read this entire document. Inspect references/shift-brand-board.png before coding. Build a responsive SHIFT ecommerce prototype matching that visual direction, not a generic supplement storefront. Inspect the existing stack first and preserve it. Use the included raster crops for prototype imagery, but recreate all navigation, headings, buttons, cards, responsive layout and accessibility in code. Do not use a screenshot as the website. Do not embed the desktop screenshot on mobile.

Build: header, desktop/mobile hero, Morning Shift and Evening Shift product cards, a short brand-story section, and footer. Make product selection and a demo cart interactive with clearly labeled prototype behavior. Do not implement payment or invent prices, reviews, certifications, clinical claims, final formulas or serving sizes. Do not create an account system or subscription checkout. Keep the build scoped to a prototype.

Treat the board as visual inspiration, not an exact typographic source: the generated SHIFT wordmark appears to obscure its I. Ensure the implemented logo unmistakably reads SHIFT, with all five letters. Recreate a simple SVG or live-type wordmark and offset-semicircle symbol. Keep logo shapes editable. Use screenshots at desktop and mobile widths to check visual fidelity, overflow, keyboard navigation and contrast. Run available lint, typecheck and build scripts; report actual results. Use a Vercel preview for stakeholder review only when the deployment workflow is configured and authorized.

## Source of truth

- Brand: SHIFT. Tagline: Candy for moments.
- Candy first, function second. Adult, warm, intentional, quietly playful. Not pharmaceutical, childish, aggressive sports branding, or periodic-table themed.
- Morning Shift: salty lemon + ginger. Nootropic formulation is exploratory, not a finalized claim.
- Evening Shift: tart cherry. Magnesium-led formulation is exploratory, not a proven sleep benefit.
- Hard/sour candy visual concept; final format, ingredients, doses and serving sizes remain under development.
- Do not design or market around token/placebo dosing. Do not imply candy replaces water, sleep or treatment.
- Do not inherit 11 Candies, Na, Celtic Tide or RESURGE branding.

## Visual tokens (starting values from board)

Cream #F8F4E9; Ink #2E1B3D; Citrus #FAB223; Cherry #882C3F; Dusk #C9B8E6.
Use Ink text on Cream for primary reading. Citrus is an accent rather than small body text on Cream. Use Geist Bold or a comparable clean grotesk for headings; Inter Regular for body. The generated image is not an exact font specimen.
Generous whitespace, thin neutral separators, soft card corners, substantial typography, understated pill buttons. Desktop content max width approximately 1200–1280px, with responsive gutters. Use a two-column desktop hero and stack naturally on mobile. Avoid shrinking entire layouts to fit.

## Files and quality limits

references/shift-brand-board.png is the unchanged master render.
public/shift contains exact raster crops from that board, not independently rendered high-resolution masters. Crops preserve baked-in backgrounds and sometimes copy. Never call these transparent cutouts, vectors or print-ready files. hero-scene.png avoids most headline text, but package labels remain baked in. Reference panels are not website UI assets.

Use morning-product.png and evening-product.png for early prototype product cards; source resolution is limited. Request dedicated larger product renders and a text-free hero after layout approval. Keep frontend text outside images. Do not remove or rewrite package labels through CSS tricks. Avoid CSS background removal or pretending white backgrounds are transparent.

Suggested next production asset brief: separately render matching Morning Shift pouch, Evening Shift pouch, two-pouch text-free lifestyle hero and single candy macro images. Match the approved artwork and colors; request explicit transparent product cutouts where needed. Final packaging requires separate artwork and review.

## Workflow

1. Extract this folder into the repository as a handoff reference.
2. Copy public/shift to the application's static public directory.
3. Give Claude Code the prompt above and reference image path.
4. Review locally, then use a Git branch and Vercel preview workflow.
5. Keep final creatives in the repo; replace prototype crops with approved assets before launch.

Project note: SHIFT prototype uses the approved cream/citrus and plum/lavender brand direction; current images are exact board crops, with production graphics and functional formulas still pending.
