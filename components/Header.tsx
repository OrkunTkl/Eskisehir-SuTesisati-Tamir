"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { services } from "@/data/services";
// import { telLink, PHONE_DISPLAY } from "@/lib/contact"; // telefon gizlendi
import { TrackLink } from "@/components/TrackLink";

const nav = [
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/ariza-merkezi", label: "Arıza merkezi" },
  { href: "/eskisehir", label: "Eskişehir" },
  { href: "/#iletisim", label: "İletişim" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [hide, setHide] = useState(false);
  const path = usePathname();
  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    let raf = 0;
    const check = () => {
      raf = 0;
      const els = document.elementsFromPoint(window.innerWidth * 0.5, 38);
      const light = els.some((e) => e.closest(".on-light, .on-aqua"));
      document.documentElement.dataset.tone =
        light && !document.getElementById("menu") ? "light" : "dark";
    };
    const on = () => {
      if (!raf) raf = requestAnimationFrame(check);
    };
    check();
    let last = window.scrollY;
    const dir = () => {
      const y = window.scrollY;
      if (y > 240 && y > last + 4) setHide(true);
      else if (y < last - 4 || y <= 240) setHide(false);
      last = y;
    };
    window.addEventListener("scroll", dir, { passive: true });
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    const t = setInterval(on, 400);
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("scroll", dir);
      window.removeEventListener("resize", on);
      clearInterval(t);
      cancelAnimationFrame(raf);
    };
  }, [path]);
  useEffect(() => {
    if (open) window.__lenis?.stop();
    else window.__lenis?.start();
    document.documentElement.style.overflow = open ? "hidden" : "";
    const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open]);

  return (
    <>
      <header
        className={`hdr pointer-events-none fixed inset-x-0 top-0 z-[100] flex items-start justify-between px-[var(--gut)] pt-5 transition-transform duration-500 ease-[cubic-bezier(.7,0,.2,1)] ${hide && !open ? "-translate-y-[130%]" : "translate-y-0"}`}
      >
        <Link
          href="/"
          className="pointer-events-auto flex items-center gap-2.5"
          aria-label="Eskişehir Su Tesisatı ana sayfa"
          data-cursor="Ana"
        >
          <svg width="20" height="28" viewBox="0 0 22 30" aria-hidden>
            <path
              fill="currentColor"
              d="M11 0C11 0 0 13.2 0 19.5A11 11 0 0 0 22 19.5C22 13.2 11 0 11 0z"
            />
          </svg>
          <span className="display text-[1.35rem] leading-none">
            Eskişehir
            <br />
            Su Tesisatı
          </span>
        </Link>
        <div className="pointer-events-auto flex items-center gap-3">
          {/* Telefon numarası gizlendi
          {PHONE_DISPLAY && (
            <TrackLink event="phone_click" href={telLink()} className="mono hidden rounded-full pill px-4 py-3 md:inline-block">
              {PHONE_DISPLAY}
            </TrackLink>
          )}
          */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="menu"
            className="mono relative flex h-11 items-center gap-3 rounded-full pill px-5"
            data-cursor={open ? "Kapat" : "Menü"}
          >
            <span>{open ? "Kapat" : "Menü"}</span>
            <span className="relative block h-2.5 w-5" aria-hidden>
              <motion.i
                className="absolute left-0 h-px w-full bg-current"
                animate={{ top: open ? "50%" : "0%", rotate: open ? 45 : 0 }}
              />
              <motion.i
                className="absolute left-0 h-px w-full bg-current"
                animate={{ top: open ? "50%" : "100%", rotate: open ? -45 : 0 }}
              />
            </span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menü"
            className="fixed inset-0 z-[90] overflow-y-auto bg-deep px-[var(--gut)] pb-10 pt-28 text-ice"
            initial={{ clipPath: "circle(0% at calc(100% - 4rem) 2.8rem)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 4rem) 2.8rem)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 4rem) 2.8rem)" }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="mx-auto grid max-w-[1700px] gap-12 lg:grid-cols-[1.4fr_1fr]">
              <nav aria-label="Ana menü">
                <ul>
                  {nav.map((n, i) => (
                    <li
                      key={n.href}
                      className="overflow-hidden border-b border-ice/15"
                    >
                      <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{
                          delay: 0.25 + i * 0.08,
                          duration: 0.8,
                          ease: [0.76, 0, 0.24, 1],
                        }}
                      >
                        <Link
                          href={n.href}
                          className="group flex items-baseline gap-5 py-3 transition-colors hover:text-aqua"
                        >
                          <span className="mono w-8 text-ice/40">0{i + 1}</span>
                          <span className="display d-lg">{n.label}</span>
                        </Link>
                      </motion.div>
                    </li>
                  ))}
                </ul>
              </nav>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <p className="mono text-ice/50">Hizmetler</p>
                <ul className="mt-5 space-y-1.5 text-xl">
                  {services.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/${s.slug}`}
                        className="inline-block transition-transform hover:translate-x-2 hover:text-aqua"
                      >
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
