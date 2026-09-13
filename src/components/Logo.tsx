/**
 * SHIFT identity, rebuilt as live type + an editable SVG symbol.
 *
 * The board's generated wordmark swaps the "I" for the symbol, which is what
 * obscures it. Here all five letters stay as real type, and the offset
 * semicircles (citrus rising over cherry, the day-to-night horizon) sit
 * beside the word as the symbol. Both recolour with the theme.
 */

type Tone = 'ink' | 'cream'

export function Symbol({ className, tone = 'ink' }: { className?: string; tone?: Tone }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={className} focusable="false">
      {/* upper semicircle: citrus, centred */}
      <path d="M12 33a20 20 0 0 1 40 0Z" fill="var(--color-citrus)" />
      {/* lower semicircle: cherry, offset right, the "shift" */}
      <path
        d="M18 33a20 20 0 0 0 40 0Z"
        fill={tone === 'cream' ? 'var(--color-dusk)' : 'var(--color-cherry)'}
      />
    </svg>
  )
}

export function Wordmark({ className = '', tone = 'ink' }: { className?: string; tone?: Tone }) {
  return (
    <span
      className={`font-heading font-bold leading-none tracking-[-0.06em] ${
        tone === 'cream' ? 'text-cream' : 'text-ink'
      } ${className}`}
    >
      SHIFT
    </span>
  )
}

export function Logo({
  className = '',
  tone = 'ink',
  size = 'md',
}: {
  className?: string
  tone?: Tone
  size?: 'md' | 'lg'
}) {
  const symbol = size === 'lg' ? 'h-9 w-9' : 'h-7 w-7'
  const word = size === 'lg' ? 'text-3xl' : 'text-[1.45rem]'
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Symbol className={symbol} tone={tone} />
      <Wordmark className={word} tone={tone} />
    </span>
  )
}
