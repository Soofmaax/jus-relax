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
      <div className="border-b border-[#e1d5cc] bg-[#faf5ef]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5 sm:px-6">
          <Link href="/" className="flex items-baseline gap-2">
            <span className="text-sm font-semibold tracking-tight uppercase text-[#744941] sm:text-base">
              {justRelaxData.name}
            </span>
            <span className="hidden text-[11px] text-[#6b5a52] sm:inline">
              {justRelaxData.tagline}
            </span>
          </Link>
          <nav className="flex items-center gap-3 text-[11px] font-medium text-[#322] sm:gap-5 sm:text-xs">
            <Link
              href="/menu"
              className="transition-colors hover:text-[#d58c64]"
            >
              Menu
            </Link>
            <Link
              href="/reservation"
              className="hidden transition-colors hover:text-[#d58c64] sm:inline"
            >
              Réserver
            </Link>
            <Link
              href="/galerie"
              className="hidden transition-colors hover:text-[#d58c64] sm:inline"
            >
              Galerie
            </Link>
            <Link
              href="/evenements"
              className="hidden transition-colors hover:text-[#d58c64] sm:inline"
            >
              Événements
            </Link>
            <Link
              href="/contact"
              className="hidden transition-colors hover:text-[#d58c64] sm:inline"
            >
              Contact
            </Link>
            <div className="flex items-center gap-2">
              <a
                href={reservation.href}
                target={reservation.target}
                rel={reservation.rel}
                className="hidden rounded-full bg-[#d58c64] px-3 py-1.5 text-[11px] font-semibold text-white shadow-sm ring-1 ring-[#e0aa8c]/80 transition hover:bg-[#e0aa8c] hover:ring-[#f2d2b9] sm:inline-flex"
              >
                {reservation.label}
              </a>
              <a
                href={phoneHref}
                className="inline-flex rounded-full border border-[#d0c4b8] px-3 py-1.5 text-[11px] font-semibold text-[#322] shadow-sm transition hover:border-[#d58c64] hover:text-[#d58c64]"
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