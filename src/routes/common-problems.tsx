import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import WashingMachineDiagnostic from "@/components/WashingMachineDiagnostic";

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
        <WashingMachineDiagnostic />
      </section>
      <CTASection title="Facing one of these problems?" subtitle="Book a same-day repair in under 60 seconds." />
    </>
  );
}

