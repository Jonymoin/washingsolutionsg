import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { ShieldCheck, Wrench, Clock, Users, ThumbsUp, MapPin } from "lucide-react";

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title: "About Us | WashingSolutionSG — Washing Machine Repair Singapore" },
      { name: "description", content: "Learn about WashingSolutionSG — Singapore's trusted washing machine repair specialists. Certified technicians, genuine parts, transparent pricing and same-day service 7 days a week." },
      { property: "og:title", content: "About WashingSolutionSG | Washing Machine Repair Singapore" },
      { property: "og:description", content: "Singapore's trusted washing machine repair experts — certified technicians, transparent pricing, same-day service." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/about-us" }],
  }),
  component: AboutPage,
});

const VALUES = [
  { icon: ShieldCheck, title: "Trusted & Reliable", desc: "Every repair backed by a service warranty. Our technicians are trained, background-checked and treat your home with respect." },
  { icon: Wrench, title: "Genuine Spare Parts", desc: "We use only original or manufacturer-approved parts to ensure your washer runs like new for years." },
  { icon: Clock, title: "Same-Day Service", desc: "Book in the morning and we typically arrive within 2–4 hours — 7 days a week, including public holidays." },
  { icon: Users, title: "Customer-First", desc: "Transparent pricing, honest diagnosis and no hidden fees. If it can't be fixed economically, we'll tell you." },
  { icon: ThumbsUp, title: "10+ Years Experience", desc: "Hundreds of successful repairs across Samsung, LG, Bosch, Electrolux, Panasonic and every major brand." },
  { icon: MapPin, title: "Islandwide Coverage", desc: "From Jurong to Changi, Woodlands to Sentosa — we cover every neighbourhood in Singapore." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={<>Singapore's <span className="shine-text">trusted</span> washing machine specialists</>}
        description="WashingSolutionSG is a Singapore-based washing machine repair company built on honest work, fast response and technical expertise. We keep your laundry day running — every day of the week."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-extrabold md:text-4xl">
              Our <span className="gradient-text">story</span>
            </h2>
            <div className="mt-5 space-y-4 text-neutral-700">
              <p>
                WashingSolutionSG was founded with a simple idea: washing machine breakdowns
                shouldn't ruin your week. Too many Singapore households were being quoted
                sky-high repair prices or waiting days for a technician to show up.
              </p>
              <p>
                We built a team of certified repair specialists who focus on one thing —
                getting your washer back in working order the same day, with transparent
                pricing and genuine parts. From HDB flats in Ang Mo Kio to condos in Marina
                Bay, we've helped thousands of households across the island.
              </p>
              <p>
                Today, WashingSolutionSG services every major brand — Samsung, LG, Bosch,
                Electrolux, Panasonic, Toshiba, Hitachi, Whirlpool, Midea, Sharp, Beko,
                Miele, Siemens and more — 7 days a week, including public holidays.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { k: "5,000+", v: "Repairs completed" },
              { k: "10+", v: "Years experience" },
              { k: "24/7", v: "WhatsApp support" },
              { k: "100%", v: "Warranty backed" },
            ].map((s) => (
              <div key={s.v} className="rounded-2xl border border-black/10 bg-white p-6 text-center shadow-sm">
                <div className="text-3xl font-black text-black md:text-4xl">
                  <span className="gradient-text">{s.k}</span>
                </div>
                <div className="mt-1 text-sm font-medium text-neutral-600">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold md:text-4xl">
              What we <span className="shine-text">stand for</span>
            </h2>
            <p className="mt-3 text-neutral-600">
              Six commitments that shape every repair we do.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-2xl border border-black/10 bg-white p-6 transition hover:border-yellow hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow">
                  <v.icon className="h-5 w-5 text-black" />
                </div>
                <h3 className="mt-4 text-lg font-bold">{v.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="rounded-3xl border border-black/10 bg-white p-8 md:p-12">
          <h2 className="text-2xl font-extrabold md:text-3xl">
            Our <span className="gradient-text">mission</span>
          </h2>
          <p className="mt-4 max-w-3xl text-neutral-700">
            To make washing machine repair in Singapore effortless, honest and affordable.
            We believe in fixing what can be fixed, telling you the truth when it can't,
            and standing behind every job with a real warranty. When your washer stops
            working, one WhatsApp message should be enough to get it running again.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
