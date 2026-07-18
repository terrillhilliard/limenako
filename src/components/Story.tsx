export default function Story() {
  return (
    <section id="story" className="bg-cream py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2 md:px-10">
        <div
          aria-hidden
          className="order-2 h-96 rounded-3xl bg-[linear-gradient(135deg,#1a2b42,#3a4f6b_45%,#d9bd85)] shadow-2xl md:order-1"
        />

        <div className="order-1 md:order-2">
          <p className="mb-4 text-xs font-medium uppercase tracking-widest-xl text-gold">
            The Ritual
          </p>
          <h2 className="font-display text-4xl leading-tight sm:text-5xl">
            You, reclaimed.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-navy/80">
            Limenako is more than skincare — it is a return to self. Our
            formulations honour ancestral wisdom passed through generations,
            blending sacred botanicals with modern ritual to create moments of
            healing and renewal.
          </p>
          <p className="mt-4 text-base leading-relaxed text-navy/80">
            Each product is a pre-emptive pause. A reminder to slow down, to
            nourish, to honour the skin you&rsquo;re in. Because self-care is
            not indulgence — it is inheritance.
          </p>
          <p className="mt-8 font-display text-2xl italic text-gold">
            &ldquo;Respect your ritual.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
