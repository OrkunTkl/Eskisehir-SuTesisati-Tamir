import Link from "next/link";
import { districts } from "@/lib/contact";
import { services } from "@/data/services";
import { PageHero } from "@/components/PageHero";
import { CallbackSection } from "@/components/CallbackSection";
import { JsonLd } from "@/components/JsonLd";
import { Disclaimer } from "@/components/Disclaimer";
import { meta, breadcrumb } from "@/lib/seo";

export const metadata = meta(
  "Eskişehir Su Tesisatı: 14 İlçe İçin Rehber | Eskişehir Su Tesisatı",
  "Tepebaşı, Odunpazarı ve Eskişehir'in diğer ilçelerinde su kaçağı, tıkalı gider ve tesisat sorunları için rehber ve yönlendirme.",
  "/eskisehir",
);

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumb([["Ana Sayfa", "/"], ["Eskişehir", "/eskisehir"]])} />
      <PageHero eyebrow="Eskişehir" title={"14 ilçe,\ntek merkez"} lead="Şehir merkezinden en uzak ilçeye kadar su tesisatı sorunlarında aynı rehber, aynı yönlendirme." crumbs={[["Ana Sayfa", "/"], ["Eskişehir", "/eskisehir"]]} />
      <section className="on-light px-[var(--gut)] py-24 md:py-36">
        <div className="mx-auto max-w-[1700px]">
          <h2 className="display d-lg">İlçeler</h2>
          <ul className="mt-10 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
            {districts.map((d, i) => (
              <li key={d} className="flex items-baseline gap-4 border-b border-ink/20 py-5"><span className="mono text-ink/40">{String(i + 1).padStart(2, "0")}</span><span className="display d-md">{d}</span></li>
            ))}
          </ul>
          <p className="lead mt-12 max-w-2xl text-ink/75">Talep gönderirken ilçenizi seçmeniz, uygun tesisatçıya yönlendirmeyi hızlandırır. Hizmetin kapsamı ve tesisatçının ulaşabilirliği ilçeye ve işe göre değişebilir.</p>
          <h2 className="display d-md mt-20">Hizmet rehberleri</h2>
          <ul className="mt-6 grid gap-2 text-xl sm:grid-cols-2">
            {services.map((s) => (<li key={s.slug}><Link className="underline decoration-ink/30 underline-offset-4 hover:decoration-ink" href={`/${s.slug}`}>{s.title}</Link></li>))}
          </ul>
          <Disclaimer />
        </div>
      </section>
      <CallbackSection />
    </>
  );
}
