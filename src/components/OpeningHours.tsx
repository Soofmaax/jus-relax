import type { OpeningHourRange } from "@/lib/just-relax-schema";

interface OpeningHoursProps {
  ranges: OpeningHourRange[];
}

export default function OpeningHours({ ranges }: OpeningHoursProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/40 p-5 text-sm shadow-lg shadow-black/40 sm:p-6">
      <h3 className="text-sm font-semibold text-slate-50">
        Horaires d&apos;ouverture
      </h3>
      <div className="mt-3 space-y-3">
        {ranges.map((range) => (
          <div
            key={range.days}
            className="flex items-baseline justify-between gap-4"
          >
            <p className="text-xs font-medium uppercase tracking-wide text-slate-300">
              {range.days}
            </p>
            <div className="text-right text-xs text-slate-100">
              {range.slots.map((slot) => (
                <div key={`${range.days}-${slot.from}-${slot.to}`}>
                  <span>
                    {slot.from} – {slot.to}
                  </span>
                  {slot.label && (
                    <span className="ml-1 text-slate-400">({slot.label})</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 text-[11px] text-slate-400">
        Les horaires peuvent varier les jours fériés ou lors d&apos;événements
        privés. N&apos;hésitez pas à appeler le restaurant pour confirmation.
      </p>
    </div>
  );
}