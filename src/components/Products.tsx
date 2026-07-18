import AddToCartButton from "./AddToCartButton";
import { PRODUCTS, formatPrice } from "@/lib/products";

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
                  {formatPrice(product.priceCents)}
                </span>
                <AddToCartButton productId={product.id} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
