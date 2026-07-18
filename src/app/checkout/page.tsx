import type { Metadata } from "next";
import Nav from "@/components/Nav";
import CheckoutClient from "@/components/CheckoutClient";

export const metadata: Metadata = {
  title: "Checkout | Limenako",
};

export default function CheckoutPage() {
  return (
    <>
      <Nav />
      <main>
        <CheckoutClient />
      </main>
    </>
  );
}
