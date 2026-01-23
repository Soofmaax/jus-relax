import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aperçu des couleurs",
  description:
    "Palette de couleurs proposée pour Just Relax – Option 1 : Terrasse Méditerranéenne.",
};

const PALETTE = [
  {
    group: "🎨 Fonds & Bases",
    colors: [
      { name: "Fond principal (crème)", hex: "#faf8f3" },
      { name: "Fond secondaire (beige sable)", hex: "#f5ede3" },
      { name: "Beige plus chaud", hex: "#eae1d5" },
    ],
  },
  {
    group: "🌿 Naturel & Bois",
    colors: [
      { name: "Bois grisé clair", hex: "#a39689" },
      { name: "Vert sauge", hex: "#7c9473" },
      { name: "Vert nature", hex: "#5a7a52" },
      { name: "Vert très clair", hex: "#e8f0e6" },
    ],
  },
  {
    group: "🌸 Accents Fleuris",
    colors: [
      { name: "Fuchsia vif (CTA)", hex: "#d946a6" },
      { name: "Rose fuchsia (hover)", hex: "#f472b6" },
      { name: "Rose très clair", hex: "#fce7f3" },
    ],
  },
  {
    group: "📝 Textes & Bordures",
    colors: [
      { name: "Marron foncé (titres)", hex: "#2d2416" },
      { name: "Marron moyen (texte)", hex: "#6b5d4f" },
      { name: "Beige bordures", hex: "#d4c5b0" },
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
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d946a6]">
          Just Relax – Aperçu couleurs
        </p>
        <h1 className="text-xl font-semibold tracking-tight text-[#2d2416] sm:text-2xl">
          Palette Option 1 : Terrasse Méditerranéenne
        </h1>
        <p className="max-w-2xl text-xs text-[#6b5d4f] sm:text-sm">
          Cette page interne montre visuellement l&apos;option 1 que tu as
          proposée : une base crème / beige, des touches de vert sauge et des
          accents fuchsia pour les boutons et les fleurs.
        </p>
      </header>

      <section className="grid gap-6 sm:grid-cols-2">
        {PALETTE.map((group) => (
          <div
            key={group.group}
            className="rounded-3xl border border-[#d4c5b0] bg-white/80 p-4 shadow-sm shadow-black/5"
          >
            <h2 className="text-sm font-semibold text-[#2d2416]">
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

      <section className="mt-4 space-y-3 rounded-3xl border border-[#d4c5b0] bg-white/90 p-4 text-xs text-[#6b5d4f] sm:text-sm">
        <h2 className="text-sm font-semibold text-[#2d2416]">
          Idée d&apos;utilisation sur le site
        </h2>
        <p>
          • Fonds de page et de sections : utiliser les crèmes / beiges
          (#faf8f3, #f5ede3, #eae1d5) pour rappeler une terrasse ensoleillée.
        </p>
        <p>
          • Boutons principaux (Réserver, Entrer) : utiliser le fuchsia vif
          #d946a6, avec un hover plus doux #f472b6.
        </p>
        <p>
          • Bordures, séparateurs et cartes : utiliser le beige #d4c5b0 pour
          structurer sans alourdir.
        </p>
        <p>
          • Touches de vert sauge (#7c9473, #5a7a52, #e8f0e6) pour les détails
          liés à la terrasse, aux plantes ou aux icônes de services.
        </p>
        <p>
          • Titres et textes : marron foncé #2d2416 pour les titres, marron
          moyen #6b5d4f pour les paragraphes.
        </p>
      </section>
    </div>
  );
}