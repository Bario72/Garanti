import type { Metadata } from "next";
import CtaButtons from "@/components/CtaButtons";
import Faq from "@/components/Faq";
import Reveal from "@/components/Reveal";
import Steps from "@/components/Steps";
import TopoCanvas from "@/components/TopoCanvas";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Halı Yıkama",
  description: `Batman'da profesyonel halı yıkama hizmeti. Halınızın türüne uygun yöntemle, hijyen önceliğiyle. Telefon ve WhatsApp: ${SITE.phoneDisplay}.`,
  alternates: { canonical: "/hali-yikama" },
};

export default function HaliYikamaPage() {
  return (
    <>
      <div className="page-head has-topo">
        <TopoCanvas seed={31} scale={2.6} levels={9} alpha={0.15} tone="gray" parallax />
        <div className="wrap px-5 pb-8 pt-9 md:px-8 md:pb-12 md:pt-14">
          <p className="eyebrow">Hizmet · Halı Yıkama</p>
          <h1>Batman&apos;da Profesyonel Halı Yıkama</h1>
          <p className="lead">
            Garanti Temizlik olarak halılarınızı özenle, hijyen önceliğiyle yıkıyoruz. Halınızın
            türüne uygun yöntemle temizlenmesi için bize ulaşmanız yeterli.
          </p>
          <CtaButtons iconSize={16} />
        </div>
      </div>

      <section className="has-topo">
        <TopoCanvas seed={36} scale={3.0} levels={9} alpha={0.09} tone="gray" />
        <div className="wrap px-5 py-8 md:px-8 md:py-12">
        <h2 className="sec-title">Halı yıkama sürecimiz</h2>
        <p className="sec-sub">Halınız şu temel adımlardan geçer:</p>
        <Reveal>
          <Steps
            items={[
              { title: "Ön inceleme", text: "Halının türü, dokusu ve leke durumu incelenir." },
              { title: "Toz alma", text: "Yıkama öncesi halının tozu derinlemesine alınır." },
              { title: "Leke ön işlemi", text: "İnatçı lekelere türüne uygun ön işlem uygulanır." },
              { title: "Yıkama ve durulama", text: "Halı, dokusuna uygun şekilde yıkanır ve durulanır." },
              { title: "Kurutma ve son kontrol", text: "Halı kurutulur, son kontrol sonrası teslime hazırlanır." },
            ]}
          />
        </Reveal>
        </div>
      </section>

      <section className="has-topo">
        <TopoCanvas seed={44} scale={3.4} levels={10} alpha={0.12} tone="blue" />
        <div className="wrap px-5 py-8 md:px-8 md:py-12">
          <h2 className="sec-title">Halı temizliği hakkında</h2>
          <Reveal>
            <ul className="tips">
              <li>
                <span><b>Düzenli bakım ömrü uzatır.</b> Haftalık süpürme, liflerde biriken tozu azaltır.</span>
              </li>
              <li>
                <span><b>Lekeye hızlı müdahale önemli.</b> Taze lekeler kuruyup yerleşmeden önce çok daha kolay çıkar.</span>
              </li>
              <li>
                <span><b>Periyodik profesyonel yıkama,</b> ev tipi temizliğin ulaşamadığı derin kirleri uzaklaştırır ve alerjenlerin azaltılmasına yardımcı olur.</span>
              </li>
              <li>
                <span><b>Doğru kurutma kritik.</b> İyi kurutulmayan halıda koku ve küf oluşabilir; profesyonel süreçte kurutma bu yüzden ayrı bir adımdır.</span>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="has-topo">
        <TopoCanvas seed={49} scale={3.0} levels={9} alpha={0.09} tone="gray" />
        <div className="wrap px-5 py-8 md:px-8 md:py-12">
        <h2 className="sec-title">Sıkça sorulan sorular</h2>
        <Reveal>
          <Faq
            items={[
              { q: "Halım kaç günde teslim edilir?", a: "Teslim süresi halının türüne ve yoğunluğa göre değişir. Net bilgi için bize telefon veya WhatsApp'tan ulaşabilirsiniz." },
              { q: "Hangi halı türlerini yıkıyorsunuz?", a: "Makine halısı, yün, shaggy ve diğer türler için bize danışabilirsiniz. Halınızın türünü ilettiğinizde sizi bilgilendirelim." },
              { q: "Fiyatlar nasıl belirleniyor?", a: "Fiyat, halının boyutuna ve türüne göre belirlenir. Güncel fiyat bilgisi için bize ulaşın." },
              { q: "İnatçı lekeler çıkar mı?", a: "Lekenin türüne ve ne kadar süredir halıda olduğuna göre sonuç değişir. Lekenin fotoğrafını WhatsApp'tan ileterek ön bilgi alabilirsiniz." },
            ]}
          />
        </Reveal>
        </div>
      </section>

      <section className="has-topo">
        <TopoCanvas seed={58} scale={2.0} levels={13} alpha={0.14} tone="gray" />
        <div className="wrap px-5 py-8 md:px-8 md:py-12">
          <h2 className="sec-title">Halınız için hemen ulaşın</h2>
          <CtaButtons iconSize={16} />
        </div>
      </section>
    </>
  );
}
