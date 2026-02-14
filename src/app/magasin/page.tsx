import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Magasin Optique Queuleu Metz | Opticien à Queuleu | Examen de Vue Gratuit",
  description:
    "Opticien à Metz Queuleu : examen de vue gratuit, lunettes de vue, lentilles de contact, verres fabriqués en France. RDV jusqu'à 22h. Parking privé gratuit. 28 Rue de Queuleu, 57070 Metz.",
  keywords: [
    "opticien Metz",
    "opticien Queuleu",
    "magasin optique Metz",
    "examen de vue gratuit Metz",
    "lunettes Metz",
    "lentilles de contact Metz",
    "verres fabriqués en France",
    "opticien frontaliers",
    "parking privé opticien",
  ],
  openGraph: {
    title: "Magasin Optique Queuleu Metz | Opticien à Queuleu",
    description:
      "Votre opticien à Metz Queuleu : examen de vue gratuit, lunettes, lentilles, verres français. RDV jusqu'à 22h. Parking privé.",
    url: "https://www.optiquequeuleu.com/magasin",
    siteName: "Optique Queuleu",
    images: [
      {
        url: "/images/boutique/facade.webp",
        width: 1200,
        height: 630,
        alt: "Façade du magasin Optique Queuleu à Metz",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Magasin Optique Queuleu Metz | Opticien à Queuleu",
    description:
      "Votre opticien à Metz Queuleu : examen de vue gratuit, lunettes, lentilles, verres français. RDV jusqu'à 22h.",
    images: ["/images/boutique/facade.webp"],
  },
};

const avantages = [
  "Examen de vue gratuit",
  "Opticien à domicile",
  "Conseils personnalisés",
  "Prise de rendez-vous adaptée aux travailleurs frontaliers",
  "Paiements en 3 fois sans frais !",
  "Tiers payant : simplifiez vos démarches administratives !",
  "Partenaires mutuelles",
  "Équipement de sport",
  "Verres fabriqués en France",
  "Produits certifiés",
  "Garantie adaptation",
];

export default function MagasinPage() {
  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Optician",
            name: "Optique Queuleu",
            image: "https://www.optiquequeuleu.com/images/boutique/facade.webp",
            address: {
              "@type": "PostalAddress",
              streetAddress: "28 Rue de Queuleu",
              addressLocality: "Metz",
              postalCode: "57070",
              addressCountry: "FR",
            },
            telephone: "+33387373036",
            openingHours: [
              "Mo 14:00-19:00",
              "Tu-Fr 09:00-12:00,14:00-19:00",
              "Sa 09:00-12:00,14:00-18:00",
            ],
            geo: {
              "@type": "GeoCoordinates",
              latitude: 49.0953,
              longitude: 6.1977,
            },
            url: "https://www.optiquequeuleu.com",
            priceRange: "€€",
            hasMap: "https://www.google.com/maps/place/Optique+Queuleu",
            amenityFeature: [
              {
                "@type": "LocationFeatureSpecification",
                name: "Parking privé gratuit",
                value: true,
              },
              {
                "@type": "LocationFeatureSpecification",
                name: "Examen de vue gratuit",
                value: true,
              },
            ],
          }),
        }}
      />

      {/* Hero Banner */}
      <section className="relative flex h-64 items-center pt-20 sm:h-80" aria-label="Bannière d'accueil magasin">
        <Image
          src="/images/boutique/facade.webp"
          alt="Façade du magasin Optique Queuleu situé 28 Rue de Queuleu à Metz, opticien spécialiste lunettes et lentilles"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h1 className="text-4xl font-bold uppercase tracking-[0.15em] text-white sm:text-5xl">
            Magasin Optique Queuleu à Metz
          </h1>
          <nav className="mt-4 text-sm text-white/70" aria-label="Fil d'Ariane">
            <Link href="/" className="hover:text-white">
              Accueil
            </Link>
            <span className="mx-2" aria-hidden="true">&gt;</span>
            <span className="text-white">Magasin</span>
          </nav>
        </div>
      </section>

      {/* Presentation */}
      <section className="bg-white py-24" aria-labelledby="presentation-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-start gap-16 lg:grid-cols-2">
            <ScrollReveal className="reveal-left">
              <h2 id="presentation-heading" className="text-sm font-semibold uppercase tracking-widest text-accent">
                Vos spécialistes vous conseillent
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Découvrez Optique Queuleu, votre adresse incontournable pour
                tous vos besoins en matière de vision. Implantés au
                c&oelig;ur d&apos;un quartier dynamique de Metz, nous sommes fiers de
                vous offrir une expérience optique exceptionnelle.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Que vous cherchiez des <Link href="/marques" className="text-primary hover:underline">lunettes de vue</Link>, des <Link href="/lentilles" className="text-primary hover:underline">lentilles de
                contact</Link>, ou des lunettes de soleil tendance, notre équipe
                expérimentée est là pour vous guider à chaque étape. Nous
                mettons l&apos;accent sur le service personnalisé et la
                satisfaction du client, en combinant expertise technique avec une
                sélection diversifiée de montures de créateurs et de
                technologies de correction visuelle de pointe.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Explorez notre gamme de <Link href="/verres" className="text-primary hover:underline">verres fabriqués en France</Link> en ligne ou rendez-nous visite
                en magasin pour une expérience optique sur mesure. Bénéficiez de
                notre prise de rendez-vous simple et rapide, directement sur
                Doctolib. Choisissez un motif de consultation, une date, un
                horaire, et le tour est joué !
              </p>
              <p className="mt-4 font-semibold text-primary">
                Vous êtes frontalier ou travaillez tard le soir ? Nous nous
                adaptons à votre emploi du temps chargé en vous proposant des
                rendez-vous jusqu&apos;à 22h !
              </p>
            </ScrollReveal>
            <ScrollReveal className="reveal-right">
              <div className="grid grid-cols-2 gap-4" role="img" aria-label="Galerie photos du magasin Optique Queuleu">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src="/images/boutique/magasin.webp"
                    alt="Espace d'accueil du magasin Optique Queuleu à Metz avec présentation des montures"
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src="/images/boutique/interieur-2.webp"
                    alt="Intérieur moderne et chaleureux du magasin opticien Optique Queuleu"
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src="/images/boutique/interieur-3.webp"
                    alt="Espace de conseil personnalisé avec opticien diplômé chez Optique Queuleu Metz"
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src="/images/boutique/choix.webp"
                    alt="Large choix de montures de lunettes et marques disponibles chez Optique Queuleu"
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services & Avantages */}
      <section className="bg-muted py-24" aria-labelledby="avantages-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-accent">
                Des services optiques sur mesure !
              </h3>
              <SectionTitle id="avantages-heading">Les avantages Optique Queuleu</SectionTitle>
            </div>
          </ScrollReveal>

          <ScrollReveal className="stagger-children">
            <ul className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-label="Liste des avantages du magasin">
              {avantages.map((avantage) => (
                <li
                  key={avantage}
                  className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-5"
                >
                  <svg
                    className="h-5 w-5 shrink-0 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm font-medium text-foreground">
                    {avantage}
                  </span>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal className="stagger-children">
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              <article className="rounded-2xl border border-gray-100 bg-white p-8 text-center">
                <h3 className="sr-only">Verres fabriqués en France</h3>
                <p className="text-muted-foreground">
                  Chez Optique Queuleu, nous sommes fiers de vous proposer une
                  sélection exclusive de <Link href="/verres" className="text-primary hover:underline">verres fabriqués en France</Link>, alliant
                  expertise artisanale et technologies de pointe pour une qualité
                  inégalée.
                </p>
              </article>
              <article className="rounded-2xl border border-gray-100 bg-white p-8 text-center">
                <h3 className="sr-only">Examens de vue et services</h3>
                <p className="text-muted-foreground">
                  Profitez de nos <strong>examens de vue gratuits</strong>, réalisés par nos
                  opticiens expérimentés. Nous proposons également un service de
                  prêt de montures pour essayer plusieurs styles dans le confort de
                  votre foyer.
                </p>
              </article>
              <article className="rounded-2xl border border-gray-100 bg-white p-8 text-center">
                <h3 className="sr-only">Offres et facilités de paiement</h3>
                <p className="text-muted-foreground">
                  Une deuxième paire de lunettes à partir de seulement 1&euro;.
                  Nous vous offrons la possibilité de <strong>payer en 3 fois sans frais</strong>.
                </p>
              </article>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Parking */}
      <section className="bg-white py-24" aria-labelledby="parking-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <ScrollReveal className="reveal-left">
              <SectionTitle id="parking-heading" color="accent">Parking privé gratuit</SectionTitle>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Nous disposons d&apos;un <strong>parking privé, totalement gratuit</strong> !
                Avancez jusqu&apos;à la porte de garage, ouverture automatique.
                Un accès facile et pratique pour votre visite chez votre opticien à Metz Queuleu.
              </p>
            </ScrollReveal>
            <ScrollReveal className="reveal-right">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/images/boutique/parking.webp"
                  alt="Parking privé gratuit avec ouverture automatique chez Optique Queuleu Metz"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Doctolib CTA */}
      <section className="bg-muted py-24" aria-labelledby="rdv-heading">
        <ScrollReveal className="reveal-scale">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <SectionTitle id="rdv-heading">Prendre rendez-vous chez votre opticien à Metz</SectionTitle>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Prenez rendez-vous en toute simplicité sur Doctolib ! Choisissez
              l&apos;heure qui vous convient parmi nos créneaux disponibles et
              laissez-nous prendre soin de votre vision. <strong>Examen de vue gratuit</strong> sur rendez-vous.
            </p>
            <p className="mt-4 font-semibold text-primary">
              On s&apos;occupe de vous jusqu&apos;à 22h !
            </p>
            <a
              href="https://www.doctolib.fr/opticien/metz/optique-queuleu"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
              aria-label="Prendre rendez-vous sur Doctolib pour un examen de vue chez Optique Queuleu Metz"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Prendre RDV sur Doctolib
            </a>
            <p className="mt-6 text-sm text-muted-foreground">
              Vous avez des questions ? <Link href="/contact" className="text-primary hover:underline">Contactez-nous</Link> ou consultez nos <Link href="/marques" className="text-primary hover:underline">marques de lunettes</Link> et nos <Link href="/verres" className="text-primary hover:underline">verres optiques</Link>.
            </p>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
