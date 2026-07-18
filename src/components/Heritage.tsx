import Reveal from "./Reveal";

export default function Heritage() {
  return (
    <section id="heritage" className="relative overflow-hidden bg-clay text-paper">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-0 md:grid-cols-2">
        {/* Left: statement */}
        <div className="flex flex-col justify-center px-5 py-24 md:px-10 md:py-36">
          <Reveal>
            <p className="mb-6 text-[11px] font-semibold uppercase tracking-mega text-paper/70">
              Our Heritage
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="display-tight text-6xl leading-[0.85] md:text-8xl">
              Connecting
              <br />
              <span className="text-sand">Cultures</span>
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-10 max-w-md text-lg leading-relaxed text-paper/90">
              Born between Ho Chi Minh City and Southern Africa, Limenako bridges
              worlds through the universal language of sacred self-care. Our name
              carries the weight of lineage — Family Ka Moka — a testament to the
              ancestral roots that nourish everything we create.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-paper/90">
              Every ingredient is chosen with reverence. Every formula is a prayer.
            </p>
          </Reveal>
          <Reveal delay={0.26}>
            <div className="mt-10 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-wide-sm">
              <span className="h-px w-10 bg-paper/60" />
              Family Ka Moka
            </div>
          </Reveal>
        </div>

        {/* Right: deep-green testimonial panel */}
        <div className="relative flex flex-col justify-center bg-leaf-deep px-5 py-24 md:px-14 md:py-36">
          <div aria-hidden className="absolute right-8 top-10 h-28 w-28 rounded-full border border-paper/20" />
          <div aria-hidden className="absolute bottom-12 left-10 h-16 w-16 border border-paper/15" style={{ transform: "rotate(45deg)" }} />
          <Reveal delay={0.1}>
            <span className="font-serif text-8xl leading-none text-sand">&ldquo;</span>
            <blockquote className="mt-2">
              <p className="font-serif text-3xl leading-snug md:text-4xl">
                My skin has never felt this alive. Limenako isn&rsquo;t just
                skincare — it&rsquo;s a homecoming.
              </p>
              <footer className="mt-8 text-[11px] font-semibold uppercase tracking-wide-sm text-sand">
                — A Limenako Ritual Keeper
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
