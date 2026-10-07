import Link from "next/link";
import { Liquid } from "@/components/Liquid";

export const metadata = { title: "Sayfa bulunamadı | Eskişehir Su Tesisatı", robots: { index: false, follow: true } };

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden px-[var(--gut)]">
      <Liquid className="absolute inset-0 -z-10" calm />
      <p className="mono text-aqua">Hata 404</p>
      <h1 className="display d-xxl mt-4">Burada<br /><span className="serif text-aqua">su yok.</span></h1>
      <p className="lead mt-8 max-w-md text-ice/80">Aradığınız sayfa taşınmış ya da hiç var olmamış olabilir.</p>
      <div className="mt-8"><Link href="/" className="btn btn-aqua">Ana sayfaya dön</Link></div>
    </section>
  );
}
