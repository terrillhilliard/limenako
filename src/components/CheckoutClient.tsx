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
        <p className="display text-5xl text-ink">empty.</p>
        <p className="mt-4 text-[15px] text-ink-2/70">your cart is empty.</p>
        <Link
          href="/#products"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-[12px] text-paper transition-opacity hover:opacity-90"
        >
          browse products →
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-16 px-5 pb-28 pt-36 md:grid-cols-2 md:px-10">
      <div>
        <p className="eyebrow mb-5">00 · Checkout</p>
        <h1 className="display text-5xl text-ink md:text-6xl">
          Your <span className="verb">order</span>.
        </h1>

        <ul className="mt-10 divide-y divide-rule border-y border-rule">
          {lines.map(({ product, quantity }) => (
            <li key={product.id} className="flex items-center gap-4 py-5">
              <div aria-hidden className="h-16 w-14 shrink-0 rounded-[6px]" style={{ background: product.gradient }} />
              <div className="flex-1">
                <p className="display text-lg text-ink">{product.name}</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-2/50">qty {quantity}</p>
              </div>
              <span className="display text-lg text-ink">
                {formatPrice(product.priceCents * quantity)}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-baseline justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-2/60">total</span>
          <span className="display text-3xl text-accent">{formatPrice(subtotalCents)}</span>
        </div>
      </div>

      <div className="md:pt-16">
        {stage === "details" && (
          <form onSubmit={handleContinue} className="space-y-6">
            <div>
              <label htmlFor="checkout-email" className="mb-2 block font-mono text-[10px] uppercase tracking-[0.1em] text-ink-2/50">
                Email Address *
              </label>
              <input
                id="checkout-email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-0 border-b border-rule bg-transparent px-0 py-3 text-[14px] text-ink outline-none transition-colors focus:border-accent"
              />
            </div>
            {error && <p className="text-[12px] text-accent">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="group inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-[12px] text-paper transition-opacity hover:opacity-90 disabled:opacity-60"
            >
              {loading ? "loading…" : "continue to payment"}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </form>
        )}

        {stage === "payment" && clientSecret && (
          <div className="stripe-shell">
            <Elements
              stripe={getStripe()}
              options={{
                clientSecret,
                appearance: {
                  theme: "night",
                  variables: {
                    colorPrimary: "#d4af37",
                    colorBackground: "#1a2b42",
                    fontFamily: "Geist, system-ui, sans-serif",
                    borderRadius: "8px",
                  },
                },
              }}
            >
              <CheckoutForm />
            </Elements>
          </div>
        )}
      </div>
    </div>
  );
}
