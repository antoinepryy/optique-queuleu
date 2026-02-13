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
            D\u00E9couvrez une s\u00E9lection de montures de cr\u00E9ateurs, alliant style, confort et qualit\u00E9 visuelle. Trouvez la paire de lunettes parfaite qui exprimera votre personnalit\u00E9.
          </p>
        </div>
      </section>

      {/* Featured Brands */}
      <section className="bg-white pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <SectionTitle color="accent">Marques du moment</SectionTitle>
              <p className="mt-4 text-muted-foreground">Notre s\u00E9lection de marques tendance et nouveaut\u00E9s</p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredBrands.map((brand) => (
              <ScrollReveal key={brand.slug}>
                <div className="card-3d group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-layered">
                  {brand.badge && (
                    <span className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-semibold text-white ${
                      brand.badge === "Tendance" ? "bg-primary" : brand.badge === "Nouveaut\u00E9" ? "bg-accent" : "bg-foreground"
                    }`}>{brand.badge}</span>
                  )}
                  <span className="absolute left-4 top-4 text-lg">{brand.countryFlag}</span>
                  <div className="flex h-20 items-center justify-center">
                    {brand.image ? (
                      <Image src={brand.image} alt={brand.name} width={140} height={70} className="h-16 w-auto max-w-[140px] object-contain transition-transform duration-500 group-hover:scale-110" />
                    ) : (
                      <span className="text-xl font-bold text-foreground">{brand.name}</span>
                    )}
                  </div>
                  <div className="mt-6 text-center">
                    <h3 className="text-lg font-bold text-foreground">{brand.name}</h3>
                    {brand.description && (
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{brand.description}</p>
                    )}
                  </div>
                  <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-primary to-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* French Brands Banner */}
      <section className="bg-gradient-to-r from-primary to-primary-light py-12">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <p className="text-lg font-semibold text-white">{"\uD83C\uDDEB\uD83C\uDDF7"} Plus de 30 marques fran\u00E7aises dans notre collection</p>
          <p className="mt-2 text-sm text-white/80">Nous privil\u00E9gions les cr\u00E9ateurs fran\u00E7ais pour leur savoir-faire et leur originalit\u00E9</p>
        </div>
      </section>

      {/* All Brands with filters */}
      <BrandsExplorer />
    </>
  );
}
