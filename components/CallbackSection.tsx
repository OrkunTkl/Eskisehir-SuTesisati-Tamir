import { Liquid } from "@/components/Liquid";
import { CallbackForm } from "@/components/CallbackForm";
import { Cta } from "@/components/Cta";
import { SplitLines } from "@/components/Reveal";

export function CallbackSection({ problem }: { problem?: string }) {
  return (
    <section id="iletisim" className="relative isolate overflow-hidden px-[var(--gut)] py-28 md:py-44" aria-labelledby="iletisim-h">
      <Liquid className="absolute inset-0 -z-10 opacity-80" calm interactive={false} />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink via-ink/40 to-ink/70" aria-hidden />
      <div className="mx-auto max-w-[1700px]">
        <p className="mono text-aqua">07 — İletişim</p>
        <SplitLines as="h2" className="display d-xxl mt-5" lines={["Suyu", <span key="s" className="serif text-aqua" style={{ fontSize: "1.08em" }}>durduralım.</span>]} />
        <div className="mt-14 grid gap-14 lg:grid-cols-[1fr_1.25fr]">
          <div>
            <p className="lead max-w-md text-ice/80">Hemen arayın ya da formu doldurun. Talebiniz hazır bir WhatsApp mesajına dönüşür; ücreti ve kapsamı işe başlamadan tesisatçıyla netleştirin.</p>
            <div className="mt-8"><Cta problem={problem} /></div>
          </div>
          <div className="rounded-[2rem] border border-ice/15 bg-ink/70 p-7 backdrop-blur-md md:p-10"><CallbackForm /></div>
        </div>
      </div>
    </section>
  );
}
