export interface MenuDuMomentItem {
  name: string;
  description: string;
  price: string;
}

export interface AvisClient {
  name: string;
  source: string;
  text: string;
}

/**
 * Contenus éditoriaux spécifiques à la page d'accueil
 * (facilement modifiables sans toucher au JSX).
 */
export const menuDuMomentItems: MenuDuMomentItem[] = [
  {
    name: "Planche à partager Just Relax",
    description:
      "Sélection de tapas chauds et froids à partager : bouchées croustillantes, dips maison et petites salades.",
    price: "29,00 €",
  },
  {
    name: "Plat signature du chef",
    description:
      "Viande ou poisson du moment, accompagnement de saison et sauce travaillée, selon l’inspiration du chef.",
    price: "24,00 €",
  },
  {
    name: "Dessert gourmand à partager",
    description:
      "Assortiment de desserts maison pour finir le repas sur une note douce et conviviale.",
    price: "18,00 €",
  },
];

export const avisClients: AvisClient[] = [
  {
    name: "Samir",
    source: "Avis Google",
    text: "Super ambiance, cocktails très bien réalisés et équipe aux petits soins. On a passé une excellente soirée.",
  },
  {
    name: "Mélanie",
    source: "Avis Google",
    text: "Terrasse agréable, chicha de qualité et carte variée. Parfait pour un anniversaire ou une soirée entre amis.",
  },
  {
    name: "Thomas",
    source: "Avis Google",
    text: "Service rapide, musique au bon volume et déco soignée. Une belle découverte à Pantin.",
  },
];