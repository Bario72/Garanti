"use client";

import { SITE } from "@/lib/site";
import { trackConversion } from "@/lib/track";
import { PhoneIcon, WhatsAppIcon } from "./Icons";

/** Ara + WhatsApp buton çifti. Tıklamalar Google Ads dönüşümü olarak raporlanır. */
export default function CtaButtons({ iconSize = 18 }: { iconSize?: number }) {
  return (
    <div className="cta-row">
      <a className="btn btn-call num" href={SITE.telHref} onClick={() => trackConversion("phone_call")}>
        <PhoneIcon size={iconSize} /> {SITE.phoneDisplay}
      </a>
      <a
        className="btn btn-wa"
        href={SITE.waHref}
        rel="noopener"
        onClick={() => trackConversion("whatsapp_click")}
      >
        <WhatsAppIcon size={iconSize} /> WhatsApp&apos;tan Yaz
      </a>
    </div>
  );
}
