import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { AREAS } from "@/lib/site-data";
import { MapPin } from "lucide-react";

export const Route = createFileRoute("/coverage-areas")({
  head: () => ({
    meta: [
      { title: "Coverage Areas | Washing Machine Repair Singapore | WashingSolutionSG" },
      { name: "description", content: "Islandwide washing machine repair in Singapore — from Woodlands to Changi, Jurong to Punggol. Same-day service, 7 days a week." },
      { property: "og:title", content: "Washing Machine Repair Coverage Areas in Singapore" },
      { property: "og:description", content: "Islandwide service across every neighbourhood in Singapore." },
    ],
    links: [{ rel: "canonical", href: "/coverage-areas" }],
  }),
  component: CoveragePage,
});

function CoveragePage() {
  return (
    <>
      <PageHero
        eyebrow="Coverage"
        title={<>Islandwide <span className="shine-text">coverage</span>, 7 days a week</>}
        description="Wherever you are in Singapore, our technicians can be at your door — usually the same day you call."
      />
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {AREAS.map((a) => (
            <div key={a} className="flex items-center gap-3 rounded-xl border border-black/10 bg-white p-4 transition hover:border-yellow">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-yellow">
                <MapPin className="h-4 w-4 text-black" />
              </div>
              <div>
                <div className="text-sm font-semibold">{a}</div>
                <div className="text-xs text-muted-foreground">Same-day service</div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
