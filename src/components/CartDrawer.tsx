"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useCart, useCartLines } from "@/lib/cart-context";
import { formatPrice } from "@/lib/products";

const ease = [0.16, 1, 0.3, 1] as const;

export default function CartDrawer() {
  const { isOpen, close, subtotalCents, setQuantity, removeItem } = useCart();
  const lines = useCartLines();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[70]">
          <motion.button
            type="button"
            aria-label="Close cart"
            onClick={close}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease }}
            className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col border-l border-rule bg-paper-2 shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-rule px-7 py-6">
              <p className="display text-2xl text-ink">cart</p>
              <button
                type="button"
                onClick={close}
                aria-label="Close cart"
                className="text-[13px] text-ink-2/60 transition-colors hover:text-accent"
              >
                close ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-7 py-6">
              {lines.length === 0 ? (
                <p className="mt-6 display text-xl text-ink-2/70">your cart is empty.</p>
              ) : (
                <ul className="space-y-7">
                  {lines.map(({ product, quantity }) => (
                    <li key={product.id} className="flex gap-4">
                      <div
                        aria-hidden
                        className="h-20 w-16 shrink-0 rounded-[6px]"
                        style={{ background: product.gradient }}
                      />
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <p className="display text-lg text-ink">{product.name}</p>
                          <button
                            type="button"
                            onClick={() => removeItem(product.id)}
                            aria-label={`Remove ${product.name}`}
                            className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-2/40 transition-colors hover:text-accent"
                          >
                            remove
                          </button>
                        </div>
                        <p className="mt-1 text-[13px] text-accent">{formatPrice(product.priceCents)}</p>
                        <div className="mt-3 flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => setQuantity(product.id, quantity - 1)}
                            aria-label={`Decrease ${product.name} quantity`}
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-rule-2 text-base text-ink-2 transition-colors hover:border-accent hover:text-accent"
                          >
                            −
                          </button>
                          <span className="w-5 text-center font-mono text-[13px] text-ink">{quantity}</span>
                          <button
                            type="button"
                            onClick={() => setQuantity(product.id, quantity + 1)}
                            aria-label={`Increase ${product.name} quantity`}
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-rule-2 text-base text-ink-2 transition-colors hover:border-accent hover:text-accent"
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

            <div className="border-t border-rule px-7 py-6">
              <div className="mb-5 flex items-baseline justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-2/60">subtotal</span>
                <span className="display text-2xl text-ink">{formatPrice(subtotalCents)}</span>
              </div>
              <Link
                href="/checkout"
                onClick={close}
                aria-disabled={lines.length === 0}
                className={`group flex w-full items-center justify-center gap-3 rounded-full px-8 py-4 text-[12px] transition-opacity ${
                  lines.length === 0
                    ? "pointer-events-none border border-rule text-ink-2/40"
                    : "bg-accent text-paper hover:opacity-90"
                }`}
              >
                checkout
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}
