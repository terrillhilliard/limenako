"use client";

import { useCart } from "@/lib/cart-context";

export default function CartButton() {
  const { itemCount, open } = useCart();

  return (
    <button
      type="button"
      onClick={open}
      aria-label="Open cart"
      className="group relative inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide-sm text-ink transition-colors hover:text-terra"
    >
      Cart
      <span
        className={`flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-[10px] font-semibold transition-colors ${
          itemCount > 0 ? "bg-terra text-paper" : "bg-ink/10 text-ink/50"
        }`}
      >
        {itemCount}
      </span>
    </button>
  );
}
