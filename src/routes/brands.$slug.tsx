import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { BookingForm, CallWhatsAppButtons } from "@/components/BookingForm";
import { getBrandBySlug, BRAND_DETAILS } from "@/lib/brand-details";
import { trackConversion } from "@/lib/tracking";
import { CheckCircle2, AlertTriangle, Wrench, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/brands/$slug")({
  loader: ({ params }) => {
    const brand = getBrandBySlug(params.slug);
    if (!brand) throw notFound();
    return { brand };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Brand not found | WashingSolutionSG" }, { name: "robots", content: "noindex" }] };
    }
    const b = loaderData.brand;
    const title = `${b.name} Washing Machine Repair Singapore | WashingSolutionSG`;
    const description = `${b.name} washing machine repair in Singapore — ${b.tagline.toLowerCase()}. Same-day service, genuine parts and warranty, 7 days a week.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: `/brands/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/brands/${params.slug}` }],
    };
  },
  notFoundComponent: BrandNotFound,
  component: BrandDetailPage,
});

function BrandNotFound() {
  return (
    <>
      <PageHero eyebrow="Brands" title={<>Brand <span className="shine-text">not found</span></>} description="The brand page you're looking for doesn't exist." />
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <Link to="/brands" className="btn-yellow text-sm">Back to all brands</Link>
      </section>
    </>
  );
}

function List({ icon, title, items }: { icon: React.ReactNode; title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-6">
      <h2 className="flex items-center gap-2 text-lg font-bold">{icon} {title}</h2>
      <ul className="mt-4 space-y-2.5 text-sm text-neutral-700">
        {items.map((i) => (
          <li key={i} className="flex gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-yellow" />
            <span>{i}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function BrandDetailPage() {
  const { brand } = Route.useLoaderData();

  return (
    <>
      <PageHero
        eyebrow="Brand"
        title={<><span className="shine-text">{brand.name}</span> washing machine repair</>}
        description={brand.tagline}
      >
        <CallWhatsAppButtons message={`Hi WashingSolutionSG, I need repair for my ${brand.name} washing machine.`} />
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-extrabold">Servicing {brand.name} in Singapore</h2>
              <p className="mt-3 text-neutral-700">{brand.intro}</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <List icon={<AlertTriangle className="h-5 w-5 text-yellow" />} title={`Common ${brand.name} problems`} items={brand.problems} />
              <List icon={<Wrench className="h-5 w-5 text-yellow" />} title="What we diagnose & repair" items={brand.repairs} />
              <List icon={<ShieldCheck className="h-5 w-5 text-yellow" />} title={`Why choose us for ${brand.name}`} items={brand.whyUs} />
              <div className="rounded-2xl border border-black/10 bg-neutral-50 p-6">
                <h2 className="text-lg font-bold">{brand.name} error codes we handle</h2>
                <p className="mt-3 text-sm font-semibold text-neutral-800">{brand.errorCodes}</p>
                <p className="mt-3 text-sm text-muted-foreground">
                  Tell us the code showing on your display and we'll come prepared with the right part. Service available 7 days a week including public holidays.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-bold">Popular services for {brand.name} owners</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Front Load Repair", "Top Load Repair", "Fully Automatic Repair", "Water Inlet & Drainage"].map((t) => (
                  <Link
                    key={t}
                    to="/services/$slug"
                    params={{ slug: t.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") }}
                    onClick={() => trackConversion()}
                    className="rounded-full border border-black/10 px-3 py-1.5 text-sm font-medium transition hover:border-yellow hover:bg-yellow/10"
                  >
                    {t}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-lg font-bold">Other brands we repair</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {BRAND_DETAILS.filter((b) => b.slug !== brand.slug).map((b) => (
                  <Link
                    key={b.slug}
                    to="/brands/$slug"
                    params={{ slug: b.slug }}
                    onClick={() => trackConversion()}
                    className="rounded-full border border-black/10 px-3 py-1.5 text-sm font-medium transition hover:border-yellow hover:bg-yellow/10"
                  >
                    {b.name}
                  </Link>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <Link to="/brands" onClick={() => trackConversion()} className="btn-outline text-sm">All brands</Link>
                <Link to="/common-problems" onClick={() => trackConversion()} className="btn-outline text-sm">Common problems</Link>
                <Link to="/contact" onClick={() => trackConversion()} className="btn-outline text-sm">Contact us</Link>
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-24 lg:self-start">
            <BookingForm subjectLabel="Brand" subjectValue={brand.name} />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
