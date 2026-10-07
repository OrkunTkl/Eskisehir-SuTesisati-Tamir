import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyCta } from "@/components/StickyCta";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Cursor } from "@/components/Cursor";
import { Loader } from "@/components/Loader";
import { PipeProgress } from "@/components/PipeProgress";
import { JsonLd } from "@/components/JsonLd";
import { organization, website, SITE_NAME } from "@/lib/seo";
import { SITE } from "@/lib/contact";

export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover", themeColor: "#04100f" };
export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { default: "Eskişehir Su Tesisatı", template: "%s" },
  applicationName: SITE_NAME,
  robots: { index: true, follow: true },
  verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION } : undefined,
};

const seenScript = `try{if(sessionStorage.getItem("sv"))document.documentElement.classList.add("seen")}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: seenScript }} /></head>
      <body className="grain">
        <a href="#main" className="skip">İçeriğe geç</a>
        <JsonLd data={organization} />
        <JsonLd data={website} />
        <SmoothScroll />
        <Loader />
        <Cursor />
        <PipeProgress />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <StickyCta />
      </body>
    </html>
  );
}
