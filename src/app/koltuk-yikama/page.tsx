import type { Metadata } from "next";
import CtaButtons from "@/components/CtaButtons";
import Faq from "@/components/Faq";
import Reveal from "@/components/Reveal";
import Steps from "@/components/Steps";
import TopoCanvas from "@/components/TopoCanvas";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Koltuk Yıkama",
  description: `Batman'da profesyonel koltuk yıkama hizmeti. Kumaşına uygun yöntemle, özenli temizlik. Telefon ve WhatsApp: ${SITE.phoneDisplay}.`,
  alternates: { canonical: "/koltuk-yikama" },
};

export default function KoltukYikamaPage() {
  return (
    <>
      <div className="page-head has-topo">
        <TopoCanvas seed={67} scale={2.8} levels={8} alpha={0.15} tone="gray" parallax />
        <div className="wrap px-5 pb-8 pt-9 md:px-8 md:pb-12 md:pt-14">
          <p className="eyebrow">Hizmet · Koltuk Yıkama</p>
          <h1>Batman&apos;da Profesyonel Koltuk Yıkama</h1>
          <p className="lead">
            Koltuk takımlarınız, kumaşına uygun yöntem ve özenli bir temizlik süreciyle yenilenir.
            Detaylar için bize ulaşmanız yeterli.
          </p>
          <CtaButtons iconSize={16} />
        </div>
      </div>

      <section className="has-topo">
        <TopoCanvas seed={69} scale={3.0} levels={9} alpha={0.09} tone="gray" />
        <div className="wrap px-5 py-8 md:px-8 md:py-12">
        <h2 className="sec-title">Koltuk yıkama aşamaları</h2>
        <p className="sec-sub">Koltuğunuz şu temel adımlardan geçer:</p>
        <Reveal>
          <Steps
            items={[
              { title: "Kumaş ve leke incelemesi", text: "Kumaş türü belirlenir, lekeler ve yıpranma incelenir." },
              { title: "Toz alma", text: "Yüzey ve derz aralarındaki toz vakumla alınır." },
              { title: "Uygun ürünle uygulama", text: "Kumaşa uygun temizlik ürünü seçilir ve uygulanır." },
              { title: "Derin temizlik ve durulama", text: "Kir ve kalıntılar derinlemesine temizlenir." },
              { title: "Kurutma ve son kontrol", text: "Koltuk kullanıma hazır hâle getirilir." },
            ]}
          />
        </Reveal>
        </div>
      </section>

      <section className="has-topo">
        <TopoCanvas seed={73} scale={3.6} levels={10} alpha={0.12} tone="blue" />
        <div className="wrap px-5 py-8 md:px-8 md:py-12">
          <h2 className="sec-title">Koltuk temizliği hakkında</h2>
          <Reveal>
            <ul className="tips">
              <li>
                <span><b>Kumaş türü yöntemi belirler.</b> Her kumaş aynı ürünle temizlenmez; yanlış ürün renk ve doku bozabilir.</span>
              </li>
              <li>
                <span><b>Düzenli toz alma,</b> kumaşın derinine inen kiri azaltır ve koltuğun görünümünü korur.</span>
              </li>
              <li>
                <span><b>Lekeyi ovmak yerine</b> emici bir bezle tampon yapmak, lekenin yayılmasını önler.</span>
              </li>
              <li>
                <span><b>Profesyonel temizlik,</b> ev yöntemleriyle ulaşılamayan derin kiri ve kokuyu giderir.</span>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="has-topo">
        <TopoCanvas seed={77} scale={3.0} levels={9} alpha={0.09} tone="gray" />
        <div className="wrap px-5 py-8 md:px-8 md:py-12">
        <h2 className="sec-title">Sıkça sorulan sorular</h2>
        <Reveal>
          <Faq
            items={[
              { q: "Koltuk yıkama nasıl planlanıyor?", a: "Koltuğunuzun durumuna göre en uygun uygulama birlikte planlanır. Detay için bize telefon veya WhatsApp'tan ulaşın." },
              { q: "Kumaş zarar görür mü?", a: "Kumaş türüne uygun yöntem ve ürün seçilir. Koltuğunuzun kumaş bilgisini ilettiğinizde sizi yönlendirelim." },
              { q: "Ne kadar sürede kurur?", a: "Kuruma süresi kumaşa ve ortam koşullarına göre değişir; uygulama öncesinde bilgilendirilirsiniz." },
              { q: "Fiyat nasıl belirlenir?", a: "Fiyat, koltuğun tipine ve oturum sayısına göre belirlenir. Güncel bilgi için bize ulaşın." },
            ]}
          />
        </Reveal>
        </div>
      </section>

      <section className="has-topo">
        <TopoCanvas seed={82} scale={2.1} levels={12} alpha={0.14} tone="gray" />
        <div className="wrap px-5 py-8 md:px-8 md:py-12">
          <h2 className="sec-title">Koltuğunuz için hemen ulaşın</h2>
          <CtaButtons iconSize={16} />
        </div>
      </section>
    </>
  );
}
