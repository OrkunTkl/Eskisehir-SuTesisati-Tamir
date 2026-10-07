"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { services } from "@/data/services";
import { Icon } from "@/components/Icons";

export function ServiceRail() {
  const outer = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [max, setMax] = useState(0);
  useEffect(() => {
    const m = () => { if (track.current) setMax(Math.max(0, track.current.scrollWidth - window.innerWidth)); };
    m();
    const ro = new ResizeObserver(m);
    if (track.current) ro.observe(track.current);
    window.addEventListener("resize", m);
    return () => { ro.disconnect(); window.removeEventListener("resize", m); };
  }, []);
  const { scrollYProgress } = useScroll({ target: outer, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -max]);
  const bar = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={outer} className="on-deep relative" style={{ height: `calc(100vh + ${max}px)` }} aria-labelledby="hizmetler-h">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <motion.div ref={track} style={{ x }} className="flex w-max items-stretch gap-5 px-[var(--gut)] will-change-transform">
          <div className="flex w-[min(86vw,46rem)] shrink-0 flex-col justify-between pr-6">
            <p className="mono text-ice/50">02 — Hizmetler</p>
            <h2 id="hizmetler-h" className="display d-xl mt-6">Her<br />damlanın<br /><span className="serif text-aqua">bir adı var.</span></h2>
            <p className="lead mt-8 max-w-md text-ice/70">Sekiz ana başlık. Birini seçin, ne yapıldığını, neye dikkat edileceğini okuyun, sonra yönlendirme isteyin.</p>
            <p className="mono mt-8 text-ice/40">Kaydır → </p>
          </div>
          {services.map((s, i) => (
            <Link key={s.slug} href={`/${s.slug}`} data-cursor="Aç"
              className="group relative flex h-[62vh] min-h-[26rem] w-[min(78vw,30rem)] shrink-0 flex-col justify-between overflow-hidden rounded-[2rem] border border-ice/15 p-7 transition-colors duration-500 hover:border-aqua md:p-9">
              <span className="absolute inset-0 -z-0 translate-y-full rounded-[2rem] bg-aqua transition-transform duration-[650ms] ease-[cubic-bezier(.7,0,.2,1)] group-hover:translate-y-0" aria-hidden />
              <div className="relative z-10 flex items-start justify-between transition-colors duration-500 group-hover:text-ink">
                <span className="display d-lg">{String(i + 1).padStart(2, "0")}</span>
                <Icon name={s.icon} size={72} className="text-aqua transition-colors duration-500 group-hover:text-ink" />
              </div>
              <div className="relative z-10 transition-colors duration-500 group-hover:text-ink">
                <h3 className="display d-md">{s.title}</h3>
                <p className="mt-4 text-lg leading-snug opacity-75">{s.desc}</p>
                <p className="mono mt-6 inline-flex items-center gap-2">Sayfaya git <span className="transition-transform duration-500 group-hover:translate-x-2">→</span></p>
              </div>
            </Link>
          ))}
          <div className="w-[var(--gut)] shrink-0" />
        </motion.div>
        <div className="absolute inset-x-[var(--gut)] bottom-8 h-px bg-ice/15" aria-hidden>
          <motion.div className="h-px bg-aqua" style={{ width: bar }} />
        </div>
      </div>
    </section>
  );
}
