import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title:
    "Prescription Lunettes Lentilles en 48h Metz | Ordonnance sans Ophtalmo",
  description:
    "Obtenez votre ordonnance lunettes et lentilles en 48h chez Optique Queuleu Metz. Bilan visuel complet en magasin, transmission a un ophtalmologiste par tele-expertise. Remboursement Secu + mutuelle.",
  keywords: [
    "prescription 48h metz",
    "ordonnance lunettes rapide",
    "ordonnance sans ophtalmo",
    "tele-expertise ophtalmologique",
    "bilan visuel metz",
    "ordonnance lentilles 48h",
    "opticien metz prescription",
    "examen de vue metz",
  ],
  openGraph: {
    title: "Prescription Lunettes & Lentilles en 48h | Optique Queuleu Metz",
    description:
      "Ordonnance en 48h par tele-expertise ophtalmologique. Bilan visuel complet en magasin, ordonnance officielle remboursee. RDV possibles jusqu'a 22h.",
    url: "https://www.optiquequeuleu.com/prescription-48h",
    siteName: "Optique Queuleu",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.optiquequeuleu.com/images/boutique/prescription.webp",
        width: 1200,
        height: 630,
        alt: "Bilan visuel chez Optique Queuleu Metz - Prescription en 48h",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prescription Lunettes & Lentilles en 48h | Optique Queuleu Metz",
    description:
      "Ordonnance en 48h par tele-expertise. Bilan visuel complet chez votre opticien a Metz.",
    images: ["/images/boutique/prescription.webp"],
  },
};

const etapes = [
  {
    numero: "01",
    titre: "Bilan visuel en magasin",
    duree: "20 - 30 min",
    description:
      "Votre opticien diplome realise un bilan visuel complet : questionnaire medical, refraction objective (autorefractometre), refraction subjective (tests de vue) et verification de la vision binoculaire.",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    numero: "02",
    titre: "Transmission securisee",
    duree: "Instantane",
    description:
      "Les donnees de votre bilan sont cryptees et transmises via une plateforme certifiee HDS (Hebergement de Donnees de Sante) a un ophtalmologiste pour analyse a distance.",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
        />
      </svg>
    ),
  },
  {
    numero: "03",
    titre: "Ordonnance en 48h",
    duree: "48h ouvrees",
    description:
      "L'ophtalmologiste analyse vos resultats et delivre (ou non) une ordonnance officielle, valable pour lunettes et lentilles. Remboursement Securite sociale et mutuelle assure.",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
        />
      </svg>
    ),
  },
];

const avantages = [
  {
    titre: "48h au lieu de plusieurs mois",
    description:
      "Plus besoin d'attendre des mois pour un rendez-vous ophtalmologiste. Votre ordonnance est delivree sous 48 heures ouvrees.",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    titre: "Ordonnance officielle",
    description:
      "L'ordonnance delivree par l'ophtalmologiste est officielle et permet un remboursement par la Securite sociale et votre mutuelle.",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
        />
      </svg>
    ),
  },
  {
    titre: "RDV jusqu'a 22h",
    description:
      "Optique Queuleu propose des creneaux de rendez-vous flexibles, y compris en soiree jusqu'a 22h pour s'adapter a votre emploi du temps.",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
        />
      </svg>
    ),
  },
  {
    titre: "Pas de deplacement",
    description:
      "Tout se fait chez votre opticien a Metz. Aucun besoin de vous deplacer chez un ophtalmologiste, une solution ideale face aux deserts medicaux.",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        />
      </svg>
    ),
  },
  {
    titre: "Lunettes et lentilles",
    description:
      "L'ordonnance obtenue est valable aussi bien pour des lunettes de vue que pour des lentilles de contact.",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
];

const limites = [
  {
    titre: "Correction de la vue uniquement",
    description:
      "Ce service est destine aux besoins refractifs (correction de la vue). Il ne remplace pas une consultation ophtalmologique complete en cas de pathologie oculaire suspectee.",
  },
  {
    titre: "Droit de refus de l'ophtalmologiste",
    description:
      "L'ophtalmologiste peut refuser de delivrer une ordonnance s'il estime qu'un examen physique en cabinet est necessaire pour votre sante oculaire.",
  },
  {
    titre: "Consultation ophtalmo recommandee",
    description:
      "Un suivi regulier chez un ophtalmologiste reste recommande pour un bilan de sante oculaire complet, en complement de ce service de tele-expertise.",
  },
];

export default function Prescription48hPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Prescription lunettes et lentilles en 48h par tele-expertise",
    description:
      "Service de tele-expertise ophtalmologique : bilan visuel complet en magasin par opticien diplome, transmission securisee a un ophtalmologiste, ordonnance officielle delivree sous 48h ouvrees.",
    provider: {
      "@type": "LocalBusiness",
      name: "Optique Queuleu",
      address: {
        "@type": "PostalAddress",
        streetAddress: "28 Rue de Queuleu",
        addressLocality: "Metz",
        postalCode: "57070",
        addressCountry: "FR",
      },
      telephone: "+33387373036",
      url: "https://www.optiquequeuleu.com",
    },
    serviceType: "Tele-expertise ophtalmologique",
    areaServed: {
      "@type": "City",
      name: "Metz",
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl:
        "https://www.doctolib.fr/opticien/metz/optique-queuleu",
    },
    termsOfService:
      "Ordonnance delivree sous 48h ouvrees apres validation par un ophtalmologiste. Remboursement Securite sociale et mutuelle.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero Banner */}
      <section
        className="relative flex h-64 items-center bg-gradient-to-br from-[#005a7a] to-primary pt-20 sm:h-80"
        aria-label="Banniere Prescription en 48h"
      >
        <div className="absolute inset-0 bg-black/20" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h1 className="text-4xl font-bold uppercase tracking-[0.15em] text-white sm:text-5xl">
            Prescription en 48h
          </h1>
          <p className="mt-2 text-lg font-light tracking-wide text-white/90">
            Votre ordonnance lunettes &amp; lentilles, sans attendre
          </p>
          <nav
            className="mt-4 text-sm text-white/70"
            aria-label="Fil d'Ariane"
          >
            <Link href="/" className="hover:text-white">
              Accueil
            </Link>
            <span className="mx-2" aria-hidden="true">
              &gt;
            </span>
            <span className="text-white">Prescription 48h</span>
          </nav>
        </div>
      </section>

      {/* Impact Banner */}
      <section className="bg-primary py-10" aria-labelledby="impact-heading">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <p
            className="text-6xl font-extrabold text-white sm:text-7xl"
            aria-label="48 heures"
          >
            48<span className="text-3xl sm:text-4xl">h</span>
          </p>
          <p
            id="impact-heading"
            className="mt-2 text-lg font-semibold uppercase tracking-widest text-white/90"
          >
            pour obtenir votre ordonnance
          </p>
          <p className="mt-1 text-sm text-white/70">
            Au lieu de plusieurs mois d&apos;attente chez l&apos;ophtalmo
          </p>
        </div>
      </section>

      {/* Introduction 2 colonnes */}
      <section className="bg-white py-24" aria-labelledby="intro-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <ScrollReveal className="reveal-left">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                T&eacute;l&eacute;-expertise ophtalmologique
              </p>
              <h2
                id="intro-heading"
                className="mt-4 text-3xl font-bold uppercase tracking-wide text-foreground sm:text-4xl"
              >
                Fini les mois d&apos;attente
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Vous avez besoin d&apos;une nouvelle ordonnance mais impossible
                d&apos;obtenir un rendez-vous chez l&apos;ophtalmologiste avant
                plusieurs mois ? Gr&acirc;ce &agrave; la t&eacute;l&eacute;-expertise
                ophtalmologique, votre opticien r&eacute;alise un bilan visuel
                complet directement en{" "}
                <Link
                  href="/magasin"
                  className="font-semibold text-primary hover:underline"
                >
                  magasin
                </Link>
                .
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Les donn&eacute;es de votre examen sont transmises de
                mani&egrave;re s&eacute;curis&eacute;e &agrave; un
                ophtalmologiste qui analyse les r&eacute;sultats et
                d&eacute;livre une ordonnance officielle sous 48&nbsp;heures
                ouvr&eacute;es, valable pour{" "}
                <Link
                  href="/marques"
                  className="font-semibold text-primary hover:underline"
                >
                  vos lunettes
                </Link>{" "}
                et vos{" "}
                <Link
                  href="/lentilles"
                  className="font-semibold text-primary hover:underline"
                >
                  lentilles de contact
                </Link>
                .
              </p>
              <p className="mt-4 font-semibold text-primary">
                Remboursement S&eacute;curit&eacute; sociale et mutuelle assur&eacute;.
              </p>
            </ScrollReveal>
            <ScrollReveal className="reveal-right">
              <div className="flex flex-col gap-6 rounded-2xl border border-gray-100 bg-muted p-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-extrabold text-primary">
                      20 &agrave; 30 min
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Dur&eacute;e du bilan visuel en magasin
                    </p>
                  </div>
                </div>
                <div className="h-px bg-gray-200" />
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-extrabold text-primary">48h</p>
                    <p className="text-sm text-muted-foreground">
                      D&eacute;lai de r&eacute;ception de l&apos;ordonnance
                    </p>
                  </div>
                </div>
                <div className="h-px bg-gray-200" />
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-extrabold text-accent">100%</p>
                    <p className="text-sm text-muted-foreground">
                      Rembours&eacute; S&eacute;cu + mutuelle
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Processus en 3 etapes */}
      <section className="bg-muted py-24" aria-labelledby="process-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                Simple et rapide
              </p>
              <h2
                id="process-heading"
                className="mt-4 text-3xl font-bold uppercase tracking-wide text-foreground sm:text-4xl"
              >
                Comment &ccedil;a marche ?
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal className="stagger-children">
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {etapes.map((etape) => (
                <article
                  key={etape.numero}
                  className="card-3d rounded-2xl border border-gray-100 bg-white p-8 text-center"
                >
                  <div
                    className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary"
                    aria-hidden="true"
                  >
                    {etape.icon}
                  </div>
                  <p
                    className="mt-4 text-3xl font-extrabold text-primary/20"
                    aria-hidden="true"
                  >
                    {etape.numero}
                  </p>
                  <h3 className="mt-2 text-lg font-bold uppercase tracking-wide text-foreground">
                    {etape.titre}
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-accent">
                    {etape.duree}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {etape.description}
                  </p>
                </article>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Avantages */}
      <section className="bg-white py-24" aria-labelledby="advantages-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                Pourquoi choisir ce service ?
              </p>
              <h2
                id="advantages-heading"
                className="mt-4 text-3xl font-bold uppercase tracking-wide text-foreground sm:text-4xl"
              >
                Les avantages
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal className="stagger-children">
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {avantages.slice(0, 3).map((avantage) => (
                <article
                  key={avantage.titre}
                  className="card-3d rounded-2xl border border-gray-100 bg-white p-8 text-center"
                >
                  <div
                    className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary"
                    aria-hidden="true"
                  >
                    {avantage.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-bold uppercase tracking-wide text-foreground">
                    {avantage.titre}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {avantage.description}
                  </p>
                </article>
              ))}
            </div>
            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              {avantages.slice(3).map((avantage) => (
                <article
                  key={avantage.titre}
                  className="card-3d rounded-2xl border border-gray-100 bg-white p-8 text-center"
                >
                  <div
                    className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary"
                    aria-hidden="true"
                  >
                    {avantage.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-bold uppercase tracking-wide text-foreground">
                    {avantage.titre}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {avantage.description}
                  </p>
                </article>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* A savoir */}
      <section className="bg-muted py-24" aria-labelledby="limits-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                Transparence
              </p>
              <h2
                id="limits-heading"
                className="mt-4 text-3xl font-bold uppercase tracking-wide text-foreground sm:text-4xl"
              >
                &Agrave; savoir
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal className="stagger-children">
            <div className="mx-auto mt-16 max-w-4xl space-y-6">
              {limites.map((limite) => (
                <article
                  key={limite.titre}
                  className="flex items-start gap-4 rounded-xl border border-gray-100 bg-white p-6"
                >
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent"
                    aria-hidden="true"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">
                      {limite.titre}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {limite.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Cross-link banner */}
      <section className="bg-gradient-to-r from-primary to-primary-light py-12">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <p className="text-lg font-semibold text-white">
            D&eacute;couvrez &eacute;galement nos{" "}
            <Link
              href="/verres"
              className="underline decoration-white/50 underline-offset-4 hover:decoration-white"
              aria-label="Voir nos verres correcteurs"
            >
              verres correcteurs
            </Link>
            {" "}et nos{" "}
            <Link
              href="/marques"
              className="underline decoration-white/50 underline-offset-4 hover:decoration-white"
              aria-label="Voir nos marques de lunettes"
            >
              marques de lunettes
            </Link>
          </p>
          <p className="mt-2 text-sm text-white/80">
            Une fois votre ordonnance obtenue, nous vous accompagnons dans le
            choix de vos{" "}
            <Link
              href="/lentilles"
              className="underline decoration-white/50 underline-offset-4 hover:decoration-white"
              aria-label="En savoir plus sur nos lentilles"
            >
              lentilles
            </Link>{" "}
            ou de vos lunettes
          </p>
        </div>
      </section>

      {/* CTA Doctolib */}
      <section className="bg-white py-24" aria-labelledby="cta-heading">
        <ScrollReveal className="reveal-scale">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <h2
              id="cta-heading"
              className="text-3xl font-bold uppercase tracking-wide text-foreground sm:text-4xl"
            >
              Besoin d&apos;une ordonnance ?
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Prenez rendez-vous pour votre bilan visuel. Notre &eacute;quipe
              d&apos;opticiens dipl&ocirc;m&eacute;s r&eacute;alise votre examen
              complet et transmet les r&eacute;sultats &agrave; un
              ophtalmologiste. Vous recevez votre ordonnance sous 48&nbsp;heures
              ouvr&eacute;es. Visitez notre{" "}
              <Link
                href="/magasin"
                className="font-semibold text-primary hover:underline"
              >
                magasin &agrave; Metz
              </Link>{" "}
              ou{" "}
              <Link
                href="/contact"
                className="font-semibold text-primary hover:underline"
              >
                contactez-nous
              </Link>
              .
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="https://www.doctolib.fr/opticien/metz/optique-queuleu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
                aria-label="Prendre rendez-vous sur Doctolib pour une prescription en 48h"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Prendre RDV sur Doctolib
              </a>
              <a
                href="tel:+33387373036"
                className="inline-flex items-center gap-2 rounded-full border border-primary px-8 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
                aria-label="Appeler Optique Queuleu au 03 87 37 30 36"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                03 87 37 30 36
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
