import type { Accent } from './catalog'

/**
 * Per-flavour accent classes. Tailwind cannot see interpolated class names, so
 * every accent maps to a static record of utilities.
 *
 * `text` and `deepBg` are the contrast-safe members of each family: accent text
 * sits on cream at AA, and cream text sits on `deepBg` at AA. The raw `fill` is
 * only ever used for shapes — swatches, bars, rules — never behind small text.
 */
export type AccentClasses = {
  /** AA-safe accent text on cream. */
  text: string
  /** Raw accent as a shape fill. */
  fill: string
  /** Raw accent as a border. */
  border: string
  /** Dark accent surface; pair with cream text. */
  deepBg: string
  /** Palest accent tint, for card bands. */
  tint: string
}

export const ACCENTS: Record<Accent, AccentClasses> = {
  violet: {
    text: 'text-violet-ink',
    fill: 'bg-violet',
    border: 'border-violet',
    deepBg: 'group-hover:bg-violet-deep',
    tint: 'bg-violet-pale',
  },
  coral: {
    text: 'text-coral-ink',
    fill: 'bg-coral',
    border: 'border-coral',
    deepBg: 'group-hover:bg-coral-ink',
    tint: 'bg-coral-pale',
  },
  wave: {
    text: 'text-wave-ink',
    fill: 'bg-wave',
    border: 'border-wave',
    deepBg: 'group-hover:bg-wave-ink',
    tint: 'bg-wave-pale',
  },
  'deep-wave': {
    text: 'text-deep-wave-ink',
    fill: 'bg-deep-wave',
    border: 'border-deep-wave',
    deepBg: 'group-hover:bg-deep-wave-ink',
    tint: 'bg-wave-pale',
  },
}
