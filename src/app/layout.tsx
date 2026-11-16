import type { Metadata } from "next";
import { Archivo, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header";
import StoriesNav from "@/components/StoriesNav";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { SITE } from "@/lib/site";
import "./globals.css";

const display = Archivo({
  subsets: ["latin", "latin-ext"],
  weight: ["700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | ${SITE.slogan}`,
    template: `%s | ${SITE.name}`,
  },
  description: `${SITE.name}, Batman Merkez'de halı ve koltuk yıkama başta olmak üzere temizlik hizmetleri verir. Telefon ve WhatsApp: ${SITE.phoneDisplay}.`,
  openGraph: {
    siteName: SITE.name,
    locale: "tr_TR",
    type: "website",
  },
};

/** LocalBusiness yapılandırılmış verisi — yalnızca doğrulanmış işletme bilgileri. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE.name,
  description: "Batman'da halı ve koltuk yıkama ile çeşitli ev ve araç temizliği hizmetleri",
  areaServed: { "@type": "City", name: "Batman" },
  telephone: SITE.phoneE164,
  url: SITE.url,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kültür Mahallesi, 2605 Sokak, No: 45/B",
    addressLocality: "Batman Merkez",
    addressRegion: "Batman",
    addressCountry: "TR",
  },
};

const GADS_ID = process.env.NEXT_PUBLIC_GADS_ID;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${display.variable} ${body.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {GADS_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GADS_ID}`}
              strategy="afterInteractive"
            />
            <Script id="gads-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GADS_ID}');`}
            </Script>
          </>
        ) : null}
        <Header />
        <StoriesNav />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
