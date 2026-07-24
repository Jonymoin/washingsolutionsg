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
  { to: "/reviews", label: "Reviews" },
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

        <button
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-black/10"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
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
