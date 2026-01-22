import type { JustRelaxData } from "@/lib/just-relax-schema";
import { getReservationInfo } from "@/lib/reservation";

interface CTAButtonsProps {
  data: JustRelaxData;
  layout?: "inline" | "stacked";
  /**
   * Contexte d'affichage :
   * - "default" : tous les CTA (réserver, appeler, itinéraire, menu)
   * - "hero" : mise en avant de 2 CTA principaux (Réserver / Appeler)
   */
  context?: "default" | "hero";
}

export default function CTAButtons({
  data,
  layout = "inline",
  context = "default",
}: CTAButtonsProps) {
  const phoneHref = data.contact.phoneMain
    ? `tel:${data.contact.phoneMain.replace(/\s+/g, "")}`
    : "#";

  const mapHref = data.contact.address.mapUrl || "#";

  const reservation = getReservationInfo(data.contact);

  const baseClass =
    "inline-flex items-center justify-center rounded-full text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";

  const primaryClass =
    "bg-amber-400 px-4 py-2 text-slate-950 shadow-sm ring-1 ring-amber-300/70 hover:bg-amber-300 hover:ring-amber-200";

  const secondaryClass =
    "border border-white/25 px-4 py-2 text-slate-100 hover:border-amber-300/80 hover:text-amber-200";

  const layoutClass =
    layout === "stacked"
      ? "flex flex-col gap-3"
      : "flex flex-wrap gap-3 items-center";

  if (context === "hero") {
    return (
      <div className={layoutClass}>
        <a
          href={reservation.href}
          target={reservation.target}
          rel={reservation.rel}
          className={`${baseClass} ${primaryClass} text-sm sm:text-base px-6 py-2.5`}
        >
          {reservation.label}
        </a>
        <a
          href={phoneHref}
          className={`${baseClass} ${secondaryClass} text-sm sm:text-base px-6 py-2.5`}
        >
          Appeler
        </a>
      </div>
    );
  }

  return (
    <div className={layoutClass}>
      <a
        href={reservation.href}
        target={reservation.target}
        rel={reservation.rel}
        className={`${baseClass} ${primaryClass}`}
      >
        {reservation.label}
      </a>
      <a href={phoneHref} className={`${baseClass} ${secondaryClass}`}>
        Appeler
      </a>
      <a
        href={mapHref}
        target="_blank"
        rel="noreferrer"
        className={`${baseClass} ${secondaryClass}`}
      >
        Itinéraire
      </a>
      <a href="/menu" className={`${baseClass} ${secondaryClass}`}>
        Voir le menu
      </a>
    </div>
  );
}