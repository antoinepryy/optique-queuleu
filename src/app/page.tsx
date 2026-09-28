import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import ScrollReveal from "@/components/ScrollReveal";
import Testimonials from "@/components/Testimonials";
import { INSTAGRAM_URL, FACEBOOK_URL } from "@/lib/social";
import { DOCTOLIB_URL } from "@/components/BookingCta";
import { VISUCORE_PHOTO } from "@/lib/visuals";
import { brands, type Brand } from "@/app/marques/brands-data";

export const metadata: Metadata = {
  title: "Optique Queuleu | Opticien à Metz - Lunettes, Lentilles & Examen de Vue",
  description:
    "Opticien à Metz (Queuleu). Large choix de lunettes de vue et soleil (Ray-Ban, Gucci, Carrera), lentilles de contact, examen de vue. Verres Zeiss, Essilor, Seiko. Parking privé. RDV sur Doctolib.",
  keywords: [
    "opticien Metz",
    "lunettes Metz",
    "lentilles de contact Metz",
    "examen de vue Metz",
    "opticien Queuleu",
    "Ray-Ban Metz",
    "Gucci lunettes Metz",
    "verres Zeiss Metz",
    "verres Essilor Metz",
    "opticien parking privé Metz",
    "Doctolib opticien Metz",
    "lunettes de vue Metz",
    "lunettes de soleil Metz",
  ],
  openGraph: {
    title: "Optique Queuleu | Opticien à Metz - Lunettes, Lentilles & Examen de Vue",
    description:
      "Opticien à Metz (Queuleu). Large choix de lunettes de vue et soleil, lentilles, examen de vue. Parking privé. RDV Doctolib.",
    type: "website",
    locale: "fr_FR",
    url: "https://www.optiquequeuleu.com",
    siteName: "Optique Queuleu",
    images: [
      {
        url: "https://www.optiquequeuleu.com/images/boutique/facade.webp",
        width: 1200,
        height: 630,
        alt: "Façade de la boutique Optique Queuleu à Metz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Optique Queuleu | Opticien à Metz - Lunettes, Lentilles & Examen de Vue",
    description:
      "Opticien à Metz (Queuleu). Large choix de lunettes de vue et soleil, lentilles, examen de vue. Parking privé. RDV Doctolib.",
    images: ["https://www.optiquequeuleu.com/images/boutique/facade.webp"],
  },
};

// Bloc 2 : quelques maisons citées dans le plan 2026-2027, lues depuis le
// catalogue (brands-data.ts) pour garder le logo et le lien de la fiche à jour.
const maisonsSlugs = [
  "veronika-wildgruber",
  "orgreen",
  "clement-lunetier",
  "la-brique-et-la-violette",
];
const maisons = maisonsSlugs
  .map((slug) => brands.find((b) => b.slug === slug))
  .filter((b): b is Brand & { image: string } => Boolean(b?.image));

const bilanBenefices = [
  "Analyse précise",
  "Parcours confortable",
  "Correction affinée",
  "Explications personnalisées",
];

// Bloc 5 : les univers du plan. Le lot 2 rebranchera « Enfants & myopie »
// vers sa page dédiée (/enfants-myopie) : changer son href ici suffit.
const univers: { title: string; tagline?: string; href: string; image: string; alt: string }[] = [
  {
    title: "Créateurs & acétates",
    tagline: "Pour les clients qui cherchent une monture avec du caractère.",
    href: "/marques#createurs-acetates",
    image: "/images/produits/jfrey.webp",
    alt: "Montures créateur J.F. Rey portées",
  },
  {
    title: "Design & légèreté",
    tagline: "Lignes fines, confort, titane et minimalisme.",
    href: "/marques#design-legerete",
    image: "/images/produits/modo-titanium.webp",
    alt: "Montures en titane Modo",
  },
  {
    title: "Savoir-faire français",
    tagline: "Fabrication, matière et identité.",
    href: "/marques#savoir-faire-francais",
    image: "/images/boutique/interieur-2.webp",
    alt: "Lunettes Maison Sarah Lavoine x Ateliers Roussilhe, manufacturées en France",
  },
  {
    title: "Sport & performance",
    tagline: "Équipements adaptés aux pratiques sportives et aux besoins techniques.",
    href: "/marques#sport-performance",
    image: "/images/produits/rudy-project.webp",
    alt: "Lunettes de sport Rudy Project",
  },
  {
    title: "Enfants & myopie",
    href: "/verres",
    image: "/images/marques/tete-a-lunettes.webp",
    alt: "Enfants portant des lunettes Tête à Lunettes",
  },
];

const verriers = [
  { name: "Essilor", src: "/images/verriers/essilor-logo.webp" },
  { name: "Seiko", src: "/images/marques/seiko.webp" },
  { name: "Zeiss", src: "/images/verriers/zeiss.webp" },
];

const services = [
  {
    title: "Lunettes de vue",
    description: "Un large choix de montures pour tous les styles et tous les budgets. Nos opticiens vous guident pour trouver la paire idéale.",
    icon: <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.64 0 8.577 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.64 0-8.577-3.007-9.963-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  },
  {
    title: "Lunettes de soleil",
    description: "Protégez vos yeux avec style grâce à notre collection de lunettes de soleil des plus grandes marques.",
    icon: <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>,
  },
  {
    title: "Lentilles de contact",
    description: "Adaptation et suivi personnalisé pour vos lentilles de contact. Toutes les marques disponibles.",
    icon: <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" /></svg>,
  },
  {
    title: "Examen de vue",
    description: "Bilan visuel complet réalisé par nos opticiens diplômés avec un équipement de dernière génération.",
    icon: <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" /></svg>,
  },
];

// Galerie Instagram « manuelle » : vrais posts du compte @optique_queuleu,
// captés le 27/08/2026. Chaque tuile pointe vers son post d'origine (href).
// Pour rafraîchir : remplacer un visuel dans /public/images/instagram/ et
// mettre à jour son href avec le lien du nouveau post.
const socialImages: { src: string; alt: string; href?: string }[] = [
  {
    src: "/images/instagram/offre-rentree.webp",
    alt: "Offre de rentrée : -20% sur toutes les lunettes",
    href: "https://www.instagram.com/p/Dcf-S7xNvTz/",
  },
  {
    src: "/images/instagram/myopie-solutions.webp",
    alt: "Sa myopie évolue ? Des solutions existent",
    href: "https://www.instagram.com/p/Dcf983gth6X/",
  },
  {
    src: "/images/instagram/derniers-rayons-solaires.webp",
    alt: "Derniers rayons : -30% sur toutes les solaires",
    href: "https://www.instagram.com/p/DcQkHTAN-kJ/",
  },
  // NB : ne garder ici que des offres EN COURS. « Soldes d'été -50% »
  // (24 juin → 21 juillet) a été retiré car périmé. Ajouter la prochaine
  // promo quand elle est publiée, et retirer les tuiles à leur date de fin.
];

export default function Home() {
  return (
    <>
      {/* JSON-LD Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Optician",
            name: "Optique Queuleu",
            description: "Opticien à Metz spécialisé dans les lunettes de vue, lunettes de soleil, lentilles de contact et examens de vue.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "28 Rue de Queuleu",
              addressLocality: "Metz",
              postalCode: "57070",
              addressCountry: "FR",
            },
            telephone: "+33387373036",
            url: "https://www.optiquequeuleu.com",
            image: "https://www.optiquequeuleu.com/images/logo/optique-queuleu.webp",
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Monday",
                opens: "14:00",
                closes: "19:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "09:00",
                closes: "12:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "14:00",
                closes: "19:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Saturday",
                opens: "09:00",
                closes: "12:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Saturday",
                opens: "14:00",
                closes: "18:00",
              },
            ],
            priceRange: "€€",
            geo: {
              "@type": "GeoCoordinates",
              latitude: 49.0953,
              longitude: 6.1977,
            },
            sameAs: [
              FACEBOOK_URL,
              INSTAGRAM_URL,
              "https://www.doctolib.fr/opticien/metz/optique-queuleu",
            ],
          }),
        }}
      />

      {/* ═══ Écran 1 : la promesse ═══ */}
      {/* Compact sur mobile (pas de min-h-screen) : titre, sous-titres et
          boutons tiennent au-dessus de la barre de rendez-vous (64 px). */}
      <section
        data-block="hero"
        className="relative flex items-center overflow-hidden pt-24 pb-14 sm:pt-32 sm:pb-24 lg:min-h-[80vh]"
        aria-label="Bannière d'accueil"
      >
        <Image
          src="/images/boutique/magasin.webp"
          alt="Intérieur de la boutique Optique Queuleu à Metz"
          fill
          sizes="100vw"
          className="animate-hero-bg object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/75" />

        <div className="relative mx-auto max-w-7xl px-5 text-center sm:px-6 lg:px-8">
          <p className="animate-hero-subtitle text-xs font-semibold uppercase tracking-[0.3em] text-white/80 sm:text-sm">
            Optique Queuleu
          </p>
          <h1 className="animate-hero-title mt-4 text-[2.1rem] font-bold leading-tight text-white drop-shadow-lg sm:text-5xl lg:text-7xl">
            Voir mieux. Choisir autrement.
          </h1>
          <p className="animate-hero-subtitle mt-5 text-lg font-medium text-white drop-shadow-md sm:text-2xl">
            Opticien indépendant à Metz
          </p>
          <p className="animate-hero-subtitle mt-2 text-sm font-light tracking-wide text-white/90 drop-shadow-md sm:text-lg">
            Belles lunettes &bull; Expertise visuelle &bull; Technologie ZEISS
          </p>

          <div className="animate-hero-cta mt-8 flex flex-col items-center gap-3 sm:mt-12 sm:flex-row sm:justify-center sm:gap-5">
            <a
              href={DOCTOLIB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-xs rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 hover:bg-primary-light hover:shadow-xl sm:w-auto sm:px-10 sm:py-4"
            >
              Prendre rendez-vous
            </a>
            <Link
              href="/marques"
              className="glass w-full max-w-xs rounded-full px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-white/20 sm:w-auto sm:px-10 sm:py-4"
            >
              Découvrir nos collections
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ Bloc 2 : maisons ═══ */}
      <section data-block="maisons" className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28" aria-labelledby="maisons-heading">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-10 sm:gap-16 lg:grid-cols-2">
            <ScrollReveal className="reveal-left">
              <SectionTitle id="maisons-heading">Des lunettes que l&apos;on ne voit pas partout</SectionTitle>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Nous sélectionnons des maisons indépendantes, des créateurs et
                des fabricants reconnus pour leur design, leur qualité et leur
                savoir-faire.
              </p>
              <Link
                href="/marques"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Découvrir nos collections
              </Link>
            </ScrollReveal>

            <ScrollReveal className="stagger-children">
              <ul className="grid grid-cols-2 gap-4 sm:gap-5">
                {maisons.map((maison) => (
                  <li key={maison.slug}>
                    <Link
                      href={`/marques/${maison.slug}`}
                      className="card-3d group block overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-layered"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={maison.image}
                          alt={`Lunettes ${maison.name}, disponibles chez Optique Queuleu à Metz`}
                          fill
                          sizes="(min-width: 1024px) 25vw, 50vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      <p className="px-3 py-3 text-center text-xs font-bold uppercase tracking-wider text-foreground sm:text-sm">
                        {maison.name}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ Bloc 3 : Bilan Vision ZEISS ═══ */}
      <section data-block="bilan-vision" className="relative overflow-hidden bg-[#0b1d2c] py-16 text-white sm:py-20 lg:py-28" aria-labelledby="bilan-heading">
        <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-primary/15 blur-3xl" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-10 sm:gap-16 lg:grid-cols-2">
            <ScrollReveal className="reveal-left">
              <h2 id="bilan-heading" className="text-3xl font-bold uppercase tracking-[0.15em] text-white sm:text-4xl">
                Une autre façon d&apos;examiner votre vision
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/80">
                Dans notre espace de réfraction, le nouvel équipement ZEISS
                VISUCORE 500 offre une nouvelle expérience de mesure et de
                conseil.
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {bilanBenefices.map((benefice) => (
                  <li key={benefice} className="flex items-center gap-3 text-base font-semibold">
                    <svg aria-hidden="true" className="h-5 w-5 shrink-0 text-primary-light" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    {benefice}
                  </li>
                ))}
              </ul>
              <Link
                href="/bilan-vision-zeiss"
                className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-[#0b1d2c] shadow-xl transition-all duration-300 hover:scale-105"
              >
                Découvrir le Bilan Vision ZEISS
              </Link>
            </ScrollReveal>

            <ScrollReveal className="reveal-right">
              <div className="img-lift relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src={VISUCORE_PHOTO.src}
                  alt={VISUCORE_PHOTO.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ Bloc 4 : un opticien qui prend le temps ═══ */}
      <section data-block="prendre-le-temps" className="bg-muted py-16 sm:py-20 lg:py-28" aria-labelledby="temps-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-10 sm:gap-16 lg:grid-cols-2">
            <ScrollReveal className="reveal-left lg:order-2">
              <SectionTitle id="temps-heading" color="accent">Un opticien qui prend le temps</SectionTitle>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Le choix de vos lunettes tient compte de vos habitudes, de votre
                travail, de vos écrans, de la conduite, du sport, de votre style
                et de vos besoins visuels.
              </p>
            </ScrollReveal>

            <ScrollReveal className="reveal-right lg:order-1">
              <div className="img-lift relative aspect-[4/3] overflow-hidden rounded-3xl shadow-layered">
                <Image
                  src="/images/boutique/interieur-3.webp"
                  alt="Présentoirs de montures dans la boutique Optique Queuleu à Metz"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ Bloc 5 : les univers ═══ */}
      <section data-block="univers" className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28" aria-labelledby="univers-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <SectionTitle id="univers-heading">Les univers Optique Queuleu</SectionTitle>
            </div>
          </ScrollReveal>

          <ScrollReveal className="stagger-children">
            <ul className="mt-12 grid grid-cols-2 gap-4 sm:mt-16 lg:grid-cols-5 lg:gap-5">
              {univers.map((u, i) => (
                <li key={u.title} className={i === univers.length - 1 ? "col-span-2 lg:col-span-1" : undefined}>
                  <Link
                    href={u.href}
                    className={`img-lift group relative flex h-full flex-col justify-end overflow-hidden rounded-2xl shadow-layered ${
                      i === univers.length - 1 ? "aspect-[16/9] lg:aspect-[3/4]" : "aspect-[3/4]"
                    }`}
                  >
                    <Image
                      src={u.image}
                      alt={u.alt}
                      fill
                      sizes="(min-width: 1024px) 20vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                    <div className="relative p-4 text-white sm:p-5">
                      <h3 className="text-sm font-bold uppercase tracking-wide sm:text-base">{u.title}</h3>
                      {u.tagline && (
                        <p className="mt-1.5 text-xs leading-snug text-white/85 sm:text-sm">{u.tagline}</p>
                      )}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ Bloc 6 : avis ═══ */}
      <Testimonials dataBlock="avis" />

      {/* ═══ Services pratiques (après les éléments différenciants) ═══ */}
      {/* ═══ Verres ═══ */}
      <section data-block="verres" className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28" aria-labelledby="verres-heading">
        <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-10 sm:gap-16 lg:grid-cols-2">
            <ScrollReveal className="reveal-left">
              <SectionTitle id="verres-heading">Verres</SectionTitle>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Chez Optique Queuleu, nous avons sélectionné pour vous les
                meilleurs fournisseurs de verres optiques pour la qualité de
                leurs produits, leur engagement et leurs valeurs communes aux
                nôtres pour vous proposer la solution la mieux adaptée à votre
                vue, à vos habitudes et à vos besoins.
              </p>
              <Link
                href="/verres"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-4"
              >
                En savoir plus
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              </Link>
            </ScrollReveal>

            <ScrollReveal className="reveal-right">
              <div className="grid grid-cols-3 gap-6">
                {verriers.map((v) => (
                  <div key={v.name} className="card-3d flex flex-col items-center rounded-2xl bg-white p-8 shadow-layered">
                    <Image
                      src={v.src}
                      alt={`Logo ${v.name} - Verres optiques de qualité disponibles chez Optique Queuleu Metz`}
                      width={120}
                      height={60}
                      className="h-14 w-auto object-contain"
                      loading="lazy"
                    />
                    <span className="mt-4 text-sm font-bold uppercase tracking-wider text-foreground">{v.name}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ Magasin ═══ */}
      <section data-block="magasin" className="bg-muted py-16 sm:py-20 lg:py-28" aria-labelledby="magasin-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-10 sm:gap-16 lg:grid-cols-2">
            <ScrollReveal className="reveal-left">
              <SectionTitle id="magasin-heading">Magasin</SectionTitle>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Plongez dans un monde de clarté et de style chez Optique
                Queuleu &ndash; où la vision rencontre l&apos;élégance.
                Découvrez une expérience alliant expertise et service
                personnalisé ! Nous disposons d&apos;un parking privé.
              </p>
              <Link
                href="/magasin"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-4"
              >
                Découvrir le magasin
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              </Link>
            </ScrollReveal>

            <ScrollReveal className="reveal-right">
              <div className="grid grid-cols-2 gap-5">
                <div className="img-lift relative aspect-[4/3] overflow-hidden rounded-2xl shadow-layered">
                  <Image
                    src="/images/boutique/facade.webp"
                    alt="Façade de la boutique Optique Queuleu située au 28 rue de Queuleu à Metz"
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="img-lift relative mt-8 aspect-[4/3] overflow-hidden rounded-2xl shadow-layered">
                  <Image
                    src="/images/boutique/interieur-2.webp"
                    alt="Intérieur moderne et élégant du magasin Optique Queuleu avec présentoirs de lunettes"
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

      {/* ═══ Services ═══ */}
      <section data-block="services" className="relative overflow-hidden bg-gradient-to-br from-muted via-white to-muted py-16 sm:py-20 lg:py-28" aria-labelledby="services-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <SectionTitle id="services-heading">Services</SectionTitle>
              <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
                Toute l&apos;équipe d&apos;Optique Queuleu est à votre
                disposition afin de vous guider dans le choix de votre solution
                optique. Vous pouvez ainsi bénéficier de nos accords mutuelles des
                réseaux de soins Kalixa et Carte Blanche ainsi que de conseils de
                professionnels avec la possibilité de prendre rendez-vous
                jusqu&apos;à 22h en nous contactant au magasin.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal className="stagger-children">
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="card-3d group rounded-2xl border border-gray-100 bg-white p-8 shadow-layered"
                  style={{ perspective: "600px" }}
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary shadow-inner transition-all duration-500 group-hover:scale-110 group-hover:shadow-primary/20">
                    {service.icon}
                  </div>
                  <h3 className="mt-6 text-lg font-bold uppercase tracking-wide text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </article>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ Doctolib ═══ */}
      <section data-block="doctolib" className="relative overflow-hidden bg-gradient-to-r from-primary to-primary-light py-16 text-white sm:py-20 lg:py-28" aria-labelledby="doctolib-heading">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15),transparent_60%)]" />
        <div className="absolute -bottom-10 -left-10 h-60 w-60 rounded-full bg-white/5 blur-2xl" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-2">
            <ScrollReveal className="reveal-left">
              <h2 id="doctolib-heading" className="text-4xl font-bold uppercase tracking-[0.15em] drop-shadow-md sm:text-5xl">
                Doctolib
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/85">
                Réservez dès maintenant votre rendez-vous pour un examen de vue,
                un renouvellement de lunettes, un ajustement de votre monture ou
                tout autre service optique.
              </p>
              <a
                href="https://www.doctolib.fr/opticien/metz/optique-queuleu"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-10 inline-flex items-center gap-3 rounded-full bg-white px-10 py-4 text-sm font-bold text-primary shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Prendre RDV sur Doctolib
              </a>
            </ScrollReveal>

            <ScrollReveal className="reveal-scale">
              <div className="img-lift relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl ring-4 ring-white/20">
                <Image
                  src="/images/divers/doctolib.webp"
                  alt="Prise de rendez-vous en ligne sur Doctolib pour examen de vue chez Optique Queuleu Metz"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ Contact ═══ */}
      <section data-block="contact" className="bg-white py-16 sm:py-20 lg:py-28" aria-labelledby="contact-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-2">
            <ScrollReveal className="reveal-left">
              <SectionTitle id="contact-heading">Contact</SectionTitle>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Vos spécialistes de l&apos;optique restent à votre écoute pour
                toutes questions relatives aux produits ou services proposés en
                magasin.
              </p>
              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-primary px-10 py-4 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/30"
              >
                Nous contacter
              </Link>
            </ScrollReveal>

            <ScrollReveal className="reveal-right">
              <div className="overflow-hidden rounded-2xl shadow-layered">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2606.5!2d6.1977!3d49.0953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4794dc1b16aa5555%3A0x0!2s28+Rue+de+Queuleu%2C+57070+Metz!5e0!3m2!1sfr!2sfr!4v1700000000000"
                  width="100%" height="320" style={{ border: 0 }} allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade" title="Localisation Optique Queuleu sur Google Maps - 28 Rue de Queuleu, 57070 Metz"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ Parking Privé ═══ */}
      <section data-block="parking" className="relative overflow-hidden bg-muted py-16 sm:py-20 lg:py-28" aria-labelledby="parking-heading">
        <div className="absolute top-10 right-1/4 h-72 w-72 rounded-full bg-accent/5 blur-3xl" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-2">
            <ScrollReveal className="reveal-left">
              <SectionTitle id="parking-heading" color="accent">Parking privé</SectionTitle>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Vous vous déplacez en voiture et avez du mal à trouver une place
                de parking autour du magasin ? Nous disposons d&apos;un parking
                privé, gratuit et accessible. Il suffit d&apos;avancer
                jusqu&apos;à la porte de garage : l&apos;ouverture est
                automatique !
              </p>
            </ScrollReveal>

            <ScrollReveal className="reveal-scale">
              <div className="img-lift relative aspect-[4/3] overflow-hidden rounded-3xl shadow-layered">
                <Image
                  src="/images/boutique/parking.webp"
                  alt="Parking privé gratuit avec ouverture automatique chez Optique Queuleu à Metz"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ Prescription & Oomade ═══ */}
      <section data-block="services-innovants" className="bg-white py-16 sm:py-20 lg:py-28" aria-label="Services innovants">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal className="stagger-children">
            <div className="grid gap-8 md:grid-cols-2">
              {/* Prescription en 48h */}
              <article className="card-3d group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-layered">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src="/images/boutique/prescription.webp"
                    alt="Service de prescription de lunettes et lentilles en 48h par télé-expertise avec ophtalmologiste"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold uppercase tracking-wide text-gradient">
                    Prescription en 48h*
                  </h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    Obtenez rapidement une ordonnance lunettes et lentilles
                    grâce à notre service de télé-expertise, validée par un
                    ophtalmologiste.
                  </p>
                  <Link
                    href="/prescription-48h"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary transition-all hover:gap-4"
                  >
                    Découvrir
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                  </Link>
                </div>
              </article>

              {/* Oomade – Vision Minute */}
              <article className="card-3d group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-layered">
                <div className="flex aspect-[3/2] items-center justify-center bg-muted p-10">
                  <Image
                    src="/images/marques/oomade.webp"
                    alt="Logo Oomade - Service d'impression 3D de montures de lunettes en 10 minutes"
                    width={400}
                    height={80}
                    className="h-auto w-full max-w-xs object-contain transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold uppercase tracking-wide text-gradient">
                    Oomade &ndash; Vision Minute
                  </h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    Votre monture reconstituée en seulement 10 minutes grâce à
                    l&apos;impression 3D, directement à partir de vos verres
                    existants.
                  </p>
                  <Link
                    href="/vision-minute"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary transition-all hover:gap-4"
                  >
                    En savoir plus
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                  </Link>
                </div>
              </article>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ Réseaux sociaux ═══ */}
      <section data-block="reseaux" className="relative overflow-hidden bg-muted py-16 sm:py-20 lg:py-28" aria-labelledby="social-heading">
        <div className="absolute -top-20 left-1/3 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <SectionTitle id="social-heading">Retrouvez-nous sur les réseaux</SectionTitle>
            </div>
          </ScrollReveal>

          <ScrollReveal className="stagger-children">
            <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {socialImages.map((img) => (
                <a
                  key={img.src}
                  href={img.href ?? INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${img.alt} — voir sur l'Instagram d'Optique Queuleu`}
                  className="img-lift group relative block aspect-square overflow-hidden rounded-2xl shadow-layered"
                >
                  <Image
                    src={img.src}
                    alt={`${img.alt} - Collection de lunettes disponible chez Optique Queuleu Metz`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <svg className="h-8 w-8 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                  </span>
                </a>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <nav className="mt-12 flex items-center justify-center gap-6" aria-label="Réseaux sociaux">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                aria-label="Suivez Optique Queuleu sur Facebook"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                Facebook
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-pink-500/25 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                aria-label="Suivez Optique Queuleu sur Instagram"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                Instagram
              </a>
            </nav>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
