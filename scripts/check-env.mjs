// Production build öncesi iletişim ve site bilgilerinin gerçek olduğunu doğrular.
// Yerel build'de yalnızca uyarır; Vercel production'da (veya STRICT_ENV=1) hata verip build'i durdurur.
import { existsSync, readFileSync } from "node:fs";

const env = { ...process.env };
for (const f of [".env", ".env.production", ".env.local"]) {
  if (!existsSync(f)) continue;
  for (const line of readFileSync(f, "utf8").split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
    if (m && env[m[1]] === undefined) env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
}

const validTR = (v = "") => /^(90|0)?[2-5]\d{9}$/.test(v.replace(/\D/g, ""));
const problems = [];
if (!validTR(env.NEXT_PUBLIC_PHONE)) problems.push("NEXT_PUBLIC_PHONE eksik veya geçersiz (örn. 05XXXXXXXXX)");
if (env.NEXT_PUBLIC_WHATSAPP && !validTR(env.NEXT_PUBLIC_WHATSAPP)) problems.push("NEXT_PUBLIC_WHATSAPP geçersiz");
const site = env.NEXT_PUBLIC_SITE_URL ?? "";
if (!/^https:\/\/[^/]+/.test(site) || /example\.|localhost/.test(site))
  problems.push("NEXT_PUBLIC_SITE_URL eksik veya geçersiz (örn. https://alanadiniz.com)");

if (problems.length) {
  const strict = env.VERCEL_ENV === "production" || env.STRICT_ENV === "1";
  console.error(`\n${strict ? "HATA" : "UYARI"}: production için ortam değişkenleri tamamlanmamış:\n - ${problems.join("\n - ")}\n`);
  if (strict) process.exit(1);
}
