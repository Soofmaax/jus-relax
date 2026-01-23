import type { JustRelaxData } from "@/lib/just-relax-schema";

/**
 * Affiche les services clés du restaurant sous forme de badges.
 */
export default function ServicesBadges({ services }: { services: JustRelaxData["services"] }) {
  if (!services || services.length === 0) {
    return null;
  }

  return (
    <section className="rounded-3xl border border-[#d4c5b0] bg-[#faf8f3] p-6 shadow-md shadow-black/10 sm:p-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d946a6]">
            Services
          </p>
          <h2 className="mt-1 text-xl font-semibold tracking-tight text-[#2d2416] sm:text-2xl">
            Tout est pensé pour votre confort
          </h2>
        </div>
      </div>
      <ul className="mt-4 flex flex-wrap gap-2 text-xs text-[#6b5d4f]">
        {services.map((service) => (
          <li
            key={service}
            className="rounded-full border border-[#d4c5b0] bg-[#fce7f3] px-3 py-1 shadow-sm shadow-black/10"
          >
            {service}
          </li>
        ))}
      </ul>
    </section>
  );
}