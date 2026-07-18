"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { Elements } from "@stripe/react-stripe-js";
import { useCart, useCartLines } from "@/lib/cart-context";
import { formatPrice } from "@/lib/products";
import { getStripe } from "@/lib/stripe-client";
import CheckoutForm from "./CheckoutForm";

type Stage = "details" | "payment";

export default function CheckoutClient() {
  const { subtotalCents, items } = useCart();
  const lines = useCartLines();
  const [email, setEmail] = useState("");
  const [stage, setStage] = useState<Stage>("details");
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleContinue(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          items: items.map((item) => ({ productId: item.productId, quantity: item.quantity })),
        }),
      });
      const json = await res.json().catch(() => null);
      if (!res.ok) {
        throw new Error(json?.error ?? "Something went wrong. Please try again.");
      }
      setClientSecret(json.clientSecret);
      setStage("payment");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (lines.length === 0) {
    return (
      <div className="mx-auto max-w-lg px-6 py-40 text-center">
        <p className="display-tight text-5xl uppercase text-ink">Empty</p>
        <p className="mt-4 font-serif text-xl text-ink-soft">Your cart is empty.</p>
        <Link
          href="/#products"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 text-[11px] font-semibold uppercase tracking-wide-sm text-paper transition-colors hover:bg-terra"
        >
          Browse Products →
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-16 px-5 pb-28 pt-36 md:grid-cols-2 md:px-10">
      <div>
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-mega text-terra">Checkout</p>
        <h1 className="display-tight text-5xl text-ink md:text-6xl">
          Your <span className="text-leaf">order</span>
        </h1>

        <ul className="mt-10 divide-y divide-ink/10 border-y border-ink/15">
          {lines.map(({ product, quantity }) => (
            <li key={product.id} className="flex items-center gap-4 py-5">
              <div aria-hidden className="h-16 w-14 shrink-0 rounded-sm" style={{ background: product.gradient }} />
              <div className="flex-1">
                <p className="font-serif text-lg text-ink">{product.name}</p>
                <p className="text-[11px] uppercase tracking-wide-sm text-ink-soft">Qty {quantity}</p>
              </div>
              <span className="display-tight text-lg text-ink">
                {formatPrice(product.priceCents * quantity)}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-baseline justify-between">
          <span className="text-[11px] font-semibold uppercase tracking-wide-sm text-ink-soft">Total</span>
          <span className="display-tight text-3xl text-terra">{formatPrice(subtotalCents)}</span>
        </div>
      </div>

      <div className="md:pt-16">
        {stage === "details" && (
          <form onSubmit={handleContinue} className="space-y-6">
            <div>
              <label className="mb-2 block text-[10px] font-semibold uppercase tracking-wide-sm text-ink-soft">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-0 border-b border-ink/25 bg-transparent px-0 py-3 text-sm text-ink outline-none transition-colors focus:border-terra"
              />
            </div>
            {error && <p className="text-xs text-terra">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="group inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-[11px] font-semibold uppercase tracking-wide-sm text-paper transition-colors hover:bg-terra disabled:opacity-60"
            >
              {loading ? "Loading…" : "Continue to Payment"}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </form>
        )}

        {stage === "payment" && clientSecret && (
          <div className="stripe-shell">
            <Elements stripe={getStripe()} options={{ clientSecret, appearance: { theme: "flat" } }}>
              <CheckoutForm />
            </Elements>
          </div>
        )}
      </div>
    </div>
  );
}
