import Reveal from "./Reveal";

const POSTS = [
  { handle: "@ritual.keeper", caption: "Morning ritual with the Lemongrass Soap. My skin has never felt this alive.", likes: 142, gradient: "linear-gradient(150deg,#1a2b42,#d4af37)" },
  { handle: "@ancestral.glow", caption: "The Daily Cleanser is my sacred pause. This is what self-care looks like.", likes: 98, gradient: "linear-gradient(150deg,#131f30,#33455f)" },
  { handle: "@kamoka.love", caption: "Heritage Collection arrived and I'm obsessed. Gifting this to everyone I love.", likes: 215, gradient: "linear-gradient(150deg,#0f1826,#d9bd85)" },
  { handle: "@slowliving.ritual", caption: "Slow Sunday ritual. The smell of lemongrass is healing.", likes: 176, gradient: "linear-gradient(150deg,#33455f,#d4af37)" },
  { handle: "@roots.and.glow", caption: "Connecting cultures, one ritual at a time. Thank you @Limenakorituals.", likes: 133, gradient: "linear-gradient(150deg,#d4af37,#1a2b42)" },
  { handle: "@sacred.corner", caption: "My ritual corner. Limenako has completely changed my relationship with skincare.", likes: 89, gradient: "linear-gradient(150deg,#1a2b42,#0f1826)" },
];

export default function Gallery() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-[1320px] px-5 md:px-8">
        <Reveal>
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow mb-6">05 · The Community</p>
              <h2 className="display max-w-[16ch] text-[clamp(2rem,3vw+1rem,3.25rem)] text-ink">
                The world of Limenako.
              </h2>
            </div>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 self-start rounded-full border border-rule-2 px-6 py-3 text-[12px] text-ink-2 transition-colors hover:border-accent hover:text-accent md:self-auto"
            >
              follow on instagram →
            </a>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {POSTS.map((post, i) => (
            <Reveal key={post.handle} delay={(i % 3) * 0.08}>
              <figure
                className="group relative aspect-square overflow-hidden rounded-[10px] border border-rule"
                style={{ background: post.gradient }}
              >
                <figcaption className="absolute inset-0 flex flex-col justify-end bg-paper/0 p-5 opacity-0 transition-all duration-300 group-hover:bg-paper/85 group-hover:opacity-100">
                  <p className="text-[13px] leading-snug text-ink-2">{post.caption}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="label opacity-70">{post.handle}</span>
                    <span className="label opacity-70">♥ {post.likes}</span>
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
