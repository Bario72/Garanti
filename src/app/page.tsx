import type { Metadata } from "next";
import Link from "next/link";
import CtaButtons from "@/components/CtaButtons";
import MapCard from "@/components/MapCard";
import Reveal from "@/components/Reveal";
import Steps from "@/components/Steps";
import TiltCard from "@/components/TiltCard";
import TopoCanvas from "@/components/TopoCanvas";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  // absolute: layout şablonu ("| Garanti Temizlik") bu başlığa ikinci kez eklenmesin
  title: { absolute: `${SITE.name} | Batman Halı ve Koltuk Yıkama` },
  description: `Batman'da halı yıkama ve koltuk yıkama hizmeti. ${SITE.addressShort}. Telefon ve WhatsApp: ${SITE.phoneDisplay}.`,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <section className="hero has-topo">
        <TopoCanvas seed={7} scale={2.2} levels={9} alpha={0.16} tone="blue" parallax />
        <div className="wrap px-5 pb-9 pt-10 md:px-8 md:pb-14 md:pt-16">
          <p className="eyebrow">Batman · Halı &amp; Koltuk Yıkama</p>
          <h1>
            Halınız ve koltuğunuz <em>ilk günkü</em> temizliğine kavuşsun
          </h1>
          <p className="lead">
            Garanti Temizlik, Batman Merkez&apos;de halı ve koltuk yıkama hizmeti verir. Tek
            dokunuşla bize ulaşın.
          </p>
          <CtaButtons />
          <p className="mt-4 text-[12px] tracking-[0.3px] text-muted">{SITE.addressShort}</p>
        </div>
      </section>

      <section className="has-topo">
        <TopoCanvas seed={14} scale={2.9} levels={10} alpha={0.1} tone="gray" />
        <div className="wrap px-5 py-8 md:px-8 md:py-12">
        <h2 className="sec-title">Hizmetlerimiz</h2>
        <div className="cards">
          <TiltCard className="card">
            <h3>Halı Yıkama</h3>
            <p>Ev ve iş yeri halılarınız için profesyonel halı yıkama hizmeti.</p>
            <Link className="mini" href="/hali-yikama">
              Detaylı bilgi →
            </Link>
          </TiltCard>
          <TiltCard className="card">
            <h3>Koltuk Yıkama</h3>
            <p>Koltuk takımlarınız için profesyonel koltuk yıkama hizmeti.</p>
            <Link className="mini" href="/koltuk-yikama">
              Detaylı bilgi →
            </Link>
          </TiltCard>
          <TiltCard className="card">
            <h3>Diğer Hizmetler</h3>
            <p>Araç koltuğu, yatak, yorgan, perde, kombi petek, klima ve ev temizliği.</p>
            <Link className="mini" href="/diger-hizmetler">
              Tüm hizmetler →
            </Link>
          </TiltCard>
        </div>
        </div>
      </section>

      <section className="has-topo">
        <TopoCanvas seed={21} scale={3.1} levels={11} alpha={0.13} tone="gray" />
        <div className="wrap px-5 py-8 md:px-8 md:py-12">
          <h2 className="sec-title">Nasıl çalışır?</h2>
          <Reveal>
            <Steps
              items={[
                { title: "Bize ulaşın", text: "Telefonla arayın ya da WhatsApp'tan yazın." },
                { title: "Birlikte planlayalım", text: "Size uygun gün ve saati birlikte belirleyelim." },
                { title: "Tertemiz sonuç", text: "Halınız ve koltuğunuz tertemiz, bakımlı ve ferah." },
              ]}
            />
          </Reveal>
        </div>
      </section>

      <section className="has-topo">
        <TopoCanvas seed={12} scale={2.1} levels={12} alpha={0.12} tone="blue" />
        <div className="wrap px-5 py-8 md:px-8 md:py-12">
        <h2 className="sec-title">Konumumuz</h2>
        <p className="sec-sub">Batman Merkez&apos;deyiz; yol tarifi tek dokunuş uzağınızda.</p>
        <Reveal>
          <MapCard />
        </Reveal>
        </div>
      </section>
    </>
  );
}
