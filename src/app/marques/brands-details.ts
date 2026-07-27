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
  tagline: string;
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
      "L’histoire de Persol commence en 1917 à Turin, quand Giuseppe Ratti, photographe et opticien à la tête de la maison Ratti, se met à fabriquer des lunettes de protection destinées aux aviateurs et aux pilotes de voitures de course. Le modèle Protector est rapidement adopté par l’armée italienne, puis par les civils.",
      "Riche de vingt-et-un ans d’innovations, la maison devient Persol en 1938. Le nom est une contraction de « per il sole », pour le soleil. Avant même Steve McQueen, c’est Marcello Mastroianni qui popularise la marque dans La Dolce Vita de Federico Fellini, en 1960.",
    ],
    savoirFaire: [
      "Trois éléments distinguent une Persol : la flèche Supreme Arrow qui orne la charnière, la branche Meflecto à lamelles flexibles brevetée dans les années 1930, et les verres minéraux Crystal.",
      "Les montures sont assemblées à la main dans les ateliers italiens de la marque, en acétate ou en métal.",
    ],
    signature: [
      "Flèche Supreme Arrow sur la charnière",
      "Branches Meflecto à lamelles flexibles",
      "Verres minéraux Crystal",
      "Modèle 649, dessiné en 1957 pour les conducteurs de tram turinois",
    ],
    specs: {
      founded: "1917",
      origin: "Turin, Italie",
      madeIn: ["Italie"],
    },
    website: "https://www.persol.com/",
    sources: [
      "https://www.otticavascellari.it/en/100-years-of-persol/",
      "https://marques-de-luxe.fr/persol/",
      "https://www.made-in-italy.com/italian-fashion/shopping/sunglasses-and-eyeglasses/attachment/marcello-mastroianni-in-la-dolce-vita/",
      "https://www.persol.com/fr-fr/blogs/editorials/heritage",
      "https://www.monopticien.com/marques/persol",
      "https://www.optique-sergent.com/lunettes-de-soleil/persol/",
    ],
    verified: false,
  },
  gucci: {
    slug: "gucci",
    tagline: "Florence, 1921 : l’artisanat italien devenu langage du luxe.",
    story: [
      "Gucci naît à Florence en 1921, quand Guccio Gucci y ouvre sa première boutique. Sa passion pour l’artisanat italien pose les bases d’un style qui mêle les codes aristocratiques traditionnels à l’esprit de la dolce vita.",
      "La maison s’impose d’abord par la maroquinerie : le mocassin Horsebit 1953, le sac Jackie 1961 et la ligne Bamboo 1947 deviennent des classiques immédiats. Gucci appartient aujourd’hui au groupe de luxe Kering, qui a nommé Demna directeur artistique de la maison en 2025.",
    ],
    savoirFaire: [
      "Les lunettes Gucci sont dessinées, développées et distribuées par Kering Eyewear, société fondée en 2014 par Kering et une équipe de dirigeants menée par Roberto Vedovotto pour internaliser la lunetterie de ses maisons.",
      "Les collections de lunettes relisent les codes de la maison en acétate épais : œil de chat large, rectangles étroits, et un logo métal posé à la verticale le long du profil de la branche.",
    ],
    signature: [
      "Logo Gucci en métal sur le profil de la branche",
      "Acétate épais sculpté en œil de chat large ou en rectangle étroit",
      "Logo découpé en trois dimensions sur les branches des montures optiques",
    ],
    specs: {
      founded: "1921",
      origin: "Florence, Italie",
      group: "Kering",
    },
    gallery: [
      {
        src: "/images/produits/gucci-campagne.webp",
        alt: "Lunettes de soleil Gucci à monture écaille et verres verts, portées dans une campagne de la maison",
      },
    ],
    website: "https://www.gucci.com",
    sources: [
      "https://www.kering.com/en/houses/fashion-and-leather-goods/gucci/",
      "https://www.kering.com/en/houses/kering-eyewear/",
      "https://www.keringeyewear.com/en/brands/gucci",
    ],
    verified: false,
  },
  "ancet-fayolle": {
    slug: "ancet-fayolle",
    tagline: "L’atelier lyonnais où la soie a laissé place à l’acétate.",
    story: [
      "L’histoire commence dans la soierie lyonnaise. Marcel Fayolle s’associe à Louis Ancet pour mettre au point le premier métier à tisser circulaire, puis un métier sans navette. Fiables, abordables et réparables, ces machines connaissent un succès international après les foires de New-York en 1948 et de Bruxelles en 1955.",
      "Florentin, descendant de Marcel Fayolle, reprend le fil sur la colline de la Croix-Rousse. La soie laisse place à l’acétate de cellulose. Artisan-lunetier depuis 2013, il fabrique d’abord des montures sur mesure pour ses premiers clients, avant que l’atelier ne s’agrandisse et que la marque ne voie le jour.",
    ],
    savoirFaire: [
      "Formé par un Meilleur Ouvrier de France, Florentin maîtrise toutes les étapes, de la conception à la finition de la monture.",
      "Les montures sont fabriquées à la main dans l’atelier lyonnais de la marque.",
      "L’atelier associe techniques artisanales et technologie de pointe, comme l’avait fait Marcel Fayolle en son temps.",
    ],
    signature: [
      "Fabrication sur mesure à la Croix-Rousse, à Lyon",
      "Montures optiques et solaires, pour homme et pour femme",
    ],
    specs: {
      origin: "Lyon, France",
      madeIn: ["France"],
    },
    gallery: [
      {
        src: "/images/produits/ancet-fayolle.webp",
        alt: "Monture ronde écaille signée ancet + fayolle, atelier lunetier lyonnais distribué à Metz",
      },
    ],
    sources: [
      "https://www.carrerondopticiens.com/createurs/ancet-fayolle",
      "https://histoire-dy-voir.com/ancetfayolle",
      "https://www.sacreesmirettes.com/ancetfayolle/",
    ],
    verified: false,
  },
  bolle: {
    slug: "bolle",
    tagline: "Née à Oyonnax en 1888, passée du peigne au verre de sport.",
    story: [
      "L’entreprise Bollé est fondée en 1888 à Oyonnax, dans l’Ain, par Séraphin Bollé. Elle se spécialise dans la fabrication de peignes et ne commercialise sa première paire de lunettes qu’en 1946, avant de lancer sa première collection de lunettes de ski dans les années 1960.",
      "En 2018, après le rachat de Bollé, Cébé et Serengeti au groupe Vista Outdoor, une holding est créée sous le nom de Bollé Brands. Son siège reste en France, pays où la marque est basée depuis 1888.",
    ],
    savoirFaire: [
      "Bollé s’appuie sur deux technologies de verres maison : Phantom et Volt +, ce dernier présenté par la marque comme le premier verre solaire développé à l’aide de l’intelligence artificielle.",
      "Volt + a été mis au point en analysant plus de 20 millions de combinaisons. Il améliore la perception des couleurs de 30 % par rapport à un verre standard, en empruntant notamment aux verres destinés aux daltoniens, tout en conservant naturellement les blancs.",
    ],
    signature: [
      "Verres Phantom",
      "Verres Volt + à polarisation haute performance, nommés aux Silmo d’Or 2020 dans la catégorie Vision",
      "Lunettes, masques de ski et casques dessinés pour la pratique sportive",
    ],
    specs: {
      founded: "1888",
      origin: "Oyonnax, France",
      group: "Bollé Brands",
    },
    gallery: [
      {
        src: "/images/produits/bolle-icarus.webp",
        alt: "Cycliste portant des lunettes de soleil et un casque Bollé, verres teintés ambre",
      },
    ],
    website: "https://www.bolle.com/",
    sources: [
      "https://fr.wikipedia.org/wiki/Boll%C3%A9_(entreprise)",
      "https://www.acuite.fr/actualite/economie/144760/les-marques-bolle-cebe-et-serengeti-regroupees-au-sein-dune-nouvelle",
      "https://www.acuite.fr/actualite/produit/206416/bolle-ameliore-la-perception-des-couleurs-au-dela-de-lhumainement-possible",
    ],
    verified: false,
  },
  komono: {
    slug: "komono",
    tagline: "Anvers, 2009 : l’avant-garde rendue accessible.",
    story: [
      "Komono est fondée en 2009 en Belgique par Anton Janssens et Raf Maes, deux anciens snowboardeurs professionnels qui se sont connus bien avant leurs années mode. La marque est profondément ancrée dans la scène anversoise, une ville tournée vers la mode, entre l’Académie et les Antwerp Six.",
      "Son nom vient du japonais, où komono désigne un petit objet. Le choix est d’abord graphique : les deux premiers O évoquent les verres d’une paire de lunettes, le dernier le boîtier d’une montre. Le catalogue suit la même logique — lunettes de soleil, montures optiques, montres et masques de ski.",
    ],
    savoirFaire: [
      "Le prix juste est un parti pris assumé : Anton Janssens dit vouloir des marges « fair » plutôt que les marges « fake » de certains concurrents, et préfère réduire son budget publicitaire plutôt que financer de grandes campagnes portées par des stars.",
    ],
    signature: [
      "Lunettes de soleil, montures optiques, montres et masques de ski",
    ],
    specs: {
      founded: "2009",
      origin: "Anvers, Belgique",
    },
    gallery: [
      {
        src: "/images/produits/komono.webp",
        alt: "Cinq mannequins portant des lunettes de soleil Komono aux formes et teintes variées",
      },
      {
        src: "/images/marques/komono/01.webp",
        alt: "Lunettes de soleil Komono Hayden, monture rectangulaire en acétate noir et verres verts",
      },
      {
        src: "/images/marques/komono/02.webp",
        alt: "Lunettes de soleil Komono Lani, monture métal fine et verres orangés",
      },
    ],
    website: "https://komono.com/fr",
    sources: [
      "https://komono.com/pages/about",
      "https://metalmagazine.eu/en/post/komono-vision-and-timing",
      "https://komono.com/fr",
    ],
    verified: false,
  },
};

export function getBrandDetail(slug: string): BrandDetail | undefined {
  return brandDetails[slug];
}
