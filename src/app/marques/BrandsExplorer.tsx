"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import {
  brands,
  categoryLabels,
  type Brand,
  type BrandCategory,
} from "./brands-data";

const allCategories = Object.keys(categoryLabels) as BrandCategory[];

export default function BrandsExplorer() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<
    BrandCategory | "all" | "francais"
  >("all");

  const filteredBrands = useMemo(() => {
    let result = brands;
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (b) =>
          b.name.toLowerCase().includes(q) ||
          b.country.toLowerCase().includes(q)
      );
    }
    if (activeCategory === "francais") {
      result = result.filter((b) => b.french);
    } else if (activeCategory !== "all") {
      result = result.filter((b) => b.categories.includes(activeCategory));
    }
    return result;
  }, [search, activeCategory]);

  const frenchCount = useMemo(
    () => brands.filter((b) => b.french).length,
    []
  );

  return (
    <section className="bg-muted py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Search + Filters */}
        <div className="mb-12 space-y-6">
          <div className="mx-auto max-w-md">
            <div className="relative">
              <svg
                className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Rechercher une marque..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-full border border-gray-200 bg-white py-3 pl-12 pr-4 text-sm text-foreground shadow-sm transition-shadow focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            <FilterButton
              active={activeCategory === "all"}
              onClick={() => setActiveCategory("all")}
              count={brands.length}
            >
              Toutes
            </FilterButton>
            <FilterButton
              active={activeCategory === "francais"}
              onClick={() => setActiveCategory("francais")}
              count={frenchCount}
              highlight
            >
              {"\uD83C\uDDEB\uD83C\uDDF7"} Fran&ccedil;aises
            </FilterButton>
            {allCategories.map((cat) => (
              <FilterButton
                key={cat}
                active={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
                count={
                  brands.filter((b) => b.categories.includes(cat)).length
                }
              >
                {categoryLabels[cat]}
              </FilterButton>
            ))}
          </div>
        </div>

        <p className="mb-8 text-center text-sm text-muted-foreground">
          {filteredBrands.length} marque
          {filteredBrands.length > 1 ? "s" : ""}
          {activeCategory !== "all" || search
            ? " trouv\u00E9e" + (filteredBrands.length > 1 ? "s" : "")
            : ""}
        </p>

        {filteredBrands.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {filteredBrands.map((brand) => (
              <BrandCard key={brand.slug} brand={brand} />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center">
            <p className="text-lg text-muted-foreground">
              Aucune marque ne correspond &agrave; votre recherche.
            </p>
            <button
              onClick={() => {
                setSearch("");
                setActiveCategory("all");
              }}
              className="mt-4 text-sm font-medium text-primary hover:underline"
            >
              Voir toutes les marques
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function FilterButton({
  children,
  active,
  onClick,
  count,
  highlight,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
  count: number;
  highlight?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all ${
        active
          ? highlight
            ? "bg-accent text-white shadow-md"
            : "bg-primary text-white shadow-md"
          : "border border-gray-200 bg-white text-foreground hover:bg-gray-50"
      }`}
    >
      {children}
      <span
        className={`text-xs ${active ? "text-white/80" : "text-muted-foreground"}`}
      >
        {count}
      </span>
    </button>
  );
}

function BrandCard({ brand }: { brand: Brand }) {
  const hasHero = !!brand.heroImage;

  if (hasHero) {
    return (
      <div className="group relative aspect-square overflow-hidden rounded-2xl">
        {/* Full background image */}
        <Image
          src={brand.heroImage!}
          alt={brand.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition-opacity duration-300" />

        {/* Country flag top-right */}
        <span className="absolute right-2.5 top-2.5 z-10 text-sm drop-shadow-md opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {brand.countryFlag}
        </span>

        {/* Price pill top-left */}
        <span className="absolute left-2.5 top-2.5 z-10 rounded-full bg-black/30 px-2 py-0.5 text-[10px] font-medium text-white/80 backdrop-blur-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {brand.priceRange}
        </span>

        {/* Bottom content */}
        <div className="absolute inset-x-0 bottom-0 z-10 p-3">
          {/* Logo (white) */}
          {brand.image && (
            <Image
              src={brand.image}
              alt={brand.name}
              width={80}
              height={32}
              className="mb-1.5 h-6 w-auto max-w-[80px] object-contain brightness-0 invert"
            />
          )}
          <p className="text-sm font-semibold text-white">{brand.name}</p>
          {brand.french && (
            <p className="mt-0.5 text-[10px] font-medium text-white/60">
              Made in France
            </p>
          )}
        </div>

        {/* Hover ring */}
        <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 transition-all duration-300 group-hover:ring-2 group-hover:ring-primary/50" />
      </div>
    );
  }

  // Fallback: logo-only card (for brands without heroImage)
  return (
    <div className="group relative flex aspect-square flex-col items-center justify-center rounded-2xl border border-gray-100 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/20">
      {/* Country flag */}
      <span className="absolute right-2.5 top-2.5 text-xs opacity-0 transition-opacity group-hover:opacity-100">
        {brand.countryFlag}
      </span>

      {/* Price pill */}
      <span className="absolute left-2.5 top-2.5 text-[10px] font-medium text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
        {brand.priceRange}
      </span>

      {/* Logo or name */}
      {brand.image ? (
        <Image
          src={brand.image}
          alt={brand.name}
          width={100}
          height={50}
          className="h-12 w-auto max-w-[100px] object-contain transition-transform duration-300 group-hover:scale-110"
        />
      ) : (
        <span className="text-center text-sm font-bold text-foreground">
          {brand.name}
        </span>
      )}

      {/* Name below logo */}
      <p className="mt-2 text-center text-xs font-medium text-muted-foreground transition-colors group-hover:text-foreground">
        {brand.name}
      </p>

      {brand.french && (
        <p className="mt-0.5 text-[10px] text-muted-foreground/60">
          {"\uD83C\uDDEB\uD83C\uDDF7"} France
        </p>
      )}
    </div>
  );
}
