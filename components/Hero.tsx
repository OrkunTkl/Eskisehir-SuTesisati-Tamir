"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Liquid } from "@/components/Liquid";
import { SplitLines } from "@/components/Reveal";
import { Cta } from "@/components/Cta";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [play, setPlay] = useState(false);
  useEffect(() => {
    const quick = document.documentElement.classList.contains("seen") || window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = setTimeout(() => setPlay(true), quick ? 80 : 2150);
    return () => clearTimeout(t);
  }, []);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const o = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  return (
    <section ref={ref} className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden px-[var(--gut)] pb-10 pt-32 md:pb-14">
      <Liquid className="absolute inset-0 -z-10" scrollLink />
      <motion.div style={{ y, opacity: o }} className="mx-auto w-full max-w-[1700px]">
        <p className="mono mb-6 flex items-center gap-3 text-aqua">
          <span className="inline-block size-2 animate-pulse rounded-full bg-aqua" /> Eskişehir · su kaçağı · gider · tesisat
        </p>
        <SplitLines
          play={play}
          className="display d-xxl"
          lines={[
            "Akan suyu",
            <span key="b" className="serif text-aqua" style={{ fontSize: "1.08em", lineHeight: 0.9 }}>durdurun.</span>,
          ]}
        />
        <div className="mt-10 grid items-end gap-8 md:grid-cols-[1fr_auto]">
          <p className="lead max-w-xl text-ice/80">
            Önce sorunu anlayın, güvenli ilk adımı atın, sonra tek mesajla doğru bağımsız tesisatçıya ulaşın. Eskişehir&apos;in 14 ilçesinde.
          </p>
          <Cta />
        </div>
      </motion.div>
      <div className="mono absolute bottom-5 left-1/2 hidden -translate-x-1/2 text-ice/40 md:block" aria-hidden>Kaydır ↓</div>
    </section>
  );
}
