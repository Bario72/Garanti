"use client";

import { SITE } from "@/lib/site";
import { trackConversion } from "@/lib/track";
import { PhoneIcon, WhatsAppIcon } from "./Icons";

/** Her sayfada sabit duran WhatsApp + Ara butonları. */
export default function FloatingButtons() {
  return (
    <div className="fab">
      <a
        className="f-wa"
        href={SITE.waHref}
        rel="noopener"
        aria-label="WhatsApp ile yazın"
        onClick={() => trackConversion("whatsapp_click")}
      >
        <WhatsAppIcon size={26} />
      </a>
      <a
        className="f-call"
        href={SITE.telHref}
        aria-label="Telefonla arayın"
        onClick={() => trackConversion("phone_call")}
      >
        <PhoneIcon size={24} />
      </a>
    </div>
  );
}
