import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "OOMADE",
  description:
    "OOMADE, la solution brevet\u00e9e d'impression 3D de montures de remplacement. Monture cass\u00e9e ? Repartez en 15 minutes avec une nouvelle monture imprim\u00e9e en magasin chez Optique Queuleu \u00e0 Metz.",
};

const etapes = [
  {
    numero: "01",
    titre: "Palpation",
    description:
      "L'opticien r\u00e9cup\u00e8re les donn\u00e9es de vos verres ou de votre monture cass\u00e9e avec son outil habituel.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    numero: "02",
    titre: "Personnalisation",
    description:
      "Configuration de votre monture via l'interface OOMADE : choix du design et de la couleur parmi une large gamme.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    numero: "03",
    titre: "Impression 3D",
    description:
      "Votre monture est imprim\u00e9e directement en magasin pendant que vous patientez. Le temps de prendre un caf\u00e9.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18.75 12h.008v.008h-.008V12zm-3 0h.008v.008h-.008V12z" />
      </svg>
    ),
  },
  {
    numero: "04",
    titre: "Assemblage",
    description:
      "Vos verres sont mont\u00e9s sur la nouvelle monture avec un kit de charni\u00e8res fourni. Vous repartez \u00e9quip\u00e9.",
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
    description:
      "Le service de d\u00e9pannage OOMADE est offert par votre opticien. Aucun frais, aucune surprise.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
  {
    titre: "\u00c9cologique",
    description:
      "Filament bio-sourc\u00e9 \u00e0 base d'amidon de ma\u00efs, recyclable. Une solution respectueuse de l'environnement.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438a2.253 2.253 0 01-1.699 2.567l-.053.012a9 9 0 01-3.828.065" />
      </svg>
    ),
  },
  {
    titre: "15 minutes",
    description:
      "De la palpation \u00e0 l'assemblage, tout se fait en 15 minutes. Juste le temps de prendre un caf\u00e9.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    titre: "Silmo d'Or 2024",
    description:
      "Laur\u00e9at du Silmo d'Or 2024 dans la cat\u00e9gorie innovation technologique en lunetterie.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.023 6.023 0 01-2.77.903m0 0a6.022 6.022 0 01-2.77-.903" />
      </svg>
    ),
  },
];

export default function OomadePage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative flex h-64 items-center pt-20 sm:h-80">
        <Image
          src="/images/produits/oomade.jpg"
          alt="OOMADE - Impression 3D de montures"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h1 className="text-4xl font-bold uppercase tracking-[0.15em] text-white sm:text-5xl">
            OOMADE
          </h1>
          <p className="mt-2 text-lg font-light tracking-wide text-white/90">
            Votre monture imprim&eacute;e en 3D, en 15 minutes
          </p>
          <nav className="mt-4 text-sm text-white/70">
            <Link href="/" className="hover:text-white">
              Accueil
            </Link>
            <span className="mx-2">&gt;</span>
            <span className="text-white">OOMADE</span>
          </nav>
        </div>
      </section>

      {/* Impact Banner */}
      <section className="bg-primary py-10">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <p className="text-5xl font-extrabold text-white sm:text-6xl">
            15<span className="text-2xl sm:text-3xl"> min</span>
          </p>
          <p className="mt-2 text-lg font-semibold uppercase tracking-widest text-white/90">
            Monture cass&eacute;e ? On la remplace.
          </p>
          <p className="mt-1 text-sm text-white/70">
            Juste le temps de prendre un caf&eacute;
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <ScrollReveal className="reveal-left">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                Service de d&eacute;pannage express
              </p>
              <SectionTitle>Fini le scotch et la colle</SectionTitle>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Votre monture est cass&eacute;e mais vos verres sont intacts ?
                Gr&acirc;ce &agrave; la technologie brevet&eacute;e OOMADE, nous
                imprimons une monture de remplacement directement en magasin,
                parfaitement adapt&eacute;e &agrave; vos verres existants.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Plus besoin de bricolage, de r&eacute;sine ou de ruban
                adh&eacute;sif. Vous repartez avec une vraie monture
                fonctionnelle en 15 minutes, le temps que votre monture
                d&eacute;finitive soit r&eacute;par&eacute;e ou
                remplac&eacute;e.
              </p>
              <p className="mt-4 font-semibold text-primary">
                Et c&apos;est enti&egrave;rement gratuit.
              </p>
            </ScrollReveal>
            <ScrollReveal className="reveal-right">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/images/produits/oomade.jpg"
                  alt="Impression 3D OOMADE en magasin"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Processus en 4 étapes */}
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
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
                Innovation r&eacute;compens&eacute;e
              </p>
              <SectionTitle>Pourquoi OOMADE ?</SectionTitle>
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

      {/* L'histoire OOMADE */}
      <section className="bg-muted py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <ScrollReveal className="reveal-left">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                Fond&eacute;e en 2022
              </p>
              <SectionTitle>Une startup fran&ccedil;aise innovante</SectionTitle>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                OOMADE a &eacute;t&eacute; cr&eacute;&eacute;e en 2022 par
                Michel Hodzaj et Paul-&Eacute;ric Robert, qui cumulent plus de
                40 ans d&apos;exp&eacute;rience dans les
                t&eacute;l&eacute;communications et l&apos;optique.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Leur id&eacute;e : transformer le service apr&egrave;s-vente en
                lunetterie gr&acirc;ce &agrave; l&apos;impression 3D. Fini les
                tubes de r&eacute;sine, fini l&apos;attente de plusieurs jours.
                Le d&eacute;pannage devient un moment spectaculaire que le client
                raconte autour de lui.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                R&eacute;compens&eacute;e par le{" "}
                <strong className="text-foreground">
                  Silmo d&apos;Or 2024
                </strong>{" "}
                dans la cat&eacute;gorie innovation technologique, OOMADE
                &eacute;quipe d&eacute;j&agrave; plus de 130 magasins en France.
              </p>
            </ScrollReveal>
            <ScrollReveal className="reveal-right">
              <div className="flex flex-col items-center gap-6 rounded-2xl border border-gray-100 bg-white p-10">
                <div className="relative h-16 w-40">
                  <Image
                    src="/images/marques/oomade.png"
                    alt="OOMADE"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="h-px w-16 bg-gray-200" />
                <div className="relative h-16 w-40">
                  <Image
                    src="/images/verriers/zeiss.jpg"
                    alt="ZEISS"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="mt-2 text-center text-sm leading-relaxed text-muted-foreground">
                  En partenariat avec ZEISS, leader mondial de l&apos;optique de
                  pr&eacute;cision
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Lien Vision Minute */}
      <section className="bg-gradient-to-r from-primary to-primary-light py-12">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <p className="text-lg font-semibold text-white">
            Retrouvez ce service chez Optique Queuleu via{" "}
            <Link
              href="/vision-minute"
              className="underline decoration-white/50 underline-offset-4 hover:decoration-white"
            >
              Vision Minute
            </Link>
          </p>
          <p className="mt-2 text-sm text-white/80">
            Le r&eacute;seau d&apos;opticiens &eacute;quip&eacute;s OOMADE pour
            un d&eacute;pannage imm&eacute;diat
          </p>
        </div>
      </section>

      {/* CTA Doctolib */}
      <section className="bg-white py-24">
        <ScrollReveal className="reveal-scale">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <SectionTitle>Monture cass&eacute;e ?</SectionTitle>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Passez nous voir ou prenez rendez-vous. Notre &eacute;quipe
              imprime votre monture de remplacement en 15 minutes.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="https://www.doctolib.fr/opticien/metz/optique-queuleu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
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
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
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
