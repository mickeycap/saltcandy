import { ACCENTS } from '../lib/accents'
import { formatMoney, type Product } from '../lib/catalog'

function Salinity({ level, fill }: { level: number; fill: string }) {
  return (
    <p
      className="rule absolute top-3 right-3 flex items-center gap-1.5 rounded-tin bg-cream px-2 py-1.5"
      aria-label={`Salinity ${level} out of 5`}
    >
      <span className="stamp-tight text-ink">Salinity {level}/5</span>
      <span className="flex gap-[2px]" aria-hidden="true">
        {[1, 2, 3, 4, 5].map((step) => (
          <span
            key={step}
            className={`h-2 w-1 border border-ink ${
              step <= level ? fill : 'bg-transparent'
            }`}
          />
        ))}
      </span>
    </p>
  )
}

function Caffeine({ mg }: { mg: number }) {
  const caffeinated = mg > 0
  return (
    <p
      className={`rule mt-3 w-fit rounded-tin px-2.5 py-1.5 stamp text-ink ${
        caffeinated ? 'bg-coral-pale' : 'bg-surface-raised'
      }`}
    >
      {caffeinated ? `${mg}mg caffeine` : 'Caffeine-free'}
    </p>
  )
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="px-2 py-2.5 text-center">
      <dt className="stamp text-subtle-foreground">{label}</dt>
      <dd className="mt-1 font-mono text-sm font-medium text-ink">{value}</dd>
    </div>
  )
}

export function FlavorCard({ product }: { product: Product }) {
  const accent = ACCENTS[product.accent]
  const { electrolytes: e } = product

  return (
    <article className="group rule flex w-full flex-col rounded-tin bg-surface transition-[transform,box-shadow] duration-150 ease-out hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_var(--color-ink)] motion-reduce:hover:translate-none">
      {/* ---- image plate ---- */}
      <div className={`relative border-b-2 border-border ${accent.tint}`}>
        <img
          src={product.image.url}
          alt={product.image.altText}
          width={product.image.width}
          height={product.image.height}
          loading="lazy"
          decoding="async"
          className={`aspect-square w-full object-cover ${
            product.available ? '' : 'opacity-40 saturate-50'
          }`}
        />
        <Salinity level={product.salinity} fill={accent.fill} />
      </div>

      {/* ---- copy ---- */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className={`font-display text-2xl font-semibold ${accent.text}`}>
          {product.title}
        </h3>
        <Caffeine mg={product.caffeineMg} />
        <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
          {product.blurb}
        </p>

        {/* ---- mono spec strip ---- */}
        <dl className="rule mt-5 grid grid-cols-3 divide-x-2 divide-ink rounded-tin bg-surface-raised">
          <Spec label="Na" value={`${e.sodiumMg}mg`} />
          <Spec label="K" value={`${e.potassiumMg}mg`} />
          <Spec label="Mg" value={`${e.magnesiumMg}mg`} />
        </dl>

        {/* ---- price + action ---- */}
        <div className="mt-5 flex items-center justify-between gap-4">
          <p className="flex items-baseline gap-2">
            <span className="font-mono text-lg font-medium text-ink">
              {formatMoney(product.price)}
            </span>
            {product.compareAtPrice ? (
              <span className="font-mono text-sm text-subtle-foreground line-through">
                {formatMoney(product.compareAtPrice)}
              </span>
            ) : null}
          </p>

          {product.available ? (
            <button
              type="button"
              className={`rule rounded-tin bg-ink px-4 py-2.5 stamp text-on-ink transition-colors duration-150 ${accent.deepBg}`}
            >
              Add tin
              <span className="sr-only"> — {product.title}</span>
            </button>
          ) : (
            <button
              type="button"
              disabled
              className="rule cursor-not-allowed rounded-tin bg-ink px-4 py-2.5 stamp text-on-ink opacity-40"
            >
              Sold out
              <span className="sr-only"> — {product.title}</span>
            </button>
          )}
        </div>
      </div>
    </article>
  )
}
