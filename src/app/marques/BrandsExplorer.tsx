"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { brands, categoryLabels, type Brand, type BrandCategory } from "./brands-data";

const allCategories = Object.keys(categoryLabels) as BrandCategory[];

export default function BrandsExplorer() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<BrandCategory | "all" | "francais">("all");

  const filteredBrands = useMemo(() => {
    let result = brands;
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (b) => b.name.toLowerCase().includes(q) || b.country.toLowerCase().includes(q)
      );
    }
    if (activeCategory === "francais") {
      result = result.filter((b) => b.french);
    } else if (activeCategory !== "all") {
      result = result.filter((b) => b.categories.includes(activeCategory));
    }
    return result;
  }, [search, activeCategory]);

  const frenchCount = useMemo(() => brands.filter((b) => b.french).length, []);

  return (
    <section className="bg-muted py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Search + Filters */}
        <div className="mb-12 space-y-6">
          <div className="mx-auto max-w-md">
            <div className="relative">
              <svg className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
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
            <FilterButton active={activeCategory === "all"} onClick={() => setActiveCategory("all")} count={brands.length}>
              Toutes
            </FilterButton>
            <FilterButton active={activeCategory === "francais"} onClick={() => setActiveCategory("francais")} count={frenchCount} highlight>
              {"\uD83C\uDDEB\uD83C\uDDF7"} Fran\u00E7aises
            </FilterButton>
            {allCategories.map((cat) => (
              <FilterButton key={cat} active={activeCategory === cat} onClick={() => setActiveCategory(cat)} count={brands.filter((b) => b.categories.includes(cat)).length}>
                {categoryLabels[cat]}
              </FilterButton>
            ))}
          </div>
        </div>

        <p className="mb-8 text-center text-sm text-muted-foreground">
          {filteredBrands.length} marque{filteredBrands.length > 1 ? "s" : ""}
          {activeCategory !== "all" || search ? " trouv\u00E9e" + (filteredBrands.length > 1 ? "s" : "") : ""}
        </p>

        {filteredBrands.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {filteredBrands.map((brand) => (
              <BrandCard key={brand.slug} brand={brand} />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center">
            <p className="text-lg text-muted-foreground">Aucune marque ne correspond \u00E0 votre recherche.</p>
            <button onClick={() => { setSearch(""); setActiveCategory("all"); }} className="mt-4 text-sm font-medium text-primary hover:underline">
              Voir toutes les marques
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function FilterButton({ children, active, onClick, count, highlight }: {
  children: React.ReactNode; active: boolean; onClick: () => void; count: number; highlight?: boolean;
}) {
  return (
    <button onClick={onClick} className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all ${
      active
        ? highlight ? "bg-accent text-white shadow-md" : "bg-primary text-white shadow-md"
        : "bg-white text-foreground hover:bg-gray-50 border border-gray-200"
    }`}>
      {children}
      <span className={`text-xs ${active ? "text-white/80" : "text-muted-foreground"}`}>{count}</span>
    </button>
  );
}

function BrandCard({ brand }: { brand: Brand }) {
  return (
    <div className="group relative flex h-32 flex-col items-center justify-center rounded-xl border border-gray-100 bg-white px-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/20">
      <span className="absolute right-2 top-2 text-xs opacity-0 transition-opacity group-hover:opacity-100">{brand.countryFlag}</span>
      {brand.image ? (
        <Image src={brand.image} alt={brand.name} width={100} height={50} className="h-12 w-auto max-w-[100px] object-contain transition-transform duration-300 group-hover:scale-110" />
      ) : (
        <span className="text-center text-sm font-semibold text-foreground">{brand.name}</span>
      )}
      <div className="absolute inset-x-0 bottom-0 translate-y-1 rounded-b-xl bg-gradient-to-t from-black/70 to-transparent px-3 py-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <p className="text-center text-xs font-medium text-white">{brand.name}</p>
      </div>
    </div>
  );
}
