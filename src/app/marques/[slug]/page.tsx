import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ScrollReveal from "@/components/ScrollReveal";
import { brands, categoryLabels, getCountryCode } from "../brands-data";
import { getBrandDetail } from "../brands-details";
import BrandGallery from "./BrandGallery";
import BrandSpecsTable from "./BrandSpecsTable";

export function generateStaticParams() {
  return brands.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const brand = brands.find((b) => b.slug === slug);

  if (!brand) {
    return { title: "Marque introuvable" };
  }

  const title = `${brand.name} | Lunettes ${brand.french ? "françaises" : brand.country} à Metz`;
  const description =
    brand.description?.slice(0, 155) ||
    `Découvrez les lunettes ${brand.name} chez Optique Queuleu à Metz. ${brand.french ? "Créateur français." : `Marque ${brand.country}.`}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      locale: "fr_FR",
      url: `https://www.optiquequeuleu.com/marques/${brand.slug}`,
      siteName: "Optique Queuleu",
      images: brand.heroImage
        ? [
            {
              url: `https://www.optiquequeuleu.com${brand.heroImage}`,
              width: 1200,
              height: 630,
              alt: `Lunettes ${brand.name} chez Optique Queuleu Metz`,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: brand.heroImage
        ? [`https://www.optiquequeuleu.com${brand.heroImage}`]
        : undefined,
    },
  };
}

export default async function BrandPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const brand = brands.find((b) => b.slug === slug);

  if (!brand) {
    notFound();
  }

  const detail = getBrandDetail(brand.slug);

  const relatedBrands = brands
    .filter(
      (b) =>
        b.slug !== brand.slug &&
        b.categories.some((c) => brand.categories.includes(c))
    )
    .slice(0, 6);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Brand",
    name: brand.name,
    description: brand.description,
    url: `https://www.optiquequeuleu.com/marques/${brand.slug}`,
    image: brand.heroImage
      ? `https://www.optiquequeuleu.com${brand.heroImage}`
      : undefined,
    logo: brand.image
      ? `https://www.optiquequeuleu.com${brand.image}`
      : undefined,
    provider: {
      "@type": "LocalBusiness",
      name: "Optique Queuleu",
      url: "https://www.optiquequeuleu.com",
      telephone: "+33387373036",
      address: {
        "@type": "PostalAddress",
        streetAddress: "28 rue de Queuleu",
        addressLocality: "Metz",
        postalCode: "57070",
        addressCountry: "FR",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      {brand.heroImage ? (
        <section className="relative flex min-h-[22rem] items-end overflow-hidden pt-20 sm:min-h-[28rem]">
          <Image
            src={brand.heroImage}
            alt={`Lunettes ${brand.name} - ${brand.french ? "Créateur français" : brand.country}`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
          <div className="relative mx-auto w-full max-w-7xl px-5 pb-10 sm:px-6 sm:pb-14 lg:px-8">
            <nav
              className="mb-6 text-[10px] font-medium uppercase tracking-[0.2em] text-white/60 sm:text-xs"
              aria-label="Fil d'Ariane"
            >
              <Link href="/" className="transition-colors hover:text-white">
                Accueil
              </Link>
              <span className="mx-2 text-white/30 sm:mx-3">/</span>
              <Link
                href="/marques"
                className="transition-colors hover:text-white"
              >
                Marques
              </Link>
              <span className="mx-2 text-white/30 sm:mx-3">/</span>
              <span className="text-white/90">{brand.name}</span>
            </nav>
            <div className="flex items-center gap-3">
              <span className="rounded-full border border-white/20 bg-black/30 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                {getCountryCode(brand.country)}
              </span>
              {brand.french && (
                <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                  Made in France
                </span>
              )}
            </div>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              {brand.name}
            </h1>
          </div>
        </section>
      ) : (
        <section className="relative flex min-h-[18rem] items-end overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 pt-20 sm:min-h-[22rem]">
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "24px 24px" }} />
          <div className="relative mx-auto w-full max-w-7xl px-5 pb-10 sm:px-6 sm:pb-14 lg:px-8">
            <nav
              className="mb-6 text-[10px] font-medium uppercase tracking-[0.2em] text-white/60 sm:text-xs"
              aria-label="Fil d'Ariane"
            >
              <Link href="/" className="transition-colors hover:text-white">
                Accueil
              </Link>
              <span className="mx-2 text-white/30 sm:mx-3">/</span>
              <Link
                href="/marques"
                className="transition-colors hover:text-white"
              >
                Marques
              </Link>
              <span className="mx-2 text-white/30 sm:mx-3">/</span>
              <span className="text-white/90">{brand.name}</span>
            </nav>
            {brand.image && (
              <div className="mb-6">
                <Image
                  src={brand.image}
                  alt={`Logo ${brand.name}`}
                  width={140}
                  height={60}
                  className="h-12 w-auto object-contain brightness-0 invert sm:h-16"
                />
              </div>
            )}
            <div className="flex items-center gap-3">
              <span className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                {getCountryCode(brand.country)}
              </span>
              {brand.french && (
                <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                  Made in France
                </span>
              )}
            </div>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
              {brand.name}
            </h1>
          </div>
        </section>
      )}

      {/* Fiche marque */}
      <section className="bg-white py-14 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <div className="flex flex-wrap gap-2">
                {brand.categories.map((cat) => (
                  <span
                    key={cat}
                    className="rounded-full bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                  >
                    {categoryLabels[cat]}
                  </span>
                ))}
              </div>

              {detail?.tagline && (
                <p
                  data-testid="brand-tagline"
                  className="mt-8 text-xl font-medium leading-snug text-foreground sm:text-2xl"
                >
                  {detail.tagline}
                </p>
              )}

              {detail?.story?.length ? (
                <div className="mt-6 space-y-5">
                  {detail.story.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-lg leading-relaxed text-foreground/85"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              ) : (
                brand.description && (
                  <p className="mt-8 text-lg leading-relaxed text-foreground/85">
                    {brand.description}
                  </p>
                )
              )}

              {detail?.specs && <BrandSpecsTable specs={detail.specs} />}

              {detail?.signature?.length ? (
                <div className="mt-12">
                  <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                    Ce qui distingue {brand.name}
                  </h2>
                  <ul
                    data-testid="brand-signature"
                    className="mt-5 space-y-3"
                  >
                    {detail.signature.map((item) => (
                      <li key={item} className="flex gap-3 text-base leading-relaxed text-foreground/85">
                        <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {detail?.savoirFaire?.length ? (
                <div data-testid="brand-savoirfaire" className="mt-12">
                  <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                    Savoir-faire
                  </h2>
                  <div className="mt-5 space-y-5">
                    {detail.savoirFaire.map((paragraph, index) => (
                      <p key={index} className="text-base leading-relaxed text-foreground/85">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ) : null}

              {(detail?.website ?? brand.website) && (
                <p className="mt-6">
                  <a
                    href={detail?.website ?? brand.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-light"
                  >
                    Visiter le site {brand.name}
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  </a>
                </p>
              )}
            </ScrollReveal>
          </div>
        </div>
      </section>

      {detail?.gallery?.length ? (
        <BrandGallery images={detail.gallery} brandName={brand.name} />
      ) : null}

      {/* CTA Doctolib */}
      <section className="bg-gradient-to-r from-primary to-primary-light py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Essayez {brand.name} chez Optique Queuleu
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
            Venez découvrir la collection {brand.name} dans notre magasin au 28
            rue de Queuleu à Metz. Notre équipe vous guide dans votre choix.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://www.doctolib.fr/opticien/metz/optique-queuleu"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-xs rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-white/90 sm:w-auto"
            >
              Prendre rendez-vous
            </a>
            <Link
              href="/contact"
              className="w-full max-w-xs rounded-full border border-white/30 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:w-auto"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      {/* Marques similaires */}
      {relatedBrands.length > 0 && (
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
              {relatedBrands.map((b) => (
                <Link key={b.slug} href={`/marques/${b.slug}`}>
                  <article className="group relative flex aspect-square flex-col items-center justify-center overflow-hidden rounded-2xl border border-gray-100 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
                    {b.image ? (
                      <Image
                        src={b.image}
                        alt={`Logo ${b.name}`}
                        width={80}
                        height={40}
                        className="max-h-10 w-auto max-w-[80px] object-contain opacity-70 transition-all duration-300 group-hover:opacity-100"
                        loading="lazy"
                      />
                    ) : (
                      <span className="text-center text-sm font-bold text-foreground">
                        {b.name}
                      </span>
                    )}
                    <h3 className="mt-3 text-center text-[11px] font-semibold uppercase tracking-wider text-muted-foreground transition-colors group-hover:text-primary">
                      {b.name}
                    </h3>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services complémentaires */}
      <section className="bg-white py-14 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-foreground">
              Complétez votre équipement optique
            </h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              Découvrez nos autres services et produits
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                href: "/verres",
                title: "Verres correcteurs",
                desc: "Verres ZEISS, Essilor, Seiko adaptés à votre vue",
              },
              {
                href: "/lentilles",
                title: "Lentilles de contact",
                desc: "Solutions de correction pour tous types de vue",
              },
              {
                href: "/magasin",
                title: "Notre magasin",
                desc: "Venez essayer nos montures à Metz Queuleu",
              },
              {
                href: "/contact",
                title: "Prendre rendez-vous",
                desc: "Réservez votre essayage en ligne",
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group block rounded-2xl border border-gray-200 bg-white p-6 text-center transition-all hover:border-primary/50 hover:shadow-lg"
              >
                <h3 className="text-base font-semibold text-foreground group-hover:text-primary sm:text-lg">
                  {link.title}
                </h3>
                <p className="mt-2 text-xs text-muted-foreground sm:text-sm">
                  {link.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
