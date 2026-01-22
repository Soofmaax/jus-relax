import type { MenuItem } from "@/lib/just-relax-schema";

interface MenuItemCardProps {
  item: MenuItem;
}

export default function MenuItemCard({ item }: MenuItemCardProps) {
  const isPlaceholder = item.isPlaceholder;
  const isHighlight = item.isHighlight;

  const baseContainerClass =
    "relative flex items-start justify-between gap-4 overflow-hidden rounded-2xl border px-4 py-3 text-sm shadow-[0_16px_40px_rgba(0,0,0,0.7)]";
  const regularVariantClass =
    "border-white/12 bg-black/60";
  const highlightVariantClass =
    "border-amber-300/70 bg-gradient-to-r from-amber-400/22 via-amber-300/12 to-transparent";

  const containerClass = [
    baseContainerClass,
    isHighlight ? highlightVariantClass : regularVariantClass,
  ].join(" ");

  return (
    <div className={containerClass}>
      <div
        aria-hidden="true"
        className={
          isHighlight
            ? "pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(248,250,252,0.2),_transparent_55%),radial-gradient(circle_at_bottom_right,_rgba(251,191,36,0.18),_transparent_55%)]"
            : "pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(248,250,252,0.09),_transparent_60%),radial-gradient(circle_at_bottom_right,_rgba(15,23,42,0.9),_transparent_65%)]"
        }
      />
      <div className="relative z-10">
        <div className="flex items-center gap-2">
          <h4
            className={
              isHighlight
                ? "font-semibold text-amber-50"
                : "font-medium text-slate-50"
            }
          >
            {item.name}
          </h4>
          {isPlaceholder && (
            <span className="rounded-full bg-amber-400/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-200">
              À compléter
            </span>
          )}
          {isHighlight && (
            <span className="rounded-full bg-black/50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-200 ring-1 ring-amber-300/70">
              Info
            </span>
          )}
        </div>
        {item.description && (
          <p
            className={
              isHighlight
                ? "mt-1 text-xs text-amber-50/90"
                : "mt-1 text-xs text-slate-300"
            }
          >
            {item.description}
          </p>
        )}
      </div>
      {item.price && (
        <p
          className={
            isHighlight
              ? "relative z-10 shrink-0 text-xs font-semibold text-amber-50"
              : "shrink-0 text-xs font-semibold text-amber-200"
          }
        >
          {item.price}
        </p>
      )}
    </div>
  );
}