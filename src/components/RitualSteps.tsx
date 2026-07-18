const STEPS = [
  {
    number: "1",
    title: "Cleanse",
    description: "Begin with intention. Let the lemongrass purify your skin and spirit.",
  },
  {
    number: "2",
    title: "Nourish",
    description: "Botanical extracts feed your skin with ancestral wisdom and modern care.",
  },
  {
    number: "3",
    title: "Honour",
    description: "Each touch is a reclamation. Your ritual is sacred. Respect it.",
  },
  {
    number: "4",
    title: "Glow",
    description: "Radiance from within. Your heritage, your healing, your acne-free glow.",
  },
];

export default function RitualSteps() {
  return (
    <section id="ritual" className="bg-cream-soft py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-widest-xl text-gold">
            Your Daily Practice
          </p>
          <h2 className="font-display text-4xl sm:text-5xl">The Ritual</h2>
          <p className="mx-auto mt-4 max-w-xl text-navy/70">
            A pre-emptive pause. Four sacred steps to reclaim your glow.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <div key={step.number} className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 font-display text-2xl text-gold">
                {step.number}
              </div>
              <h3 className="font-display text-xl">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-navy/70">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
