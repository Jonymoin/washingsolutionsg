import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { FAQS } from "@/lib/site-data";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs | Washing Machine Repair Singapore | WashingSolutionSG" },
      { name: "description", content: "Answers to common questions about our washing machine repair service in Singapore — pricing, warranty, timing, brands and more." },
      { property: "og:title", content: "Washing Machine Repair FAQs — WashingSolutionSG" },
      { property: "og:description", content: "Everything you need to know before booking a repair." },
    ],
    links: [{ rel: "canonical", href: "/faqs" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FAQPage,
});

function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQs"
        title={<>Your <span className="shine-text">questions</span>, answered</>}
        description="Everything you need to know before booking a washing machine repair with us in Singapore."
      />
      <section className="mx-auto max-w-4xl px-4 py-20 md:px-6">
        <div className="space-y-3">
          {FAQS.map((f) => (
            <details key={f.q} className="group rounded-xl border border-black/10 bg-white p-5 open:shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold md:text-base">
                {f.q}
                <span className="ml-4 text-yellow transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
