// Tüm iletişim bilgileri TEK yerden okunur (.env.local / Vercel ortam değişkenleri).
//   NEXT_PUBLIC_PHONE=05XXXXXXXXX   NEXT_PUBLIC_WHATSAPP=(boşsa telefon)   NEXT_PUBLIC_SITE_URL=https://alanadiniz.com

/** Türkiye numarasını uluslararası rakam biçimine (905XXXXXXXXX) çevirir; geçersizse "" döner. */
export function normalizeTR(input: string | undefined): string {
  const d = (input ?? "").replace(/\D/g, "");
  if (/^90[2-5]\d{9}$/.test(d)) return d;
  if (/^0[2-5]\d{9}$/.test(d)) return `90${d.slice(1)}`;
  if (/^[2-5]\d{9}$/.test(d)) return `90${d}`;
  return "";
}

const phoneDigits = normalizeTR(process.env.NEXT_PUBLIC_PHONE);
const waDigits = normalizeTR(process.env.NEXT_PUBLIC_WHATSAPP) || phoneDigits;

export const SITE = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/+$/, "");

export const PHONE_DISPLAY = phoneDigits
  ? `0${phoneDigits.slice(2, 5)} ${phoneDigits.slice(5, 8)} ${phoneDigits.slice(8, 10)} ${phoneDigits.slice(10, 12)}`
  : "";

export const DEFAULT_WA_MESSAGE = "Merhaba, Eskişehir'de su tesisatı hizmeti almak istiyorum.";

export const telLink = () => `tel:+${phoneDigits}`;
export const waMessage = (text: string) => `https://wa.me/${waDigits}?text=${encodeURIComponent(text)}`;
export const waLink = (topic?: string) =>
  waMessage(topic ? `${DEFAULT_WA_MESSAGE}\nKonu: ${topic}` : DEFAULT_WA_MESSAGE);

export const externalProps = { target: "_blank", rel: "noopener noreferrer" } as const;

export type ProblemOption = { value: string; label: string };
export const problemOptions: ProblemOption[] = [
  { value: "kacak", label: "Su kaçağı / duvardan su sızıyor" },
  { value: "gider", label: "Gider tıkandı / geç boşalıyor" },
  { value: "musluk", label: "Musluk veya batarya damlatıyor" },
  { value: "klozet", label: "Klozet / rezervuar sorunu" },
  { value: "basinc", label: "Su basıncı düşük" },
  { value: "boru", label: "Boru patladı (acil)" },
  { value: "hidrofor", label: "Hidrofor sorunu" },
  { value: "yenileme", label: "Tesisat yenileme / banyo-mutfak" },
  { value: "diger", label: "Diğer" },
];

export const districts = [
  "Tepebaşı", "Odunpazarı", "Alpu", "Beylikova", "Çifteler", "Günyüzü", "Han",
  "İnönü", "Mahmudiye", "Mihalgazi", "Mihalıççık", "Sarıcakaya", "Seyitgazi", "Sivrihisar",
];
