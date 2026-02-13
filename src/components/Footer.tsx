import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Col 1: Logo + phone + social */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo/optique-queuleu.png"
                alt="Optique Queuleu"
                width={36}
                height={36}
                className="h-9 w-auto"
              />
              <span className="text-lg font-bold uppercase tracking-wide text-primary">
                Optique Queuleu
              </span>
            </Link>
            <a
              href="tel:+33387373036"
              className="mt-4 block text-lg font-semibold text-primary hover:text-primary-light"
            >
              03 87 37 30 36
            </a>
            <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-accent">
              Nous suivre
            </p>
            <div className="mt-2 flex items-center gap-3">
              <a
                href="https://www.facebook.com/optiquequeuleu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-primary-light"
                aria-label="Facebook"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/optiquequeuleu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-primary-light"
                aria-label="Instagram"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Adresse + Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-accent">
              Adresse
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-foreground">
              28 Rue de Queuleu
              <br />
              57070 Metz
            </p>
            <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-primary">
              Parking gratuit
            </p>

            <h3 className="mt-6 text-sm font-bold uppercase tracking-wider text-accent">
              Services
            </h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  href="/vision-minute"
                  className="text-sm text-foreground/80 transition-colors hover:text-primary"
                >
                  Vision Minute
                </Link>
              </li>
              <li>
                <Link
                  href="/oomade"
                  className="text-sm text-foreground/80 transition-colors hover:text-primary"
                >
                  OOMADE
                </Link>
              </li>
              <li>
                <Link
                  href="/prescription-48h"
                  className="text-sm text-foreground/80 transition-colors hover:text-primary"
                >
                  Prescription 48h
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Horaires */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-accent">
              Horaires
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-primary">
              <li className="flex justify-between gap-4">
                <span className="text-foreground">Lundi</span>
                <span>14h00 - 19h00</span>
              </li>
              <li className="flex justify-between gap-4">
                <span className="text-foreground">Mardi - Vendredi</span>
                <span>9h00 - 12h00 / 14h00 - 19h00</span>
              </li>
              <li className="flex justify-between gap-4">
                <span className="text-foreground">Samedi</span>
                <span>9h00 - 12h00 / 14h00 - 18h00</span>
              </li>
              <li className="flex justify-between gap-4">
                <span className="text-foreground">Dimanche</span>
                <span>Fermé</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Google Maps */}
          <div>
            <div className="h-full min-h-[200px] overflow-hidden rounded-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2606.5!2d6.1977!3d49.0953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4794dc1b16aa5555%3A0x0!2s28+Rue+de+Queuleu%2C+57070+Metz!5e0!3m2!1sfr!2sfr!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "200px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation Optique Queuleu"
              />
            </div>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="mt-10 border-t border-gray-200 pt-6 text-center text-xs text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Optique Queuleu |{" "}
            <Link href="/mentions-legales" className="hover:text-primary">
              Mentions l&eacute;gales
            </Link>{" "}
            |{" "}
            <Link href="/cookies" className="hover:text-primary">
              Gestion des cookies
            </Link>{" "}
            |{" "}
            <Link href="/plan-du-site" className="hover:text-primary">
              Plan du site
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
