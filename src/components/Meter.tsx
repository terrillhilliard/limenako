// Meter strip below the hero — a printed readout, not a live feed.
// Heights come from a deterministic envelope (sine × decay), so it reads as a
// measurement and stays identical between server and client render.
const TICKS = Array.from({ length: 64 }, (_, i) => {
  const t = i / 63;
  const env = Math.sin(t * Math.PI * 3.2) * 0.5 + 0.5;
  const decay = 0.4 + 0.6 * Math.sin(t * Math.PI);
  const h = 18 + Math.round(env * decay * 82); // 18–100%
  const o = 0.35 + env * 0.5;
  return { h, o };
});

export default function Meter() {
  return (
    <aside
      aria-label="Ritual readout"
      className="grid grid-cols-[auto_1fr_auto] items-center gap-4 border-y border-rule px-5 py-3 md:px-8"
    >
      <p className="meter__label whitespace-nowrap">ritual · cleanse → glow</p>
      <div className="meter__bars">
        {TICKS.map((tick, i) => (
          <span key={i} style={{ height: `${tick.h}%`, opacity: tick.o }} />
        ))}
      </div>
      <p className="meter__label whitespace-nowrap">origin · hcmc ⇄ africa</p>
    </aside>
  );
}
