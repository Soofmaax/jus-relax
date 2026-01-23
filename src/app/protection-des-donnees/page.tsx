import type { Metadata } from "next";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { justRelaxData } from "@/lib/just-relax-data";
import { pageSeo } from "@/lib/page-seo";

export const metadata: Metadata = pageSeo.protectionDonnees;

export default function ProtectionDesDonneesPage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-10 pb-16 pt-6 sm:pb-24 sm:pt-8">
      <Breadcrumbs
        items={[
          { label: "Accueil", href: "/" },
          { label: "Protection des données" },
        ]}
      />
      <BreadcrumbJsonLd
        items={[
          { label: "Accueil", href: "/" },
          { label: "Protection des données", href: "/protection-des-donnees" },
        ]}
      />
      <Section
        title="Protection des données"
        eyebrow="Politique de confidentialité"
        background="subtle"
      >
        <div className="space-y-4 text-sm text-[#6b5d4f]">
          <p>
            La présente page décrit la manière dont{" "}
            <span className="font-semibold">{justRelaxData.name}</span> traite
            les données personnelles collectées via ce site vitrine, en
            particulier au travers du formulaire de contact et des outils de
            mesure d&apos;audience éventuels.
          </p>

          <div className="space-y-2 text-xs text-[#6b5d4f]">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d946a6]">
              Responsable de traitement
            </h2>
            <p>
              Le responsable de traitement est{" "}
              {justRelaxData.legal.companyName || justRelaxData.name},{" "}
              situé au {justRelaxData.contact.address.line1},{" "}
              {justRelaxData.contact.address.postalCode}{" "}
              {justRelaxData.contact.address.city}.
            </p>
          </div>

          <div className="space-y-2 text-xs text-[#6b5d4f]">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d946a6]">
              Données collectées
            </h2>
            <p>
              Via le formulaire de contact, les données suivantes peuvent être
              collectées&nbsp;:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Nom et prénom</li>
              <li>Adresse e-mail</li>
              <li>Numéro de téléphone (facultatif)</li>
              <li>Objet et contenu du message</li>
            </ul>
            <p>
              Ces informations sont utilisées uniquement pour répondre à votre
              demande (réservation, question, organisation d&apos;événement, etc.).
            </p>
          </div>

          <div className="space-y-2 text-xs text-[#6b5d4f]">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d946a6]">
              Base légale &amp; durée de conservation
            </h2>
            <p>
              Le traitement de vos données repose sur l&apos;intérêt légitime du
              restaurant à répondre aux demandes reçues et à assurer le suivi
              des réservations.
            </p>
            <p>
              Les messages peuvent être conservés pendant une durée limitée,
              nécessaire au traitement de la demande et à la gestion de la
              relation client, puis supprimés ou archivés.
            </p>
          </div>

          <div className="space-y-2 text-xs text-[#6b5d4f]">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d946a6]">
              Destinataires des données
            </h2>
            <p>
              Les données transmises via ce site sont destinées exclusivement
              à l&apos;équipe du restaurant et ne font l&apos;objet d&apos;aucune vente à
              des tiers. Elles peuvent être partagées avec des prestataires
              techniques (hébergeur, outil d&apos;e-mailing) strictement pour les
              besoins du service.
            </p>
          </div>

          <div className="space-y-2 text-xs text-[#6b5d4f]">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d946a6]">
              Vos droits
            </h2>
            <p>
              Conformément à la réglementation en vigueur, vous disposez d&apos;un
              droit d&apos;accès, de rectification, d&apos;effacement, de limitation et
              d&apos;opposition concernant vos données personnelles. Vous pouvez
              également définir le sort de vos données après votre décès.
            </p>
            <p>
              Pour exercer ces droits, vous pouvez contacter le restaurant à
              l&apos;adresse suivante&nbsp;:{" "}
              <a
                href={`mailto:${justRelaxData.contact.email}`}
                className="underline-offset-2 hover:underline"
              >
                {justRelaxData.contact.email}
              </a>
              .
            </p>
          </div>

          <div className="space-y-2 text-xs text-[#6b5d4f]">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d946a6]">
              Cookies &amp; mesure d&apos;audience
            </h2>
            <p>
              Le site peut utiliser des outils de mesure d&apos;audience ou des
              services tiers (par exemple&nbsp;: statistiques anonymisées de
              fréquentation). Si des cookies non strictement nécessaires sont
              mis en place, un bandeau d&apos;information et de consentement sera
              proposé lors de votre première visite.
            </p>
          </div>

          <p className="text-[11px] text-[#6b5d4f]">
            Cette page pourra être ajustée et complétée en fonction des outils
            finalement utilisés (solution de réservation en ligne, analytics,
            hébergeur définitif, etc.).
          </p>
        </div>
      </Section>
    </div>
  );
}