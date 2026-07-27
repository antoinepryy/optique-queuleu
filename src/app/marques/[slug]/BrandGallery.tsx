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

  return (
    <section className="bg-muted py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          La collection {brandName}
        </h2>
        <div
          data-testid="brand-gallery"
          className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {images.map((image) => (
            <figure
              key={image.src}
              className="overflow-hidden rounded-2xl bg-white"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
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
