import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aperçu des couleurs",
  description:
    "Palette de couleurs actuelle du site Just Relax (thème rose fleur de cerisier).",
};

const PALETTE = [
  {
    group: "Fond principal (background)",
    colors: [
      { name: "Rose très clair 1", hex: "#fff7fb" },
      { name: "Rose très clair 2", hex: "#fdf2f8" },
      { name: "Rose poudré", hex: "#f9e0e6" },
    ],
  },
  {
    group: "Accents rose (pétales & bordures)",
    colors: [
      { name: "Rose pétale clair", hex: "#f9a8d4" },
      { name: "Rose bordure clair", hex: "#f9c5d5" },
      { name: "Rose très clair badge", hex: "#fce7f3" },
    ],
  },
  {
    group: "Roses plus intenses (CTA, texte)",

    colors: [
      { name: "Rose vif CTA", hex: "#ec4899" },
      { name: "Rose hover CTA", hex: "#f472b6" },
      { name: "Rose très clair halo", hex: "#fbcfe8" },
    ],
  },
  {
    group: "Prunes / Bordeaux (texte & fonds foncés)",
    colors: [
      { name: "Prune sombre (fond footer / carte photo)", hex: "#2a1020" },
      { name: "Prune médium (texte accent)", hex: "#4b1632" },
      { name: "Prune rosé (titre / accents)", hex: "#9d174d" },
      { name: "Prune doux (petit texte)", hex: "#7e5a6b" },
    ],
  },
];

function ColorSwatch({ name, hex }: { name: string; hex: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-black/5 bg-white/70 p-3 shadow-sm shadow-black/5">
      <div
        className="h-10 w-10 rounded-xl border border-black/10"
        style={{ backgroundColor: hex }}
      />
      <div className="flex flex-col text-xs">
        <span className="font-semibold">{name}</span>
        <span className="font-mono text-[11px] text-neutral-600">{hex}</span>
      </div>
    </div>
  );
}

export default function ApercuCouleursPage() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-8 sm:px-6 sm:py-10">
      <header className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ec4899]">
          Just Relax – Aperçu couleurs
        </p>
        <h1 className="text-xl font-semibold tracking-tight text-[#2a1020] sm:text-2xl">
          Palette actuelle (thème rose fleur de cerisier)
        </h1>
        <p className="max-w-2xl text-xs text-[#4b1632] sm:text-sm">
          Cette page n&apos;est qu&apos;une démo interne pour visualiser les
          couleurs utilisées sur le site (fonds, boutons, textes, badges). Elle
          ne sera pas liée dans le menu public.
        </p>
      </header>

      <section className="grid gap-6 sm:grid-cols-2">
        {PALETTE.map((group) => (
          <div
            key={group.group}
            className="rounded-3xl border border-[#f9c5d5] bg-white/80 p-4 shadow-sm shadow-black/5"
          >
            <h2 className="text-sm font-semibold text-[#2a1020]">
              {group.group}
            </h2>
            <div className="mt-3 flex flex-col gap-2">
              {group.colors.map((color) => (
                <ColorSwatch key={color.hex} name={color.name} hex={color.hex} />
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="mt-4 space-y-3 rounded-3xl border border-[#f9c5d5] bg-white/90 p-4 text-xs text-[#4b1632] sm:text-sm">
        <h2 className="text-sm font-semibold text-[#2a1020]">
          Exemple d&apos;utilisation des tons de rose
        </h2>
        <p>
          • Le fond général de la page utilise les roses très clairs
          (#fff7fb / #fdf2f8 / #f9e0e6).
        </p>
        <p>
          • Les boutons principaux (Réserver, Entrer) utilisent le rose vif
          #ec4899, avec un hover plus doux #f472b6.
        </p>
        <p>
          • Les bordures, badges et cartes utilisent les roses plus clairs
          #f9c5d5 et #fce7f3.
        </p>
        <p>
          • Le texte et les zones foncées (footer, carte photo du hero) utilisent
          les prunes / bordeaux #2a1020, #4b1632 et #9d174d pour garder du
          contraste.
        </p>
      </section>
    </div>
  );
}