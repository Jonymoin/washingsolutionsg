import { Link } from "@tanstack/react-router";
import { Phone, Mail, MessageCircle, MapPin, Clock } from "lucide-react";
import { trackConversion } from "@/lib/tracking";

export function Footer() {
  return (
    <footer className="mt-24 bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-4 md:px-6">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2">
  <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg bg-yellow">
    <img
      src="/logo.webp"
      alt="WashingSolution SG Logo"
      className="h-full w-full object-contain"
    />
  </div>

  <span className="text-lg font-extrabold">
    WashingSolutionSG
  </span>
</div>
          <p className="mt-4 text-sm text-neutral-400">
            Singapore's trusted washing machine repair specialists.
            Same-day service, 7 days a week.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-yellow/10 px-3 py-1 text-xs font-semibold text-yellow ring-1 ring-yellow/30">
            <Clock className="h-3.5 w-3.5" /> Open 7 days a week
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-yellow">Pages</h4>
          <ul className="mt-4 space-y-2 text-sm text-neutral-300">
            {[
              ["/", "Home"],
              ["/services", "Services"],
              ["/common-problems", "Common Problems"],
              ["/brands", "Brands"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} onClick={() => trackConversion()} className="hover:text-yellow">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-yellow">More</h4>
          <ul className="mt-4 space-y-2 text-sm text-neutral-300">
            {[
              ["/coverage-areas", "Coverage Areas"],
              ["/reviews", "Reviews"],
              ["/faqs", "FAQs"],
              ["/contact", "Contact"],
              ["/about-us", "About Us"],
              ["/privacy-policy", "Privacy Policy"],
              ["/terms-and-conditions", "Terms & Conditions"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} onClick={() => trackConversion()} className="hover:text-yellow">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-yellow">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-neutral-300">
            <li>
              <a href="tel:+6585301773" onClick={() => trackConversion()} className="inline-flex items-center gap-2 hover:text-yellow">
                <Phone className="h-4 w-4" /> +65 8530 1773
              </a>
            </li>
            <li>
              <a href="https://wa.me/6585301773" target="_blank" rel="noreferrer" onClick={() => trackConversion()} className="inline-flex items-center gap-2 hover:text-yellow">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </li>
            <li>
              <a href="mailto:washingsolutionsg@gmail.com" onClick={() => trackConversion()} className="inline-flex items-center gap-2 hover:text-yellow">
                <Mail className="h-4 w-4" /> washingsolutionsg@gmail.com
              </a>
            </li>
            <li className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Islandwide, Singapore
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-neutral-500 md:flex-row md:px-6">
          <span>© {new Date().getFullYear()} WashingSolutionSG. All rights reserved.</span>
          <span>Washing Machine Repair Service Singapore</span>
        </div>
      </div>
    </footer>
  );
}
