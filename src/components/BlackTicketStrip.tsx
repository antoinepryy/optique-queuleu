"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

// Opération Black Ticket des vendredi 27 et samedi 28 novembre 2026.
// Annoncée dès le 25/11 (demande d'Antoine) : avant le 27, le bandeau
// affiche les dates à venir ; le 28, « Dernier jour ». Disparaît seul
// après la fin (heure de Paris, calculé côté visiteur).
const PROMO_START = new Date("2026-11-25T00:00:00+01:00");
const PROMO_END = new Date("2026-11-28T23:59:59+01:00");
const LAST_DAY = new Date("2026-11-28T00:00:00+01:00");
const DISMISS_KEY = "black-ticket-2026-dismissed";

export default function BlackTicketStrip() {
  const [visible, setVisible] = useState(false);
  const [lastDay, setLastDay] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  // Exception à la décision D4 (pas de promo sur l'accueil) pour ces deux
  // jours : les annonces Google Ads de l'opération arrivent sur l'accueil.

  useEffect(() => {
    const now = new Date();
    if (now < PROMO_START || now > PROMO_END) return;
    if (sessionStorage.getItem(DISMISS_KEY) === "1") return;
    setLastDay(now >= LAST_DAY);
    setVisible(true);
  }, []);

  useEffect(() => {
    if (!visible) {
      document.body.style.setProperty("--promo-strip-height", "0px");
      return;
    }
    const el = ref.current;
    if (!el) return;
    const sync = () => {
      document.body.style.setProperty("--promo-strip-height", `${el.offsetHeight}px`);
    };
    sync();
    const ro = new ResizeObserver(sync);
    ro.observe(el);
    return () => {
      ro.disconnect();
      document.body.style.setProperty("--promo-strip-height", "0px");
    };
  }, [visible]);

  const dismiss = () => {
    sessionStorage.setItem(DISMISS_KEY, "1");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div ref={ref} className="animate-slide-down fixed left-0 top-0 z-40 w-full">
      <div className="relative overflow-hidden border-b border-white/10 bg-[#0a0a0a] shadow-[0_2px_20px_rgba(0,0,0,0.45)]">
        <Link
          href="/contact"
          className="group relative flex flex-col items-center justify-center px-9 py-2 text-center transition-opacity hover:opacity-95 sm:py-2.5"
        >
          <p className="min-w-0 text-[12px] font-semibold leading-tight text-white sm:text-sm">
            <span className="font-extrabold uppercase tracking-[0.18em]">Black Ticket</span>
            <span className="mx-1.5 text-white/40">·</span>
            <span>
              jusqu&apos;à <span className="font-extrabold text-[#e7c873]">-50%</span>
              <span className="hidden sm:inline"> sur une sélection de montures optiques et solaires</span>
            </span>
            <span className="mx-1.5 text-white/40">·</span>
            <span className="text-white/85">
              {lastDay ? "Dernier jour" : "ven. 27 et sam. 28 nov."}
            </span>
            <span className="hidden md:inline">
              <span className="mx-1.5 text-white/40">·</span>
              <span className="text-white/85">Examen de vue offert sur rendez-vous</span>
            </span>
          </p>
          <p className="mt-0.5 hidden text-[10px] leading-tight text-white/45 sm:block">
            Offre valable sur une sélection de montures signalées en magasin, dans la limite des stocks disponibles. Examen de vue non médical, sur rendez-vous et selon disponibilités.
          </p>
        </Link>

        <button
          onClick={dismiss}
          className="absolute right-1.5 top-1/2 z-10 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full text-white/60 transition-colors hover:bg-white/15 hover:text-white sm:right-3"
          aria-label="Fermer le bandeau Black Ticket"
        >
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
