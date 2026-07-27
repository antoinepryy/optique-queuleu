export interface BrandSpecs {
  founded?: string;
  origin?: string;
  group?: string;
  madeIn?: string[];
  materials?: string[];
  frameTypes?: string[];
  audience?: string[];
  warranty?: string;
}

export interface BrandGalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface BrandDetail {
  slug: string;
  tagline?: string;
  story: string[];
  savoirFaire?: string[];
  signature?: string[];
  specs: BrandSpecs;
  gallery?: BrandGalleryImage[];
  website?: string;
  /** URLs consultées lors de la collecte. Jamais affiché, contrôle interne. */
  sources: string[];
  /** Passe à true seulement après relecture par le gérant. */
  verified: boolean;
}

export const brandDetails: Record<string, BrandDetail> = {};

export function getBrandDetail(slug: string): BrandDetail | undefined {
  return brandDetails[slug];
}
