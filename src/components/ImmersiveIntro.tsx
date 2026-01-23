"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { justRelaxData } from "@/lib/just-relax-data";

interface ImmersiveIntroProps {
  open: boolean;
  onEnter: () => void;
}

/**
 * ImmersiveIntro
 *
 * Écran d'entrée plein écran qui donne la sensation de "pousser la porte"
 * du restaurant. Utilise Framer Motion, mais respecte `prefers-reduced-motion`
 * en simplifiant fortement les animations.
 */
export default function ImmersiveIntro({ open, onEnter }: ImmersiveIntroProps) {
  const shouldReduceMotion = useReducedMotion();

  // Permet de fermer l'intro au scroll (sensation d'entrée dans le lieu).
  useEffect(() => {
    if (!open) return;

    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.15) {
        onEnter();
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [open, onEnter]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-40 flex items-center justify-center bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.25 : 0.8, ease: "easeOut" }}
        >
          {/* Ambient lighting + silhouette de cerisier stylisée */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div className="absolute -left-24 top-[-10%] h-[380px] w-[380px] rounded-full bg-fuchsia-500/15 blur-3xl" />
            <div className="absolute -right-24 bottom-[-10%] h-[420px] w-[420px] rounded-full bg-amber-400/15 blur-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(248,250,252,0.08),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(15,23,42,0.96),_transparent_60%)]" />
            <div className="absolute bottom-0 left-1/2 h-[260px] w-[520px] -translate-x-1/2 bg-[radial-gradient(circle,_rgba(15,23,42,1)_0%,_rgba(15,23,42,0)_70%)]" />
            {/* Tronc stylisé */}
            <div className="absolute bottom-0 left-1/2 h-[260px] w-[3px] -translate-x-1/2 bg-gradient-to-t from-slate-900 via-slate-700 to-slate-500 shadow-[0_0_40px_rgba(148,163,184,0.6)]" />
            {/* Branches minimalistes */}
            <div className="absolute bottom-28 left-1/2 h-[2px] w-40 -translate-x-full -rotate-[12deg] bg-gradient-to-r from-slate-500 via-rose-300/80 to-transparent" />
            <div className="absolute bottom-32 left-1/2 h-[2px] w-40 translate-x-1 rotate-[10deg] bg-gradient-to-l from-slate-500 via-rose-300/80 to-transparent" />
          </div>

          <motion.div
            className="relative z-10 mx-4 max-w-xl rounded-[2rem] border border-white/10 bg-black/60 px-6 py-8 shadow-[0_30px_80px_rgba(0,0,0,0.9)] backdrop-blur-2xl sm:px-8 sm:py-10"
            initial={
              shouldReduceMotion
                ? { opacity: 1 }
                : { opacity: 0, y: 18, scale: 0.98, filter: "blur(8px)" }
            }
            animate={
              shouldReduceMotion
                ? { opacity: 1 }
                : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
            }
            exit={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: -18, scale: 0.98, filter: "blur(8px)" }
            }
            transition={{ duration: shouldReduceMotion ? 0.3 : 0.75, ease: "easeOut" }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-300/50 bg-amber-300/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-amber-100">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(34,197,94,0.4)]" />
              <span>Pantin · 7j/7 jusqu&apos;à 2h</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
                Just Relax
                <span className="block text-lg font-normal text-amber-200 sm:text-xl">
                  Restaurant &amp; Lounge
                </span>
              </h1>
              <p className="text-sm text-slate-200/90 sm:text-base">
                Une adresse intimiste à Pantin&nbsp;: cuisine soignée, cocktails signatures,
                terrasse privée &amp; lounge chicha. Laissez les lumières de la ville
                derrière vous, entrez, et juste… relaxez-vous.
              </p>
              <div className="flex flex-wrap gap-2 text-[11px] text-slate-200/90">
                <span className="inline-flex items-center rounded-full bg-white/5 px-2.5 py-1">
                  🧑🏻‍🍳 Cuisine &amp; cocktails
                </span>
                <span className="inline-flex items-center rounded-full bg-white/5 px-2.5 py-1">
                  💨 Terrasse privée &amp; lounge
                </span>
                <span className="inline-flex items-center rounded-full bg-white/5 px-2.5 py-1">
                  Lun–Ven 11h–02h · Sam–Dim 15h–02h
                </span>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={onEnter}
                className="inline-flex flex-1 items-center justify-center rounded-full bg-amber-400 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-sm ring-1 ring-amber-300/70 transition hover:bg-amber-300 hover:ring-amber-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:flex-none"
              >
                Entrer
              </button>
              <Link
                href="/reservation"
                className="inline-flex flex-1 items-center justify-center rounded-full border border-white/30 px-6 py-2.5 text-sm font-semibold text-slate-50 transition hover:border-amber-300/80 hover:text-amber-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:flex-none"
              >
                Réserver
              </Link>
            </div>

            <p className="mt-3 text-[11px] text-slate-400">
              Adresse&nbsp;: {justRelaxData.contact.address.line1},{" "}
              {justRelaxData.contact.address.postalCode}{" "}
              {justRelaxData.contact.address.city} · Tél&nbsp;:{" "}
              {justRelaxData.contact.phoneMain}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}