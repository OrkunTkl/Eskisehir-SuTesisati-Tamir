"use client";
import { motion, type Variants } from "framer-motion";

const ease = [0.76, 0, 0.24, 1] as const;

/** Satırları maske içinden yukarı kaydırarak gösterir. Her kelime ayrı (okunabilirlik + SEO için metin korunur). */
export function SplitLines({ lines, className = "", delay = 0, as = "h1", immediate = false, play }: {
  lines: React.ReactNode[]; className?: string; delay?: number; as?: "h1" | "h2" | "h3" | "p" | "div"; immediate?: boolean; play?: boolean;
}) {
  const Tag = motion[as] as typeof motion.h1;
  const wrap: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.11, delayChildren: delay } } };
  const item: Variants = { hidden: { y: "112%", rotate: 4 }, show: { y: "0%", rotate: 0, transition: { duration: 1.05, ease } } };
  const trigger = play !== undefined ? { animate: (play ? "show" : "hidden") as "show" | "hidden" } : immediate ? { animate: "show" as const } : { whileInView: "show" as const, viewport: { once: true, margin: "-10% 0px" } };
  return (
    <Tag className={className} variants={wrap} initial="hidden" {...trigger}>
      {lines.map((l, i) => (
        <span key={i} className="block overflow-hidden" style={{ paddingTop: ".16em", marginTop: "-.16em", paddingBottom: ".08em", marginBottom: "-.08em" }}>
          <motion.span className="block origin-left" variants={item}>{l}</motion.span>
        </span>
      ))}
    </Tag>
  );
}

export function FadeUp({ children, delay = 0, className = "", y = 36 }: { children: React.ReactNode; delay?: number; className?: string; y?: number }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-8% 0px" }} transition={{ duration: 0.9, delay, ease }}>
      {children}
    </motion.div>
  );
}
