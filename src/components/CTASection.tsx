import { Phone, MessageCircle } from "lucide-react";
import { trackConversion } from "@/lib/tracking";

export function CTASection({
  title = "Washing machine acting up? We're one call away.",
  subtitle = "Same-day repairs, 7 days a week, all across Singapore.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative mx-auto my-24 max-w-7xl px-4 md:px-6">
      <div className="relative overflow-hidden rounded-3xl bg-black p-10 text-white md:p-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full"
          style={{ background: "color-mix(in oklab, var(--yellow) 55%, transparent)", filter: "blur(60px)" }}
        />
        <div className="relative grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
          <div>
            <h2 className="text-3xl font-extrabold md:text-4xl">
              <span className="shine-text">{title}</span>
            </h2>
            <p className="mt-3 text-neutral-300">{subtitle}</p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <a href="tel:+6585301773" onClick={() => trackConversion()} className="btn-yellow">
              <Phone className="h-4 w-4" /> Call Now
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
        </div>
      </div>
    </section>
  );
}
