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

export const brandDetails: Record<string, BrandDetail> = {
  persol: {
    slug: "persol",
    tagline: "Depuis 1917, la lunette turinoise « pour le soleil ».",
    story: [
      "L’histoire de Persol commence en 1917 à Turin, quand le photographe et inventeur Giuseppe Ratti crée l’entreprise Ratti pour fabriquer des lunettes de protection destinées aux pilotes — de trams comme de voitures de course. Le modèle Protector est rapidement adopté par l’armée italienne, puis par les civils.",
      "Riche de vingt-et-un ans d’innovations, la maison devient Persol en 1938. Le nom est une contraction de « per il sol », pour le soleil. Avant même Steve McQueen, c’est Marcello Mastroianni qui popularise la marque dans La Dolce Vita de Federico Fellini, en 1960.",
    ],
    specs: {
      founded: "1917",
      origin: "Turin, Italie",
      group: "EssilorLuxottica",
      madeIn: ["Italie"],
    },
    website: "https://www.persol.com/",
    sources: [
      "https://www.otticavascellari.it/en/100-years-of-persol/",
      "https://marques-de-luxe.fr/persol/",
      "https://www.made-in-italy.com/italian-fashion/shopping/sunglasses-and-eyeglasses/attachment/marcello-mastroianni-in-la-dolce-vita/",
    ],
    verified: false,
  },
};

export function getBrandDetail(slug: string): BrandDetail | undefined {
  return brandDetails[slug];
}
