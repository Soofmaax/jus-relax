import type { Metadata } from "next";
import Section from "@/components/Section";
import GalleryGrid from "@/components/GalleryGrid";
import { justRelaxData } from "@/lib/just-relax-data";
import { pageSeo } from "@/lib/page-seo";
import GalleryLightbox from "@/components/GalleryLightbox";

export const metadata: Metadata = pageSeo.galerie;

export default function GaleriePage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-16 pt-8 sm:px-6 sm:pb-24 sm:pt-10">
      <Section
        title="Galerie photos"
        eyebrow="Ambiance &amp; atmosphère"
      >
        <p className="max-w-2xl text-sm text-slate-200/90">
          Découvrez l&apos;ambiance de Just Relax : salle, terrasse, chicha,
          cocktails et détails de décoration. Toutes les photos sont issues du
          site actuel et peuvent être complétées ou remplacées facilement dans{" "}
          <code>data/just-relax.json</code>.
        </p>
        <div className="mt-6">
          <GalleryLightbox gallery={justRelaxData.gallery} />
        </div>
      </Section>
    </div>
  );
}