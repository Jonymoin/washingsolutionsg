import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { PROBLEMS } from "@/lib/site-data";
import { AlertTriangle } from "lucide-react";

export const Route = createFileRoute("/common-problems")({
  head: () => ({
    meta: [
      { title: "Common Washing Machine Problems | WashingSolutionSG Singapore" },
      { name: "description", content: "Not draining? Not spinning? Error codes? See the most common washing machine problems in Singapore and how our technicians fix them the same day." },
      { property: "og:title", content: "Common Washing Machine Problems in Singapore" },
      { property: "og:description", content: "Fast diagnosis and repair for the most common washing machine issues in Singapore." },
    ],
    links: [{ rel: "canonical", href: "/common-problems" }],
  }),
  component: ProblemsPage,
});

function ProblemsPage() {
  return (
    <>
      <PageHero
        eyebrow="Common Problems"
        title={<>Every <span className="shine-text">washer issue</span>, solved</>}
        description="A quick guide to the washing machine problems we see every week in Singapore homes — and how we fix them fast."
      />
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PROBLEMS.map((p) => (
            <div key={p.title} className="rounded-2xl border border-black/10 bg-white p-6 transition hover:-translate-y-1 hover:border-yellow">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow">
                <AlertTriangle className="h-5 w-5 text-black" />
              </div>
              <h2 className="mt-4 text-lg font-bold">{p.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <CTASection title="Facing one of these problems?" subtitle="Book a same-day repair in under 60 seconds." />
    </>
  );
}
