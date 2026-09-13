import { Section } from './Section'

const MOMENTS = ['The first coffee', 'Between meetings', 'After the run', 'The last light of the day']

export function Lifestyle() {
  return (
    <Section id="moments">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Prototype lifestyle crop (297×304) with headline and logo baked in.
            Shown small on purpose until a text-free render replaces it. */}
        <figure className="order-2 mx-auto w-full max-w-[297px] overflow-hidden rounded-card bg-surface lg:order-1 lg:justify-self-end">
          <picture>
            <source type="image/webp" srcSet="/shift/social-moment-sm.webp 148w, /shift/social-moment.webp 297w" sizes="297px" />
            <img
              src="/shift/social-moment.png"
              width={297}
              height={304}
              alt="Three SHIFT hard candies, two golden and one cherry red, on a stone surface in soft light"
              loading="lazy"
              decoding="async"
              className="w-full"
            />
          </picture>
        </figure>
        <div className="order-1 lg:order-2">
          <p className="mb-3 text-sm font-semibold tracking-wide text-link uppercase">Moments</p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem]">Make room for a moment.</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            A little candy, a short pause. Not a ritual, not a regimen. Just
            something small and good at the points in the day that call for one.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {MOMENTS.map((m) => (
              <li key={m} className="flex items-center gap-3 rounded-xl bg-surface px-4 py-3 font-medium text-ink">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-citrus" aria-hidden="true" />
                {m}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
