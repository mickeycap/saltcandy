/**
 * Product concepts. These are development directions, not SKUs: no prices,
 * no stock, no serving sizes, no ingredient quantities. Copy here must stay
 * within the claims guidance in LAUNCH-BLOCKERS.md.
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
    moment: 'For the first pause of the day',
    flavorDirection: 'Salty lemon + ginger',
    functionDirection: 'Nootropic ingredients under exploration',
    description:
      'Bright, a little salty, with ginger warmth on the finish. A candy for the moment before the day gets loud.',
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
    moment: 'For winding down',
    flavorDirection: 'Tart cherry',
    functionDirection: 'Magnesium and other evening ingredients under exploration',
    description:
      'Deep, tart and unhurried. A candy for the moment the day finally lets go of you.',
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
