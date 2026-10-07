"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

declare global { interface Window { __lenis?: Lenis } }

export function SmoothScroll() {
  const path = usePathname();
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ lerp: 0.085, wheelMultiplier: 0.95, smoothWheel: true });
    window.__lenis = lenis;
    let raf = 0;
    const tick = (t: number) => { lenis.raf(t); raf = requestAnimationFrame(tick); };
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); lenis.destroy(); window.__lenis = undefined; };
  }, []);
  useEffect(() => { window.__lenis?.scrollTo(0, { immediate: true }); }, [path]);
  return null;
}
