import { createFileRoute } from '@tanstack/react-router'
import { LaunchCta } from '../components/LaunchCta'
import { Horizon } from '../components/Horizon'
import { pageHead } from '../lib/site'

export const Route = createFileRoute('/our-story')({
  head: () =>
    pageHead({
      title: 'Our story',
      description:
        'Why SHIFT is starting with one excellent candy, and the philosophy behind it: candy first, function second.',
      path: '/our-story',
    }),
  component: OurStoryPage,
})

function OurStoryPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        {/* Backdrop kept clear of the headline: right-hand band on wide screens,
            soft full-width wash on small ones. */}
        <div className="absolute inset-y-0 right-0 -z-10 w-full overflow-hidden opacity-40 lg:w-[46%] lg:opacity-70" aria-hidden="true">
          <Horizon className="h-full w-full" />
        </div>
        <div className="wrap pt-16 pb-12 sm:pt-24 sm:pb-16">
          <p className="mb-3 text-sm font-semibold tracking-wide text-link uppercase">Our story</p>
          <h1 className="max-w-3xl text-4xl sm:text-5xl lg:text-6xl">
            We wanted a candy that fit the day. So we started making one.
          </h1>
        </div>
      </section>

      <div className="wrap grid gap-12 pb-20 lg:grid-cols-[1fr_320px] lg:gap-16">
        <div className="max-w-2xl space-y-8 text-lg leading-relaxed text-ink">
          <p>
            Most days have a few small hinges: the first coffee, the walk
            between two meetings, the minute after a workout, the point in the
            evening where you finally stop. SHIFT began as a simple question —
            what if there were a candy that belonged in those moments?
          </p>
          <h2 className="pt-2 text-2xl sm:text-3xl">Candy first.</h2>
          <p>
            That question has a trap in it. It’s easy to make a “functional”
            candy that nobody would choose as a candy. We decided early that
            taste isn’t a feature to balance against the rest — it’s the
            entry ticket. If Morning Shift isn’t a genuinely good salty
            lemon-ginger candy, the rest of the idea doesn’t get to exist.
          </p>
          <h2 className="pt-2 text-2xl sm:text-3xl">Function second — and honest.</h2>
          <p>
            We’re exploring nootropic ingredients for the morning and magnesium
            and other evening-oriented ingredients for the night. What we’re
            not doing is sprinkling in a trace of something so the label can
            say a word. Either an ingredient can be present at an amount that
            could matter in a practical serving, or it doesn’t go in. Until a
            formulation is finished and reviewed, we won’t claim it does
            anything at all — and you should hold us to that.
          </p>
          <h2 className="pt-2 text-2xl sm:text-3xl">Worked out properly.</h2>
          <p>
            Simple ingredients. Real attention to how a candy behaves — for
            teeth, for stomachs, for a parcel sitting on a hot doorstep. These
            are the things we’re working through right now, and they may
            change the final format. Hard and sour candy is where we’re
            starting; if feasibility, taste, dosing, safety or shipping
            stability say otherwise, we’ll follow the evidence.
          </p>
          <h2 className="pt-2 text-2xl sm:text-3xl">One at a time.</h2>
          <p>
            The plan is unglamorous on purpose: prove one excellent candy,
            introduce the second when development and cost make sense, then
            grow into a small collection for different moments. Refills and
            subscriptions might come later. They aren’t on offer today, and
            neither is anything else — this is a site about something being
            made, not something being sold.
          </p>
        </div>

        <aside className="h-fit rounded-card bg-surface p-6 lg:sticky lg:top-24">
          <p className="font-heading text-xl font-bold text-ink">Follow along</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            One email when there’s something real to try. That’s the whole
            list.
          </p>
          <LaunchCta className="mt-5 w-full" />
        </aside>
      </div>
    </>
  )
}
