import test from "node:test";
import assert from "node:assert/strict";
import { validateBrandDetails } from "./validate-brands.mjs";

const brands = [
  { slug: "persol", image: "/images/marques/persol.webp", heroImage: null },
  { slug: "komono", image: null, heroImage: null },
];

const ok = (src) => src === "/images/marques/persol.webp" || src === "/images/marques/persol/01.webp";

test("aucune erreur sur des données valides", () => {
  const details = {
    persol: {
      slug: "persol",
      story: ["Un paragraphe."],
      specs: { founded: "1917" },
      sources: ["https://www.persol.com/"],
      verified: false,
    },
  };
  assert.deepEqual(validateBrandDetails({ brands, details, imageExists: ok }), []);
});

test("signale une clé qui ne correspond pas au slug", () => {
  const details = {
    persol: { slug: "persoll", story: ["x"], specs: {}, sources: ["https://a.fr"], verified: false },
  };
  const errors = validateBrandDetails({ brands, details, imageExists: ok });
  assert.equal(errors.length, 2);
  assert.match(errors[0], /clé/);
  assert.match(errors[1], /absent de brands-data/);
});

test("signale un slug inconnu de brands-data", () => {
  const details = {
    inconnue: { slug: "inconnue", story: ["x"], specs: {}, sources: ["https://a.fr"], verified: false },
  };
  const errors = validateBrandDetails({ brands, details, imageExists: ok });
  assert.equal(errors.length, 1);
  assert.match(errors[0], /absent de brands-data/);
});

test("signale une story vide et des sources vides", () => {
  const details = {
    persol: { slug: "persol", story: [], specs: {}, sources: [], verified: false },
  };
  const errors = validateBrandDetails({ brands, details, imageExists: ok });
  assert.equal(errors.length, 2);
  assert.match(errors[0], /story vide/);
  assert.match(errors[1], /aucune source/);
});

test("signale une image de galerie introuvable et un alt manquant", () => {
  const details = {
    persol: {
      slug: "persol",
      story: ["x"],
      specs: {},
      sources: ["https://a.fr"],
      verified: false,
      gallery: [
        { src: "/images/marques/persol/01.webp", alt: "Lunettes Persol" },
        { src: "/images/marques/persol/99.webp", alt: "" },
      ],
    },
  };
  const errors = validateBrandDetails({ brands, details, imageExists: ok });
  assert.equal(errors.length, 2);
  assert.match(errors[0], /introuvable/);
  assert.match(errors[1], /alt manquant/);
});

test("signale une image de brands-data introuvable", () => {
  const brandsKo = [{ slug: "gucci", image: "/images/marques/absent.webp", heroImage: null }];
  const errors = validateBrandDetails({ brands: brandsKo, details: {}, imageExists: ok });
  assert.equal(errors.length, 1);
  assert.match(errors[0], /gucci/);
});
