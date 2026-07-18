"use client";

import { useCart } from "@/lib/cart-context";

export default function CartButton() {
  const { itemCount, open } = useCart();

  return (
    <button
      type="button"
      onClick={open}
      aria-label="Open cart"
      className="inline-flex items-center gap-2 text-[13px] text-ink-2/80 transition-colors hover:text-accent"
    >
      cart
      <span
        className={`flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 font-mono text-[10px] transition-colors ${
          itemCount > 0 ? "bg-accent text-paper" : "bg-ink/10 text-ink-2/50"
        }`}
      >
        {itemCount}
      </span>
    </button>
  );
}
