"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function PromoBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 z-40 w-full animate-slide-up">
      <div className="relative bg-gradient-to-r from-[#0b1d2c] via-[#0e2a3d] to-[#0b1d2c] shadow-[0_-4px_30px_rgba(0,0,0,0.25)]">
        {/* Close button */}
        <button
          onClick={() => setVisible(false)}
          className="absolute top-2 right-3 z-10 flex h-7 w-7 items-center justify-center rounded-full text-white/50 transition-colors hover:bg-white/10 hover:text-white"
          aria-label="Fermer"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-3 sm:flex-row sm:justify-center sm:gap-8 sm:py-3">
          {/* Service 1: Prescription */}
          <Link
            href="/blog"
            className="group flex items-center gap-3 transition-opacity hover:opacity-90"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/20">
              <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <span className="block text-sm font-bold text-white">
                Prescription en 48h*
              </span>
              <span className="block text-xs text-white/60">
                Ordonnance lunettes &amp; lentilles via télé-expertise
              </span>
            </div>
          </Link>

          {/* Separator */}
          <div className="hidden h-8 w-px bg-white/15 sm:block" />

          {/* Service 2: Oomade */}
          <Link
            href="/blog"
            className="group flex items-center gap-3 transition-opacity hover:opacity-90"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/20">
              <Image
                src="/images/marques/oomade.png"
                alt="Oomade"
                width={24}
                height={24}
                className="h-5 w-5 object-contain brightness-0 invert"
              />
            </div>
            <div>
              <span className="block text-sm font-bold text-white">
                Oomade &ndash; Vision Minute
              </span>
              <span className="block text-xs text-white/60">
                Monture reconstituée en 10 min par impression 3D
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
