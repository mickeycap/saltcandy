/**
 * The S³ mark: a coral bolt over a coral flame, a cluster of violet salt
 * crystals, and a blue swell breaking across the base. Drawn as vector so it
 * stays crisp at tin size and hero size, and so every fill is a design token.
 *
 * Facets are separated by cream hairlines rather than outlines — the same way
 * the printed label separates plates.
 */

export function Emblem({
  className,
  title = 'The Salty Sour Suckers S-cubed mark: a lightning bolt over a coral flame, a cluster of salt crystals, and a breaking wave',
}: {
  className?: string
  /** Pass null for decorative use alongside visible text. */
  title?: string | null
}) {
  return (
    <svg
      viewBox="0 0 240 240"
      className={className}
      role={title ? 'img' : 'presentation'}
      aria-hidden={title ? undefined : true}
      aria-label={title ?? undefined}
    >
      {title ? <title>{title}</title> : null}

      {/* ---- sun rays ---- */}
      <g
        stroke="var(--color-coral)"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      >
        <path d="M156 120 178 96M168 136 198 122M174 155 206 152" />
        <path d="M84 120 62 96M72 136 42 122M66 155 34 152" />
      </g>

      {/* ---- flame / rising sun ---- */}
      <path
        d="M120 68c16 30 36 54 36 68 0 19-16 28-36 28s-36-9-36-28c0-14 20-38 36-68Z"
        fill="var(--color-coral)"
      />

      {/* ---- lightning bolt ---- */}
      <path
        d="M132 6 102 48h16l-7 30 29-40h-16l8-32Z"
        fill="var(--color-coral)"
        stroke="var(--color-cream)"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />

      {/* ---- crystal cluster ---- */}
      <g stroke="var(--color-cream)" strokeWidth="3" strokeLinejoin="round">
        {/* outer left */}
        <path d="M48 162 34 182v24h14Z" fill="var(--color-violet-deep)" />
        <path d="M48 162l20 20v24H48Z" fill="var(--color-violet)" />
        {/* outer right */}
        <path d="M192 162l14 20v24h-14Z" fill="var(--color-violet-deep)" />
        <path d="M192 162l-20 20v24h20Z" fill="var(--color-violet)" />
        {/* mid left */}
        <path d="M82 134 68 158l-4 48h18Z" fill="var(--color-violet-deep)" />
        <path d="M82 134l16 24 2 48H82Z" fill="var(--color-violet)" />
        {/* mid right */}
        <path d="M158 134l14 24 4 48h-18Z" fill="var(--color-violet-deep)" />
        <path d="M158 134l-16 24-2 48h18Z" fill="var(--color-violet)" />
        {/* central spire */}
        <path d="M120 96 106 130l-4 76h18Z" fill="var(--color-violet-deep)" />
        <path d="M120 96l14 34 4 76h-18Z" fill="var(--color-violet)" />
        {/* crown facet */}
        <path d="M120 96 106 130l14 17 14-17Z" fill="var(--color-violet-pale)" />
      </g>

      {/* ---- breaking swell ---- */}
      <path
        d="M16 206c8-16 34-20 58-10 30 12 66 8 102-12 18-10 32-6 38 2-10 14-30 24-58 30-40 8-98 8-124 2-10-3-18-6-16-12Z"
        fill="var(--color-deep-wave)"
      />
      <path
        d="M30 216c10-12 30-14 50-6 26 10 58 6 88-10 15-8 27-5 32 1-9 11-27 19-51 23-34 6-84 6-104 1-9-2-16-4-15-9Z"
        fill="var(--color-wave)"
      />
      <g
        stroke="var(--color-cream)"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      >
        <path d="M44 219c16-7 34-3 49 5" />
        <path d="M140 222c20-4 38-12 51-21" />
      </g>

      {/* ---- S³ monogram ---- */}
      <g
        fontFamily="var(--font-display), Georgia, serif"
        fontWeight="700"
        fill="var(--color-violet-deepest)"
        stroke="var(--color-cream)"
        strokeWidth="5"
        paintOrder="stroke"
        strokeLinejoin="round"
        textAnchor="middle"
      >
        <text x="114" y="202" fontSize="66">
          S
        </text>
        <text x="154" y="174" fontSize="32">
          3
        </text>
      </g>
    </svg>
  )
}
