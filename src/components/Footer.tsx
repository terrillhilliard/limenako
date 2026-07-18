import Link from "next/link";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-indigo-deep text-paper">
      {/* Oversized wordmark band */}
      <div className="overflow-hidden border-b border-paper/10 py-10">
        <p className="display-tight whitespace-nowrap text-center text-[19vw] uppercase leading-none text-paper/10">
          Limenako · Sacred
        </p>
      </div>

      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="display-tight text-3xl uppercase">Limenako</p>
            <p className="mt-1 text-[11px] font-semibold uppercase tracking-mega text-sand">
              Simply Sacred
            </p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-paper/60">
              Sacred skincare rooted in ancestry, crafted for the modern ritual
              keeper. Connecting cultures, one product at a time.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-[11px] font-semibold uppercase tracking-wide-sm text-sand">Explore</p>
            <ul className="mt-5 space-y-3 text-sm text-paper/70">
              <li><Link href="/#ritual" className="transition-colors hover:text-paper">Rituals</Link></li>
              <li><Link href="/#products" className="transition-colors hover:text-paper">Products</Link></li>
              <li><Link href="/#heritage" className="transition-colors hover:text-paper">Heritage</Link></li>
              <li><Link href="/#contact" className="transition-colors hover:text-paper">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-[11px] font-semibold uppercase tracking-wide-sm text-sand">
              Sacred Dispatches
            </p>
            <p className="mt-5 font-serif text-2xl italic">Join the Ritual</p>
            <p className="mt-2 max-w-sm text-sm text-paper/60">
              Stories of ancestry, new rituals, and exclusive offerings — delivered with intention.
            </p>
            <div className="mt-6">
              <NewsletterForm />
            </div>
            <ul className="mt-8 space-y-2 text-sm text-paper/60">
              <li>@Limenakorituals</li>
              <li>hello@limenako.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-paper/10 pt-8 text-[11px] uppercase tracking-wide-sm text-paper/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Limenako. All rights reserved.</p>
          <p>Family Ka Moka — Connecting Cultures</p>
        </div>
      </div>
    </footer>
  );
}
