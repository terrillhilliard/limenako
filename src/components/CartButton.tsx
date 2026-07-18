"use client";

import { useCart } from "@/lib/cart-context";

export default function CartButton() {
  const { itemCount, open } = useCart();

  return (
    <button
      type="button"
      onClick={open}
      aria-label="Open cart"
      className="relative flex items-center gap-2 text-xs font-medium uppercase tracking-widest-xl text-navy hover:text-gold transition-colors"
    >
      Cart
      {itemCount > 0 && (
        <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-navy px-1.5 text-[10px] font-semibold text-cream">
          {itemCount}
        </span>
      )}
    </button>
  );
}
