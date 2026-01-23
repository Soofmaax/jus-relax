import type { JustRelaxData } from "@/lib/just-relax-schema";

/**
 * Affiche les moyens de paiement acceptés sous forme de badges.
 */
export default function PaymentsBadges({
  paymentMethods,
}: {
  paymentMethods: JustRelaxData["paymentMethods"];
}) {
  if (!paymentMethods || paymentMethods.length === 0) {
    return null;
  }

  return (
    <section className="rounded-3xl border border-[#e1d5cc] bg-white p-6 shadow-md shadow-black/10 sm:p-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d58c64]">
            Paiement
          </p>
          <h2 className="mt-1 text-xl font-semibold tracking-tight text-[#322] sm:text-2xl">
            Moyens de paiement acceptés
          </h2>
        </div>
      </div>
      <ul className="mt-4 flex flex-wrap gap-2 text-xs text-[#4a3a34]">
        {paymentMethods.map((method) => (
          <li
            key={method}
            className="rounded-full border border-[#e1d5cc] bg-[#f5ebe1] px-3 py-1 shadow-sm shadow-black/10"
          >
            {method}
          </li>
        ))}
      </ul>
    </section>
  );
}