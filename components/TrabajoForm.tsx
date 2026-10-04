"use client";

import { useState } from "react";

// Numero de WhatsApp que recibe las postulaciones de trabajo
const WHATSAPP_TRABAJO = "59176387609";

const OFICIOS = [
  "Maestro albanil",
  "Albanil",
  "Ayudante",
  "Operador de pulidora",
  "Aplicador de epoxico / uretano",
  "Impermeabilizador",
  "Otro",
];

const MAQUINAS = ["Máquina pulidora", "Máquina alisadora (helicóptero)", "Ninguna por ahora"];

const EXPERIENCIA = ["Menos de 1 ano", "1 a 3 anos", "3 a 5 anos", "Mas de 5 anos"];

const OFICIOS_TEXTO: Record<string, string> = {
  "Maestro albanil": "Maestro albañil",
  "Albanil": "Albañil",
  "Ayudante": "Ayudante",
  "Operador de pulidora": "Operador de pulidora",
  "Aplicador de epoxico / uretano": "Aplicador de epóxico / uretano",
  "Impermeabilizador": "Impermeabilizador",
  "Otro": "Otro",
};

const EXPERIENCIA_TEXTO: Record<string, string> = {
  "Menos de 1 ano": "Menos de 1 año",
  "1 a 3 anos": "1 a 3 años",
  "3 a 5 anos": "3 a 5 años",
  "Mas de 5 anos": "Más de 5 años",
};

const campo =
  "border-cement-800 bg-graphite-950 text-offwhite placeholder:text-steel-300/70 focus:border-amber w-full rounded-md border px-4 py-3 text-base outline-none transition-colors";
const etiqueta = "text-steel-300 mb-2 block font-mono text-xs tracking-widest uppercase";

export default function TrabajoForm() {
  const [oficio, setOficio] = useState(OFICIOS[0]);
  const [experiencia, setExperiencia] = useState(EXPERIENCIA[1]);
  const [maquinas, setMaquinas] = useState<string[]>([]);

  function alternarMaquina(m: string) {
    setMaquinas((actual) => {
      if (m === "Ninguna por ahora") return actual.includes(m) ? [] : [m];
      const sinNinguna = actual.filter((x) => x !== "Ninguna por ahora");
      return sinNinguna.includes(m) ? sinNinguna.filter((x) => x !== m) : [...sinNinguna, m];
    });
  }
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nombre = String(data.get("nombre") || "").trim();
    const celular = String(data.get("celular") || "").trim();
    const zona = String(data.get("zona") || "").trim();
    const otroOficio = String(data.get("otroOficio") || "").trim();
    const mensaje = String(data.get("mensaje") || "").trim();
    const oficioFinal = oficio === "Otro" && otroOficio ? otroOficio : OFICIOS_TEXTO[oficio];

    const texto = [
      "Hola Aishvil, busco trabajo.",
      "",
      "Nombre: " + nombre,
      "Celular: " + celular,
      "Oficio: " + oficioFinal,
      "Máquinas que maneja: " + (maquinas.length > 0 ? maquinas.join(", ") : "No indicó"),
      "Experiencia: " + EXPERIENCIA_TEXTO[experiencia],
      "Ciudad / zona: " + zona,
      mensaje ? "Mensaje: " + mensaje : "",
    ]
      .filter((l, i) => l !== "" || i === 1)
      .join("\n");

    window.open("https://wa.me/" + WHATSAPP_TRABAJO + "?text=" + encodeURIComponent(texto), "_blank");
    setEnviado(true);
  }

  if (enviado) {
    return (
      <div className="border-cement-800 rounded-xl border p-8 text-center">
        <div className="bg-amber text-graphite-950 mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full text-2xl font-bold">✓</div>
        <h2 className="font-display text-2xl tracking-wide uppercase">¡Gracias por postularte!</h2>
        <p className="text-steel-300 mx-auto mt-3 max-w-md">
          Se abrió WhatsApp con tus datos. Solo presiona <strong>Enviar</strong> en el chat y te vamos a contactar.
        </p>
        <button
          type="button"
          onClick={() => setEnviado(false)}
          className="text-amber mt-6 font-mono text-xs tracking-widest uppercase underline"
        >
          Volver al formulario
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-7">
      <div>
        <span className={etiqueta}>¿Qué sabes hacer?</span>
        <div className="flex flex-wrap gap-2">
          {OFICIOS.map((o) => {
            const activo = o === oficio;
            return (
              <button
                key={o}
                type="button"
                onClick={() => setOficio(o)}
                className={
                  "rounded-full border px-4 py-2.5 text-sm font-semibold transition-all " +
                  (activo
                    ? "bg-amber border-amber text-graphite-950 shadow-md"
                    : "border-cement-800 text-offwhite hover:border-amber")
                }
              >
                {OFICIOS_TEXTO[o]}
              </button>
            );
          })}
        </div>
        {oficio === "Otro" && (
          <input name="otroOficio" required placeholder="Escribe tu oficio" className={campo + " mt-3"} />
        )}
      </div>

      <div>
        <span className={etiqueta}>¿Qué máquinas sabes manejar?</span>
        <div className="flex flex-wrap gap-2">
          {MAQUINAS.map((m) => {
            const activo = maquinas.includes(m);
            return (
              <button
                key={m}
                type="button"
                onClick={() => alternarMaquina(m)}
                className={
                  "flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-all " +
                  (activo
                    ? "bg-amber border-amber text-graphite-950 shadow-md"
                    : "border-cement-800 text-offwhite hover:border-amber")
                }
              >
                <span
                  className={
                    "flex h-4 w-4 items-center justify-center rounded-sm border text-[10px] leading-none " +
                    (activo ? "border-graphite-950" : "border-cement-800")
                  }
                >
                  {activo ? "✓" : ""}
                </span>
                {m}
              </button>
            );
          })}
        </div>
        <p className="text-steel-300 mt-2 text-xs">Puedes marcar más de una.</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className={etiqueta}>Nombre completo</span>
          <input name="nombre" required autoComplete="name" placeholder="Ej: Juan Pérez" className={campo} />
        </label>
        <label className="block">
          <span className={etiqueta}>Celular</span>
          <input name="celular" required type="tel" inputMode="tel" autoComplete="tel" placeholder="Ej: 70000000" className={campo} />
        </label>
        <label className="block">
          <span className={etiqueta}>Ciudad / zona</span>
          <input name="zona" required placeholder="Ej: Santa Cruz, Plan 3000" className={campo} />
        </label>
        <div>
          <span className={etiqueta}>Años de experiencia</span>
          <div className="grid grid-cols-2 gap-2">
            {EXPERIENCIA.map((x) => {
              const activo = x === experiencia;
              return (
                <button
                  key={x}
                  type="button"
                  onClick={() => setExperiencia(x)}
                  className={
                    "rounded-md border px-3 py-3 text-sm font-semibold transition-all " +
                    (activo ? "bg-amber border-amber text-graphite-950" : "border-cement-800 text-offwhite hover:border-amber")
                  }
                >
                  {EXPERIENCIA_TEXTO[x]}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <label className="block">
        <span className={etiqueta}>Mensaje (opcional)</span>
        <textarea name="mensaje" rows={3} placeholder="Cuéntanos dónde trabajaste o qué herramientas manejas" className={campo} />
      </label>

      <button
        type="submit"
        className="btn-pop flex w-full items-center justify-center gap-3 rounded-md bg-[#25D366] py-4 font-mono text-sm font-bold tracking-widest text-white uppercase shadow-lg transition-transform hover:scale-[1.01]"
      >
        <svg viewBox="0 0 32 32" width={22} height={22} fill="currentColor" aria-hidden="true">
          <path d="M16.001 2.667c-7.363 0-13.334 5.97-13.334 13.333 0 2.352.616 4.66 1.788 6.688l-1.897 6.928a1 1 0 0 0 1.226 1.226l6.928-1.897a13.29 13.29 0 0 0 6.688 1.788h.001c7.363 0 13.334-5.97 13.334-13.334S23.364 2.667 16.001 2.667zm7.802 18.85c-.33.928-1.63 1.71-2.65 1.93-.705.15-1.626.27-4.724-1.014-3.965-1.643-6.52-5.663-6.717-5.925-.19-.262-1.61-2.144-1.61-4.09 0-1.945 1.02-2.9 1.383-3.297.33-.36.72-.45.96-.45.24 0 .48.003.69.014.222.011.518-.084.81.618.33.79 1.12 2.734 1.22 2.933.1.2.166.435.033.697-.132.263-.198.427-.395.657-.198.23-.417.513-.596.69-.198.196-.404.408-.174.798.23.39 1.022 1.685 2.194 2.73 1.508 1.344 2.78 1.76 3.17 1.958.39.198.618.165.845-.1.23-.263.99-1.153 1.253-1.548.264-.396.528-.33.885-.198.362.132 2.297 1.084 2.69 1.28.396.198.66.297.757.462.098.165.098.952-.23 1.877z" />
        </svg>
        Enviar por WhatsApp
      </button>
      <p className="text-steel-300 text-center text-xs">Tus datos solo se usan para contactarte por trabajo.</p>
    </form>
  );
}
