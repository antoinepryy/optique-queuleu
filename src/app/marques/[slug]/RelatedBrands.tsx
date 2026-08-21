import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import type { Brand } from "../brands-data";

/**
 * Carte d'une marque similaire, alignée sur les cartes de la grille /marques :
 * photo plein cadre + nom en surimpression quand un heroImage existe, sinon
 * carte blanche où le nom reste le porteur d'information principal — on ne
 * peut pas savoir si `brand.image` est un logo ou une photo de campagne.
 */
function RelatedBrandCard({ brand }: { brand: Brand }) {
  if (brand.heroImage) {
    return (
      <Link href={`/marques/${brand.slug}`}>
        <article className="group relative aspect-square overflow-hidden rounded-2xl">
          <Image
            src={brand.heroImage}
            alt={`Lunettes ${brand.name}`}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-3">
            <h3 className="text-sm font-semibold tracking-tight text-white">
              {brand.name}
            </h3>
          </div>
          <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 transition-all duration-300 group-hover:ring-2 group-hover:ring-primary/50" />
        </article>
      </Link>
    );
  }

  return (
    <Link href={`/marques/${brand.slug}`}>
      <article className="group relative flex aspect-square flex-col items-center justify-center overflow-hidden rounded-2xl border border-gray-100 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
        {brand.image ? (
          <>
            <div className="flex h-12 items-center justify-center">
              <Image
                src={brand.image}
                alt={`Logo ${brand.name}`}
                width={90}
                height={45}
                className="max-h-11 w-auto max-w-[90px] object-contain opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                loading="lazy"
              />
            </div>
            <h3 className="mt-3 text-center text-xs font-semibold uppercase tracking-wider text-foreground transition-colors group-hover:text-primary">
              {brand.name}
            </h3>
          </>
        ) : (
          <h3 className="text-center text-sm font-bold text-foreground transition-colors group-hover:text-primary">
            {brand.name}
          </h3>
        )}
      </article>
    </Link>
  );
}

export default function RelatedBrands({ brands }: { brands: Brand[] }) {
  if (brands.length === 0) return null;

  return (
    <section className="bg-muted py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Dans le même univers
              </span>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Marques similaires
              </h2>
            </div>
            <Link
              href="/marques"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-light"
            >
              Toutes les marques
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5-5 5M5 12h13"
                />
              </svg>
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {brands.map((b) => (
            <RelatedBrandCard key={b.slug} brand={b} />
          ))}
        </div>
      </div>
    </section>
  );
}
