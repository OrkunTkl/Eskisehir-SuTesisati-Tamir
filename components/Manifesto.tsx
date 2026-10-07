"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

const TEXT = "Tesisat sorunu sessiz başlar, pahalı biter. Damlayan bir musluk, nemlenen bir duvar, geç boşalan bir lavabo. Burası sorunu birkaç dakikada tanımanız, güvenli ilk adımı atmanız ve doğru tesisatçıya ulaşmanız için var.";

function Word({ w, p, range }: { w: string; p: MotionValue<number>; range: [number, number] }) {
  const o = useTransform(p, range, [0.14, 1]);
  return <motion.span style={{ opacity: o }} className="mr-[.28em] inline-block">{w}</motion.span>;
}

export function Manifesto() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 55%"] });
  const words = TEXT.split(" ");
  return (
    <section ref={ref} className="on-light px-[var(--gut)] py-28 md:py-44">
      <div className="mx-auto max-w-[1700px]">
        <p className="mono mb-10 text-ink/50">01 — Neden buradayız</p>
        <p className="display d-md" style={{ lineHeight: 1, letterSpacing: "-.035em" }}>
          {words.map((w, i) => (<Word key={i} w={w} p={scrollYProgress} range={[i / words.length, Math.min(1, (i + 3) / words.length)]} />))}
        </p>
      </div>
    </section>
  );
}
