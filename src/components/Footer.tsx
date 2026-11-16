import Link from "next/link";
import { ALL_PAGES, SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <b>{SITE.name}</b>
        {SITE.slogan}
        <nav>
          {ALL_PAGES.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <span className="block">{SITE.addressShort}</span>
        <span className="num">Tel &amp; WhatsApp: {SITE.phoneDisplay}</span>
      </div>
    </footer>
  );
}
