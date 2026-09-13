import { createFileRoute } from '@tanstack/react-router'
import { LegalPage, Placeholder } from '../components/Prose'
import { pageHead } from '../lib/site'

export const Route = createFileRoute('/privacy')({
  head: () =>
    pageHead({
      title: 'Privacy policy',
      description:
        'How the SHIFT prelaunch website handles information, cookies and browser storage. Draft pending legal review.',
      path: '/privacy',
    }),
  component: PrivacyPage,
})

function PrivacyPage() {
  return (
    <LegalPage title="Privacy policy" updated="September 2026">
      <section>
        <h2>Who we are</h2>
        <p>
          This website is operated by <Placeholder>legal entity name and registered address</Placeholder>{' '}
          (“SHIFT”, “we”). It is a prelaunch site for products in development. Nothing on it is
          for sale.
        </p>
      </section>

      <section>
        <h2>Information we collect</h2>
        <p>
          <strong>Right now, the site collects no personal information.</strong>
        </p>
        <ul>
          <li>
            <strong>Launch-updates form.</strong> A prototype demo. It validates what you type in your
            browser and sends or stores nothing. No email provider is connected. Before the form
            goes live, this section will name the provider and explain retention.
          </li>
          <li>
            <strong>Server logs.</strong> Our hosting provider (<Placeholder>confirm: Vercel</Placeholder>)
            may keep short-lived request logs (IP address, user agent, pages requested) to operate
            and secure the service. We add no tracking to these logs.
          </li>
          <li>
            <strong>Contact.</strong> If you email us, we keep the correspondence for as long as
            needed to reply and for <Placeholder>retention period</Placeholder> afterwards.
          </li>
        </ul>
      </section>

      <section>
        <h2>Why we would collect it</h2>
        <p>
          Once the launch list is live, we will collect an email address only to send the launch
          updates you asked for, on the basis of your consent, which you can withdraw at any time.
          We will not sell it or share it with anyone other than the provider that sends the email.
        </p>
      </section>

      <section>
        <h2>Cookies and browser storage</h2>
        <p>
          The site sets <strong>no cookies</strong>. It stores one item in your browser,{' '}
          <code>shift.consent.v1</code> in <code>localStorage</code>: the cookie choice you made and
          when. That is strictly necessary to remember your choice, and it never leaves your browser.
        </p>
        <p>
          <strong>Optional categories (analytics and marketing) are disabled.</strong> No analytics
          script, pixel or advertising tool loads, whatever you choose in the banner. The banner and
          the footer’s “Cookie preferences” link exist so that any optional tool added later cannot
          load until you allow it, and rejecting keeps it off. You can change or withdraw your choice
          from the footer at any time.
        </p>
      </section>

      <section>
        <h2>Analytics, marketing and other tools</h2>
        <ul>
          <li>Analytics: none.</li>
          <li>Advertising or marketing pixels: none.</li>
          <li>Embedded third-party content (video, maps, social widgets): none.</li>
          <li>Fonts: served from this website, not a third-party font service.</li>
          <li>Email or form provider: none connected.</li>
        </ul>
        <p>Anything added before launch must be listed here first.</p>
      </section>

      <section>
        <h2>Retention</h2>
        <p>
          Your cookie choice stays in your browser until you withdraw it or clear site data. Hosting
          logs are retained for <Placeholder>confirm provider’s log retention</Placeholder>.
          Launch-list retention will be set when the provider is chosen.
        </p>
      </section>

      <section>
        <h2>Your rights and how to contact us</h2>
        <p>
          Depending on where you live, you may have rights to access, correct, delete or restrict
          personal information about you, and to withdraw consent. Contact{' '}
          <Placeholder>privacy contact email</Placeholder>. We will respond within the time the
          applicable law requires.
        </p>
      </section>

      <section>
        <h2>Jurisdiction-specific disclosures</h2>
        <p>
          To be reviewed before launch, depending on where SHIFT operates and sells:{' '}
          <Placeholder>GDPR/UK GDPR lawful basis and EU representative if applicable</Placeholder>;{' '}
          <Placeholder>CCPA/CPRA notice at collection and “Do Not Sell or Share” link if thresholds are met</Placeholder>;{' '}
          <Placeholder>children’s privacy statement (the site is not directed at children)</Placeholder>;{' '}
          <Placeholder>international transfer disclosures for the hosting and email providers</Placeholder>.
        </p>
      </section>

      <section>
        <h2>Changes</h2>
        <p>
          We will update this page when the site’s behaviour changes, and before any form collects
          data or any optional tool is enabled. The date at the top is the latest revision.
        </p>
      </section>
    </LegalPage>
  )
}
