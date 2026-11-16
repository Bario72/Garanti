"use client";

import Image from "next/image";
import { waHrefFor } from "@/lib/site";
import { trackConversion } from "@/lib/track";
import TiltCard from "./TiltCard";

type Props = { slug: string; name: string; text: string };

/** Eşit oranlı (4:3) görselli hizmet kartı. */
export default function ServiceCard({ slug, name, text }: Props) {
  return (
    <TiltCard className="svc">
      <div className="svc-img">
        <Image
          src={`/img/hizmetler/${slug}.jpg`}
          alt={name}
          width={800}
          height={600}
          sizes="(min-width: 1024px) 320px, (min-width: 600px) 50vw, 100vw"
        />
      </div>
      <div className="svc-body">
        <h3>{name}</h3>
        <p>{text}</p>
        <a
          className="svc-cta"
          href={waHrefFor(name)}
          rel="noopener"
          onClick={() => trackConversion("whatsapp_click")}
        >
          WhatsApp&apos;tan bilgi al →
        </a>
      </div>
    </TiltCard>
  );
}
