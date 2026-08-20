import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { BookingForm, CallWhatsAppButtons } from "@/components/BookingForm";
import { getServiceBySlug, SERVICE_DETAILS } from "@/lib/service-details";
import { trackConversion } from "@/lib/tracking";
import { CheckCircle2, AlertTriangle, Wrench, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getServiceBySlug(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Service not found | WashingSolutionSG" }, { name: "robots", content: "noindex" }] };
    }
    const s = loaderData.service;
    return {
      meta: [
        { title: s.metaTitle },
        { name: "description", content: s.metaDescription },
        { property: "og:title", content: s.metaTitle },
        { property: "og:description", content: s.metaDescription },
        { property: "og:type", content: "website" },
        { property: "og:url", content: `/services/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/services/${params.slug}` }],
    };
  },
  notFoundComponent: ServiceNotFound,
  component: ServiceDetailPage,
});

function ServiceNotFound() {
  return (
    <>
      <PageHero eyebrow="Services" title={<>Service <span className="shine-text">not found</span></>} description="The service page you're looking for doesn't exist." />
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <Link to="/services" className="btn-yellow text-sm">Back to all services</Link>
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

function ServiceDetailPage() {
  const { service } = Route.useLoaderData();

  return (
    <>
      <PageHero
        eyebrow="Service"
        title={<><span className="shine-text">{service.title}</span> in Singapore</>}
        description={service.desc}
      >
        <CallWhatsAppButtons message={`Hi WashingSolutionSG, I need help with ${service.title}.`} />
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <div className="space-y-8">
            <div className="overflow-hidden rounded-2xl border border-black/10 bg-neutral-200">
              <img src={service.img} alt={`${service.title} in Singapore`} className="aspect-[16/9] w-full object-cover" />
            </div>

            <div>
              <h2 className="text-2xl font-extrabold">About this service</h2>
              <p className="mt-3 text-neutral-700">{service.intro}</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <List icon={<AlertTriangle className="h-5 w-5 text-yellow" />} title="Common causes" items={service.causes} />
              <List icon={<AlertTriangle className="h-5 w-5 text-yellow" />} title="Symptoms & signs" items={service.symptoms} />
              <List icon={<Wrench className="h-5 w-5 text-yellow" />} title="What our technician checks" items={service.checks} />
              <List icon={<ShieldCheck className="h-5 w-5 text-yellow" />} title="Why choose us" items={service.whyUs} />
            </div>

            <div className="rounded-2xl border border-black/10 bg-neutral-50 p-6">
              <h2 className="text-lg font-bold">Service information</h2>
              <dl className="mt-4 grid gap-4 sm:grid-cols-3">
                {service.info.map((i) => (
                  <div key={i.label}>
                    <dt className="text-xs font-semibold uppercase tracking-widest text-neutral-500">{i.label}</dt>
                    <dd className="mt-1 text-sm font-semibold">{i.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <h2 className="text-lg font-bold">Other services</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {SERVICE_DETAILS.filter((s) => s.slug !== service.slug).map((s) => (
                  <Link
                    key={s.slug}
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    onClick={() => trackConversion()}
                    className="rounded-full border border-black/10 px-3 py-1.5 text-sm font-medium transition hover:border-yellow hover:bg-yellow/10"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <Link to="/services" onClick={() => trackConversion()} className="btn-outline text-sm">All services</Link>
                <Link to="/brands" onClick={() => trackConversion()} className="btn-outline text-sm">Brands we repair</Link>
                <Link to="/contact" onClick={() => trackConversion()} className="btn-outline text-sm">Contact us</Link>
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-24 lg:self-start">
            <BookingForm subjectLabel="Service" subjectValue={service.title} />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
