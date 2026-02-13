import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Blog Optique Metz | Conseils Lunettes & Actualités | Optique Queuleu",
  description:
    "Découvrez les actualités, conseils et tendances lunettes sur le blog d'Optique Queuleu à Metz : nouvelles collections, innovations optiques, astuces entretien lunettes et lentilles.",
  openGraph: {
    title: "Blog Optique Metz | Conseils Lunettes & Actualités | Optique Queuleu",
    description:
      "Découvrez les actualités, conseils et tendances lunettes sur le blog d'Optique Queuleu à Metz : nouvelles collections, innovations optiques, astuces entretien lunettes et lentilles.",
    type: "website",
    locale: "fr_FR",
    url: "https://www.optiquequeuleu.com/blog",
    siteName: "Optique Queuleu",
  },
};

const articles = [
  {
    title:
      "Nouvelle façade, nouvelles collections : découvrez Optique Queuleu autrement",
    date: "11 septembre 2025",
    dateISO: "2025-09-11",
    excerpt:
      "Optique Queuleu fait peau neuve ! Nouvelle façade, nouvel accès… et surtout de nouvelles collections exclusives : Eleven Paris pour les ados, Star Wars, Barbie et Tête à Lunettes pour les enfants...",
    image: "/images/boutique/facade.jpg",
    imageAlt:
      "Nouvelle façade du magasin Optique Queuleu à Metz après rénovation",
  },
  {
    title: "Vos ordonnances en 48h avec Lyleoo",
    date: "30 juin 2025",
    dateISO: "2025-06-30",
    excerpt:
      "Vous avez besoin de lunettes ou de lentilles, mais pas de rendez-vous chez l'ophtalmo avant des semaines ? Avec Lyleoo, notre partenaire télé-ophtalmologie, obtenez votre prescription en 48h.",
    image: "/images/boutique/optique.jpg",
    imageAlt:
      "Service télé-ophtalmologie Lyleoo chez Optique Queuleu Metz pour ordonnances rapides",
  },
  {
    title: "Soldes d'été 2025",
    date: "25 juin 2025",
    dateISO: "2025-06-25",
    excerpt:
      "Semaines privilèges chez Optique Queuleu ! Du 25 juin au 22 juillet 2025 : jusqu'à -50% sur une sélection de montures, 2e paire à -50% ou offerte, examen de vue offert...",
    image: "/images/produits/collection.jpg",
    imageAlt:
      "Soldes d'été 2025 Optique Queuleu Metz : promotions montures lunettes",
  },
  {
    title:
      "Impression 3D de pièces de lunettes à Metz – Optique Queuleu innove avec OOMADE",
    date: "23 juin 2025",
    dateISO: "2025-06-23",
    excerpt:
      "Une branche cassée ? Une pièce introuvable ? Ce n'est plus une fatalité. On recrée la pièce manquante en boutique grâce à l'impression 3D, en moins de 15 minutes.",
    image: "/images/boutique/interieur-4.jpg",
    imageAlt:
      "Service impression 3D OOMADE pour réparation lunettes Optique Queuleu Metz",
  },
  {
    title: "Découvrez nos dernières collections",
    date: "6 décembre 2024",
    dateISO: "2024-12-06",
    excerpt:
      "TALLA : la perfection du design minimaliste. La marque TALLA se distingue par ses designs épurés et modernes. Conçues pour ceux qui recherchent des lunettes élégantes et fonctionnelles...",
    image: "/images/produits/talla.jpg",
    imageAlt: "Collection lunettes TALLA design minimaliste chez Optique Queuleu Metz",
  },
  {
    title:
      "Le masque de ski Izipizi : l'accessoire mode incontournable",
    date: "6 décembre 2024",
    dateISO: "2024-12-06",
    excerpt:
      "Les fêtes de Noël approchent, et si vous cherchez le cadeau parfait pour un amateur de ski, nous avons la solution ! Le masque de ski Izipizi allie style et performance.",
    image: "/images/produits/izipizi-ski.jpg",
    imageAlt:
      "Masque de ski Izipizi disponible chez Optique Queuleu Metz pour Noël",
  },
  {
    title: "Où trouver des lunettes Moscot à Metz ?",
    date: "6 décembre 2024",
    dateISO: "2024-12-06",
    excerpt:
      "Les lunettes sont bien plus qu'un simple accessoire. Si vous êtes à la recherche d'une paire intemporelle, les lunettes Moscot sont le choix idéal.",
    image: "/images/produits/moscot-miltzen.jpg",
    imageAlt:
      "Lunettes Moscot Miltzen disponibles chez Optique Queuleu opticien à Metz",
  },
  {
    title: "Découvrez Kaleos : L'Essence de l'Art Lunetier",
    date: "22 mai 2024",
    dateISO: "2024-05-22",
    excerpt:
      "Bienvenue chez Kaleos, la marque espagnole qui révolutionne l'univers de la lunetterie avec des créations où l'art, la mode et la qualité se rencontrent.",
    image: "/images/produits/galerie.jpg",
    imageAlt:
      "Collection lunettes Kaleos espagnole créative chez Optique Queuleu Metz",
  },
];

export default function BlogPage() {
  // Schema.org Blog structured data
  const blogStructuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog Optique Queuleu",
    description:
      "Actualités, conseils et tendances lunettes de votre opticien à Metz",
    url: "https://www.optiquequeuleu.com/blog",
    publisher: {
      "@type": "LocalBusiness",
      name: "Optique Queuleu",
      image: "https://www.optiquequeuleu.com/images/boutique/facade.jpg",
      address: {
        "@type": "PostalAddress",
        streetAddress: "7 Rue Queuleu",
        addressLocality: "Metz",
        postalCode: "57070",
        addressCountry: "FR",
      },
    },
    blogPost: articles.map((article) => ({
      "@type": "BlogPosting",
      headline: article.title,
      datePublished: article.dateISO,
      description: article.excerpt,
      image: `https://www.optiquequeuleu.com${article.image}`,
      author: {
        "@type": "Organization",
        name: "Optique Queuleu",
      },
    })),
  };

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogStructuredData) }}
      />

      {/* Hero Banner */}
      <section
        className="relative flex h-64 items-center pt-20 sm:h-80"
        aria-label="En-tête du blog"
      >
        <Image
          src="/images/boutique/interieur-1.jpg"
          alt="Intérieur moderne du magasin Optique Queuleu à Metz"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h1 className="text-4xl font-bold uppercase tracking-[0.15em] text-white sm:text-5xl">
            Blog Optique Queuleu Metz
          </h1>
          <nav className="mt-4 text-sm text-white/70" aria-label="Fil d'Ariane">
            <Link href="/" className="hover:text-white">
              Accueil
            </Link>
            <span className="mx-2">&gt;</span>
            <span className="text-white">Blog</span>
          </nav>
        </div>
      </section>

      {/* Articles */}
      <section
        className="bg-white py-24"
        aria-label="Articles du blog optique"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal className="stagger-children">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {articles.map((article, index) => (
                <article
                  key={article.title}
                  className="group overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all hover:shadow-lg"
                  itemScope
                  itemType="https://schema.org/BlogPosting"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.imageAlt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      loading={index < 3 ? "eager" : "lazy"}
                      itemProp="image"
                    />
                  </div>
                  <div className="p-6">
                    <time
                      className="text-xs font-medium uppercase tracking-wider text-primary"
                      dateTime={article.dateISO}
                      itemProp="datePublished"
                    >
                      {article.date}
                    </time>
                    <h2
                      className="mt-2 text-lg font-semibold leading-snug text-foreground"
                      itemProp="headline"
                    >
                      {article.title}
                    </h2>
                    <p
                      className="mt-3 text-sm leading-relaxed text-muted-foreground"
                      itemProp="description"
                    >
                      {article.excerpt}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </ScrollReveal>

          {/* Liens internes SEO */}
          <div className="mx-auto mt-16 max-w-4xl text-center">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Découvrez également nos{" "}
              <Link
                href="/marques"
                className="font-medium text-primary hover:underline"
              >
                collections de marques
              </Link>
              , explorez notre gamme de{" "}
              <Link
                href="/verres"
                className="font-medium text-primary hover:underline"
              >
                verres optiques
              </Link>{" "}
              ou visitez notre{" "}
              <Link
                href="/magasin"
                className="font-medium text-primary hover:underline"
              >
                magasin à Metz
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
