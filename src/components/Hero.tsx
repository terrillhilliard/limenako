export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-navy pt-20"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(181,137,58,0.35),transparent_55%),radial-gradient(circle_at_75%_75%,rgba(217,189,133,0.25),transparent_50%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-navy-deep/40 mix-blend-multiply"
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-cream">
        <p className="mb-6 text-xs font-medium uppercase tracking-widest-xl text-gold-soft">
          Connecting Cultures
        </p>
        <h1 className="font-display text-6xl leading-[1.05] sm:text-7xl md:text-8xl">
          Simply
          <br />
          <span className="italic text-gold-soft">Sacred</span>
        </h1>
        <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg">
          Reclaim your glow through sacred rituals rooted in ancestry, crafted
          for your skin, your home, and your soul.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#ritual"
            className="rounded-full bg-gold px-8 py-3 text-xs font-semibold uppercase tracking-widest-xl text-navy-deep transition-colors hover:bg-gold-soft"
          >
            Explore Rituals
          </a>
          <a
            href="#story"
            className="rounded-full border border-cream/40 px-8 py-3 text-xs font-semibold uppercase tracking-widest-xl text-cream transition-colors hover:border-cream"
          >
            Our Story
          </a>
        </div>
      </div>
    </section>
  );
}
