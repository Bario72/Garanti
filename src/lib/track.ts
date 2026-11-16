/**
 * Google Ads dönüşüm takibi.
 * .env'de NEXT_PUBLIC_GADS_ID ve ilgili etiketler doluysa gtag'e dönüşüm bildirir;
 * boşsa sessizce hiçbir şey yapmaz. Bağlantının çalışmasını asla engellemez.
 */
type ConversionAction = "phone_call" | "whatsapp_click";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackConversion(action: ConversionAction): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  const id = process.env.NEXT_PUBLIC_GADS_ID;
  const label =
    action === "phone_call"
      ? process.env.NEXT_PUBLIC_GADS_LABEL_PHONE
      : process.env.NEXT_PUBLIC_GADS_LABEL_WHATSAPP;

  if (!id || !label) return;

  window.gtag("event", "conversion", { send_to: `${id}/${label}` });
}
