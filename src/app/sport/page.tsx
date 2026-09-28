import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import ScrollReveal from "@/components/ScrollReveal";
import { DOCTOLIB_URL } from "@/components/BookingCta";
import { brands, getUnivers } from "@/app/marques/brands-data";
import UniversBrandCard from "@/app/marques/UniversBrandCard";

const PAGE_URL = "https://www.optiquequeuleu.com/sport";
const HERO_IMAGE = "/images/produits/oakley-hero.webp";
const HERO_ALT = "Lunettes de sport Oakley";

// Libellé et accroche : univers « Sport & performance » du plan 2026-2027
// (section 5), tels que définis dans brands-data.ts.
const univers = getUnivers("sport-performance");

// Les marques viennent des données : changer l'univers d'une marque dans
// brands-data.ts la fait apparaître ou disparaître ici.
const sportBrands = brands.filter((b) => b.univers === "sport-performance");

// Texte rédigé par nous (à valider par Romain) : description, openGraph et
// twitter ci-dessous.
const DESCRIPTION =
  "Lunettes de sport chez Optique Queuleu, opticien indépendant à Metz : équipements adaptés aux pratiques sportives et aux besoins techniques.";

export const metadata: Metadata = {
  title: "Lunettes de sport à Metz",
  description: DESCRIPTION,
  openGraph: {
    title: "Lunettes de sport à Metz | Optique Queuleu",
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "Optique Queuleu",
    locale: "fr_FR",
    type: "website",
    images: [{ url: HERO_IMAGE, width: 1920, height: 1477, alt: HERO_ALT }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lunettes de sport à Metz | Optique Queuleu",
    description: DESCRIPTION,
    images: [HERO_IMAGE],
  },
};

const clockIcon = (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export default function SportPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-80 items-center pt-20 pb-10 sm:min-h-96" aria-label="Bannière Sport & performance">
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
          {/* src/app/magasin/page.tsx (liste des avantages) */}
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/80">
            Équipement de sport
          </p>
          <h1 className="mt-3 text-3xl font-bold uppercase tracking-[0.1em] text-white sm:text-4xl lg:text-5xl">
            {univers.label}
          </h1>
          <nav className="mt-4 text-sm text-white/70" aria-label="Fil d'Ariane">
            <Link href="/" className="hover:text-white">
              Accueil
            </Link>
            <span className="mx-2" aria-hidden="true">&gt;</span>
            <span className="text-white">Sport</span>
          </nav>
          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-white/90">
            {univers.tagline}
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

      {/* Marques de l'univers sport-performance */}
      <section id="marques" className="scroll-mt-24 bg-muted py-14 sm:py-20 lg:py-24" aria-labelledby="marques-heading">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-10 text-center">
              <SectionTitle id="marques-heading">Nos marques</SectionTitle>
            </div>
          </ScrollReveal>
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {sportBrands.map((brand) => (
              <li key={brand.slug}>
                <UniversBrandCard brand={brand} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Verres et Bilan Vision */}
      <section className="bg-white py-14 sm:py-20" aria-label="Verres et Bilan Vision ZEISS">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-4 px-6 sm:flex-row lg:px-8">
          <Link
            href="/verres"
            className="inline-flex items-center rounded-full border border-primary px-8 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
          >
            Nos verres
          </Link>
          <Link
            href="/bilan-vision-zeiss"
            className="inline-flex items-center rounded-full border border-primary px-8 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
          >
            Découvrir le Bilan Vision ZEISS
          </Link>
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
