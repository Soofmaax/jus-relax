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

  // Permet de fermer l'intro avec la touche Échap.
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onEnter();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onEnter]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-40 flex items-center justify-center bg-gradient-to-b from-[#2d2416] via-[#6b5d4f] to-[#faf8f3]"
          role="dialog"
          aria-modal="true"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.25 : 0.8, ease: "easeOut" }}
        >
          {/* Ambient lighting + silhouette de terrasse stylisée */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div className="absolute -left-24 top-[-10%] h-[380px] w-[380px] rounded-full bg-[#f5ede3]/28 blur-3xl" />
            <div className="absolute -right-24 bottom-[-10%] h-[420px] w-[420px] rounded-full bg-[#e8f0e6]/28 blur-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(250,248,243,0.95),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(45,36,22,0.96),_transparent_60%)]" />
            <div className="absolute bottom-0 left-1/2 h-[260px] w-[520px] -translate-x-1/2 bg-[radial-gradient(circle,_rgba(45,36,22,1)_0%,_rgba(45,36,22,0)_70%)]" />
            {/* Tronc stylisé */}
            <div className="absolute bottom-0 left-1/2 h-[260px] w-[3px] -translate-x-1/2 bg-gradient-to-t from-[#2d2416] via-[#a39689] to-[#f5ede3] shadow-[0_0_40px_rgba(212,197,176,0.7)]" />
            {/* Branches minimalistes */}
            <div className="absolute bottom-28 left-1/2 h-[2px] w-40 -translate-x-full -rotate-[12deg] bg-gradient-to-r from-[#a39689] via-[#f5ede3] to-transparent" />
            <div className="absolute bottom-32 left-1/2 h-[2px] w-40 translate-x-1 rotate-[10deg] bg-gradient-to-l from-[#a39689] via-[#f5ede3] to-transparent" />
          </div>

          <motion.div
            className="relative z-10 mx-4 max-w-xl rounded-[2rem] border border-[#d4c5b0] bg-[#faf8f3]/95 px-6 py-8 shadow-[0_30px_80px_rgba(0,0,0,0.4)] backdrop-blur-2xl sm:px-8 sm:py-10"
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
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d4c5b0]/70 bg-[#f5ede3]/90 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-[#2d2416]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#7c9473] shadow-[0_0_0_4px_rgba(124,148,115,0.4)]" />
              <span>Pantin · 7j/7 jusqu&apos;à 2h</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-balance text-3xl font-semibold tracking-tight text-[#2d2416] sm:text-4xl">
                Just Relax
                <span className="block text-lg font-normal text-[#d946a6] sm:text-xl">
                  Restaurant &amp; Lounge
                </span>
              </h1>
              <p className="text-sm text-[#6b5d4f] sm:text-base">
                Une adresse intimiste à Pantin&nbsp;: cuisine soignée, cocktails signatures,
                terrasse privée &amp; lounge chicha. Laissez les lumières de la ville
                derrière vous, entrez, et juste… relaxez-vous.
              </p>
              <div className="flex flex-wrap gap-2 text-[11px] text-[#6b5d4f]">
                <span className="inline-flex items-center rounded-full bg-white px-2.5 py-1 ring-1 ring-[#d4c5b0]">
                  🧑🏻‍🍳 Cuisine &amp; cocktails
                </span>
                <span className="inline-flex items-center rounded-full bg-white px-2.5 py-1 ring-1 ring-[#d4c5b0]">
                  💨 Terrasse privée &amp; lounge
                </span>
                <span className="inline-flex items-center rounded-full bg-white px-2.5 py-1 ring-1 ring-[#d4c5b0]">
                  Lun–Ven 11h–02h · Sam–Dim 15h–02h
                </span>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={onEnter}
                className="inline-flex flex-1 items-center justify-center rounded-full bg-[#d946a6] px-6 py-2.5 text-sm font-semibold text-white shadow-sm ring-1 ring-[#f472b6]/70 transition hover:bg-[#f472b6] hover:ring-[#fce7f3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d946a6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#2d2416] sm:flex-none"
              >
                Entrer
              </button>
              <Link
                href="/reservation"
                className="inline-flex flex-1 items-center justify-center rounded-full border border-[#d4c5b0] px-6 py-2.5 text-sm font-semibold text-[#2d2416] transition hover:border-[#d946a6] hover:text-[#d946a6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d946a6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#2d2416] sm:flex-none"
              >
                Réserver
              </Link>
            </div>
            <button
              type="button"
              onClick={onEnter}
              className="mt-3 text-[11px] text-[#f5ede3] underline-offset-2 hover:underline"
            >
              Passer l&apos;intro
            </button>

            <p className="mt-3 text-[11px] text-[#6b5d4f]">
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