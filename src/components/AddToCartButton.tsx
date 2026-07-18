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
        window.setTimeout(() => setPulse(false), 600);
      }}
      className={`group/btn inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-[12px] transition-colors ${
        pulse
          ? "border-accent bg-accent text-paper"
          : "border-rule-2 text-ink-2 hover:border-accent hover:text-accent"
      }`}
    >
      {pulse ? "added" : "add to cart"}
      <span aria-hidden className="transition-transform group-hover/btn:translate-x-0.5">
        →
      </span>
    </button>
  );
}
