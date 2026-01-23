import Image from "next/image";
import type { GalleryGroup } from "@/lib/just-relax-schema";

interface GalleryGridProps {
  gallery: GalleryGroup[];
  limit?: number;
  showOverlay?: boolean;
}

export default function GalleryGrid({
  gallery,
  limit,
  showOverlay = false,
}: GalleryGridProps) {
  const images = gallery.flatMap((group) =>
    group.images.map((img) => ({
      ...img,
      groupId: group.id,
      groupTitle: group.title,
    }))
  );

  const visibleImages = limit ? images.slice(0, limit) : images;

  if (visibleImages.length === 0) {
    return (
      <p className="text-sm text-[#6b5d4f]">
        Aucune image trouvée dans la galerie. Vous pouvez ajouter des URLs
        d&apos;images dans <code>data/just-relax.json</code>, section{" "}
        <code>gallery</code>.
      </p>
    );
  }

  return (
    <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
      {visibleImages.map((image, index) => (
        <figure
          key={`${image.groupId}-${index}-${image.url}`}
          className="group relative overflow-hidden rounded-2xl border border-[#d4c5b0] bg-[#faf8f3] shadow-lg shadow-black/10"
        >
          <Image
            src={image.url}
            alt={image.alt}
            width={600}
            height={400}
            className="h-36 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-44 md:h-52"
          />
          {showOverlay && (
            <figcaption className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-[#2d2416]/80 via-[#2d2416]/40 to-transparent p-3 text-[11px] text-[#faf8f3] opacity-0 transition group-hover:opacity-100 sm:p-4">
              <div>
                <p className="font-semibold">{image.groupTitle}</p>
                <p className="text-[#f5ede3]">{image.alt}</p>
              </div>
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}