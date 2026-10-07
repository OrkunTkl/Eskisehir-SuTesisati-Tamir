import Link from "next/link";
import { problems } from "@/data/problems";

export function ProblemIndex() {
  return (
    <section className="on-light px-[var(--gut)] py-24 md:py-40" aria-labelledby="ariza-h">
      <div className="mx-auto max-w-[1700px]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mono text-ink/50">04 — Arıza merkezi</p>
            <h2 id="ariza-h" className="display d-xl mt-5">Ne <span className="serif">oluyor</span><br />tam olarak?</h2>
          </div>
          <p className="lead max-w-sm text-ink/70">Sorununuzu seçin: olası nedenleri, güvenle yapabileceklerinizi ve usta çağırma zamanını öğrenin.</p>
        </div>
        <ul className="mt-16 border-t border-ink/20">
          {problems.map((p, i) => (
            <li key={p.slug} className="border-b border-ink/20">
              <Link href={`/ariza-merkezi/${p.slug}`} data-cursor="Oku" className="group relative grid grid-cols-[2.5rem_1fr_auto] items-center gap-x-4 gap-y-1 overflow-hidden py-5 md:grid-cols-[4rem_1.3fr_1fr_auto] md:py-7">
                <span className="absolute inset-0 -z-0 origin-bottom scale-y-0 bg-ink transition-transform duration-500 ease-[cubic-bezier(.7,0,.2,1)] group-hover:scale-y-100" aria-hidden />
                <span className="mono relative z-10 pl-1 transition-colors duration-500 group-hover:text-aqua">{String(i + 1).padStart(2, "0")}</span>
                <span className="display d-md relative z-10 transition-all duration-500 group-hover:translate-x-4 group-hover:text-ice">
                  {p.urgent && <><span className="mr-3 inline-block size-[.42em] animate-pulse rounded-full bg-alarm align-middle" aria-hidden /><span className="sr-only">Acil: </span></>}
                  {p.title}
                  
                </span>
                <span className="relative z-10 hidden max-w-md text-ink/60 transition-colors duration-500 group-hover:text-ice/80 md:block">{p.short.split(". ")[0]}.</span>
                <span className="display d-md relative z-10 pr-2 transition-all duration-500 group-hover:translate-x-1 group-hover:text-aqua">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
