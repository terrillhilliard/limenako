import AddToCartButton from "./AddToCartButton";
import Reveal from "./Reveal";
import { PRODUCTS, formatPrice } from "@/lib/products";

export default function Products() {
  return (
    <section id="products" className="relative overflow-hidden bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 border-b border-ink/15 pb-10 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-mega text-terra">
                The Collection
              </p>
              <h2 className="display-tight text-5xl text-ink md:text-7xl">
                Sacred <span className="font-serif italic">Essentials</span>
              </h2>
            </div>
            <p className="text-[11px] font-semibold uppercase tracking-wide-sm text-ink-soft md:text-right">
              Skin · Home · Nourishment · Gifting
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-x-8 gap-y-16 pt-16 md:grid-cols-3">
          {PRODUCTS.map((product, i) => (
            <Reveal
              key={product.id}
              delay={i * 0.1}
              className={i === 1 ? "md:mt-16" : ""}
            >
              <article className="group flex flex-col">
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                  <div
                    aria-hidden
                    className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{ background: product.gradient }}
                  />
                  {/* Rotated watermark name */}
                  <span
                    aria-hidden
                    className="display-tight pointer-events-none absolute -right-4 bottom-6 origin-bottom-right text-6xl uppercase text-paper/15"
                    style={{ writingMode: "vertical-rl" }}
                  >
                    {product.name.split(" ")[0]}
                  </span>
                  <span className="absolute left-5 top-5 rounded-full bg-paper/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide-sm text-ink">
                    {product.category}
                  </span>
                  <span className="display-tight absolute right-5 top-4 text-2xl text-paper/70">
                    0{i + 1}
                  </span>
                </div>

                <div className="mt-6 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-2xl text-ink">{product.name}</h3>
                    <p className="mt-1 text-sm italic text-ink-soft">{product.tagline}</p>
                  </div>
                  <span className="display-tight shrink-0 text-2xl text-terra">
                    {formatPrice(product.priceCents)}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                  {product.description}
                </p>

                <div className="mt-6">
                  <AddToCartButton productId={product.id} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
