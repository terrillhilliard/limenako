import Link from "next/link";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-rule">
      <div className="mx-auto max-w-[1320px] px-5 py-20 md:px-8">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="display text-3xl text-ink">limenako</p>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.1em] text-accent/80">
              simply sacred
            </p>
            <p className="mt-6 max-w-sm text-[13px] leading-relaxed text-ink-2/60">
              sacred skincare rooted in ancestry, crafted for the modern ritual
              keeper. connecting cultures, one product at a time.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-2/50">explore</p>
            <ul className="mt-5 space-y-3 text-[14px] text-ink-2/75">
              <li><Link href="/#ritual" className="transition-colors hover:text-accent">rituals</Link></li>
              <li><Link href="/#products" className="transition-colors hover:text-accent">products</Link></li>
              <li><Link href="/#heritage" className="transition-colors hover:text-accent">heritage</Link></li>
              <li><Link href="/#contact" className="transition-colors hover:text-accent">contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-2/50">
              sacred dispatches
            </p>
            <p className="mt-5 display text-2xl text-ink">join the ritual</p>
            <p className="mt-2 max-w-sm text-[13px] text-ink-2/60">
              stories of ancestry, new rituals, and exclusive offerings — delivered with intention.
            </p>
            <div className="mt-6">
              <NewsletterForm />
            </div>
            <ul className="mt-8 space-y-2 text-[13px] text-ink-2/60">
              <li>@limenakorituals</li>
              <li>hello@limenako.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-rule pt-8 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-2/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} limenako · hcmc ⇄ southern africa</p>
          <p>family ka moka — connecting cultures</p>
        </div>
      </div>
    </footer>
  );
}
