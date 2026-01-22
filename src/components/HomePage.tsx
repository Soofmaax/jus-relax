"use client";

import { useState } from "react";
import { justRelaxData } from "@/lib/just-relax-data";
import ImmersiveIntro from "./ImmersiveIntro";
import HeroImmersif from "./HeroImmersif";
import DeliveryPlatforms from "./DeliveryPlatforms";
import ServicesBadges from "./ServicesBadges";
import PaymentsBadges from "./PaymentsBadges";
import HoursSection from "./HoursSection";
import MapSection from "./MapSection";

/**
 * HomePage
 *
 * Orchestration de l'expérience d'accueil :
 * - intro immersive plein écran,
 * - hero animé avec pétales,
 * - sections orientées conversion (livraison, services, horaires, carte).
 */
export default function HomePage() {
  const [introOpen, setIntroOpen] = useState(true);

  return (
    <div className="relative">
      <ImmersiveIntro open={introOpen} onEnter={() => setIntroOpen(false)} />
      <div aria-hidden={introOpen}>
        <div className="mx-auto flex max-w-6xl flex-col gap-10 pb-16 pt-6 sm:gap-12 sm:pb-24 sm:pt-10">
          <HeroImmersif data={justRelaxData} />
          <DeliveryPlatforms data={justRelaxData} />
          <ServicesBadges services={justRelaxData.services} />
          <PaymentsBadges paymentMethods={justRelaxData.paymentMethods} />
          <HoursSection data={justRelaxData} />
          <MapSection data={justRelaxData} />
        </div>
      </div>
    </div>
  );
}