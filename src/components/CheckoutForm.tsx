"use client";

import { useState, type FormEvent } from "react";
import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!stripe || !elements) return;

    setSubmitting(true);
    setError(null);

    const { error: confirmError } = await stripe.confirmPayment({
      elements,
      confirmParams: { return_url: `${window.location.origin}/checkout/success` },
    });

    if (confirmError) {
      setError(confirmError.message ?? "Payment failed. Please try again.");
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <PaymentElement />
      {error && <p className="text-[13px] text-accent">{error}</p>}
      <button
        type="submit"
        disabled={!stripe || submitting}
        className="group flex w-full items-center justify-center gap-3 rounded-full bg-accent px-8 py-4 text-[12px] text-paper transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {submitting ? "processing…" : "pay now"}
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </button>
    </form>
  );
}
