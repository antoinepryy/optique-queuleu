"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function PromoBanner() {
  const [visible, setVisible] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!visible) {
      document.body.style.setProperty("--promo-banner-height", "0px");
      return;
    }
    const el = ref.current;
    if (!el) return;
    const sync = () => {
      document.body.style.setProperty(
        "--promo-banner-height",
        `${el.offsetHeight}px`
      );
    };
    sync();
    const ro = new ResizeObserver(sync);
    ro.observe(el);
    return () => {
      ro.disconnect();
      document.body.style.setProperty("--promo-banner-height", "0px");
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div ref={ref} className="fixed bottom-0 left-0 z-40 w-full animate-slide-up">
      <div className="relative bg-gradient-to-r from-[#0b1d2c] via-[#0e2a3d] to-[#0b1d2c] shadow-[0_-4px_30px_rgba(0,0,0,0.25)]">
        <button
          onClick={() => setVisible(false)}
          className="absolute right-1 top-1 z-10 flex h-6 w-6 items-center justify-center rounded-full text-white/50 transition-colors hover:bg-white/10 hover:text-white sm:right-3 sm:top-2 sm:h-7 sm:w-7"
          aria-label="Fermer"
        >
          <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="mx-auto flex min-w-0 max-w-7xl items-center justify-around gap-2 px-3 py-2 pr-8 sm:flex-row sm:justify-center sm:gap-8 sm:px-4 sm:py-3 sm:pr-4">
          <Link
            href="/prescription-48h"
            className="group flex min-w-0 items-center gap-2 transition-opacity hover:opacity-90 sm:gap-3"
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 sm:h-9 sm:w-9">
              <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="min-w-0">
              <span className="block truncate text-[11px] font-bold leading-tight text-white sm:text-sm">
                Prescription 48h*
              </span>
              <span className="mt-0.5 hidden text-xs text-white/60 sm:block">
                Ordonnance lunettes &amp; lentilles via télé-expertise
              </span>
            </div>
          </Link>

          <div className="h-7 w-px shrink-0 bg-white/15 sm:h-8" />

          <Link
            href="/vision-minute"
            className="group flex min-w-0 items-center gap-2 transition-opacity hover:opacity-90 sm:gap-3"
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/20 sm:h-9 sm:w-9">
              <Image
                src="/images/marques/oomade.webp"
                alt="Oomade"
                width={24}
                height={24}
                className="h-4 w-4 object-contain brightness-0 invert sm:h-5 sm:w-5"
              />
            </div>
            <div className="min-w-0">
              <span className="block truncate text-[11px] font-bold leading-tight text-white sm:text-sm">
                Vision Minute
              </span>
              <span className="mt-0.5 hidden text-xs text-white/60 sm:block">
                Monture reconstituée en 10 min par impression 3D
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
