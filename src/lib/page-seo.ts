import type { Metadata } from "next";
import { justRelaxData } from "@/lib/just-relax-data";

export const pageSeo = {
  menu: {
    title: `Carte & menus – ${justRelaxData.name}, restaurant halal avec terrasse à ${justRelaxData.contact.address.city}`,
    description:
      "Découvrez la carte Just Menu, Just Boisson et Just Chicha : plats, boissons et chichas halal à Pantin (93500). Cuisine 100 % halal, consultation confortable sur mobile grâce à la carte digitale et aux menus PDF.",
  } as Metadata,
  galerie: {
    title: `Galerie photos – ${justRelaxData.name} à ${justRelaxData.contact.address.city}`,
    description:
      "Ambiance, terrasse privée, lounge, chicha, cuisine 100 % halal et cocktails : parcourez les photos de Just Relax à Pantin et plongez dans l’atmosphère du restaurant & lounge halal.",
  } as Metadata,
  accesHoraires: {
    title: `Accès & horaires – ${justRelaxData.name}, restaurant halal à ${justRelaxData.contact.address.city} (93500)`,
    description:
      "Adresse, plan d’accès, horaires d’ouverture et informations pratiques pour venir chez Just Relax à Pantin, restaurant halal ouvert 7j/7 jusqu’à 2h du matin dans le 93.",
  } as Metadata,
  contact: {
    title: `Contact & réservation – ${justRelaxData.name} à Pantin (93500)`,
    description:
      "Contactez Just Relax à Pantin pour une réservation, un événement privé ou une privatisation de restaurant halal avec terrasse. Téléphone, e-mail et formulaire de contact à votre disposition.",
  } as Metadata,
  mentionsLegales: {
    title: `Mentions légales – ${justRelaxData.name} à Pantin`,
    description:
      "Mentions légales et informations réglementaires concernant le site vitrine du restaurant & lounge Just Relax à Pantin (93500).",
  } as Metadata,
  evenements: {
    title: `Privatisation & événements – ${justRelaxData.name} à Pantin`,
    description:
      "Privatisation de restaurant halal avec terrasse à Pantin (93500) pour anniversaires, afterworks, soirées d’entreprise et événements privés. Devis sur mesure et accueil jusqu’à 2h du matin.",
  } as Metadata,
  reservation: {
    title: `Réservation – ${justRelaxData.name} à Pantin`,
    description:
      "Réservez votre table chez Just Relax à Pantin : déjeuner, dîner, afterwork ou événement privé dans un restaurant halal avec terrasse et lounge chicha, 7j/7 jusqu’à 2h du matin.",
  } as Metadata,
  protectionDonnees: {
    title: `Protection des données – ${justRelaxData.name}`,
    description:
      "Politique de confidentialité et informations sur la protection des données personnelles collectées via le site Just Relax (formulaire de contact, outils de mesure d’audience, etc.).",
  } as Metadata,
};