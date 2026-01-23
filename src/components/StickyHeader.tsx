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
      <div className="border-b border-[#f9c5d5] bg-[#fff7fb]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5 sm:px-6">
          <Link href="/" className="flex items-baseline gap-2">
            <span className="text-sm font-semibold tracking-tight uppercase text-[#9d174d] sm:text-base">
              {justRelaxData.name}
            </span>
            <span className="hidden text-[11px] text-[#7e244b] sm:inline">
              {justRelaxData.tagline}
            </span>
          </Link>
          <nav className="flex items-center gap-3 text-[11px] font-medium text-[#2a1020] sm:gap-5 sm:text-xs">
            <Link
              href="/menu"
              className="transition-colors hover:text-[#ec4899]"
            >
              Menu
            </Link>
            <Link
              href="/reservation"
              className="hidden transition-colors hover:text-[#ec4899] sm:inline"
            >
              Réserver
            </Link>
            <Link
              href="/galerie"
              className="hidden transition-colors hover:text-[#ec4899] sm:inline"
            >
              Galerie
            </Link>
            <Link
              href="/evenements"
              className="hidden transition-colors hover:text-[#ec4899] sm:inline"
            >
              Événements
            </Link>
            <Link
              href="/contact"
              className="hidden transition-colors hover:text-[#ec4899] sm:inline"
            >
              Contact
            </Link>
            <div className="flex items-center gap-2">
              <a
                href={reservation.href}
                target={reservation.target}
                rel={reservation.rel}
                className="hidden rounded-full bg-[#ec4899] px-3 py-1.5 text-[11px] font-semibold text-white shadow-sm ring-1 ring-[#f9a8d4]/80 transition hover:bg-[#f472b6] hover:ring-[#fbcfe8] sm:inline-flex"
              >
                {reservation.label}
              </a>
              <a
                href={phoneHref}
                className="inline-flex rounded-full border border-[#f9c5d5] px-3 py-1.5 text-[11px] font-semibold text-[#2a1020] shadow-sm transition hover:border-[#ec4899] hover:text-[#ec4899]"
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