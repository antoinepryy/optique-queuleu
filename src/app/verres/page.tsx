import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Verres Optiques Metz | ZEISS, Essilor, Seiko | Optique Queuleu",
  description:
    "Verres optiques haut de gamme à Metz : ZEISS, Essilor, Seiko, Novacel. Verres progressifs, unifocaux, anti-lumière bleue. Expertise et personnalisation chez Optique Queuleu.",
  keywords: [
    "verres optiques Metz",
    "ZEISS Metz",
    "Essilor Metz",
    "Seiko verres",
    "verres progressifs",
    "verres unifocaux",
    "anti-lumière bleue",
    "opticien Metz",
    "Novacel Mega Optic",
    "verres sur mesure"
  ],
  openGraph: {
    title: "Verres Optiques Haut de Gamme | Optique Queuleu Metz",
    description:
      "Découvrez nos verres ZEISS, Essilor, Seiko et Novacel. Solutions personnalisées pour votre vision à Metz.",
    url: "https://www.optiquequeuleu.com/verres",
    siteName: "Optique Queuleu",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/verriers/bandeau-marque.webp",
        width: 1200,
        height: 630,
        alt: "Verres optiques Optique Queuleu Metz"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Verres Optiques Metz | ZEISS, Essilor, Seiko",
    description:
      "Verres optiques haut de gamme : ZEISS, Essilor, Seiko, Novacel. Optique Queuleu à Metz.",
    images: ["/images/verriers/bandeau-marque.webp"]
  }
};

export default function VerresPage() {
  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Verres Optiques Optique Queuleu",
    "description": "Nos partenaires verriers de qualité supérieure",
    "itemListElement": [
      {
        "@type": "Product",
        "position": 1,
        "name": "Verres ZEISS",
        "description": "Verres optiques ZEISS de haute précision : innovation, qualité et personnalisation pour une vision exceptionnelle.",
        "brand": {
          "@type": "Brand",
          "name": "ZEISS"
        },
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "LocalBusiness",
            "name": "Optique Queuleu",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Metz",
              "addressCountry": "FR"
            }
          }
        }
      },
      {
        "@type": "Product",
        "position": 2,
        "name": "Verres Essilor",
        "description": "Verres Essilor, leader mondial : innovation constante pour améliorer votre santé visuelle et votre qualité de vie.",
        "brand": {
          "@type": "Brand",
          "name": "Essilor"
        },
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "LocalBusiness",
            "name": "Optique Queuleu",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Metz",
              "addressCountry": "FR"
            }
          }
        }
      },
      {
        "@type": "Product",
        "position": 3,
        "name": "Verres Seiko",
        "description": "Verres progressifs Seiko adaptés au mode de vie digital, fabrication française, certification Origine France Garantie.",
        "brand": {
          "@type": "Brand",
          "name": "Seiko"
        },
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "LocalBusiness",
            "name": "Optique Queuleu",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Metz",
              "addressCountry": "FR"
            }
          }
        }
      },
      {
        "@type": "Product",
        "position": 4,
        "name": "Verres Novacel Mega Optic",
        "description": "Verres Novacel Mega Optic : qualité, engagement environnemental ISO 14001, matériau recyclable à l'infini.",
        "brand": {
          "@type": "Brand",
          "name": "Novacel Mega Optic"
        },
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "LocalBusiness",
            "name": "Optique Queuleu",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Metz",
              "addressCountry": "FR"
            }
          }
        }
      }
    ]
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Banner */}
      <section className="relative flex h-64 items-center pt-20 sm:h-80" aria-label="Bannière verres optiques">
        <Image
          src="/images/verriers/bandeau-marque.webp"
          alt="Verres optiques de qualité supérieure - ZEISS, Essilor, Seiko, Novacel - Optique Queuleu Metz"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h1 className="text-4xl font-bold uppercase tracking-[0.15em] text-white sm:text-5xl">
            Verres Optiques Haut de Gamme
          </h1>
          <nav className="mt-4 text-sm text-white/70" aria-label="Fil d'Ariane">
            <Link href="/" className="hover:text-white">
              Accueil
            </Link>
            <span className="mx-2">&gt;</span>
            <span className="text-white">Verres</span>
          </nav>
        </div>
      </section>

      {/* ZEISS */}
      <section className="bg-white py-24" aria-labelledby="zeiss-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-start gap-16 lg:grid-cols-2">
            <ScrollReveal className="reveal-left">
              <h2 id="zeiss-heading" className="text-3xl font-bold text-foreground">
                Verres ZEISS Metz : Innovation et Précision Optique
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Chez <Link href="/magasin" className="text-primary hover:underline">Optique Queuleu à Metz</Link>, notre priorité absolue est de vous offrir
                une vision exceptionnelle et une expérience client inégalée.
                C&apos;est pourquoi nous sommes ravis de vous annoncer notre
                partenariat avec ZEISS, un leader mondial reconnu dans les verres optiques.
              </p>
              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-primary">
                    Innovation et Expertise depuis 170 ans
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    ZEISS est à la pointe de l&apos;innovation depuis plus de
                    170 ans. Leur engagement envers la recherche et le
                    développement se traduit par des verres progressifs, unifocaux et
                    spécialisés de haute technologie qui répondent aux besoins spécifiques
                    de chaque porteur de lunettes.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary">
                    Qualité et Précision Optique Inégalées
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Les verres ZEISS sont synonymes de précision et de qualité.
                    Grâce à des technologies de pointe, ils offrent une clarté et
                    une netteté inégalées, vous permettant de profiter d&apos;une
                    vision parfaite dans toutes les situations.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary">
                    Verres Sur Mesure et Personnalisation
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    ZEISS propose des solutions personnalisées adaptées à votre
                    style de vie. Que vous ayez besoin de verres pour la
                    conduite, le travail sur ordinateur, ou des activités en
                    extérieur, nous avons les <Link href="/marques" className="text-primary hover:underline">produits optiques</Link> qu&apos;il vous faut.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal className="reveal-right">
              <div className="flex items-center justify-center rounded-2xl bg-muted p-12">
                <Image
                  src="/images/verriers/zeiss.jpg"
                  alt="Logo ZEISS - Verres optiques haute précision disponibles chez Optique Queuleu Metz"
                  width={300}
                  height={150}
                  className="h-auto w-full max-w-[300px] object-contain"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Essilor */}
      <section className="bg-muted py-24" aria-labelledby="essilor-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-start gap-16 lg:grid-cols-2">
            <ScrollReveal className="reveal-left">
              <div className="flex items-center justify-center rounded-2xl bg-white p-12 lg:order-first">
                <Image
                  src="/images/verriers/essilor-logo.png"
                  alt="Logo Essilor - Leader mondial des verres optiques - Optique Queuleu Metz"
                  width={300}
                  height={150}
                  className="h-auto w-full max-w-[300px] object-contain"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal className="reveal-right">
              <h2 id="essilor-heading" className="text-3xl font-bold text-foreground">
                Verres Essilor Metz : Leader Mondial de la Correction Visuelle
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Leader dans la production de verres par sa qualité et sa
                technique constamment en avance sur son temps, Essilor est un
                partenaire de choix pour la qualité de leurs verres. <Link href="/magasin" className="text-primary hover:underline">Optique
                Queuleu</Link> est fier de vous faire découvrir ses spécificités.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Faire le choix des solutions Essilor, ce n&apos;est pas
                seulement choisir le leader mondial des verres de lunettes et verres progressifs.
                C&apos;est aussi choisir les verres d&apos;une entreprise
                engagée et porteuse d&apos;une mission : améliorer la vue pour
                améliorer la vie. De notre département Recherche et
                Développement, qui s&apos;évertue à améliorer la correction
                visuelle et la protection de votre vue par ses innovations
                constantes, aux services dédiés qui vous conseillent et vous
                accompagnent jour après jour pour trouver la solution qui vous
                conviendra le mieux&hellip; C&apos;est le tout Essilor qui
                s&apos;engage en faveur de votre santé visuelle.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Seiko */}
      <section className="bg-white py-24" aria-labelledby="seiko-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-start gap-16 lg:grid-cols-2">
            <ScrollReveal className="reveal-left">
              <h2 id="seiko-heading" className="text-3xl font-bold text-foreground">
                Verres Seiko Metz : Progressifs Made in France
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Nos yeux subissent de plus en plus l&apos;exposition aux outils
                digitaux et à la lumière bleue. C&apos;est pourquoi Seiko a décidé de repenser les
                verres progressifs pour qu&apos;ils s&apos;adaptent au mieux à
                nos styles de vie numériques. Il renforce son intérêt pour
                l&apos;éco-responsabilité et la qualité de ses services, en
                proposant des verres disponibles en fabrication française et en
                obtenant la certification Origine France Garantie.
              </p>
              <h3 className="mt-6 text-lg font-semibold text-primary">
                Garantie 3 ans et Qualité Japonaise
              </h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Il place la précision au c&oelig;ur de sa stratégie, c&apos;est
                pourquoi il offre 3 ans de garantie sur tous les types de
                verre*. Faire le choix Seiko, c&apos;est faire confiance aux 95%
                des 3,5 millions de Français(es) ayant déjà adopté ces verres progressifs.
              </p>
              <p className="mt-4 text-xs text-muted-foreground">
                *sous réserve de posséder la carte d&apos;authenticité.
              </p>
            </ScrollReveal>
            <ScrollReveal className="reveal-right">
              <div className="flex items-center justify-center rounded-2xl bg-muted p-12">
                <Image
                  src="/images/marques/seiko.png"
                  alt="Logo Seiko - Verres progressifs Made in France Origine France Garantie - Optique Queuleu Metz"
                  width={300}
                  height={150}
                  className="h-auto w-full max-w-[300px] object-contain"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Novacel Mega Optic */}
      <section className="bg-muted py-24" aria-labelledby="novacel-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal className="reveal-scale">
            <div className="mx-auto max-w-3xl text-center">
              <h2 id="novacel-heading" className="text-3xl font-bold text-foreground">
                Verres Novacel Mega Optic : Éco-Responsabilité et Innovation
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Mega Optic, c&apos;est avant tout une entreprise à taille humaine,
                qui place les valeurs de simplicité, de convivialité et de
                disponibilité au c&oelig;ur de son travail. En plus de proposer
                des verres qualitatifs, il dispose de la norme ISO 14001,
                témoignant d&apos;un engagement en faveur de l&apos;environnement
                et d&apos;actes d&apos;amélioration concernant celui-ci.
              </p>
              <h3 className="mt-6 text-lg font-semibold text-primary">
                Premier Verrier à Proposer un Matériau Recyclable à l&apos;Infini
              </h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Parce que la qualité de la vue est primordiale, il était important
                pour nous de choisir un partenaire sérieux et fiable, tel que Mega
                Optic. Avec plus de 17 verres différents, il devient un
                laboratoire innovant dans la filière optique, et le premier à
                proposer un matériau recyclable à l&apos;infini.
              </p>
              <p className="mt-8">
                <Link
                  href="/contact"
                  className="inline-block rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
                >
                  Prendre rendez-vous pour vos verres
                </Link>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Internal Links Section for SEO */}
      <section className="bg-white py-16" aria-label="Nos services optiques">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-muted p-6 transition-shadow hover:shadow-lg">
              <h3 className="text-lg font-semibold text-foreground">
                Nos Montures et Marques
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Découvrez notre sélection de 60 marques de lunettes haut de gamme pour accompagner vos verres.
              </p>
              <Link
                href="/marques"
                className="mt-4 inline-block text-sm font-semibold text-primary hover:underline"
              >
                Voir nos marques →
              </Link>
            </div>
            <div className="rounded-lg border border-muted p-6 transition-shadow hover:shadow-lg">
              <h3 className="text-lg font-semibold text-foreground">
                Notre Magasin à Metz
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Visitez notre magasin pour un essayage personnalisé et des conseils d&apos;experts.
              </p>
              <Link
                href="/magasin"
                className="mt-4 inline-block text-sm font-semibold text-primary hover:underline"
              >
                En savoir plus →
              </Link>
            </div>
            <div className="rounded-lg border border-muted p-6 transition-shadow hover:shadow-lg">
              <h3 className="text-lg font-semibold text-foreground">
                Lentilles de Contact
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Nous proposons également des lentilles de contact adaptées à votre vue.
              </p>
              <Link
                href="/lentilles"
                className="mt-4 inline-block text-sm font-semibold text-primary hover:underline"
              >
                Découvrir nos lentilles →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
