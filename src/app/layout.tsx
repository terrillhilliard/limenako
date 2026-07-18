import type { Metadata } from "next";
import { Instrument_Serif, Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import CartDrawer from "@/components/CartDrawer";
import MotionProvider from "@/components/MotionProvider";

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Limenako — Simply Sacred",
  description:
    "Sacred botanical skincare born between Ho Chi Minh City and Southern Africa. Reclaim your glow through rituals rooted in ancestry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrument.variable} ${geist.variable} ${jetbrains.variable}`}
    >
      <body className="min-h-screen bg-paper text-ink-2">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <CartProvider>
          <MotionProvider>
            {children}
            <CartDrawer />
          </MotionProvider>
        </CartProvider>
      </body>
    </html>
  );
}
