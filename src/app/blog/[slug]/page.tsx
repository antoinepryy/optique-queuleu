import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "../articles-data";

// Generate all static paths at build time
export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

// Dynamic metadata per article
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Article introuvable",
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      locale: "fr_FR",
      url: `https://www.optiquequeuleu.com/blog/${article.slug}`,
      siteName: "Optique Queuleu",
      publishedTime: article.dateISO,
      authors: ["Optique Queuleu"],
      images: [
        {
          url: `https://www.optiquequeuleu.com${article.image}`,
          width: 1200,
          height: 630,
          alt: article.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [`https://www.optiquequeuleu.com${article.image}`],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  // Get recent articles (excluding the current one), max 3
  const recentArticles = articles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  // Schema.org BlogPosting structured data
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    image: `https://www.optiquequeuleu.com${article.image}`,
    datePublished: article.dateISO,
    dateModified: article.dateISO,
    url: `https://www.optiquequeuleu.com/blog/${article.slug}`,
    author: {
      "@type": "Organization",
      name: "Optique Queuleu",
      url: "https://www.optiquequeuleu.com",
    },
    publisher: {
      "@type": "LocalBusiness",
      name: "Optique Queuleu",
      logo: {
        "@type": "ImageObject",
        url: "https://www.optiquequeuleu.com/images/logo/favicon.png",
      },
      image: "https://www.optiquequeuleu.com/images/boutique/facade.jpg",
      address: {
        "@type": "PostalAddress",
        streetAddress: "7 Rue Queuleu",
        addressLocality: "Metz",
        postalCode: "57070",
        addressCountry: "FR",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.optiquequeuleu.com/blog/${article.slug}`,
    },
  };

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData),
        }}
      />

      {/* Hero compact */}
      <section className="relative flex h-72 items-end sm:h-96">
        <Image
          src={article.image}
          alt={article.imageAlt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-10 lg:px-8">
          <time
            className="text-xs font-medium uppercase tracking-wider text-primary-light"
            dateTime={article.dateISO}
          >
            {article.date}
          </time>
          <h1 className="mt-2 max-w-3xl text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
            {article.title}
          </h1>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav
        className="border-b border-gray-100 bg-white"
        aria-label="Fil d'Ariane"
      >
        <div className="mx-auto max-w-7xl px-6 py-3 lg:px-8">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Accueil
              </Link>
            </li>
            <li>
              <span className="mx-1">&gt;</span>
            </li>
            <li>
              <Link
                href="/blog"
                className="hover:text-primary transition-colors"
              >
                Blog
              </Link>
            </li>
            <li>
              <span className="mx-1">&gt;</span>
            </li>
            <li className="truncate text-foreground font-medium">
              {article.title}
            </li>
          </ol>
        </div>
      </nav>

      {/* Article content */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <article
            className="article-content text-foreground leading-relaxed [&>p]:mt-4 [&>p]:text-muted-foreground [&>h2]:text-xl [&>h2]:font-bold [&>h2]:text-foreground [&>h2]:mt-8 [&>h2]:mb-4 [&>a]:text-primary [&>a]:hover:underline [&>p>a]:text-primary [&>p>a:hover]:underline [&>p>strong]:text-foreground"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </section>

      {/* CTA Doctolib */}
      <section className="bg-muted py-16">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Besoin d&apos;un conseil personnalisé ?
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Notre équipe d&apos;opticiens diplômés vous accueille du mardi au
            samedi dans notre magasin à Metz. Prenez rendez-vous pour un examen
            de vue ou un essayage personnalisé.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://www.doctolib.fr/opticien-lunetier/metz/optique-queuleu-metz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-primary px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-primary-light"
            >
              Prendre rendez-vous
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border-2 border-foreground/20 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      {/* Articles récents */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold uppercase tracking-[0.1em] text-primary sm:text-3xl">
            Articles récents
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {recentArticles.map((recent) => (
              <Link
                key={recent.slug}
                href={`/blog/${recent.slug}`}
                className="group"
              >
                <article className="h-full overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg group-hover:border-primary/20">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={recent.image}
                      alt={recent.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <time
                      className="text-xs font-medium uppercase tracking-wider text-primary"
                      dateTime={recent.dateISO}
                    >
                      {recent.date}
                    </time>
                    <h3 className="mt-2 text-lg font-semibold leading-snug text-foreground group-hover:text-primary transition-colors duration-300">
                      {recent.title}
                    </h3>
                    <span className="mt-3 inline-flex items-center text-sm font-medium text-primary">
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
          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center rounded-full border-2 border-primary px-8 py-3 text-sm font-semibold uppercase tracking-wider text-primary transition-colors hover:bg-primary hover:text-white"
            >
              Voir tous les articles
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
