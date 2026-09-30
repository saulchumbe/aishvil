"use client";

import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type GaleriaProps = {
  fotos: string[];
};

export default function Galeria({ fotos }: GaleriaProps) {
  const [indice, setIndice] = useState(0);
  const startX = useRef(0);

  function anterior() {
    setIndice((i) => (i === 0 ? fotos.length - 1 : i - 1));
  }
  function siguiente() {
    setIndice((i) => (i === fotos.length - 1 ? 0 : i + 1));
  }

  function onTouchStart(e: React.TouchEvent) {
    startX.current = e.touches[0].clientX;
  }
  function onTouchEnd(e: React.TouchEvent) {
    const diff = e.changedTouches[0].clientX - startX.current;
    if (diff > 40) anterior();
    if (diff < -40) siguiente();
  }

  if (fotos.length === 0) return null;

  return (
    <div className="w-full">
      <div
        style={{ position: "relative", overflow: "hidden" }}
        className="aspect-16/9 w-full rounded-sm select-none"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <img src={fotos[indice]} alt={"Foto " + (indice + 1)} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" decoding="async" />
        <button
          type="button"
          onClick={anterior}
          aria-label="Foto anterior"
          style={{ position: "absolute", top: "50%", left: 12, transform: "translateY(-50%)", zIndex: 20, width: 36, height: 36, borderRadius: 9999, backgroundColor: "rgba(19,19,19,0.75)", color: "#f2efe9", display: "flex", alignItems: "center", justifyContent: "center", border: "none", cursor: "pointer" }}
        >
          <ChevronLeft size={20} />
        </button>
        <button
          type="button"
          onClick={siguiente}
          aria-label="Foto siguiente"
          style={{ position: "absolute", top: "50%", right: 12, transform: "translateY(-50%)", zIndex: 20, width: 36, height: 36, borderRadius: 9999, backgroundColor: "rgba(19,19,19,0.75)", color: "#f2efe9", display: "flex", alignItems: "center", justifyContent: "center", border: "none", cursor: "pointer" }}
        >
          <ChevronRight size={20} />
        </button>
        <span style={{ position: "absolute", bottom: 12, right: 12, zIndex: 20, backgroundColor: "rgba(19,19,19,0.75)", color: "#f2efe9", borderRadius: 4, padding: "4px 8px", fontSize: 12, fontFamily: "monospace" }}>
          {indice + 1} / {fotos.length}
        </span>
      </div>
      <div className="mt-3 flex gap-2 overflow-x-auto">
        {fotos.map((f, i) => (
          <button
            key={f}
            type="button"
            onClick={() => setIndice(i)}
            style={{ position: "relative", zIndex: 20, cursor: "pointer" }}
            className={"h-14 w-20 shrink-0 overflow-hidden rounded-sm border-2 " + (i === indice ? "border-rex-red" : "border-transparent")}
          >
            <img src={f} alt="" className="h-full w-full object-cover" loading="lazy" decoding="async" />
          </button>
        ))}
      </div>
    </div>
  );
}