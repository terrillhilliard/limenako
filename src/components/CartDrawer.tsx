"use client";

import Link from "next/link";
import { useCart, useCartLines } from "@/lib/cart-context";
import { formatPrice } from "@/lib/products";

export default function CartDrawer() {
  const { isOpen, close, subtotalCents, setQuantity, removeItem } = useCart();
  const lines = useCartLines();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <button
        type="button"
        aria-label="Close cart"
        onClick={close}
        className="absolute inset-0 bg-navy-deep/50"
      />

      <div className="absolute right-0 top-0 flex h-full w-full max-w-sm flex-col bg-cream shadow-2xl">
        <div className="flex items-center justify-between border-b border-navy/10 px-6 py-5">
          <p className="font-display text-xl">Your Cart</p>
          <button
            type="button"
            onClick={close}
            aria-label="Close cart"
            className="text-navy/60 hover:text-navy"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {lines.length === 0 ? (
            <p className="text-sm text-navy/60">Your cart is empty.</p>
          ) : (
            <ul className="space-y-6">
              {lines.map(({ product, quantity }) => (
                <li key={product.id} className="flex gap-4">
                  <div
                    aria-hidden
                    className="h-16 w-16 shrink-0 rounded-lg"
                    style={{ background: product.gradient }}
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-display text-base">{product.name}</p>
                      <button
                        type="button"
                        onClick={() => removeItem(product.id)}
                        aria-label={`Remove ${product.name}`}
                        className="text-xs text-navy/50 hover:text-navy"
                      >
                        Remove
                      </button>
                    </div>
                    <p className="mt-1 text-sm text-navy/60">
                      {formatPrice(product.priceCents)}
                    </p>
                    <div className="mt-2 flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setQuantity(product.id, quantity - 1)}
                        aria-label={`Decrease ${product.name} quantity`}
                        className="flex h-7 w-7 items-center justify-center rounded-full border border-navy/20 text-sm hover:border-gold"
                      >
                        −
                      </button>
                      <span className="w-4 text-center text-sm">{quantity}</span>
                      <button
                        type="button"
                        onClick={() => setQuantity(product.id, quantity + 1)}
                        aria-label={`Increase ${product.name} quantity`}
                        className="flex h-7 w-7 items-center justify-center rounded-full border border-navy/20 text-sm hover:border-gold"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-navy/10 px-6 py-6">
          <div className="mb-4 flex items-center justify-between text-sm">
            <span className="text-navy/70">Subtotal</span>
            <span className="font-display text-lg">{formatPrice(subtotalCents)}</span>
          </div>
          <Link
            href="/checkout"
            onClick={close}
            aria-disabled={lines.length === 0}
            className={`block w-full rounded-full px-8 py-4 text-center text-xs font-semibold uppercase tracking-widest-xl transition-colors ${
              lines.length === 0
                ? "pointer-events-none bg-navy/20 text-cream/60"
                : "bg-navy text-cream hover:bg-gold hover:text-navy-deep"
            }`}
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
