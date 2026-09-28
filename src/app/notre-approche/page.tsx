import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import ScrollReveal from "@/components/ScrollReveal";
import { DOCTOLIB_URL } from "@/components/BookingCta";
import { TEAM_PHOTO } from "@/lib/visuals";

const PAGE_URL = "https://www.optiquequeuleu.com/notre-approche";
const OG_IMAGE = "/images/boutique/magasin.webp";

// Textes rédigés par nous (à valider par Romain) : description, openGraph et
// twitter ci-dessous, introduction du hero, première phrase de « Notre
// équipe », textes du bloc « Après l'achat ».
export const metadata: Metadata = {
  title: "Opticien à Metz : notre approche",
  description:
    "Optique Queuleu, opticien indépendant à Metz : 8 étapes pour vous accompagner, de l'écoute au suivi de vos lunettes. Notre équipe et nos engagements.",
  openGraph: {
    title: "Opticien à Metz : notre approche | Optique Queuleu",
    description:
      "Notre façon de prendre soin de votre vision, de l'écoute au suivi de vos lunettes, chez Optique Queuleu à Metz.",
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
    title: "Opticien à Metz : notre approche | Optique Queuleu",
    description:
      "Notre façon de prendre soin de votre vision, de l'écoute au suivi de vos lunettes, chez Optique Queuleu à Metz.",
    images: [OG_IMAGE],
  },
};

// Les 8 étapes, titres exacts du plan 2026-2027 (section 6). Pas de
// description inventée : seulement des liens vers des pages existantes.
const etapes: {
  numero: string;
  titre: string;
  lien?: { href: string; label: string };
}[] = [
  { numero: "01", titre: "Vous écouter" },
  {
    numero: "02",
    titre: "Analyser votre vision",
    lien: { href: "/bilan-vision-zeiss", label: "Découvrir le Bilan Vision ZEISS" },
  },
  {
    numero: "03",
    titre: "Trouver votre monture",
    lien: { href: "/marques", label: "Nos collections" },
  },
  {
    numero: "04",
    titre: "Choisir vos verres",
    lien: { href: "/verres", label: "Nos verres" },
  },
  { numero: "05", titre: "Prendre vos mesures" },
  { numero: "06", titre: "Préparer vos lunettes" },
  { numero: "07", titre: "Les ajuster" },
  {
    numero: "08",
    titre: "Vous accompagner dans le temps",
    lien: { href: "#apres-achat", label: "Après l'achat" },
  },
];

// Engagements : uniquement des phrases déjà présentes sur le site ou dans le
// plan 2026-2027. Source indiquée pour chacun.
const engagements = [
  // src/app/magasin/page.tsx (liste des avantages)
  "Conseils personnalisés",
  // src/app/magasin/page.tsx (liste des avantages)
  "Garantie adaptation",
  // src/app/magasin/page.tsx (liste des avantages)
  "Verres fabriqués en France",
  // src/app/magasin/page.tsx (liste des avantages)
  "Tiers payant : simplifiez vos démarches administratives !",
  // src/app/magasin/page.tsx (liste des avantages)
  "Partenaires mutuelles",
  // Plan 2026-2027, section 7 (principe de fidélisation)
  "Peu de messages, mais des messages utiles, personnels et bien ciblés.",
];

// Accompagnement après l'achat (plan 2026-2027, section 7), formulé pour le
// client. Textes rédigés par nous, à valider par Romain.
const suivi = [
  {
    moment: "Vers J+15",
    texte:
      "Nous vérifions votre adaptation à vos nouvelles lunettes et vous proposons un réglage si nécessaire.",
  },
  {
    moment: "À 6 mois",
    texte: "Nettoyage, contrôle et ajustement de vos lunettes.",
  },
  {
    moment: "À 12 mois",
    texte:
      "Un point sur votre vision et votre équipement, lorsque cela est pertinent.",
  },
];

const clockIcon = (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const checkIcon = (
  <svg aria-hidden="true" className="h-5 w-5 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

export default function NotreApprochePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-80 items-center pt-20 pb-10 sm:min-h-96" aria-label="Bannière Notre approche">
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
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/80">
            Notre approche
          </p>
          <h1 className="mt-3 text-3xl font-bold uppercase tracking-[0.1em] text-white sm:text-4xl lg:text-5xl">
            Notre façon de prendre soin de votre vision
          </h1>
          <nav className="mt-4 text-sm text-white/70" aria-label="Fil d'Ariane">
            <Link href="/" className="hover:text-white">
              Accueil
            </Link>
            <span className="mx-2" aria-hidden="true">&gt;</span>
            <span className="text-white">Notre approche</span>
          </nav>
          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-white/90">
            De notre premier échange au suivi de vos lunettes, voici le travail
            de votre opticien, étape par étape.
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

      {/* L'expérience Optique Queuleu : les 8 étapes */}
      <section id="experience" className="scroll-mt-24 bg-muted py-14 sm:py-20 lg:py-24" aria-labelledby="experience-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                Notre approche
              </p>
              <h2 id="experience-heading" className="mt-4 text-3xl font-bold uppercase tracking-wide text-foreground sm:text-4xl">
                L&apos;expérience Optique Queuleu
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal className="stagger-children">
            <ol className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {etapes.map((etape) => (
                <li
                  key={etape.numero}
                  className="card-3d rounded-2xl border border-gray-100 bg-white p-6"
                >
                  <p className="text-4xl font-extrabold text-primary/25" aria-hidden="true">
                    {etape.numero}
                  </p>
                  <h3 className="mt-2 text-base font-bold uppercase tracking-wide text-foreground">
                    {`${etape.numero} ${etape.titre}`}
                  </h3>
                  {etape.lien && (
                    <Link
                      href={etape.lien.href}
                      className="mt-3 inline-block text-sm font-semibold text-primary hover:underline"
                    >
                      {etape.lien.label}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </ScrollReveal>
        </div>
      </section>

      {/* Notre équipe */}
      <section id="equipe" className="scroll-mt-24 bg-white py-14 sm:py-20 lg:py-24" aria-labelledby="equipe-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-10 sm:gap-16 lg:grid-cols-2">
            <ScrollReveal className="reveal-left">
              <SectionTitle id="equipe-heading">Notre équipe</SectionTitle>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Romain et l&apos;équipe vous conseillent à chaque étape.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Notre équipe reste fidèle à sa philosophie : un accompagnement
                personnalisé pour chaque membre de la famille.
              </p>
            </ScrollReveal>
            <ScrollReveal className="reveal-right">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={TEAM_PHOTO.src}
                  alt={TEAM_PHOTO.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Nos engagements */}
      <section id="engagements" className="scroll-mt-24 bg-muted py-14 sm:py-20 lg:py-24" aria-labelledby="engagements-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <SectionTitle id="engagements-heading">Nos engagements</SectionTitle>
            </div>
          </ScrollReveal>
          <ScrollReveal className="stagger-children">
            <ul className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {engagements.map((engagement) => (
                <li
                  key={engagement}
                  className="flex items-center gap-3 rounded-xl bg-white p-5 font-semibold text-foreground"
                >
                  {checkIcon}
                  {engagement}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* Après l'achat */}
      <section id="apres-achat" className="scroll-mt-24 bg-white py-14 sm:py-20 lg:py-24" aria-labelledby="apres-achat-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                08 Vous accompagner dans le temps
              </p>
              <h2 id="apres-achat-heading" className="mt-4 text-3xl font-bold uppercase tracking-wide text-foreground sm:text-4xl">
                Après l&apos;achat
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal className="stagger-children">
            <ol className="mt-16 grid gap-6 md:grid-cols-3">
              {suivi.map((etape) => (
                <li
                  key={etape.moment}
                  className="card-3d rounded-2xl border border-gray-100 bg-white p-6"
                >
                  <h3 className="text-xl font-bold uppercase tracking-wide text-primary">
                    {etape.moment}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {etape.texte}
                  </p>
                </li>
              ))}
            </ol>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-muted py-14 sm:py-20 lg:py-24" aria-labelledby="cta-heading">
        <ScrollReveal className="reveal-scale">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <h2 id="cta-heading" className="text-3xl font-bold uppercase tracking-wide text-foreground sm:text-4xl">
              Prendre rendez-vous
            </h2>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={DOCTOLIB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
              >
                {clockIcon}
                Prendre rendez-vous
              </a>
              <Link
                href="/magasin"
                className="inline-flex items-center rounded-full border border-primary px-8 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
              >
                Le magasin
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
