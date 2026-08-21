"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import { trackConversion } from "@/lib/gtag";

export default function LentillesForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    marque: "",
    produit: "",
    correctionOD: "",
    correctionOG: "",
    quantite: "1 boîte",
    commentaire: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const message = [
      "--- PRE-COMMANDE LENTILLES ---",
      `Marque : ${form.marque || "Non précisée"}`,
      `Produit : ${form.produit || "Non précisé"}`,
      `Correction OD (oeil droit) : ${form.correctionOD || "Non précisée"}`,
      `Correction OG (oeil gauche) : ${form.correctionOG || "Non précisée"}`,
      `Quantité : ${form.quantite}`,
      form.commentaire ? `\nCommentaire : ${form.commentaire}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: form.name,
          phone: form.phone,
          email: form.email,
          message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        trackConversion("form");
        setIsSubmitted(true);
        setForm({
          name: "",
          phone: "",
          email: "",
          marque: "",
          produit: "",
          correctionOD: "",
          correctionOG: "",
          quantite: "1 boîte",
          commentaire: "",
        });
      })
      .catch(() => {
        setError(
          "Une erreur est survenue. Veuillez réessayer ou nous contacter par téléphone au 03 87 37 30 36."
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  if (isSubmitted) {
    return (
      <div className="py-8 text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <svg
            className="h-8 w-8 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="mb-4 text-2xl font-bold text-foreground">
          Pré-commande envoyée
        </h3>
        <p className="text-muted-foreground">
          Nous préparons votre commande et vous recontacterons pour confirmer
          la disponibilité et le retrait en magasin.
        </p>
        <p className="mt-4 text-sm text-muted-foreground">
          Besoin urgent ?{" "}
          <a
            href="tel:+33387373036"
            className="font-semibold text-primary hover:underline"
          >
            03 87 37 30 36
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <p
          className="rounded-lg bg-red-50 p-4 text-sm font-medium text-red-700"
          role="alert"
        >
          {error}
        </p>
      )}

      {/* Coordonnées */}
      <fieldset>
        <legend className="text-sm font-semibold uppercase tracking-wider text-accent">
          Vos coordonnées
        </legend>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="lens-name"
              className="block text-sm font-medium text-foreground"
            >
              Nom *
            </label>
            <input
              type="text"
              id="lens-name"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="lens-phone"
              className="block text-sm font-medium text-foreground"
            >
              Téléphone *
            </label>
            <input
              type="tel"
              id="lens-phone"
              name="phone"
              required
              value={form.phone}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
            />
          </div>
        </div>
        <div className="mt-4">
          <label
            htmlFor="lens-email"
            className="block text-sm font-medium text-foreground"
          >
            Email *
          </label>
          <input
            type="email"
            id="lens-email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
          />
        </div>
      </fieldset>

      {/* Lentilles */}
      <fieldset>
        <legend className="text-sm font-semibold uppercase tracking-wider text-accent">
          Vos lentilles
        </legend>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="lens-marque"
              className="block text-sm font-medium text-foreground"
            >
              Marque
            </label>
            <input
              type="text"
              id="lens-marque"
              name="marque"
              placeholder="ex: Alcon, CooperVision..."
              value={form.marque}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="lens-produit"
              className="block text-sm font-medium text-foreground"
            >
              Nom du produit
            </label>
            <input
              type="text"
              id="lens-produit"
              name="produit"
              placeholder="ex: Dailies Total 1, Biofinity..."
              value={form.produit}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
            />
          </div>
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <div>
            <label
              htmlFor="lens-od"
              className="block text-sm font-medium text-foreground"
            >
              Correction OD (oeil droit)
            </label>
            <input
              type="text"
              id="lens-od"
              name="correctionOD"
              placeholder="ex: -2.50"
              value={form.correctionOD}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="lens-og"
              className="block text-sm font-medium text-foreground"
            >
              Correction OG (oeil gauche)
            </label>
            <input
              type="text"
              id="lens-og"
              name="correctionOG"
              placeholder="ex: -3.00"
              value={form.correctionOG}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="lens-quantite"
              className="block text-sm font-medium text-foreground"
            >
              Quantité
            </label>
            <select
              id="lens-quantite"
              name="quantite"
              value={form.quantite}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
            >
              <option>1 boîte</option>
              <option>2 boîtes</option>
              <option>3 boîtes</option>
              <option>6 boîtes (6 mois)</option>
              <option>12 boîtes (1 an)</option>
            </select>
          </div>
        </div>
      </fieldset>

      {/* Commentaire */}
      <div>
        <label
          htmlFor="lens-commentaire"
          className="block text-sm font-medium text-foreground"
        >
          Commentaire (optionnel)
        </label>
        <textarea
          id="lens-commentaire"
          name="commentaire"
          rows={3}
          value={form.commentaire}
          onChange={handleChange}
          placeholder="Informations complémentaires, question..."
          className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
        />
      </div>

      {/* RGPD */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="lens-rgpd"
          name="rgpd"
          required
          className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
        />
        <label
          htmlFor="lens-rgpd"
          className="text-xs leading-relaxed text-muted-foreground"
        >
          En soumettant ce formulaire, j&apos;accepte que les informations
          saisies soient utilisées pour traiter ma pré-commande de lentilles,
          conformément au{" "}
          <a href="/mentions-legales" className="text-primary hover:underline">
            RGPD
          </a>
          .
        </label>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-light disabled:opacity-50 sm:w-auto"
      >
        {isLoading ? "Envoi en cours..." : "Pré-commander mes lentilles"}
      </button>
    </form>
  );
}
