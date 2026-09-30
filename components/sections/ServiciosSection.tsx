import { servicios } from "@/lib/data/servicios";
import ServicioBloque from "./ServicioBloque";

export default function ServiciosSection() {
  return (
    <section id="servicios" className="px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <span className="text-rex-red font-mono text-xs tracking-widest uppercase">Servicios</span>
        <h2 className="font-display mt-3 text-3xl tracking-tight uppercase sm:text-4xl">Soluciones profesionales en pisos industriales</h2>
        <p className="text-steel-300 mt-4 max-w-2xl">Estos son los servicios que ofrecemos, con materiales certificados y equipo especializado para cada tipo de superficie.</p>
        <div className="divide-cement-800 mt-4 divide-y">
          {servicios.map((s, i) => (
            <ServicioBloque key={s.slug} servicio={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
