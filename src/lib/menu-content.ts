export interface DigitalMenuItem {
  name: string;
  description: string;
  price: string;
}

export interface DigitalMenuCategory {
  id: string;
  name: string;
  items: DigitalMenuItem[];
}

/**
 * Carte digitale d'aperçu pour la page /menu.
 * Construite à partir de la carte du Just Relax (extraits).
 */
export const digitalMenuCategories: DigitalMenuCategory[] = [
  {
    id: "just-kids",
    name: "Just Kids",
    items: [
      {
        name: "Menu cheese",
        description:
          "Cheeseburger servi avec ses frites maison et 1 boule de glace. Boisson au choix : Evian, Ice Tea ou Coca.",
        price: "9,90 €",
      },
      {
        name: "Menu chicken",
        description:
          "Nuggets (x5) servis avec leurs frites maison et 1 boule de glace. Boisson au choix : Evian, Ice Tea ou Coca.",
        price: "9,90 €",
      },
      {
        name: "Menu Italiano",
        description:
          "Tagliatelles bolognaise servies avec 1 boule de glace. Boisson au choix : Evian, Ice Tea ou Coca.",
        price: "9,90 €",
      },
    ],
  },
  {
    id: "planches",
    name: "Planches à partager",
    items: [
      {
        name: "Planche de fromage",
        description: "Assortiment de fromages, idéale à partager à deux.",
        price: "15,00 €",
      },
      {
        name: "Planche de charcuterie",
        description: "Sélection de charcuteries à partager à deux.",
        price: "15,00 €",
      },
      {
        name: "Planche mixte",
        description: "Mélange de fromages et de charcuteries pour 2 personnes.",
        price: "17,00 €",
      },
    ],
  },
  {
    id: "entrees",
    name: "Entrées",
    items: [
      {
        name: "Œuf mayonnaise",
        description: "Classique œuf mayonnaise, simple et gourmand.",
        price: "7,90 €",
      },
      {
        name: "Duo terre mer",
        description:
          "Galette de pommes de terre, saumon fumé et fromage frais.",
        price: "9,90 €",
      },
      {
        name: "Camembert au four entier",
        description:
          "Camembert rôti au four, à partager ou à déguster en solo.",
        price: "10,90 €",
      },
      {
        name: "Burrata tomates",
        description:
          "Burrata, tomates, roquette et assaisonnement balsamique.",
        price: "10,90 €",
      },
    ],
  },
  {
    id: "salades",
    name: "Salades",
    items: [
      {
        name: "Salade César",
        description:
          "Salade, tomates cerises, croûtons, œuf dur, copeaux de parmesan, poulet pané.",
        price: "13,90 €",
      },
      {
        name: "Salade de chèvre chaud",
        description:
          "Salade, tomates cerises, œuf dur, croûtons, toasts de chèvre chaud.",
        price: "13,90 €",
      },
      {
        name: "Salade océane",
        description:
          "Salade, tomates cerises, œuf dur, croûtons, saumon fumé.",
        price: "14,90 €",
      },
    ],
  },
  {
    id: "burgers-gourmet",
    name: "Just gourmet Burger",
    items: [
      {
        name: "Le Veggie",
        description:
          "Pain bao, galette végétarienne, galette de pommes de terre, emmental, salade, tomate, cornichons, sauce burger. Servi avec frites maison.",
        price: "11,90 €",
      },
      {
        name: "Le Smash",
        description:
          "Pain brioché, sauce burger, cheddar, steak, bacon de dinde, œuf, oignons crispy, salade, tomates, cornichons. Servi avec frites maison.",
        price: "12,90 €",
      },
      {
        name: "Le Milanaise",
        description:
          "Pain brioché, sauce moutarde, emmental, escalope de poulet pané, salade, tomate, cornichons. Servi avec frites maison.",
        price: "12,90 €",
      },
      {
        name: "Bao double steak",
        description:
          "Pain bao, sauce poivre, double steak de 100g chacun, jambon de poulet, cheddar, salade, tomate, cornichons. Servi avec frites maison.",
        price: "13,90 €",
      },
    ],
  },
  {
    id: "just-express",
    name: "Just Express",
    items: [
      {
        name: "Hot dog",
        description: "Hot dog servi avec frites maison.",
        price: "7,90 €",
      },
      {
        name: "Omelette",
        description: "Omelette servie avec sa salade.",
        price: "7,90 €",
      },
      {
        name: "Frites omelette",
        description: "Omelette servie avec frites maison et salade.",
        price: "8,90 €",
      },
      {
        name: "Croque fromage",
        description: "Croque au fromage servi avec frites et salade.",
        price: "8,90 €",
      },
      {
        name: "Croque-monsieur",
        description: "Croque-monsieur servi avec frites et salade.",
        price: "9,90 €",
      },
      {
        name: "Croque madame",
        description: "Croque-madame servi avec frites et salade.",
        price: "10,90 €",
      },
      {
        name: "Croque saumon",
        description: "Croque au saumon servi avec frites et salade.",
        price: "11,90 €",
      },
      {
        name: "Petit panier de frites",
        description: "Panier de frites maison (petit format).",
        price: "3,00 €",
      },
      {
        name: "Grand panier de frites",
        description: "Panier de frites maison (grand format).",
        price: "5,00 €",
      },
    ],
  },
  {
    id: "pizzas",
    name: "Pizzas Just Relax",
    items: [
      {
        name: "Margherita",
        description:
          "Sauce tomate, basilic, mozzarella fior di latte.",
        price: "10,90 €",
      },
      {
        name: "Regina",
        description:
          "Sauce tomate, jambon de poulet, mozzarella fior di latte, champignons, olives.",
        price: "12,90 €",
      },
      {
        name: "Neptune",
        description:
          "Sauce tomate, mozzarella fior di latte, thon, champignons, olives.",
        price: "12,90 €",
      },
      {
        name: "Végétarienne",
        description:
          "Sauce tomate, mozzarella fior di latte, champignons, oignons, poivrons, olives.",
        price: "12,90 €",
      },
      {
        name: "Calzone",
        description:
          "Sauce tomate, mozzarella fior di latte, jambon de poulet, œuf, champignons.",
        price: "13,90 €",
      },
      {
        name: "4 fromages",
        description:
          "Sauce tomate, mozzarella fior di latte, gorgonzola, parmesan, chèvre.",
        price: "13,90 €",
      },
      {
        name: "Orientale",
        description:
          "Sauce tomate, mozzarella fior di latte, merguez, poivrons, olives, œuf.",
        price: "13,90 €",
      },
      {
        name: "Campione",
        description:
          "Sauce tomate, mozzarella fior di latte, viande hachée, champignons, œuf.",
        price: "13,90 €",
      },
      {
        name: "Fermière",
        description:
          "Crème fraîche, mozzarella fior di latte, poulet, lardons, oignons.",
        price: "13,90 €",
      },
      {
        name: "Chèvre-miel",
        description:
          "Crème fraîche, mozzarella fior di latte, chèvre, miel.",
        price: "13,90 €",
      },
      {
        name: "L’Indienne",
        description:
          "Crème fraîche, curry, mozzarella fior di latte, escalope de poulet, poivrons, oignons.",
        price: "13,90 €",
      },
      {
        name: "Saumon",
        description:
          "Sauce tomate ou crème fraîche, mozzarella fior di latte, saumon fumé.",
        price: "14,90 €",
      },
      {
        name: "Burrata",
        description:
          "Sauce tomate, mozzarella fior di latte, burrata, roquette, tomates cerises, sauce balsamique, copeaux de parmesan.",
        price: "15,90 €",
      },
    ],
  },
  {
    id: "paninis-crepes",
    name: "Paninis & crêpes salées",
    items: [
      {
        name: "Panini campagnard",
        description:
          "Jambon de poulet, crème fraîche, emmental, mozzarella. Servi avec frites maison.",
        price: "7,90 €",
      },
      {
        name: "Panini 5 fromages",
        description:
          "Gorgonzola, chèvre, emmental, mozzarella, cheddar. Servi avec frites maison.",
        price: "8,90 €",
      },
      {
        name: "Panini chicken",
        description:
          "Escalope de poulet, emmental, mozzarella. Servi avec frites maison.",
        price: "8,90 €",
      },
      {
        name: "Panini viande hachée",
        description:
          "Viande hachée, crème fraîche, emmental, mozzarella, cheddar. Servi avec frites maison.",
        price: "8,90 €",
      },
      {
        name: "Panini nordique",
        description:
          "Saumon, crème fraîche, emmental. Servi avec frites maison.",
        price: "9,90 €",
      },
      {
        name: "Crêpe classique",
        description:
          "Œuf, emmental, mozzarella, jambon de poulet. Servie avec sa salade.",
        price: "8,90 €",
      },
      {
        name: "Crêpe campionne",
        description:
          "Crème fraîche, œuf, emmental, mozzarella, viande hachée, champignons. Servie avec sa salade.",
        price: "9,90 €",
      },
      {
        name: "Crêpe fermière",
        description:
          "Crème fraîche, œuf, emmental, mozzarella, escalope de poulet, champignons. Servie avec sa salade.",
        price: "9,90 €",
      },
      {
        name: "Crêpe 4 fromages",
        description:
          "Gorgonzola, emmental, mozzarella, chèvre. Servie avec sa salade.",
        price: "9,90 €",
      },
      {
        name: "Crêpe norvégienne",
        description:
          "Saumon, crème fraîche, emmental, mozzarella. Servie avec sa salade.",
        price: "10,90 €",
      },
    ],
  },
  {
    id: "casse-croutes",
    name: "Casse-croûtes",
    items: [
      {
        name: "Steak fromage",
        description:
          "Pain et frites maison, sauce burger, steak, cheddar, salade, tomate.",
        price: "11,00 €",
      },
      {
        name: "Chicken pané",
        description:
          "Pain et frites maison, sauce moutarde, poulet pané, emmental fondu, salade, tomate.",
        price: "11,00 €",
      },
    ],
  },
  {
    id: "pates",
    name: "Nos pâtes",
    items: [
      {
        name: "Pâtes à la bolognaise",
        description:
          "Pennes ou tagliatelles (selon le jour), sauce bolognaise.",
        price: "12,90 €",
      },
      {
        name: "Pâtes à la carbonara",
        description:
          "Pennes ou tagliatelles (selon le jour), sauce carbonara.",
        price: "13,90 €",
      },
      {
        name: "Pâtes forestière",
        description:
          "Pennes ou tagliatelles (selon le jour), sauce forestière.",
        price: "13,90 €",
      },
      {
        name: "Pâtes 4 fromages",
        description:
          "Pennes ou tagliatelles (selon le jour), sauce aux 4 fromages.",
        price: "14,90 €",
      },
      {
        name: "Pâtes au saumon",
        description:
          "Pennes ou tagliatelles (selon le jour), saumon fumé.",
        price: "14,90 €",
      },
      {
        name: "Pâtes au pesto burrata",
        description:
          "Pennes ou tagliatelles (selon le jour), pesto, burrata.",
        price: "16,90 €",
      },
    ],
  },
  {
    id: "viandes",
    name: "Nos viandes",
    items: [
      {
        name: "Escalope gratinée",
        description:
          "Escalope gratinée, pâtes à la crème.",
        price: "16,90 €",
      },
      {
        name: "Escalope forestière",
        description:
          "Escalope forestière, riz et sauce forestière.",
        price: "16,90 €",
      },
      {
        name: "Steak haché à cheval",
        description:
          "Steak haché à cheval, frites ou haricots verts.",
        price: "16,90 €",
      },
      {
        name: "Steak sauce poivre",
        description:
          "Steak sauce poivre, frites et salade.",
        price: "17,90 €",
      },
    ],
  },
  {
    id: "desserts",
    name: "Desserts",
    items: [
      {
        name: "Coupe de glace",
        description:
          "Deux boules au choix : pistache, chocolat, vanille, fraise, caramel beurre salé.",
        price: "5,00 €",
      },
      {
        name: "Crêpe au sucre",
        description: "Crêpe au sucre servie nature.",
        price: "5,00 €",
      },
      {
        name: "Brioche perdue",
        description:
          "Brioche perdue Nutella ou caramel beurre salé, servie avec chantilly.",
        price: "6,00 €",
      },
      {
        name: "Crêpe Nutella ou caramel",
        description:
          "Crêpe Nutella ou caramel beurre salé, servie avec chantilly.",
        price: "6,00 €",
      },
      {
        name: "Jardinière (tiramisu maison)",
        description: "Tiramisu maison.",
        price: "6,00 €",
      },
      {
        name: "Crème brûlée",
        description: "Crème brûlée classique.",
        price: "6,00 €",
      },
      {
        name: "Mousse au chocolat",
        description: "Mousse au chocolat maison.",
        price: "6,00 €",
      },
      {
        name: "Fondant chocolat",
        description:
          "Fondant chocolat servi avec crème anglaise et chantilly.",
        price: "7,00 €",
      },
      {
        name: "Salade de fruits",
        description:
          "Salade de fruits de saison, en fonction des arrivages.",
        price: "8,00 €",
      },
      {
        name: "Chocolat liégeois glacé",
        description:
          "Boules de glace vanille et chocolat, sauce chocolat et chantilly.",
        price: "8,00 €",
      },
      {
        name: "Coupe glacée caramel",
        description:
          "Glace caramel et vanille, sauce caramel beurre salé et chantilly.",
        price: "8,00 €",
      },
      {
        name: "Café ou thé gourmand",
        description:
          "Café ou thé accompagné d’un trio de mignardises.",
        price: "8,00 €",
      },
      {
        name: "Banana split",
        description:
          "Banane, boules de glace vanille, fraise, chocolat et chantilly.",
        price: "9,00 €",
      },
    ],
  },
  {
    id: "cocktails-sans-alcool",
    name: "Cocktails sans alcool",
    items: [
      {
        name: "Virgin mojito",
        description:
          "Menthe, citron, eau pétillante, sirop mojito.",
        price: "8,00 €",
      },
      {
        name: "Virgin mojito fraise",
        description:
          "Menthe, citron, eau pétillante, sirop de fraise, purée de fraise.",
        price: "8,00 €",
      },
      {
        name: "Virgin mojito passion",
        description:
          "Menthe, citron, eau pétillante, sirop de passion, purée de passion.",
        price: "8,00 €",
      },
      {
        name: "Le Mira",
        description:
          "Jus de cranberry, jus d’ananas, sirop de cerise, citron.",
        price: "8,00 €",
      },
      {
        name: "Le Tcha Tcha Tcha",
        description:
          "Sirop d’érable, citron vert, jus de pomme, jus d’ananas.",
        price: "8,00 €",
      },
      {
        name: "Le Rubis",
        description:
          "Fraise, basilic, citron vert, purée de fraise, limonade.",
        price: "8,00 €",
      },
      {
        name: "Le Ginger",
        description:
          "Menthe, gingembre, sirop de cerise, citron vert, jus d’ananas.",
        price: "8,00 €",
      },
    ],
  },
  {
    id: "cocktails-classiques",
    name: "Cocktails classiques",
    items: [
      {
        name: "Le Boulevardier",
        description:
          "Vermouth rouge, Campari, Four Roses.",
        price: "11,00 €",
      },
      {
        name: "Le Manhattan",
        description:
          "Rye Jack Daniel’s, martini rouge, angostura.",
        price: "11,00 €",
      },
      {
        name: "Le Cosmopolitan",
        description:
          "Vodka, citron vert, jus de cranberry, Cointreau.",
        price: "11,00 €",
      },
      {
        name: "Sex and the Beach",
        description:
          "Vodka, liqueur de pêche, jus d’ananas, jus de cranberry.",
        price: "11,00 €",
      },
      {
        name: "Expresso martini",
        description:
          "Dose d’expresso, vodka, liqueur de café, sucre.",
        price: "11,00 €",
      },
      {
        name: "Gin tonic",
        description:
          "Gin, Schweppes tonic.",
        price: "11,00 €",
      },
      {
        name: "French 75",
        description:
          "Gin, citron, sucre, champagne.",
        price: "11,00 €",
      },
      {
        name: "Mojito",
        description:
          "Rhum blanc, citron vert, menthe, sucre, eau pétillante.",
        price: "11,00 €",
      },
      {
        name: "Margarita",
        description:
          "Tequila, citron vert, Cointreau, sel.",
        price: "11,00 €",
      },
    ],
  },
  {
    id: "cocktails-signature",
    name: "Cocktails signature Just Relax",
    items: [
      {
        name: "Just cocktail (sur mesure)",
        description:
          "Une idée, un souvenir, faites-en part à notre barman et le tour est joué.",
        price: "13,00 €",
      },
      {
        name: "Keep Calm",
        description:
          "Jack Daniel’s, jus d’ananas, jus d’abricot, basilic.",
        price: "12,00 €",
      },
      {
        name: "Just Relax",
        description:
          "Four Roses, liqueur de cerise, citron vert, sirop de grenadine.",
        price: "12,00 €",
      },
      {
        name: "Redlight",
        description:
          "Vodka, purée de fraise, citron vert, sucre, basilic.",
        price: "12,00 €",
      },
      {
        name: "Grinch",
        description:
          "Gin, basilic, citron, liqueur de sureau, sucre.",
        price: "12,00 €",
      },
      {
        name: "Sunset",
        description:
          "Gin, Lillet blanc, limoncello, citron, sucre.",
        price: "12,00 €",
      },
      {
        name: "Oulala",
        description:
          "Gin, calvados, citron, sucre, blanc d’œuf.",
        price: "12,00 €",
      },
    ],
  },
  {
    id: "just-chicha",
    name: "Just Chicha",
    items: [
      {
        name: "Hawaï",
        description: "Adalya / Al Fakher / Chaos · Ananas, menthe, mangue.",
        price: "15,00 €",
      },
      {
        name: "Love 66",
        description: "Adalya / Al Fakher / Chaos · Menthe, melon, pastèque, passion.",
        price: "15,00 €",
      },
      {
        name: "Mi amor",
        description: "Adalya / Al Fakher / Chaos · Banane, ananas, menthe.",
        price: "15,00 €",
      },
      {
        name: "Menthe",
        description: "Adalya / Al Fakher / Chaos · Parfum menthe.",
        price: "15,00 €",
      },
      {
        name: "Double pomme",
        description: "Adalya / Al Fakher / Chaos · Parfum double pomme.",
        price: "15,00 €",
      },
      {
        name: "Menthe sucrée",
        description: "Adalya / Al Fakher / Chaos · Parfum menthe sucrée.",
        price: "15,00 €",
      },
    ],
  },
  {
    id: "formules-chicha",
    name: "Formules chicha",
    items: [
      {
        name: "Tête plate classique",
        description:
          "Tête plate avec une boisson soft au choix (hors Red Bull et cocktail). Têtes supplémentaires : 5 € (plate), 10 € (Quasar).",
        price: "15,00 €",
      },
      {
        name: "Tête Quasar classique",
        description:
          "Tête Quasar avec une boisson soft au choix (hors Red Bull et cocktail). Têtes supplémentaires : 5 € (plate), 10 € (Quasar).",
        price: "20,00 €",
      },
      {
        name: "Just pour vous mesdames – tête plate",
        description:
          "Tarif spécial pour mesdames : tête plate avec boisson soft au choix (hors Red Bull et cocktail).",
        price: "10,00 €",
      },
      {
        name: "Just pour vous mesdames – tête Quasar",
        description:
          "Tarif spécial pour mesdames : tête Quasar avec boisson soft au choix (hors Red Bull et cocktail).",
        price: "15,00 €",
      },
      {
        name: "Formule Quasar + dessert (dames)",
        description:
          "Une chicha Quasar et un dessert \\\"ptit plaisir\\\", accompagnés d’une boisson soft (hors Red Bull et cocktail).",
        price: "20,00 €",
      },
      {
        name: "Formule Quasar + Just plat (dames)",
        description:
          "Une chicha Quasar et un Just plat, accompagnés d’une boisson soft (hors Red Bull et cocktail).",
        price: "30,00 €",
      },
      {
        name: "Formule Quasar complète (dames)",
        description:
          "Une chicha Quasar, une entrée, un Just plat et un dessert \\\"ptit plaisir\\\", avec boisson soft (hors Red Bull et cocktail).",
        price: "45,00 €",
      },
      {
        name: "Formule tête plate + Just plat (messieurs)",
        description:
          "Une chicha tête plate et un Just plat, accompagnés d’une boisson soft (hors Red Bull et cocktail).",
        price: "30,00 €",
      },
      {
        name: "Formule Quasar + Just plat (messieurs)",
        description:
          "Une chicha Quasar et un Just plat, accompagnés d’une boisson soft (hors Red Bull et cocktail).",
        price: "35,00 €",
      },
      {
        name: "Formule tête plate complète (messieurs)",
        description:
          "Une chicha tête plate, une entrée, un Just plat et un dessert \\\"ptit plaisir\\\", avec boisson soft (hors Red Bull et cocktail).",
        price: "45,00 €",
      },
      {
        name: "Formule Quasar complète (messieurs)",
        description:
          "Une chicha Quasar, une entrée, un Just plat et un dessert \\\"ptit plaisir\\\", avec boisson soft (hors Red Bull et cocktail).",
        price: "50,00 €",
      },
    ],
  },
  {
    id: "vins-rouges",
    name: "Vins rouges",
    items: [
      {
        name: "Côte du Rhône \"Château Saint Roman\"",
        description: "Verre 12 cl : 5,50 € · Bouteille 75 cl : 27,00 €.",
        price: "à partir de 5,50 €",
      },
      {
        name: "Brouilly",
        description: "Verre 12 cl : 6,00 € · Bouteille 75 cl : 30,00 €.",
        price: "à partir de 6,00 €",
      },
      {
        name: "Chinon \"Les Granges de la Perrière\"",
        description: "Bouteille 37,5 cl : 19,00 € · 75 cl : 32,00 €.",
        price: "à partir de 19,00 €",
      },
      {
        name: "Saint-Émilion Grand Cru \"Barrail La Rose\"",
        description: "Bouteille 75 cl.",
        price: "37,00 €",
      },
      {
        name: "Bourgogne Pinot Noir",
        description: "Bouteille 75 cl.",
        price: "37,00 €",
      },
      {
        name: "Bordeaux \"Mouton Cadet\"",
        description: "Bouteille 75 cl.",
        price: "40,00 €",
      },
    ],
  },
  {
    id: "vins-blancs",
    name: "Vins blancs",
    items: [
      {
        name: "Côtes de Gascogne \"Les Hirondelles\" (moelleux ou sec)",
        description: "Verre 12 cl : 4,00 € · Bouteille 75 cl : 18,00 €.",
        price: "à partir de 4,00 €",
      },
      {
        name: "Chardonnay",
        description: "Verre 12 cl : 5,00 € · Bouteille 75 cl : 24,00 €.",
        price: "à partir de 5,00 €",
      },
      {
        name: "Monbazillac \"Bajac\"",
        description: "Bouteille 75 cl.",
        price: "26,00 €",
      },
      {
        name: "Sauvignon bio \"Sapristi\"",
        description: "Bouteille 75 cl.",
        price: "27,00 €",
      },
      {
        name: "Bordeaux Sauvignon \"Mouton Cadet\"",
        description: "Bouteille 75 cl.",
        price: "35,00 €",
      },
      {
        name: "Chablis \"Les Beaumonts\" – Domaine Dampt-Frères",
        description: "Bouteille 37,5 cl : 25,00 € · 75 cl : 40,00 €.",
        price: "à partir de 25,00 €",
      },
    ],
  },
  {
    id: "vins-roses",
    name: "Vins rosés",
    items: [
      {
        name: "Côtes de Provence Bio \"La Santonnière\"",
        description: "Verre 12 cl : 6,00 € · 37,5 cl : 17,00 € · 75 cl : 30,00 €.",
        price: "à partir de 6,00 €",
      },
      {
        name: "Bordeaux \"Mouton Cadet\"",
        description: "Bouteille 75 cl.",
        price: "35,00 €",
      },
      {
        name: "Côtes de Provence \"Minuty\"",
        description: "Bouteille 75 cl.",
        price: "40,00 €",
      },
    ],
  },
  {
    id: "champagnes",
    name: "Champagnes",
    items: [
      {
        name: "Veuve Pelletier",
        description: "Bouteille 75 cl.",
        price: "80,00 €",
      },
      {
        name: "GH Mumm",
        description: "Bouteille 75 cl.",
        price: "120,00 €",
      },
      {
        name: "Moët & Chandon",
        description: "Bouteille 75 cl.",
        price: "150,00 €",
      },
      {
        name: "Ruinart Blanc de Blancs",
        description: "Bouteille 75 cl.",
        price: "350,00 €",
      },
    ],
  },
  {
    id: "boissons-chaudes",
    name: "Boissons chaudes",
    items: [
      {
        name: "Café",
        description: "Expresso court.",
        price: "2,00 €",
      },
      {
        name: "Noisette",
        description: "Expresso avec une touche de lait.",
        price: "2,50 €",
      },
      {
        name: "Allongé",
        description: "Café allongé.",
        price: "2,50 €",
      },
      {
        name: "Décaféiné",
        description: "Café décaféiné.",
        price: "2,50 €",
      },
      {
        name: "Café crème",
        description: "Café avec crème.",
        price: "3,00 €",
      },
      {
        name: "Thé / infusion",
        description: "Assortiment de thés et infusions.",
        price: "3,00 €",
      },
      {
        name: "Double expresso",
        description: "Double shot d’expresso.",
        price: "3,50 €",
      },
      {
        name: "Chocolat chaud",
        description: "Chocolat chaud classique.",
        price: "3,50 €",
      },
      {
        name: "Chocolat liégeois",
        description: "Chocolat chaud gourmand avec chantilly.",
        price: "4,00 €",
      },
      {
        name: "Cappuccino",
        description: "Café, lait chaud et mousse.",
        price: "4,00 €",
      },
      {
        name: "Thé marocain",
        description:
          "Servi dans une théière individuelle, chaque verre supplémentaire est facturé 1,00 €.",
        price: "4,50 €",
      },
    ],
  },
  {
    id: "boissons-soft",
    name: "Boissons soft",
    items: [
      {
        name: "Coca-Cola / Zero / Cherry",
        description: "Sodas 33 cl.",
        price: "4,00 €",
      },
      {
        name: "Sprite",
        description: "Soda 33 cl.",
        price: "4,00 €",
      },
      {
        name: "Orangina",
        description: "Boisson gazeuse 33 cl.",
        price: "4,00 €",
      },
      {
        name: "Schweppes Agrumes / Tonic / Lemon",
        description: "Boissons gazeuses 33 cl.",
        price: "4,00 €",
      },
      {
        name: "Oasis tropical",
        description: "Boisson fruitée 33 cl.",
        price: "4,00 €",
      },
      {
        name: "Limonade",
        description: "Boisson pétillante 33 cl.",
        price: "4,00 €",
      },
      {
        name: "Diabolo",
        description:
          "Sirop au choix (fraise, grenadine, citron, melon, cerise, menthe, pomme verte) allongé de limonade.",
        price: "4,00 €",
      },
      {
        name: "Jus de fruits",
        description:
          "Orange, poire, ananas, ACE, pomme, litchi, pêche (au verre).",
        price: "4,00 €",
      },
      {
        name: "Fuze Tea",
        description: "Boisson glacée.",
        price: "4,00 €",
      },
      {
        name: "Evian 50 cl",
        description: "Eau minérale plate en bouteille.",
        price: "4,00 €",
      },
      {
        name: "Red Bull",
        description: "Boisson énergisante.",
        price: "4,00 €",
      },
      {
        name: "Perrier 33 cl",
        description: "Eau gazeuse en bouteille.",
        price: "4,00 €",
      },
    ],
  },
  {
    id: "supplements-boissons",
    name: "Suppléments boissons",
    items: [
      {
        name: "Sirop au choix",
        description: "Supplément sirop (hors Evian 50 cl).",
        price: "0,50 €",
      },
      {
        name: "Rondelle de citron",
        description: "Supplément rondelle de citron.",
        price: "0,50 €",
      },
      {
        name: "Billes bubble",
        description: "Perles aromatisées pour boissons.",
        price: "2,00 €",
      },
    ],
  },
  {
    id: "eaux-minerales",
    name: "Eaux minérales",
    items: [
      {
        name: "Vittel 50 cl",
        description:
          "Uniquement servies pendant les heures de repas (11h–15h et 19h–23h).",
        price: "4,00 €",
      },
      {
        name: "Eau pétillante 50 cl",
        description:
          "Uniquement servies pendant les heures de repas (11h–15h et 19h–23h).",
        price: "4,00 €",
      },
      {
        name: "Eau plate 1 L",
        description:
          "Uniquement servies pendant les heures de repas (11h–15h et 19h–23h).",
        price: "5,00 €",
      },
      {
        name: "Eau pétillante 1 L",
        description:
          "Uniquement servies pendant les heures de repas (11h–15h et 19h–23h).",
        price: "5,00 €",
      },
    ],
  },
  {
    id: "just-bubble",
    name: "Just Bubble",
    items: [
      {
        name: "Le Love",
        description: "Infusé au thé vert au jasmin, fraise et perles de litchi.",
        price: "6,00 €",
      },
      {
        name: "Le Detox",
        description: "Infusé au thé vert au jasmin, melon et perles de pomme.",
        price: "6,00 €",
      },
      {
        name: "Le Summer",
        description: "Infusé au thé vert au jasmin, ananas et perles de passion.",
        price: "6,00 €",
      },
      {
        name: "Le Bloodie",
        description: "Infusé au thé vert au jasmin, fraise et billes de pomme.",
        price: "6,00 €",
      },
    ],
  },
  {
    id: "bieres-bouteilles",
    name: "Bières bouteilles",
    items: [
      {
        name: "Super Bock / Heineken / Desperados 25 cl",
        description: "Bières en bouteille.",
        price: "4,00 €",
      },
      {
        name: "Corona 35 cl",
        description: "Bière en bouteille.",
        price: "4,50 €",
      },
      {
        name: "Desperados 35 cl",
        description: "Bière aromatisée en bouteille.",
        price: "4,50 €",
      },
    ],
  },
  {
    id: "aperitifs",
    name: "Apéritifs",
    items: [
      {
        name: "Ricard 2 cl",
        description: "Anisé servi allongé.",
        price: "4,00 €",
      },
      {
        name: "Malibu",
        description: "Liqueur de coco.",
        price: "4,00 €",
      },
      {
        name: "Martini blanc ou rouge 5 cl",
        description: "Vermouth servi à l’apéritif.",
        price: "4,50 €",
      },
      {
        name: "Suze 4 cl",
        description: "Apéritif à base de gentiane.",
        price: "4,50 €",
      },
      {
        name: "Kir vin blanc 12 cl",
        description: "Vin blanc et crème de cassis.",
        price: "5,50 €",
      },
      {
        name: "Porto 10 cl",
        description: "Vin de Porto servi à l’apéritif.",
        price: "5,50 €",
      },
      {
        name: "Lillet 6 cl",
        description: "Apéritif à base de vin.",
        price: "5,50 €",
      },
      {
        name: "Coupe de champagne",
        description: "Champagne au verre.",
        price: "15,00 €",
      },
      {
        name: "Kir royal",
        description: "Champagne et crème de cassis.",
        price: "16,00 €",
      },
      {
        name: "Supplément sirop",
        description: "Supplément sirop pour apéritif.",
        price: "0,50 €",
      },
    ],
  },
  {
    id: "gin-4cl",
    name: "Gin 4 cl",
    items: [
      {
        name: "Bombay Sapphire",
        description: "Gin London Dry.",
        price: "7,00 €",
      },
      {
        name: "Tanqueray London Dry",
        description: "Gin London Dry.",
        price: "7,00 €",
      },
      {
        name: "Generous Bio",
        description: "Gin biologique.",
        price: "8,00 €",
      },
    ],
  },
  {
    id: "vodka-4cl",
    name: "Vodkas & bouteilles",
    items: [
      {
        name: "Absolut 4 cl",
        description:
          "Vodka servie au verre. Les bouteilles sont servies avec une brique de jus et 2 Red Bull.",
        price: "7,00 €",
      },
      {
        name: "Belvédère 4 cl",
        description:
          "Vodka servie au verre. Les bouteilles sont servies avec une brique de jus et 2 Red Bull.",
        price: "8,00 €",
      },
      {
        name: "Absolut (bouteille)",
        description:
          "Vodka en bouteille, servie avec une brique de jus et 2 Red Bull.",
        price: "90,00 €",
      },
      {
        name: "Belvédère (bouteille)",
        description:
          "Vodka en bouteille, servie avec une brique de jus et 2 Red Bull.",
        price: "120,00 €",
      },
    ],
  },
  {
    id: "rhum-4cl",
    name: "Rhums 4 cl",
    items: [
      {
        name: "Plantation 3 Stars",
        description: "Rhum blanc.",
        price: "7,00 €",
      },
      {
        name: "Havana Club 7 ans",
        description: "Rhum ambré vieilli 7 ans.",
        price: "8,00 €",
      },
    ],
  },
  {
    id: "whisky-4cl",
    name: "Whiskies & bouteilles",
    items: [
      {
        name: "J&B 4 cl",
        description:
          "Blended whisky. Les bouteilles sont servies avec une bouteille de Coca-Cola.",
        price: "7,00 €",
      },
      {
        name: "Four Roses 4 cl",
        description:
          "Bourbon. Les bouteilles sont servies avec une bouteille de Coca-Cola.",
        price: "8,00 €",
      },
      {
        name: "Jack Daniel’s 4 cl",
        description:
          "Bourbon. Les bouteilles sont servies avec une bouteille de Coca-Cola.",
        price: "8,00 €",
      },
      {
        name: "Jack Daniel’s (bouteille)",
        description:
          "Bourbon en bouteille, servie avec une bouteille de Coca-Cola.",
        price: "100,00 €",
      },
      {
        name: "Aberlour 10 ans 4 cl",
        description: "Single malt écossais 10 ans d’âge.",
        price: "10,00 €",
      },
      {
        name: "Cardhu 12 ans 4 cl",
        description: "Single malt écossais 12 ans d’âge.",
        price: "11,00 €",
      },
      {
        name: "Red Label 4 cl",
        description: "Blended scotch whisky.",
        price: "8,00 €",
      },
      {
        name: "Black Label 4 cl",
        description: "Blended scotch whisky.",
        price: "9,00 €",
      },
      {
        name: "Chivas 4 cl",
        description: "Blended scotch whisky.",
        price: "9,00 €",
      },
      {
        name: "Chivas (bouteille)",
        description:
          "Blended scotch en bouteille, servie avec une bouteille de Coca-Cola.",
        price: "120,00 €",
      },
      {
        name: "Nikka From The Barrel 4 cl",
        description: "Whisky japonais.",
        price: "12,00 €",
      },
    ],
  },
  {
    id: "digestifs-4cl",
    name: "Digestifs 4 cl",
    items: [
      {
        name: "Bailey’s",
        description: "Liqueur à base de crème.",
        price: "4,00 €",
      },
      {
        name: "Armagnac",
        description: "Eau-de-vie du Sud-Ouest.",
        price: "5,00 €",
      },
      {
        name: "Limoncello",
        description: "Liqueur de citron.",
        price: "5,00 €",
      },
      {
        name: "Calvados",
        description: "Eau-de-vie de cidre.",
        price: "5,00 €",
      },
      {
        name: "Get 27 (3 cl)",
        description: "Liqueur de menthe verte.",
        price: "5,00 €",
      },
      {
        name: "Get 31 (3 cl)",
        description: "Liqueur de menthe blanche.",
        price: "5,00 €",
      },
      {
        name: "Tequila (2 shots)",
        description: "Deux shots de tequila.",
        price: "6,00 €",
      },
      {
        name: "Tek Paf",
        description: "Rituel shot de tequila, sel et citron.",
        price: "7,00 €",
      },
      {
        name: "Cognac",
        description: "Eau-de-vie de vin.",
        price: "8,00 €",
      },
      {
        name: "Cognac Hennessy (bouteille)",
        description: "Cognac Hennessy en bouteille.",
        price: "120,00 €",
      },
    ],
  },
];