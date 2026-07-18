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
          items: items.map((item) => ({
            productId: item.productId,
            quantity: item.quantity,
          })),
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
      <div className="mx-auto max-w-lg px-6 py-32 text-center">
        <p className="font-display text-2xl">Your cart is empty.</p>
        <Link
          href="/#products"
          className="mt-6 inline-block rounded-full bg-navy px-8 py-3 text-xs font-semibold uppercase tracking-widest-xl text-cream hover:bg-gold hover:text-navy-deep"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto grid max-w-4xl grid-cols-1 gap-12 px-6 py-32 md:grid-cols-2">
      <div>
        <h1 className="font-display text-3xl">Checkout</h1>
        <ul className="mt-8 space-y-4">
          {lines.map(({ product, quantity }) => (
            <li key={product.id} className="flex items-center justify-between text-sm">
              <span>
                {product.name} × {quantity}
              </span>
              <span>{formatPrice(product.priceCents * quantity)}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex items-center justify-between border-t border-navy/10 pt-4 font-display text-lg">
          <span>Total</span>
          <span>{formatPrice(subtotalCents)}</span>
        </div>
      </div>

      <div>
        {stage === "details" && (
          <form onSubmit={handleContinue} className="space-y-4">
            <div>
              <label className="mb-2 block text-[11px] font-medium uppercase tracking-widest-xl text-navy/60">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-navy/15 bg-cream px-4 py-3 text-sm text-navy outline-none focus:border-gold"
              />
            </div>
            {error && <p className="text-sm text-red-600">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-navy px-8 py-4 text-xs font-semibold uppercase tracking-widest-xl text-cream transition-colors hover:bg-gold hover:text-navy-deep disabled:opacity-60"
            >
              {loading ? "Loading…" : "Continue to Payment"}
            </button>
          </form>
        )}

        {stage === "payment" && clientSecret && (
          <Elements
            stripe={getStripe()}
            options={{ clientSecret, appearance: { theme: "stripe" } }}
          >
            <CheckoutForm />
          </Elements>
        )}
      </div>
    </div>
  );
}
