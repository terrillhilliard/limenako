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
      <main className="mx-auto max-w-lg px-6 py-40 text-center">
        <p className="font-display text-3xl">Thank you.</p>
        <p className="mt-4 text-navy/70">
          Your order is confirmed. A receipt is on its way to your inbox.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-navy px-8 py-3 text-xs font-semibold uppercase tracking-widest-xl text-cream hover:bg-gold hover:text-navy-deep"
        >
          Back to Home
        </Link>
      </main>
    </>
  );
}
