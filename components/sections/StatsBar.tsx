const STATS = [
  { valor: "10+", etiqueta: "Años de experiencia" },
  { valor: "40+", etiqueta: "Proyectos completados" },
  { valor: "13,000+", etiqueta: "m2 ejecutados" },
];

export default function StatsBar() {
  return (
    <section className="border-cement-800 bg-graphite-900 border-b px-6 py-8 lg:px-12">
      <div className="mx-auto grid max-w-6xl grid-cols-3 gap-6">
        {STATS.map((s) => (
          <div key={s.etiqueta} className="text-center sm:text-left">
            <p className="font-display text-rex-red text-3xl sm:text-4xl">{s.valor}</p>
            <p className="text-steel-300 mt-1 font-mono text-[11px] tracking-widest uppercase sm:text-xs">{s.etiqueta}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
