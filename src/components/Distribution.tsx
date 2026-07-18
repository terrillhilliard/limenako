import DistributorForm from "./DistributorForm";
import Reveal from "./Reveal";

export default function Distribution() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-16 px-5 md:grid-cols-[0.9fr_1.1fr] md:px-8">
        <div>
          <Reveal>
            <p className="eyebrow mb-6">06 · Distribution</p>
            <h2 className="display max-w-[12ch] text-[clamp(2rem,3vw+1rem,3.5rem)] text-ink">
              Bring Limenako to your <span className="verb">region</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-md text-[15px] leading-relaxed text-ink-2/70">
              We are expanding internationally and seeking partners who share
              our commitment to sacred self-care — boutiques, spas, wellness
              platforms, and distribution networks.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-10 flex flex-wrap gap-2">
              {["Ho Chi Minh City", "Southern Africa", "Expanding Globally"].map((tag) => (
                <span key={tag} className="rounded-full border border-rule px-4 py-2 text-[12px] text-ink-2/70">
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="md:pt-2">
          <Reveal delay={0.12}>
            <DistributorForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
