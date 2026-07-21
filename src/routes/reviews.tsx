import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { REVIEWS } from "@/lib/site-data";
import { Star } from "lucide-react";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Customer Reviews | Washing Machine Repair Singapore | WashingSolutionSG" },
      { name: "description", content: "Read real reviews from Singapore customers about our washing machine repair service. Rated 4.9/5 stars with hundreds of happy clients." },
      { property: "og:title", content: "Customer Reviews — WashingSolutionSG" },
      { property: "og:description", content: "4.9/5 star washing machine repair service in Singapore." },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title={<>Loved by <span className="shine-text">Singapore homeowners</span></>}
        description="Real feedback from real customers. We're proud to be one of Singapore's highest-rated washing machine repair services."
      />
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r) => (
            <article key={r.name} className="rounded-2xl border border-black/10 bg-white p-6">
              <div className="flex gap-1">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow text-yellow" />
                ))}
              </div>
              <p className="mt-4 text-sm text-neutral-700">"{r.text}"</p>
              <div className="mt-6 flex items-center justify-between">
                <div className="text-sm">
                  <div className="font-semibold">{r.name}</div>
                  <div className="text-muted-foreground">{r.area}</div>
                </div>
                <span className="rounded-full bg-yellow/20 px-2 py-0.5 text-xs font-semibold text-black">Verified</span>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
