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
          ? "rounded-3xl border border-[#e1d5cc] bg-white p-6 shadow-md shadow-black/10 sm:p-8"
          : "space-y-6"
      }
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d58c64]">
              {eyebrow}
            </p>
          )}
          <h2 className="mt-1 text-xl font-semibold tracking-tight text-[#322] sm:text-2xl">
            {title}
          </h2>
        </div>
        {cta && (
          <a
            href={cta.href}
            className="mt-2 inline-flex items-center justify-center rounded-full border border-[#d0c4b8] px-4 py-1.5 text-xs font-medium text-[#322] transition hover:border-[#d58c64] hover:text-[#d58c64] sm:mt-0"
          >
            {cta.label}
          </a>
        )}
      </div>
      <div className="mt-4">{children}</div>
    </section>
  );
}