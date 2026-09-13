import type { ReactNode } from 'react'

/** Shell for legal/draft pages: one H1, readable measure, draft banner. */
export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string
  updated: string
  children: ReactNode
}) {
  return (
    <article className="wrap py-14 sm:py-20">
      <div className="max-w-3xl">
        <p className="mb-3 text-sm font-semibold tracking-wide text-link uppercase">Draft</p>
        <h1 className="text-4xl sm:text-5xl">{title}</h1>
        <p className="mt-3 text-sm text-muted-foreground">Last updated: {updated}</p>

        <div
          role="note"
          className="mt-8 rounded-card border border-cherry/30 bg-cherry/5 p-4 text-sm leading-relaxed text-ink"
        >
          <strong className="font-semibold">Draft — not yet legally reviewed.</strong> This page
          describes the prototype website as actually built. Items shown as{' '}
          <Placeholder>like this</Placeholder> are business or legal details that still need an
          owner decision and review before launch.
        </div>

        <div className="prose-shift mt-10 space-y-8 leading-relaxed text-ink [&_h2]:mt-10 [&_h2]:text-2xl [&_h3]:text-lg [&_h3]:font-semibold [&_p]:mt-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
          {children}
        </div>
      </div>
    </article>
  )
}

export function Placeholder({ children }: { children: ReactNode }) {
  return (
    <mark className="rounded bg-citrus/40 px-1 py-0.5 font-medium text-ink">
      [Draft: {children}]
    </mark>
  )
}
