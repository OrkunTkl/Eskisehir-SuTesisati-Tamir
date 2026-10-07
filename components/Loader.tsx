"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Loader() {
  const [done, setDone] = useState(false);
  const [n, setN] = useState(0);

  useEffect(() => {
    const seen = document.documentElement.classList.contains("seen");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (seen || reduce) { setDone(true); return; }
    window.__lenis?.stop();
    document.documentElement.style.overflow = "hidden";
    const t0 = performance.now(), dur = 1700;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / dur);
      setN(Math.round((1 - Math.pow(1 - p, 3)) * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 350);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (!done) return;
    try { sessionStorage.setItem("sv", "1"); } catch {}
    document.documentElement.style.overflow = "";
    window.__lenis?.start();
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="loader" role="status" aria-label="Sayfa yükleniyor"
          exit={{ y: "-100%", borderBottomLeftRadius: "50% 14vh", borderBottomRightRadius: "50% 14vh" }}
          transition={{ duration: 0.95, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="relative text-center">
            <p className="display d-lg text-ice/10">
              Eskişehir<br />Su Tesisatı
            </p>
            <p className="display d-lg absolute inset-0 text-aqua" style={{ clipPath: `inset(${100 - n}% 0 0 0)` }} aria-hidden>
              Eskişehir<br />Su Tesisatı
            </p>
          </div>
          <p className="mono absolute bottom-8 left-[var(--gut)] text-ice/60">Yükleniyor</p>
          <p className="display d-md absolute bottom-6 right-[var(--gut)] tabular-nums">{String(n).padStart(3, "0")}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
