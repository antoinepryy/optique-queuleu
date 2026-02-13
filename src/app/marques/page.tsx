import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import ScrollReveal from "@/components/ScrollReveal";
import BrandsExplorer from "./BrandsExplorer";
import { brands } from "./brands-data";

export const metadata: Metadata = {
  title: "Nos Marques | Optique Queuleu",
  description: "D\u00E9couvrez plus de 60 marques de lunettes : cr\u00E9ateurs fran\u00E7ais, luxe, sport, enfant et \u00E9co-responsable. Trouvez la monture parfaite chez Optique Queuleu \u00E0 Metz.",
};

const featuredBrands = brands.filter((b) => b.featured);

export default function MarquesPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative flex h-80 items-center pt-20 sm:h-96">
        <Image src="/images/verriers/bandeau-marque.webp" alt="Nos marques" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/30" />
        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h1 className="text-4xl font-bold uppercase tracking-[0.15em] text-white sm:text-5xl">Nos collections</h1>
          <nav className="mt-4 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span className="mx-2">&gt;</span>
            <span className="text-white">Collections</span>
          </nav>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="text-lg leading-relaxed text-muted-foreground">
            D&eacute;couvrez une s&eacute;lection de montures de cr&eacute;ateurs, alliant style, confort et qualit&eacute; visuelle. Trouvez la paire de lunettes parfaite qui exprimera votre personnalit&eacute;.
          </p>
        </div>
      </section>

      {/* Featured Brands - Image-first design */}
      <section className="bg-white pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-14 text-center">
              <SectionTitle color="accent">Marques du moment</SectionTitle>
              <p className="mt-4 text-muted-foreground">Notre s&eacute;lection de marques tendance et nouveaut&eacute;s</p>
            </div>
          </ScrollReveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredBrands.map((brand) => (
              <ScrollReveal key={brand.slug}>
                <div className="group relative aspect-[3/4] overflow-hidden rounded-3xl">
                  {/* Background image */}
                  {brand.heroImage ? (
                    <Image
                      src={brand.heroImage}
                      alt={brand.name}
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
                      brand.badge === "Tendance" ? "bg-primary/80" : brand.badge === "Nouveaut\u00E9" ? "bg-accent/80" : "bg-white/20"
                    }`}>{brand.badge}</span>
                  )}

                  {/* Country flag */}
                  <span className="absolute left-4 top-4 z-10 text-lg drop-shadow-md">{brand.countryFlag}</span>

                  {/* Content overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 z-10 p-6">
                    {/* Logo */}
                    {brand.image && (
                      <div className="mb-4">
                        <Image
                          src={brand.image}
                          alt={brand.name}
                          width={100}
                          height={40}
                          className="h-8 w-auto max-w-[100px] object-contain brightness-0 invert"
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
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* French Brands Banner */}
      <section className="bg-gradient-to-r from-primary to-primary-light py-12">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <p className="text-lg font-semibold text-white">{"\uD83C\uDDEB\uD83C\uDDF7"} Plus de 30 marques fran&ccedil;aises dans notre collection</p>
          <p className="mt-2 text-sm text-white/80">Nous privil&eacute;gions les cr&eacute;ateurs fran&ccedil;ais pour leur savoir-faire et leur originalit&eacute;</p>
        </div>
      </section>

      {/* All Brands with filters */}
      <BrandsExplorer />
    </>
  );
}
