import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { trackConversion } from "@/lib/tracking";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/common-problems", label: "Common Problems" },
  { to: "/brands", label: "Brands" },
  { to: "/coverage-areas", label: "Coverage" },
  
  { to: "/faqs", label: "FAQs" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
         <Link
  to="/"
  className="flex items-center gap-2"
  onClick={() => trackConversion()}
>
  <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg bg-black">
    <img
      src="/logo.webp"
      alt="WashingSolutionSG Logo"
      className="h-full w-full object-contain"
    />
  </div>

  <span className="text-base font-extrabold tracking-tight">
    WashingSolution<span className="text-black">SG</span>
  </span>
</Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeProps={{ className: "text-black bg-yellow/40" }}
              inactiveProps={{ className: "text-neutral-700 hover:text-black hover:bg-neutral-100" }}
              activeOptions={{ exact: true }}
              className="rounded-full px-3 py-2 text-sm font-medium transition-colors"
              onClick={() => trackConversion()}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href="tel:+6585301773"
            onClick={() => trackConversion()}
            className="btn-yellow text-sm"
          >
            <Phone className="h-4 w-4" />
            +65 8530 1773
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
            <a
      href="https://wa.me/6585301773"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackConversion()}
      aria-label="Chat on WhatsApp"
      className="
        inline-flex h-10 w-10 items-center justify-center rounded-md
        border border-black/10 bg-[#48f70d] text-white
        shadow-[0_0_8px_2px_rgba(72,247,13,0.6),0_0_18px_4px_rgba(72,247,13,0.35)]
        transition-shadow duration-300
        hover:shadow-[0_0_12px_3px_rgba(72,247,13,0.85),0_0_26px_8px_rgba(72,247,13,0.5)]
        animate-[wa-glow_2s_ease-in-out_infinite]
      "
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12.001 2C6.478 2 2 6.477 2 12c0 1.847.5 3.644 1.45 5.219L2 22l4.907-1.421A9.958 9.958 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12.001 2zm5.83 15.827a8.264 8.264 0 01-4.83 1.554h-.004a8.293 8.293 0 01-4.223-1.156l-.303-.18-3.145.913.917-3.07-.198-.315A8.264 8.264 0 013.735 12c0-4.56 3.709-8.268 8.269-8.268 2.209 0 4.284.861 5.845 2.424a8.208 8.208 0 012.417 5.845c0 2.213-.862 4.29-2.435 5.826z" />
      </svg>
    </a>

          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-black/10"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-black/10 bg-white">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeProps={{ className: "bg-yellow/40 text-black" }}
                inactiveProps={{ className: "text-neutral-800 hover:bg-neutral-100" }}
                activeOptions={{ exact: true }}
                className="rounded-lg px-3 py-2.5 text-sm font-medium"
                onClick={() => {
                  trackConversion();
                  setOpen(false);
                }}
              >
                {n.label}
              </Link>
            ))}
            <a
              href="tel:+6585301773"
              onClick={() => {
                trackConversion();
                setOpen(false);
              }}
              className="btn-yellow mt-2 text-sm"
            >
              <Phone className="h-4 w-4" />
              Call +65 8530 1773
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}