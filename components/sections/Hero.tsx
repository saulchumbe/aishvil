import Link from "next/link";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMERO = "59172629132";
const HERO_PHOTO = "https://images.pexels.com/photos/36230779/pexels-photo-36230779.jpeg?auto=compress&cs=tinysrgb&w=1600";

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-cover bg-center px-6 pb-20 lg:px-12" style={{ backgroundImage: "url(" + HERO_PHOTO + ")" }}>
      <div className="hero-overlay absolute inset-0" />
      <div className="relative mx-auto w-full max-w-6xl" style={{ color: "#f5f2ec" }}>
        <span style={{ color: "#e0463c" }} className="font-mono text-[10px] tracking-[0.15em] uppercase sm:text-xs sm:tracking-[0.3em]">Pisos industriales - comerciales - residenciales</span>
        <h1 className="font-display mt-4 max-w-3xl text-3xl leading-tight tracking-tight uppercase sm:mt-5 sm:text-5xl lg:text-6xl" style={{ color: "#f5f2ec" }}>
          Pisos industriales de alto rendimiento
        </h1>
        <p className="mt-5 max-w-xl text-sm sm:mt-6 sm:text-base" style={{ color: "#d8d4c8" }}>
          Soluciones especializadas en alisado, pulido, sistemas epoxicos, hormigon estampado y uretano.
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-4 sm:mt-9 sm:gap-5">
          <Link href="#servicios" className="btn-pop bg-amber text-graphite-950 hover:bg-amber-dark rounded-sm px-5 py-2.5 font-mono text-xs font-bold tracking-widest uppercase transition-colors sm:px-6 sm:py-3">Ver servicios</Link>
          <Link href="#proyectos" style={{ color: "#f5f2ec", borderColor: "rgba(245,242,236,0.4)" }} className="btn-pop rounded-sm border px-5 py-2.5 font-mono text-xs tracking-widest uppercase transition-colors sm:px-6 sm:py-3">Ver proyectos</Link>
          <a href={"https://wa.me/" + WHATSAPP_NUMERO} target="_blank" rel="noopener noreferrer" style={{ color: "#f5f2ec" }} className="flex items-center gap-2 font-mono text-xs tracking-widest uppercase">
            <MessageCircle size={16} />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
