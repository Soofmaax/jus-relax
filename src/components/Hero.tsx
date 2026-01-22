import Image from "next/image";
import type { JustRelaxData } from "@/lib/just-relax-schema";
import CTAButtons from "./CTAButtons";

interface HeroProps {
  data: JustRelaxData;
}

export default function Hero({ data }: HeroProps) {
  const heroImage = data.heroImage || data.gallery[0]?.images[0]?.url;

  return (
    <section className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 py-8 shadow-[0_40px_80px_rgba(0,0,0,0.85)] sm:px-8 sm:py-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.08),_transparent_50%),radial-gradient(circle_at_bottom,_rgba(15,23,42,0.9),_transparent_60%)]" />
      <div className="relative grid gap-10 md:grid-cols-[minmax(0,1.05fr),minmax(0,0.95fr)] md:items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-amber-200">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(16,185,129,0.35)]" />
            <span>Pantin · 7j/7 jusqu&apos;à 2h</span>
          </div>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl md:text-5xl">
            {data.name} –{" "}
            <span className="text-amber-300">{data.tagline}</span>
          </h1>
          <p className="max-w-xl text-pretty text-sm text-slate-200/90 sm:text-base">
            Atmosphère lounge, cocktails signatures, terrasse privée et chicha
            premium au cœur de Pantin (93500). Un lieu pensé pour prolonger vos
            soirées dans l&apos;Est parisien.
          </p>
          <div className="flex flex-wrap gap-3">
            <CTAButtons data={data} context="hero" />
          </div>
          <div className="mt-3 grid gap-3 text-xs text-slate-300 sm:grid-cols-3">
            <div className="space-y-1">
              <p className="font-semibold text-slate-100">Adresse</p>
              <p>
                {data.contact.address.line1}
                <br />
                {data.contact.address.postalCode} {data.contact.address.city}
              </p>
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-slate-100">Horaires</p>
              {data.openingHours.slice(0, 2).map((range) => (
                <p key={range.days}>
                  <span className="block font-medium text-slate-50">
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
              <p className="font-semibold text-slate-100">Points forts</p>
              <div className="mt-1 flex flex-wrap gap-1.5">
                <span className="inline-flex items-center rounded-full bg-white/5 px-2.5 py-1 text-[11px] text-amber-100 ring-1 ring-white/10">
                  Terrasse privée
                </span>
                <span className="inline-flex items-center rounded-full bg-white/5 px-2.5 py-1 text-[11px] text-amber-100 ring-1 ring-white/10">
                  Cocktails signatures
                </span>
                <span className="inline-flex items-center rounded-full bg-white/5 px-2.5 py-1 text-[11px] text-amber-100 ring-1 ring-white/10">
                  Chicha premium
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-10 rounded-[3rem] bg-amber-400/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2.25rem] border border-white/15 bg-black/40 shadow-2xl shadow-black/80">
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
              <div className="flex h-64 items-center justify-center text-sm text-slate-300">
                Ajoutez ici une photo phare du restaurant pour un impact
                maximal.
              </div>
            )}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-xs text-slate-100 sm:p-5">
              <p className="font-medium">
                7j/7 · Terrasse &amp; lounge · Cocktails · Chicha
              </p>
              <p className="text-slate-300">
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