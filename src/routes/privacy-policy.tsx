import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | WashingSolutionSG" },
      { name: "description", content: "Read the WashingSolutionSG Privacy Policy — how we collect, use and protect your personal data under Singapore's Personal Data Protection Act (PDPA)." },
      { property: "og:title", content: "Privacy Policy | WashingSolutionSG" },
      { property: "og:description", content: "How WashingSolutionSG collects, uses and protects your personal data under Singapore's PDPA." },
      { property: "og:type", content: "website" },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={<>Privacy <span className="shine-text">Policy</span></>}
        description="This Privacy Policy explains how WashingSolutionSG collects, uses, discloses and protects your personal data in accordance with Singapore's Personal Data Protection Act 2012 (PDPA)."
      />

      <section className="mx-auto max-w-4xl px-4 py-16 md:px-6">
        <div className="prose-legal space-y-8 text-neutral-800">
          <p className="text-sm text-neutral-500">Last updated: 24 July 2026</p>

          <Block title="1. Who We Are">
            <p>
              WashingSolutionSG ("we", "us", "our") is a washing machine repair service
              operating in Singapore. This Privacy Policy applies to personal data
              collected through our website, WhatsApp, phone calls, email
              (washingsolutionsg@gmail.com) and in-person interactions with our
              technicians.
            </p>
          </Block>

          <Block title="2. Personal Data We Collect">
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Contact details:</strong> name, phone number, email address, WhatsApp number.</li>
              <li><strong>Service details:</strong> home or premises address, washing machine brand and model, description of the fault.</li>
              <li><strong>Payment details:</strong> payment method and transaction reference (we do not store full card numbers).</li>
              <li><strong>Website usage data:</strong> IP address, browser type, pages visited, time on site, referral source — collected via cookies and analytics tools.</li>
              <li><strong>Communication records:</strong> messages, call logs and email correspondence with our team.</li>
            </ul>
          </Block>

          <Block title="3. How We Use Your Personal Data">
            <p>We use your personal data to:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Schedule, deliver and follow up on your washing machine repair.</li>
              <li>Contact you regarding bookings, quotations, parts availability and warranty.</li>
              <li>Process payments and issue receipts or invoices.</li>
              <li>Improve our website, services and customer experience.</li>
              <li>Send occasional service reminders or promotional messages (only if you've opted in).</li>
              <li>Comply with our legal obligations under Singapore law.</li>
            </ul>
          </Block>

          <Block title="4. Cookies & Analytics">
            <p>
              Our website uses cookies and third-party analytics tools including
              <strong> Google Analytics</strong>, <strong>Google Ads Conversion Tracking</strong>
              and <strong>Microsoft Clarity</strong> to understand how visitors interact
              with our site. These tools may collect anonymised usage data such as
              pageviews, clicks and session recordings. You may disable cookies in your
              browser settings, but some site features may not work as expected.
            </p>
          </Block>

          <Block title="5. Disclosure of Personal Data">
            <p>We do not sell your personal data. We may share it only with:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Our technicians and staff, strictly for delivering the requested repair service.</li>
              <li>Trusted third-party service providers (e.g. payment processors, cloud hosting, analytics) bound by confidentiality obligations.</li>
              <li>Regulatory or law enforcement authorities where required by Singapore law.</li>
            </ul>
          </Block>

          <Block title="6. Data Protection">
            <p>
              We implement reasonable administrative, technical and physical safeguards
              to protect your personal data against unauthorised access, disclosure,
              alteration or loss. However, no method of transmission over the internet
              is 100% secure — we cannot guarantee absolute security.
            </p>
          </Block>

          <Block title="7. Retention">
            <p>
              We retain your personal data only for as long as necessary to fulfil the
              purposes stated in this Policy, or as required by applicable Singapore law
              (for example, for tax and accounting records).
            </p>
          </Block>

          <Block title="8. Your Rights Under PDPA">
            <p>Under Singapore's PDPA, you have the right to:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Request access to the personal data we hold about you.</li>
              <li>Request correction of inaccurate personal data.</li>
              <li>Withdraw consent for us to collect, use or disclose your personal data.</li>
              <li>Opt out of marketing communications at any time.</li>
            </ul>
            <p>To exercise any of these rights, contact us using the details below.</p>
          </Block>

          <Block title="9. Third-Party Links">
            <p>
              Our website may contain links to third-party websites (such as WhatsApp).
              We are not responsible for the privacy practices of those sites and
              encourage you to review their policies.
            </p>
          </Block>

          <Block title="10. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. The latest version
              will always be available on this page with the updated date shown above.
            </p>
          </Block>

          <Block title="11. Contact Us">
            <p>
              For questions about this Privacy Policy or your personal data, contact
              our Data Protection team:
            </p>
            <ul className="list-none space-y-1 pl-0">
              <li><strong>Email:</strong> washingsolutionsg@gmail.com</li>
              <li><strong>Phone / WhatsApp:</strong> +65 8530 1773</li>
            </ul>
          </Block>
        </div>
      </section>
    </>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-xl font-extrabold text-black md:text-2xl">{title}</h2>
      <div className="mt-3 space-y-3 text-neutral-700">{children}</div>
    </div>
  );
}
