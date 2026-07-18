import AddToCartButton from "./AddToCartButton";

const PRODUCTS = [
  {
    id: "lemongrass-soap",
    category: "Skin · Home",
    name: "Lemongrass Soap",
    tagline: "Acne-Free Glow",
    description:
      "100% natural, handmade cold-processed soap with lemongrass and botanical extracts. No artificial ingredients.",
    price: 25,
    gradient: "linear-gradient(135deg,#3a4f2a,#7a8f4a 55%,#d9bd85)",
  },
  {
    id: "daily-cleanser",
    category: "Skin · Nourishment",
    name: "Daily Cleanser",
    tagline: "Simply Sacred",
    description:
      "A gentle, nourishing cleanser crafted with ancestral botanical wisdom. Designed for your daily ritual of renewal.",
    price: 35,
    gradient: "linear-gradient(135deg,#1a2b42,#4a6b8a 55%,#d9bd85)",
  },
  {
    id: "heritage-collection",
    category: "Gifting · Skin",
    name: "Heritage Collection",
    tagline: "Family Ka Moka",
    description:
      "Our signature collection honouring the Kamoka lineage. Matte navy with gold foil, connecting cultures through sacred care.",
    price: 75,
    gradient: "linear-gradient(135deg,#101d2e,#1a2b42 55%,#b5893a)",
  },
];

export default function Products() {
  return (
    <section id="products" className="bg-cream py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-widest-xl text-gold">
            The Collection
          </p>
          <h2 className="font-display text-4xl sm:text-5xl">Sacred Essentials</h2>
          <p className="mx-auto mt-4 max-w-xl text-navy/70">
            Skin · Home · Nourishment · Gifting
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group flex flex-col">
              <div
                aria-hidden
                className="h-72 rounded-2xl shadow-lg transition-transform duration-300 group-hover:-translate-y-1"
                style={{ background: product.gradient }}
              />
              <p className="mt-6 text-[11px] font-medium uppercase tracking-widest-xl text-gold">
                {product.category}
              </p>
              <h3 className="mt-2 font-display text-2xl">{product.name}</h3>
              <p className="text-sm italic text-navy/60">{product.tagline}</p>
              <p className="mt-3 text-sm leading-relaxed text-navy/70">
                {product.description}
              </p>
              <div className="mt-6 flex items-center justify-between">
                <span className="font-display text-xl">
                  ${product.price.toFixed(2)}
                </span>
                <AddToCartButton productName={product.name} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
