import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  title: string;
  eyebrow?: string;
  children: ReactNode;
  background?: "default" | "subtle";
  cta?: {
    label: string;
    href: string;
  };
}

export default function Section({
  id,
  title,
  eyebrow,
  children,
  background = "default",
  cta,
}: SectionProps) {
  return (
    <section
      id={id}
      className={
        background === "subtle"
          ? "rounded-3xl border border-[#d4c5b0] bg-[#faf8f3] p-6 shadow-md shadow-black/10 sm:p-8"
          : "space-y-6"
      }
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d946a6]">
              {eyebrow}
            </p>
          )}
          <h2 className="mt-1 text-xl font-semibold tracking-tight text-[#2d2416] sm:text-2xl">
            {title}
          </h2>
        </div>
        {cta && (
          <a
            href={cta.href}
            className="mt-2 inline-flex items-center justify-center rounded-full border border-[#d4c5b0] px-4 py-1.5 text-xs font-medium text-[#2d2416] transition hover:border-[#d946a6] hover:text-[#d946a6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d946a6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#faf8f3] sm:mt-0"
          >
            {cta.label}
          </a>
        )}
      </div>
      <div className="mt-4">{children}</div>
    </section>
  );
}