import Image from "next/image";
import Link from "next/link";
import type { Brand } from "../brands-data";

/**
 * Métadonnées du hero : lisibles sur n'importe quelle photo. Le pays repose sur
 * un fond sombre quasi opaque (pas sur la photo), le « Made in France » sur une
 * pastille blanche à texte sombre — les deux tiennent quel que soit le visuel.
 */
function HeroMeta({ brand }: { brand: Brand }) {
  return (
    <div className="mt-5 flex flex-wrap items-center gap-2.5">
      <span className="inline-flex items-center gap-2 rounded-full bg-black/60 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-white ring-1 ring-white/25 backdrop-blur-md">
        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
        {brand.country}
      </span>
      {brand.french && (
        <span className="rounded-full bg-white px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-foreground">
          Made in France
        </span>
      )}
    </div>
  );
}

function Breadcrumb({ name }: { name: string }) {
  return (
    <nav
      className="mb-8 text-[10px] font-medium uppercase tracking-[0.2em] text-white/60 sm:text-xs"
      aria-label="Fil d'Ariane"
    >
      <Link href="/" className="transition-colors hover:text-white">
        Accueil
      </Link>
      <span className="mx-2 text-white/30 sm:mx-3">/</span>
      <Link href="/marques" className="transition-colors hover:text-white">
        Marques
      </Link>
      <span className="mx-2 text-white/30 sm:mx-3">/</span>
      <span className="text-white/90">{name}</span>
    </nav>
  );
}

export default function BrandHero({ brand }: { brand: Brand }) {
  // À défaut de photo hero dédiée, on retombe sur le visuel de la grille : une
  // vraie image vaut mieux que l'aplat gris. Certains brand.image sont des
  // logos et rendront moins bien en plein cadre, mais c'est le compromis choisi.
  const heroSrc = brand.heroImage ?? brand.image;

  if (heroSrc) {
    return (
      <section className="relative flex min-h-[24rem] items-end overflow-hidden pt-20 sm:min-h-[30rem]">
        <Image
          src={heroSrc}
          alt={`Lunettes ${brand.name} - ${brand.french ? "Créateur français" : brand.country}`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-12 sm:px-6 sm:pb-16 lg:px-8">
          <Breadcrumb name={brand.name} />
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            {brand.name}
          </h1>
          <HeroMeta brand={brand} />
        </div>
      </section>
    );
  }

  return (
    <section className="relative flex min-h-[20rem] items-end overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 pt-20 sm:min-h-[26rem]">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-12 sm:px-6 sm:pb-16 lg:px-8">
        <Breadcrumb name={brand.name} />
        {/* Pas de logo ici : on ne sait pas si brand.image est un logo ou une
            photo, et le traitement inversé produit un aplat blanc sur les
            photos. Le nom en très grand porte l'identité. */}
        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
          {brand.name}
        </h1>
        <HeroMeta brand={brand} />
      </div>
    </section>
  );
}
