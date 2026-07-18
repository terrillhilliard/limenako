"use client";

import { useCart } from "@/lib/cart-context";

export default function AddToCartButton({ productId }: { productId: string }) {
  const { addItem } = useCart();

  return (
    <button
      type="button"
      onClick={() => addItem(productId)}
      className="rounded-full bg-navy px-5 py-2 text-[11px] font-semibold uppercase tracking-widest-xl text-cream transition-colors hover:bg-gold hover:text-navy-deep"
    >
      Add to cart
    </button>
  );
}
