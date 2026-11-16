/** İşletme sabitleri — tek kaynaktan yönetilir. */
export const SITE = {
  name: "Garanti Temizlik",
  slogan: "Batman Halı ve Koltuk Yıkama",
  phoneDisplay: "0543 219 77 72",
  phoneE164: "+905432197772",
  telHref: "tel:+905432197772",
  waHref: "https://wa.me/905432197772",
  address: "Kültür Mahallesi, 2605 Sokak, No: 45/B, Batman Merkez, Batman, Türkiye",
  addressShort: "Kültür Mah. 2605 Sok. No: 45/B, Batman Merkez",
  city: "Batman",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;

/** Google Haritalar'da adrese yol tarifi açar (koordinat değil, adres kullanılır). */
export const MAPS_DIR_URL =
  "https://www.google.com/maps/dir/?api=1&destination=" +
  encodeURIComponent(SITE.address);

/** İletişim sayfasındaki gömülü harita. Gerekirse .env ile özelleştirilebilir. */
export const MAPS_EMBED_URL =
  process.env.NEXT_PUBLIC_MAPS_EMBED_URL ||
  "https://www.google.com/maps?q=" + encodeURIComponent(SITE.address) + "&output=embed";

/** Üst hikâye navigasyonu (Hakkımızda ve İletişim footer'dan ve butonlardan erişilir). */
export const NAV_ITEMS = [
  { href: "/", img: "/img/anasayfa.jpg", label: "Anasayfa", alt: "Garanti Temizlik anasayfa" },
  { href: "/hali-yikama", img: "/img/hali.jpg", label: "Halı Yıkama", alt: "Halı yıkama" },
  { href: "/koltuk-yikama", img: "/img/koltuk.jpg", label: "Koltuk Yıkama", alt: "Koltuk yıkama" },
  { href: "/diger-hizmetler", img: "/img/diger.jpg", label: "Diğer Hizmetler", alt: "Diğer hizmetler" },
] as const;

/** Sitedeki tüm sayfalar — footer ve sitemap bunları kullanır. */
export const ALL_PAGES = [
  { href: "/", label: "Anasayfa" },
  { href: "/hali-yikama", label: "Halı Yıkama" },
  { href: "/koltuk-yikama", label: "Koltuk Yıkama" },
  { href: "/diger-hizmetler", label: "Diğer Hizmetler" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
] as const;

/** Diğer Hizmetler sayfasındaki hizmetler (görseller: public/img/hizmetler, 4:3, 800×600). */
export const OTHER_SERVICES = [
  { slug: "arac-koltugu", name: "Araç Koltuğu Yıkama", text: "Araç koltuklarınız ve döşemeleriniz, kumaş türüne uygun yöntemle temizlenir." },
  { slug: "yatak", name: "Yatak Yıkama", text: "Yatağınızın yüzeyi toz, leke ve kokulara karşı derinlemesine temizlenir." },
  { slug: "battaniye-yorgan", name: "Battaniye & Yorgan Yıkama", text: "Battaniye ve yorganlarınız, dokusuna uygun şekilde yıkanır ve kurutulur." },
  { slug: "zebra-stor-perde", name: "Zebra & Stor Perde Yıkama", text: "Zebra ve stor perdeleriniz, mekanizmasına özen gösterilerek temizlenir." },
  { slug: "kombi-petek", name: "Kombi Petek Temizliği", text: "Peteklerde biriken tortu ve kir, uygun ekipmanla temizlenir." },
  { slug: "klima", name: "Klima Temizliği", text: "Klimanızın filtreleri ve iç ünitesi temizlenerek bakımı yapılır." },
  { slug: "ev-temizligi", name: "Ev Temizliği", text: "Eviniz, ihtiyacınıza göre planlanan detaylı bir temizlikle ferahlar." },
] as const;

/** Hizmete özel, önceden doldurulmuş WhatsApp mesajı. */
export function waHrefFor(serviceName: string): string {
  return `${SITE.waHref}?text=${encodeURIComponent(`Merhaba, ${serviceName} hakkında bilgi almak istiyorum.`)}`;
}
