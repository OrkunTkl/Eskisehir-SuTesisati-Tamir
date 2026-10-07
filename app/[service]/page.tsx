import { notFound } from "next/navigation";
import Link from "next/link";
import { services } from "@/data/services";
import { problems } from "@/data/problems";
import { serviceContent } from "@/data/seo-content";
import { Cta } from "@/components/Cta";
import { JsonLd } from "@/components/JsonLd";
import { FaqList } from "@/components/Faq";
import { PageHero } from "@/components/PageHero";
import { Disclaimer } from "@/components/Disclaimer";
import { CallbackSection } from "@/components/CallbackSection";
import { FadeUp } from "@/components/Reveal";
import { Icon } from "@/components/Icons";
import { meta, breadcrumb, serviceSchema, faqSchema } from "@/lib/seo";

export const dynamicParams = false;
export const generateStaticParams = () => services.map((s) => ({ service: s.slug }));
type Props = { params: Promise<{ service: string }> };

export async function generateMetadata({ params }: Props) {
  const { service } = await params;
  const c = serviceContent[service];
  return c ? meta(c.title, c.description, `/${service}`) : {};
}

export default async function Page({ params }: Props) {
  const { service } = await params;
  const s = services.find((x) => x.slug === service);
  const c = serviceContent[service];
  if (!s || !c) notFound();
  const rp = c.problems.map((x) => problems.find((p) => p.slug === x)).filter(Boolean) as typeof problems;
  const rs = c.services.map((x) => services.find((p) => p.slug === x)).filter(Boolean) as typeof services;
  return (
    <>
      <JsonLd data={breadcrumb([["Ana Sayfa", "/"], ["Hizmetler", "/hizmetler"], [s.title, `/${s.slug}`]])} />
      <JsonLd data={serviceSchema(s.title, c.description, `/${s.slug}`)} />
      <JsonLd data={faqSchema(c.faq)} />
      <PageHero eyebrow="Hizmet" title={c.h1} lead={c.lead} crumbs={[["Ana Sayfa", "/"], ["Hizmetler", "/hizmetler"], [s.title, `/${s.slug}`]]}>
        <Cta problem={s.title} />
      </PageHero>

      <article className="on-light px-[var(--gut)] py-24 md:py-36">
        <div className="mx-auto grid max-w-[1700px] gap-16 lg:grid-cols-[.8fr_1.4fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Icon name={s.icon} size={120} className="text-ink" />
            <p className="mono mt-6 text-ink/50">Bu sayfada</p>
            <ul className="mt-3 space-y-1 text-lg">{c.sections.map((x) => (<li key={x.h}>{x.h}</li>))}<li>Sık sorulanlar</li></ul>
          </div>
          <div>
            {c.sections.map((x, i) => (
              <FadeUp key={x.h}>
                <section className="mb-16 border-t border-ink/20 pt-8">
                  <p className="mono text-ink/50">{String(i + 1).padStart(2, "0")}</p>
                  <h2 className="display d-md mt-3">{x.h}</h2>
                  <p className="lead mt-5 max-w-2xl text-ink/75">{x.p}</p>
                </section>
              </FadeUp>
            ))}
            <h2 className="display d-md mb-8">Sık sorulanlar</h2>
            <FaqList items={c.faq} tone="light" />
            <nav aria-label="İlgili sayfalar" className="mt-20">
              <h2 className="display d-md">İlgili rehberler ve hizmetler</h2>
              <ul className="mt-6 grid gap-2 text-xl sm:grid-cols-2">
                {rp.map((x) => (<li key={x.slug}><Link className="underline decoration-ink/30 underline-offset-4 hover:decoration-ink" href={`/ariza-merkezi/${x.slug}`}>{x.title}</Link></li>))}
                {rs.map((x) => (<li key={x.slug}><Link className="underline decoration-ink/30 underline-offset-4 hover:decoration-ink" href={`/${x.slug}`}>{x.title}</Link></li>))}
              </ul>
            </nav>
            <Disclaimer />
          </div>
        </div>
      </article>
      <CallbackSection problem={s.title} />
    </>
  );
}
