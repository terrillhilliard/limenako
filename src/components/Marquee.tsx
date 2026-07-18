type MarqueeProps = {
  items: string[];
  className?: string;
  slow?: boolean;
};

export default function Marquee({ items, className = "", slow = false }: MarqueeProps) {
  // Duplicate the sequence so the -50% translate loops seamlessly.
  const sequence = [...items, ...items];

  return (
    <div className={`flex overflow-hidden whitespace-nowrap ${className}`}>
      <div className={`flex shrink-0 ${slow ? "animate-marquee-slow" : "animate-marquee"}`}>
        {sequence.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="px-6">{item}</span>
            <span aria-hidden className="text-terra">
              ✳
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
