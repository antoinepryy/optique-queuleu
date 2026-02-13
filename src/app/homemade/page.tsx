import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "HomeMade par OOMADE",
  description:
    "Créez vos lunettes sur mesure grâce à la technologie OOMADE d'impression 3D. Montures personnalisées uniques chez Optique Queuleu à Metz.",
};

const etapes = [
  {
    numero: "01",
    titre: "Consultation",
    description:
      "Échangez avec votre opticien pour définir vos envies, votre style et vos besoins visuels. Nous scannons votre visage pour un ajustement parfait.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
  {
    numero: "02",
    titre: "Conception",
    description:
      "Choisissez chaque détail : forme, matériau, couleur, finitions. Le logiciel OOMADE génère un modèle 3D de votre future monture.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    numero: "03",
    titre: "Fabrication",
    description:
      "Votre monture est imprimée en 3D directement en magasin grâce à la technologie OOMADE. Matériau bio-sourcé, recyclable jusqu'à 5 fois.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.16-2.58a1.994 1.994 0 010-3.18L11.42 6.83a1.994 1.994 0 011.16 0l5.16 2.58a1.994 1.994 0 010 3.18l-5.16 2.58a1.994 1.994 0 01-1.16 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.16-2.58M11.42 15.17V21m0-5.83l5.16-2.58" />
      </svg>
    ),
  },
  {
    numero: "04",
    titre: "Finition",
    description:
      "Montage de vos verres, ajustements précis et derniers réglages. Vos lunettes parfaites sont prêtes à être portées.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
];

const personnalisations = [
  {
    categorie: "Formes",
    description: "Rondes, carrées, papillon, pilote, oversize, vintage... Trouvez la forme qui sublime votre visage.",
  },
  {
    categorie: "Matériaux",
    description: "Acétate, titane, bois, corne, matériaux bio-sourcés... Chaque matière apporte son caractère unique.",
  },
  {
    categorie: "Couleurs",
    description: "Classiques, audacieuses, dégradées, bicolores... Exprimez votre personnalité à travers les teintes.",
  },
  {
    categorie: "Gravures",
    description: "Initiales, motifs, dates... Ajoutez une touche personnelle discrète ou affirmée à votre monture.",
  },
  {
    categorie: "Verres",
    description: "Correctifs, solaires, photochromiques, filtres lumière bleue... Associés à la monture de vos rêves.",
  },
  {
    categorie: "Détails artisanaux",
    description: "Charnières, embouts, plaquettes... Chaque détail est pensé pour votre confort et votre style.",
  },
];

const avantages = [
  {
    titre: "Unique",
    description:
      "Vos lunettes sont une pièce unique, créée selon vos envies. Aucune autre paire n'existera jamais à l'identique.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a48.667 48.667 0 00-1.488 6.11M12 16.5a3.75 3.75 0 110-7.5 3.75 3.75 0 010 7.5zM12 16.5V21m-4.773-4.227l-3.474 3.474M16.773 16.773l3.474 3.474" />
      </svg>
    ),
  },
  {
    titre: "Savoir-faire",
    description:
      "La technologie OOMADE d'impression 3D associée à l'expertise de nos opticiens pour des montures d'exception, réalisées dans les règles de l'art.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.16-2.58a1.994 1.994 0 010-3.18L11.42 6.83a1.994 1.994 0 011.16 0l5.16 2.58a1.994 1.994 0 010 3.18l-5.16 2.58a1.994 1.994 0 01-1.16 0z" />
      </svg>
    ),
  },
  {
    titre: "Confort",
    description:
      "Conçue sur mesure pour votre visage, la monture épouse parfaitement votre morphologie. Le confort est incomparable.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
  },
];

export default function HomeMadePage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative flex h-64 items-center pt-20 sm:h-80">
        <Image
          src="/images/boutique/choix.jpg"
          alt="HomeMade - Lunettes sur mesure"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h1 className="text-4xl font-bold uppercase tracking-[0.15em] text-white sm:text-5xl">
            HomeMade
          </h1>
          <nav className="mt-4 text-sm text-white/70">
            <Link href="/" className="hover:text-white">
              Accueil
            </Link>
            <span className="mx-2">&gt;</span>
            <span className="text-white">HomeMade</span>
          </nav>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                Technologie OOMADE
              </p>
              <SectionTitle>Des lunettes uniques, comme vous</SectionTitle>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Chez Optique Queuleu, nous croyons que vos lunettes doivent
                &ecirc;tre le reflet de votre personnalit&eacute;. Gr&acirc;ce
                &agrave; la technologie OOMADE d&apos;impression 3D, cr&eacute;ez
                des montures enti&egrave;rement personnalis&eacute;es : forme,
                mati&egrave;re, couleur, finitions... Chaque d&eacute;tail est
                con&ccedil;u sur mesure pour vous.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Le syst&egrave;me OOMADE permet de concevoir et imprimer en 3D
                une monture unique, fabriqu&eacute;e &agrave; partir de mat&eacute;riaux
                bio-sourc&eacute;s (amidon de ma&iuml;s) et recyclables
                jusqu&apos;&agrave; 5 fois. Un savoir-faire technologique au service
                de votre cr&eacute;ativit&eacute;.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Processus en 4 étapes */}
      <section className="bg-muted py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                Un accompagnement complet
              </p>
              <SectionTitle>Le processus de cr&eacute;ation</SectionTitle>
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

      {/* Section Personnalisation */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-start gap-16 lg:grid-cols-2">
            <ScrollReveal className="reveal-left">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                Vos choix, votre style
              </p>
              <SectionTitle>Personnalisation</SectionTitle>
              <div className="mt-8 space-y-6">
                {personnalisations.map((item) => (
                  <div key={item.categorie} className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <svg
                        className="h-4 w-4 text-primary"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">
                        {item.categorie}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal className="reveal-right">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-square overflow-hidden rounded-2xl">
                  <Image
                    src="/images/boutique/interieur-1.jpg"
                    alt="Sélection de montures"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-2xl">
                  <Image
                    src="/images/boutique/interieur-4.jpg"
                    alt="Détails artisanaux"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-2xl">
                  <Image
                    src="/images/produits/collection.jpg"
                    alt="Matériaux de qualité"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-2xl">
                  <Image
                    src="/images/boutique/optique.jpg"
                    alt="Finitions personnalisées"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pourquoi HomeMade */}
      <section className="bg-muted py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                L&apos;excellence sur mesure
              </p>
              <SectionTitle>Pourquoi HomeMade ?</SectionTitle>
            </div>
          </ScrollReveal>

          <ScrollReveal className="stagger-children">
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {avantages.map((avantage) => (
                <div
                  key={avantage.titre}
                  className="card-3d rounded-2xl border border-gray-100 bg-white p-8 text-center"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    {avantage.icon}
                  </div>
                  <h3 className="mt-6 text-lg font-bold uppercase tracking-wide text-foreground">
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

      {/* Partenariat OOMADE / ZEISS */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col items-center justify-center gap-8 rounded-2xl border border-gray-100 bg-muted p-8 sm:flex-row sm:gap-16">
              <div className="text-center sm:text-left">
                <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                  Technologie OOMADE
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  HomeMade utilise la technologie brevet&eacute;e OOMADE
                  d&apos;impression 3D, d&eacute;velopp&eacute;e en partenariat avec
                  ZEISS, leader mondial de l&apos;optique de pr&eacute;cision.
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
      <section className="bg-white py-24">
        <ScrollReveal className="reveal-scale">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <SectionTitle>Cr&eacute;ez vos lunettes sur mesure</SectionTitle>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Prenez rendez-vous avec nos opticiens pour d&eacute;marrer la
              cr&eacute;ation de vos lunettes personnalis&eacute;es. Ensemble,
              nous donnerons vie &agrave; la monture qui vous ressemble.
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
