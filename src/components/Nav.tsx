"use client";

import { useState } from "react";
import CartButton from "./CartButton";

const LINKS = [
  { label: "Rituals", href: "#ritual" },
  { label: "Products", href: "#products" },
  { label: "Our Story", href: "#story" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-cream/90 backdrop-blur border-b border-navy/10">
      <div className="mx-auto max-w-7xl px-6 md:px-10 h-20 flex items-center justify-between">
        <a
          href="#top"
          className="font-display text-2xl tracking-widest-xl uppercase text-navy"
        >
          Limenako
        </a>

        <nav className="hidden md:flex items-center gap-10 text-xs font-medium uppercase tracking-widest-xl text-navy">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-gold transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <CartButton />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
            className="md:hidden flex flex-col gap-1.5 p-2"
          >
            <span className="w-6 h-px bg-navy" />
            <span className="w-6 h-px bg-navy" />
            <span className="w-6 h-px bg-navy" />
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden flex flex-col gap-6 px-6 pb-8 text-sm font-medium uppercase tracking-widest-xl text-navy">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="hover:text-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
