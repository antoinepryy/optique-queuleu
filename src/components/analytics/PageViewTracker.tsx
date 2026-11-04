"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { trackPageView } from "@/lib/gtag";

// Compte les navigations internes dans GA4. La détection automatique de GA4
// (« changements d'historique ») ne se déclenche pas sur ce site, malgré son
// activation dans le flux : constaté au navigateur, quel que soit le consentement.
// Le chemin initial est ignoré : sa page vue part déjà du gtag('config', ...).
//
// Next vide document.title quelques millisecondes pendant certaines navigations :
// l'envoi attend donc le nouveau titre, sans bloquer la mesure s'il n'arrive pas.
const TITLE_POLL_MS = 50;
const TITLE_MAX_POLLS = 20;

export default function PageViewTracker() {
  const pathname = usePathname();
  const lastPathname = useRef(pathname);

  useEffect(() => {
    if (lastPathname.current === pathname) return;
    lastPathname.current = pathname;

    let polls = 0;
    let timer: ReturnType<typeof setTimeout>;
    const sendOnceTitled = () => {
      if (document.title || ++polls >= TITLE_MAX_POLLS) {
        trackPageView();
      } else {
        timer = setTimeout(sendOnceTitled, TITLE_POLL_MS);
      }
    };
    sendOnceTitled();

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
