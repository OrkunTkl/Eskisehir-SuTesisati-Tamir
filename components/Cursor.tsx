"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function Cursor() {
  const x = useMotionValue(-100), y = useMotionValue(-100);
  const rx = useSpring(x, { stiffness: 260, damping: 28, mass: 0.5 });
  const ry = useSpring(y, { stiffness: 260, damping: 28, mass: 0.5 });
  const [label, setLabel] = useState("");
  const [scale, setScale] = useState(1);
  const [down, setDown] = useState(false);
  const on = useRef(false);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    document.documentElement.classList.add("has-cursor");
    const move = (e: PointerEvent) => {
      on.current = true; x.set(e.clientX); y.set(e.clientY);
      const t = e.target as HTMLElement | null;
      const c = t?.closest<HTMLElement>("[data-cursor]");
      if (c) { setLabel(c.dataset.cursor ?? ""); setScale(c.dataset.cursor ? 1.9 : 1.5); }
      else if (t?.closest("a,button,summary,select,input,textarea,label")) { setLabel(""); setScale(1.5); }
      else { setLabel(""); setScale(1); }
    };
    const dn = () => setDown(true), up = () => setDown(false);
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", dn); window.addEventListener("pointerup", up);
    return () => {
      document.documentElement.classList.remove("has-cursor");
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", dn); window.removeEventListener("pointerup", up);
    };
  }, [x, y]);

  return (
    <>
      <motion.div className="cursor" style={{ x, y }} aria-hidden><div className="cursor-dot" style={{ opacity: label ? 0 : 1 }} /></motion.div>
      <motion.div className="cursor" style={{ x: rx, y: ry }} aria-hidden>
        <motion.div className="cursor-ring" animate={{ scale: down ? scale * 0.85 : scale, backgroundColor: label ? "rgba(255,255,255,1)" : "rgba(255,255,255,0)", color: label ? "#000" : "#fff" }} transition={{ type: "spring", stiffness: 300, damping: 22 }}>
          <span className="cursor-label" style={{ scale: 1 / Math.max(scale, 1) }}>{label}</span>
        </motion.div>
      </motion.div>
    </>
  );
}
