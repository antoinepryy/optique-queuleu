import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/app/blog/articles-data";

export const metadata: Metadata = {
  title: "Plan du site",
  description:
    "Plan du site Optique Queuleu : retrouvez l'ensemble des pages de votre opticien à Metz.",
  robots: {
    index: false,
    follow: true,
  },
};

const sections = [
  {
    title: "Pages principales",
    links: [
      { href: "/", label: "Accueil" },
      { href: "/marques", label: "Nos marques" },
      { href: "/verres", label: "Nos verres" },
      { href: "/magasin", label: "Le magasin" },
      { href: "/lentilles", label: "Lentilles de contact" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Nos services",
    links: [
      { href: "/prescription-48h", label: "Prescription en 48h" },
      { href: "/vision-minute", label: "Vision Minute · OOMADE (impression 3D)" },
    ],
  },
];

export default function PlanDuSitePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Plan du site - Optique Queuleu",
    description:
      "Plan du site Optique Queuleu, opticien à Metz.",
    url: "https://www.optiquequeuleu.com/plan-du-site",
    publisher: {
      "@type": "Organization",
      name: "Optique Queuleu 2.0",
      url: "https://www.optiquequeuleu.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-primary px-4 py-16 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <nav className="mb-4 text-sm text-white/70">
            <Link href="/" className="hover:text-white">
              Accueil
            </Link>{" "}
            / Plan du site
          </nav>
          <h1 className="text-3xl font-bold tracking-wide sm:text-4xl">
            PLAN DU SITE
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-4xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="mb-4 text-lg font-bold uppercase tracking-wider text-primary">
                {section.title}
              </h2>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Blog */}
          <div>
            <h2 className="mb-4 text-lg font-bold uppercase tracking-wider text-primary">
              Blog
            </h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/blog"
                  className="font-medium text-foreground transition-colors hover:text-primary"
                >
                  Tous les articles
                </Link>
              </li>
              {articles.map((article) => (
                <li key={article.slug}>
                  <Link
                    href={`/blog/${article.slug}`}
                    className="text-foreground transition-colors hover:text-primary"
                  >
                    {article.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Informations légales */}
          <div>
            <h2 className="mb-4 text-lg font-bold uppercase tracking-wider text-primary">
              Informations
            </h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/mentions-legales"
                  className="text-foreground transition-colors hover:text-primary"
                >
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
