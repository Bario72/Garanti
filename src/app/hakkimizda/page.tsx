import type { Metadata } from "next";
import CtaButtons from "@/components/CtaButtons";
import TiltCard from "@/components/TiltCard";
import TopoCanvas from "@/components/TopoCanvas";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: `${SITE.name}, Batman Merkez'de halı ve koltuk yıkama hizmeti veren yerel bir işletmedir. Hijyen, özen, zamanında teslim ve açık iletişim.`,
  alternates: { canonical: "/hakkimizda" },
};

export default function HakkimizdaPage() {
  return (
    <>
      <div className="page-head has-topo">
        <TopoCanvas seed={91} scale={2.3} levels={10} alpha={0.15} tone="blue" parallax />
        <div className="wrap px-5 pb-8 pt-9 md:px-8 md:pb-12 md:pt-14">
          <p className="eyebrow">Kurumsal · Hakkımızda</p>
          <h1>{SITE.name}</h1>
          <p className="lead">
            Batman Merkez&apos;de halı ve koltuk yıkamanın yanı sıra çeşitli temizlik hizmetleri veren yerel bir işletmeyiz. İşimizi
            tek bir ölçüyle yapıyoruz: teslim ettiğimiz her iş, gönül rahatlığıyla
            kullanılacak temizlikte olmalı.
          </p>
        </div>
      </div>

      <section className="has-topo">
        <TopoCanvas seed={94} scale={2.7} levels={10} alpha={0.1} tone="gray" />
        <div className="wrap px-5 py-8 md:px-8 md:py-12">
        <h2 className="sec-title">Hizmet anlayışımız</h2>
        <div className="values">
          <TiltCard className="value">
            <h4>Hijyen</h4>
            <p>Temizlikte önceliğimiz görünür parlaklık değil, gerçek hijyendir.</p>
          </TiltCard>
          <TiltCard className="value">
            <h4>Özen</h4>
            <p>Her halı ve koltuğa, kendi evimizin eşyası gibi davranırız.</p>
          </TiltCard>
          <TiltCard className="value">
            <h4>Zamanında teslim</h4>
            <p>Birlikte planladığımız güne sadık kalmayı ilke ediniriz.</p>
          </TiltCard>
          <TiltCard className="value">
            <h4>Açık iletişim</h4>
            <p>Süreç ve fiyat hakkında her soruya net cevap veririz.</p>
          </TiltCard>
        </div>
        </div>
      </section>

      <section className="has-topo">
        <TopoCanvas seed={99} scale={3.0} levels={11} alpha={0.13} tone="gray" />
        <div className="wrap px-5 py-8 md:px-8 md:py-12">
          <h2 className="sec-title">Bizimle tanışın</h2>
          <p className="sec-sub">Sorularınız için bir telefon kadar yakınız.</p>
          <CtaButtons iconSize={16} />
        </div>
      </section>
    </>
  );
}
