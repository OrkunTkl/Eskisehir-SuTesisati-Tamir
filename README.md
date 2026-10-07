# Eskişehir Su Tesisatı

Next.js 15 (App Router) + Framer Motion + Three.js + Lenis + Tailwind 4.

## Çalıştırma
```bash
npm install
cp .env.example .env.local   # telefon ve site adresini doldurun
npm run dev
```
Production: `npm run build && npm start` (Vercel'de doğrudan deploy edilir).

## Ortam değişkenleri
`NEXT_PUBLIC_PHONE`, `NEXT_PUBLIC_SITE_URL` zorunludur (Vercel production build'inde eksikse build durur, bkz. `scripts/check-env.mjs`). Diğerleri isteğe bağlıdır.

## Yapı
- `components/LiquidCanvas.tsx`: Three.js ile ray-march edilen akışkan "su damlası" sahnesi (fare etkileşimli, ekran dışında durur, düşük FPS'te çözünürlüğü otomatik düşürür, WebGL yoksa CSS yedeği).
- `components/ServiceRail.tsx`: scroll ile yatay kayan hizmet şeridi. `LeakCalc.tsx`: su kaçağı hesaplayıcı.
- `data/`: hizmetler, arıza rehberleri ve SEO metinleri. Yeni sayfa eklemek için buraya kayıt eklemek yeterli (sitemap otomatik).
- Form sunucuya veri göndermez; hazır WhatsApp mesajı oluşturur (KVKK uyumlu aracı model).
