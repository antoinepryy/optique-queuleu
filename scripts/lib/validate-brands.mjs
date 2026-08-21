/**
 * Valide la cohérence entre le catalogue de marques et les fiches détaillées.
 * @param {{ brands: Array<{slug: string, image: string|null, heroImage?: string|null}>,
 *           details: Record<string, object>,
 *           imageExists: (src: string) => boolean }} input
 * @returns {string[]} liste d'erreurs lisibles, vide si tout est valide
 */
export function validateBrandDetails({ brands, details, imageExists }) {
  const errors = [];
  const knownSlugs = new Set(brands.map((b) => b.slug));

  for (const [key, detail] of Object.entries(details)) {
    if (key !== detail.slug) {
      errors.push(`${key} : la clé ne correspond pas à detail.slug ("${detail.slug}")`);
    }
    if (!knownSlugs.has(detail.slug)) {
      errors.push(`${detail.slug} : slug absent de brands-data.ts`);
    }
    if (!Array.isArray(detail.story) || detail.story.length === 0) {
      errors.push(`${detail.slug} : story vide`);
    }
    if (!detail.tagline || detail.tagline.trim() === "") {
      errors.push(`${detail.slug} : tagline vide ou absente`);
    }
    if (!Array.isArray(detail.sources) || detail.sources.length === 0) {
      errors.push(`${detail.slug} : aucune source renseignée`);
    }
    for (const image of detail.gallery ?? []) {
      if (!imageExists(image.src)) {
        errors.push(`${detail.slug} : image de galerie introuvable ${image.src}`);
      }
      if (!image.alt) {
        errors.push(`${detail.slug} : alt manquant pour ${image.src}`);
      }
    }
  }

  for (const brand of brands) {
    for (const src of [brand.image, brand.heroImage]) {
      if (src && !imageExists(src)) {
        errors.push(`${brand.slug} : image introuvable ${src}`);
      }
    }
  }

  return errors;
}
