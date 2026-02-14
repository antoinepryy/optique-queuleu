"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl font-bold text-foreground">
        Une erreur est survenue
      </h1>
      <p className="mt-3 max-w-md text-muted-foreground">
        Nous sommes désolés, quelque chose s&apos;est mal passé. Veuillez
        réessayer.
      </p>
      <button
        onClick={() => reset()}
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
      >
        Réessayer
      </button>
    </main>
  );
}
