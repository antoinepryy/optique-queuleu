"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Loader() {
  const [hidden, setHidden] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 1800);
    const remove = setTimeout(() => setHidden(true), 2500);
    return () => {
      clearTimeout(timer);
      clearTimeout(remove);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-white transition-opacity duration-700 ${
        fadeOut ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="animate-loader-logo">
          <Image
            src="/images/logo/optique-queuleu.png"
            alt="Optique Queuleu"
            width={100}
            height={100}
            className="h-24 w-auto"
            priority
          />
        </div>
        <div className="animate-loader-text flex flex-col items-center gap-1">
          <span className="text-xl font-bold uppercase tracking-[0.25em] text-foreground">
            Optique Queuleu
          </span>
          <span className="text-xs font-medium tracking-[0.2em] text-muted-foreground">
            Votre opticien à Metz
          </span>
        </div>
        <div className="animate-loader-bar mt-2 h-0.5 w-16 overflow-hidden rounded-full bg-gray-200">
          <div className="animate-loader-progress h-full rounded-full bg-primary" />
        </div>
      </div>
    </div>
  );
}
