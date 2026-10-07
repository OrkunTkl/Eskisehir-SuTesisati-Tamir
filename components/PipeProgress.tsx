"use client";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export function PipeProgress() {
  const { scrollYProgress } = useScroll();
  const p = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.4 });
  const top = useTransform(p, (v) => `${v * 100}%`);
  return (
    <div className="pipe" aria-hidden>
      <motion.div className="absolute inset-x-0 top-0 origin-top bg-current" style={{ scaleY: p, height: "100%" }} />
      <motion.span className="absolute left-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-current" style={{ top }} />
    </div>
  );
}
