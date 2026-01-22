import type { Metadata } from "next";
import Section from "@/components/Section";
import OpeningHours from "@/components/OpeningHours";
import MapEmbed from "@/components/MapEmbed";
import CTAButtons from "@/components/CTAButtons";
import { justRelaxData } from "@/lib/just-relax-data";
import { pageSeo } from "@/lib/page-seo";

export const metadata: Metadata = pageSeo.accesHoraires;

export default function AccesHorairesPage() {
  const mapUrl = justRelaxData.contact.address.mapUrl;

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-16 pt-8 sm:px-6 sm:pb-24 sm:pt-10">
      <Section
        title="Accès &amp; horaires"
        eyebrow="Venir chez Just Relax"
      >
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr),minmax(0,1fr)] md:items-start">
          <div className="space-y-5 text-sm text-slate-100/90">
            <p className="font-semibold text-slate-50">
              {justRelaxData.contact.address.line1}
              <br />
              {justRelaxData.contact.address.postalCode}{" "}
              {justRelaxData.contact.address.city}
            </p>
            <p>
              Situé au cœur de Pantin, à proximité des grands axes et des
              transports, {justRelaxData.name} est facilement accessible pour
              vos déjeuners, dîners et soirées.
            </p>
            <OpeningHours ranges={justRelaxData.openingHours} />
            <div className="pt-2">
              <CTAButtons data={justRelaxData} layout="stacked" />
            </div>
          </div>
          <div>
            <MapEmbed
              mapUrl={mapUrl}
              title={`Plan d'accès à ${justRelaxData.name}`}
            />
            <p className="mt-2 text-[11px] text-slate-400">
              Si la carte ne s&apos;affiche pas correctement, vérifiez l&apos;URL
              dans <code>data/just-relax.json</code>, champ{" "}
              <code>contact.address.mapUrl</code>.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}