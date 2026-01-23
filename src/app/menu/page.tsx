import type { Metadata } from "next";
import Section from "@/components/Section";
import CTAButtons from "@/components/CTAButtons";
import MenuItemCard from "@/components/MenuItemCard";
import { justRelaxData } from "@/lib/just-relax-data";
import { pageSeo } from "@/lib/page-seo";
import { digitalMenuCategories } from "@/lib/menu-content";

export const metadata: Metadata = pageSeo.menu;

export default function MenuPage() {
  const mainPdf =
    justRelaxData.menus.find((menu) => menu.id === "just-menu") ||
    justRelaxData.menus[0];

  const categoryLinks = digitalMenuCategories.map((category) => ({
    id: category.id,
    name: category.name,
  }));

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-10 pb-16 pt-6 sm:pb-24 sm:pt-4">
      <Section
        title="Nos cartes"
        eyebrow="Just Menu · Just Boisson · Just Chicha"
      >
        <p className="max-w-2xl text-sm text-[#6b5d4f]">
          Carte des plats, des boissons et des chichas : découvrez l&apos;univers
          Just Relax. Les cartes PDF vous permettent de consulter le détail
          complet, tandis que la carte digitale ci-dessous offre une lecture
          confortable sur mobile.
        </p>
        <p className="mt-3 max-w-2xl text-xs font-medium text-[#d946a6]">
          Tous nos plats sont préparés avec une cuisine 100 % halal.
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {justRelaxData.menus.map((menu) => (
            <div
              key={menu.id}
              className="flex flex-col justify-between rounded-3xl border border-[#d4c5b0] bg-[#faf8f3] p-5 shadow-md shadow-black/10"
            >
              <div>
                <h3 className="text-base font-semibold text-[#2d2416]">
                  {menu.name}
                </h3>
                {menu.description && (
                  <p className="mt-2 text-xs text-[#6b5d4f]">
                    {menu.description}
                  </p>
                )}
              </div>
              <div className="mt-4 flex flex-wrap gap-3 text-xs">
                {menu.pdfUrl && (
                  <a
                    href={menu.pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full bg-[#d946a6] px-4 py-2 font-semibold text-white shadow-sm ring-1 ring-[#f472b6]/70 transition hover:bg-[#f472b6] hover:ring-[#fce7f3]"
                  >
                    Consulter le PDF
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="carte-digitale"
        title="Carte digitale (aperçu)"
        eyebrow="Idéale pour une consultation sur mobile"
        background="subtle"
        cta={
          mainPdf?.pdfUrl
            ? {
                label: "Télécharger le PDF",
                href: mainPdf.pdfUrl,
              }
            : undefined
        }
      >
        <div className="mb-5 flex snap-x gap-2 overflow-x-auto pb-1 text-xs text-[#6b5d4f]">
          {categoryLinks.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="snap-start rounded-full border border-[#d4c5b0] bg-[#f5ede3] px-3 py-1 font-medium transition hover:border-[#d946a6] hover:text-[#d946a6]"
            >
              {category.name}
            </a>
          ))}
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {digitalMenuCategories.map((category) => (
            <section
              key={category.id}
              id={category.id}
              className="space-y-4"
              aria-label={category.name}
            >
              <div>
                <h3 className="text-sm font-semibold text-[#2d2416]">
                  {category.name}
                </h3>
              </div>
              <div className="space-y-3">
                {category.items.map((item) => (
                  <MenuItemCard
                    key={`${category.id}-${item.name}`}
                    item={item}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
        <p className="mt-5 text-[11px] text-slate-400">
          Cette carte digitale est un aperçu de présentation. La carte complète
          reste disponible en PDF et pourra être mise à jour à votre demande
          pour refléter précisément vos plats, vos prix et vos formules.
        </p>
      </Section>

      <Section
        id="reserve"
        title="Réserver une table"
        eyebrow="Réservation"
        background="subtle"
      >
        <div className="grid gap-6 md:grid-cols-[minmax(0,1.1fr),minmax(0,1fr)] md:items-center">
          <div className="space-y-3 text-sm text-[#6b5d4f]">
            <p>
              Pour vos repas, anniversaires, afterworks ou événements privés,{` `}
              <span className="font-semibold">{justRelaxData.name}</span> vous
              accueille dans un cadre cosy avec terrasse et espace lounge.
            </p>
            <p>
              Réservation recommandée en particulier pour les groupes et les
              soirées de week-end.
            </p>
          </div>
          <CTAButtons data={justRelaxData} layout="stacked" />
        </div>
      </Section>
    </div>
  );
}