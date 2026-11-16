# Garanti Temizlik — Kurumsal Web Sitesi

Batman'da halı ve koltuk yıkama hizmeti veren **Garanti Temizlik** için Next.js (App Router) + TypeScript + Tailwind CSS ile geliştirilmiş, mobil öncelikli ve dönüşüm odaklı web sitesi.

## Gereksinimler

- Node.js 18.18 veya üzeri (öneri: 20 LTS) — https://nodejs.org
- npm (Node ile birlikte gelir)

## Kurulum

```bash
# 1) Proje klasörüne girin
cd garanti-temizlik

# 2) Bağımlılıkları yükleyin
npm install

# 3) Geliştirme sunucusunu başlatın
npm run dev
```

Tarayıcıda http://localhost:3000 adresini açın. Sayfalar:

| Yol | Sayfa |
|---|---|
| `/` | Anasayfa |
| `/hali-yikama` | Halı Yıkama |
| `/koltuk-yikama` | Koltuk Yıkama |
| `/diger-hizmetler` | Diğer Hizmetler (7 hizmet kartı) |
| `/hakkimizda` | Hakkımızda (footer'dan erişilir) |
| `/iletisim` | İletişim (canlı Google Haritalar + yol tarifi) |

## Üretim derlemesi

```bash
npm run build   # üretim derlemesi
npm run start   # derlenmiş siteyi çalıştırır
```

## Ortam değişkenleri

`.env.example` dosyasını `.env.local` olarak kopyalayın ve doldurun:

```bash
cp .env.example .env.local
```

| Değişken | Açıklama |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Sitenin yayındaki tam adresi (ör. `https://www.alanadiniz.com`). Canonical, sitemap ve robots bunu kullanır. |
| `NEXT_PUBLIC_MAPS_EMBED_URL` | Opsiyonel. Boşsa harita, işletme adresi üzerinden otomatik gömülür. Google Business Profile'daki birebir konumu kullanmak isterseniz: Google Haritalar'da işletmeyi açın → Paylaş → "Harita yerleştirme" → `src="..."` içindeki URL'yi buraya yapıştırın. |
| `NEXT_PUBLIC_GADS_ID` | Google Ads hesap etiketi (ör. `AW-XXXXXXXXXX`). Boşsa hiçbir takip kodu yüklenmez. |
| `NEXT_PUBLIC_GADS_LABEL_PHONE` | Telefon tıklaması dönüşüm etiketi. |
| `NEXT_PUBLIC_GADS_LABEL_WHATSAPP` | WhatsApp tıklaması dönüşüm etiketi. |

### Google Ads dönüşüm takibi nasıl çalışır?

Tüm telefon (`tel:`) ve WhatsApp (`wa.me`) bağlantıları `src/lib/track.ts` üzerinden geçer.
`NEXT_PUBLIC_GADS_ID` ve ilgili etiket doluysa tıklamada `gtag('event','conversion',...)` gönderilir;
boşsa hiçbir şey yüklenmez ve bağlantılar normal çalışır. Google Ads panelinden "Telefon araması"
ve "WhatsApp" dönüşümlerini oluşturup kimlikleri `.env.local`'a yazmanız yeterlidir — kodda değişiklik gerekmez.

## Proje yapısı

```
src/
├── app/                  # Sayfalar (App Router)
│   ├── layout.tsx        # Ortak iskelet: header, hikâye navigasyonu, footer, yüzen butonlar, JSON-LD
│   ├── page.tsx          # Anasayfa
│   ├── hali-yikama/      # /hali-yikama
│   ├── koltuk-yikama/    # /koltuk-yikama
│   ├── hakkimizda/       # /hakkimizda
│   ├── iletisim/         # /iletisim
│   ├── sitemap.ts        # /sitemap.xml
│   ├── robots.ts         # /robots.txt
│   └── globals.css       # Tasarım sistemi (Taslak 3 kimliği)
├── components/           # Tekrar kullanılabilir bileşenler
│   ├── StoriesNav.tsx    # Instagram story tarzı fotoğraflı navigasyon (aktif sayfa işaretli)
│   ├── TopoCanvas.tsx    # Siteye özgü topoğrafik desen üretici (SSR uyumlu)
│   ├── CtaButtons.tsx    # Ara + WhatsApp (dönüşüm takipli)
│   ├── FloatingButtons.tsx, Header.tsx, Footer.tsx, MapCard.tsx,
│   ├── Reveal.tsx, TiltCard.tsx, Steps.tsx, Faq.tsx, Icons.tsx
└── lib/
    ├── site.ts           # İşletme bilgileri — telefon/adres TEK buradan değişir
    └── track.ts          # Google Ads dönüşüm yardımcı fonksiyonu
```

## İçerik güncelleme

- **Telefon, adres, WhatsApp:** yalnızca `src/lib/site.ts` içinde değiştirin; tüm site güncellenir.
- **Navigasyon fotoğrafları:** `public/img/` içindeki dosyaları aynı adlarla değiştirin (kare, en az 300×300px önerilir). "İletişim" dairesinin görseli geçicidir; işletmeye ait bir fotoğrafla değiştirilmesi önerilir.
- **Logo:** Logo netleştiğinde `Header.tsx` içindeki yazı markası logoyla değiştirilebilir ve `globals.css` içindeki `:root` renk değerleri logoya göre güncellenebilir.

## Notlar

- Animasyonlar `prefers-reduced-motion` tercihine uyar; tilt ve parallax yalnızca fare destekli cihazlarda çalışır.
- Topoğrafik desenler görsel dosya değildir; her bölümde farklı tohum/yoğunlukla tarayıcıda çizilir.
- Sitede yalnızca doğrulanmış işletme bilgileri yer alır; tecrübe yılı, müşteri sayısı gibi bilgiler doğrulandıktan sonra eklenmelidir.
