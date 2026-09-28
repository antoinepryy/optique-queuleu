import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import ScrollReveal from "@/components/ScrollReveal";
import { DOCTOLIB_URL } from "@/components/BookingCta";
import { VISUCORE_PHOTO } from "@/lib/visuals";

const PAGE_URL = "https://www.optiquequeuleu.com/bilan-vision-zeiss";
const OG_IMAGE = "/images/boutique/magasin.webp";

// Textes rédigés par nous (à valider par Romain) : description, openGraph et
// twitter ci-dessous, intro de la section « expérience », titres de section.
export const metadata: Metadata = {
  title: "Bilan Vision ZEISS à Metz",
  description:
    "Bilan Vision ZEISS à Metz chez Optique Queuleu : échange sur vos habitudes, analyse de votre vision avec le ZEISS VISUCORE 500 et conseils personnalisés.",
  openGraph: {
    title: "Bilan Vision ZEISS à Metz | Optique Queuleu",
    description:
      "Une nouvelle expérience de mesure et de conseil avec le ZEISS VISUCORE 500, chez Optique Queuleu à Metz.",
    url: PAGE_URL,
    siteName: "Optique Queuleu",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 2305,
        height: 1537,
        alt: "Intérieur du magasin Optique Queuleu à Metz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bilan Vision ZEISS à Metz | Optique Queuleu",
    description:
      "Une nouvelle expérience de mesure et de conseil avec le ZEISS VISUCORE 500, chez Optique Queuleu à Metz.",
    images: [OG_IMAGE],
  },
};

// Bénéfices en langage client (plan 2026-2027, section 3, bloc 3).
const benefices = [
  "Analyse précise",
  "Parcours confortable",
  "Correction affinée",
  "Explications personnalisées",
];

// Les 5 étapes, textes du plan 2026-2027 (section 4). Étape 04 reformulée
// à la 2e personne (« afin que vous compreniez votre vision »).
const etapes = [
  {
    numero: "01",
    titre: "Nous échangeons",
    description:
      "Habitudes visuelles, travail, écrans, conduite, sport et difficultés rencontrées.",
  },
  {
    numero: "02",
    titre: "Nous analysons votre vision",
    description:
      "Utilisation du nouvel équipement ZEISS VISUCORE 500 dans l'espace de réfraction.",
  },
  {
    numero: "03",
    titre: "Nous affinons votre correction",
    description:
      "Comparaison et ajustement selon les réponses et le confort visuel.",
  },
  {
    numero: "04",
    titre: "Nous vous expliquons",
    description:
      "Les résultats sont traduits simplement afin que vous compreniez votre vision.",
  },
  {
    numero: "05",
    titre: "Nous construisons votre équipement",
    description:
      "Choix de la monture, des verres et des traitements selon les usages réels.",
  },
];

const clockIcon = (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export default function BilanVisionZeissPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-80 items-center pt-20 pb-10 sm:min-h-96" aria-label="Bannière Bilan Vision ZEISS">
        <Image
          src={OG_IMAGE}
          alt="Intérieur du magasin Optique Queuleu à Metz"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/55" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h1 className="text-3xl font-bold uppercase tracking-[0.12em] text-white sm:text-4xl sm:tracking-[0.15em] lg:text-5xl">
            Bilan Vision ZEISS
          </h1>
          <p className="mt-3 text-sm font-semibold uppercase tracking-[0.3em] text-white/80">
            Optique Queuleu
          </p>
          <nav className="mt-4 text-sm text-white/70" aria-label="Fil d'Ariane">
            <Link href="/" className="hover:text-white">
              Accueil
            </Link>
            <span className="mx-2" aria-hidden="true">&gt;</span>
            <span className="text-white">Bilan Vision ZEISS</span>
          </nav>
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

      {/* Une nouvelle expérience de mesure et de conseil */}
      <section className="bg-white py-14 sm:py-20 lg:py-24" aria-labelledby="experience-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-10 sm:gap-16 lg:grid-cols-2">
            <ScrollReveal className="reveal-left">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                ZEISS VISUCORE 500
              </p>
              <SectionTitle id="experience-heading">
                Une nouvelle expérience de mesure et de conseil
              </SectionTitle>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Le ZEISS VISUCORE 500 n&apos;est pas seulement un nouvel
                appareil : c&apos;est une nouvelle façon de mesurer votre
                vision et de vous conseiller. Ce qui change pour vous :
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {benefices.map((benefice) => (
                  <li key={benefice} className="flex items-center gap-3 font-semibold text-foreground">
                    <svg aria-hidden="true" className="h-5 w-5 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {benefice}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal className="reveal-right">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={VISUCORE_PHOTO.src}
                  alt={VISUCORE_PHOTO.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Les 5 étapes */}
      <section className="bg-muted py-14 sm:py-20 lg:py-24" aria-labelledby="etapes-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                Bilan Vision ZEISS - Optique Queuleu
              </p>
              <h2 id="etapes-heading" className="mt-4 text-3xl font-bold uppercase tracking-wide text-foreground sm:text-4xl">
                Votre bilan en 5 étapes
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal className="stagger-children">
            <ol className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
              {etapes.map((etape) => (
                <li
                  key={etape.numero}
                  className="card-3d rounded-2xl border border-gray-100 bg-white p-6"
                >
                  <p className="text-4xl font-extrabold text-primary/25" aria-hidden="true">
                    {etape.numero}
                  </p>
                  <h3 className="mt-2 text-base font-bold uppercase tracking-wide text-foreground">
                    {`${etape.numero} - ${etape.titre}`}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {etape.description}
                  </p>
                </li>
              ))}
            </ol>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-white py-14 sm:py-20 lg:py-24" aria-labelledby="cta-heading">
        <ScrollReveal className="reveal-scale">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <h2 id="cta-heading" className="text-3xl font-bold uppercase tracking-wide text-foreground sm:text-4xl">
              Votre Bilan Vision ZEISS
            </h2>
            <div className="mt-8 flex justify-center">
              <a
                href={DOCTOLIB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
              >
                {clockIcon}
                Prendre rendez-vous pour mon bilan visuel
              </a>
            </div>
            <p className="mx-auto mt-8 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Le Bilan Vision réalisé par votre opticien ne remplace pas une
              consultation chez l&apos;ophtalmologiste lorsqu&apos;un suivi
              médical est nécessaire.
            </p>
            <p className="mt-6 text-sm">
              <Link href="/notre-approche" className="font-semibold text-primary hover:underline">
                Découvrir notre approche
              </Link>
            </p>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
