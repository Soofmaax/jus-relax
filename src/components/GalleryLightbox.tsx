"use client";

import { useState } from "react";
import Image from "next/image";
import type { GalleryGroup } from "@/lib/just-relax-schema";

interface GalleryLightboxProps {
  gallery: GalleryGroup[];
}

/**
 * Grille + lightbox minimaliste pour la page galerie.
 */
export default function GalleryLightbox({ gallery }: GalleryLightboxProps) {
  const images = gallery.flatMap((group) =>
    group.images.map((img, index) => ({
      ...img,
      groupId: group.id,
      groupTitle: group.title,
      index,
    }))
  );

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  if (images.length === 0) {
    return (
      <p className="text-sm text-[#6b5d4f]">
        Aucune image trouvée dans la galerie. Vous pouvez ajouter des URLs
        d&apos;images dans <code>data/just-relax.json</code>, section{" "}
        <code>gallery</code>.
      </p>
    );
  }

  const open = (index: number) => setActiveIndex(index);
  const close = () => setActiveIndex(null);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      close();
    }
    if (event.key === "ArrowLeft") {
      showPrev();
    }
    if (event.key === "ArrowRight") {
      showNext();
    }
  };

  const showPrev = () => {
    if (activeIndex === null) return;
    setActiveIndex((prev) =>
      prev === null ? null : (prev - 1 + images.length) % images.length
    );
  };

  const showNext = () => {
    if (activeIndex === null) return;
    setActiveIndex((prev) =>
      prev === null ? null : (prev + 1) % images.length
    );
  };

  return (
    <>
      <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
        {images.map((image, index) => (
          <button
            key={`${image.groupId}-${index}-${image.url}`}
            type="button"
            onClick={() => open(index)}
            className="group relative overflow-hidden rounded-2xl border border-[#d4c5b0] bg-[#faf8f3] shadow-lg shadow-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d946a6]"
          >
            <Image
              src={image.url}
              alt={image.alt}
              width={600}
              height={400}
              className="h-36 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-44 md:h-52"
            />
            <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-[#2d2416]/80 via-[#2d2416]/40 to-transparent p-3 text-[11px] text-[#faf8f3] opacity-0 transition group-hover:opacity-100 sm:p-4">
              <div>
                <p className="font-semibold">{image.groupTitle}</p>
                <p className="text-[#f5ede3]">{image.alt}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center bg-[#2d2416]/80 px-4 py-6 backdrop-blur-xl"
          aria-modal="true"
          role="dialog"
          onKeyDown={handleKeyDown}
          tabIndex={-1}
        >
          <button
            type="button"
            className="absolute inset-0 h-full w-full cursor-default"
            aria-label="Fermer la photo"
            onClick={close}
          />
          <div className="relative z-10 max-w-3xl">
            <figure className="overflow-hidden rounded-3xl border border-[#d4c5b0] bg-[#2d2416] shadow-[0_40px_80px_rgba(0,0,0,0.7)]">
              <Image
                src={images[activeIndex].url}
                alt={images[activeIndex].alt}
                width={1200}
                height={800}
                className="max-h-[70vh] w-full object-contain"
              />
              <figcaption className="flex items-center justify-between gap-3 px-4 py-3 text-[11px] text-[#faf8f3] sm:px-5">
                <div>
                  <p className="font-semibold">
                    {images[activeIndex].groupTitle}
                  </p>
                  <p className="text-[#f5ede3]">
                    {images[activeIndex].alt}
                  </p>
                </div>
                <span className="text-[#eae1d5]">
                  {activeIndex + 1} / {images.length}
                </span>
              </figcaption>
            </figure>
            <div className="mt-3 flex items-center justify-between text-[11px] text-[#faf8f3]">
              <button
                type="button"
                onClick={showPrev}
                className="rounded-full border border-[#d4c5b0] px-3 py-1 font-medium hover:border-[#d946a6] hover:text-[#d946a6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d946a6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#2d2416]"
              >
                Précédente
              </button>
              <button
                type="button"
                onClick={close}
                className="rounded-full border border-[#d4c5b0] px-3 py-1 font-medium hover:border-[#d946a6] hover:text-[#d946a6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d946a6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#2d2416]"
              >
                Fermer
              </button>
              <button
                type="button"
                onClick={showNext}
                className="rounded-full border border-[#d4c5b0] px-3 py-1 font-medium hover:border-[#d946a6] hover:text-[#d946a6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d946a6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#2d2416]"
              >
                Suivante
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}