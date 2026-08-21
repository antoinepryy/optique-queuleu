"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  readConsent,
  persistConsent,
  updateConsent,
  OPEN_CONSENT_EVENT,
  type ConsentChoice,
} from "@/lib/consent";

// Bannière de consentement maison (Consent Mode v2 advanced).
// - Affichée tant qu'aucun choix n'est stocké.
// - Rejoue le choix stocké au montage (visites suivantes).
// - Réouvrable via le lien "Gestion des cookies" du footer (OPEN_CONSENT_EVENT).
export default function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const prev = readConsent();
    if (prev) {
      updateConsent(prev); // rejoue le consentement passé
    } else {
      setVisible(true); // premier passage : on demande
    }

    const reopen = () => setVisible(true);
    window.addEventListener(OPEN_CONSENT_EVENT, reopen);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, reopen);
  }, []);

  const choose = (choice: ConsentChoice) => {
    persistConsent(choice);
    updateConsent(choice);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Gestion des cookies"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-gray-200 bg-white p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] sm:p-6"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-foreground">
          Nous utilisons des cookies de mesure d&apos;audience publicitaire
          (Google Ads) pour comprendre l&apos;efficacité de nos campagnes. Vous
          pouvez accepter ou refuser. En savoir plus dans nos{" "}
          <Link
            href="/mentions-legales"
            className="font-semibold text-primary hover:underline"
          >
            mentions légales
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => choose("denied")}
            className="rounded-full border border-gray-300 px-6 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-gray-50"
          >
            Refuser
          </button>
          <button
            type="button"
            onClick={() => choose("granted")}
            className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
