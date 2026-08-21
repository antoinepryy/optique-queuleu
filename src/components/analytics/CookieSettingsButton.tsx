"use client";

import { OPEN_CONSENT_EVENT } from "@/lib/consent";

// Petit bouton client pour rouvrir la bannière de consentement depuis le footer
// (Server Component). Émet un événement écouté par ConsentBanner.
export default function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_CONSENT_EVENT))}
      className="text-muted-foreground transition-colors hover:text-primary"
    >
      Gestion des cookies
    </button>
  );
}
