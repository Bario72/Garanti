"use client";

import Link from "next/link";
import { SITE } from "@/lib/site";
import { trackConversion } from "@/lib/track";
import { PhoneIcon } from "./Icons";

/** Tüm sayfalarda ortak üst bar: ortalanmış kırmızı marka + sağda arama butonu. */
export default function Header() {
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <Link className="brand" href="/">
          <b>{SITE.name}</b>
          <span>Halı &amp; Koltuk Yıkama</span>
        </Link>
        <a
          className="call-pill"
          href={SITE.telHref}
          aria-label={`Hemen ara: ${SITE.phoneDisplay}`}
          onClick={() => trackConversion("phone_call")}
        >
          <PhoneIcon size={20} />
        </a>
      </div>
    </header>
  );
}
