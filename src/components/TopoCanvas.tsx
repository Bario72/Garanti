"use client";

import { useEffect, useRef } from "react";

type Props = {
  seed?: number;
  scale?: number; // geriye uyumluluk için duruyor (kullanılmıyor)
  levels?: number; // desen yoğunluğu
  alpha?: number;
  /** "mavi" | "gri" — bölüm başına farklı ton */
  tone?: "blue" | "gray";
  /** Kaydırmada çok hafif derinlik hareketi (yalnızca fare destekli cihazlarda). */
  parallax?: boolean;
};

const TONES = { blue: "47,110,158", gray: "106,117,128" } as const;
const RED = "217,45,45";
const TEAL = "23,162,152";
const NAVY = "24,78,119";

/** Tohum bazlı rastgele sayı üreteci — her bölümde tekrarlanabilir, farklı kompozisyon. */
function mulberry(a: number) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* Temizlik temalı desen: sabun köpüğü baloncukları + su damlaları + parıltılar. */
function draw(cv: HTMLCanvasElement, seed: number, density: number, alpha: number, base: string) {
  const host = cv.parentElement;
  if (!host) return;
  const rect = host.getBoundingClientRect();
  if (rect.width < 10 || rect.height < 10) return;

  const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
  const w = rect.width + 60;
  const hg = rect.height + 60;
  cv.width = w * dpr;
  cv.height = hg * dpr;
  const ctx = cv.getContext("2d");
  if (!ctx) return;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.lineWidth = 1.4;
  ctx.lineCap = "round";

  const rnd = mulberry(seed);
  const n = Math.round(((w * hg) / 12000) * (density / 9));

  const pick = () => {
    const r = rnd();
    if (r < 0.16) return RED;
    if (r < 0.38) return TEAL;
    if (r < 0.62) return TONES.blue;
    if (r < 0.74) return NAVY;
    return base;
  };

  for (let i = 0; i < n; i++) {
    const x = rnd() * w;
    const y = rnd() * hg;
    const kind = rnd();
    // Bölüm kenarında kesik motif görünür bir çizgi gibi durur; atla
    if (y < 58 || y > hg - 58) continue;
    const c = pick();
    const a = Math.min(alpha * (1.4 + rnd() * 1.1), 0.34);
    ctx.strokeStyle = `rgba(${c},${a.toFixed(3)})`;
    ctx.fillStyle = `rgba(${c},${(a * 0.9).toFixed(3)})`;

    if (kind < 0.42) {
      // Sabun köpüğü: halka + sol üstte küçük ışık yayı
      const r1 = 5 + rnd() * 22;
      ctx.beginPath();
      ctx.arc(x, y, r1, 0, Math.PI * 2);
      ctx.stroke();
      if (rnd() < 0.6) {
        ctx.beginPath();
        ctx.arc(x, y, r1 * 0.55, Math.PI * 1.1, Math.PI * 1.6);
        ctx.stroke();
      }
    } else if (kind < 0.82) {
      // Su damlası — her zaman mavi tonlarda
      const rr = rnd();
      const cBlue = rr < 0.45 ? TONES.blue : rr < 0.8 ? TEAL : NAVY;
      ctx.strokeStyle = `rgba(${cBlue},${a.toFixed(3)})`;
      const r2 = 4 + rnd() * 8;
      ctx.beginPath();
      ctx.moveTo(x, y - 1.6 * r2);
      ctx.quadraticCurveTo(x + 1.15 * r2, y + 0.35 * r2, x, y + r2);
      ctx.quadraticCurveTo(x - 1.15 * r2, y + 0.35 * r2, x, y - 1.6 * r2);
      ctx.stroke();
    } else {
      // Parıltı: dört uçlu yıldız (tertemiz hissi)
      const s = 3.5 + rnd() * 6;
      ctx.beginPath();
      ctx.moveTo(x, y - s);
      ctx.quadraticCurveTo(x, y, x + s, y);
      ctx.quadraticCurveTo(x, y, x, y + s);
      ctx.quadraticCurveTo(x, y, x - s, y);
      ctx.quadraticCurveTo(x, y, x, y - s);
      ctx.fill();
    }
  }
}

export default function TopoCanvas({
  seed = 1,
  levels = 9,
  alpha = 0.12,
  tone = "blue",
  parallax = false,
}: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const col = TONES[tone];

    const render = () => draw(cv, seed, levels, alpha, col);
    render();

    let rt: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(rt);
      rt = setTimeout(render, 180);
    };
    window.addEventListener("resize", onResize);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    let onScroll: (() => void) | undefined;

    if (parallax && !reduced && fine) {
      let ticking = false;
      onScroll = () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
          const host = cv.parentElement;
          if (host) {
            const r = host.getBoundingClientRect();
            const off = (r.top + r.height / 2 - window.innerHeight / 2) * 0.04;
            cv.style.transform = `translateY(${off.toFixed(1)}px)`;
          }
          ticking = false;
        });
      };
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    return () => {
      clearTimeout(rt);
      window.removeEventListener("resize", onResize);
      if (onScroll) window.removeEventListener("scroll", onScroll);
    };
  }, [seed, levels, alpha, tone, parallax]);

  return <canvas ref={ref} className="topo" aria-hidden="true" />;
}
