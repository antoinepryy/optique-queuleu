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
    <dl
      data-testid="brand-specs"
      className="mt-12 grid gap-x-8 gap-y-0 border-t border-gray-200 sm:grid-cols-2"
    >
      {rows.map((row) => (
        <div
          key={row.label}
          className="flex items-baseline justify-between gap-4 border-b border-gray-200 py-4"
        >
          <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
            {row.label}
          </dt>
          <dd className="text-right text-sm font-medium text-foreground">
            {formatValue(row.value)}
          </dd>
        </div>
      ))}
    </dl>
  );
}
