import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact Opticien Metz - Optique Queuleu | Prendre Rendez-vous",
  description:
    "Contactez votre opticien à Metz Queuleu. Prise de rendez-vous, devis lunettes et verres, parking gratuit. Optique Queuleu : 28 rue de Queuleu, 57070 Metz. Tél : 03 87 37 30 36",
  openGraph: {
    title: "Contact Opticien Metz - Optique Queuleu",
    description:
      "Contactez votre opticien à Metz Queuleu. Prise de rendez-vous, devis lunettes et verres, parking gratuit.",
    url: "https://www.optiquequeuleu.com/contact",
    siteName: "Optique Queuleu",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/boutique/contact.webp",
        width: 1200,
        height: 630,
        alt: "Contact Optique Queuleu - Opticien Metz Queuleu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Opticien Metz - Optique Queuleu",
    description:
      "Contactez votre opticien à Metz Queuleu. Prise de rendez-vous, devis lunettes et verres, parking gratuit.",
    images: ["/images/boutique/contact.webp"],
  },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    mainEntity: {
      "@type": "LocalBusiness",
      "@id": "https://www.optiquequeuleu.com/#business",
      name: "Optique Queuleu",
      image: "https://www.optiquequeuleu.com/images/boutique/contact.webp",
      telephone: "+33387373036",
      email: "contact@optiquequeuleu.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "28 rue de Queuleu",
        addressLocality: "Metz",
        postalCode: "57070",
        addressCountry: "FR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "49.0953",
        longitude: "6.1977",
      },
      url: "https://www.optiquequeuleu.com",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Friday"],
          opens: "09:00",
          closes: "12:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Friday"],
          opens: "14:00",
          closes: "19:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Thursday",
          opens: "14:00",
          closes: "19:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "09:00",
          closes: "13:00",
        },
      ],
      priceRange: "€€",
      hasMap: "https://maps.google.com/?q=28+Rue+de+Queuleu,+57070+Metz",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Banner */}
      <section className="relative flex h-64 items-center pt-20 sm:h-80">
        <Image
          src="/images/boutique/contact.webp"
          alt="Contact opticien Metz - Optique Queuleu, 28 rue de Queuleu"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h1 className="text-4xl font-bold uppercase tracking-[0.15em] text-white sm:text-5xl">
            Prendre contact
          </h1>
          <nav className="mt-4 text-sm text-white/70" aria-label="Fil d'Ariane">
            <Link href="/" className="hover:text-white">
              Accueil
            </Link>
            <span className="mx-2">&gt;</span>
            <span className="text-white">Contact</span>
          </nav>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-white py-16">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <h2 className="sr-only">Votre opticien à Metz Queuleu</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Optique Queuleu est là pour vous offrir une vision claire et
              précise, à chaque étape de votre parcours optique. Que vous ayez des
              questions ou des commentaires n&apos;hésitez pas à nous contacter.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Notre équipe d&apos;experts se fera un plaisir de vous aider à
              trouver la solution qui correspond à vos besoins.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <p>
                <strong>Adresse :</strong> 28 rue de Queuleu, 57070 Metz
              </p>
              <p>
                <strong>Tél :</strong>{" "}
                <a
                  href="tel:+33387373036"
                  className="text-primary hover:underline"
                  aria-label="Appeler Optique Queuleu au 03 87 37 30 36"
                >
                  03 87 37 30 36
                </a>
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Contact section: Map + Form */}
      <section className="bg-muted py-24" aria-labelledby="contact-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 id="contact-heading" className="sr-only">
            Nous contacter et nous localiser
          </h2>
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Google Maps */}
            <ScrollReveal className="reveal-left">
              <div className="overflow-hidden rounded-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2606.5!2d6.1977!3d49.0953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4794dc1b16aa5555%3A0x0!2s28+Rue+de+Queuleu%2C+57070+Metz!5e0!3m2!1sfr!2sfr!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "500px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Carte Google Maps - Optique Queuleu, 28 rue de Queuleu, 57070 Metz"
                  aria-label="Localisation Optique Queuleu sur Google Maps"
                />
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal className="reveal-right">
              <div className="rounded-2xl border border-gray-100 bg-white p-8">
                <h3 className="mb-6 text-xl font-semibold text-foreground">
                  Envoyez-nous un message
                </h3>
                <ContactForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Parking */}
      <section className="bg-white py-24" aria-labelledby="parking-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <ScrollReveal className="reveal-left">
              <SectionTitle color="accent" id="parking-heading">
                Parking gratuit
              </SectionTitle>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Nous disposons d&apos;un parking privé, totalement gratuit !
                Avancez jusqu&apos;à la porte de garage, ouverture automatique.
              </p>
              <div className="mt-6 space-y-4">
                <p className="text-sm text-muted-foreground">
                  <strong>Besoin d&apos;un rendez-vous ?</strong> Consultez les{" "}
                  <Link
                    href="/magasin"
                    className="text-primary underline hover:text-primary/80"
                  >
                    horaires de notre magasin
                  </Link>{" "}
                  ou découvrez notre service de{" "}
                  <Link
                    href="/vision-minute"
                    className="text-primary underline hover:text-primary/80"
                  >
                    Vision Minute
                  </Link>
                  .
                </p>
                <p className="text-sm text-muted-foreground">
                  Vous souhaitez commander en ligne ? Visitez{" "}
                  <Link
                    href="/oomade"
                    className="text-primary underline hover:text-primary/80"
                  >
                    notre boutique Oomade
                  </Link>
                  .
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal className="reveal-right">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/images/boutique/parking.webp"
                  alt="Parking privé gratuit devant Optique Queuleu - accès automatique"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
