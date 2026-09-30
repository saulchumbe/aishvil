"use client";

import { useRef, useState } from "react";

type CompareSliderProps = {
  label?: string;
  color?: string;
  beforePhoto?: string;
  afterPhoto?: string;
  beforeFit?: "cover" | "contain";
  afterFit?: "cover" | "contain";
};

export default function CompareSlider({ label, color = "#55707c", beforePhoto, afterPhoto, beforeFit = "cover", afterFit = "cover" }: CompareSliderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);

  function update(clientX: number) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }

  const gradient = "radial-gradient(120% 100% at 20% 0%, " + color + "e6 0%, " + color + "80 35%, #16150f 85%)";
  const layerStyle = { position: "absolute" as const, inset: 0, overflow: "hidden", backgroundColor: "#1c1c1b" };

  return (
    <div className="w-full">
      {label && <p className="mb-3 font-mono text-xs uppercase tracking-widest text-steel-300">{label}</p>}
      <div
        ref={ref}
        onPointerDown={(e) => {
          e.currentTarget.setPointerCapture(e.pointerId);
          update(e.clientX);
        }}
        onPointerMove={(e) => {
          if (e.buttons === 1) update(e.clientX);
        }}
        onTouchStart={(e) => update(e.touches[0].clientX)}
        onTouchMove={(e) => update(e.touches[0].clientX)}
        style={{ position: "relative", touchAction: "none" }}
        className="aspect-16/10 w-full cursor-ew-resize rounded-sm select-none"
      >
        <div style={layerStyle}>
          {afterPhoto ? (
            <img src={afterPhoto} alt="Despues" className="absolute inset-0 h-full w-full" style={{ objectFit: afterFit }} loading="lazy" decoding="async" />
          ) : (
            <div className="absolute inset-0" style={{ background: gradient }} />
          )}
          <div className="media-tile-scrim" />
          <div className="media-tile-grain" />
          <span className="media-tile-label">Despues</span>
        </div>
        <div style={{ ...layerStyle, clipPath: "inset(0 " + (100 - pos) + "% 0 0)" }}>
          {beforePhoto ? (
            <img src={beforePhoto} alt="Antes" className="absolute inset-0 h-full w-full" style={{ objectFit: beforeFit, filter: "grayscale(0.35) brightness(0.85)" }} loading="lazy" decoding="async" />
          ) : (
            <div className="absolute inset-0" style={{ background: gradient, filter: "grayscale(0.55) brightness(0.7)" }} />
          )}
          <div className="media-tile-scrim" />
          <div className="media-tile-grain" />
          <span className="media-tile-label">Antes</span>
        </div>
        <div className="bg-offwhite/60 absolute inset-y-0 w-px" style={{ left: pos + "%" }}>
          <div className="border-offwhite/60 bg-graphite-950/80 absolute top-1/2 left-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border" />
        </div>
      </div>
    </div>
  );
}