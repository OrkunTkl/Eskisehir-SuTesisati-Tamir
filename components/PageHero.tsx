import Link from "next/link";
import { Liquid } from "@/components/Liquid";
import { SplitLines } from "@/components/Reveal";

function toLines(t: string): string[] {
  if (t.includes("\n")) return t.split("\n");
  const w = t.split(" ");
  if (w.length < 3) return [t];
  const mid = Math.ceil(w.length / 2);
  return [w.slice(0, mid).join(" "), w.slice(mid).join(" ")];
}

export function PageHero({ eyebrow, title, lead, crumbs, children, urgent }: {
  eyebrow: string; title: string; lead?: string; crumbs?: [string, string][]; children?: React.ReactNode; urgent?: boolean;
}) {
  return (
    <section className="relative isolate overflow-hidden px-[var(--gut)] pb-16 pt-40 md:pb-24 md:pt-52">
      <Liquid className="absolute inset-0 -z-10" calm interactive={false} />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/30 via-transparent to-ink" aria-hidden />
      <div className="mx-auto max-w-[1700px]">
        {crumbs && (
          <nav aria-label="Sayfa yolu" className="mono mb-8 flex flex-wrap gap-2 text-ice/60">
            {crumbs.map(([n, h], i) => (
              <span key={h} className="flex gap-2">{i > 0 && <span aria-hidden>/</span>}<Link href={h} className="hover:text-aqua">{n}</Link></span>
            ))}
          </nav>
        )}
        <p className={`mono mb-6 ${urgent ? "text-alarm" : "text-aqua"}`}>{eyebrow}</p>
        <SplitLines immediate delay={0.1} className="display d-xl max-w-[16ch]" lines={toLines(title)} />
        {lead && <p className="lead mt-10 max-w-2xl text-ice/80">{lead}</p>}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
