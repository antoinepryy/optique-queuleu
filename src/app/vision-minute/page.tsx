import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Vision Minute",
  description:
    "Service OOMADE d'impression 3D de monture de remplacement. Monture cassée ? Repartez en 15 minutes avec une monture imprimée en 3D. Gratuit chez Optique Queuleu.",
};

const etapes = [
  {
    numero: "01",
    titre: "Palpation & Mesure",
    description:
      "L'opticien récupère vos verres et utilise le logiciel OOMADE pour capturer les dimensions exactes. Un modèle 3D de votre future monture est généré automatiquement.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    numero: "02",
    titre: "Impression 3D",
    description:
      "Une monture de remplacement est imprimée directement en magasin, en quelques minutes seulement. Le matériau bio-sourcé (amidon de maïs) est recyclable jusqu'à 5 fois.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18.75 12h.008v.008h-.008V12zm-3 0h.008v.008h-.008V12z" />
      </svg>
    ),
  },
  {
    numero: "03",
    titre: "Montage & Départ",
    description:
      "L'opticien monte vos verres existants sur la nouvelle monture imprimée. Vous repartez avec vos lunettes fonctionnelles en 15 minutes maximum.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
];

const avantages = [
  {
    titre: "Gratuit",
    description: "Le service est entièrement gratuit pour le client. Aucun frais, aucune surprise.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
  {
    titre: "Écologique",
    description: "Matériau bio-sourcé à base d'amidon de maïs, recyclable jusqu'à 5 fois.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438a2.253 2.253 0 01-1.699 2.567l-.053.012a9 9 0 01-3.828.065" />
      </svg>
    ),
  },
  {
    titre: "Rapide",
    description: "Le temps de prendre un café : 10 à 15 minutes suffisent pour repartir équipé.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    titre: "Qualité ZEISS",
    description: "Un service développé en partenariat avec ZEISS, leader mondial de l'optique de précision.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
  },
];

const casUsage = [
  {
    titre: "Monture cassée",
    description: "Votre monture s'est cassée ? Pas de panique, nous imprimons une monture de remplacement en quelques minutes.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.16-2.58a1.994 1.994 0 010-3.18L11.42 6.83a1.994 1.994 0 011.16 0l5.16 2.58a1.994 1.994 0 010 3.18l-5.16 2.58a1.994 1.994 0 01-1.16 0z" />
      </svg>
    ),
  },
  {
    titre: "Branches cassées",
    description: "Une branche de vos lunettes a cédé ? Nous pouvons imprimer une monture adaptée à vos verres immédiatement.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.16-2.58a1.994 1.994 0 010-3.18L11.42 6.83a1.994 1.994 0 011.16 0l5.16 2.58a1.994 1.994 0 010 3.18l-5.16 2.58a1.994 1.994 0 01-1.16 0z" />
      </svg>
    ),
  },
  {
    titre: "Urgence voyage",
    description: "Vous partez en voyage et votre monture lâche au dernier moment ? Repartez équipé en 15 minutes.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
      </svg>
    ),
  },
  {
    titre: "Événement important",
    description: "Examen, entretien, mariage... Vous avez besoin de voir clair pour un moment important ? Nous sommes là.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
];

export default function VisionMinutePage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative flex h-64 items-center pt-20 sm:h-80">
        <Image
          src="/images/produits/oomade.jpg"
          alt="Vision Minute - Impression 3D de montures"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h1 className="text-4xl font-bold uppercase tracking-[0.15em] text-white sm:text-5xl">
            Vision Minute
          </h1>
          <nav className="mt-4 text-sm text-white/70">
            <Link href="/" className="hover:text-white">
              Accueil
            </Link>
            <span className="mx-2">&gt;</span>
            <span className="text-white">Vision Minute</span>
          </nav>
        </div>
      </section>

      {/* Impact Banner */}
      <section className="bg-primary py-10">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <p className="text-6xl font-extrabold text-white sm:text-7xl">
            15<span className="text-3xl sm:text-4xl"> min</span>
          </p>
          <p className="mt-2 text-lg font-semibold uppercase tracking-widest text-white/90">
            chrono pour repartir avec vos lunettes
          </p>
          <p className="mt-1 text-sm text-white/70">
            Le temps de prendre un caf&eacute;
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <ScrollReveal className="reveal-left">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                Service exclusif OOMADE
              </p>
              <SectionTitle>Monture cass&eacute;e ? On s&apos;en occupe.</SectionTitle>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Gr&acirc;ce &agrave; la technologie OOMADE d&apos;impression 3D, nous
                fabriquons une monture de remplacement directement en magasin. Vos
                verres existants sont mont&eacute;s sur la nouvelle monture et vous
                repartez en quelques minutes seulement.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Cette monture provisoire (utilisable jusqu&apos;&agrave; 30 jours) vous
                permet de continuer &agrave; voir clairement en attendant la
                r&eacute;paration ou le remplacement d&eacute;finitif de votre monture.
              </p>
              <p className="mt-4 font-semibold text-primary">
                Et le meilleur dans tout &ccedil;a ? C&apos;est enti&egrave;rement gratuit.
              </p>
            </ScrollReveal>
            <ScrollReveal className="reveal-right">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/images/produits/oomade.jpg"
                  alt="Service OOMADE impression 3D"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Processus en 3 étapes */}
      <section className="bg-muted py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                Simple et rapide
              </p>
              <SectionTitle>Comment &ccedil;a marche ?</SectionTitle>
            </div>
          </ScrollReveal>

          <ScrollReveal className="stagger-children">
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {etapes.map((etape) => (
                <div
                  key={etape.numero}
                  className="card-3d rounded-2xl border border-gray-100 bg-white p-8 text-center"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    {etape.icon}
                  </div>
                  <p className="mt-4 text-3xl font-extrabold text-primary/20">
                    {etape.numero}
                  </p>
                  <h3 className="mt-2 text-lg font-bold uppercase tracking-wide text-foreground">
                    {etape.titre}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {etape.description}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Avantages */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                Pourquoi choisir Vision Minute ?
              </p>
              <SectionTitle>Les avantages</SectionTitle>
            </div>
          </ScrollReveal>

          <ScrollReveal className="stagger-children">
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {avantages.map((avantage) => (
                <div
                  key={avantage.titre}
                  className="card-3d rounded-2xl border border-gray-100 bg-white p-8 text-center"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                    {avantage.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-bold uppercase tracking-wide text-foreground">
                    {avantage.titre}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {avantage.description}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* C'est pour vous si... */}
      <section className="bg-muted py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                Situations d&apos;urgence
              </p>
              <SectionTitle>C&apos;est pour vous si...</SectionTitle>
            </div>
          </ScrollReveal>

          <ScrollReveal className="stagger-children">
            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {casUsage.map((cas) => (
                <div
                  key={cas.titre}
                  className="flex items-start gap-4 rounded-xl border border-gray-100 bg-white p-6"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    {cas.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{cas.titre}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {cas.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Partenariat ZEISS / OOMADE */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col items-center justify-center gap-8 rounded-2xl border border-gray-100 bg-muted p-8 sm:flex-row sm:gap-16">
              <div className="text-center sm:text-left">
                <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                  En partenariat avec
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  La technologie OOMADE est d&eacute;velopp&eacute;e en partenariat avec ZEISS,
                  leader mondial de l&apos;optique de pr&eacute;cision.
                </p>
              </div>
              <div className="flex items-center gap-8">
                <div className="relative h-12 w-28">
                  <Image
                    src="/images/verriers/zeiss.jpg"
                    alt="ZEISS"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative h-12 w-28">
                  <Image
                    src="/images/marques/oomade.png"
                    alt="OOMADE"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Doctolib */}
      <section className="bg-muted py-24">
        <ScrollReveal className="reveal-scale">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <SectionTitle>Monture cass&eacute;e ?</SectionTitle>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Prenez rendez-vous ou passez directement en magasin. Notre
              &eacute;quipe vous accueille et r&eacute;alise votre monture de
              remplacement en 15 minutes.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="https://www.doctolib.fr/opticien/metz/optique-queuleu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Prendre RDV sur Doctolib
              </a>
              <a
                href="tel:+33387373036"
                className="inline-flex items-center gap-2 rounded-full border border-primary px-8 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
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
