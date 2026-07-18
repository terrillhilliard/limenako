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
      <main className="mx-auto max-w-xl px-6 py-48 text-center">
        <p className="mb-6 text-[11px] font-semibold uppercase tracking-mega text-terra">
          Order Confirmed
        </p>
        <h1 className="display-tight text-6xl uppercase text-ink md:text-7xl">
          Thank <span className="font-serif italic text-terra">you.</span>
        </h1>
        <p className="mt-6 font-serif text-xl italic text-ink-soft">
          Your ritual is on its way. A receipt is headed to your inbox.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 text-[11px] font-semibold uppercase tracking-wide-sm text-paper transition-colors hover:bg-terra"
        >
          Back to Home →
        </Link>
      </main>
    </>
  );
}
