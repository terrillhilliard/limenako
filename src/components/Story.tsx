import Reveal from "./Reveal";

export default function Story() {
  return (
    <section id="story" className="relative overflow-hidden bg-paper py-24 md:py-36">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-5 md:grid-cols-12 md:px-10">
        {/* Oversized index number, grid-breaking */}
        <Reveal className="md:col-span-4" y={40}>
          <div className="relative">
            <span className="display-tight block text-[28vw] leading-none text-terra/15 md:text-[16rem]">
              01
            </span>
            <span className="absolute left-2 top-4 text-[11px] font-semibold uppercase tracking-mega text-ink-soft">
              The Ritual
            </span>
          </div>
        </Reveal>

        <div className="flex flex-col justify-center md:col-span-8 md:pl-12">
          <Reveal delay={0.05}>
            <h2 className="display-tight text-5xl text-ink md:text-7xl">
              You,
              <span className="font-serif italic text-terra"> reclaimed.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft">
              Limenako is more than skincare — it is a return to self. Our
              formulations honour ancestral wisdom passed through generations,
              blending sacred botanicals with modern ritual to create moments of
              healing and renewal.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
              Each product is a pre-emptive pause. A reminder to slow down, to
              nourish, to honour the skin you&rsquo;re in. Because self-care is
              not indulgence — it is inheritance.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <p className="mt-10 font-serif text-2xl italic text-indigo">
              &ldquo;Respect your ritual.&rdquo;
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
