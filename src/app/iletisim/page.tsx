import type { Metadata } from "next";
import CtaButtons from "@/components/CtaButtons";
import MapCard from "@/components/MapCard";
import Reveal from "@/components/Reveal";
import TopoCanvas from "@/components/TopoCanvas";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "İletişim",
  description: `${SITE.name} iletişim: ${SITE.phoneDisplay} (telefon ve WhatsApp). Adres: ${SITE.addressShort}.`,
  alternates: { canonical: "/iletisim" },
};

export default function IletisimPage() {
  return (
    <>
      <div className="page-head has-topo">
        <TopoCanvas seed={104} scale={2.5} levels={9} alpha={0.15} tone="gray" parallax />
        <div className="wrap px-5 pb-8 pt-9 md:px-8 md:pb-12 md:pt-14">
          <p className="eyebrow">Kurumsal · İletişim</p>
          <h1>Bize Ulaşın</h1>
          <p className="lead">
            Telefonla arayın ya da WhatsApp&apos;tan yazın; en kısa sürede dönüş yapalım.
          </p>
          <CtaButtons iconSize={16} />
        </div>
      </div>

      <section className="has-topo">
        <TopoCanvas seed={108} scale={2.8} levels={9} alpha={0.09} tone="gray" />
        <div className="wrap px-5 py-8 md:px-8 md:py-12">
        <h2 className="sec-title">İletişim bilgileri</h2>
        <Reveal>
          <div className="c-card">
            <div className="c-row">
              <div className="k">Telefon</div>
              <div className="v num">
                <a href={SITE.telHref}>{SITE.phoneDisplay}</a>
              </div>
            </div>
            <div className="c-row">
              <div className="k">WhatsApp</div>
              <div className="v num">
                <a href={SITE.waHref} rel="noopener">
                  {SITE.phoneDisplay}
                </a>
              </div>
            </div>
            <div className="c-row">
              <div className="k">Adres</div>
              <div className="v">
                Kültür Mah. 2605 Sok. No: 45/B
                <br />
                Batman Merkez, Batman
              </div>
            </div>
          </div>
        </Reveal>
        </div>
      </section>

      <section className="has-topo">
        <TopoCanvas seed={115} scale={2.2} levels={12} alpha={0.12} tone="blue" />
        <div className="wrap px-5 py-8 md:px-8 md:py-12">
          <h2 className="sec-title">Konumumuz</h2>
          <p className="sec-sub">Haritada görüntüleyin, tek dokunuşla yol tarifi alın.</p>
          <Reveal>
            <MapCard />
          </Reveal>
        </div>
      </section>
    </>
  );
}
