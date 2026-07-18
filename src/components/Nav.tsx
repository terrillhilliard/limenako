"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import CartButton from "./CartButton";

const LINKS = [
  { label: "Rituals", href: "/#ritual" },
  { label: "Products", href: "/#products" },
  { label: "Heritage", href: "/#heritage" },
  { label: "Contact", href: "/#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-paper/85 backdrop-blur-md border-b border-ink/10" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-5 md:px-10">
        <Link href="/#top" className="group flex items-baseline gap-2">
          <span className="display-tight text-2xl uppercase text-ink">Limenako</span>
          <span aria-hidden className="hidden text-terra sm:inline">
            ✳
          </span>
        </Link>

        <nav className="hidden items-center gap-9 text-[11px] font-semibold uppercase tracking-wide-sm text-ink md:flex">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative py-1 transition-colors hover:text-terra after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-terra after:transition-transform hover:after:scale-x-100"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <CartButton />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span className={`h-px w-6 bg-ink transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`h-px w-6 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`h-px w-6 bg-ink transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-ink/10 bg-paper px-5 pb-8 pt-4 md:hidden">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="display-tight py-2 text-3xl uppercase text-ink transition-colors hover:text-terra"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
