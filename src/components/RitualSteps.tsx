import Reveal from "./Reveal";

const STEPS = [
  { number: "01", title: "Cleanse", description: "Begin with intention. Let the lemongrass purify your skin and spirit." },
  { number: "02", title: "Nourish", description: "Botanical extracts feed your skin with ancestral wisdom and modern care." },
  { number: "03", title: "Honour", description: "Each touch is a reclamation. Your ritual is sacred. Respect it." },
  { number: "04", title: "Glow", description: "Radiance from within. Your heritage, your healing, your acne-free glow." },
];

export default function RitualSteps() {
  return (
    <section id="ritual" className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-[1320px] px-5 md:px-8">
        <Reveal>
          <p className="eyebrow mb-6">02 · Daily Practice</p>
          <h2 className="display max-w-[16ch] text-[clamp(2rem,3vw+1rem,3.25rem)] text-ink">
            The ritual — a pre-emptive <span className="verb">pause</span>.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.08}>
              <div className="card-lit flex h-full flex-col rounded-[10px] p-7">
                <p className="stat__label text-accent/80">{step.number}</p>
                <h3 className="display mt-6 text-2xl text-ink">{step.title}</h3>
                <p className="mt-3 text-[13px] leading-relaxed text-ink-2/65">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
