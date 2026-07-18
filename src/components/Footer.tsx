import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-cream">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
          <div>
            <p className="font-display text-2xl tracking-widest-xl uppercase">
              Limenako
            </p>
            <p className="mt-1 text-xs uppercase tracking-widest-xl text-gold-soft">
              Simply Sacred
            </p>
            <p className="mt-4 text-sm leading-relaxed text-cream/70">
              Sacred skincare rooted in ancestry, crafted for the modern
              ritual keeper. Connecting cultures, one product at a time.
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-widest-xl text-gold-soft">
              Explore
            </p>
            <ul className="mt-4 space-y-2 text-sm text-cream/70">
              <li><a href="#ritual" className="hover:text-cream">Rituals</a></li>
              <li><a href="#products" className="hover:text-cream">Products</a></li>
              <li><a href="#story" className="hover:text-cream">Our Story</a></li>
              <li><a href="#contact" className="hover:text-cream">Contact</a></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-widest-xl text-gold-soft">
              Connect
            </p>
            <ul className="mt-4 space-y-2 text-sm text-cream/70">
              <li>@Limenakorituals</li>
              <li>hello@limenako.com</li>
              <li>Presence: Ho Chi Minh City · Southern Africa</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-cream/10 pt-10">
          <p className="text-xs font-medium uppercase tracking-widest-xl text-gold-soft">
            Sacred Dispatches
          </p>
          <p className="mt-2 font-display text-2xl">Join the Ritual</p>
          <p className="mt-2 max-w-md text-sm text-cream/70">
            Receive stories of ancestry, new rituals, and exclusive
            offerings — delivered with intention.
          </p>
          <div className="mt-6">
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-cream/10 pt-8 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Limenako. All rights reserved.</p>
          <p>Family Ka Moka — Connecting Cultures</p>
        </div>
      </div>
    </footer>
  );
}
