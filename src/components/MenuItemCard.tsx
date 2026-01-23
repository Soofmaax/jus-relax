import type { MenuItem } from "@/lib/just-relax-schema";

interface MenuItemCardProps {
  item: MenuItem;
}

export default function MenuItemCard({ item }: MenuItemCardProps) {
  const isPlaceholder = item.isPlaceholder;
  const isHighlight = item.isHighlight;

  const baseContainerClass =
    "relative flex items-start justify-between gap-4 overflow-hidden rounded-2xl border px-4 py-3 text-sm shadow-[0_12px_28px_rgba(0,0,0,0.12)]";
  const regularVariantClass =
    "border-[#d4c5b0] bg-[#faf8f3]";
  const highlightVariantClass =
    "border-[#d946a6] bg-gradient-to-r from-[#fce7f3] via-[#f5ede3] to-transparent";

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
            ? "pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(248,250,252,0.4),_transparent_55%),radial-gradient(circle_at_bottom_right,_rgba(217,70,166,0.18),_transparent_55%)]"
            : "pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(250,248,243,0.6),_transparent_60%),radial-gradient(circle_at_bottom_right,_rgba(163,150,137,0.18),_transparent_65%)]"
        }
      />
      <div className="relative z-10">
        <div className="flex items-center gap-2">
          <h4
            className={
              isHighlight
                ? "font-semibold text-[#2d2416]"
                : "font-medium text-[#2d2416]"
            }
          >
            {item.name}
          </h4>
          {isPlaceholder && (
            <span className="rounded-full bg-[#fce7f3] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#d946a6]">
              À compléter
            </span>
          )}
        </div>
        {item.description && (
          <p
            className="mt-1 text-xs text-[#6b5d4f]"
          >
            {item.description}
          </p>
        )}
      </div>
      {item.price && (
        <p
          className={
            isHighlight
              ? "relative z-10 shrink-0 text-xs font-semibold text-[#d946a6]"
              : "shrink-0 text-xs font-semibold text-[#6b5d4f]"
          }
        >
          {item.price}
        </p>
      )}
    </div>
  );
}