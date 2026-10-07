import { meta } from "@/lib/seo";
import { PHONE_DISPLAY } from "@/lib/contact";
import { PageHero } from "@/components/PageHero";

export const metadata = meta("Aydınlatma Metni (KVKK) | Eskişehir Su Tesisatı", "Kişisel verilerin işlenmesine ilişkin aydınlatma metni.", "/gizlilik");

const controller = process.env.NEXT_PUBLIC_CONTROLLER_NAME?.trim();
const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim();
const address = process.env.NEXT_PUBLIC_CONTROLLER_ADDRESS?.trim();

export default function Page() {
  return (
    <>
      <PageHero eyebrow="KVKK" title={"Aydınlatma\nmetni"} />
      <section className="on-light px-[var(--gut)] py-20 md:py-32">
        <div className="mx-auto max-w-3xl space-y-6 text-lg text-ink/75 md:text-xl">
          <p>Bu site, Eskişehir&apos;de su tesisatı hizmeti arayan kullanıcıların talebini telefon veya WhatsApp üzerinden alıp uygun bağımsız tesisatçıya yönlendirir. Sitedeki talep formu bilgileri bir sunucuya kaydetmez; girdiğiniz bilgiler yalnızca sizin başlattığınız hazır bir WhatsApp mesajına dönüşür.</p>
          <p><strong className="font-semibold text-ink">İşlenen veriler:</strong> Bizi aradığınızda veya WhatsApp&apos;tan yazdığınızda ilettiğiniz ad, telefon numarası, ilçe ve sorun açıklaması.</p>
          <p><strong className="font-semibold text-ink">Amaç:</strong> Talebinizi değerlendirmek, sizinle iletişime geçmek ve sizi uygun tesisatçıya yönlendirmek.</p>
          <p><strong className="font-semibold text-ink">Aktarım:</strong> Talebinizi yönlendirebilmek için bilgileriniz, ilgili iş için seçilen bağımsız tesisatçıyla paylaşılabilir.</p>
          <p><strong className="font-semibold text-ink">Haklarınız:</strong> 6698 sayılı KVKK&apos;nın 11. maddesi uyarınca verilerinizin işlenip işlenmediğini öğrenme, düzeltilmesini veya silinmesini isteme ve itiraz etme haklarına sahipsiniz. Taleplerinizi aşağıdaki iletişim bilgilerinden iletebilirsiniz.</p>
          {(controller || email || address || PHONE_DISPLAY) && (
            <div>
              <p className="font-semibold text-ink">Veri sorumlusu ve iletişim</p>
              <ul className="mt-2 space-y-1">
                {controller && <li>{controller}</li>}
                {address && <li>{address}</li>}
                {email && <li>E-posta: <a className="underline underline-offset-4" href={`mailto:${email}`}>{email}</a></li>}
                {PHONE_DISPLAY && <li>Telefon: {PHONE_DISPLAY}</li>}
              </ul>
            </div>
          )}
          <p className="text-base text-ink/60">Çerez ve analiz araçları kullanılıyorsa bu metin ilgili ayrıntılarla güncellenmelidir.</p>
        </div>
      </section>
    </>
  );
}
