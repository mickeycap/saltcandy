/**
 * The graphic language from the board: horizons, transitions, a day-to-night
 * band with offset semicircles. Used sparingly as a backdrop, never as UI.
 */
export function Horizon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 400"
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="xMidYMid slice"
      className={className}
    >
      <defs>
        <linearGradient id="shift-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--color-cream)" />
          <stop offset="0.55" stopColor="var(--color-citrus-soft)" />
          <stop offset="0.8" stopColor="var(--color-dusk-soft)" />
          <stop offset="1" stopColor="var(--color-dusk)" />
        </linearGradient>
      </defs>
      <rect width="800" height="400" fill="url(#shift-sky)" />
      <path d="M270 270a130 130 0 0 1 260 0Z" fill="var(--color-citrus)" />
      <path d="M310 270a130 130 0 0 0 260 0Z" fill="var(--color-cherry)" opacity="0.9" />
      <rect y="300" width="800" height="100" fill="var(--color-dusk)" opacity="0.55" />
    </svg>
  )
}
