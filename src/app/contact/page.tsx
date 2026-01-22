import type { Metadata } from "next";
import Section from "@/components/Section";
import CTAButtons from "@/components/CTAButtons";
import SocialLinks from "@/components/SocialLinks";
import MapEmbed from "@/components/MapEmbed";
import { justRelaxData } from "@/lib/just-relax-data";
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

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-10 pb-16 pt-6 sm:pb-24 sm:pt-4">
      <Section title="Contact" eyebrow="Nous écrire ou réserver">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr),minmax(0,1fr)] md:items-start">
          <div className="space-y-5 text-sm text-slate-100/90">
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
                  className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-amber-400 px-5 py-2 text-sm font-semibold text-slate-950 shadow-sm ring-1 ring-amber-300/70 transition hover:bg-amber-300 hover:ring-amber-200 sm:w-auto"
                >
                  Appeler maintenant
                </a>
              )}
            </div>
            <div className="space-y-2 text-sm">
              {justRelaxData.contact.phoneMain && (
                <p>
                  <span className="font-semibold text-slate-50">
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
                  <span className="font-semibold text-slate-50">E-mail :</span>{" "}
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
            <div className="pt-2">
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
                Nous suivre
              </h2>
              <p className="mt-1 text-[11px] text-slate-400">
                Les badges ci-dessous illustrent l&apos;emplacement de vos futurs
                liens Instagram, Facebook ou TikTok. Ils seront reliés à vos
                comptes officiels dès que les URLs seront renseignées.
              </p>
              <SocialLinks social={justRelaxData.social} demo />
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-black/40 p-5 shadow-lg shadow-black/40 sm:p-6">
              <h2 className="text-sm font-semibold text-slate-50">
                Formulaire de contact
              </h2>
              <p className="mt-1 text-[11px] text-slate-400">
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