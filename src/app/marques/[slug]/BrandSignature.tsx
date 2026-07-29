/**
 * Points signature de la marque : le bloc le plus vendeur de la fiche.
 * Tuiles blanches à tranche dorée plutôt que liste à puces, avec un vrai
 * titre de section — le bloc porte visuellement, pas seulement textuellement.
 */
export default function BrandSignature({
  brandName,
  items,
}: {
  brandName: string;
  items: string[];
}) {
  if (items.length === 0) return null;

  return (
    <div className="mt-14">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        Signature
      </span>
      <h2 className="mt-2 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
        Ce qui distingue {brandName}
      </h2>
      <ul data-testid="brand-signature" className="mt-6 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-xl border border-gray-100 border-l-[3px] border-l-accent bg-white px-5 py-4 text-[15px] font-medium leading-relaxed text-foreground shadow-sm"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
