# Fiches marques enrichies — design

Date : 2026-07-27
Statut : validé, prêt pour plan d'implémentation

## Problème

Le site expose 55 marques de lunettes. La page `/marques/[slug]` existe déjà mais
ne rend qu'un logo, un visuel hero et un paragraphe de description. Aucune marque
n'a de `website` renseigné. Rien ne permet à un visiteur intéressé par une marque
précise de nous contacter à ce sujet sans repasser par le formulaire générique.

Objectif : une fiche marque qui informe réellement (histoire, savoir-faire,
caractéristiques techniques, visuels) et qui convertit (formulaire de contact
contextualisé sur la marque).

## Périmètre

Inclus :
- Collecte one-shot d'informations détaillées pour les 55 marques
- Nouveau modèle de données de fiche détaillée
- Enrichissement de la page `/marques/[slug]`
- Formulaire de contact pré-rempli avec la marque
- Galerie d'images par marque
- Script de validation des données

Exclu :
- Toute automatisation récurrente (pas de cron, pas de n8n, pas de CMS)
- Catalogue de modèles/références produits
- Stock ou disponibilité temps réel
- Lightbox / visionneuse d'images

## 1. Modèle de données

`src/app/marques/brands-data.ts` reste le catalogue léger et n'est pas modifié
dans sa structure. Raison : il est importé par `BrandsExplorer.tsx`, un composant
client. Y ajouter 55 fiches riches alourdirait le bundle JavaScript de `/marques`
sans bénéfice.

Nouveau fichier `src/app/marques/brands-details.ts`, importé uniquement par
`src/app/marques/[slug]/page.tsx` (composant serveur, rendu statique) :

```ts
export interface BrandSpecs {
  founded?: string;      // "1917"
  origin?: string;       // "Turin, Italie"
  group?: string;        // "Luxottica"
  madeIn?: string[];     // ["Italie"]
  materials?: string[];  // ["Acétate", "Titane"]
  frameTypes?: string[]; // ["Optique", "Solaire", "Clip solaire"]
  audience?: string[];   // ["Femme", "Homme", "Enfant"]
  warranty?: string;     // "2 ans pièces et main d'œuvre"
}

export interface BrandGalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface BrandDetail {
  slug: string;           // doit correspondre à un slug de `brands`
  tagline?: string;       // accroche courte, une ligne
  story: string[];        // paragraphes histoire / origine
  savoirFaire?: string[]; // fabrication, matériaux, ateliers
  signature?: string[];   // 3 à 5 points forts
  specs: BrandSpecs;
  gallery?: BrandGalleryImage[];
  website?: string;
  sources: string[];      // URLs consultées — jamais affiché, contrôle interne
  verified: boolean;      // false tant que le gérant n'a pas relu
}

export const brandDetails: Record<string, BrandDetail>;
export function getBrandDetail(slug: string): BrandDetail | undefined;
```

Règle dure : **un champ non sourcé est absent, jamais rempli par un placeholder.**
La page ne rend pas la ligne correspondante. Une marque avec 3 specs et une avec
8 specs rendent toutes les deux proprement. Aucun « N/A », aucun « Non communiqué ».

`verified` est à `false` par défaut. Il ne change rien au rendu ; il sert à
suivre ce qui a été relu par le gérant.

## 2. Workflow de collecte

Processus manuel, exécuté par lots d'environ 8 marques. Pour chaque marque :

1. **Recherche** : site officiel de la marque, presse optique française (Acuité,
   L'Opticien Lunetier, Silmo), fiche du fabricant ou du distributeur.
2. **Rédaction** en français. Chaque fait factuel (année, origine, groupe,
   matériaux, garantie) doit correspondre à une URL présente dans `sources`.
3. **Report des incertitudes** : tout fait trouvé mais non confirmé, ou tout champ
   qu'une source contredit, part dans `reports/marques-a-verifier.md` sous la
   forme : marque | champ | valeur trouvée | source | question posée au gérant.

Le gérant est opticien : sur les gammes réellement distribuées en boutique et les
conditions de garantie, sa réponse prime sur toute source web.

Livrables de cette étape : `brands-details.ts` rempli et `reports/marques-a-verifier.md`.

## 3. Images

Deux origines, dans cet ordre :

1. **Existant** — `public/images/marques/` (142 fichiers) et `public/images/produits/`
   (129 fichiers). Mapping slug ↔ fichier, réalisé d'abord car sans aucun risque.
2. **Téléchargement de visuels officiels** pour les marques sans visuel, depuis le
   site de la marque (espace presse / media kit en priorité, sinon page collection).
   Destination `public/images/marques/<slug>/01.webp`, converti en WebP, 1600 px
   de large maximum.

`reports/marques-images.md` trace l'URL source de chaque fichier téléchargé, la
date et la marque. Ce rapport permet de retirer en bloc les visuels dont le gérant
ne veut pas assumer l'usage.

**Risque connu et accepté** : diffuser des visuels de marque sur un site commercial
sans accord du distributeur est un risque juridique. Le gérant a été informé et a
choisi d'inclure le téléchargement. Le rapport de traçabilité rend le retrait trivial.

## 4. Page `/marques/[slug]`

Structure après modification, de haut en bas :

| Bloc | Statut | Contenu |
|---|---|---|
| Hero | existant | inchangé |
| Intro | modifié | `tagline` + paragraphes `story` si présents, sinon le `description` de `brands-data` |
| Specs | nouveau | tableau 2 colonnes, uniquement les champs présents |
| Signature | nouveau | liste de points forts |
| Savoir-faire | nouveau | paragraphes |
| Galerie | nouveau | grille responsive, `next/image`, lazy |
| Contact marque | nouveau | remplace le double CTA générique : Doctolib + formulaire pré-rempli |
| Marques similaires | existant | inchangé |
| Services complémentaires | existant | inchangé |

Chaque bloc nouveau ne rend rien si sa donnée est absente. Une marque sans
`brandDetails` rend exactement la page actuelle, plus le formulaire de contact.

JSON-LD enrichi : `foundingDate`, `material`, `parentOrganization` quand la donnée
existe. Le bloc `provider` LocalBusiness existant reste inchangé.

Les blocs sont extraits en composants dédiés sous `src/app/marques/[slug]/`
(`BrandSpecsTable.tsx`, `BrandGallery.tsx`, `BrandContactSection.tsx`) plutôt
qu'ajoutés en ligne : la page fait déjà 406 lignes et doublerait sinon.

## 5. Formulaire de contact par marque

Pas de nouveau composant de formulaire. `src/components/ContactForm.tsx` reçoit
une prop optionnelle `brand?: string`.

Comportement quand `brand` est fourni :
- Le champ `message` est initialisé à
  `Bonjour, je suis intéressé(e) par les lunettes <brand>.` — modifiable par l'utilisateur.
- Le payload EmailJS gagne un champ objet valant `Demande marque — <brand>`.

Quand `brand` est absent, le comportement actuel est strictement conservé.

Point à vérifier en début d'implémentation : le template EmailJS en production
expose-t-il une variable d'objet ? Si non, la mention de la marque est préfixée
dans le corps du message plutôt qu'ajoutée en variable. Aucun nouveau template
EmailJS ne doit être créé.

## 6. Validation

Nouveau script `scripts/check-brands.mjs`, exposé via `npm run check:brands` :
- chaque clé de `brandDetails` correspond à un slug existant dans `brands`
- chaque chemin d'image référencé (`gallery`, `image`, `heroImage`) existe sur disque
- chaque `BrandDetail` a un `story` non vide et au moins une entrée dans `sources`
- sortie en échec avec code 1 et liste des problèmes

Plus : `tsc --noEmit`, `next build` (les 55 pages doivent être générées
statiquement), et captures d'écran de trois fiches contrastées — une marque
richement documentée, une marque peu documentée, une marque sans visuel.

## 7. Séquencement

**Phase 1 — pilote (5 marques).** Persol, Gucci, Ancet Fayolle, Bollé, et une
marque sans visuel. Livre le modèle de données, les composants de page, le
formulaire, le script de validation, et les 5 fiches complètes. Le gérant valide
le rendu et le niveau de détail.

**Phase 2 — les 50 restantes.** Uniquement de la collecte et de la saisie de
données, par lots de 8, avec alimentation continue des deux rapports.

Phase 2 ne démarre qu'après validation explicite de la phase 1.

## Critères de succès

- Les 55 pages marque se génèrent statiquement, build vert
- Aucun fait affiché n'est dépourvu de source dans `sources`
- `reports/marques-a-verifier.md` liste toutes les zones d'ombre
- `reports/marques-images.md` trace l'origine de chaque visuel téléchargé
- Un envoi de formulaire depuis une page marque arrive avec la marque identifiable
- `npm run check:brands` passe
