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
    <section className="rounded-3xl border border-[#d4c5b0] bg-[#faf8f3] p-6 shadow-md shadow-black/10 sm:p-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d946a6]">
            Localisation
          </p>
          <h2 className="mt-1 text-xl font-semibold tracking-tight text-[#2d2416] sm:text-2xl">
            Just Relax, aux portes de Paris
          </h2>
          <p className="mt-2 max-w-xl text-sm text-[#6b5d4f]">
            {data.contact.address.line1} · {data.contact.address.postalCode}{" "}
            {data.contact.address.city}. Préparez votre itinéraire en un clic
            et retrouvez-nous pour votre prochain dîner ou afterwork.
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