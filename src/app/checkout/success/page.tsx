"use client";

import { useEffect } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import { useCart } from "@/lib/cart-context";

export default function CheckoutSuccessPage() {
  const { clear } = useCart();

  useEffect(() => {
    clear();
  }, [clear]);

  return (
    <>
      <Nav />
      <main id="main" className="mx-auto max-w-xl px-6 py-48 text-center">
        <p className="eyebrow mb-6">✳ Order Confirmed</p>
        <h1 className="display text-6xl text-ink md:text-7xl">
          Thank <span className="verb">you</span>.
        </h1>
        <p className="mt-6 text-[15px] text-ink-2/70">
          Your ritual is on its way. A receipt is headed to your inbox.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-[12px] text-paper transition-opacity hover:opacity-90"
        >
          back to home →
        </Link>
      </main>
    </>
  );
}
