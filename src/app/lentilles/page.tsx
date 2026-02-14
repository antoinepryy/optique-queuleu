import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Lentilles de Contact à Metz | Adaptation & Suivi Personnalisé | Optique Queuleu",
  description:
    "Opticien spécialisé en lentilles de contact à Metz. Adaptation personnalisée de lentilles journalières, mensuelles et rigides. Marques Alcon, CooperVision, Bausch & Lomb. Pré-commande et suivi expert.",
  openGraph: {
    title: "Lentilles de Contact à Metz | Optique Queuleu",
    description:
      "Adaptation personnalisée de lentilles de contact à Metz. Lentilles journalières, mensuelles et rigides. Marques premium et suivi expert.",
    url: "https://www.optiquequeuleu.com/lentilles",
    siteName: "Optique Queuleu",
    images: [
      {
        url: "/images/produits/lentilles.webp",
        width: 1200,
        height: 630,
        alt: "Lentilles de contact chez Optique Queuleu à Metz",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lentilles de Contact à Metz | Optique Queuleu",
    description:
      "Adaptation personnalisée de lentilles de contact à Metz. Lentilles journalières, mensuelles et rigides. Marques premium et suivi expert.",
    images: ["/images/produits/lentilles.webp"],
  },
};

const fabricants = [
  "Alcon",
  "Bausch & Lomb",
  "CooperVision",
  "Johnson & Johnson",
  "Menicon",
  "Ophtalmic",
];

export default function LentillesPage() {
  return (
    <>
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Adaptation de lentilles de contact",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Optique Queuleu",
              "image": "https://www.optiquequeuleu.com/images/produits/lentilles.webp",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "28 Rue de Queuleu",
                "addressLocality": "Metz",
                "postalCode": "57070",
                "addressCountry": "FR"
              },
              "telephone": "+33387373036",
              "url": "https://www.optiquequeuleu.com"
            },
            "areaServed": {
              "@type": "City",
              "name": "Metz"
            },
            "description": "Service d'adaptation personnalisée de lentilles de contact à Metz. Lentilles journalières, mensuelles et rigides de marques premium : Alcon, Bausch & Lomb, CooperVision, Johnson & Johnson.",
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock"
            }
          }),
        }}
      />

      {/* Hero Banner */}
      <section className="relative flex h-64 items-center pt-20 sm:h-80" aria-label="Bannière lentilles de contact">
        <Image
          src="/images/produits/lentilles.webp"
          alt="Lentilles de contact souples et rigides disponibles chez Optique Queuleu à Metz"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h1 className="text-4xl font-bold uppercase tracking-[0.15em] text-white sm:text-5xl">
            Lentilles de contact à Metz
          </h1>
          <nav className="mt-4 text-sm text-white/70" aria-label="Fil d'Ariane">
            <Link href="/" className="hover:text-white">
              Accueil
            </Link>
            <span className="mx-2">&gt;</span>
            <span className="text-white">Lentilles</span>
          </nav>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-white py-24" aria-labelledby="intro-lentilles">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <SectionTitle id="intro-lentilles">Pré-commandez vos lentilles de contact</SectionTitle>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Pour faciliter votre renouvellement de lentilles de contact, nous vous
                proposons un service de pré-commande en ligne. Renseignez vos
                informations et votre ordonnance, nous préparons votre commande
                pour un retrait rapide en magasin à Metz. Notre équipe d'opticiens diplômés vous garantit un{" "}
                <Link href="/magasin" className="text-primary hover:underline">
                  service personnalisé et expert
                </Link>
                .
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Fabricants */}
      <section className="bg-muted py-24" aria-labelledby="fabricants-lentilles">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <h2 id="fabricants-lentilles" className="text-2xl font-bold uppercase tracking-wide text-primary">
                Marques de lentilles de contact premium
              </h2>
              <p className="mt-4 text-muted-foreground">
                Nous proposons les meilleures marques de lentilles journalières, mensuelles et rigides
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal className="stagger-children">
            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6" role="list" aria-label="Liste des fabricants de lentilles">
              {fabricants.map((fab) => (
                <div
                  key={fab}
                  role="listitem"
                  className="flex h-20 items-center justify-center rounded-xl border border-gray-100 bg-white px-4"
                >
                  <span className="text-center text-sm font-medium text-foreground">
                    {fab}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24" aria-labelledby="contact-lentilles">
        <ScrollReveal className="reveal-scale">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <SectionTitle id="contact-lentilles">Adaptation de lentilles à Metz</SectionTitle>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Contactez-nous par téléphone ou{" "}
              <Link href="/magasin" className="text-primary hover:underline">
                passez directement en magasin
              </Link>{" "}
              pour une adaptation personnalisée de vos lentilles de contact. Nos
              opticiens diplômés vous accompagnent dans le choix du type de lentilles le
              mieux adapté à votre correction et à votre mode de vie : lentilles journalières,
              mensuelles, toriques ou rigides. Nous proposons également un{" "}
              <Link href="/verres" className="text-primary hover:underline">
                large choix de verres correcteurs
              </Link>
              .
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="tel:+33387373036"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
                aria-label="Appeler Optique Queuleu au 03 87 37 30 36"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                03 87 37 30 36
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-primary px-8 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
