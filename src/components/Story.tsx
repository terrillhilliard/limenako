import Reveal from "./Reveal";

const STATS = [
  { value: "100%", label: "natural" },
  { value: "4", label: "sacred steps" },
  { value: "2", label: "origins" },
];

export default function Story() {
  return (
    <section id="story" className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-[1320px] px-5 md:px-8">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="eyebrow mb-6">01 · The Ritual</p>
            <h2 className="display max-w-[12ch] text-[clamp(2rem,3vw+1rem,3.25rem)] text-ink">
              You, <span className="verb">reclaimed</span>.
            </h2>
          </Reveal>

          <div className="flex flex-col justify-center">
            <Reveal delay={0.08}>
              <p className="max-w-xl text-[15px] leading-relaxed text-ink-2/75">
                Limenako is more than skincare — it is a return to self. Our
                formulations honour ancestral wisdom passed through generations,
                blending sacred botanicals with modern ritual to create moments
                of healing and renewal.
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-ink-2/75">
                Each product is a pre-emptive pause. A reminder to slow down, to
                nourish, to honour the skin you are in. Because self-care is not
                indulgence — it is inheritance.
              </p>
            </Reveal>
          </div>
        </div>

        {/* three-stat row — Instrument Serif numerals, tabular-nums */}
        <Reveal delay={0.1}>
          <div className="mt-20 grid grid-cols-3 border-t border-rule">
            {STATS.map((stat) => (
              <div key={stat.label} className="border-r border-rule px-4 py-8 last:border-r-0">
                <p className="display text-[clamp(2.5rem,4vw+1rem,4.25rem)] text-ink">
                  {stat.value}
                </p>
                <p className="stat__label mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
