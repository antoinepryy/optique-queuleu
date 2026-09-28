import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import ScrollReveal from "@/components/ScrollReveal";
import { DOCTOLIB_URL } from "@/components/BookingCta";
import { brands } from "@/app/marques/brands-data";
import UniversBrandCard from "@/app/marques/UniversBrandCard";

const PAGE_URL = "https://www.optiquequeuleu.com/enfants-myopie";
const HERO_IMAGE = "/images/marques/tete-a-lunettes.webp";
const HERO_ALT = "Enfants portant des lunettes Tête à Lunettes";
// Visuel du post Instagram du magasin, avec son texte d'origine.
const MYOPIE_IMAGE = "/images/instagram/myopie-solutions.webp";
const MYOPIE_TEXT = "Sa myopie évolue ? Des solutions existent";

// Pas d'univers enfant parmi les 5 du plan : les marques viennent de la
// catégorie « enfant » de brands-data.ts. Retirer cette catégorie d'une marque
// la fait disparaître ici.
const kidsBrands = brands.filter((b) => b.categories.includes("enfant"));

// Aucune explication médicale sur la myopie ici : ni le plan 2026-2027 ni le
// site n'en contiennent. On renvoie vers l'opticien (Bilan Vision, verres, RDV).

// Texte rédigé par nous (à valider par Romain) : description, openGraph et
// twitter ci-dessous, et la phrase sous le visuel myopie.
const DESCRIPTION =
  "Myopie de l'enfant à Metz : lunettes pour enfants et ados chez Optique Queuleu, opticien indépendant. Sa myopie évolue ? Des solutions existent, parlons-en.";

export const metadata: Metadata = {
  title: "Myopie enfant et lunettes à Metz",
  description: DESCRIPTION,
  openGraph: {
    title: "Myopie enfant et lunettes à Metz | Optique Queuleu",
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "Optique Queuleu",
    locale: "fr_FR",
    type: "website",
    images: [{ url: HERO_IMAGE, width: 800, height: 500, alt: HERO_ALT }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Myopie enfant et lunettes à Metz | Optique Queuleu",
    description: DESCRIPTION,
    images: [HERO_IMAGE],
  },
};

const clockIcon = (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export default function EnfantsMyopiePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-80 items-center pt-20 pb-10 sm:min-h-96" aria-label="Bannière Vision de l'enfant et myopie">
        <Image
          src={HERO_IMAGE}
          alt={HERO_ALT}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/55" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/80">
            Votre vision
          </p>
          {/* Plan 2026-2027, section 9 (arborescence) */}
          <h1 className="mt-3 text-3xl font-bold uppercase tracking-[0.1em] text-white sm:text-4xl lg:text-5xl">
            Vision de l&apos;enfant &amp; myopie
          </h1>
          <nav className="mt-4 text-sm text-white/70" aria-label="Fil d'Ariane">
            <Link href="/" className="hover:text-white">
              Accueil
            </Link>
            <span className="mx-2" aria-hidden="true">&gt;</span>
            <span className="text-white">Enfants &amp; myopie</span>
          </nav>
          {/* src/app/blog/articles-data.ts (article « fait peau neuve ») */}
          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-white/90">
            Notre équipe reste fidèle à sa philosophie : un accompagnement
            personnalisé pour chaque membre de la famille.
          </p>
          <a
            href={DOCTOLIB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
          >
            {clockIcon}
            Prendre rendez-vous
          </a>
        </div>
      </section>

      {/* Marques de la catégorie enfant */}
      <section id="marques" className="scroll-mt-24 bg-muted py-14 sm:py-20 lg:py-24" aria-labelledby="marques-heading">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto mb-10 max-w-2xl text-center">
              {/* src/app/blog/articles-data.ts (article « fait peau neuve ») */}
              <SectionTitle id="marques-heading">Pour les plus jeunes</SectionTitle>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Parce qu&apos;un enfant qui aime ses lunettes est un enfant qui
                les porte volontiers !
              </p>
            </div>
          </ScrollReveal>
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {kidsBrands.map((brand) => (
              <li key={brand.slug}>
                <UniversBrandCard brand={brand} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Myopie : visuel Instagram existant, renvoi vers l'opticien */}
      <section id="myopie" className="scroll-mt-24 bg-white py-14 sm:py-20 lg:py-24" aria-labelledby="myopie-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-10 sm:gap-16 lg:grid-cols-2">
            <ScrollReveal className="reveal-left">
              <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-2xl">
                <Image
                  src={MYOPIE_IMAGE}
                  alt={MYOPIE_TEXT}
                  fill
                  sizes="(min-width: 1024px) 28rem, 100vw"
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal className="reveal-right">
              <h2 id="myopie-heading" className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {MYOPIE_TEXT}
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Parlez-en avec votre opticien.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/bilan-vision-zeiss"
                  className="inline-flex items-center justify-center rounded-full border border-primary px-8 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
                >
                  Découvrir le Bilan Vision ZEISS
                </Link>
                <Link
                  href="/verres"
                  className="inline-flex items-center justify-center rounded-full border border-primary px-8 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
                >
                  Nos verres
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-muted py-14 sm:py-20 lg:py-24" aria-labelledby="cta-heading">
        <ScrollReveal className="reveal-scale">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <h2 id="cta-heading" className="text-3xl font-bold uppercase tracking-wide text-foreground sm:text-4xl">
              Prendre rendez-vous
            </h2>
            <div className="mt-8 flex justify-center">
              <a
                href={DOCTOLIB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
              >
                {clockIcon}
                Prendre rendez-vous
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
