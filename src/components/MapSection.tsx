import type { JustRelaxData } from "@/lib/just-relax-schema";
import MapEmbed from "./MapEmbed";

/**
 * Section carte, pour renforcer la dimension locale.
 */
export default function MapSection({ data }: { data: JustRelaxData }) {
  const mapUrl = data.contact.address.mapUrl;

  if (!mapUrl) {
    return null;
  }

  return (
    <section className="rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/60 sm:p-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
            Localisation
          </p>
          <h2 className="mt-1 text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Just Relax à Pantin (93500)
          </h2>
          <p className="mt-2 max-w-xl text-sm text-slate-200/90">
            {data.contact.address.line1} · {data.contact.address.postalCode}{" "}
            {data.contact.address.city}. Vérifiez votre itinéraire en un clic et
            rejoignez-nous pour votre prochaine soirée.
          </p>
        </div>
      </div>
      <div className="mt-5">
        <MapEmbed
          mapUrl={mapUrl}
          title={`Plan d'accès à ${data.name}`}
        />
      </div>
    </section>
  );
}