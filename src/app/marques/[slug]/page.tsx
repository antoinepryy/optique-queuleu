import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ScrollReveal from "@/components/ScrollReveal";
import { brands, categoryLabels } from "../brands-data";
import { getBrandDetail } from "../brands-details";
import BrandContactSection from "./BrandContactSection";
import BrandGallery from "./BrandGallery";
import BrandHero from "./BrandHero";
import BrandSignature from "./BrandSignature";
import BrandSpecsTable from "./BrandSpecsTable";
import RelatedBrands from "./RelatedBrands";

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

  const hasGallery = (detail?.gallery?.length ?? 0) > 0;

  const site = "https://www.optiquequeuleu.com";
  const specs = detail?.specs;
  const brandId = `${site}/marques/${brand.slug}#brand`;
  const localBusinessId = `${site}/#localbusiness`;

  // Brand n'est pas un sous-type d'Organization dans le vocabulaire Schema.org : il ne
  // possede en propre que logo/slogan/review/aggregateRating. foundingDate et
  // parentOrganization sont des proprietes d'Organization. On type donc ce noeud a la
  // fois Brand et Organization (le multi-typage JSON-LD est valide) pour pouvoir porter
  // ces deux proprietes legitimement. "material" n'est valide ni sur Brand ni sur
  // Organization (c'est une propriete de Product/CreativeWork) : il n'est plus balise,
  // la donnee reste affichee dans le tableau de caracteristiques visible de la page.
  const brandNode = {
    "@id": brandId,
    "@type": ["Brand", "Organization"],
    name: brand.name,
    description: detail?.story?.[0] ?? brand.description,
    url: `${site}/marques/${brand.slug}`,
    image: brand.heroImage ? `${site}${brand.heroImage}` : undefined,
    logo: brand.image ? `${site}${brand.image}` : undefined,
    foundingDate: specs?.founded,
    parentOrganization: specs?.group
      ? { "@type": "Organization", name: specs.group }
      : undefined,
    sameAs: detail?.website ? [detail.website] : undefined,
  };

  // La relation "Optique Queuleu distribue cette marque a Metz" n'est pas exprimable via
  // une propriete directe de Brand ("provider" n'existe pas sur ce type). On modelise donc
  // deux entites distinctes dans un @graph, reliees par "brand" : une propriete
  // d'Organization qui designe "the brand(s) maintained by an organization". Le noeud
  // LocalBusiness (sous-type d'Organization) porte le signal de referencement local :
  // nom, adresse et telephone d'Optique Queuleu restent donc presents et rattaches a la
  // marque de facon comprehensible par un crawler.
  const localBusinessNode = {
    "@id": localBusinessId,
    "@type": "LocalBusiness",
    name: "Optique Queuleu",
    url: site,
    telephone: "+33387373036",
    address: {
      "@type": "PostalAddress",
      streetAddress: "28 rue de Queuleu",
      addressLocality: "Metz",
      postalCode: "57070",
      addressCountry: "FR",
    },
    brand: { "@id": brandId },
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [brandNode, localBusinessNode],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <BrandHero brand={brand} />

      {/* Fiche marque — sur fond muted quand la galerie (muted) est absente :
          la section contact qui suit est toujours blanche, deux fonds identiques
          ne doivent jamais se toucher. */}
      <section
        className={`${hasGallery ? "bg-white" : "bg-muted"} py-14 sm:py-20 lg:py-24`}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <div className="flex flex-wrap gap-2">
                {brand.categories.map((cat) => (
                  <span
                    key={cat}
                    className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground"
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
                <BrandSignature brandName={brand.name} items={detail.signature} />
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

      <BrandContactSection brandName={brand.name} />

      {/* Marques similaires */}
      <RelatedBrands brands={relatedBrands} />

      {/* Services complémentaires — muted si les similaires (muted) sont absentes :
          la section contact qui précède alors est blanche. */}
      <section
        className={`${relatedBrands.length > 0 ? "bg-white" : "bg-muted"} py-14 sm:py-20 lg:py-24`}
      >
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
