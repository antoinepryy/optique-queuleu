import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import ScrollReveal from "@/components/ScrollReveal";
import BrandsExplorer from "./BrandsExplorer";
import { brands } from "./brands-data";

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
      <section className="relative flex h-80 items-center pt-20 sm:h-96" aria-label="Bannière marques de lunettes">
        <Image
          src="/images/verriers/bandeau-marque.webp"
          alt="Collection de marques de lunettes de créateurs - Optique Queuleu Metz"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/30" />
        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h1 className="text-4xl font-bold uppercase tracking-[0.15em] text-white sm:text-5xl">Nos collections</h1>
          <nav className="mt-4 text-sm text-white/80" aria-label="Fil d'Ariane">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span className="mx-2">&gt;</span>
            <span className="text-white">Collections</span>
          </nav>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-16" aria-label="Introduction marques">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Découvrez une sélection de montures de créateurs, alliant style, confort et qualité visuelle. Trouvez la paire de lunettes parfaite qui exprimera votre personnalité.
          </p>
        </div>
      </section>

      {/* Featured Brands - Image-first design */}
      <section className="bg-white pb-24" aria-label="Marques tendance">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-14 text-center">
              <SectionTitle color="accent">
                <h2 className="text-3xl font-bold">Marques du moment</h2>
              </SectionTitle>
              <p className="mt-4 text-muted-foreground">Notre sélection de marques tendance et nouveautés</p>
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
      <section className="bg-gradient-to-r from-primary to-primary-light py-12" aria-label="Marques françaises">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <p className="text-lg font-semibold text-white">🇫🇷 Plus de 30 marques françaises dans notre collection</p>
          <p className="mt-2 text-sm text-white/80">Nous privilégions les créateurs français pour leur savoir-faire et leur originalité</p>
        </div>
      </section>

      {/* All Brands with filters */}
      <BrandsExplorer />

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
