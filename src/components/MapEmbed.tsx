interface MapEmbedProps {
  mapUrl: string;
  title?: string;
}

export default function MapEmbed({ mapUrl, title }: MapEmbedProps) {
  const isGoogleMap = mapUrl.includes("google.com/maps");

  const embedUrl = isGoogleMap
    ? `${mapUrl}&output=embed`
    : mapUrl;

  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-alt)] shadow-md shadow-black/10">
      <iframe
        title={title || "Plan d'accès"}
        src={embedUrl}
        className="h-72 w-full border-0 sm:h-80"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}