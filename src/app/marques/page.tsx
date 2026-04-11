import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import ScrollReveal from "@/components/ScrollReveal";
import BrandsExplorer from "./BrandsExplorer";
import { brands, getCountryCode } from "./brands-data";

const frenchCount = brands.filter((b) => b.french).length;
const totalCount = brands.length;

export const metadata: Metadata = {
  title: "Marques de Lunettes à Metz | +60 Créateurs & Designers | Optique Queuleu",
  description: "Découvrez plus de 60 marques de lunettes de créateurs à Metz : luxe français, sport, enfant, éco-responsable. Ray-Ban, Persol, Anne & Valentin, L.A. Eyeworks et bien plus.",
  openGraph: {
    title: "Marques de Lunettes à Metz | +60 Créateurs & Designers",
    description: "Plus de 60 marques de lunettes de créateurs à Metz : luxe français, sport, enfant, éco-responsable. Trouvez votre monture parfaite.",
    type: "website",
    locale: "fr_FR",
    url: "https://www.optiquequeuleu.com/marques",
    siteName: "Optique Queuleu",
    images: [
      {
        url: "/images/verriers/bandeau-marque.webp",
        width: 1200,
        height: 630,
        alt: "Marques de lunettes de créateurs chez Optique Queuleu à Metz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marques de Lunettes à Metz | +60 Créateurs & Designers",
    description:
      "Plus de 60 marques de lunettes de créateurs à Metz : luxe français, sport, enfant, éco-responsable.",
    images: ["/images/verriers/bandeau-marque.webp"],
  },
};

const featuredBrands = brands.filter((b) => b.featured);

export default function MarquesPage() {
  // JSON-LD structured data for featured brands
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Marques de lunettes Optique Queuleu",
    "description": "Sélection de marques de lunettes de créateurs disponibles chez Optique Queuleu à Metz",
    "numberOfItems": featuredBrands.length,
    "itemListElement": featuredBrands.map((brand, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Brand",
        "name": brand.name,
        "description": brand.description || `Lunettes de créateur ${brand.name}`,
        "image": brand.heroImage || brand.image,
      }
    }))
  };

  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Banner */}
      <section className="relative flex min-h-[28rem] items-center overflow-hidden pt-24 sm:min-h-[32rem] sm:pt-28 lg:min-h-[36rem]" aria-label="Bannière marques de lunettes">
        <Image
          src="/images/verriers/bandeau-marque.webp"
          alt="Collection de marques de lunettes de créateurs - Optique Queuleu Metz"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

        <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 py-12 sm:gap-10 sm:px-6 sm:py-16 lg:px-8">
          <nav className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/60 sm:text-xs" aria-label="Fil d'Ariane">
            <Link href="/" className="transition-colors hover:text-white">Accueil</Link>
            <span className="mx-2 text-white/30 sm:mx-3">/</span>
            <span className="text-white/90">Marques</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-block rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm sm:px-4 sm:py-1.5 sm:text-xs">
              Créateurs &amp; Designers
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-[1.05] text-white sm:mt-6 sm:text-5xl lg:text-7xl">
              Nos marques<br />
              <span className="text-accent">de lunettes</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:mt-6 sm:text-lg">
              De Ray-Ban à Moscot, en passant par {frenchCount} créateurs français : {totalCount} marques sélectionnées avec passion pour sublimer votre regard.
            </p>
          </div>

          {/* KPIs */}
          <div className="grid max-w-2xl grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md">
            <div className="flex flex-col items-center justify-center bg-black/20 px-2 py-4 text-center sm:px-4 sm:py-5">
              <span className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">{totalCount}+</span>
              <span className="mt-1 text-[9px] font-semibold uppercase tracking-wider text-white/60 sm:text-[10px] lg:text-xs">Marques</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-black/20 px-2 py-4 text-center sm:px-4 sm:py-5">
              <span className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">{frenchCount}</span>
              <span className="mt-1 text-[9px] font-semibold uppercase tracking-wider text-white/60 sm:text-[10px] lg:text-xs">Françaises</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-black/20 px-2 py-4 text-center sm:px-4 sm:py-5">
              <span className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">2k+</span>
              <span className="mt-1 text-[9px] font-semibold uppercase tracking-wider text-white/60 sm:text-[10px] lg:text-xs">Références</span>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:block">
          <div className="flex flex-col items-center gap-2 text-white/40">
            <span className="text-[10px] font-medium uppercase tracking-[0.2em]">Explorer</span>
            <svg className="h-4 w-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Featured Brands - Image-first design */}
      <section className="bg-white py-24" aria-label="Marques tendance">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">★ Sélection du moment</span>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Marques du moment</h2>
                <p className="mt-3 max-w-xl text-muted-foreground">Une sélection éditoriale renouvelée régulièrement, entre nouveautés et incontournables.</p>
              </div>
              <a href="#explorer" className="group inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-light">
                Voir toutes les marques
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5M5 12h13" />
                </svg>
              </a>
            </div>
          </ScrollReveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredBrands.map((brand) => (
              <ScrollReveal key={brand.slug}>
                <article className="group relative aspect-[3/4] overflow-hidden rounded-3xl">
                  {/* Background image */}
                  {brand.heroImage ? (
                    <Image
                      src={brand.heroImage}
                      alt={`Lunettes ${brand.name} - Montures ${brand.french ? 'françaises' : brand.country} ${brand.categories.join(', ')}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900" />
                  )}

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Badge */}
                  {brand.badge && (
                    <span className={`absolute right-4 top-4 z-10 rounded-full px-3 py-1 text-xs font-semibold tracking-wide text-white backdrop-blur-sm ${
                      brand.badge === "Tendance" ? "bg-primary/80" : brand.badge === "Nouveauté" ? "bg-accent/80" : "bg-white/20"
                    }`} aria-label={`Badge ${brand.badge}`}>{brand.badge}</span>
                  )}

                  {/* Country code */}
                  <span
                    className="absolute left-4 top-4 z-10 rounded-full border border-white/20 bg-black/30 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm"
                    aria-label={`Pays d'origine: ${brand.country}`}
                  >
                    {getCountryCode(brand.country)}
                  </span>

                  {/* Content overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 z-10 p-6">
                    <h3 className="text-2xl font-bold tracking-tight text-white">{brand.name}</h3>

                    {brand.description && (
                      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-white/70 transition-all duration-500 group-hover:text-white/90">
                        {brand.description}
                      </p>
                    )}

                    {brand.french && (
                      <div className="mt-3">
                        <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm">
                          Made in France
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Hover border glow */}
                  <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10 transition-all duration-500 group-hover:ring-2 group-hover:ring-primary/40" />
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* French Brands Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary-light py-14 sm:py-16" aria-label="Marques françaises">
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-8 px-5 sm:gap-10 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
          <div className="flex-1">
            <span className="inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm sm:px-4 sm:py-1.5 sm:text-[11px] sm:tracking-[0.25em]">
              Made in France
            </span>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              <span className="text-4xl font-bold tabular-nums sm:text-5xl lg:text-6xl">{frenchCount}</span> créateurs français<br className="hidden sm:block" /> dans notre collection
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/85 sm:mt-5 sm:text-base">
              Nous privilégions les créateurs français pour leur savoir-faire, leur originalité et leur engagement. De l'atelier jurassien à l'acétate lyonnais, chaque monture raconte une histoire.
            </p>
          </div>
          <div className="hidden lg:block">
            <div className="rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur-sm">
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/60">Part française</p>
              <p className="mt-3 text-7xl font-bold tabular-nums text-white">
                {Math.round((frenchCount / totalCount) * 100)}<span className="text-4xl text-white/60">%</span>
              </p>
              <p className="mt-2 text-xs text-white/70">
                de notre catalogue de {totalCount} marques
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* All Brands with filters */}
      <div id="explorer">
        <BrandsExplorer />
      </div>

      {/* Internal Links Section */}
      <section className="bg-white py-16" aria-label="Services complémentaires">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-foreground">Complétez votre équipement optique</h2>
            <p className="mt-3 text-muted-foreground">Découvrez nos autres services et produits</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/verres"
              className="group block rounded-2xl border border-gray-200 bg-white p-6 text-center transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary">Verres correcteurs</h3>
              <p className="mt-2 text-sm text-muted-foreground">Verres ZEISS, Essilor, Seiko adaptés à votre vue</p>
            </Link>
            <Link
              href="/lentilles"
              className="group block rounded-2xl border border-gray-200 bg-white p-6 text-center transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary">Lentilles de contact</h3>
              <p className="mt-2 text-sm text-muted-foreground">Solutions de correction pour tous types de vue</p>
            </Link>
            <Link
              href="/magasin"
              className="group block rounded-2xl border border-gray-200 bg-white p-6 text-center transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary">Notre magasin</h3>
              <p className="mt-2 text-sm text-muted-foreground">Venez essayer nos montures à Metz Queuleu</p>
            </Link>
            <Link
              href="/contact"
              className="group block rounded-2xl border border-gray-200 bg-white p-6 text-center transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary">Prendre rendez-vous</h3>
              <p className="mt-2 text-sm text-muted-foreground">Réservez votre essayage en ligne</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
