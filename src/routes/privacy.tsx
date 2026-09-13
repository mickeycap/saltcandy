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
          (“SHIFT”, “we”). It is a prelaunch website describing products in development. Nothing on it
          is for sale.
        </p>
      </section>

      <section>
        <h2>Information we collect</h2>
        <p>
          <strong>The demo signup does not send or store your email address.</strong> Hosting request logs may contain personal information, as described below.
        </p>
        <ul>
          <li>
            <strong>Launch-updates form.</strong> The form on the homepage is a prototype demo. It
            validates what you type in your browser and does not send or store your email address
            anywhere. No email provider is connected. When one is, this section will be updated to
            name the provider and explain retention before the form goes live.
          </li>
          <li>
            <strong>Server logs.</strong> Our hosting provider, Vercel,
            may keep standard request logs (such as IP address, user agent and the pages
            requested) for operating and securing the service. We do not add tracking to these logs.
          </li>
          <li>
            <strong>Contact.</strong> If you email us, we will hold that correspondence for as long as
            needed to reply and for <Placeholder>retention period</Placeholder> afterwards.
          </li>
        </ul>
      </section>

      <section>
        <h2>Why we would collect it</h2>
        <p>
          Once the launch list is live, the only purpose of collecting an email address will be to send
          launch updates you asked for, on the basis of your consent, which you can withdraw at any
          time. We will not sell it or share it with anyone other than the email provider that sends the
          message on our behalf.
        </p>
      </section>

      <section>
        <h2>Cookies and browser storage</h2>
        <p>
          The site sets <strong>no cookies</strong>. It uses one item of browser storage,{' '}
          <code>shift.consent.v1</code> in <code>localStorage</code>, which records the cookie choice you
          made and when. That is strictly necessary in order to remember your choice, and it never
          leaves your browser.
        </p>
        <p>
          <strong>Optional categories — analytics and marketing — are currently disabled.</strong> No
          analytics script, pixel or advertising tool is loaded, whatever you choose in the cookie
          banner. The banner and the “Cookie preferences” link in the footer exist so that, if optional
          tools are ever added, they cannot load until you allow them, and rejecting keeps them off.
          You can change or withdraw your choice at any time from the footer.
        </p>
      </section>

      <section>
        <h2>Analytics, marketing and other tools</h2>
        <ul>
          <li>Analytics: none.</li>
          <li>Advertising or marketing pixels: none.</li>
          <li>Embedded third-party content (video, maps, social widgets): none.</li>
          <li>Fonts: served from this website, not from a third-party font service.</li>
          <li>Email or form provider: none connected.</li>
        </ul>
        <p>Any of these that are added before launch must be listed here first.</p>
      </section>

      <section>
        <h2>Retention</h2>
        <p>
          Your cookie choice stays in your browser until you withdraw it or clear site data. Hosting
          request logs are retained by the provider for <Placeholder>confirm provider’s log retention</Placeholder>.
          Launch-list retention will be defined when the provider is chosen.
        </p>
      </section>

      <section>
        <h2>Your rights and how to contact us</h2>
        <p>
          Depending on where you live, you may have rights to access, correct, delete or restrict the
          use of personal information about you, and to withdraw consent. To make a request, contact{' '}
          <Placeholder>privacy contact email</Placeholder>. We will respond within the time required by
          the law that applies to you.
        </p>
      </section>

      <section>
        <h2>Jurisdiction-specific disclosures</h2>
        <p>
          The following require review before launch and depend on where SHIFT operates and sells:{' '}
          <Placeholder>GDPR/UK GDPR lawful basis and EU representative if applicable</Placeholder>;{' '}
          <Placeholder>CCPA/CPRA “notice at collection” and “Do Not Sell or Share” link if thresholds are met</Placeholder>;{' '}
          <Placeholder>children’s privacy statement (the site is not directed at children)</Placeholder>;{' '}
          <Placeholder>international transfer disclosures for the hosting and email providers</Placeholder>.
        </p>
      </section>

      <section>
        <h2>Changes</h2>
        <p>
          We will update this page when the site’s behaviour changes — in particular before any form
          begins collecting data or any optional tool is enabled. The date at the top reflects the
          latest revision.
        </p>
      </section>
    </LegalPage>
  )
}
