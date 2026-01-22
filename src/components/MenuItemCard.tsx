import type { MenuItem } from "@/lib/just-relax-schema";

interface MenuItemCardProps {
  item: MenuItem;
}

export default function MenuItemCard({ item }: MenuItemCardProps) {
  const isPlaceholder = item.isPlaceholder;

  return (
    <div className="flex items-start justify-between gap-4 rounded-2xl border border-white/10 bg-black/40 p-4 text-sm shadow-sm shadow-black/40">
      <div>
        <div className="flex items-center gap-2">
          <h4 className="font-medium text-slate-50">{item.name}</h4>
          {isPlaceholder && (
            <span className="rounded-full bg-amber-400/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-200">
              À compléter
            </span>
          )}
        </div>
        {item.description && (
          <p className="mt-1 text-xs text-slate-300">{item.description}</p>
        )}
      </div>
      {item.price && (
        <p className="shrink-0 text-xs font-semibold text-amber-200">
          {item.price}
        </p>
      )}
    </div>
  );
}