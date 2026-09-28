"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  useEffect,
  useRef,
  useState,
  type FocusEvent as ReactFocusEvent,
  type KeyboardEvent as ReactKeyboardEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { DOCTOLIB_URL } from "@/components/BookingCta";

type NavLink = { name: string; href: string; description?: string };
type NavGroup = { name: string; id: string; children: NavLink[] };
type NavEntry = NavLink | NavGroup;

// Arborescence du menu (plan 2026-2027). Source unique pour le desktop et le
// mobile : pour changer la cible d'une entrée, il suffit de changer son href ici.
// Pas d'entrée « Accueil » : le logo, à gauche, pointe déjà vers la page d'accueil.
export const mainNavigation: NavEntry[] = [
  {
    name: "Lunettes",
    id: "lunettes",
    children: [
      { name: "Nos collections", href: "/marques" },
      { name: "Créateurs", href: "/marques#createurs-acetates" },
      { name: "Fabrication française", href: "/marques#savoir-faire-francais" },
      { name: "Sport", href: "/sport" },
      { name: "Enfants", href: "/enfants-myopie" },
    ],
  },
  {
    name: "Votre vision",
    id: "votre-vision",
    children: [
      { name: "Bilan Vision ZEISS", href: "/bilan-vision-zeiss" },
      { name: "Verres", href: "/verres" },
      { name: "Enfants & myopie", href: "/enfants-myopie" },
      { name: "Lentilles", href: "/lentilles" },
    ],
  },
  { name: "Notre approche", href: "/notre-approche" },
  {
    name: "Services",
    id: "services",
    children: [
      { name: "Vision Minute", href: "/vision-minute", description: "Monture 3D en 15 min · OOMADE" },
      { name: "Prescription 48h", href: "/prescription-48h", description: "Ordonnance en 48h" },
    ],
  },
  { name: "Actualités", href: "/blog" },
];

const isGroup = (entry: NavEntry): entry is NavGroup => "children" in entry;

// Un lien vers une ancre ou un filtre (« /marques#createurs-acetates ») pointe
// vers une section de page, pas vers la page : seul le lien exact est actif,
// sinon toutes les entrées vers /marques s'allument ensemble.
const isPageLink = (href: string) => !/[#?]/.test(href);

function ChevronIcon({ open, className }: { open: boolean; className: string }) {
  return (
    <svg
      aria-hidden="true"
      className={`${className} transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Un seul sous-menu ouvert à la fois (desktop), et un seul dépliant (mobile).
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpenGroup, setMobileOpenGroup] = useState<string | null>(null);
  const desktopNavRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const transparent = isHome && !scrolled;
  const isActive = (href: string) => isPageLink(href) && pathname === href;
  const isGroupActive = (group: NavGroup) => group.children.some((c) => isActive(c.href));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Clic ou tap en dehors du menu desktop : on referme le sous-menu ouvert.
  useEffect(() => {
    const handlePointerDownOutside = (e: PointerEvent) => {
      if (desktopNavRef.current && !desktopNavRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("pointerdown", handlePointerDownOutside);
    return () => document.removeEventListener("pointerdown", handlePointerDownOutside);
  }, []);

  useEffect(
    () => () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    },
    []
  );

  const cancelHoverClose = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  // Survol : seulement pour une vraie souris. Au toucher, pointerenter précède
  // le clic : ouvrir ici ferait refermer le menu aussitôt par le clic.
  const handlePointerEnter = (id: string) => (e: ReactPointerEvent) => {
    if (e.pointerType !== "mouse") return;
    cancelHoverClose();
    setOpenMenu(id);
  };

  const handlePointerLeave = (e: ReactPointerEvent) => {
    if (e.pointerType !== "mouse") return;
    cancelHoverClose();
    hoverTimeoutRef.current = setTimeout(() => setOpenMenu(null), 150);
  };

  // Échap referme le sous-menu et rend le focus à son bouton.
  const handleGroupKeyDown = (id: string) => (e: ReactKeyboardEvent) => {
    if (e.key === "Escape" && openMenu === id) {
      e.preventDefault();
      setOpenMenu(null);
      triggerRefs.current[id]?.focus();
    }
  };

  // Le focus quitte le groupe (Tab au-delà du dernier lien) : on referme.
  const handleGroupBlur = (id: string) => (e: ReactFocusEvent<HTMLDivElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
      setOpenMenu((current) => (current === id ? null : current));
    }
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileOpenGroup(null);
  };

  const topLevelClass = (active: boolean) =>
    `text-sm uppercase tracking-wide transition-colors ${
      active
        ? transparent
          ? "font-semibold text-white"
          : "font-semibold text-primary"
        : transparent
          ? "font-medium text-white/80 hover:text-white"
          : "font-medium text-foreground/80 hover:text-primary"
    }`;

  const mobileTopLevelClass = (active: boolean) =>
    `text-sm uppercase tracking-wide ${
      active ? "font-semibold text-primary" : "font-medium text-foreground/80"
    }`;

  return (
    <header
      style={{ top: "var(--promo-strip-height, 0px)" }}
      className={`fixed z-50 w-full transition-all duration-300 ${
        transparent ? "bg-transparent" : "bg-white shadow-sm"
      }`}
    >
      <nav
        aria-label="Navigation principale"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8"
      >
        <Link href="/">
          <Image
            src="/images/logo/optique-queuleu.webp"
            alt="Optique Queuleu"
            width={44}
            height={44}
            className="h-11 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <div ref={desktopNavRef} className="hidden lg:flex lg:items-center lg:gap-5 xl:gap-8">
          {mainNavigation.map((entry) => {
            if (!isGroup(entry)) {
              return (
                <Link
                  key={entry.name}
                  href={entry.href}
                  className={topLevelClass(isActive(entry.href))}
                  aria-current={isActive(entry.href) ? "page" : undefined}
                >
                  {entry.name}
                </Link>
              );
            }

            const open = openMenu === entry.id;
            const panelId = `nav-menu-${entry.id}`;
            return (
              <div
                key={entry.id}
                className="relative"
                onPointerEnter={handlePointerEnter(entry.id)}
                onPointerLeave={handlePointerLeave}
                onKeyDown={handleGroupKeyDown(entry.id)}
                onBlur={handleGroupBlur(entry.id)}
              >
                <button
                  ref={(el) => {
                    triggerRefs.current[entry.id] = el;
                  }}
                  type="button"
                  className={`flex items-center gap-1 ${topLevelClass(isGroupActive(entry))}`}
                  onClick={() => setOpenMenu(open ? null : entry.id)}
                  aria-expanded={open}
                  aria-controls={panelId}
                >
                  {entry.name}
                  <ChevronIcon open={open} className="h-3.5 w-3.5" />
                </button>

                {/* Fermé = invisible : ses liens sortent de l'ordre de tabulation. */}
                <div
                  id={panelId}
                  className={`absolute left-1/2 top-full z-50 mt-2 w-60 -translate-x-1/2 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-lg transition-all duration-200 ${
                    open
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-1 opacity-0"
                  }`}
                >
                  <ul>
                    {entry.children.map((child) => (
                      <li key={child.name}>
                        <Link
                          href={child.href}
                          className={`block px-5 py-3 transition-colors hover:bg-muted focus-visible:bg-muted ${
                            isActive(child.href) ? "bg-muted" : ""
                          }`}
                          aria-current={isActive(child.href) ? "page" : undefined}
                          onClick={() => setOpenMenu(null)}
                        >
                          <span
                            className={`text-sm font-semibold ${
                              isActive(child.href) ? "text-primary" : "text-foreground"
                            }`}
                          >
                            {child.name}
                          </span>
                          {child.description && (
                            <span className="mt-0.5 block text-xs text-muted-foreground">
                              {child.description}
                            </span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}

          <Link
            href="/contact"
            className={topLevelClass(pathname === "/contact")}
            aria-current={pathname === "/contact" ? "page" : undefined}
          >
            Contact
          </Link>

          <a
            href={DOCTOLIB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex shrink-0 items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
          >
            <svg
              aria-hidden="true"
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
          onClick={() => (mobileMenuOpen ? closeMobileMenu() : setMobileMenuOpen(true))}
          aria-label="Menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <svg
            aria-hidden="true"
            className={`h-6 w-6 ${transparent ? "text-white" : "text-foreground"}`}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
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

      {/* Mobile menu : défile si les sous-menus dépliés dépassent la hauteur d'écran. */}
      <div
        id="mobile-menu"
        className={`transition-all duration-300 ${
          mobileMenuOpen
            ? "visible max-h-[calc(100dvh-4.25rem)] overflow-y-auto opacity-100"
            : "invisible max-h-0 overflow-hidden opacity-0"
        } border-t border-gray-100 bg-white px-6 lg:hidden`}
      >
        <ul className="py-4">
          {mainNavigation.map((entry) => {
            if (!isGroup(entry)) {
              return (
                <li key={entry.name}>
                  <Link
                    href={entry.href}
                    className={`block py-3 ${mobileTopLevelClass(isActive(entry.href))}`}
                    aria-current={isActive(entry.href) ? "page" : undefined}
                    onClick={closeMobileMenu}
                  >
                    {entry.name}
                  </Link>
                </li>
              );
            }

            const expanded = mobileOpenGroup === entry.id;
            const panelId = `mobile-nav-menu-${entry.id}`;
            return (
              <li key={entry.id}>
                <button
                  type="button"
                  className={`flex w-full items-center justify-between py-3 ${mobileTopLevelClass(
                    isGroupActive(entry)
                  )}`}
                  onClick={() => setMobileOpenGroup(expanded ? null : entry.id)}
                  aria-expanded={expanded}
                  aria-controls={panelId}
                >
                  {entry.name}
                  <ChevronIcon open={expanded} className="h-4 w-4" />
                </button>
                <ul
                  id={panelId}
                  className={`overflow-hidden transition-all duration-200 ${
                    expanded ? "visible max-h-80 opacity-100" : "invisible max-h-0 opacity-0"
                  }`}
                >
                  {entry.children.map((child) => (
                    <li key={child.name}>
                      <Link
                        href={child.href}
                        className={`block py-2 pl-4 text-sm ${
                          isActive(child.href) ? "font-semibold text-primary" : "text-foreground/70"
                        }`}
                        aria-current={isActive(child.href) ? "page" : undefined}
                        onClick={closeMobileMenu}
                      >
                        {child.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}

          <li>
            <Link
              href="/contact"
              className={`block py-3 ${mobileTopLevelClass(pathname === "/contact")}`}
              aria-current={pathname === "/contact" ? "page" : undefined}
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </li>

          <li>
            <a
              href={DOCTOLIB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block rounded-full bg-primary px-5 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-primary-light"
              onClick={closeMobileMenu}
            >
              Prendre RDV
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
