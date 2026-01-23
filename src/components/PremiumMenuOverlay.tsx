"use client";

import { useState } from "react";
import { digitalMenuCategories } from "@/lib/menu-content";

type MenuGroupKey = "cuisine" | "boissons" | "chicha";

interface FlatMenuItem {
  name: string;
  description: string;
  price: string;
}

function buildGroupedItems() {
  const cuisineCategoryIds = [
    "just-kids",
    "planches",
    "entrees",
    "salades",
    "supplements-plats",
    "burgers-gourmet",
    "just-express",
    "pizzas",
    "paninis-crepes",
    "casse-croutes",
    "pates",
    "viandes",
    "desserts",
  ];

  const drinksCategoryIds = [
    "cocktails-sans-alcool",
    "cocktails-classiques",
    "cocktails-signature",
    "boissons-soft",
    "just-bubble",
    "vins-rouges",
    "vins-blancs",
    "vins-roses",
    "champagnes",
    "boissons-chaudes",
    "supplements-boissons",
    "eaux-minerales",
    "bieres-bouteilles",
    "aperitifs",
    "gin-4cl",
    "vodka-4cl",
    "rhum-4cl",
    "whisky-4cl",
    "digestifs-4cl",
  ];

  const chichaCategoryIds = ["just-chicha", "formules-chicha"];

  const collect = (ids: string[]): FlatMenuItem[] =>
    digitalMenuCategories
      .filter((category) => ids.includes(category.id))
      .flatMap((category) =>
        category.items
          .filter((item) => !item.isHighlight)
          .map((item) => ({
            name: item.name,
            description: item.description,
            price: item.price,
          }))
      );

  return {
    cuisine: collect(cuisineCategoryIds),
    boissons: collect(drinksCategoryIds),
    chicha: collect(chichaCategoryIds),
  } satisfies Record<MenuGroupKey, FlatMenuItem[]>;
}

const groupedItems = buildGroupedItems();

const GROUP_LABELS: Record<MenuGroupKey, string> = {
  cuisine: "Cuisine",
  boissons: "Boissons",
  chicha: "Chicha",
};

const GROUP_SUBTITLES: Record<MenuGroupKey, string> = {
  cuisine: "Burgers, pâtes, pizzas & spécialités maison",
  boissons: "Cocktails signatures, softs & boissons chaudes",
  chicha: "Sélection chicha & formules lounge",
};

export default function PremiumMenuOverlay() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeGroup, setActiveGroup] = useState<MenuGroupKey>("cuisine");

  const items = groupedItems[activeGroup];

  return (
    <>
      {/* Trigger button fixed dans le coin haut droit de la page menu */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="group fixed right-4 top-24 z-40 inline-flex items-center gap-3 rounded-full bg-[#faf8f3]/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#2d2416] shadow-md shadow-black/10 backdrop-blur-md transition hover:scale-105 hover:bg-white sm:right-6 sm:top-24"
        aria-label="Ouvrir le menu immersif"
      >
        <span className="hidden text-[10px] sm:inline">
          Menu immersif
        </span>
        <span className="flex flex-col gap-1">
          <span className="h-[2px] w-7 rounded-full bg-[#2d2416] transition group-hover:w-9" />
          <span className="h-[2px] w-5 rounded-full bg-[#2d2416] transition group-hover:w-8" />
          <span className="h-[2px] w-6 rounded-full bg-[#2d2416] transition group-hover:w-7" />
        </span>
      </button>

      {/* Overlay plein écran */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#2d2416]/[0.98] px-4 py-8 backdrop-blur-2xl sm:px-6 md:px-10">
          {/* Bouton de fermeture */}
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-4 z-50 inline-flex h-10 w-10 items-center justify-center rounded-full text-3xl font-light text-[#faf8f3] transition hover:rotate-90 hover:text-[#d946a6] sm:right-8 sm:top-6"
            aria-label="Fermer le menu"
          >
            ×
          </button>

          {/* Contenu principal */}
          <div className="relative flex h-full w-full max-w-6xl flex-col md:flex-row md:items-stretch">
            {/* Colonne gauche : catégories */}
            <div className="relative flex w-full flex-col justify-center border-b border-[#d4c5b0]/20 pb-8 md:w-[34%] md:border-b-0 md:border-r md:pb-0 md:pr-10">
              <div className="mb-6 text-[11px] font-medium uppercase tracking-[0.24em] text-[#d4c5b0]">
                Notre carte
              </div>

              <div className="space-y-4">
                {(Object.keys(GROUP_LABELS) as MenuGroupKey[]).map((key) => {
                  const isActive = key === activeGroup;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setActiveGroup(key)}
                      className={[
                        "relative flex items-center text-left transition duration-500",
                        isActive
                          ? "text-[#faf8f3]"
                          : "text-[#a39689] hover:text-[#d4c5b0]",
                      ].join(" ")}
                    >
                      {isActive && (
                        <span className="absolute left-0 h-10 w-1 rounded-full bg-gradient-to-b from-[#d946a6] to-[#f472b6]" />
                      )}
                      <span
                        className={[
                          "pl-4 text-3xl font-light tracking-[0.04em] sm:text-4xl",
                          isActive ? "translate-x-2" : "",
                        ].join(" ")}
                      >
                        {GROUP_LABELS[key]}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Petit bloc décoratif / message qualité */}
              <div className="mt-8 border-t border-[#d4c5b0]/20 pt-4 text-[11px] text-[#a39689]">
                <p className="font-semibold tracking-[0.18em] text-[#7c9473]">
                  CUISINE MAISON &amp; SÉLECTION SOIGNÉE
                </p>
                <p className="mt-1 leading-relaxed">
                  Carte issue du Just Menu&nbsp;: plats, desserts, cocktails &
                  chicha, adaptés pour une lecture confortable sur mobile.
                </p>
              </div>
            </div>

            {/* Colonne droite : items */}
            <div className="relative mt-8 flex-1 overflow-y-auto md:mt-0 md:pl-10">
              <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#d4c5b0]">
                {GROUP_SUBTITLES[activeGroup]}
              </div>
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={`${activeGroup}-${item.name}-${item.price}`}
                    className="group rounded-xl px-4 py-4 transition duration-300 hover:translate-x-4 hover:bg-[#7c9473]/10 sm:px-6 sm:py-5"
                  >
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="text-lg font-light tracking-[0.04em] text-[#faf8f3] sm:text-2xl">
                        {item.name}
                      </h3>
                      {item.price && (
                        <div className="shrink-0 text-base font-semibold text-[#d946a6] sm:text-xl">
                          {item.price}
                        </div>
                      )}
                    </div>
                    {item.description && (
                      <p className="mt-1 text-sm italic text-[#a39689] sm:text-base">
                        {item.description}
                      </p>
                    )}
                    <div className="mt-3 h-px w-16 bg-gradient-to-r from-[#d946a6] to-transparent" />
                  </div>
                ))}
              </div>
            </div>

            {/* Éléments d'ambiance en arrière-plan */}
            <div className="pointer-events-none absolute -left-10 top-[18%] h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(124,148,115,0.16)_0%,_transparent_70%)] blur-3xl" />
            <div className="pointer-events-none absolute -right-10 bottom-[12%] h-96 w-96 rounded-full bg-[radial-gradient(circle,_rgba(217,70,166,0.15)_0%,_transparent_70%)] blur-[70px]" />
          </div>
        </div>
      )}
    </>
  );
}