import type { BrandSpecs } from "../brands-details";

const LABELS: Array<{ key: keyof BrandSpecs; label: string }> = [
  { key: "founded", label: "Création" },
  { key: "origin", label: "Origine de la marque" },
  { key: "group", label: "Groupe" },
  { key: "madeIn", label: "Fabrication" },
  { key: "materials", label: "Matériaux" },
  { key: "frameTypes", label: "Types de montures" },
  { key: "audience", label: "Collections" },
  { key: "warranty", label: "Garantie" },
];

function formatValue(value: string | string[]): string {
  return Array.isArray(value) ? value.join(", ") : value;
}

export default function BrandSpecsTable({ specs }: { specs: BrandSpecs }) {
  const rows = LABELS.map(({ key, label }) => ({ label, value: specs[key] })).filter(
    (row): row is { label: string; value: string | string[] } =>
      Array.isArray(row.value) ? row.value.length > 0 : Boolean(row.value)
  );

  if (rows.length === 0) return null;

  return (
    <div data-testid="brand-specs" className="mt-12">
      <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        La marque en bref
      </h2>
      {/* Tuiles autoportantes plutôt que rangées filaires : chaque cellule tient
          seule, la grille reste équilibrée de 1 à 8 entrées, y compris en nombre
          impair. Fond blanc + bordure : lisible sur section blanche comme muted. */}
      <dl className="mt-5 grid gap-3 sm:grid-cols-2">
        {rows.map((row) => (
          <div
            key={row.label}
            className="rounded-xl border border-gray-100 bg-white px-5 py-4 shadow-sm"
          >
            <dt className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
              {row.label}
            </dt>
            <dd className="mt-1.5 text-base font-semibold text-foreground">
              {formatValue(row.value)}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
