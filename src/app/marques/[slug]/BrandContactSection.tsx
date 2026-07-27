import ContactForm from "@/components/ContactForm";

export default function BrandContactSection({ brandName }: { brandName: string }) {
  return (
    <section
      data-testid="brand-contact"
      className="bg-white py-14 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Essayer en boutique
            </span>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Une question sur {brandName} ?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Dites-nous ce que vous cherchez : nous vérifions la disponibilité du
              modèle et préparons votre essayage au 28 rue de Queuleu à Metz.
            </p>
            <div className="mt-8 space-y-4">
              <a
                href="https://www.doctolib.fr/opticien/metz/optique-queuleu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
              >
                Prendre rendez-vous
              </a>
              <p className="text-sm text-muted-foreground">
                Ou par téléphone au{" "}
                <a
                  href="tel:+33387373036"
                  className="font-semibold text-primary hover:underline"
                >
                  03 87 37 30 36
                </a>
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-gray-200 p-6 sm:p-8">
            <ContactForm brand={brandName} />
          </div>
        </div>
      </div>
    </section>
  );
}
