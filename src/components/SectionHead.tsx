import { WaveRule } from './Motifs'

export function SectionHead({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string
  title: string
  lede?: string
}) {
  return (
    <div className="max-w-2xl">
      <p className="flex items-center gap-3 stamp text-accent-text">
        {eyebrow}
        <WaveRule className="h-3 w-16 text-info" />
      </p>
      <h2 className="litho-soft mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">
        {title}
      </h2>
      {lede ? (
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          {lede}
        </p>
      ) : null}
    </div>
  )
}
