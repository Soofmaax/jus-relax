"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { justRelaxData } from "@/lib/just-relax-data";
import { getReservationInfo } from "@/lib/reservation";

/**
 * StickyHeader
 *
 * Header premium qui n'apparaît qu'après ~25% de scroll pour laisser
 * la place à l'expérience immersive du hero.
 */
export default function StickyHeader() {
  const [isVisible, setIsVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.25;
      setIsVisible(window.scrollY > threshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const phoneHref = justRelaxData.contact.phoneMain
    ? `tel:${justRelaxData.contact.phoneMain.replace(/\s+/g, "")}`
    : "#";

  const reservation = getReservationInfo(justRelaxData.contact);

  return (
    <motion.header
      aria-label="Navigation principale"
      className="pointer-events-none fixed inset-x-0 top-0 z-30"
      initial={false}
      animate={
        isVisible
          ? {
              opacity: 1,
              y: 0,
            }
          : {
              opacity: shouldReduceMotion ? 0 : 0,
              y: shouldReduceMotion ? 0 : -12,
            }
      }
      transition={
        shouldReduceMotion
          ? { duration: 0.2 }
          : { duration: 0.35, ease: "easeOut" }
      }
      style={{ pointerEvents: isVisible ? "auto" : "none" }}
    >
      <div className="border-b border-[var(--border-soft)] bg-[color-mix(in_srgb,var(--surface)_90%,transparent)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5 sm:px-6">
          <Link href="/" className="flex items-baseline gap-2">
            <span className="text-sm font-semibold tracking-tight uppercase text-[#2d2416] sm:text-base">
              {justRelaxData.name}
            </span>
            <span className="hidden text-[11px] text-[var(--text-muted)] sm:inline">
              {justRelaxData.tagline}
            </span>
          </Link>
          <nav className="flex items-center gap-3 text-[11px] font-medium text-[#2d2416] sm:gap-5 sm:text-xs">
            <Link
              href="/menu"
              className="transition-colors hover:text-[var(--accent)] focus-visible:outline-none focus-visible:underline focus-visible:decoration-[var(--accent)]"
            >
              Menu
            </Link>
            <Link
              href="/reservation"
              className="transition-colors hover:text-[var(--accent)] focus-visible:outline-none focus-visible:underline focus-visible:decoration-[var(--accent)]"
            >
              Réserver
            </Link>
            <Link
              href="/galerie"
              className="transition-colors hover:text-[var(--accent)] focus-visible:outline-none focus-visible:underline focus-visible:decoration-[var(--accent)]"
            >
              Galerie
            </Link>
            <Link
              href="/evenements"
              className="transition-colors hover:text-[var(--accent)] focus-visible:outline-none focus-visible:underline focus-visible:decoration-[var(--accent)]"
            >
              Événements
            </Link>
            <Link
              href="/contact"
              className="transition-colors hover:text-[var(--accent)] focus-visible:outline-none focus-visible:underline focus-visible:decoration-[var(--accent)]"
            >
              Contact
            </Link>
            <div className="flex items-center gap-2">
              <a
                href={reservation.href}
                target={reservation.target}
                rel={reservation.rel}
                className="hidden rounded-full bg-[var(--accent)] px-3 py-1.5 text-[11px] font-semibold text-white shadow-sm ring-1 ring-[#f472b6]/70 transition hover:bg-[#f472b6] hover:ring-[#fce7f3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fce7f3] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)] sm:inline-flex"
              >
                {reservation.label}
              </a>
              <a
                href={phoneHref}
                className="inline-flex rounded-full border border-[var(--border-soft)] px-3 py-1.5 text-[11px] font-semibold text-[#2d2416] shadow-sm transition hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)]"
              >
                Appeler
              </a>
            </div>
          </nav>
        </div>
      </div>
    </motion.header>
  );
}