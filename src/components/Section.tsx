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
          ? "rounded-3xl border border-[#f9c5d5] bg-white p-6 shadow-md shadow-black/10 sm:p-8"
          : "space-y-6"
      }
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ec4899]">
              {eyebrow}
            </p>
          )}
          <h2 className="mt-1 text-xl font-semibold tracking-tight text-[#2a1020] sm:text-2xl">
            {title}
          </h2>
        </div>
        {cta && (
          <a
            href={cta.href}
            className="mt-2 inline-flex items-center justify-center rounded-full border border-[#f9c5d5] px-4 py-1.5 text-xs font-medium text-[#2a1020] transition hover:border-[#ec4899] hover:text-[#ec4899] sm:mt-0"
          >
            {cta.label}
          </a>
        )}
      </div>
      <div className="mt-4">{children}</div>
    </section>
  );
}