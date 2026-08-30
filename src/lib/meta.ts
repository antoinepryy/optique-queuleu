// Couche unique d'accès au Pixel Meta (fbq).
// AUCUN composant ne doit appeler window.fbq directement : tout passe ici.
// Même contrat que src/lib/gtag.ts (garde universelle + déduplication).
//
// Pixel Meta : 1374627159510028
// L'identifiant est surchargeable par env (NEXT_PUBLIC_META_PIXEL_ID).

export const META_PIXEL_ID =
  process.env.NEXT_PUBLIC_META_PIXEL_ID || "1374627159510028";

// Kill-switch : aligné sur celui de Google Ads, plus un interrupteur dédié.
// Permet de couper Meta seul sans toucher au suivi Google Ads.
export const META_ENABLED =
  process.env.NEXT_PUBLIC_ANALYTICS_ENABLED !== "false" &&
  process.env.NEXT_PUBLIC_META_ENABLED !== "false" &&
  Boolean(META_PIXEL_ID);

// Événements standards Meta utilisés sur le site. `Lead` couvre nos trois
// prises de contact (formulaire, téléphone, Doctolib) : ce sont toutes des
// demandes de rendez-vous, pas des achats en ligne — il n'y a pas de panier.
export const META_EVENTS = {
  form: "Lead",
  phone: "Contact",
  doctolib: "Schedule",
} as const;

export type MetaEventKind = keyof typeof META_EVENTS;

// Garde universelle : SSR-safe + fbq réellement chargé (consentement, bloqueur).
function canTrack(): boolean {
  return (
    META_ENABLED &&
    typeof window !== "undefined" &&
    typeof window.fbq === "function"
  );
}

// Déduplication temporelle, identique à gtag.ts : un même événement déclenché
// plusieurs fois en moins de DEDUP_MS (double-clic sur tel:) n'envoie qu'un hit.
const DEDUP_MS = 1500;
const lastSent: Partial<Record<MetaEventKind, number>> = {};

/**
 * Envoie un événement standard Meta.
 * @param kind form | phone | doctolib
 */
export function trackMetaEvent(kind: MetaEventKind) {
  if (!canTrack()) return;

  const now = Date.now();
  const previous = lastSent[kind];
  if (previous !== undefined && now - previous < DEDUP_MS) return;
  lastSent[kind] = now;

  window.fbq("track", META_EVENTS[kind]);
}

/**
 * Applique le choix de consentement au pixel.
 *
 * Meta expose `consent` / `revoke` / `grant` : tant que le consentement est
 * révoqué, fbq met les appels en file d'attente sans les envoyer. Le pixel est
 * initialisé en `revoke` (voir MetaPixelScripts), donc rien ne part avant un
 * clic explicite sur « Accepter » — et « Refuser » laisse le pixel muet.
 */
export function updateMetaConsent(choice: "granted" | "denied") {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  window.fbq("consent", choice === "granted" ? "grant" : "revoke");
}
