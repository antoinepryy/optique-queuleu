import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-7xl font-bold text-primary">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-foreground">
        Page non trouvée
      </h2>
      <p className="mt-3 max-w-md text-muted-foreground">
        Désolé, la page que vous recherchez n&apos;existe pas ou a été
        déplacée.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
      >
        Retour à l&apos;accueil
      </Link>
    </main>
  );
}
