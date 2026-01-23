import type { JustRelaxData } from "@/lib/just-relax-schema";

interface SocialLinksProps {
  social: JustRelaxData["social"];
  /**
   * Mode préproduction :
   * - affiche des liens \"gris\" si aucun réseau n'est encore configuré
   * - ne pointe vers aucune URL réelle tant que les champs JSON sont vides
   */
  demo?: boolean;
}

export default function SocialLinks({ social, demo = false }: SocialLinksProps) {
  const networks: { key: keyof JustRelaxData["social"]; label: string }[] = [
    { key: "instagram", label: "Instagram" },
    { key: "facebook", label: "Facebook" },
    { key: "tiktok", label: "TikTok" },
  ];

  const items = networks
    .map((network) => {
      const url = social[network.key];
      const isConfigured = !!url && url.trim().length > 0;

      if (!demo && !isConfigured) {
        return null;
      }

      return {
        ...network,
        href: isConfigured ? url : "#",
        isConfigured,
      };
    })
    .filter((item): item is { key: keyof JustRelaxData["social"]; label: string; href: string; isConfigured: boolean } =>
      Boolean(item)
    );

  if (items.length === 0 && !demo) {
    return null;
  }

  return (
    <div className="mt-3 flex flex-wrap gap-2 text-xs">
      {items.map((item) =>
        item.isConfigured ? (
          <a
            key={item.key}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-[#d4c5b0] px-3 py-1 text-[11px] font-medium text-[#2d2416] transition hover:border-[#d946a6] hover:text-[#d946a6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d946a6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#faf8f3]"
          >
            {item.label}
          </a>
        ) : (
          demo && (
            <span
              key={item.key}
              className="inline-flex items-center rounded-full border border-[#d4c5b0]/70 px-3 py-1 text-[11px] font-medium text-[#6b5d4f]/80 opacity-70"
            >
              {item.label}
            </span>
          )
        )
      )}
      {demo && (
        <span className="text-[11px] text-[#6b5d4f]">
          Les liens vers vos comptes officiels seront ajoutés ici une fois connus.
        </span>
      )}
    </div>
  );
}