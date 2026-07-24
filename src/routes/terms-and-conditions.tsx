import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | WashingSolutionSG" },
      { name: "description", content: "Read the Terms and Conditions for using WashingSolutionSG washing machine repair services in Singapore — service scope, pricing, warranty, liability and cancellations." },
      { property: "og:title", content: "Terms & Conditions | WashingSolutionSG" },
      { property: "og:description", content: "Service scope, pricing, warranty, liability and cancellation terms for WashingSolutionSG repair services." },
      { property: "og:type", content: "website" },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "/terms-and-conditions" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={<>Terms & <span className="shine-text">Conditions</span></>}
        description="These Terms and Conditions govern your use of the WashingSolutionSG website and repair services in Singapore. By booking a service with us, you agree to these terms."
      />

      <section className="mx-auto max-w-4xl px-4 py-16 md:px-6">
        <div className="space-y-8 text-neutral-800">
          <p className="text-sm text-neutral-500">Last updated: 24 July 2026</p>

          <Block title="1. About WashingSolutionSG">
            <p>
              WashingSolutionSG ("we", "us", "our") is a washing machine repair service
              provider operating in Singapore. Contact: +65 8530 1773 or
              washingsolutionsg@gmail.com.
            </p>
          </Block>

          <Block title="2. Services">
            <p>
              We provide repair, installation, relocation, maintenance and deep-cleaning
              services for domestic washing machines and washer-dryer combos, including
              front-load, top-load, semi-automatic and fully automatic units. Services
              are offered 7 days a week, including public holidays, subject to
              technician availability.
            </p>
          </Block>

          <Block title="3. Bookings & Confirmation">
            <ul className="list-disc space-y-2 pl-6">
              <li>Bookings may be made by phone, WhatsApp, email or through our website contact form.</li>
              <li>All appointment times are estimates — traffic, weather or job complexity may cause delays.</li>
              <li>You must provide accurate contact details, address and a description of the fault.</li>
              <li>An adult (18+) must be present at the premises during the service visit.</li>
            </ul>
          </Block>

          <Block title="4. Inspection Fee & Quotations">
            <p>
              A transparent inspection fee applies to every service visit. This fee is
              <strong> waived in full</strong> when you proceed with the recommended repair.
              We will always provide a firm quotation for parts and labour
              <strong> before</strong> starting any repair work. Work will only commence
              with your explicit approval.
            </p>
          </Block>

          <Block title="5. Pricing & Payment">
            <ul className="list-disc space-y-2 pl-6">
              <li>All prices are quoted in Singapore Dollars (SGD).</li>
              <li>Payment is due upon completion of the repair, unless otherwise agreed in writing.</li>
              <li>We accept cash, PayNow, bank transfer and other locally supported payment methods.</li>
              <li>Additional charges may apply for out-of-stock parts, additional faults discovered during repair, or after-hours emergency service (only if agreed in advance).</li>
            </ul>
          </Block>

          <Block title="6. Spare Parts">
            <p>
              We use genuine or manufacturer-approved spare parts wherever possible.
              Parts availability depends on the brand, model and market supply. If a
              specific part is discontinued, we will offer the closest compatible
              alternative and inform you before installing it.
            </p>
          </Block>

          <Block title="7. Warranty">
            <ul className="list-disc space-y-2 pl-6">
              <li>Every completed repair is backed by a service warranty covering the specific fault repaired and the replaced part.</li>
              <li>The warranty period will be communicated at the time of service and stated on your invoice.</li>
              <li>The warranty does <strong>not</strong> cover new or unrelated faults, damage caused by misuse, power surges, water damage, unauthorised repairs, or normal wear and tear.</li>
              <li>Warranty claims must be reported to us within the stated warranty period.</li>
            </ul>
          </Block>

          <Block title="8. Cancellations & Rescheduling">
            <p>
              You may cancel or reschedule your appointment free of charge by contacting
              us at least 2 hours before the scheduled visit. Cancellations made after
              the technician has arrived at your premises may incur the inspection fee.
            </p>
          </Block>

          <Block title="9. Customer Responsibilities">
            <ul className="list-disc space-y-2 pl-6">
              <li>Provide safe, reasonable access to the washing machine.</li>
              <li>Disclose any known safety hazards at the premises (e.g. faulty wiring, water leaks).</li>
              <li>Remove personal belongings, laundry and valuables from the work area.</li>
              <li>Ensure children and pets are kept away from the work area for their safety.</li>
            </ul>
          </Block>

          <Block title="10. Limitation of Liability">
            <p>
              To the fullest extent permitted by Singapore law, WashingSolutionSG shall
              not be liable for any indirect, incidental or consequential loss (including
              loss of income, laundry damage from a pre-existing fault, or damage caused
              by underlying electrical or plumbing issues at the premises). Our total
              liability for any claim shall not exceed the amount paid by you for the
              specific service giving rise to the claim.
            </p>
          </Block>

          <Block title="11. Non-Repairable Units">
            <p>
              If your washing machine cannot be economically repaired, we will give you
              an honest assessment and, where possible, recommend replacement options.
              Only the inspection fee will apply in that case.
            </p>
          </Block>

          <Block title="12. Intellectual Property">
            <p>
              All content on this website — including text, graphics, logos and images —
              is the property of WashingSolutionSG or its licensors and may not be
              copied, reproduced or redistributed without written permission.
            </p>
          </Block>

          <Block title="13. Governing Law">
            <p>
              These Terms are governed by the laws of the Republic of Singapore. Any
              dispute arising out of or in connection with these Terms shall be subject
              to the exclusive jurisdiction of the courts of Singapore.
            </p>
          </Block>

          <Block title="14. Changes to Terms">
            <p>
              We may update these Terms and Conditions from time to time. The latest
              version will always be available on this page with the updated date shown
              above. Continued use of our services after changes constitutes acceptance
              of the new Terms.
            </p>
          </Block>

          <Block title="15. Contact">
            <p>
              For any questions about these Terms, please contact us:
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
