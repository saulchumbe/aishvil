import Link from "next/link";
import MediaTile from "@/components/ui/MediaTile";
import type { Servicio } from "@/lib/types";

type Props = { servicio: Servicio; index: number };

export default function ServicioBloque({ servicio, index }: Props) {
  const reverse = index % 2 === 1;
  const tileClass = "aspect-4/3 order-2 " + (reverse ? "lg:order-2" : "lg:order-1");
  const textClass = "order-1 " + (reverse ? "lg:order-1" : "lg:order-2");

  return (
    <div className="grid items-center gap-10 py-16 lg:grid-cols-2">
      <div className={textClass}>
        <span className="text-rex-red font-mono text-xs tracking-widest uppercase">Servicio {String(index + 1).padStart(2, "0")}</span>
        <h3 className="font-display mt-3 text-3xl tracking-tight uppercase">{servicio.nombre}</h3>
        <p className="text-steel-300 mt-4">{servicio.resumen}</p>
        <ul className="text-steel-300 mt-6 space-y-2 text-sm">
          {servicio.beneficios.slice(0, 3).map((b) => (
            <li key={b} className="border-cement-600 border-l-2 pl-3">{b}</li>
          ))}
        </ul>
        <Link href={"/servicios/" + servicio.slug} className="text-rex-red mt-6 inline-block font-mono text-xs tracking-widest uppercase hover:underline">Ver servicio completo</Link>
      </div>
      <MediaTile label={servicio.nombre} color={servicio.color} photo={servicio.photo} className={tileClass} />
    </div>
  );
}