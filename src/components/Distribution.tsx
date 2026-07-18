import DistributorForm from "./DistributorForm";

export default function Distribution() {
  return (
    <section id="contact" className="bg-cream py-28">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <div className="mb-12 text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-widest-xl text-gold">
            Global Distribution
          </p>
          <h2 className="font-display text-4xl sm:text-5xl">
            Bring Limenako to Your Region
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-navy/70">
            We are currently expanding internationally and seeking partners
            who share our commitment to sacred self-care. Whether you run a
            boutique, spa, wellness platform, or distribution network —
            we&rsquo;d love to connect.
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-navy/60">
            Our products are trusted by customers who value quality
            ingredients, thoughtful formulation, and cultural integrity.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-[11px] font-medium uppercase tracking-widest-xl text-gold">
            <span className="rounded-full border border-gold/30 px-4 py-1">
              Ho Chi Minh City
            </span>
            <span className="rounded-full border border-gold/30 px-4 py-1">
              Southern Africa
            </span>
            <span className="rounded-full border border-gold/30 px-4 py-1">
              Expanding Globally
            </span>
          </div>
        </div>

        <DistributorForm />
      </div>
    </section>
  );
}
