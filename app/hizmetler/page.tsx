import Link from "next/link";
import { services } from "@/data/services";
import { PageHero } from "@/components/PageHero";
import { Icon } from "@/components/Icons";
import { CallbackSection } from "@/components/CallbackSection";
import { JsonLd } from "@/components/JsonLd";
import { meta, breadcrumb } from "@/lib/seo";

export const metadata = meta(
  "Su Tesisatı Hizmetleri: Eskişehir | Eskişehir Su Tesisatı",
  "Su kaçağı tespiti, tıkalı gider açma, musluk-batarya, klozet-rezervuar, hidrofor ve tesisat yenileme hizmetlerinin rehberi.",
  "/hizmetler",
);

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumb([["Ana Sayfa", "/"], ["Hizmetler", "/hizmetler"]])} />
      <PageHero eyebrow="Hizmetler" title={"Tüm\nhizmetler"} lead="Sekiz ana başlık: her biri için ne yapıldığını, neye dikkat edileceğini ve hangi sorunla ilişkili olduğunu okuyun." crumbs={[["Ana Sayfa", "/"], ["Hizmetler", "/hizmetler"]]} />
      <section className="on-light px-[var(--gut)] py-20 md:py-32">
        <ul className="mx-auto grid max-w-[1700px] gap-px overflow-hidden rounded-[2rem] border border-ink/15 bg-ink/15 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <li key={s.slug} className="bg-ice">
              <Link href={`/${s.slug}`} data-cursor="Aç" className="group relative flex h-full min-h-[22rem] flex-col justify-between overflow-hidden p-7 transition-colors duration-500 hover:text-ice">
                <span className="absolute inset-0 -z-0 translate-y-full bg-ink transition-transform duration-500 ease-[cubic-bezier(.7,0,.2,1)] group-hover:translate-y-0" aria-hidden />
                <div className="relative z-10 flex justify-between"><span className="mono">{String(i + 1).padStart(2, "0")}</span><Icon name={s.icon} size={56} className="transition-colors duration-500 group-hover:text-aqua" /></div>
                <div className="relative z-10"><h2 className="display d-sm">{s.title}</h2><p className="mt-3 opacity-70">{s.desc}</p></div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <CallbackSection />
    </>
  );
}
