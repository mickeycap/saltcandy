/**
 * Engraved motif set lifted from the emblem: bolt, sparkle, sun rays, wave
 * lines, crystal facets. Used sparingly as printers' ornaments between
 * sections — never as wallpaper.
 */

type MotifProps = {
  className?: string
}

export function Bolt({ className }: MotifProps) {
  return (
    <svg viewBox="0 0 24 40" fill="none" aria-hidden="true" className={className}>
      <path
        d="M14.5 1 2 22.5h7.5L8 39 22 16.5h-7.4L14.5 1Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function Sparkle({ className }: MotifProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M12 0c.7 6.6 4.7 10.6 11.3 11.3v1.4C16.7 13.4 12.7 17.4 12 24h-1.4C9.9 17.4 5.9 13.4-.7 12.7v-1.4C5.9 10.6 9.9 6.6 10.6 0H12Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function Crystal({ className }: MotifProps) {
  return (
    <svg viewBox="0 0 32 28" fill="none" aria-hidden="true" className={className}>
      <path
        d="M16 1 8 11l8 16 8-16-8-10Zm0 0-8 10h16L16 1ZM2 14l6-3 8 16L2 14Zm28 0-6-3-8 16 14-13Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/** The wave rule — three engraved swells, as on the label margins. */
export function WaveRule({ className }: MotifProps) {
  return (
    <svg
      viewBox="0 0 240 24"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="none"
      className={className}
    >
      <path
        d="M0 12c15 0 15-8 30-8s15 8 30 8 15-8 30-8 15 8 30 8 15-8 30-8 15 8 30 8 15-8 30-8 15 8 30 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M0 20c15 0 15-8 30-8s15 8 30 8 15-8 30-8 15 8 30 8 15-8 30-8 15 8 30 8 15-8 30-8 15 8 30 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity=".45"
      />
    </svg>
  )
}

export function SunRays({ className }: MotifProps) {
  return (
    <svg viewBox="0 0 64 36" fill="none" aria-hidden="true" className={className}>
      <path d="M4 34a28 28 0 0 1 56 0" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
        <path d="M32 1V-7M13 8 7 2m44 6 6-6M2 22l-8-3m62 3 8-3" />
      </g>
    </svg>
  )
}

/** Printers' ornament: bolt flanked by tapering rules, as under the wordmark. */
export function BoltDivider({ className }: MotifProps) {
  return (
    <svg
      viewBox="0 0 200 32"
      fill="none"
      aria-hidden="true"
      className={className}
      role="presentation"
    >
      <path d="M6 15h58l-6 2H6v-2Z" fill="currentColor" opacity=".7" />
      <path d="M22 22h42l-5 1.6H22V22Z" fill="currentColor" opacity=".45" />
      <path d="M194 15h-58l6 2h52v-2Z" fill="currentColor" opacity=".7" />
      <path d="M178 22h-42l5 1.6h37V22Z" fill="currentColor" opacity=".45" />
      <path d="M104 2 92 19h6.5l-1.5 12 12-17h-6.4L104 2Z" fill="currentColor" />
    </svg>
  )
}
