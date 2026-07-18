import Reveal from "./Reveal";

export default function Heritage() {
  return (
    <section id="heritage" className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-16 px-5 md:grid-cols-2 md:px-8">
        <div>
          <Reveal>
            <p className="eyebrow mb-6">04 · Heritage</p>
            <h2 className="display max-w-[12ch] text-[clamp(2.2rem,3.5vw+1rem,3.75rem)] text-ink">
              Connecting <span className="verb">cultures</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-md text-[15px] leading-relaxed text-ink-2/75">
              Born between Ho Chi Minh City and Southern Africa, Limenako
              bridges worlds through the universal language of sacred self-care.
              Our name carries the weight of lineage — Family Ka Moka — a
              testament to the ancestral roots that nourish everything we create.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ink-2/75">
              Every ingredient is chosen with reverence. Every formula is a prayer.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <div className="mt-10 flex items-center gap-3">
              <span className="h-px w-10 bg-accent/60" />
              <span className="label opacity-70">Family Ka Moka</span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <blockquote className="card-lit flex h-full flex-col justify-center rounded-[10px] p-10">
            <p className="display text-[clamp(1.75rem,2.5vw+1rem,2.75rem)] leading-snug text-ink">
              My skin has never felt this alive. Limenako is not just skincare —
              it is a homecoming.
            </p>
            <footer className="mt-8">
              <span className="label opacity-60">— A Limenako Ritual Keeper</span>
            </footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
