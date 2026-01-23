import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <nav
      aria-label="Fil d'Ariane"
      className="mb-3 text-[11px] text-[#6b5d4f] sm:mb-4"
    >
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li
              key={`${item.label}-${index}`}
              className="flex items-center gap-1"
            >
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="underline-offset-2 hover:text-[#d946a6] hover:underline"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={
                    isLast ? "font-semibold text-[#2d2416]" : undefined
                  }
                >
                  {item.label}
                </span>
              )}
              {!isLast && <span className="text-[#d4c5b0]">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}