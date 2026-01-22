import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { justRelaxData } from "@/lib/just-relax-data";
import { SITE_URL, defaultLocale } from "@/lib/seo";
import { getReservationInfo } from "@/lib/reservation";
import SocialLinks from "@/components/SocialLinks";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
  alternates: {
    canonical: "/",
    languages: {
      "fr-FR": "/",
      fr: "/",
    },
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
      addressCountry: justRelaxData.contact.address.country,
    },
    openingHours: openingHoursForSchema,
    priceRange: "€€",
    servesCuisine: [
      "Cuisine variée",
      "Burgers",
      "Tapas",
    ],
    acceptsReservations: true,
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

  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-50`}
      >
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
          <header className="sticky top-0 z-30 border-b border-white/10 bg-black/60/90 backdrop-blur-xl">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
              <Link href="/" className="flex items-baseline gap-2">
                <span className="text-base font-semibold tracking-tight uppercase text-amber-400 sm:text-lg">
                  {justRelaxData.name}
                </span>
                <span className="hidden text-xs text-slate-300 sm:inline">
                  {justRelaxData.tagline}
                </span>
              </Link>
              <nav
                aria-label="Navigation principale"
                className="flex items-center gap-3 text-xs font-medium sm:gap-5 sm:text-sm"
              >
                <Link
                  href="/menu"
                  className="text-slate-200 transition-colors hover:text-amber-300"
                >
                  Notre menu
                </Link>
                <Link
                  href="/menu#reserve"
                  className="hidden text-slate-200 transition-colors hover:text-amber-300 sm:inline"
                >
                  Faire une réservation
                </Link>
                <Link
                  href="/galerie"
                  className="text-slate-200 transition-colors hover:text-amber-300"
                >
                  Galerie
                </Link>
                <Link
                  href="/evenements"
                  className="hidden text-slate-200 transition-colors hover:text-amber-300 sm:inline"
                >
                  Événements
                </Link>
                <Link
                  href="/acces-horaires"
                  className="hidden text-slate-200 transition-colors hover:text-amber-300 sm:inline"
                >
                  Accès &amp; horaires
                </Link>
                <Link
                  href="/contact"
                  className="hidden text-slate-200 transition-colors hover:text-amber-300 sm:inline"
                >
                  Nous contacter
                </Link>
                <div className="flex items-center gap-2">
                  <a
                    href={reservation.href}
                    target={reservation.target}
                    rel={reservation.rel}
                    className="hidden rounded-full bg-amber-400 px-3 py-1.5 text-xs font-semibold text-slate-950 shadow-sm ring-1 ring-amber-300/70 transition hover:bg-amber-300 hover:ring-amber-200 sm:inline-flex sm:px-4 sm:text-sm"
                  >
                    {reservation.label}
                  </a>
                  <a
                    href={phoneHref}
                    className="inline-flex rounded-full border border-white/30 px-3 py-1.5 text-[11px] font-semibold text-slate-100 shadow-sm transition hover:border-amber-300/80 hover:text-amber-200 sm:px-4 sm:text-xs"
                  >
                    Appeler
                  </a>
                </div>
              </nav>
            </div>
          </header>
          <main className="flex-1 px-2 py-4 sm:px-4 sm:py-6">
            {children}
          </main>
          <footer className="border-t border-white/10 bg-black/70">
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
                <SocialLinks social={justRelaxData.social} demo />
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
