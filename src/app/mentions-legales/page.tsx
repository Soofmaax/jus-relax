import type { Metadata } from "next";
import Section from "@/components/Section";
import { justRelaxData } from "@/lib/just-relax-data";
import { pageSeo } from "@/lib/page-seo";

export const metadata: Metadata = pageSeo.mentionsLegales;

export default function MentionsLegalesPage() {
  const legal = justRelaxData.legal;

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-10 pb-16 pt-6 sm:pb-24 sm:pt-4">
      <Section title="Mentions légales" eyebrow="Informations réglementaires" background="subtle">
        <div className="space-y-6 text-sm text-slate-100/90">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-1">
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
                Éditeur du site
              </h2>
              <p>
                <span className="font-semibold">{legal.companyName}</span>
                {legal.firstName && legal.lastName && (
                  <>
                    <br />
                    {legal.firstName} {legal.lastName}
                  </>
                )}
              </p>
            </div>
            <div className="space-y-1">
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
                Coordonnées
              </h2>
              <p>
                {legal.addressLine1 && (
                  <>
                    {legal.addressLine1}
                    <br />
                  </>
                )}
                {legal.postalCode} {legal.city}
                <br />
                {legal.country}
              </p>
              {legal.phone && (
                <p className="mt-1">
                  Tél :{" "}
                  <a
                    href={`tel:${legal.phone.replace(/\s+/g, "")}`}
                    className="underline-offset-2 hover:underline"
                  >
                    {legal.phone}
                  </a>
                </p>
              )}
              {legal.email && (
                <p>
                  E-mail :{" "}
                  <a
                    href={`mailto:${legal.email}`}
                    className="underline-offset-2 hover:underline"
                  >
                    {legal.email}
                  </a>
                </p>
              )}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-1">
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
                Informations juridiques
              </h2>
              {legal.registrationType && legal.registrationNumber && (
                <p>
                  {legal.registrationType} : {legal.registrationNumber}
                </p>
              )}
              {legal.localTaxNumber && (
                <p>Numéro fiscal local : {legal.localTaxNumber}</p>
              )}
              {legal.shareCapital && (
                <p>Capital social : {legal.shareCapital}</p>
              )}
            </div>
            <div className="space-y-1">
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
                Hébergement
              </h2>
              <p className="text-slate-300">
                Ce site est hébergé par un prestataire d&apos;infrastructure web
                professionnel. Les informations complètes relatives à l&apos;hébergeur
                (raison sociale, adresse, coordonnées) peuvent être communiquées
                sur simple demande auprès du propriétaire du restaurant.
              </p>
            </div>
          </div>

          <div className="space-y-2 text-xs text-slate-300">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
              Propriété intellectuelle
            </h2>
            <p>
              L&apos;ensemble des éléments graphiques, textes et visuels
              présentés sur ce site a pour objectif de mettre en valeur
              l&apos;univers du restaurant. Les contenus définitifs (photos,
              textes, logos) pourront être ajustés et validés par le
              propriétaire du restaurant avant la mise en ligne officielle.
            </p>
            <p>
              Toute reproduction ou utilisation non autorisée du design ou des
              contenus définitifs pourra faire l&apos;objet de poursuites
              conformes aux dispositions du Code de la propriété intellectuelle.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}