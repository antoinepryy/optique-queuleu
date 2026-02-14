import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { articles } from "./articles-data";

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
    images: [
      {
        url: "/images/boutique/facade.webp",
        width: 1200,
        height: 630,
        alt: "Blog Optique Queuleu - Opticien à Metz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog Optique Metz | Conseils Lunettes & Actualités | Optique Queuleu",
    description:
      "Découvrez les actualités, conseils et tendances lunettes sur le blog d'Optique Queuleu à Metz.",
    images: ["/images/boutique/facade.webp"],
  },
};

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
      image: "https://www.optiquequeuleu.com/images/boutique/facade.webp",
      address: {
        "@type": "PostalAddress",
        streetAddress: "28 Rue de Queuleu",
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
      url: `https://www.optiquequeuleu.com/blog/${article.slug}`,
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
          src="/images/boutique/interieur-1.webp"
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
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group"
                >
                  <article
                    className="h-full overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg group-hover:border-primary/20"
                    itemScope
                    itemType="https://schema.org/BlogPosting"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.imageAlt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
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
                        className="mt-2 text-lg font-semibold leading-snug text-foreground group-hover:text-primary transition-colors duration-300"
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
                      <span className="mt-4 inline-flex items-center text-sm font-medium text-primary">
                        Lire l&apos;article
                        <svg
                          className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                    </div>
                  </article>
                </Link>
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
