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
            className="inline-flex items-center rounded-full border border-white/25 px-3 py-1 text-[11px] font-medium text-slate-100 transition hover:border-amber-300/80 hover:text-amber-200"
          >
            {item.label}
          </a>
        ) : (
          demo && (
            <span
              key={item.key}
              className="inline-flex items-center rounded-full border border-white/15 px-3 py-1 text-[11px] font-medium text-slate-300/70 opacity-70"
            >
              {item.label}
            </span>
          )
        )
      )}
      {demo && (
        <span className="text-[11px] text-slate-400">
          Les liens vers vos comptes officiels seront ajoutés ici une fois connus.
        </span>
      )}
    </div>
  );
}