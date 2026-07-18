import AddToCartButton from "./AddToCartButton";
import Reveal from "./Reveal";
import { PRODUCTS, formatPrice } from "@/lib/products";

export default function Products() {
  return (
    <section id="products" className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-[1320px] px-5 md:px-8">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow mb-6">03 · The Collection</p>
              <h2 className="display max-w-[14ch] text-[clamp(2rem,3vw+1rem,3.25rem)] text-ink">
                Sacred essentials, <span className="verb">handmade</span>.
              </h2>
            </div>
            <p className="label opacity-60">Skin · Home · Nourishment · Gifting</p>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3">
          {PRODUCTS.map((product, i) => (
            <Reveal key={product.id} delay={i * 0.1}>
              <article className="card-lit flex h-full flex-col rounded-[10px] p-5">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[6px]">
                  <div aria-hidden className="absolute inset-0" style={{ background: product.gradient }} />
                  <span className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.12em] text-ink/80">
                    0{i + 1}
                  </span>
                </div>

                <div className="mt-5 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="display text-2xl text-ink">{product.name}</h3>
                    <p className="mt-1 text-[13px] text-ink-2/55">{product.tagline}</p>
                  </div>
                  <span className="display text-2xl text-accent">
                    {formatPrice(product.priceCents)}
                  </span>
                </div>

                <p className="mt-3 text-[13px] leading-relaxed text-ink-2/65">
                  {product.description}
                </p>

                <div className="mt-6 border-t border-rule pt-5">
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
