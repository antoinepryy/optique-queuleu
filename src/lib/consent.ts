// Gestion du consentement (Google Consent Mode v2) — 4 signaux Ads/Analytics.
// Le même choix pilote aussi le Pixel Meta (voir updateMetaConsent).
// Choix persisté en localStorage et rejoué à chaque visite.

import { updateMetaConsent } from "./meta";

export const CONSENT_STORAGE_KEY = "oq_consent_v1";
export type ConsentChoice = "granted" | "denied";

export function readConsent(): ConsentChoice | null {
  if (typeof window === "undefined") return null;
  try {
    const v = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

export function persistConsent(choice: ConsentChoice) {
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, choice);
  } catch {
    /* localStorage indisponible (navigation privée stricte) : on ignore */
  }
}

// Met à jour les 4 signaux Consent Mode v2 selon le choix utilisateur.
// Ne dépend PAS de l'ordre de chargement de la lib gtag : on passe par le
// stub dataLayer (créé si absent) pour que l'update soit mis en file d'attente
// et traité dès que gtag/js est chargé. Évite la course de rejeu au montage.
export function updateConsent(choice: ConsentChoice) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== "function") {
    window.gtag = function () {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments);
    };
  }
  window.gtag("consent", "update", {
    ad_storage: choice,
    ad_user_data: choice,
    ad_personalization: choice,
    analytics_storage: choice,
  });

  // Le Pixel Meta suit le même choix : un seul clic pilote les deux systèmes.
  updateMetaConsent(choice);
}

// Événement interne pour rouvrir la bannière depuis le lien "Gestion des cookies".
export const OPEN_CONSENT_EVENT = "oq:open-consent";
