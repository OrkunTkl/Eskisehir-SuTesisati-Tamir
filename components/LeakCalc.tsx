"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { track } from "@/lib/analytics";

const ML_PER_DROP = 0.05; // ortalama damla hacmi (yaklaşık)
const BATH_L = 150; // ortalama küvet hacmi (yaklaşık)

function Num({ value, digits = 0 }: { value: number; digits?: number }) {
  const mv = useMotionValue(value);
  const sp = useSpring(mv, { stiffness: 90, damping: 22 });
  const ref = useRef<HTMLSpanElement>(null);
  const fmt = (v: number) => v.toLocaleString("tr-TR", { maximumFractionDigits: digits, minimumFractionDigits: digits });
  useEffect(() => { mv.set(value); }, [value, mv]);
  useEffect(() => sp.on("change", (v) => { if (ref.current) ref.current.textContent = fmt(v); }), [sp]); // eslint-disable-line react-hooks/exhaustive-deps
  return <span ref={ref}>{fmt(value)}</span>;
}

export function LeakCalc() {
  const [rate, setRate] = useState(1); // saniyede damla
  const [price, setPrice] = useState(40); // ₺ / m³
  const used = useRef(false);
  const perDayL = rate * ML_PER_DROP * 86400 / 1000;
  const perMonthL = perDayL * 30;
  const cost = (perMonthL / 1000) * price;
  const baths = perMonthL / BATH_L;
  const fill = Math.min(1, perMonthL / 600);

  return (
    <section className="on-aqua relative overflow-hidden bg-aqua px-[var(--gut)] py-24 text-ink md:py-36" aria-labelledby="calc-h">
      <div className="mx-auto grid max-w-[1700px] gap-14 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <p className="mono text-ink/60">03 — Su kaçağı hesaplayıcı</p>
          <h2 id="calc-h" className="display d-xl mt-5">Damla<br /><span className="serif">damla</span> göl<br />olur.</h2>
          <p className="lead mt-8 max-w-lg text-ink/75">Damlayan bir musluk ya da sızdıran rezervuar için ayda ne kadar su kaybettiğinizi tahmin edin. Değerler yaklaşıktır; amaç büyüklük mertebesini görmektir.</p>

          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            <label className="block">
              <span className="mono text-ink/60">Damlama hızı</span>
              <span className="mt-2 block text-3xl font-semibold tabular-nums">{rate.toLocaleString("tr-TR")} <span className="text-xl font-normal text-ink/60">damla / sn</span></span>
              <input type="range" min={0.2} max={4} step={0.1} value={rate} aria-label="Saniyedeki damla sayısı"
                onChange={(e) => { setRate(Number(e.target.value)); if (!used.current) { used.current = true; track("calc_used"); } }}
                className="mt-4 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-ink/20 accent-ink" />
            </label>
            <label className="block">
              <span className="mono text-ink/60">1 m³ su fiyatı (₺)</span>
              <input type="number" inputMode="decimal" min={0} max={999} value={price} onChange={(e) => setPrice(Math.max(0, Math.min(999, Number(e.target.value) || 0)))}
                className="mt-2 block w-full border-b-2 border-ink/40 bg-transparent py-1 text-3xl font-semibold tabular-nums outline-none focus:border-ink" />
              <span className="mt-2 block text-sm text-ink/60">Faturanızdaki birim fiyatı yazın.</span>
            </label>
          </div>
        </div>

        <div className="relative grid content-start gap-8 rounded-[2.2rem] bg-ink p-8 text-ice md:p-10">
          <div className="relative mx-auto h-44 w-full max-w-sm overflow-hidden" aria-hidden>
            <span key={rate} className="absolute left-1/2 top-0 h-5 w-3.5 -translate-x-1/2 rounded-[50%_50%_50%_50%/60%_60%_40%_40%] bg-aqua" style={{ animation: `drip ${1 / rate}s ease-in infinite` }} />
            <div className="absolute inset-x-0 bottom-0 overflow-hidden rounded-b-3xl border border-ice/20" style={{ height: "40%" }}>
              <motion.div className="absolute inset-x-0 bottom-0 bg-aqua/80" animate={{ height: `${Math.max(6, fill * 100)}%` }} transition={{ type: "spring", stiffness: 70, damping: 20 }} />
            </div>
          </div>
          <dl className="grid gap-6">
            <div><dt className="mono text-ice/50">Günde</dt><dd className="display d-lg"><Num value={perDayL} digits={1} /> <span className="text-ice/60 text-[.4em]">litre</span></dd></div>
            <div><dt className="mono text-ice/50">Ayda</dt><dd className="display d-lg text-aqua"><Num value={perMonthL} digits={0} /> <span className="text-ice/60 text-[.4em]">litre</span></dd></div>
            <div className="grid grid-cols-2 gap-6 border-t border-ice/15 pt-6">
              <div><dt className="mono text-ice/50">≈ Küvet</dt><dd className="display d-md"><Num value={baths} digits={1} /></dd></div>
              <div><dt className="mono text-ice/50">≈ Maliyet / ay</dt><dd className="display d-md"><Num value={cost} digits={0} /> ₺</dd></div>
            </div>
          </dl>
          <p className="text-sm text-ice/50">Hesap: damla başına ≈0,05 ml, küvet ≈150 L varsayımıyla yapılır. Gerçek değerler damla boyutuna ve kaçağın türüne göre değişir.</p>
        </div>
      </div>
    </section>
  );
}
