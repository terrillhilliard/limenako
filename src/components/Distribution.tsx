import DistributorForm from "./DistributorForm";
import Reveal from "./Reveal";

export default function Distribution() {
  return (
    <section id="contact" className="relative overflow-hidden bg-leaf-deep text-paper py-24 md:py-32">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 px-5 md:grid-cols-12 md:px-10">
        <div className="md:col-span-5">
          <Reveal>
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-mega text-terra-bright">
              Global Distribution
            </p>
            <h2 className="display-tight text-5xl leading-[0.9] md:text-7xl">
              Bring Limenako to your <span className="text-sand">region</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-md text-base leading-relaxed text-paper/70">
              We are expanding internationally and seeking partners who share our
              commitment to sacred self-care — boutiques, spas, wellness
              platforms, and distribution networks.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-10 flex flex-wrap gap-3 text-[11px] font-semibold uppercase tracking-wide-sm">
              {["Ho Chi Minh City", "Southern Africa", "Expanding Globally"].map((tag) => (
                <span key={tag} className="rounded-full border border-paper/25 px-4 py-2 text-paper/80">
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-7">
          <Reveal delay={0.12}>
            <DistributorForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
