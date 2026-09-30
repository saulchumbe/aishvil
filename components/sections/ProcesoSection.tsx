const ETAPAS = [
  { n: "01", t: "Evaluacion", d: "Visitamos el sitio y evaluamos el estado de la superficie." },
  { n: "02", t: "Preparacion", d: "Preparamos la base: limpieza, reparacion y nivelado." },
  { n: "03", t: "Ejecucion", d: "Aplicamos el sistema elegido con equipo y materiales." },
  { n: "04", t: "Acabado", d: "Curado y terminacion final segun el sistema aplicado." },
  { n: "05", t: "Entrega", d: "Entrega del piso terminado." },
];

export default function ProcesoSection() {
  return (
    <section id="proceso" className="border-cement-800 border-t px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <span className="text-rex-red font-mono text-xs tracking-widest uppercase">Como trabajamos</span>
        <h2 className="font-display mt-3 text-3xl tracking-tight uppercase sm:text-4xl">
          De la evaluacion a la entrega
        </h2>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {ETAPAS.map((e) => (
            <div key={e.n} className="border-rex-red border-t pt-4">
              <span className="text-rex-red font-mono text-sm">{e.n}</span>
              <h3 className="font-display mt-2 text-lg tracking-wide uppercase">{e.t}</h3>
              <p className="text-steel-300 mt-2 text-sm">{e.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
