"use client";
import { useEffect, useState } from "react";
// import { externalProps, telLink, waLink } from "@/lib/contact"; // telefon gizlendi
import { externalProps, waLink } from "@/lib/contact";
import { TrackLink } from "@/components/TrackLink";
// import { PhoneIcon } from "@/components/Cta"; // telefon gizlendi
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function StickyCta() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const f = () => setShow(window.scrollY > 500);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-[80] grid grid-cols-1 gap-2 p-3 pb-[max(.75rem,env(safe-area-inset-bottom))] transition-transform duration-500 md:hidden ${show ? "translate-y-0" : "translate-y-full"}`}
    >
      {/* Telefon ile arama gizlendi
      <TrackLink event="phone_click" href={telLink()} className="flex items-center justify-center gap-2 rounded-full bg-aqua py-4 text-lg font-semibold text-ink"><PhoneIcon /> Ara</TrackLink>
      */}
      <TrackLink
        event="whatsapp_click"
        href={waLink()}
        {...externalProps}
        className="flex items-center justify-center gap-2 rounded-full bg-ice py-4 text-lg font-semibold text-ink"
      >
        <WhatsAppIcon size={20} /> WhatsApp
      </TrackLink>
    </div>
  );
}
