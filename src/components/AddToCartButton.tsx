"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart-context";

export default function AddToCartButton({ productId }: { productId: string }) {
  const { addItem } = useCart();
  const [pulse, setPulse] = useState(false);

  return (
    <button
      type="button"
      onClick={() => {
        addItem(productId);
        setPulse(true);
        window.setTimeout(() => setPulse(false), 500);
      }}
      className={`group/btn inline-flex items-center gap-2 rounded-full border border-ink px-5 py-2.5 text-[11px] font-semibold uppercase tracking-wide-sm transition-colors ${
        pulse ? "bg-terra border-terra text-paper" : "bg-transparent text-ink hover:bg-ink hover:text-paper"
      }`}
    >
      {pulse ? "Added" : "Add"}
      <span aria-hidden className="transition-transform group-hover/btn:rotate-90">
        +
      </span>
    </button>
  );
}
