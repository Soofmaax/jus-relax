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
    <section className="rounded-3xl border border-[#d4c5b0] bg-[#faf8f3] p-6 shadow-md shadow-black/10 sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d946a6]">
            Commander à domicile
          </p>
          <h2 className="mt-1 text-xl font-semibold tracking-tight text-[#2d2416] sm:text-2xl">
            Just Relax chez vous
          </h2>
          <p className="mt-2 max-w-xl text-sm text-[#6b5d4f]">
            Retrouvez la cuisine du restaurant en livraison. Idéal pour un dîner
            à la maison, un match entre amis ou une soirée chill sur la terrasse.
          </p>
        </div>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {delivery.deliveroo && (
          <a
            href={delivery.deliveroo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between rounded-2xl border border-[#d4c5b0] bg-gradient-to-r from-[#f5ede3] to-[#eae1d5] px-4 py-4 text-sm text-[#2d2416] shadow-sm shadow-black/10 transition hover:border-[#d946a6] hover:shadow-[0_12px_24px_rgba(0,0,0,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d946a6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#faf8f3]"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7c9473]">
                Livraison
              </p>
              <p className="mt-1 font-semibold">Commander sur Deliveroo</p>
              <p className="text-[11px] text-[#6b5d4f]">
                Ouvert selon les horaires du restaurant.
              </p>
            </div>
            <span className="ml-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#e8f0e6] text-xs font-semibold text-[#5a7a52] ring-1 ring-[#7c9473]/70">
              D
            </span>
          </a>
        )}
        {delivery.uberEats && (
          <a
            href={delivery.uberEats}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between rounded-2xl border border-[#d4c5b0] bg-gradient-to-r from-[#f5ede3] to-[#eae1d5] px-4 py-4 text-sm text-[#2d2416] shadow-sm shadow-black/10 transition hover:border-[#d946a6] hover:shadow-[0_12px_24px_rgba(0,0,0,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d946a6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#faf8f3]"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7c9473]">
                Livraison
              </p>
              <p className="mt-1 font-semibold">Commander sur Uber Eats</p>
              <p className="text-[11px] text-[#6b5d4f]">
                Retrouvez Just Relax en quelques clics.
              </p>
            </div>
            <span className="ml-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#e8f0e6] text-xs font-semibold text-[#5a7a52] ring-1 ring-[#7c9473]/70">
              U
            </span>
          </a>
        )}
      </div>
    </section>
  );
}