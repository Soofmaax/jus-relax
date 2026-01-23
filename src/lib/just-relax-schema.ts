export interface Address {
  line1: string;
  postalCode: string;
  city: string;
  country: string;
  mapUrl: string;
  /**
   * Coordonnées GPS optionnelles pour un référencement local enrichi (schema.org).
   * À renseigner uniquement si elles sont connues avec précision.
   */
  latitude?: number;
  longitude?: number;
}

export interface Contact {
  phoneMain: string;
  phoneAlt?: string;
  whatsapp?: string;
  email: string;
  emailAlt?: string;
  /**
   * Lien direct vers la page d'avis Google (éventuellement spécifique à l'établissement).
   * Si non renseigné, le site utilisera l'URL Google Maps comme fallback.
   */
  googleReviewUrl?: string;
  /**
   * URL de réservation en ligne (TheFork, Eatbu, outil interne, etc.).
   * Si renseigné, peut être utilisée à la place du téléphone.
   */
  bookingUrl?: string;
  address: Address;
}

export interface OpeningHourSlot {
  from: string;
  to: string;
  label?: string;
}

export interface OpeningHourRange {
  days: string;
  slots: OpeningHourSlot[];
}

export interface GalleryImage {
  url: string;
  alt: string;
}

export interface GalleryGroup {
  id: string;
  title: string;
  images: GalleryImage[];
}

export interface MenuItem {
  name: string;
  description?: string;
  price?: string;
  isPlaceholder?: boolean;
  /**
   * Permet de mettre en avant certains éléments (infos, avertissements, etc.)
   * dans la carte digitale.
   */
  isHighlight?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  description?: string;
  items: MenuItem[];
}

export interface Menu {
  id: string;
  name: string;
  description?: string;
  pdfUrl?: string;
  categories: MenuCategory[];
}

export interface DeliveryLink {
  label: string;
  url: string;
}

export interface LegalInfo {
  companyName?: string;
  firstName?: string;
  lastName?: string;
  registrationType?: string;
  registrationNumber?: string;
  localTaxNumber?: string;
  shareCapital?: string;
  phone?: string;
  email?: string;
  addressLine1?: string;
  postalCode?: string;
  city?: string;
  country?: string;
}

export interface SeoConfig {
  title: string;
  description: string;
  keywords: string[];
}

export interface JustRelaxData {
  name: string;
  tagline: string;
  description: string;
  heroImage?: string;
  contact: Contact;
  openingHours: OpeningHourRange[];
  services: string[];
  paymentMethods: string[];
  menus: Menu[];
  gallery: GalleryGroup[];
  delivery: {
    deliveroo?: string;
    uberEats?: string;
    others?: DeliveryLink[];
  };
  social: {
    facebook?: string;
    instagram?: string;
    tiktok?: string;
  };
  legal: LegalInfo;
  seo: SeoConfig;
}