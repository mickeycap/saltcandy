import { createFileRoute } from '@tanstack/react-router'
import { LegalPage, Placeholder } from '../components/Prose'
import { pageHead } from '../lib/site'

export const Route = createFileRoute('/terms')({
  head: () =>
    pageHead({
      title: 'Terms and conditions',
      description:
        'Terms for using the SHIFT prelaunch website, including development-stage product information. Draft pending legal review.',
      path: '/terms',
    }),
  component: TermsPage,
})

function TermsPage() {
  return (
    <LegalPage title="Terms and conditions" updated="September 2026">
      <section>
        <h2>About these terms</h2>
        <p>
          These terms cover your use of this website, operated by{' '}
          <Placeholder>legal entity name</Placeholder> (“SHIFT”, “we”). By using the site you agree
          to them. They cover the website only: <strong>no products are sold here</strong>, so there
          are no purchase, refund, shipping or subscription terms. Those will be written and
          reviewed before anything is sold.
        </p>
      </section>

      <section>
        <h2>Development-stage information</h2>
        <p>
          Everything on this site about SHIFT products (names, flavours, ingredients, formats,
          packaging, imagery) describes concepts in development. It is provided so you can follow
          along, not as a specification, an offer or a promise of what will launch. Ingredients,
          amounts, formats and serving sizes are undetermined and may change or be dropped.
        </p>
        <p>
          We do not claim that any SHIFT product treats, prevents or affects any health condition,
          or improves focus, sleep, hydration, recovery or anything else. Nothing here is medical,
          nutritional or dental advice. Functional ingredients are mentioned as areas of exploration
          only.
        </p>
      </section>

      <section>
        <h2>Using the site</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the site unlawfully, or in a way that could damage, disable or overload it.</li>
          <li>Attempt unauthorised access to any part of the site or its infrastructure.</li>
          <li>Scrape, harvest or bulk-collect content or data from the site.</li>
          <li>Submit false information or impersonate anyone through any form on the site.</li>
        </ul>
      </section>

      <section>
        <h2>Intellectual property</h2>
        <p>
          The SHIFT name, wordmark, symbol, tagline, packaging designs, copy and images belong to{' '}
          <Placeholder>legal entity name</Placeholder> or are used with permission. You may view the
          site and share links to it. You may not reproduce, modify or reuse its content commercially
          without written permission.
        </p>
      </section>

      <section>
        <h2>Prototype status and availability</h2>
        <p>
          This is a prelaunch prototype. We may change, suspend or remove any part of it at any time
          without notice, and do not guarantee it will be available or error-free.
        </p>
      </section>

      <section>
        <h2>Limitation of liability</h2>
        <p>
          To the extent the applicable law allows, SHIFT is not liable for any loss arising from your
          use of, or reliance on, this website or its content. Nothing here limits liability that
          cannot lawfully be limited.{' '}
          <Placeholder>Legal review needed: limitation wording for the governing jurisdiction</Placeholder>
        </p>
      </section>

      <section>
        <h2>Governing law</h2>
        <p>
          <Placeholder>Governing law and jurisdiction: owner decision required, not yet determined</Placeholder>
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          Questions about these terms: <Placeholder>contact email</Placeholder>.
        </p>
      </section>
    </LegalPage>
  )
}
