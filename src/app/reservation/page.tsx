import type { Metadata } from "next";
import Section from "@/components/Section";
import CTAButtons from "@/components/CTAButtons";
import OpeningHours from "@/components/OpeningHours";
import MapEmbed from "@/components/MapEmbed";
import Breadcrumbs from "@/components/Breadcrumbs";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { justRelaxData } from "@/lib/just-relax-data";
import { SITE_URL } from "@/lib/seo";
import { pageSeo } from "@/lib/page-seo";

export const metadata: Metadata = pageSeo.reservation;

export default function ReservationPage() {
  const mapUrl = justRelaxData.contact.address.mapUrl;
  const baseUrl = SITE_URL.replace(/\/$/, "");
  const phone = justRelaxData.contact.phoneMain;

  const reservationJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${baseUrl}/reservation#reservation-page`,
    url: `${baseUrl}/reservation`,
    name: `Réservation – ${justRelaxData.name}`,
    inLanguage: "fr-FR",
    about: {
      "@id": `${baseUrl}/#restaurant`,
    },
    ...(phone
      ? {
          potentialAction: {
            "@type": "ReserveAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: `tel:${phone.replace(/\s+/g, "")}`,
            },
            result: {
              "@type": "Reservation",
              provider: {
                "@id": `${baseUrl}/#restaurant`,
              },
            },
          },
        }
      : {}),
  };

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-10 pb-16 pt-6 sm:pb-24 sm:pt-8">
      <Breadcrumbs
        items={[
          { label: "Accueil", href: "/" },
          { label: "Réserver une table" },
        ]}
      />
      <BreadcrumbJsonLd
        items={[
          { label: "Accueil", href: "/" },
          { label: "Réserver une table", href: "/reservation" },
        ]}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reservationJsonLd) }}
      />
      <Section
        title="Réserver une table"
        eyebrow="Just Relax — Restaurant &amp; Lounge"
        background="subtle"
      >
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr),minmax(0,1fr)] md:items-start">
          <div className="space-y-4 text-sm text-[#6b5d4f]">
            <p>
              Pour un dîner en tête-à-tête, un anniversaire, un afterwork ou un
              événement privé, l&apos;équipe de{` `}
              <span className="font-semibold">{justRelaxData.name}</span> vous
              accueille à Pantin, avec terrasse privée, lounge chicha et cuisine
              100 % halal.
            </p>
            <p>
              La réservation est vivement recommandée, en particulier pour
              les soirées de week-end et les groupes.
            </p>
            <CTAButtons data={justRelaxData} layout="stacked" />
            <div className="mt-2 text-xs text-[#6b5d4f]">
              <p>
                Horaires habituels&nbsp;: Lun–Ven 11h–02h · Sam–Dim 15h–02h
                (susceptibles de varier les jours fériés ou en cas
                d&apos;événement privé).
              </p>
            </div>
          </div>
          <div className="space-y-4">
            {/* NOTE développeur :
               Lorsque vous intégrerez un widget tiers (TheFork, module interne, etc.),
               privilégiez un script asynchrone et/ou une iframe chargée en lazy
               pour ne pas bloquer le rendu de la page. Évitez `document.write` et
               les scripts qui supposent la présence d'éléments en dehors de ce bloc. */}
            <div className="rounded-3xl border border-[#d4c5b0] bg-[#faf8f3] p-5 text-sm text-[#6b5d4f] shadow-md shadow-black/10 sm:p-6">
              <h2 className="text-sm font-semibold text-[#2d2416]">
                Widget de réservation en ligne
              </h2>
              <p className="mt-2 text-xs text-[#6b5d4f]">
                Cet encart est prévu pour accueillir votre futur widget de
                réservation (TheFork, plateforme interne, module développé sur
                mesure, etc.).
              </p>
              <p className="mt-2 text-xs text-[#6b5d4f]">
                Une fois l&apos;outil choisi, il suffira d&apos;intégrer ici le script
                ou l&apos;iframe fourni par la plateforme, sans modifier le reste de
                la page.
              </p>
            </div>
            {mapUrl && (
              <MapEmbed
                mapUrl={mapUrl}
                title={`Plan d'accès à ${justRelaxData.name}`}
              />
            )}
          </div>
        </div>
      </Section>

      <Section
        title="Horaires &amp; informations pratiques"
        eyebrow="Préparer votre venue"
        background="subtle"
      >
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr),minmax(0,1fr)] md:items-start">
          <OpeningHours ranges={justRelaxData.openingHours} />
          <div className="space-y-3 text-sm text-[#6b5d4f]">
            <p className="font-semibold text-[#2d2416]">
              {justRelaxData.contact.address.line1}
              <br />
              {justRelaxData.contact.address.postalCode}{" "}
              {justRelaxData.contact.address.city}
            </p>
            <p>
              Le restaurant est facilement accessible en transports en commun
              comme en voiture. N&apos;hésitez pas à préciser vos besoins (groupe,
              privatisation, allergies…) lors de votre demande.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}