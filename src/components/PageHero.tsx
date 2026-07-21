import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(60% 60% at 80% 10%, color-mix(in oklab, var(--yellow) 40%, transparent) 0%, transparent 60%), radial-gradient(50% 50% at 10% 90%, color-mix(in oklab, var(--yellow) 25%, transparent) 0%, transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
        {eyebrow && (
          <span className="inline-flex items-center rounded-full bg-yellow/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-yellow ring-1 ring-yellow/30">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.05] md:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base text-neutral-300 md:text-lg">
            {description}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
