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
        <p className="max-w-2xl text-sm text-slate-200/90">
          Carte des plats, des boissons et des chichas : découvrez l&apos;univers
          Just Relax. Les cartes PDF vous permettent de consulter le détail
          complet, tandis que la carte digitale ci-dessous offre une lecture
          confortable sur mobile.
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {justRelaxData.menus.map((menu) => (
            <div
              key={menu.id}
              className="flex flex-col justify-between rounded-3xl border border-white/10 bg-black/40 p-5 shadow-md shadow-black/40"
            >
              <div>
                <h3 className="text-base font-semibold text-slate-50">
                  {menu.name}
                </h3>
                {menu.description && (
                  <p className="mt-2 text-xs text-slate-300">
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
                    className="inline-flex items-center rounded-full bg-amber-400 px-4 py-2 font-semibold text-slate-950 shadow-sm ring-1 ring-amber-300/70 transition hover:bg-amber-300 hover:ring-amber-200"
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
        <div className="mb-5 flex snap-x gap-2 overflow-x-auto pb-1 text-xs text-slate-100/90">
          {categoryLinks.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="snap-start rounded-full border border-white/20 bg-black/40 px-3 py-1 font-medium transition hover:border-amber-300/80 hover:text-amber-200"
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
                <h3 className="text-sm font-semibold text-slate-50">
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
          <div className="space-y-3 text-sm text-slate-100/90">
            <p>
              Pour vos repas, anniversaires, afterworks ou événements privés,{" "}
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