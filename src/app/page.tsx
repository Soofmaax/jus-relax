import Hero from "@/components/Hero";
import OpeningHours from "@/components/OpeningHours";
import GalleryGrid from "@/components/GalleryGrid";
import CTAButtons from "@/components/CTAButtons";
import Section from "@/components/Section";
import { justRelaxData } from "@/lib/just-relax-data";
import {
  menuDuMomentItems,
  avisClientsExemples,
} from "@/lib/home-content";

export default function Home() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-16 pb-16 pt-6 sm:pb-24 sm:pt-4">
      <Hero data={justRelaxData} />

      <div className="rounded-full border border-amber-300/25 bg-gradient-to-r from-amber-400/20 via-amber-300/10 to-transparent px-4 py-2 text-center text-[11px] text-amber-100 shadow-sm shadow-black/40">
        Événements privés, anniversaires &amp; afterworks sur demande.{" "}
        <a
          href="/evenements"
          className="font-semibold underline-offset-2 hover:underline"
        >
          Découvrir nos offres événements
        </a>
        .
      </div>

      <Section
        id="menu-du-moment"
        title="Menu du moment"
        eyebrow="Suggestions à découvrir dès maintenant"
        background="subtle"
        cta={{
          label: "Voir tout le menu",
          href: "/menu",
        }}
      >
        <div className="grid gap-6 md:grid-cols-3">
          {menuDuMomentItems.map((item) => (
            <div
              key={item.name}
              className="flex flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 via-white/5 to-transparent p-5 shadow-lg shadow-black/40"
            >
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  {item.name}
                </h3>
                <p className="mt-2 text-sm text-slate-200/90">
                  {item.description}
                </p>
              </div>
              <p className="mt-4 text-sm font-semibold text-amber-300">
                {item.price}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="highlights"
        title="Un lieu pensé pour se détendre"
        eyebrow="Just Relax – Restaurant & Lounge"
      >
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-5 shadow-lg shadow-black/40">
            <h3 className="text-sm font-semibold text-amber-300">
              Cuisine &amp; cocktails
            </h3>
            <p className="mt-2 text-sm text-slate-100">
              Cuisine généreuse et cocktails signatures, servis dans une
              atmosphère chaleureuse. Idéal pour les déjeuners, dîners et
              afterworks.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-5 shadow-lg shadow-black/40">
            <h3 className="text-sm font-semibold text-amber-300">
              Terrasse &amp; lounge
            </h3>
            <p className="mt-2 text-sm text-slate-100">
              Terrasse conviviale et espace lounge intimiste, parfaits pour
              profiter de la chicha et des cocktails jusqu&apos;à 2h du matin.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-5 shadow-lg shadow-black/40">
            <h3 className="text-sm font-semibold text-amber-300">
              Services premium
            </h3>
            <p className="mt-2 text-sm text-slate-100">
              Accès PMR, Wi-Fi, climatisation et accueil d&apos;événements
              privés : tout est pensé pour votre confort, 7j/7.
            </p>
          </div>
        </div>
      </Section>

      <Section
        id="menu"
        title="Notre carte au Just Relax"
        eyebrow="Just Menu, Just Boisson, Just Chicha"
        background="subtle"
        cta={{
          label: "Voir la carte complète",
          href: "/menu",
        }}
      >
        <div className="grid gap-6 md:grid-cols-3">
          {justRelaxData.menus.map((menu) => (
            <div
              key={menu.id}
              className="flex flex-col justify-between rounded-3xl border border-white/10 bg-black/40 p-5 shadow-lg shadow-black/40"
            >
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  {menu.name}
                </h3>
                {menu.description && (
                  <p className="mt-2 text-sm text-slate-200/90">
                    {menu.description}
                  </p>
                )}
              </div>
              <div className="mt-4 flex flex-wrap gap-3 text-xs">
                {menu.pdfUrl && (
                  <a
                    href={menu.pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full bg-amber-400 px-3 py-1.5 font-semibold text-slate-900 shadow-sm ring-1 ring-amber-300/70 transition hover:bg-amber-300 hover:ring-amber-200"
                  >
                    Ouvrir le menu PDF
                  </a>
                )}
                <a
                  href="/menu"
                  className="inline-flex items-center rounded-full border border-white/20 px-3 py-1.5 font-medium text-slate-100/90 transition hover:border-amber-300/80 hover:text-amber-200"
                >
                  Voir en détail
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {justRelaxData.delivery.deliveroo || justRelaxData.delivery.uberEats ? (
        <Section
          id="livraison"
          title="Commander en livraison"
          eyebrow="Nous sommes sur Deliveroo et Uber Eats"
          background="subtle"
        >
          <div className="grid gap-6 md:grid-cols-2">
            {justRelaxData.delivery.deliveroo && (
              <div className="rounded-3xl border border-white/10 bg-black/40 p-5 shadow-lg shadow-black/40">
                <h3 className="text-sm font-semibold text-slate-50">
                  Nous sommes sur Deliveroo !
                </h3>
                <p className="mt-2 text-sm text-slate-200/90">
                  Passez vos commandes sur Deliveroo et profitez de vos plats
                  Just Relax à domicile ou au bureau.
                </p>
                <a
                  href={justRelaxData.delivery.deliveroo}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center rounded-full bg-amber-400 px-4 py-2 text-xs font-semibold text-slate-950 shadow-sm ring-1 ring-amber-300/70 transition hover:bg-amber-300 hover:ring-amber-200"
                >
                  Commander sur Deliveroo
                </a>
              </div>
            )}
            {justRelaxData.delivery.uberEats && (
              <div className="rounded-3xl border border-white/10 bg-black/40 p-5 shadow-lg shadow-black/40">
                <h3 className="text-sm font-semibold text-slate-50">
                  Nous sommes sur Uber Eats !
                </h3>
                <p className="mt-2 text-sm text-slate-200/90">
                  Passez vos commandes sur Uber Eats pour retrouver les plats
                  Just Relax chez vous, 7j/7.
                </p>
                <a
                  href={justRelaxData.delivery.uberEats}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center rounded-full bg-amber-400 px-4 py-2 text-xs font-semibold text-slate-950 shadow-sm ring-1 ring-amber-300/70 transition hover:bg-amber-300 hover:ring-amber-200"
                >
                  Commander sur Uber Eats
                </a>
              </div>
            )}
          </div>
        </Section>
      ) : null}

      <Section
        id="reviews"
        title="Ils ont passé une excellente soirée"
        eyebrow="Avis clients – exemple de rendu"
        background="subtle"
        cta={{
          label: "Laisser un avis Google",
          href:
            justRelaxData.contact.googleReviewUrl ||
            justRelaxData.contact.address.mapUrl,
        }}
      >
        <div className="grid gap-6 md:grid-cols-3">
          {avisClientsExemples.map((review) => (
            <figure
              key={review.name}
              className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-black/40 p-5 shadow-lg shadow-black/40"
            >
              <div>
                <div className="flex items-center gap-1 text-[11px] text-amber-300">
                  <span>★★★★★</span>
                  <span className="text-slate-300">· {review.source}</span>
                </div>
                <blockquote className="mt-3 text-sm text-slate-100">
                  “{review.text}”
                </blockquote>
              </div>
              <figcaption className="mt-4 text-xs font-medium text-slate-300">
                {review.name}
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-4 text-[11px] text-slate-400">
          Les avis présentés ci-dessus sont fournis à titre d&apos;exemple de
          mise en forme. Les avis réels apparaîtront une fois le site en ligne
          et relié à votre fiche Google.
        </p>
      </Section>

      <Section
        id="hours"
        title="Horaires &amp; informations pratiques"
        eyebrow="Accès &amp; horaires du restaurant à Pantin"
        background="subtle"
      >
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr),minmax(0,1fr)]">
          <OpeningHours ranges={justRelaxData.openingHours} />
          <div className="space-y-3 text-sm text-slate-100/90">
            <p className="font-semibold text-slate-50">
              {justRelaxData.contact.address.line1}
              <br />
              {justRelaxData.contact.address.postalCode}{" "}
              {justRelaxData.contact.address.city}
            </p>
            <p>
              {justRelaxData.description ||
                "Restaurant & lounge à Pantin avec terrasse privée, chicha et cocktails."}
            </p>
            <CTAButtons data={justRelaxData} layout="stacked" />
          </div>
        </div>
      </Section>

      <Section
        id="services"
        title="Nos services &amp; moyens de paiement"
        eyebrow="Sur place, à emporter &amp; événements"
        background="subtle"
      >
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold text-amber-300">
              Nos services
            </h3>
            <ul className="mt-3 space-y-1.5 text-sm text-slate-100/90">
              {justRelaxData.services.map((service) => (
                <li key={service}>• {service}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-amber-300">
              Moyens de paiement disponibles
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2 text-xs text-slate-100/90">
              {justRelaxData.paymentMethods.map((method) => (
                <li
                  key={method}
                  className="rounded-full border border-white/15 bg-black/40 px-3 py-1"
                >
                  {method}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section
        id="gallery"
        title="Ambiance &amp; atmosphère"
        eyebrow="Galerie"
        cta={{
          label: "Voir toutes les photos",
          href: "/galerie",
        }}
      >
        <GalleryGrid
          gallery={justRelaxData.gallery}
          limit={9}
          showOverlay={true}
        />
      </Section>
    </div>
  );
}
