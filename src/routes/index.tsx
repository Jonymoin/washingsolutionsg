import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Phone, MessageCircle, ShieldCheck, Clock, Wrench, Star,
  MapPin, CheckCircle2, ArrowRight, Sparkles,
} from "lucide-react";
import { trackConversion } from "@/lib/tracking";
import { CTASection } from "@/components/CTASection";
import { SERVICES, BRANDS, AREAS, REVIEWS, FAQS } from "@/lib/site-data";
import WashingMachineDiagnostic from "@/components/WashingMachineDiagnostic";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Washing Machine Repair Singapore | Same Day | WashingSolutionSG" },
      {
        name: "description",
        content:
          "#1 Washing machine repair service in Singapore. All brands, same-day repairs, 7 days a week. Call/WhatsApp +65 8530 1773 for fast, honest service.",
      },
      { property: "og:title", content: "Washing Machine Repair Singapore — WashingSolutionSG" },
      {
        property: "og:description",
        content: "Same-day washing machine repair, all brands, 7 days a week in Singapore.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-black text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(55% 55% at 85% 15%, color-mix(in oklab, var(--yellow) 55%, transparent) 0%, transparent 60%), radial-gradient(45% 45% at 5% 85%, color-mix(in oklab, var(--yellow) 30%, transparent) 0%, transparent 60%)",
          }}
        />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 md:grid-cols-2 md:items-center md:px-6 md:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-yellow/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-yellow ring-1 ring-yellow/30">
              <Sparkles className="h-3.5 w-3.5" /> Open 7 Days · Same-Day Repair
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.03] md:text-6xl">
              Washing Machine <br />
              <span className="shine-text">Repair Singapore</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg text-neutral-300">
              Fast, honest and affordable repairs for all brands and models — front load,
              top load and washer-dryer combos. Available every day of the week.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="tel:+6585301773" onClick={() => trackConversion()} className="btn-yellow">
                <Phone className="h-4 w-4" /> Call +65 8530 1773
              </a>
              <a
                href="https://wa.me/6585301773"
                target="_blank"
                rel="noreferrer"
                onClick={() => trackConversion()}
                className="btn-glass"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-neutral-300">
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-yellow" /> Warranty on Repairs</div>
              <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-yellow" /> Same-Day Service</div>
              <div className="flex items-center gap-2"><Star className="h-4 w-4 text-yellow" /> 5-Star Reviews</div>
            </div>
          </div>

          <div className="relative">
            <div className="animate-float relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-neutral-900">
              <img src="/images/ws1.webp" alt="Washing machine repair in Singapore" className="h-full w-full object-cover" />
            </div>
            <div className="glass-dark absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl px-4 py-3 md:-left-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow">
                <Wrench className="h-5 w-5 text-black" />
              </div>
              <div>
                <div className="text-sm font-semibold">15+ Years Experience</div>
                <div className="text-xs text-neutral-400">Certified technicians</div>
              </div>
            </div>
            <div className="glass-dark absolute -right-2 top-6 flex items-center gap-2 rounded-2xl px-3 py-2 text-xs md:-right-6">
              <Star className="h-4 w-4 fill-yellow text-yellow" />
              <span className="font-semibold">4.9 / 5</span>
              <span className="text-neutral-400">500+ Reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">Why choose us</span>
          <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">
            The <span className="text-yellow">most trusted</span> repair team in Singapore
          </h2>
          <p className="mt-3 text-muted-foreground">
            We combine transparent pricing, experienced technicians and genuine spare parts to deliver
            repairs that actually last.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { icon: Clock, title: "Same-Day Service", desc: "Book by noon and we'll usually be at your door the same day, 7 days a week." },
            { icon: ShieldCheck, title: "Warranty Included", desc: "Every repair is covered by our service warranty on both parts and labour." },
            { icon: Wrench, title: "Certified Technicians", desc: "Trained professionals with 15+ years handling all major brands." },
            { icon: Star, title: "Transparent Pricing", desc: "You approve a firm quote before we start — no hidden fees, ever." },
            { icon: CheckCircle2, title: "Genuine Spare Parts", desc: "We use OEM parts to keep your washer running for years to come." },
            { icon: MapPin, title: "Islandwide Coverage", desc: "From Woodlands to Changi — we service every neighbourhood in Singapore." },
          ].map((f) => (
            <div key={f.title} className="group rounded-2xl border border-black/10 bg-white p-6 transition hover:-translate-y-1 hover:border-yellow shadow-[0_20px_50px_-20px_var(--yellow)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow">
                <f.icon className="h-6 w-6 text-black" />
              </div>
              <h3 className="mt-5 text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
       {/* Diognosis */}
       <section>
        <WashingMachineDiagnostic />
       </section>
      {/* SERVICES OVERVIEW */}
      <section className="bg-neutral-50 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">Our services</span>
              <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">
                Every washing machine, <span className="text-yellow">every fix</span>
              </h2>
            </div>
            <Link to="/services" onClick={() => trackConversion()} className="btn-outline text-sm">
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {SERVICES.slice(0, 4).map((s) => (
              <article key={s.title} className="group overflow-hidden rounded-2xl border border-black/10 bg-white transition hover:-translate-y-1 hover:shadow-lg">
                <div className="aspect-[4/3] overflow-hidden bg-neutral-200">
                  <img src={s.img} alt={s.title} className="h-full w-full object-cover transition group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">Brands we repair</span>
          <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">
            All major brands, <span className="text-yellow">expertly serviced</span>
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {BRANDS.map((b) => (
            <div key={b} className="flex bg-yellow items-center justify-center rounded-xl border border-black/10 px-4 py-6 text-sm font-semibold text-neutral-800 transition hover:border-yellow hover:bg-yellow/10">
              {b}
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/brands" onClick={() => trackConversion()} className="btn-outline text-sm">
            Explore all brands <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-black py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-yellow">Reviews</span>
            <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">
              What our <span className="shine-text">customers say</span>
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {REVIEWS.slice(0, 3).map((r) => (
              <div key={r.name} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <div className="flex gap-1">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow text-yellow" />
                  ))}
                </div>
                <p className="mt-4 text-sm text-neutral-200">"{r.text}"</p>
                <div className="mt-6 text-sm">
                  <div className="font-semibold">{r.name}</div>
                  <div className="text-neutral-400">{r.area}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/reviews" onClick={() => trackConversion()} className="btn-glass text-sm">
              Read more reviews <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">Coverage</span>
            <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">
              Servicing <span className="text-yellow">all of Singapore</span>, 7 days a week
            </h2>
            <p className="mt-3 text-muted-foreground">
              From the north to the east, west to the CBD — our technicians reach every neighbourhood
              on the same day you call.
            </p>
            <Link to="/coverage-areas" onClick={() => trackConversion()} className="btn-yellow mt-6 text-sm">
              See all areas <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {AREAS.slice(0, 12).map((a) => (
              <div key={a} className="flex items-center gap-2 rounded-lg border border-black/10 bg-yellow px-3 py-2 text-sm">
                <MapPin className="h-3.5 w-3.5 text-white" /> {a}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ PREVIEW */}
      <section className="bg-neutral-50 py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">Faqs</span>
            <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">
              Frequently <span className="text-yellow">asked questions</span>
            </h2>
          </div>
          <div className="mt-10 space-y-3">
            {FAQS.slice(0, 4).map((f) => (
              <details key={f.q} className="group rounded-xl border border-black/10 bg-white p-5 open:shadow-sm">
                <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold md:text-base">
                  {f.q}
                  <span className="ml-4 text-yellow transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/faqs" onClick={() => trackConversion()} className="btn-outline text-sm">
              View all FAQs <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />

      {/* CONTACT */}
      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-6">
        <div className="grid gap-8 rounded-3xl border border-black/10 bg-white p-8 md:grid-cols-2 md:p-12">
          <div>
            <h2 className="text-3xl font-extrabold md:text-4xl">
              Get in <span className="text-yellow">touch</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              Call, message or email us — we respond within minutes, every day of the week.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <a href="tel:+6585301773" onClick={() => trackConversion()} className="flex bg-yellow items-center gap-3 rounded-lg border border-black/10 p-3 hover:border-yellow">
                <Phone className="h-4 w-4" /> +65 8530 1773
              </a>
              <a href="https://wa.me/6585301773" target="_blank" rel="noreferrer" onClick={() => trackConversion()} className="flex bg-yellow items-center gap-3 rounded-lg border border-black/10 p-3 hover:border-yellow">
                <MessageCircle className="h-4 w-4" /> WhatsApp Chat
              </a>
              <a href="mailto:washingsolutionsg@gmail.com" onClick={() => trackConversion()} className="flex items-center gap-3 bg-yellow rounded-lg border border-black/10 p-3 hover:border-yellow">
                <span className="font-mono text-xs">@</span> washingsolutionsg@gmail.com
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}

function ContactForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        trackConversion();
        window.location.href = "https://wa.me/6585301773";
      }}
      className="rounded-2xl bg-neutral-50 p-6"
    >
      <div className="grid gap-4">
        <div>
          <label className="text-xs font-semibold uppercase tracking-wider text-neutral-600">Name</label>
          <input required className="mt-1 w-full rounded-lg border border-black/10 bg-white px-3 py-2 text-sm outline-none focus:border-yellow focus:ring-2 focus:ring-yellow/30" />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase tracking-wider text-neutral-600">Phone</label>
          <input required type="tel" className="mt-1 w-full rounded-lg border border-black/10 bg-white px-3 py-2 text-sm outline-none focus:border-yellow focus:ring-2 focus:ring-yellow/30" />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase tracking-wider text-neutral-600">Describe the issue</label>
          <textarea rows={3} className="mt-1 w-full rounded-lg border border-black/10 bg-white px-3 py-2 text-sm outline-none focus:border-yellow focus:ring-2 focus:ring-yellow/30" />
        </div>
        <button type="submit" onClick={() => trackConversion()} className="btn-yellow">
          Request Callback
        </button>
      </div>
    </form>
  );
}
