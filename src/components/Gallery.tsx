import Reveal from "./Reveal";

const POSTS = [
  { handle: "@ritual.keeper", caption: "Morning ritual with the Lemongrass Soap. My skin has never felt this alive.", likes: 142, gradient: "linear-gradient(150deg,#b0663f,#d8bf8a)" },
  { handle: "@ancestral.glow", caption: "The Daily Cleanser is my sacred pause. This is what self-care looks like.", likes: 98, gradient: "linear-gradient(150deg,#3f7a4e,#7d9068)" },
  { handle: "@kamoka.love", caption: "Heritage Collection arrived and I'm obsessed. Gifting this to everyone I love.", likes: 215, gradient: "linear-gradient(150deg,#2b4a3a,#b0663f)" },
  { handle: "@slowliving.ritual", caption: "Slow Sunday ritual. The smell of lemongrass is healing.", likes: 176, gradient: "linear-gradient(150deg,#7d9068,#d8bf8a)" },
  { handle: "@roots.and.glow", caption: "Connecting cultures, one ritual at a time. Thank you @Limenakorituals.", likes: 133, gradient: "linear-gradient(150deg,#b0663f,#2b4a3a)" },
  { handle: "@sacred.corner", caption: "My ritual corner. Limenako has completely changed my relationship with skincare.", likes: 89, gradient: "linear-gradient(150deg,#3f7a4e,#d8bf8a)" },
];

export default function Gallery() {
  return (
    <section className="relative overflow-hidden bg-paper-2 py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-mega text-terra">
                @Limenakorituals
              </p>
              <h2 className="display-tight text-5xl text-ink md:text-7xl">
                The World of <span className="text-leaf">Limenako</span>
              </h2>
            </div>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 self-start rounded-full border border-ink/25 px-6 py-3 text-[11px] font-semibold uppercase tracking-wide-sm text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper md:self-auto"
            >
              Follow on Instagram →
            </a>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {POSTS.map((post, i) => (
            <Reveal key={post.handle} delay={(i % 3) * 0.08}>
              <figure
                className="group relative aspect-square overflow-hidden rounded-sm"
                style={{ background: post.gradient }}
              >
                <figcaption className="absolute inset-0 flex flex-col justify-end bg-leaf-deep/0 p-5 opacity-0 transition-all duration-300 group-hover:bg-leaf-deep/80 group-hover:opacity-100">
                  <p className="text-sm leading-snug text-paper">{post.caption}</p>
                  <div className="mt-3 flex items-center justify-between text-[11px] font-semibold uppercase tracking-wide-sm text-paper/80">
                    <span>{post.handle}</span>
                    <span>♥ {post.likes}</span>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
