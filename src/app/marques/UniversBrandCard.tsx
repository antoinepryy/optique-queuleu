import Image from "next/image";
import Link from "next/link";
import { getCountryCode, type Brand } from "./brands-data";

// Carte d'une marque dans une liste par univers. Partagée par /marques,
// /sport et /enfants-myopie.
export default function UniversBrandCard({ brand }: { brand: Brand }) {
  return (
    <Link
      href={`/marques/${brand.slug}`}
      aria-label={`Découvrir la marque ${brand.name}`}
      className="group block h-full overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-white">
        {brand.heroImage ? (
          <Image
            src={brand.heroImage}
            alt={`Lunettes ${brand.name}`}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : brand.image ? (
          <div className="flex h-full items-center justify-center p-6">
            <Image
              src={brand.image}
              alt={`Logo de la marque ${brand.name}`}
              width={140}
              height={70}
              className="max-h-16 w-auto max-w-[70%] object-contain opacity-80 transition-opacity group-hover:opacity-100"
            />
          </div>
        ) : (
          <div className="flex h-full items-center justify-center p-6">
            <span className="text-center text-lg font-bold text-foreground">{brand.name}</span>
          </div>
        )}
      </div>
      <div className="flex items-center justify-between gap-2 px-4 py-3">
        <h3 className="text-sm font-semibold text-foreground group-hover:text-primary">{brand.name}</h3>
        <span className="shrink-0 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
          {getCountryCode(brand.country)}
        </span>
      </div>
    </Link>
  );
}
