import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { justRelaxData } from "@/lib/just-relax-data";
import { SITE_URL, defaultLocale } from "@/lib/seo";
import { getReservationInfo } from "@/lib/reservation";
import SocialLinks from "@/components/SocialLinks";
import StickyHeader from "@/components/StickyHeader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-just-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: justRelaxData.seo.title,
    template: "%s | Just Relax",
  },
  description: justRelaxData.seo.description,
  keywords: justRelaxData.seo.keywords,
  openGraph: {
    title: justRelaxData.seo.title,
    description: justRelaxData.seo.description,
    url: "/",
    siteName: justRelaxData.name,
    locale: defaultLocale,
    type: "website",
    images: justRelaxData.heroImage
      ? [
          {
            url: justRelaxData.heroImage,
            width: 1600,
            height: 900,
            alt: justRelaxData.seo.title,
          },
        ]
      : [],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const phoneHref = justRelaxData.contact.phoneMain
    ? `tel:${justRelaxData.contact.phoneMain.replace(/\s+/g, "")}`
    : "#";

  const mapHref = justRelaxData.contact.address.mapUrl || "#";

  const reservation = getReservationInfo(justRelaxData.contact);

  const openingHoursForSchema = justRelaxData.openingHours
    .map((range) => {
      const text = range.days.toLowerCase();
      let prefix = "Mo-Su";

      if (text.includes("lundi") && text.includes("vendredi")) {
        prefix = "Mo-Fr";
      } else if (text.includes("samedi") && text.includes("dimanche")) {
        prefix = "Sa-Su";
      }

      const slot = range.slots[0];
      if (!slot) {
        return undefined;
      }

      return `${prefix} ${slot.from}-${slot.to}`;
    })
    .filter((v): v is string => Boolean(v));

  const openingHoursSpecification = justRelaxData.openingHours.flatMap(
    (range) => {
      const text = range.days.toLowerCase();
      const slot = range.slots[0];
      if (!slot) {
        return [];
      }

      const days: string[] = [];

      if (text.includes("lundi") && text.includes("vendredi")) {
        days.push("Monday", "Tuesday", "Wednesday", "Thursday", "Friday");
      } else if (text.includes("samedi") && text.includes("dimanche")) {
        days.push("Saturday", "Sunday");
      } else {
        if (text.includes("lundi")) days.push("Monday");
        if (text.includes("mardi")) days.push("Tuesday");
        if (text.includes("mercredi")) days.push("Wednesday");
        if (text.includes("jeudi")) days.push("Thursday");
        if (text.includes("vendredi")) days.push("Friday");
        if (text.includes("samedi")) days.push("Saturday");
        if (text.includes("dimanche")) days.push("Sunday");
      }

      return days.map((day) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: `https://schema.org/${day}`,
        opens: slot.from,
        closes: slot.to,
      }));
    }
  );

  const socialLinks = Object.values(justRelaxData.social).filter(
    (value): value is string => Boolean(value && value.trim().length > 0)
  );

  const menuUrls = [
    `${SITE_URL}/menu`,
    ...justRelaxData.menus
      .filter((menu) => !!menu.pdfUrl)
      .map((menu) => menu.pdfUrl as string),
  ];

  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${SITE_URL}/#restaurant`,
    name: justRelaxData.name,
    description: justRelaxData.description,
    url: SITE_URL,
    telephone: justRelaxData.contact.phoneMain,
    image: justRelaxData.heroImage || undefined,
    address: {
      "@type": "PostalAddress",
      streetAddress: justRelaxData.contact.address.line1,
      postalCode: justRelaxData.contact.address.postalCode,
      addressLocality: justRelaxData.contact.address.city,
      addressRegion: "Île-de-France",
      addressCountry: justRelaxData.contact.address.country,
    },
    openingHours: openingHoursForSchema,
    openingHoursSpecification,
    priceRange: "€€",
    servesCuisine: [
      "Cuisine variée",
      "Cuisine halal",
      "Burgers",
      "Tapas",
    ],
    acceptsReservations: true,
    hasMap: justRelaxData.contact.address.mapUrl || undefined,
    areaServed: {
      "@type": "City",
      name: justRelaxData.contact.address.city,
    },
    sameAs: socialLinks.length > 0 ? socialLinks : undefined,
    hasMenu: menuUrls,
  };

  const { latitude, longitude } = justRelaxData.contact.address;

  if (latitude && longitude) {
    (jsonLd as Record<string, unknown>).geo = {
      "@type": "GeoCoordinates",
      latitude,
      longitude,
    };
  }

  if (justRelaxData.contact.phoneMain) {
    (jsonLd as Record<string, unknown>).contactPoint = [
      {
        "@type": "ContactPoint",
        telephone: justRelaxData.contact.phoneMain,
        contactType: "reservations",
        areaServed: "FR",
        availableLanguage: [defaultLocale],
      },
    ];
  }

  const websiteJsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: justRelaxData.name,
    inLanguage: defaultLocale,
  };

  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased bg-[#faf8f3] text-[#2d2416]`}
      >
        <a href="#main-content" className="skip-link">
          Passer au contenu principal
        </a>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#faf8f3] via-[#f5ede3] to-[#eae1d5]">
          <StickyHeader />
          <main
            id="main-content"
            className="flex-1 px-2 py-4 sm:px-4 sm:py-6"
          >
            {children}
          </main>
          <footer className="border-t border-[#d4c5b0] bg-[#2d2416]">
            <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:flex-row sm:justify-between sm:px-6">
              <div>
                <p className="text-sm font-semibold text-slate-100">
                  {justRelaxData.name}
                </p>
                <p className="mt-1 text-xs text-slate-300">
                  {justRelaxData.contact.address.line1}
                  <br />
                  {justRelaxData.contact.address.postalCode}{" "}
                  {justRelaxData.contact.address.city}
                </p>
                <div className="mt-2 flex flex-wrap gap-3 text-xs text-slate-300">
                  {justRelaxData.contact.phoneMain && (
                    <a
                      href={phoneHref}
                      className="underline-offset-2 hover:underline"
                    >
                      Tél : {justRelaxData.contact.phoneMain}
                    </a>
                  )}
                  {justRelaxData.contact.email && (
                    <a
                      href={`mailto:${justRelaxData.contact.email}`}
                      className="underline-offset-2 hover:underline"
                    >
                      {justRelaxData.contact.email}
                    </a>
                  )}
                  {mapHref !== "#" && (
                    <a
                      href={mapHref}
                      target="_blank"
                      rel="noreferrer"
                      className="underline-offset-2 hover:underline"
                    >
                      Itinéraire
                    </a>
                  )}
                </div>
                {justRelaxData.openingHours.length > 0 && (
                  <div className="mt-4 text-xs text-slate-300">
                    <p className="font-semibold text-slate-100">Horaires</p>
                    {justRelaxData.openingHours.slice(0, 2).map((range) => (
                      <p key={range.days}>
                        <span className="font-medium text-slate-50">
                          {range.days}
                        </span>
                        {" · "}
                        {range.slots
                          .map((slot) => `${slot.from}–${slot.to}`)
                          .join(", ")}
                      </p>
                    ))}
                  </div>
                )}
                {socialLinks.length > 0 && (
                  <SocialLinks social={justRelaxData.social} />
                )}
              </div>
              <div className="flex flex-col gap-2 text-xs text-slate-400 sm:text-right">
                <p>
                  &copy; {new Date().getFullYear()} {justRelaxData.name}. Tous
                  droits réservés.
                </p>
                {justRelaxData.legal.companyName && (
                  <p>
                    Raison sociale : {justRelaxData.legal.companyName} – N°
                    d&apos;enregistrement{" "}
                    {justRelaxData.legal.registrationNumber}
                  </p>
                )}
                <div className="flex flex-wrap gap-3 text-xs text-slate-400 sm:justify-end">
                  <Link
                    href="/mentions-legales"
                    className="underline-offset-2 hover:underline"
                  >
                    Mentions légales
                  </Link>
                </div>
                <p className="text-[11px] text-slate-500">
                  Site vitrine recréé sur mesure avec Next.js, TypeScript &amp;
                  Tailwind CSS.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
