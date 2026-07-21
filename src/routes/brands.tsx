import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { BRANDS } from "@/lib/site-data";

export const Route = createFileRoute("/brands")({
  head: () => ({
    meta: [
      { title: "Brands We Repair | Samsung, LG, Bosch & More | WashingSolutionSG" },
      { name: "description", content: "We repair all major washing machine brands in Singapore including Samsung, LG, Bosch, Electrolux, Panasonic, Toshiba, Hitachi, Whirlpool, Midea and more." },
      { property: "og:title", content: "Washing Machine Brands We Repair in Singapore" },
      { property: "og:description", content: "All major washing machine brands serviced in Singapore." },
    ],
    links: [{ rel: "canonical", href: "/brands" }],
  }),
  component: BrandsPage,
});

function BrandsPage() {
  return (
    <>
      <PageHero
        eyebrow="Brands"
        title={<>Every major <span className="shine-text">brand</span>, professionally serviced</>}
        description="We stock genuine spare parts and follow manufacturer procedures for every washing machine brand sold in Singapore."
      />
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {BRANDS.map((b) => (
            <div key={b} className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-black/10 bg-white p-8 text-center transition hover:-translate-y-1 hover:border-yellow hover:shadow-[0_20px_50px_-20px_var(--yellow)]">
              <div className="text-lg font-extrabold">{b}</div>
              <div className="text-xs text-muted-foreground">Certified repair</div>
            </div>
          ))}
        </div>
      </section>
      <CTASection title="Own a different brand?" subtitle="Just ask — chances are we service it too." />
    </>
  );
}
