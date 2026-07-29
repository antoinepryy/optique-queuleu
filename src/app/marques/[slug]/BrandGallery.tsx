import Image from "next/image";
import type { BrandGalleryImage } from "../brands-details";

export default function BrandGallery({
  images,
  brandName,
}: {
  images: BrandGalleryImage[];
  brandName: string;
}) {
  if (images.length === 0) return null;

  // La mise en page s’adapte au nombre d’images : une image unique est
  // présentée en pleine largeur façon éditorial, deux images se partagent
  // la largeur, trois et plus reprennent la grille classique.
  const isSpotlight = images.length === 1;
  const gridClass =
    images.length === 2
      ? "mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2"
      : "mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3";
  const sizes = isSpotlight
    ? "(min-width: 1024px) 768px, 100vw"
    : images.length === 2
      ? "(min-width: 640px) 50vw, 100vw"
      : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw";

  return (
    <section className="bg-muted py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          La collection {brandName}
        </h2>
        <div
          data-testid="brand-gallery"
          className={isSpotlight ? "mt-8" : gridClass}
        >
          {images.map((image) => (
            <figure
              key={image.src}
              className={
                isSpotlight
                  ? "mx-auto max-w-3xl overflow-hidden rounded-2xl bg-white"
                  : "overflow-hidden rounded-2xl bg-white"
              }
            >
              <div
                className={
                  isSpotlight
                    ? "relative aspect-[3/2]"
                    : "relative aspect-[4/3]"
                }
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes={sizes}
                  className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              {image.caption && (
                <figcaption className="px-4 py-3 text-xs text-muted-foreground">
                  {image.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
