"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Leaf } from "lucide-react";
import { gsap } from "gsap";
import { categories, displayPrice, money, products, type Product } from "@/data/products";
import styles from "./orbit.module.css";

const accents = ["#b5c89c", "#e5c58e", "#dcafa2", "#adc5af"];
// The tapered band follows the same circular path as the original DishOrbitCarousel.
export function arcPath(a0: number, a1: number, cx: number, cy: number, r: number, w: number, steps = 48): string {
  const outer: string[] = []
  const inner: string[] = []
  for (let i = 0; i <= steps; i++) {
    const t = i / steps
    const a = ((a0 + (a1 - a0) * t) * Math.PI) / 180
    const h = (w / 2) * Math.pow(Math.sin(Math.PI * t), 0.45)
    const c = Math.cos(a)
    const s = Math.sin(a)
    outer.push((cx + c * (r + h)).toFixed(1) + " " + (cy + s * (r + h)).toFixed(1))
    inner.push((cx + c * (r - h)).toFixed(1) + " " + (cy + s * (r - h)).toFixed(1))
  }
  return "M" + outer.join("L") + "L" + inner.reverse().join("L") + "Z"
}

function Plate({ product }: { product: Product }) {
  return product.image
    ? <img src={product.image} alt="" loading="lazy" draggable={false} />
    : <Leaf aria-hidden="true" />;
}

export default function DishOrbitCarousel({ category, onCategoryChange }: {
  category: string;
  onCategoryChange: (category: string) => void;
}) {
  const items = products.filter(item => item.category === category);
  const [slide, setSlide] = useState({ index: 0, previous: 0, direction: 1 });
  const [details, setDetails] = useState(false);
  const root = useRef<HTMLElement>(null);
  const touch = useRef<{x: number; y: number} | null>(null);
  const active = items[slide.index];

  function select(resolve: (current: number) => number, direction?: number) {
    setSlide(old => {
      const index = (resolve(old.index) + items.length) % items.length;
      if (index === old.index) return old;
      const forward = (index - old.index + items.length) % items.length;
      return { index, previous: old.index, direction: direction ?? (forward <= items.length / 2 ? 1 : -1) };
    });
  }
  const step = (delta: number) => select(current => current + delta, delta);

  useLayoutEffect(() => {
    if (!root.current || slide.previous === slide.index || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline();
      timeline.fromTo("[data-out]", {opacity: 1, rotation: 0}, {opacity: 0, rotation: slide.direction * 48, duration: .36, ease: "power2.in"})
        .fromTo("[data-in]", {opacity: 0, rotation: -slide.direction * 48}, {opacity: 1, rotation: 0, duration: .68, ease: "power3.out"}, .1)
        .fromTo("[data-copy]", {clipPath: "inset(0 100% 0 0)", y: 8}, {clipPath: "inset(0 0% 0 0)", y: 0, duration: .44}, .12)
        .fromTo("[data-panel]", {opacity: .3}, {opacity: 1, duration: .4}, .1)
        .fromTo("[data-band]", {rotation: -slide.direction * 8}, {rotation: 0, duration: .7, transformOrigin: "50% 0%"}, 0);
    }, root);
    return () => ctx.revert();
  }, [slide]);

  if (!active) return <p className="empty-state">Ainda não há produtos cadastrados nesta categoria.</p>;

  return <section className={styles.root} ref={root} aria-label="Carrossel de produtos" tabIndex={0}
    onKeyDown={event => {
      if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
        event.preventDefault();
        step(event.key === "ArrowRight" ? 1 : -1);
      }
    }}>
    <div className={styles.scene} onTouchStart={event => {
      const { clientX: x, clientY: y } = event.touches[0]; touch.current = {x, y};
    }} onTouchEnd={event => {
      if (!touch.current) return;
      const dx = event.changedTouches[0].clientX - touch.current.x;
      const dy = event.changedTouches[0].clientY - touch.current.y;
      touch.current = null;
      if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) step(dx < 0 ? 1 : -1);
    }}>
      <svg className={styles.band} viewBox="0 0 800 320" aria-hidden="true"><path data-band="" d={arcPath(35, 116, 260, -330, 560, 90)} fill={accents[slide.index % accents.length]} /></svg>
      <div className={styles.stage} aria-hidden="true">
        {slide.previous !== slide.index && <div className={styles.plate} data-out=""><Plate product={items[slide.previous]} /></div>}
        <div className={styles.plate} data-in=""><Plate product={active} /></div>
      </div>
      <div className={styles.copy} data-copy="" aria-live="polite">
        <p>{active.category} · {slide.index + 1} de {items.length}</p><h3>{active.name}</h3><strong>{displayPrice(active)}</strong>
      </div>
      <aside className={styles.panel}>
        <div className={styles.tabs}>
          <button aria-pressed={!details} onClick={() => setDetails(false)}>Sobre</button>
          <button aria-pressed={details} onClick={() => setDetails(true)}>Ingredientes</button>
        </div>
        <div data-panel="">
          {details ? <p>{active.ingredients?.join(", ") || "O cardápio não especifica os ingredientes deste item."}</p> :
          <>{active.description && <p>{active.description}</p>}
          {active.options ? active.options.map(o => <p key={o.name}>{o.name} · {money(o.price)}</p>) :
          !active.description && <p>{active.name} · {displayPrice(active)}</p>}</>}
        </div>
      </aside>
    </div>
    <div className={styles.controls}>
      <button disabled={items.length < 2} aria-label="Produto anterior" onClick={() => step(-1)}><ArrowLeft /></button>
      <div className={styles.strip} role="group" aria-label="Escolher categoria">
        {categories.map(name => {
          const cover = products.find(product => product.category === name)!;
          return <button key={name} aria-label={name} aria-pressed={name === category}
            onClick={() => {
              if (name === category) return;
              setSlide({ index: 0, previous: 0, direction: 1 });
              setDetails(false);
              onCategoryChange(name);
            }}>
            <Plate product={cover} /><span>{name}</span>
          </button>;
        })}
      </div>
      <button disabled={items.length < 2} aria-label="Próximo produto" onClick={() => step(1)}><ArrowRight /></button>
    </div>
  </section>;
}
