import Link from "next/link";
import { services } from "@/data/services";
import { PHONE_DISPLAY } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink px-[var(--gut)] pb-8 pt-24 text-ice">
      <div className="mx-auto grid max-w-[1700px] gap-14 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="mono text-ice/50">Eskişehir · 14 ilçe</p>
          <p className="lead mt-4 max-w-md text-ice/80">
            Eskişehir&apos;de su tesisatı sorunu yaşayanları bağımsız tesisatçılara yönlendiren bir bilgi platformuyuz. Hizmeti biz vermeyiz, fiyatı biz belirlemeyiz.
          </p>
          {PHONE_DISPLAY && <p className="display d-sm mt-8 text-aqua">{PHONE_DISPLAY}</p>}
        </div>
        <nav aria-label="Hizmetler">
          <p className="mono text-ice/50">Hizmetler</p>
          <ul className="mt-4 space-y-2">
            {services.map((s) => (<li key={s.slug}><Link href={`/${s.slug}`} className="transition-colors hover:text-aqua">{s.title}</Link></li>))}
          </ul>
        </nav>
        <nav aria-label="Sayfalar">
          <p className="mono text-ice/50">Sayfalar</p>
          <ul className="mt-4 space-y-2">
            <li><Link href="/ariza-merkezi" className="hover:text-aqua">Arıza merkezi</Link></li>
            <li><Link href="/hizmetler" className="hover:text-aqua">Tüm hizmetler</Link></li>
            <li><Link href="/eskisehir" className="hover:text-aqua">Eskişehir ilçeleri</Link></li>
            <li><Link href="/gizlilik" className="hover:text-aqua">Aydınlatma metni (KVKK)</Link></li>
          </ul>
        </nav>
      </div>
      <p className="display mt-16 select-none text-center leading-[.8] text-transparent" style={{ fontSize: "clamp(7rem, 36vw, 42rem)", WebkitTextStroke: "1.5px rgb(54 220 255 / .55)" }} aria-hidden>
        SU.
      </p>
      <div className="mx-auto mt-10 flex max-w-[1700px] flex-wrap justify-between gap-3 border-t border-ice/15 pt-6 text-sm text-ice/50">
        <p>© {new Date().getFullYear()} Eskişehir Su Tesisatı</p>
        <p className="max-w-xl">Bu site bir tesisat firması değildir; talebinizi bağımsız servis sağlayıcılara yönlendirir. Fiyat ve işçilik sorumluluğu hizmeti veren tesisatçıya aittir.</p>
      </div>
    </footer>
  );
}
