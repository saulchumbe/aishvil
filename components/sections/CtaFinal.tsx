import Link from "next/link";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMERO = "59172629132";

export default function CtaFinal() {
  return (
    <section className="border-cement-800 bg-cement-800 border-t px-6 py-24 text-center lg:px-12">
      <div className="mx-auto max-w-2xl">
        <h2 className="font-display text-3xl tracking-tight uppercase sm:text-4xl">Empecemos con tu proyecto</h2>
        <p className="text-steel-300 mt-4">Contanos que necesitas y te respondemos con una propuesta.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/cotizar" className="btn-pop bg-amber text-graphite-950 hover:bg-amber-dark rounded-sm px-7 py-3.5 font-display text-lg font-bold tracking-wide uppercase transition-colors">Solicitar cotizacion</Link>
          <a href={"https://wa.me/" + WHATSAPP_NUMERO} target="_blank" rel="noopener noreferrer" className="btn-pop border-cement-600 text-offwhite hover:border-offwhite flex items-center gap-2 rounded-sm border px-7 py-3.5 font-display text-lg tracking-wide uppercase transition-colors">
            <MessageCircle size={20} />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
