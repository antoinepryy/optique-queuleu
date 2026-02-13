"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Marques", href: "/marques" },
  { name: "Verres", href: "/verres" },
  { name: "Magasin", href: "/magasin" },
  { name: "Lentilles", href: "/lentilles" },
];

const services = [
  { name: "Vision Minute", href: "/vision-minute", description: "Monture 3D en 15 min" },
  { name: "OOMADE", href: "/oomade", description: "Monture sur mesure 3D" },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const servicesTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isServicePage = services.some((s) => pathname === s.href);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleServicesEnter = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
      servicesTimeoutRef.current = null;
    }
    setServicesOpen(true);
  };

  const handleServicesLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 150);
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isHome && !scrolled ? "bg-transparent" : "bg-white shadow-sm"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
        <Link href="/">
          <Image
            src="/images/logo/optique-queuleu.png"
            alt="Optique Queuleu"
            width={44}
            height={44}
            className="h-11 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm uppercase tracking-wide transition-colors ${
                pathname === item.href
                  ? isHome && !scrolled
                    ? "font-semibold text-white"
                    : "font-semibold text-primary"
                  : isHome && !scrolled
                    ? "font-medium text-white/80 hover:text-white"
                    : "font-medium text-foreground/80 hover:text-primary"
              }`}
            >
              {item.name}
            </Link>
          ))}

          {/* Services dropdown */}
          <div
            ref={servicesRef}
            className="relative"
            onMouseEnter={handleServicesEnter}
            onMouseLeave={handleServicesLeave}
          >
            <button
              type="button"
              className={`flex items-center gap-1 text-sm uppercase tracking-wide transition-colors ${
                isServicePage
                  ? isHome && !scrolled
                    ? "font-semibold text-white"
                    : "font-semibold text-primary"
                  : isHome && !scrolled
                    ? "font-medium text-white/80 hover:text-white"
                    : "font-medium text-foreground/80 hover:text-primary"
              }`}
              onClick={() => setServicesOpen(!servicesOpen)}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Services
              <svg
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>

            <div
              className={`absolute left-1/2 top-full z-50 mt-2 w-56 -translate-x-1/2 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-lg transition-all duration-200 ${
                servicesOpen
                  ? "pointer-events-auto translate-y-0 opacity-100"
                  : "pointer-events-none -translate-y-1 opacity-0"
              }`}
            >
              {services.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className={`block px-5 py-3 transition-colors hover:bg-muted ${
                    pathname === service.href ? "bg-muted" : ""
                  }`}
                  onClick={() => setServicesOpen(false)}
                >
                  <span
                    className={`text-sm font-semibold ${
                      pathname === service.href
                        ? "text-primary"
                        : "text-foreground"
                    }`}
                  >
                    {service.name}
                  </span>
                  <span className="mt-0.5 block text-xs text-muted-foreground">
                    {service.description}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/contact"
            className={`text-sm uppercase tracking-wide transition-colors ${
              pathname === "/contact"
                ? isHome && !scrolled
                  ? "font-semibold text-white"
                  : "font-semibold text-primary"
                : isHome && !scrolled
                  ? "font-medium text-white/80 hover:text-white"
                  : "font-medium text-foreground/80 hover:text-primary"
            }`}
          >
            Contact
          </Link>

          <a
            href="https://www.doctolib.fr/opticien/metz/optique-queuleu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Prendre RDV
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <svg
            className={`h-6 w-6 ${
              isHome && !scrolled ? "text-white" : "text-foreground"
            }`}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
        } border-t border-gray-100 bg-white px-6 lg:hidden`}
      >
        <div className="py-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`block py-3 text-sm uppercase tracking-wide ${
                pathname === item.href
                  ? "font-semibold text-primary"
                  : "font-medium text-foreground/80"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          {/* Mobile Services accordion */}
          <div>
            <button
              type="button"
              className={`flex w-full items-center justify-between py-3 text-sm uppercase tracking-wide ${
                isServicePage
                  ? "font-semibold text-primary"
                  : "font-medium text-foreground/80"
              }`}
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              aria-expanded={mobileServicesOpen}
            >
              Services
              <svg
                className={`h-4 w-4 transition-transform duration-200 ${
                  mobileServicesOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-200 ${
                mobileServicesOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {services.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className={`block py-2 pl-4 text-sm ${
                    pathname === service.href
                      ? "font-semibold text-primary"
                      : "text-foreground/70"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/contact"
            className={`block py-3 text-sm uppercase tracking-wide ${
              pathname === "/contact"
                ? "font-semibold text-primary"
                : "font-medium text-foreground/80"
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>

          <a
            href="https://www.doctolib.fr/opticien/metz/optique-queuleu"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block rounded-full bg-primary px-5 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-primary-light"
            onClick={() => setMobileMenuOpen(false)}
          >
            Prendre RDV
          </a>
        </div>
      </div>
    </header>
  );
}
