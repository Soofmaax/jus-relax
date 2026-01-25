import type { JustRelaxData } from "@/lib/just-relax-schema";
import OpeningHours from "./OpeningHours";

/**
 * Section dédiée aux horaires, avec mise en avant de l'adresse.
 */
export default function HoursSection({ data }: { data: JustRelaxData }) {
  return (
    <section className="rounded-3xl border border-[var(--border-soft)] bg-[var(--surface)] p-6 shadow-md shadow-black/10 sm:p-8">
      <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr),minmax(0,1fr)] md:items-start">
        <div className="space-y-4 text-sm text-[var(--text-muted)]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              Accès &amp; horaires
            </p>
            <h2 className="mt-1 text-xl font-semibold tracking-tight text-[#2d2416] sm:text-2xl">
              Venir chez Just Relax
            </h2>
          </div>
          <p className="font-semibold text-[#2d2416]">
            {data.contact.address.line1}
            <br />
            {data.contact.address.postalCode} {data.contact.address.city}
          </p>
          <p className="text-sm text-[var(--text-muted)]">
            À quelques minutes de Paris, facilement accessible en métro, bus ou
            voiture. Idéal pour un déjeuner, un dîner ou une soirée prolongée
            jusqu&apos;à 2h du matin.
          </p>
        </div>
        <OpeningHours ranges={data.openingHours} />
      </div>
    </section>
  );
}