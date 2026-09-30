import { notFound } from "next/navigation";
import Link from "next/link";
import { servicios } from "@/lib/data/servicios";
import { proyectos } from "@/lib/data/proyectos";
import MediaTile from "@/components/ui/MediaTile";
import Galeria from "@/components/ui/Galeria";

export function generateStaticParams() {
  return servicios.map((s) => ({ slug: s.slug }));
}

export default async function ServicioPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const servicio = servicios.find((s) => s.slug === slug);
  if (!servicio) return notFound();
  const relacionados = proyectos.filter((p) => p.servicioSlug === servicio.slug);

  return (
    <main className="bg-graphite-950 text-offwhite">
      <section className="px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <span className="text-rex-red font-mono text-xs tracking-widest uppercase">Servicio</span>
          <h1 className="font-display mt-3 text-4xl tracking-tight uppercase sm:text-5xl">{servicio.nombre}</h1>
          <p className="text-steel-300 mt-6 max-w-2xl text-lg">{servicio.descripcion}</p>
        </div>
      </section>

      <section className="px-6 lg:px-12">
        <div className="mx-auto max-w-5xl">
          {servicio.galeria && servicio.galeria.length > 1 ? (
            <Galeria fotos={servicio.galeria} />
          ) : (
            <MediaTile label={servicio.nombre} color={servicio.color} photo={servicio.photo} className="aspect-16/9" />
          )}
        </div>
      </section>

      <section className="px-6 py-16 lg:px-12">
        <div className="mx-auto grid max-w-5xl gap-12 sm:grid-cols-2">
          <div>
            <h2 className="text-rex-red font-display text-xl tracking-wide uppercase">Aplicaciones</h2>
            <ul className="text-steel-300 mt-4 space-y-2">
              {servicio.aplicaciones.map((a) => (<li key={a} className="border-cement-600 border-l-2 pl-3">{a}</li>))}
            </ul>
          </div>
          <div>
            <h2 className="text-rex-red font-display text-xl tracking-wide uppercase">Beneficios</h2>
            <ul className="text-steel-300 mt-4 space-y-2">
              {servicio.beneficios.map((b) => (<li key={b} className="border-cement-600 border-l-2 pl-3">{b}</li>))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-cement-800 border-t px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-rex-red font-display text-xl tracking-wide uppercase">Proceso</h2>
          <ol className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {servicio.proceso.map((paso, i) => (
              <li key={paso}>
                <span className="text-rex-red font-mono text-sm">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-steel-300 mt-2 text-sm">{paso}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {relacionados.length > 0 && (
        <section className="border-cement-800 border-t px-6 py-16 lg:px-12">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-rex-red font-display text-xl tracking-wide uppercase">Proyectos relacionados</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relacionados.map((p) => (
                <Link key={p.slug} href={"/proyectos/" + p.slug} className="group block">
                  <MediaTile label={p.titulo} color={servicio.color} photo={servicio.photo} className="aspect-4/3" />
                  <p className="font-display group-hover:text-rex-red mt-3 text-sm tracking-wide uppercase">{p.titulo}</p>
                  <p className="text-steel-300 text-xs">{p.ubicacion}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="border-cement-800 bg-cement-800 border-t px-6 py-16 text-center lg:px-12">
        <h2 className="font-display text-2xl tracking-tight uppercase sm:text-3xl">Necesitas este servicio para tu proyecto?</h2>
        <Link href="/cotizar" className="bg-amber text-graphite-950 hover:bg-amber-dark mt-6 inline-block rounded-sm px-7 py-3.5 font-display text-lg font-bold tracking-wide uppercase transition-colors">Solicitar cotizacion</Link>
      </section>
    </main>
  );
}
