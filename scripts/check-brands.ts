import { existsSync } from "node:fs";
import { join } from "node:path";
import { brands, universList } from "../src/app/marques/brands-data";
import { brandDetails } from "../src/app/marques/brands-details";
import { validateBrandDetails, validateBrandUnivers } from "./lib/validate-brands.mjs";

const imageExists = (src: string) => existsSync(join(process.cwd(), "public", src));

const errors: string[] = [
  ...validateBrandDetails({ brands, details: brandDetails, imageExists }),
  ...validateBrandUnivers(
    brands,
    universList.map((u) => u.id)
  ),
];

if (errors.length > 0) {
  console.error(`${errors.length} problème(s) détecté(s) :\n`);
  for (const error of errors) console.error(`  - ${error}`);
  process.exit(1);
}

console.log(
  `OK — ${brands.length} marques, ${Object.keys(brandDetails).length} fiches détaillées, images et univers vérifiés.`
);
