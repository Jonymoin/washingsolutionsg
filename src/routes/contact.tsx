import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Phone, MessageCircle, Mail, Clock, MapPin } from "lucide-react";
import { trackConversion } from "@/lib/tracking";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Washing Machine Repair Singapore | WashingSolutionSG" },
      { name: "description", content: "Contact WashingSolutionSG for same-day washing machine repair in Singapore. Call/WhatsApp +65 8530 1773 or email washingsolutionsg@gmail.com — open 7 days a week." },
      { property: "og:title", content: "Contact WashingSolutionSG | Washing Machine Repair Singapore" },
      { property: "og:description", content: "Call, WhatsApp or email us — we respond within minutes, 7 days a week." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let's <span className="shine-text">fix it</span> today</>}
        description="Reach us by phone, WhatsApp or email — we're available every day of the week, including public holidays."
      />
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            {[
              { icon: Phone, label: "Call Us", value: "+65 8530 1773", href: "tel:+6585301773" },
              { icon: MessageCircle, label: "WhatsApp", value: "+65 8530 1773", href: "https://wa.me/6585301773" },
              { icon: Mail, label: "Email", value: "washingsolutionsg@gmail.com", href: "mailto:washingsolutionsg@gmail.com" },
              { icon: Clock, label: "Hours", value: "Open 7 days · 8am – 10pm" },
              { icon: MapPin, label: "Coverage", value: "Islandwide, Singapore" },
            ].map((c) => {
              const Inner = (
                <div className="flex items-center gap-4 rounded-2xl border border-black/10 bg-white p-5 transition hover:border-yellow hover:shadow-md">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow">
                    <c.icon className="h-5 w-5 text-black" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{c.label}</div>
                    <div className="text-base font-semibold">{c.value}</div>
                  </div>
                </div>
              );
              return c.href ? (
                <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" onClick={() => trackConversion()}>
                  {Inner}
                </a>
              ) : (
                <div key={c.label}>{Inner}</div>
              );
            })}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              trackConversion();
              window.location.href = "https://wa.me/6585301773";
            }}
            className="rounded-2xl border border-black/10 bg-neutral-50 p-6 md:p-8"
          >
            <h2 className="text-2xl font-extrabold">
              Request a <span className="gradient-text">callback</span>
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">We'll get back to you within minutes.</p>

            <div className="mt-6 grid gap-4">
              <Field label="Full Name" required />
              <Field label="Phone Number" type="tel" required />
              <Field label="Email" type="email" />
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-neutral-600">Describe the issue</label>
                <textarea rows={4} className="mt-1 w-full rounded-lg border border-black/10 bg-white px-3 py-2 text-sm outline-none focus:border-yellow focus:ring-2 focus:ring-yellow/30" />
              </div>
              <button type="submit" onClick={() => trackConversion()} className="btn-yellow">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, type = "text", required }: { label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-neutral-600">{label}</label>
      <input
        type={type}
        required={required}
        className="mt-1 w-full rounded-lg border border-black/10 bg-white px-3 py-2 text-sm outline-none focus:border-yellow focus:ring-2 focus:ring-yellow/30"
      />
    </div>
  );
}
