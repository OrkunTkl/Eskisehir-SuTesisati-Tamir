import Link from "next/link";
import { districts } from "@/lib/contact";
import { Marquee } from "@/components/Marquee";

export function DistrictBand() {
  const half = Math.ceil(districts.length / 2);
  return (
    <section className="overflow-hidden bg-ink py-24 md:py-36" aria-labelledby="ilce-h">
      <div className="px-[var(--gut)]">
        <div className="mx-auto flex max-w-[1700px] flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mono text-ice/50">06 — Kapsam</p>
            <h2 id="ilce-h" className="display d-xl mt-5">14 ilçe,<br /><span className="serif text-aqua">tek merkez.</span></h2>
          </div>
          <Link href="/eskisehir" className="btn btn-line" data-cursor="Git">İlçe rehberi →</Link>
        </div>
      </div>
      <div className="mt-16 space-y-2 display d-lg" aria-hidden>
        <div className="text-ice"><Marquee items={districts.slice(0, half)} dur={46} /></div>
        <div className="text-ice/25"><Marquee items={districts.slice(half)} dur={52} reverse /></div>
      </div>
      <ul className="sr-only">{districts.map((d) => (<li key={d}>{d}</li>))}</ul>
      
    </section>
  );
}
