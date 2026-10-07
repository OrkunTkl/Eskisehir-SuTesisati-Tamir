import { notFound } from "next/navigation";
import Link from "next/link";
import { problems } from "@/data/problems";
import { services } from "@/data/services";
import { Cta } from "@/components/Cta";
import { JsonLd } from "@/components/JsonLd";
import { FaqList } from "@/components/Faq";
import { PageHero } from "@/components/PageHero";
import { Disclaimer } from "@/components/Disclaimer";
import { CallbackSection } from "@/components/CallbackSection";
import { FadeUp } from "@/components/Reveal";
import { meta, breadcrumb, articleSchema, faqSchema } from "@/lib/seo";

export const dynamicParams = false;
export const generateStaticParams = () => problems.map((p) => ({ slug: p.slug }));
type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const p = problems.find((x) => x.slug === slug);
  return p ? meta(p.seoTitle, p.short, `/ariza-merkezi/${p.slug}`) : {};
}

function List({ title, items, tone }: { title: string; items: string[]; tone: "ok" | "warn" | "plain" }) {
  const dot = tone === "warn" ? "bg-alarm" : tone === "ok" ? "bg-ink" : "bg-ink/40";
  return (
    <FadeUp>
      <section className="mb-16 border-t border-ink/20 pt-8">
        <h2 className="display d-md">{title}</h2>
        <ul className="mt-6 space-y-4">
          {items.map((t) => (
            <li key={t} className="flex gap-4 text-lg leading-snug text-ink/80 md:text-xl"><span className={`mt-2.5 size-2.5 shrink-0 rounded-full ${dot}`} aria-hidden />{t}</li>
          ))}
        </ul>
      </section>
    </FadeUp>
  );
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const p = problems.find((x) => x.slug === slug);
  if (!p) notFound();
  const rs = p.services.map((x) => services.find((s) => s.slug === x)).filter(Boolean) as typeof services;
  const rp = p.problems.map((x) => problems.find((s) => s.slug === x)).filter(Boolean) as typeof problems;
  const path = `/ariza-merkezi/${p.slug}`;
  return (
    <>
      <JsonLd data={breadcrumb([["Ana Sayfa", "/"], ["Arıza merkezi", "/ariza-merkezi"], [p.title, path]])} />
      <JsonLd data={articleSchema(p.title, p.short, path)} />
      <JsonLd data={faqSchema(p.faq)} />
      <PageHero eyebrow={p.urgent ? "Acil durum rehberi" : "Arıza rehberi"} urgent={p.urgent} title={p.title} lead={p.short} crumbs={[["Ana Sayfa", "/"], ["Arıza merkezi", "/ariza-merkezi"], [p.title, path]]}>
        <Cta problem={p.title} />
      </PageHero>

      <article className="on-light px-[var(--gut)] py-24 md:py-36">
        <div className="mx-auto grid max-w-[1700px] gap-16 lg:grid-cols-[.7fr_1.5fr]">
          <aside className="lg:sticky lg:top-32 lg:self-start">
            {p.urgent && (
              <div className="rounded-[1.6rem] bg-alarm p-6 text-white">
                <p className="mono">Önce</p>
                <p className="display d-sm mt-2">Ana vanayı kapatın.</p>
                <p className="mt-3 text-white/85">Su ve elektrik birlikte tehlikelidir; ıslak zeminde elektrikli cihaza dokunmayın.</p>
              </div>
            )}
            <p className="mono mt-8 text-ink/50">Bu sayfada</p>
            <ul className="mt-3 space-y-1 text-lg"><li>Olası nedenler</li><li>Güvenle yapabilecekleriniz</li><li>Ne zaman usta çağırmalı</li><li>Sık sorulanlar</li></ul>
          </aside>
          <div>
            <List title="Olası nedenler" items={p.causes} tone="plain" />
            <List title="Güvenle yapabilecekleriniz" items={p.safe} tone="ok" />
            <List title="Ne zaman usta çağırmalı" items={p.call} tone="warn" />
            <h2 className="display d-md mb-8">Sık sorulanlar</h2>
            <FaqList items={p.faq} tone="light" />
            <nav aria-label="İlgili sayfalar" className="mt-20">
              <h2 className="display d-md">İlgili hizmetler ve rehberler</h2>
              <ul className="mt-6 grid gap-2 text-xl sm:grid-cols-2">
                {rs.map((x) => (<li key={x.slug}><Link className="underline decoration-ink/30 underline-offset-4 hover:decoration-ink" href={`/${x.slug}`}>{x.title}</Link></li>))}
                {rp.map((x) => (<li key={x.slug}><Link className="underline decoration-ink/30 underline-offset-4 hover:decoration-ink" href={`/ariza-merkezi/${x.slug}`}>{x.title}</Link></li>))}
              </ul>
            </nav>
            <Disclaimer />
          </div>
        </div>
      </article>
      <CallbackSection problem={p.title} />
    </>
  );
}
