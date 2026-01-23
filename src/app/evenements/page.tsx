import type { Metadata } from "next";
import Section from "@/components/Section";
import CTAButtons from "@/components/CTAButtons";
import Breadcrumbs from "@/components/Breadcrumbs";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { justRelaxData } from "@/lib/just-relax-data";
import { SITE_URL } from "@/lib/seo";
import { pageSeo } from "@/lib/page-seo";

export const metadata: Metadata = pageSeo.evenements;

export default function EvenementsPage() {
  const faq = [
    {
      question: "Peut-on privatiser tout le restaurant Just Relax ?",
      answer:
        "Oui, selon la date, l’horaire et le nombre de personnes, il est possible de privatiser tout l’établissement ou seulement une partie (salle, terrasse, espace lounge).",
    },
    {
      question: "Combien de personnes peut accueillir un événement privé ?",
      answer:
        "La capacité dépend de la configuration souhaitée (repas à table, cocktail dînatoire, mix terrasse / intérieur). Contactez-nous avec votre projet et nous vous confirmerons la capacité adaptée.",
    },
    {
      question: "Proposez-vous des formules groupe ou des menus spéciaux ?",
      answer:
        "Oui, nous pouvons prévoir des menus fixes, des formules groupe ou un cocktail dînatoire sur mesure, en fonction de votre budget et de l’occasion.",
    },
    {
      question: "Jusqu’à quelle heure peut-on rester pour un événement ?",
      answer:
        "Le restaurant est ouvert 7j/7 jusqu’à 2h du matin. Les horaires précis de votre événement seront définis ensemble lors de la réservation.",
    },
  ];

  const baseUrl = SITE_URL.replace(/\/$/, "");
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${baseUrl}/evenements#faq`,
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-16 pt-8 sm:px-6 sm:pb-24 sm:pt-10">
      <Breadcrumbs
        items={[
          { label: "Accueil", href: "/" },
          { label: "Privatisation & événements" },
        ]}
      />
      <BreadcrumbJsonLd
        items={[
          { label: "Accueil", href: "/" },
          { label: "Privatisation & événements", href: "/evenements" },
        ]}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Section
        title="Privatisation & événements privés"
        eyebrow="Événements · Afterworks · Réceptions"
        background="subtle"
      >
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr),minmax(0,1fr)] md:items-start">
          <div className="space-y-4 text-sm text-[#6b5d4f]">
            <p>
              Pour vos anniversaires, afterworks, soirées d&apos;entreprise ou
              événements privés,{` `}
              <span className="font-semibold">{justRelaxData.name}</span> vous
              propose un cadre chaleureux à Pantin (93500), avec terrasse
              privée, espace lounge, cuisine 100 % halal et service
              jusqu&apos;à 2h du matin.
            </p>
            <p>
              Selon la taille de votre groupe et le type d&apos;événement, il est
              possible de privatiser une partie du restaurant (salle, terrasse,
              espace lounge) ou l&apos;établissement complet, sur demande.
            </p>
            <p>
              Nous étudions chaque projet sur mesure : menus adaptés, formule
              cocktail dînatoire, ambiance musicale, configuration des tables
              et horaires étendus.
            </p>
            <div className="pt-2">
              <CTAButtons data={justRelaxData} layout="stacked" />
            </div>
          </div>
          <div className="space-y-4 text-sm text-[#6b5d4f]">
            <div className="rounded-3xl border border-[#d4c5b0] bg-[#faf8f3] p-5 shadow-md shadow-black/10">
              <h2 className="text-sm font-semibold text-[#d946a6]">
                Types d&apos;événements
              </h2>
              <ul className="mt-3 space-y-2 text-xs text-[#6b5d4f]">
                <li>• Anniversaires, soirées entre amis</li>
                <li>• Afterworks &amp; soirées d&apos;entreprise</li>
                <li>• Réunions d&apos;équipe, lancements de projet</li>
                <li>• Réceptions familiales, repas de groupe</li>
                <li>• Privatisation partielle ou totale sur demande</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-[#d4c5b0] bg-[#faf8f3] p-5 shadow-md shadow-black/10">
              <h2 className="text-sm font-semibold text-[#d946a6]">
                Informations pratiques
              </h2>
              <ul className="mt-3 space-y-2 text-xs text-[#6b5d4f]">
                <li>
                  • Capacité indicative : à ajuster selon la configuration et la
                  saison (intérieur / terrasse).
                </li>
                <li>• Options : menu fixe, formule groupe, cocktail dînatoire.</li>
                <li>• Ouverture 7j/7 jusqu&apos;à 2h du matin à Pantin (93).</li>
                <li>
                  • Accès facile depuis Paris et les communes voisines
                  (métro / bus / voiture).
                </li>
              </ul>
              <p className="mt-3 text-[11px] text-[#6b5d4f]">
                Les modalités précises (nombre de personnes, budget, horaires)
                seront définies ensemble lors de la demande de devis.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section
        title="Questions fréquentes sur la privatisation"
        eyebrow="FAQ événements"
        background="subtle"
      >
        <div className="space-y-4 text-sm text-[#6b5d4f]">
          {faq.map((item) => (
            <div
              key={item.question}
              className="rounded-2xl border border-[#d4c5b0] bg-[#faf8f3] p-4 text-sm shadow-md shadow-black/10"
            >
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d946a6]">
                {item.question}
              </h3>
              <p className="mt-2 text-xs text-[#6b5d4f]">{item.answer}</p>
            </div>
          ))}
          <p className="mt-3 text-[11px] text-[#6b5d4f]">
            Pour toute demande spécifique (DJ, décoration, privatisation totale
            en dehors des horaires habituels, etc.), n&apos;hésitez pas à nous
            contacter : nous étudierons votre projet en détail.
          </p>
        </div>
      </Section>
    </div>
  );
}