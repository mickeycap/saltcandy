import type { ReactNode } from 'react'

export function Section({
  id,
  children,
  className = '',
  tone = 'plain',
}: {
  id?: string
  children: ReactNode
  className?: string
  tone?: 'plain' | 'surface' | 'ink'
}) {
  const bg =
    tone === 'surface' ? 'bg-surface' : tone === 'ink' ? 'bg-ink text-cream' : ''
  return (
    <section id={id} className={`py-16 sm:py-24 ${bg} ${className}`}>
      <div className="wrap">{children}</div>
    </section>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = 'left',
  tone = 'ink',
}: {
  eyebrow?: string
  title: string
  lede?: string
  align?: 'left' | 'center'
  tone?: 'ink' | 'cream'
}) {
  const isCream = tone === 'cream'
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow ? (
        <p
          className={`mb-3 text-sm font-semibold tracking-wide uppercase ${
            isCream ? 'text-dusk' : 'text-link'
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`text-3xl sm:text-4xl lg:text-[2.75rem] ${isCream ? 'text-cream' : 'text-ink'}`}>
        {title}
      </h2>
      {lede ? (
        <p className={`mt-4 text-lg leading-relaxed ${isCream ? 'text-cream/85' : 'text-muted-foreground'}`}>
          {lede}
        </p>
      ) : null}
    </div>
  )
}
