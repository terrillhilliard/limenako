import type { Metadata } from "next";
import { Young_Serif, Newsreader, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import CartDrawer from "@/components/CartDrawer";
import MotionProvider from "@/components/MotionProvider";

const youngSerif = Young_Serif({
  variable: "--font-young-serif",
  subsets: ["latin"],
  weight: "400",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
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
      className={`${youngSerif.variable} ${newsreader.variable} ${hanken.variable}`}
    >
      <body className="min-h-screen bg-paper text-ink">
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
