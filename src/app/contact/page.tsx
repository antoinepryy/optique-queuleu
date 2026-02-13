import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Pour toutes informations supplémentaires ou questions relatives à nos produits et services, contactez-nous !",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative flex h-64 items-center pt-20 sm:h-80">
        <Image
          src="/images/boutique/contact.jpg"
          alt="Optique Queuleu - Contact"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h1 className="text-4xl font-bold uppercase tracking-[0.15em] text-white sm:text-5xl">
            Prendre contact
          </h1>
          <nav className="mt-4 text-sm text-white/70">
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
            <p className="text-lg leading-relaxed text-muted-foreground">
              Optique Queuleu est là pour vous offrir une vision claire et
              précise, à chaque étape de votre parcours optique. Que vous ayez des
              questions ou des commentaires n&apos;hésitez pas à nous contacter.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Notre équipe d&apos;experts se fera un plaisir de vous aider à
              trouver la solution qui correspond à vos besoins.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Contact section: Map + Form */}
      <section className="bg-muted py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
                  title="Localisation Optique Queuleu"
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
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <ScrollReveal className="reveal-left">
              <SectionTitle color="accent">Parking gratuit</SectionTitle>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Nous disposons d&apos;un parking privé, totalement gratuit !
                Avancez jusqu&apos;à la porte de garage, ouverture automatique.
              </p>
            </ScrollReveal>
            <ScrollReveal className="reveal-right">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/images/boutique/parking.jpg"
                  alt="Parking privé Optique Queuleu"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
