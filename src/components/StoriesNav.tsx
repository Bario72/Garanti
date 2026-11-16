"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/site";

/** Instagram hikâyesi tarzı, yatay kaydırılabilir fotoğraflı sayfa navigasyonu. */
export default function StoriesNav() {
  const pathname = usePathname();

  return (
    <nav className="stories" aria-label="Sayfalar">
      <div className="stories-track">
        {NAV_ITEMS.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              className="story"
              href={item.href}
              aria-current={active ? "page" : undefined}
            >
              <span className="story-ring">
                <Image src={item.img} alt={item.alt} width={106} height={106} />
              </span>
              <span className="story-label">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
