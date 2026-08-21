# Marques — traçabilité des visuels téléchargés

Les visuels ci-dessous ont été récupérés depuis les sites officiels des marques.
Diffuser un visuel de marque sur un site commercial sans accord du distributeur
est un risque juridique : ce tableau permet de retirer en bloc ce qui ne doit pas
être conservé.

| Fichier | Marque | URL source | Date | Utilisé dans |
|---|---|---|---|---|
| `public/images/marques/komono/01.webp` | Komono | https://komono.com/cdn/shop/files/0012_KOM-S20001-Hayden-Black_20Celadon-Face.jpg (visuel produit du modèle Hayden, référencé sur https://komono.com/fr) | 2026-07-27 | `brandDetails.komono.gallery` — galerie de la page `/marques/komono` |
| `public/images/marques/komono/02.webp` | Komono | https://komono.com/cdn/shop/files/0000_KOM-S20226-Lani-Amber_20Tide-Face.jpg (visuel produit du modèle Lani, référencé sur https://komono.com/fr) | 2026-07-27 | `brandDetails.komono.gallery` — galerie de la page `/marques/komono` |

Les deux fichiers ont été convertis en WebP et redimensionnés à 1600 px de large
(qualité 82) avec `cwebp`. Aucune dépendance n’a été ajoutée au projet.

## Marques pour lesquelles aucun visuel n’a pu être téléchargé

Aucun visuel officiel n’a pu être récupéré pour Gucci, Bollé et Ancet + Fayolle :
leurs sites refusent les requêtes automatisées ou ne répondent plus.

| Marque | Adresse testée le 2026-07-27 | Résultat |
|---|---|---|
| Gucci | https://www.gucci.com/ , https://media.gucci.com/ | aucune connexion établie |
| Bollé | https://www.bolle.com/ , https://bollebrands.com/ | 403 (accès refusé aux robots) |
| Ancet + Fayolle | https://ancetfayolle.com/ | le nom de domaine ne résout plus |

Ces trois marques n’ont donc qu’un seul visuel en galerie, celui déjà présent dans
le dépôt avant cette tâche. Les visuels supplémentaires devront être demandés aux
représentants, ce qui est de toute façon la voie la plus sûre juridiquement.
