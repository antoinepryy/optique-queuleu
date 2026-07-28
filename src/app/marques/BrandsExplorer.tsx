"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, LayoutGroup } from "motion/react";
import {
  brands,
  categoryLabels,
  getCountryCode,
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

  const hasFilter = activeCategory !== "all" || search.trim() !== "";

  return (
    <section className="bg-gradient-to-b from-muted to-white py-24" aria-label="Explorer toutes les marques">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Catalogue complet</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Toutes nos marques</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">Filtrez par catégorie ou recherchez directement votre marque préférée parmi notre sélection.</p>
        </div>

        {/* Sticky Search + Filters bar */}
        <div className="sticky top-20 z-30 -mx-6 mb-10 bg-muted/80 px-6 py-4 backdrop-blur-lg lg:-mx-8 lg:px-8">
          <div className="mx-auto max-w-4xl space-y-4">
            <div className="relative">
              <svg
                className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="search"
                placeholder="Rechercher une marque…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Rechercher une marque de lunettes"
                className="w-full rounded-2xl border border-gray-200 bg-white py-4 pl-14 pr-28 text-base text-foreground shadow-sm transition-all focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
              />
              <span
                className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground"
                role="status"
                aria-live="polite"
              >
                {filteredBrands.length}{filteredBrands.length !== brands.length ? `/${brands.length}` : ""}
              </span>
            </div>

            <nav className="flex flex-wrap items-center justify-center gap-2" aria-label="Filtres par catégorie">
              <FilterButton
                active={activeCategory === "all"}
                onClick={() => setActiveCategory("all")}
                count={brands.length}
                ariaLabel="Voir toutes les marques"
              >
                Toutes
              </FilterButton>
              <FilterButton
                active={activeCategory === "francais"}
                onClick={() => setActiveCategory("francais")}
                count={frenchCount}
                highlight
                ariaLabel="Filtrer les marques françaises"
              >
                Françaises
              </FilterButton>
              {allCategories.map((cat) => (
                <FilterButton
                  key={cat}
                  active={activeCategory === cat}
                  onClick={() => setActiveCategory(cat)}
                  count={
                    brands.filter((b) => b.categories.includes(cat)).length
                  }
                  ariaLabel={`Filtrer les marques ${categoryLabels[cat]}`}
                >
                  {categoryLabels[cat]}
                </FilterButton>
              ))}
              {hasFilter && (
                <button
                  onClick={() => {
                    setSearch("");
                    setActiveCategory("all");
                  }}
                  className="ml-1 inline-flex items-center gap-1 rounded-full px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-white hover:text-foreground"
                  aria-label="Réinitialiser les filtres"
                >
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Réinitialiser
                </button>
              )}
            </nav>
          </div>
        </div>

        {filteredBrands.length > 0 ? (
          <LayoutGroup>
            <motion.div
              layout
              className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
              style={{ perspective: 1400 }}
            >
              <AnimatePresence mode="popLayout" initial={false}>
                {filteredBrands.map((brand, index) => (
                  <AnimatedBrandCard
                    key={brand.slug}
                    brand={brand}
                    index={index}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          </LayoutGroup>
        ) : (
          <div className="py-20 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm">
              <svg className="h-7 w-7 text-muted-foreground" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <p className="text-lg font-semibold text-foreground">
              Aucune marque trouvée
            </p>
            <p className="mt-2 text-sm text-muted-foreground">Essayez un autre mot-clé ou changez de catégorie.</p>
            <button
              onClick={() => {
                setSearch("");
                setActiveCategory("all");
              }}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
              aria-label="Réinitialiser les filtres et voir toutes les marques"
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
  ariaLabel,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
  count: number;
  highlight?: boolean;
  ariaLabel?: string;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      aria-pressed={active}
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
        aria-label={`${count} marque${count > 1 ? 's' : ''}`}
      >
        {count}
      </span>
    </button>
  );
}

// Pseudo-random but deterministic per slug — gives each brand its own signature motion
function hashSlug(slug: string): number {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) | 0;
  return Math.abs(h);
}

function AnimatedBrandCard({ brand, index }: { brand: Brand; index: number }) {
  const seed = hashSlug(brand.slug);
  // Each card picks one of 5 entrance archetypes based on its hash —
  // gives the impression of multiple choreographers, not one stagger.
  const archetype = seed % 5;

  const initial = (() => {
    switch (archetype) {
      case 0: // slide from left + slight tilt
        return { opacity: 0, x: -48, y: 12, rotateY: 18, scale: 0.92, filter: "blur(8px)" };
      case 1: // slide from right + tilt
        return { opacity: 0, x: 48, y: 12, rotateY: -18, scale: 0.92, filter: "blur(8px)" };
      case 2: // emerge from below with depth
        return { opacity: 0, y: 56, rotateX: -22, scale: 0.88, filter: "blur(10px)" };
      case 3: // zoom in from front (closer to camera)
        return { opacity: 0, z: 80, scale: 1.18, filter: "blur(12px)" };
      default: // recede from back
        return { opacity: 0, z: -120, scale: 0.78, rotateX: 8, filter: "blur(10px)" };
    }
  })();

  const exit = (() => {
    switch (archetype) {
      case 0:
        return { opacity: 0, x: -36, scale: 0.9, filter: "blur(6px)" };
      case 1:
        return { opacity: 0, x: 36, scale: 0.9, filter: "blur(6px)" };
      case 2:
        return { opacity: 0, y: -28, scale: 0.92, filter: "blur(6px)" };
      case 3:
        return { opacity: 0, scale: 1.08, filter: "blur(8px)" };
      default:
        return { opacity: 0, scale: 0.85, filter: "blur(8px)" };
    }
  })();

  // Staggered entry — capped so large filter sets don't drag forever
  const delay = Math.min(index, 28) * 0.035 + (seed % 7) * 0.012;

  return (
    <motion.div
      layout
      initial={initial}
      animate={{
        opacity: 1,
        x: 0,
        y: 0,
        z: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      exit={exit}
      transition={{
        layout: {
          type: "spring",
          stiffness: 320,
          damping: 32,
          mass: 0.9,
        },
        opacity: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] },
        filter: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] },
        default: {
          type: "spring",
          stiffness: 180,
          damping: 22,
          mass: 0.7,
          delay,
        },
      }}
      style={{ transformStyle: "preserve-3d", transformPerspective: 1400 }}
      className="will-change-transform"
    >
      <Link
        href={`/marques/${brand.slug}`}
        aria-label={`Découvrir la marque ${brand.name}`}
        className="block rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        <BrandCard brand={brand} />
      </Link>
    </motion.div>
  );
}

function BrandCard({ brand }: { brand: Brand }) {
  const hasHero = !!brand.heroImage;

  // Generate descriptive alt text
  const altText = `Lunettes ${brand.name} - ${brand.french ? 'Créateur français' : brand.country} - ${brand.categories.join(', ')}`;

  if (hasHero) {
    return (
      <article className="group relative aspect-square overflow-hidden rounded-2xl">
        {/* Full background image */}
        <Image
          src={brand.heroImage!}
          alt={altText}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition-opacity duration-300" />

        {/* Country code top-right */}
        <span
          className="absolute right-2.5 top-2.5 z-10 rounded-full border border-white/20 bg-black/30 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white backdrop-blur-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          aria-label={`Pays: ${brand.country}`}
        >
          {getCountryCode(brand.country)}
        </span>

        {/* Bottom content */}
        <div className="absolute inset-x-0 bottom-0 z-10 p-3">
          <h3 className="text-base font-semibold tracking-tight text-white">{brand.name}</h3>
          {brand.french && (
            <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-white/70">
              Made in France
            </p>
          )}
        </div>

        {/* Hover ring */}
        <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 transition-all duration-300 group-hover:ring-2 group-hover:ring-primary/50" />
      </article>
    );
  }

  // Fallback: logo-only card (for brands without heroImage)
  return (
    <article className="group relative flex aspect-square flex-col items-center justify-center overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_20px_40px_-15px_rgba(0,151,199,0.15)]">
      {/* Corner accent on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-accent/[0.03] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Country code */}
      <span
        className="absolute right-3 top-3 rounded-full bg-muted px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-label={`Pays: ${brand.country}`}
      >
        {getCountryCode(brand.country)}
      </span>

      {/* Logo or name */}
      <div className="relative flex h-16 items-center justify-center">
        {brand.image ? (
          <Image
            src={brand.image}
            alt={`Logo de la marque ${brand.name} - ${brand.french ? 'Créateur français' : brand.country}`}
            width={100}
            height={50}
            className="max-h-14 w-auto max-w-[110px] object-contain opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
            loading="lazy"
          />
        ) : (
          <span className="text-center text-base font-bold text-foreground">
            {brand.name}
          </span>
        )}
      </div>

      {/* Name below logo */}
      <h3 className="relative mt-3 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-colors group-hover:text-primary">
        {brand.name}
      </h3>

      {brand.french && (
        <p className="relative mt-1.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-accent">
          Made in France
        </p>
      )}
    </article>
  );
}
