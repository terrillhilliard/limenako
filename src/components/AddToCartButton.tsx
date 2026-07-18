"use client";

import { useState } from "react";

export default function AddToCartButton({ productName }: { productName: string }) {
  const [added, setAdded] = useState(false);

  return (
    <button
      type="button"
      onClick={() => {
        setAdded(true);
        window.setTimeout(() => setAdded(false), 1800);
      }}
      className="rounded-full bg-navy px-5 py-2 text-[11px] font-semibold uppercase tracking-widest-xl text-cream transition-colors hover:bg-gold hover:text-navy-deep"
    >
      {added ? `${productName} added` : "Add to cart"}
    </button>
  );
}
