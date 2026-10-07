"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function FaqList({ items, tone = "dark" }: { items: { q: string; a: string }[]; tone?: "dark" | "light" }) {
  const [open, setOpen] = useState<number | null>(0);
  const line = tone === "dark" ? "border-ice/20" : "border-ink/20";
  return (
    <div className={`border-t ${line}`}>
      {items.map((it, i) => {
        const o = open === i;
        return (
          <div key={it.q} className={`border-b ${line}`}>
            <h3>
              <button type="button" aria-expanded={o} onClick={() => setOpen(o ? null : i)} className="flex w-full items-center justify-between gap-6 py-6 text-left" data-cursor={o ? "Kapat" : "Aç"}>
                <span className="display d-sm" style={{ lineHeight: 1 }}>{it.q}</span>
                <motion.span animate={{ rotate: o ? 45 : 0 }} className={`display d-sm shrink-0 ${tone === "dark" ? "text-aqua" : "text-ink"}`}>+</motion.span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {o && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }} className="overflow-hidden">
                  <p className="lead max-w-3xl pb-7 opacity-75">{it.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
