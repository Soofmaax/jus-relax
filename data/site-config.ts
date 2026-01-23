import type { JustRelaxData } from "@/lib/just-relax-schema";
import rawData from "./just-relax.json";

/**
 * Configuration centrale du site Just Relax.
 *
 * On part des données JSON existantes pour garantir la compatibilité
 * avec toutes les pages, puis on peut surcharger certains champs
 * pour affiner le wording de l'expérience immersive.
 */
const baseData = rawData as JustRelaxData;

export const siteConfig: JustRelaxData = {
  ...baseData,
  // Copie légèrement optimisée pour l'expérience immersive 2026.
  name: "Just Relax",
  tagline: "Restaurant & Lounge",
  description:
    "Restaurant & lounge à Pantin avec cuisine généreuse, terrasse privée, chicha et cocktails signatures. Ouvert 7j/7 jusqu’à 2h du matin pour vos déjeuners, dîners et soirées.",
};