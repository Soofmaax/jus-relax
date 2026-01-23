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
    "inline-flex items-center justify-center rounded-full text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f9a8d4] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fff7fb]";

  const primaryClass =
    "bg-[#ec4899] px-4 py-2 text-white shadow-sm ring-1 ring-[#f9a8d4]/80 hover:bg-[#f472b6] hover:ring-[#fbcfe8]";

  const secondaryClass =
    "border border-[#f9c5d5] px-4 py-2 text-[#9d174d] hover:border-[#ec4899] hover:text-[#ec4899]";

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