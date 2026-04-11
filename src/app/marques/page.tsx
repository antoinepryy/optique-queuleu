import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import ScrollReveal from "@/components/ScrollReveal";
import BrandsExplorer from "./BrandsExplorer";
import { brands } from "./brands-data";

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
      <section className="relative flex min-h-[32rem] items-center overflow-hidden pt-24 sm:min-h-[36rem] sm:pt-28" aria-label="Bannière marques de lunettes">
        <Image
          src="/images/verriers/bandeau-marque.webp"
          alt="Collection de marques de lunettes de créateurs - Optique Queuleu Metz"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

        <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-16 lg:px-8">
          <nav className="text-xs font-medium uppercase tracking-[0.2em] text-white/60" aria-label="Fil d'Ariane">
            <Link href="/" className="transition-colors hover:text-white">Accueil</Link>
            <span className="mx-3 text-white/30">/</span>
            <span className="text-white/90">Marques</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-block rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm">
              Créateurs &amp; Designers
            </span>
            <h1 className="mt-6 text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
              Nos marques<br />
              <span className="text-accent">de lunettes</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              De Ray-Ban à Moscot, en passant par {frenchCount} créateurs français : {totalCount} marques sélectionnées avec passion pour sublimer votre regard.
            </p>
          </div>

          {/* KPIs */}
          <div className="grid max-w-2xl grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md">
            <div className="flex flex-col items-center justify-center bg-black/20 px-4 py-5 text-center">
              <span className="text-3xl font-bold text-white sm:text-4xl">{totalCount}+</span>
              <span className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-white/60 sm:text-xs">Marques</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-black/20 px-4 py-5 text-center">
              <span className="text-3xl font-bold text-white sm:text-4xl">{frenchCount}</span>
              <span className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-white/60 sm:text-xs">Françaises</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-black/20 px-4 py-5 text-center">
              <span className="text-3xl font-bold text-white sm:text-4xl">2k+</span>
              <span className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-white/60 sm:text-xs">Références</span>
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

                  {/* Country flag */}
                  <span className="absolute left-4 top-4 z-10 text-lg drop-shadow-md" aria-label={`Pays d'origine: ${brand.country}`}>{brand.countryFlag}</span>

                  {/* Content overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 z-10 p-6">
                    {/* Logo */}
                    {brand.image && (
                      <div className="mb-4">
                        <Image
                          src={brand.image}
                          alt={`Logo ${brand.name}`}
                          width={100}
                          height={40}
                          className="h-8 w-auto max-w-[100px] object-contain brightness-0 invert"
                          loading="lazy"
                        />
                      </div>
                    )}

                    <h3 className="text-xl font-bold tracking-wide text-white">{brand.name}</h3>

                    {brand.description && (
                      <p className="mt-2 text-sm leading-relaxed text-white/70 transition-all duration-500 group-hover:text-white/90">
                        {brand.description}
                      </p>
                    )}

                    {/* Price range & tags */}
                    <div className="mt-3 flex items-center gap-3">
                      <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm">
                        {brand.priceRange}
                      </span>
                      {brand.french && (
                        <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm">
                          Made in France
                        </span>
                      )}
                    </div>
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
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary-light py-16" aria-label="Marques françaises">
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 text-center lg:flex-row lg:items-center lg:gap-16 lg:px-8 lg:text-left">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 16" fill="none">
                <rect width="8" height="16" fill="#002395" />
                <rect x="8" width="8" height="16" fill="white" />
                <rect x="16" width="8" height="16" fill="#ED2939" />
              </svg>
              Made in France
            </div>
            <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
              {frenchCount} créateurs français<br className="hidden sm:block" /> dans notre collection
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/85">
              Nous privilégions les créateurs français pour leur savoir-faire, leur originalité et leur engagement. De l'atelier jurassien à l'acétate lyonnais, chaque monture raconte une histoire.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {["FR", "FR", "FR"].map((_, i) => (
                <div key={i} className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/30 bg-white/15 text-sm font-bold text-white backdrop-blur-sm">
                  <svg className="h-5 w-5" viewBox="0 0 24 16" fill="none">
                    <rect width="8" height="16" fill="#002395" />
                    <rect x="8" width="8" height="16" fill="white" />
                    <rect x="16" width="8" height="16" fill="#ED2939" />
                  </svg>
                </div>
              ))}
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/30 bg-accent text-sm font-bold text-white">
                +{frenchCount - 3}
              </div>
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
