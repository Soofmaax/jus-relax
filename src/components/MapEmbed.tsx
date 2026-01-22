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
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-lg shadow-black/50">
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