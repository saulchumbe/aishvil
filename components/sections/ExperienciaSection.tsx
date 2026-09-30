const PUNTOS = [
  { t: "Calidad", d: "Materiales y procesos adecuados para cada tipo de superficie." },
  { t: "Experiencia", d: "Personal especializado y maquinaria profesional." },
  { t: "Durabilidad", d: "Soluciones disenadas para soportar uso intensivo." },
  { t: "Compromiso", d: "Cumplimiento de tiempos y especificaciones acordadas." },
];

export default function ExperienciaSection() {
  return (
    <section className="border-cement-800 bg-graphite-900 border-t px-6 py-24 lg:px-12">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <span className="text-rex-red font-mono text-xs tracking-widest uppercase">Por que elegirnos</span>
          <h2 className="font-display mt-3 text-3xl tracking-tight uppercase sm:text-4xl">
            Experiencia que se nota en cada superficie
          </h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          {PUNTOS.map((p) => (
            <div key={p.t} className="border-rex-red border-l-2 pl-5">
              <h3 className="font-display text-lg tracking-wide uppercase">{p.t}</h3>
              <p className="text-steel-300 mt-2 text-sm">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
