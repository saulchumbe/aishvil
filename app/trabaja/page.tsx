import type { Metadata } from "next";
import TrabajoForm from "@/components/TrabajoForm";

export const metadata: Metadata = {
  title: "Trabaja con nosotros | Aishvil Pisos Industriales",
  description: "Buscamos maestros albañiles, albañiles, ayudantes, operadores de pulidora, aplicadores de epóxico e impermeabilizadores en Bolivia.",
};

const PUNTOS = [
  { titulo: "Trabajo constante", texto: "Obras de pisos industriales, comerciales y residenciales." },
  { titulo: "Aprende un oficio", texto: "Pulido, uretano, epóxico, vaciado e impermeabilización." },
  { titulo: "Respuesta rápida", texto: "Te contactamos directo por WhatsApp." },
];

export default function TrabajaPage() {
  return (
    <main className="bg-graphite-950 text-offwhite">
      <section className="px-6 pt-16 pb-10 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <span className="text-rex-red font-mono text-xs tracking-widest uppercase">Trabaja con nosotros</span>
          <h1 className="font-display mt-3 text-4xl tracking-tight uppercase sm:text-5xl">¿Buscas trabajo?</h1>
          <p className="text-steel-300 mt-5 max-w-2xl text-lg">
            Súmate al equipo de Aishvil. Elige tu oficio, completa tus datos y envíalos por WhatsApp. Así de fácil.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {PUNTOS.map((p) => (
              <div key={p.titulo} className="border-cement-800 border-l-2 pl-4">
                <p className="font-display text-base tracking-wide uppercase">{p.titulo}</p>
                <p className="text-steel-300 mt-1 text-sm">{p.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 lg:px-12">
        <div className="border-cement-800 mx-auto max-w-3xl rounded-2xl border p-6 shadow-sm sm:p-10">
          <TrabajoForm />
        </div>
      </section>
    </main>
  );
}
