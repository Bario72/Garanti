import type { Metadata } from "next";
import CtaButtons from "@/components/CtaButtons";
import ServiceCard from "@/components/ServiceCard";
import TopoCanvas from "@/components/TopoCanvas";
import { OTHER_SERVICES, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Diğer Hizmetler",
  description: `Batman'da araç koltuğu, yatak, battaniye ve yorgan yıkama, zebra ve stor perde yıkama, kombi petek, klima ve ev temizliği. Telefon ve WhatsApp: ${SITE.phoneDisplay}.`,
  alternates: { canonical: "/diger-hizmetler" },
};

export default function DigerHizmetlerPage() {
  return (
    <>
      <div className="page-head has-topo">
        <TopoCanvas seed={121} levels={9} alpha={0.15} tone="gray" parallax />
        <div className="wrap px-5 pb-8 pt-9 md:px-8 md:pb-12 md:pt-14">
          <p className="eyebrow">Hizmetler · Diğer Hizmetler</p>
          <h1>Diğer Hizmetlerimiz</h1>
          <p className="lead">
            Halı ve koltuk yıkamanın yanı sıra evinizin ve aracınızın temizliği için de yanınızdayız.
            İhtiyacınız olan hizmeti seçin, bize ulaşın.
          </p>
          <CtaButtons iconSize={16} />
        </div>
      </div>

      <section className="has-topo">
        <TopoCanvas seed={127} levels={9} alpha={0.13} tone="gray" />
        <div className="wrap px-5 py-8 md:px-8 md:py-12">
          <h2 className="sec-title">Hizmet listesi</h2>
          <div className="svc-grid">
            {OTHER_SERVICES.map((s) => (
              <ServiceCard key={s.slug} slug={s.slug} name={s.name} text={s.text} />
            ))}
          </div>
        </div>
      </section>

      <section className="has-topo">
        <TopoCanvas seed={133} levels={12} alpha={0.14} tone="blue" />
        <div className="wrap px-5 py-8 md:px-8 md:py-12">
          <h2 className="sec-title">Hangi hizmete ihtiyacınız var?</h2>
          <p className="sec-sub">Arayın ya da WhatsApp&apos;tan yazın; size bilgi verelim.</p>
          <CtaButtons iconSize={16} />
        </div>
      </section>
    </>
  );
}
