// import { externalProps, telLink, waLink } from "@/lib/contact"; // telefon gizlendi
import { externalProps, waLink } from "@/lib/contact";
import { TrackLink } from "@/components/TrackLink";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function PhoneIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
    </svg>
  );
}

export function Cta({
  problem,
  tone = "dark",
}: {
  problem?: string;
  tone?: "dark" | "light";
}) {
  const call = tone === "dark" ? "btn btn-aqua" : "btn btn-ink";
  // const wa = tone === "dark" ? "btn btn-line" : "btn btn-line";
  return (
    <div className="flex flex-wrap gap-3">
      {/* Telefon ile arama gizlendi
      <TrackLink event="phone_click" href={telLink()} className={call} data-cursor="Ara">
        <PhoneIcon /> Hemen ara
      </TrackLink>
      */}
      <TrackLink
        event="whatsapp_click"
        params={{ problem }}
        href={waLink(problem)}
        {...externalProps}
        className={call}
        data-cursor="Yaz"
      >
        <WhatsAppIcon size={20} /> WhatsApp&apos;tan yaz
      </TrackLink>
    </div>
  );
}
