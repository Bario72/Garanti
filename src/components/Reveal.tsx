"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Kaydırmada yumuşak görünme. İçerik sunucuda görünür olarak render edilir;
 * gizleme yalnızca tarayıcıda, animasyon tercihi açıksa uygulanır (CLS/SEO dostu).
 */
export default function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    // Zaten görünüyorsa gizleyip animasyonla açmak titreme yaratır; atla.
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight * 0.9) return;

    el.classList.add("pre");
    const io = new IntersectionObserver(
      (entries) => {
        for (const en of entries) {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`.trim()}>
      {children}
    </div>
  );
}
