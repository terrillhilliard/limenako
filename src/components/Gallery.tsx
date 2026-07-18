const POSTS = [
  {
    handle: "@ritual.keeper",
    caption: "Morning ritual with the Lemongrass Soap ✨ My skin has never felt this alive. #Limenako #SimplySacred",
    likes: 142,
    comments: 18,
    gradient: "linear-gradient(160deg,#3a4f2a,#d9bd85)",
  },
  {
    handle: "@ancestral.glow",
    caption: "The Daily Cleanser is my sacred pause. This is what self-care looks like. #FamilyKaMoka #Limenako",
    likes: 98,
    comments: 11,
    gradient: "linear-gradient(160deg,#1a2b42,#7a8f4a)",
  },
  {
    handle: "@kamoka.love",
    caption: "Heritage Collection arrived and I'm obsessed 🖤✨ Gifting this to everyone I love. #Limenako",
    likes: 215,
    comments: 34,
    gradient: "linear-gradient(160deg,#101d2e,#b5893a)",
  },
  {
    handle: "@slowliving.ritual",
    caption: "Slow Sunday ritual. The smell of lemongrass is healing. #SimplyLimenako #SacredSkin",
    likes: 176,
    comments: 22,
    gradient: "linear-gradient(160deg,#4a6b8a,#d9bd85)",
  },
  {
    handle: "@roots.and.glow",
    caption: "Connecting cultures, one ritual at a time 🌿 Thank you @Limenakorituals #SacredSkincare",
    likes: 133,
    comments: 15,
    gradient: "linear-gradient(160deg,#3a4f2a,#1a2b42)",
  },
  {
    handle: "@sacred.corner",
    caption: "My ritual corner 🕯️ Limenako has completely changed my relationship with skincare. #Limenako",
    likes: 89,
    comments: 9,
    gradient: "linear-gradient(160deg,#b5893a,#101d2e)",
  },
];

export default function Gallery() {
  return (
    <section className="bg-cream-soft py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-widest-xl text-gold">
            @Limenakorituals
          </p>
          <h2 className="font-display text-4xl sm:text-5xl">The World of Limenako</h2>
          <p className="mx-auto mt-4 max-w-xl text-navy/70">
            Ritual keepers around the world sharing their sacred spaces. Tag
            @Limenakorituals to be featured.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {POSTS.map((post) => (
            <div
              key={post.handle}
              className="group relative aspect-square overflow-hidden rounded-xl"
              style={{ background: post.gradient }}
            >
              <div className="absolute inset-0 flex flex-col justify-end bg-navy-deep/0 p-4 opacity-0 transition-all duration-300 group-hover:bg-navy-deep/70 group-hover:opacity-100">
                <p className="text-xs leading-snug text-cream line-clamp-4">
                  {post.caption}
                </p>
                <div className="mt-2 flex items-center gap-4 text-[11px] text-cream/80">
                  <span>{post.handle}</span>
                  <span>♥ {post.likes}</span>
                  <span>💬 {post.comments}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-navy/20 px-8 py-3 text-xs font-semibold uppercase tracking-widest-xl text-navy transition-colors hover:border-gold hover:text-gold"
          >
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
