/**
 * Product concepts. These are development directions, not SKUs: no prices,
 * no stock, no serving sizes, no ingredient quantities. Copy here must stay
 * within the claims guidance in LAUNCH-BLOCKERS.md. The "Exploring" label on
 * the card supplies the hedge, so functionDirection is a bare noun phrase.
 */
export type ConceptTone = 'morning' | 'evening'

export type Concept = {
  slug: string
  name: string
  moment: string
  flavorDirection: string
  /** Deliberately phrased as exploration, never as a benefit. */
  functionDirection: string
  description: string
  tone: ConceptTone
  status: 'In development'
  image: {
    webp: string
    webpSmall: string
    png: string
    width: number
    height: number
    alt: string
  }
}

export const CONCEPTS: readonly Concept[] = [
  {
    slug: 'morning-shift',
    name: 'Morning Shift',
    moment: 'First pause of the day',
    flavorDirection: 'Salty lemon + ginger',
    functionDirection: 'Nootropic ingredients',
    description:
      'Bright and a little salty, with ginger warmth on the finish. For the moment before the day gets loud.',
    tone: 'morning',
    status: 'In development',
    image: {
      webp: '/shift/morning-product.webp',
      webpSmall: '/shift/morning-product-sm.webp',
      png: '/shift/morning-product.png',
      width: 355,
      height: 333,
      alt: 'Morning Shift concept: a cream pouch with a citrus horizon graphic beside lemon, ginger and golden hard candies',
    },
  },
  {
    slug: 'evening-shift',
    name: 'Evening Shift',
    moment: 'Winding down',
    flavorDirection: 'Tart cherry',
    functionDirection: 'Magnesium and other evening ingredients',
    description:
      'Deep, tart and unhurried. For the moment the day lets go of you.',
    tone: 'evening',
    status: 'In development',
    image: {
      webp: '/shift/evening-product.webp',
      webpSmall: '/shift/evening-product-sm.webp',
      png: '/shift/evening-product.png',
      width: 351,
      height: 333,
      alt: 'Evening Shift concept: a deep plum pouch with a lavender horizon graphic beside cherries and dark red hard candies',
    },
  },
]
