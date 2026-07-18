import Reveal from "./Reveal";
import Marquee from "./Marquee";

const STEPS = [
  { number: "01", title: "Cleanse", description: "Begin with intention. Let the lemongrass purify your skin and spirit." },
  { number: "02", title: "Nourish", description: "Botanical extracts feed your skin with ancestral wisdom and modern care." },
  { number: "03", title: "Honour", description: "Each touch is a reclamation. Your ritual is sacred. Respect it." },
  { number: "04", title: "Glow", description: "Radiance from within. Your heritage, your healing, your acne-free glow." },
];

export default function RitualSteps() {
  return (
    <section id="ritual" className="relative overflow-hidden bg-leaf text-paper">
      <div className="border-b border-paper/15 py-3 text-[11px] font-semibold uppercase tracking-wide-sm text-sand">
        <Marquee
          slow
          items={["Cleanse", "Nourish", "Honour", "Glow", "A pre-emptive pause", "Your daily practice"]}
        />
      </div>

      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <Reveal>
          <div className="mb-16 max-w-2xl">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-mega text-sand">
              Your Daily Practice
            </p>
            <h2 className="display-tight text-5xl md:text-7xl">
              The <span className="text-sand">Ritual</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-sm bg-paper/15 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.08} className="group bg-leaf">
              <div className="flex h-full flex-col p-8 transition-colors duration-300 group-hover:bg-terra">
                <span className="display-tight text-6xl text-sand transition-colors duration-300 group-hover:text-paper md:text-7xl">
                  {step.number}
                </span>
                <h3 className="mt-8 font-serif text-2xl">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/70 transition-colors duration-300 group-hover:text-paper/90">
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
