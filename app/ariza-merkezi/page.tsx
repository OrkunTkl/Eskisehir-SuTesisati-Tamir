import { PageHero } from "@/components/PageHero";
import { ProblemIndex } from "@/components/ProblemIndex";
import { CallbackSection } from "@/components/CallbackSection";
import { JsonLd } from "@/components/JsonLd";
import { meta, breadcrumb } from "@/lib/seo";

export const metadata = meta(
  "Su Tesisatı Arıza Merkezi: Nedenler ve İlk Adımlar | Eskişehir Su Tesisatı",
  "Musluk damlıyor, gider tıkalı, duvardan su sızıyor, boru patladı… Sorununuzu seçin; nedenlerini, güvenli ilk adımları ve usta çağırma zamanını öğrenin.",
  "/ariza-merkezi",
);

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumb([["Ana Sayfa", "/"], ["Arıza merkezi", "/ariza-merkezi"]])} />
      <PageHero eyebrow="Arıza merkezi" title={"Sorun\nne?"} lead="Her sorun için olası nedenler, güvenle yapabilecekleriniz ve ne zaman usta çağırmanız gerektiği." crumbs={[["Ana Sayfa", "/"], ["Arıza merkezi", "/ariza-merkezi"]]} />
      <ProblemIndex />
      <CallbackSection />
    </>
  );
}
