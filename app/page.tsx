import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Manifesto } from "@/components/Manifesto";
import { ServiceRail } from "@/components/ServiceRail";
import { LeakCalc } from "@/components/LeakCalc";
import { ProblemIndex } from "@/components/ProblemIndex";
import { Process } from "@/components/Process";
import { DistrictBand } from "@/components/DistrictBand";
import { FaqList } from "@/components/Faq";
import { CallbackSection } from "@/components/CallbackSection";
import { JsonLd } from "@/components/JsonLd";
import { meta, faqSchema } from "@/lib/seo";

export const metadata = meta(
  "Eskişehir Su Tesisatı: Su Kaçağı, Tıkalı Gider, Musluk ve Tesisat Rehberi",
  "Eskişehir'de su kaçağı, tıkalı gider, musluk ve tesisat sorunlarında ilk adımlar, arıza rehberi ve bağımsız tesisatçıya yönlendirme.",
  "/",
);

const faq = [
  { q: "Su kaçağından şüphelenirsem ilk ne yapmalıyım?", a: "Tüm muslukları ve su kullanan cihazları kapatıp su sayacına bakın. Sayaç dönmeye devam ediyorsa bir yerde kaçak vardır. Acil bir durumda ana vanayı kapatın, elektrik ve su temasından kaçının, sonra yardım isteyin." },
  { q: "Bu site bir tesisat firması mı?", a: "Hayır. Bu site bilgi veren bir platformdur; talebinizi uygun bağımsız tesisatçılara yönlendirir. Hizmeti veren taraf, işin kapsamını ve ücretini kendisi belirler." },
  { q: "Ücreti kim belirliyor?", a: "Ücreti hizmeti veren bağımsız tesisatçı belirler. İşe başlamadan önce kapsamı ve fiyatı konuşup teyit etmenizi öneririz." },
  { q: "Hangi ilçelere hizmet yönlendirmesi yapılıyor?", a: "Eskişehir'in 14 ilçesi için talep alınır: Tepebaşı, Odunpazarı, Alpu, Beylikova, Çifteler, Günyüzü, Han, İnönü, Mahmudiye, Mihalgazi, Mihalıççık, Sarıcakaya, Seyitgazi ve Sivrihisar." },
  { q: "Form verilerim saklanıyor mu?", a: "Hayır. Form bilgileri bir sunucuya kaydedilmez; hazır bir WhatsApp mesajına dönüşür ve göndermeyi siz yaparsınız. Ayrıntılar aydınlatma metnindedir." },
];

export default function Page() {
  return (
    <>
      <JsonLd data={faqSchema(faq)} />
      <Hero />
      <div className="border-y border-ice/10 bg-ink py-5">
        <Marquee className="display d-sm" dur={32} items={["Su kaçağı", "Tıkalı gider", "Musluk", "Klozet", "Hidrofor", "Boru yenileme", "Banyo mutfak", "Vana"]} />
      </div>
      <Manifesto />
      <ServiceRail />
      <LeakCalc />
      <ProblemIndex />
      <Process />
      <DistrictBand />
      <section className="bg-ink px-[var(--gut)] pb-24 md:pb-40" aria-labelledby="sss-h">
        <div className="mx-auto max-w-[1700px]">
          <p className="mono text-ice/50">Sık sorulanlar</p>
          <h2 id="sss-h" className="display d-xl mb-14 mt-5">Merak <span className="serif text-aqua">edilenler.</span></h2>
          <FaqList items={faq} />
        </div>
      </section>
      <CallbackSection />
    </>
  );
}
