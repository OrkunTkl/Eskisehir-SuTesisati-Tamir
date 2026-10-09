"use client";
import { externalProps, waLink } from "@/lib/contact";
import { TrackLink } from "@/components/TrackLink";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

// Sayfanın sağ altında sabit duran WhatsApp simgesi: tıklayınca hazır mesajla WhatsApp açılır.
// Mobilde alttaki StickyCta çubuğunun üstünde kalması için biraz yukarıda durur.
export function FloatingWhatsApp() {
  return (
    <TrackLink
      event="whatsapp_click"
      href={waLink()}
      {...externalProps}
      aria-label="WhatsApp ile mesaj yaz"
      data-cursor="Yaz"
      className="fixed bottom-24 right-4 z-[79] flex h-14 w-14 items-center justify-center rounded-full text-white shadow-2xl transition-transform duration-300 hover:scale-110 md:bottom-6 md:right-6"
      style={{ background: "#25D366" }}
    >
      <WhatsAppIcon size={30} />
    </TrackLink>
  );
}
