"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

// Promo soldes d'été : se cache automatiquement après cette date.
const PROMO_END = new Date("2026-07-21T23:59:59+02:00");
const DISMISS_KEY = "summer-sale-2026-dismissed";

export default function SummerSaleStrip() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Décision d'affichage côté client : période active + non fermé.
  useEffect(() => {
    if (new Date() > PROMO_END) return;
    if (sessionStorage.getItem(DISMISS_KEY) === "1") return;
    setVisible(true);
  }, []);

  // Synchronise la hauteur du strip avec le header (top) et le body (padding).
  useEffect(() => {
    if (!visible) {
      document.body.style.setProperty("--promo-strip-height", "0px");
      return;
    }
    const el = ref.current;
    if (!el) return;
    const sync = () => {
      document.body.style.setProperty(
        "--promo-strip-height",
        `${el.offsetHeight}px`
      );
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
    <div
      ref={ref}
      className="animate-slide-down fixed left-0 top-0 z-40 w-full"
    >
      <div className="relative overflow-hidden bg-gradient-to-r from-[#c2410c] via-[#ea580c] to-[#d97706] shadow-[0_2px_20px_rgba(194,65,12,0.35)]">
        {/* halo solaire décoratif */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-10 -top-16 h-40 w-40 rounded-full bg-[#fbbf24]/30 blur-2xl"
        />

        <Link
          href="/contact"
          className="group relative flex items-center justify-center gap-2 px-9 py-2 text-center transition-opacity hover:opacity-95 sm:gap-3 sm:py-2.5"
        >
          {/* soleil */}
          <svg
            aria-hidden
            className="h-4 w-4 shrink-0 text-[#fde68a] sm:h-5 sm:w-5"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            />
          </svg>

          <p className="min-w-0 text-[12px] font-semibold leading-tight text-white sm:text-sm">
            <span className="font-bold uppercase tracking-wide">
              Soldes d&apos;été
            </span>
            <span className="mx-1.5 text-white/50">·</span>
            <span>
              jusqu&apos;à{" "}
              <span className="font-extrabold text-[#fde68a]">-50%</span>
            </span>
            <span className="hidden sm:inline">
              {" "}
              sur les montures en stock
              <span className="mx-1.5 text-white/50">·</span>
              <span className="text-white/85">du 24 juin au 21 juillet</span>
            </span>
          </p>

          {/* chevron CTA */}
          <svg
            aria-hidden
            className="h-3.5 w-3.5 shrink-0 text-white/80 transition-transform group-hover:translate-x-0.5 sm:h-4 sm:w-4"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </Link>

        <button
          onClick={dismiss}
          className="absolute right-1.5 top-1/2 z-10 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full text-white/60 transition-colors hover:bg-white/15 hover:text-white sm:right-3"
          aria-label="Fermer le bandeau soldes"
        >
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
