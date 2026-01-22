import type { JustRelaxData } from "@/lib/just-relax-schema";

interface DeliveryPlatformsProps {
  data: JustRelaxData;
}

/**
 * Section dédiée aux plateformes de livraison (Deliveroo, Uber Eats).
 * Mobile-first, CTA très visibles.
 */
export default function DeliveryPlatforms({ data }: DeliveryPlatformsProps) {
  const { delivery } = data;

  if (!delivery.deliveroo && !delivery.uberEats) {
    return null;
  }

  return (
    <section className="rounded-3xl border border-white/10 bg-black/50 p-6 shadow-lg shadow-black/50 sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
            Commander à domicile
          </p>
          <h2 className="mt-1 text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Just Relax chez vous
          </h2>
          <p className="mt-2 max-w-xl text-sm text-slate-200/90">
            Retrouvez la cuisine du restaurant en livraison. Idéal pour un dîner
            à la maison, un match entre amis ou une soirée chill.
          </p>
        </div>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {delivery.deliveroo && (
          <a
            href={delivery.deliveroo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between rounded-2xl border border-white/15 bg-gradient-to-r from-slate-900 to-slate-950 px-4 py-4 text-sm text-slate-100 shadow-md shadow-black/50 transition hover:border-emerald-400/70 hover:shadow-emerald-500/20"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                Livraison
              </p>
              <p className="mt-1 font-semibold">Commander sur Deliveroo</p>
              <p className="text-[11px] text-slate-400">
                Ouvert selon les horaires du restaurant.
              </p>
            </div>
            <span className="ml-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-400/20 text-xs font-semibold text-emerald-100 ring-1 ring-emerald-300/70">
              D
            </span>
          </a>
        )}
        {delivery.uberEats && (
          <a
            href={delivery.uberEats}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between rounded-2xl border border-white/15 bg-gradient-to-r from-slate-900 to-slate-950 px-4 py-4 text-sm text-slate-100 shadow-md shadow-black/50 transition hover:border-emerald-400/70 hover:shadow-emerald-500/20"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                Livraison
              </p>
              <p className="mt-1 font-semibold">Commander sur Uber Eats</p>
              <p className="text-[11px] text-slate-400">
                Retrouvez Just Relax en quelques clics.
              </p>
            </div>
            <span className="ml-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-400/20 text-xs font-semibold text-emerald-100 ring-1 ring-emerald-300/70">
              U
            </span>
          </a>
        )}
      </div>
    </section>
  );
}