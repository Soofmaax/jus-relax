import Image from "next/image";
import type { JustRelaxData } from "@/lib/just-relax-schema";
import CTAButtons from "./CTAButtons";

interface HeroProps {
  data: JustRelaxData;
}

export default function Hero({ data }: HeroProps) {
  const heroImage = data.heroImage || data.gallery[0]?.images[0]?.url;

  return (
    <section className="relative overflow-hidden rounded-[2.5rem] border border-[#d4c5b0] bg-[#faf8f3] px-4 py-8 shadow-[0_24px_60px_rgba(0,0,0,0.12)] sm:px-8 sm:py-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(244,114,182,0.16),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(124,148,115,0.18),_transparent_70%)]" />
      <div className="relative grid gap-10 md:grid-cols-[minmax(0,1.05fr),minmax(0,0.95fr)] md:items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d4c5b0]/70 bg-[#f5ede3] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-[#2d2416]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7c9473] shadow-[0_0_0_4px_rgba(124,148,115,0.35)]" />
            <span>Pantin · 7j/7 jusqu&apos;à 2h</span>
          </div>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-[#2d2416] sm:text-4xl md:text-5xl">
            {data.name} –{" "}
            <span className="text-[#d946a6]">{data.tagline}</span>
          </h1>
          <p className="max-w-xl text-pretty text-sm text-[#6b5d4f] sm:text-base">
            Atmosphère lounge, cocktails signatures, terrasse privée et chicha
            premium au cœur de Pantin (93500). Un lieu pensé pour prolonger vos
            soirées dans l&apos;Est parisien.
          </p>
          <div className="flex flex-wrap gap-3">
            <CTAButtons data={data} context="hero" />
          </div>
          <div className="mt-3 grid gap-3 text-xs text-[#6b5d4f] sm:grid-cols-3">
            <div className="space-y-1">
              <p className="font-semibold text-[#2d2416]">Adresse</p>
              <p>
                {data.contact.address.line1}
                <br />
                {data.contact.address.postalCode} {data.contact.address.city}
              </p>
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-[#2d2416]">Horaires</p>
              {data.openingHours.slice(0, 2).map((range) => (
                <p key={range.days}>
                  <span className="block font-medium text-[#6b5d4f]">
                    {range.days}
                  </span>
                  {range.slots.map((slot) => (
                    <span key={`${slot.from}-${slot.to}`} className="block">
                      {slot.from} – {slot.to}
                    </span>
                  ))}
                </p>
              ))}
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-[#2d2416]">Points forts</p>
              <div className="mt-1 flex flex-wrap gap-1.5">
                <span className="inline-flex items-center rounded-full bg-[#fce7f3] px-2.5 py-1 text-[11px] text-[#d946a6] ring-1 ring-[#d4c5b0]">
                  Terrasse privée
                </span>
                <span className="inline-flex items-center rounded-full bg-[#e8f0e6] px-2.5 py-1 text-[11px] text-[#5a7a52] ring-1 ring-[#7c9473]/60">
                  Cocktails signatures
                </span>
                <span className="inline-flex items-center rounded-full bg-[#fce7f3] px-2.5 py-1 text-[11px] text-[#d946a6] ring-1 ring-[#d4c5b0]">
                  Chicha premium
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-10 rounded-[3rem] bg-[#f5ede3]/70 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2.25rem] border border-[#d4c5b0] bg-[#2d2416] shadow-2xl shadow-black/60">
            {heroImage ? (
              <Image
                src={heroImage}
                alt={`Ambiance de ${data.name}`}
                width={900}
                height={900}
                priority
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-64 items-center justify-center text-sm text-[#f5ede3]">
                Ajoutez ici une photo phare du restaurant pour un impact
                maximal.
              </div>
            )}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-xs text-[#faf8f3] sm:p-5">
              <p className="font-medium">
                7j/7 · Terrasse &amp; lounge · Cocktails · Chicha
              </p>
              <p className="text-[#f5ede3]">
                À quelques minutes de Paris, un lieu idéal pour vos dîners et
                soirées entre amis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}