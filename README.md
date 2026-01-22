# Just Relax – Site vitrine maintenable

Ce projet est un site vitrine pour **Just Relax – Restaurant &amp; Lounge à Pantin**, conçu pour être facilement maintenable dans le temps, en particulier pour les aspects **contenu** et **SEO local**.

Ce document résume _où_ modifier quoi, sans avoir à rentrer dans tous les fichiers React/Next.

## Guide pour développeurs

### Prérequis

- Node.js 20 ou plus récent
- npm (le dépôt inclut un `package-lock.json`, le projet est donc pensé pour npm)

### Installation des dépendances

Depuis la racine du projet :

```bash
npm install
```

### Lancer le projet en développement

```bash
npm run dev
```

Par défaut, l’application est accessible sur `http://localhost:3000`.

### Scripts disponibles

- `npm run dev` – lance le serveur de développement (avec Turbopack).
- `npm run build` – génère le build de production Next.js.
- `npm start` – démarre le serveur Next.js en mode production (après `npm run build`).
- `npm run lint` – exécute ESLint avec la configuration Next.js.
- `npm run type-check` – lance TypeScript (`tsc`) en mode vérification uniquement.

### Structure du projet (vue d’ensemble)

- `data/site-config.ts` – configuration centrale du site (branding, description, etc.).
- `data/just-relax.json` – données métier brutes (adresse, horaires, menus PDF, galerie…).
- `data/menu.json` – structure éditable de la carte digitale (catégories & items, placeholders fournis).
- `data/events.json` – configuration éditable des événements clés (afterworks, privatisations, etc.).
- `src/app/` – routes et pages App Router Next.js (`/`, `/menu`, `/galerie`, `/reservation`, etc.).
- `src/components/` – composants UI réutilisables (HeroImmersif, ImmersiveIntro, Section, CTAButtons, etc.).
- `src/lib/` – logique métier, contenu structuré et helpers SEO/JSON-LD.
- `public/` – assets statiques (images, icônes, etc.).
- `next.config.ts` – configuration Next.js (ex. domaines autorisés pour les images).
- `tsconfig.json` – configuration TypeScript.
- `eslint.config.mjs` – configuration ESLint (base Next.js).

---

## 1. Données métier (adresse, horaires, menus…)

**Fichiers :**  
- `data/site-config.ts` – configuration centrale et textes optimisés pour l’expérience immersive.  
- `data/just-relax.json` – données brutes complètes utilisées par `site-config.ts`.  

**Importé via :** `src/lib/just-relax-data.ts`

C’est la source de vérité pour :

- Nom du restaurant, tagline
- Description principale
- Coordonnées (téléphone, e-mail, adresse, Google Maps)
- Horaires d’ouverture
- Services, moyens de paiement
- Menus (PDF + structure détaillée)
- Galerie photo
- Références légales (raison sociale, SIRET, etc.)
- SEO global (titre, description, mots-clés)

> ✅ Pour changer un numéro de téléphone, une adresse, les horaires ou les liens PDF des menus, il suffit de modifier `data/just-relax.json` (ou, pour les textes marketing, `data/site-config.ts`).

---

## 2. Réservation (WhatsApp / URL de réservation / téléphone)

**Fichier de configuration :** `data/just-relax.json`, bloc `contact` :

```jsonc
"contact": {
  "phoneMain": "+33148918366",
  "phoneAlt": "+33634076140",
  "whatsapp": "",
  "email": "infos.justrelax@gmail.com",
  "emailAlt": "marineranquet@yahoo.fr",
  "googleReviewUrl": "",
  "bookingUrl": "",
  "address": { ... }
}
```

**Logique centralisée :** `src/lib/reservation.ts`

- Si `whatsapp` est renseigné → CTA principal = **“Réserver sur WhatsApp”** (nouvelle fenêtre).
- Sinon, si `bookingUrl` est renseigné → CTA principal = **“Réserver en ligne”**.
- Sinon → fallback = **“Réserver par téléphone”** (`tel:`).

Cette logique est utilisée automatiquement :

- dans les boutons de réservation du **header** (`layout.tsx`),
- dans tous les **CTA** via `CTAButtons.tsx`,
- dans les sections “Réserver une table”.

> ✅ Pour changer le canal de réservation, il suffit de modifier `whatsapp` ou `bookingUrl` dans `data/just-relax.json`.  
> ✅ Pour changer l’ordre de priorité (WhatsApp vs booking), on adapte uniquement `src/lib/reservation.ts`.

---

## 3. SEO : titres et descriptions par page

### 3.1. SEO global du site

**Fichier :** `data/just-relax.json`, bloc `seo` :

```jsonc
"seo": {
  "title": "Just Relax – Restaurant & Lounge à Pantin",
  "description": "Restaurant & lounge à Pantin avec terrasse privée, chicha, cocktails et ambiance conviviale...",
  "keywords": [
    "Just Relax",
    "restaurant Pantin",
    "lounge Pantin",
    "chicha Pantin",
    "terrasse privée",
    "cocktails"
  ]
}
```

Utilisé dans :

- `src/app/layout.tsx` via `metadata` (Next.js),
- `openGraph`, JSON-LD Restaurant, sitemap, etc.

### 3.2. SEO spécifique par page

**Fichier :** `src/lib/page-seo.ts`

Contient les `Metadata` pour chaque page importante :

```ts
export const pageSeo = {
  menu: {
    title: `Carte & menus – Just Relax à Pantin`,
    description: "Découvrez la carte Just Menu, Just Boisson et Just Chicha...",
  },
  galerie: {
    title: "Galerie photos – Just Relax",
    description: "Ambiance, terrasse, lounge, chicha et cocktails...",
  },
  accesHoraires: {
    title: "Accès & horaires – Just Relax à Pantin",
    description: "Adresse, plan d’accès, horaires d’ouverture...",
  },
  contact: {
    title: "Contact & réservation – Just Relax",
    description: "Contactez Just Relax à Pantin pour une réservation...",
  },
  mentionsLegales: {
    title: "Mentions légales – Just Relax",
    description: "Mentions légales et informations réglementaires...",
  },
};
```

Chaque page importe et expose son `metadata` :

- `src/app/menu/page.tsx` → `export const metadata = pageSeo.menu;`
- `src/app/galerie/page.tsx` → `metadata = pageSeo.galerie;`
- `src/app/acces-horaires/page.tsx` → `metadata = pageSeo.accesHoraires;`
- `src/app/contact/page.tsx` → `metadata = pageSeo.contact;`
- `src/app/mentions-legales/page.tsx` → `metadata = pageSeo.mentionsLegales;`

> ✅ Pour ajuster les titres et descriptions SEO par page, on modifie uniquement `src/lib/page-seo.ts`.

---

## 4. Contenu éditorial de la page d’accueil

La home est composée en grande partie de contenus éditoriaux faciles à modifier.

### 4.1. Hero / textes généraux

- Structure : `src/components/HomePage.tsx` + `src/components/HeroImmersif.tsx` + `src/components/ImmersiveIntro.tsx`
- Données utilisées : `justRelaxData` (nom, tagline, description, services, images)

La plupart des textes du hero sont générés à partir de `data/site-config.ts` / `data/just-relax.json`.  
Pour changer la “phrase marketing” principale, on modifie `siteConfig.description` dans `data/site-config.ts`.

### 4.2. Expérience d’entrée immersive

- L’écran d’intro plein écran est géré par `src/components/ImmersiveIntro.tsx`.
- Le hero principal (pétales, parallaxe légère, CTA) est géré par `src/components/HeroImmersif.tsx`.
- La page d’accueil orchestre le tout via `src/components/HomePage.tsx` et se contente d’être montée dans `src/app/page.tsx`.

> ✅ Pour ajuster les textes clés de l’intro ou du hero, modifier les chaînes présentes dans `ImmersiveIntro.tsx` / `HeroImmersif.tsx`, en cohérence avec `data/site-config.ts`.

---

## 5. Contenu éditorial de la page /menu

**Fichiers :**  
- `src/lib/menu-content.ts` – carte digitale actuellement utilisée sur `/menu`.  
- `data/menu.json` – structure JSON prévue pour accueillir votre carte définitive (catégories & items), avec des placeholders prêts à être remplacés.

Utilisation actuelle dans `src/app/menu/page.tsx` :

```ts
import { digitalMenuCategories } from "@/lib/menu-content";

{digitalMenuCategories.map((category) => (
  <MenuItemCard ... />
))}
```

> ✅ Pour adapter rapidement la carte digitale (texte & prix), vous pouvez modifier `menu-content.ts`.  
> ✅ Pour une approche 100% data-driven, vous pouvez à terme basculer la source de `digitalMenuCategories` sur `data/menu.json`.

Pour le reste :

- Les menus officiels PDF sont définis dans `data/just-relax.json` → `menus[].pdfUrl`.
- La page `/menu` les affiche automatiquement via `justRelaxData.menus`.

---

## 6. Pages de contenu (galerie, accès, contact, mentions légales, données)

Les pages :

- `/galerie` → `src/app/galerie/page.tsx` (grille + lightbox).
- `/acces-horaires` → `src/app/acces-horaires/page.tsx`
- `/contact` → `src/app/contact/page.tsx` (formulaire connecté à `/api/contact` + carte).
- `/reservation` → `src/app/reservation/page.tsx` (CTA appel/e-mail + placeholder widget).
- `/mentions-legales` → `src/app/mentions-legales/page.tsx`
- `/protection-des-donnees` → `src/app/protection-des-donnees/page.tsx`

suivent toutes la même logique :

- Structure : composant `Section` pour l’encadré.
- Données “dynamiques” (adresse, horaires, etc.) : `justRelaxData`.
- Textes libres : directement dans le JSX, faciles à éditer (1–3 paragraphes).

Les mentions légales utilisent aussi `justRelaxData.legal` pour les infos société.
La page “Protection des données” s’appuie sur les mêmes données (adresse, raison sociale) pour décrire la politique de confidentialité.

> ✅ Pour changer un texte de présentation (ex. paragraphe d’intro de la galerie ou du contact), on édite directement le JSX de la page concernée.  
> ✅ Pour changer une info légale (raison sociale, SIRET, etc.), on modifie uniquement `data/just-relax.json`.

---

## 7. Composants clés

Les composants principaux sont dans `src/components/` :

- `HomePage.tsx` – orchestration de l’expérience d’accueil (intro immersive + sections).
- `ImmersiveIntro.tsx` – écran d’entrée plein écran (Framer Motion).
- `HeroImmersif.tsx` – hero premium avec parallaxe légère et pétales de cerisier.
- `PetalsCanvas.tsx` – Canvas 2D custom pour les pétales (hero uniquement, low-power aware).
- `StickyHeader.tsx` – header sticky qui apparaît après ~25% de scroll.
- `Section.tsx` – wrapper pour les sections (titre, eyebrow, CTA).
- `CTAButtons.tsx` – boutons Appeler / Réserver / Itinéraire / Menu.
- `DeliveryPlatforms.tsx` – section Deliveroo / Uber Eats.
- `ServicesBadges.tsx` – liste des services en badges.
- `PaymentsBadges.tsx` – moyens de paiement en badges.
- `HoursSection.tsx` – section horaires & informations pratiques.
- `MapSection.tsx` – section carte / localisation.
- `OpeningHours.tsx` – rendu des horaires à partir de `openingHours`.
- `GalleryLightbox.tsx` – galerie avec lightbox.
- `GalleryGrid.tsx` – grille de photos à partir de `gallery`.
- `MenuItemCard.tsx` – rendu d’un plat/entrée/dessert.
- `MapEmbed.tsx` – intégration de la carte Google.
- `SocialLinks.tsx` – rendu des liens sociaux (Facebook, Instagram, TikTok) en mode **préproduction** ou **production**.

> ✅ Modifier ces composants change **le design global**.  
> ✅ Modifier les fichiers `lib/` change plutôt **le contenu et la logique métier**.

---

## 8. Réseaux sociaux (Instagram & co.)

**Données :** `social` dans `data/just-relax.json` :

```jsonc
"social": {
  "facebook": "",
  "instagram": "",
  "tiktok": ""
}
```

**Composant :** `src/components/SocialLinks.tsx`, utilisé dans le footer (`layout.tsx`) :

- En **mode préproduction** (`<SocialLinks social={justRelaxData.social} demo />`) :
  - Affiche des pastilles “Instagram”, “Facebook”, “TikTok” non cliquables tant que les URLs sont vides.
  - Un texte indique que les liens officiels seront ajoutés plus tard.
- En **mode production** (si `demo` est `false`) :
  - Affiche uniquement les réseaux dont l’URL est renseignée.
  - Chaque pastille est cliquable et ouvre le réseau social correspondant dans un nouvel onglet.

> ✅ Pour activer les vrais liens, il suffit de remplir les champs dans `data/just-relax.json` (`social.instagram`, etc.).  
> ✅ Le JSON-LD ne déclarera ces liens (`sameAs`) que s’ils ne sont pas vides.

---

## 9. Variables d’environnement

**Fichier :** `src/lib/seo.ts`

```ts
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const defaultLocale = "fr-FR";
```

En production, il faut définir :

```bash
NEXT_PUBLIC_SITE_URL="https://ton-domaine-ou-url-preview.com"
```

pour que :

- les liens du sitemap,
- les tags OpenGraph,
- le JSON-LD schema.org “Restaurant”

pointent vers la bonne URL.

---

## 9. En résumé

- **Données métier & coordonnées** → `data/just-relax.json`
- **Canal de réservation & libellés CTA** → `data/just-relax.json` + `src/lib/reservation.ts`
- **SEO global** → `data/just-relax.json` (`seo`)
- **SEO par page** → `src/lib/page-seo.ts`
- **Home – menu du moment & avis** → `src/lib/home-content.ts`
- **Menu – carte digitale** → `src/lib/menu-content.ts`
- **Textes de pages** → fichiers `src/app/.../page.tsx`

Avec cette organisation, tu peux faire évoluer le site (texte, SEO, réservation) rapidement, sans devoir refactorer tout le code React à chaque fois.
