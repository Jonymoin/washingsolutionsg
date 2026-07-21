import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { SERVICES } from "@/lib/site-data";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services | Washing Machine Repair Singapore — WashingSolutionSG" },
      { name: "description", content: "Full range of washing machine repair services in Singapore: front load, top load, semi-automatic, dryer combos, installation and maintenance. Same-day, 7 days a week." },
      { property: "og:title", content: "Washing Machine Repair Services | WashingSolutionSG" },
      { property: "og:description", content: "Front load, top load, dryer combo repair and more. Same-day service across Singapore." },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title={<>Repairs for every <span className="shine-text">washing machine</span></>}
        description="From single fixes to full servicing, our technicians handle every type of washing machine in Singapore — with genuine parts and a service warranty."
      />
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article key={s.title} className="group overflow-hidden rounded-2xl border border-black/10 bg-white transition hover:-translate-y-1 hover:shadow-xl">
              <div className="aspect-[4/3] overflow-hidden bg-neutral-200">
                <img src={s.img} alt={s.title} className="h-full w-full object-cover transition group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h2 className="text-lg font-bold">{s.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {["Same-day service", "Genuine spare parts", "Warranty included"].map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-yellow" /> {b}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
