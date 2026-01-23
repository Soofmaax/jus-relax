import type { Metadata } from "next";
import Section from "@/components/Section";
import CTAButtons from "@/components/CTAButtons";
import SocialLinks from "@/components/SocialLinks";
import MapEmbed from "@/components/MapEmbed";
import Breadcrumbs from "@/components/Breadcrumbs";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { justRelaxData } from "@/lib/just-relax-data";
import { SITE_URL } from "@/lib/seo";
import { pageSeo } from "@/lib/page-seo";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = pageSeo.contact;

export default function ContactPage() {
  const phoneHref = justRelaxData.contact.phoneMain
    ? `tel:${justRelaxData.contact.phoneMain.replace(/\s+/g, "")}`
    : "#";

  const emailHref = justRelaxData.contact.email
    ? `mailto:${justRelaxData.contact.email}`
    : "#";

  const mapUrl = justRelaxData.contact.address.mapUrl;

  const hasSocial = Object.values(justRelaxData.social).some(
    (value) => value && value.trim().length > 0
  );

  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${SITE_URL.replace(/\/$/, "")}/contact#contact-page`,
    url: `${SITE_URL.replace(/\/$/, "")}/contact`,
    about: {
      "@id": `${SITE_URL.replace(/\/$/, "")}/#restaurant`,
    },
    inLanguage: "fr-FR",
  };

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-10 pb-16 pt-6 sm:pb-24 sm:pt-4">
      <Breadcrumbs
        items={[
          { label: "Accueil", href: "/" },
          { label: "Contact" },
        ]}
      />
      <BreadcrumbJsonLd
        items={[
          { label: "Accueil", href: "/" },
          { label: "Contact", href: "/contact" },
        ]}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <Section title="Contact" eyebrow="Nous écrire ou réserver">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr),minmax(0,1fr)] md:items-start">
          <div className="space-y-5 text-sm text-[#6b5d4f]">
            <div>
              <p>
                Une question, une réservation, un événement privé à organiser ?
                Contactez{" "}
                <span className="font-semibold">{justRelaxData.name}</span> par
                téléphone, e-mail ou via le formulaire ci-dessous.
              </p>
              {justRelaxData.contact.phoneMain && (
                <a
                  href={phoneHref}
                  className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-[#d946a6] px-5 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-[#f472b6]/70 transition hover:bg-[#f472b6] hover:ring-[#fce7f3] sm:w-auto"
                >
                  Appeler maintenant
                </a>
              )}
            </div>
            <div className="space-y-2 text-sm">
              {justRelaxData.contact.phoneMain && (
                <p>
                  <span className="font-semibold text-[#2d2416]">
                    Téléphone :
                  </span>{" "}
                  <a
                    href={phoneHref}
                    className="underline-offset-2 hover:underline"
                  >
                    {justRelaxData.contact.phoneMain}
                  </a>
                </p>
              )}
              {justRelaxData.contact.email && (
                <p>
                  <span className="font-semibold text-[#2d2416]">E-mail :</span>{" "}
                  <a
                    href={emailHref}
                    className="underline-offset-2 hover:underline"
                  >
                    {justRelaxData.contact.email}
                  </a>
                </p>
              )}
            </div>
            <CTAButtons data={justRelaxData} layout="inline" />
            {hasSocial && (
              <div className="pt-2">
                <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d946a6]">
                  Nous suivre
                </h2>
                <SocialLinks social={justRelaxData.social} />
              </div>
            )}
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl border border-[#d4c5b0] bg-[#faf8f3] p-5 shadow-md shadow-black/10 sm:p-6">
              <h2 className="text-sm font-semibold text-[#2d2416]">
                Formulaire de contact
              </h2>
              <p className="mt-1 text-[11px] text-[#6b5d4f]">
                Merci de renseigner vos coordonnées et l&apos;objet de votre demande.
                Nous reviendrons vers vous dans les meilleurs délais pour confirmer
                votre réservation ou vous apporter une réponse personnalisée.
              </p>
              <ContactForm />
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
    </div>
  );
}