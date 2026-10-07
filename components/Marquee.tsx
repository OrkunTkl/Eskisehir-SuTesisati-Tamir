export function Marquee({ items, className = "", dur = 38, reverse = false }: { items: string[]; className?: string; dur?: number; reverse?: boolean }) {
  const track = (aria: boolean) => (
    <div className="marquee-track" aria-hidden={aria || undefined} style={{ animationDirection: reverse ? "reverse" : "normal" }}>
      {items.map((t, i) => (
        <span key={i} className="flex items-center gap-10 whitespace-nowrap">
          <span>{t}</span>
          <svg width="0.55em" height="0.75em" viewBox="0 0 22 30" aria-hidden className="shrink-0 text-aqua"><path fill="currentColor" d="M11 0C11 0 0 13.2 0 19.5A11 11 0 0 0 22 19.5C22 13.2 11 0 11 0z" /></svg>
        </span>
      ))}
    </div>
  );
  return (
    <div className={`marquee ${className}`} style={{ ["--dur" as string]: `${dur}s` }}>
      {track(false)}{track(true)}
    </div>
  );
}
