"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import type { JustRelaxData } from "@/lib/just-relax-schema";
import CTAButtons from "./CTAButtons";
import PetalsCanvas from "./PetalsCanvas";

interface HeroImmersifProps {
  data: JustRelaxData;
}

/**
 * HeroImmersif
 *
 * Hero principal de la page d'accueil, avec :
 * - micro-parallaxe légère (via Framer Motion),
 * - Canvas 2D de pétales de cerisier,
 * - CTA de conversion immédiate,
 * - respect de `prefers-reduced-motion`.
 */
export default function HeroImmersif({ data }: HeroImmersifProps) {
  const shouldReduceMotion = useReducedMotion();
  const [isHovering, setIsHovering] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 120, damping: 18, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 120, damping: 18, mass: 0.6 });

  const glowOpacity = useTransform(springY, [-24, 0, 24], [0.1, 0.35, 0.1]);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - rect.left - rect.width / 2;
    const offsetY = event.clientY - rect.top - rect.height / 2;

    x.set((offsetX / rect.width) * 24);
    y.set((offsetY / rect.height) * 16);
  };

  const handlePointerLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovering(false);
  };

  const handlePointerEnter = () => {
    setIsHovering(true);
  };

  return (
    <section className="relative overflow-hidden rounded-[2.6rem] border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 py-8 shadow-[0_40px_80px_rgba(0,0,0,0.9)] sm:px-8 sm:py-10">
      {/* Ambient background + pétales */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.09),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(15,23,42,0.95),_transparent_65%)]" />
        <PetalsCanvas intensity={0.6} />
      </div>

      <motion.div
        className="relative grid gap-10 md:grid-cols-[minmax(0,1.1fr),minmax(0,0.95fr)] md:items-center"
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        onPointerEnter={handlePointerEnter}
        style={
          shouldReduceMotion
            ? undefined
            : {
                x: springX,
                y: springY,
              }
        }
        transition={shouldReduceMotion ? undefined : { type: "spring", stiffness: 120, damping: 18 }}
      >
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-amber-200">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(16,185,129,0.45)]" />
            <span>Pantin · 7j/7 jusqu&apos;à 2h</span>
          </div>
          <h1 className="font-display text-balance text-3xl font-semibold text-slate-50 sm:text-4xl md:text-5xl">
            {data.name}
            <span className="block text-lg font-normal text-amber-200 sm:text-xl">
              Restaurant &amp; Lounge
            </span>
          </h1>
          <p className="max-w-xl text-pretty text-sm text-slate-200/90 sm:text-base">
            Cuisine généreuse 100 % halal, cocktails signatures, terrasse privée &amp; lounge chicha
            au cœur de Pantin (93500). Une adresse intimiste pour prolonger vos
            soirées dans l&apos;Est parisien.
          </p>

          <div className="flex flex-wrap gap-2 text-[11px] text-slate-100/90">
            <span className="inline-flex items-center rounded-full bg-black/50 px-2.5 py-1 ring-1 ring-white/15">
              🧑🏻‍🍳 Cuisine 100 % halal &amp; cocktails
            </span>
            <span className="inline-flex items-center rounded-full bg-black/50 px-2.5 py-1 ring-1 ring-white/15">
              💨 Terrasse privée &amp; lounge
            </span>
            <span className="inline-flex items-center rounded-full bg-black/50 px-2.5 py-1 ring-1 ring-white/15">
              Lun–Ven 11h–02h · Sam–Dim 15h–02h
            </span>
          </div>

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
                    <span key={`${range.days}-${slot.from}-${slot.to}`} className="block">
                      {slot.from} – {slot.to}
                    </span>
                  ))}
                </p>
              ))}
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-slate-100">Services</p>
              <div className="mt-1 flex flex-wrap gap-1.5">
                <span className="inline-flex items-center rounded-full bg-white/5 px-2.5 py-1 text-[11px] text-amber-100 ring-1 ring-white/10">
                  Terrasse privée
                </span>
                <span className="inline-flex items-center rounded-full bg-white/5 px-2.5 py-1 text-[11px] text-amber-100 ring-1 ring-white/10">
                  Chicha premium
                </span>
                <span className="inline-flex items-center rounded-full bg-white/5 px-2.5 py-1 text-[11px] text-amber-100 ring-1 ring-white/10">
                  Événements privés
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <motion.div
            className="absolute -inset-10 rounded-[3rem] bg-amber-400/25 blur-3xl"
            style={shouldReduceMotion ? undefined : { opacity: glowOpacity }}
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-[2.25rem] border border-white/15 bg-black/60 shadow-2xl shadow-black/80">
            <div className="relative aspect-[4/3] w-full">
              {data.heroImage && (
                <Image
                  src={data.heroImage}
                  alt={
                    (data.seo && "title" in data.seo && (data.seo as any).title) ||
                    `${data.name} – Restaurant & Lounge à Pantin`
                  }
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 1024px) 480px, (min-width: 768px) 50vw, 100vw"
                />
              )}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
            </div>
            <div className="pointer-events-none absolute inset-0 flex flex-col justify-end p-4 text-xs text-slate-100 sm:p-5">
              <p className="text-[11px] uppercase tracking-[0.18em] text-amber-200">
                Just Relax · Pantin
              </p>
              <p className="mt-1 text-sm font-medium">
                Ambiance lounge, lumières douces &amp; sakura
              </p>
              <p className="text-[11px] text-slate-300">
                Un cocon à quelques minutes de Paris pour vos dîners, afterworks
                et soirées chicha jusqu&apos;à 2h du matin.
              </p>
            </div>
          </div>
          {isHovering && !shouldReduceMotion && (
            <div className="pointer-events-none absolute -bottom-6 left-1/2 h-[120px] w-[220px] -translate-x-1/2 bg-[radial-gradient(circle,_rgba(251,191,36,0.18)_0%,_transparent_70%)]" />
          )}
        </div>
      </motion.div>
    </section>
  );
}