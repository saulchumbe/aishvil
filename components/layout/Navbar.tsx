"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, MessageCircle, Wrench, Workflow, GalleryHorizontal, Phone, HardHat } from "lucide-react";

const LINKS = [
  { href: "/#servicios", label: "Servicios", icon: Wrench },
  { href: "/#proceso", label: "Proceso", icon: Workflow },
  { href: "/#transformaciones", label: "Transformaciones", icon: GalleryHorizontal },
  { href: "/#contacto", label: "Contacto", icon: Phone },
];

const WHATSAPP_NUMERO = "59172629132";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="bg-graphite-950/95 border-cement-800 sticky top-0 z-50 border-b backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 lg:px-12">
          <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <Image src="/logo-192.png" alt="Pisos Industriales" width={40} height={40} className="rounded-full" />
            <div className="leading-tight">
              <div className="font-display text-lg tracking-wider uppercase">Pisos Industriales</div>
              <div className="text-steel-300 font-mono text-[9px] tracking-[0.2em] uppercase">Aishvil</div>
            </div>
          </Link>
          <nav className="text-steel-300 hidden items-center gap-7 font-mono text-xs tracking-widest uppercase md:flex">
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-offwhite">{l.label}</Link>
            ))}
            <Link href="/trabaja" className="text-amber hover:text-offwhite flex items-center gap-1.5">
              <HardHat size={14} />
              Trabaja con nosotros
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/cotizar" className="btn-pop bg-amber text-graphite-950 hover:bg-amber-dark hidden rounded-sm px-4 py-2 font-mono text-xs font-bold tracking-widest uppercase transition-colors sm:inline-block">Cotizar</Link>
            <button type="button" onClick={() => setOpen((v) => !v)} className="text-offwhite md:hidden" aria-label="Abrir menu">
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Fondo semitransparente detras del menu */}
      <div
        onClick={() => setOpen(false)}
        className={
          "fixed left-0 right-0 top-[57px] bottom-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-500 md:hidden " +
          (open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none")
        }
      />

      {/* Menu movil: usa los mismos colores de la pagina */}
      <div
        className={
          "bg-graphite-950 border-cement-800 fixed left-0 right-0 top-[57px] z-50 origin-top overflow-hidden rounded-b-3xl border-b px-5 shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden " +
          (open ? "max-h-[640px] opacity-100 py-6" : "pointer-events-none max-h-0 opacity-0 py-0")
        }
      >
        <nav className="flex flex-col">
          {LINKS.map((l, i) => {
            const Icon = l.icon;
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: open ? i * 60 + 80 + "ms" : "0ms" }}
                className={
                  "group border-cement-800 text-offwhite font-display flex items-center gap-3 border-b py-4 text-base tracking-wide uppercase transition-all duration-300 hover:pl-2 " +
                  (open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0")
                }
              >
                <Icon size={18} className="text-amber" />
                {l.label}
              </Link>
            );
          })}
          <Link
            href="/trabaja"
            onClick={() => setOpen(false)}
            style={{ transitionDelay: open ? LINKS.length * 60 + 80 + "ms" : "0ms" }}
            className={
              "border-amber text-offwhite font-display mt-4 flex items-center gap-3 rounded-xl border-2 px-4 py-4 text-base tracking-wide uppercase transition-all duration-300 " +
              (open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0")
            }
          >
            <HardHat size={20} className="text-amber" />
            <span className="flex-1">Trabaja con nosotros</span>
            <span className="bg-amber text-graphite-950 rounded-full px-2 py-0.5 font-mono text-[10px] font-bold tracking-widest">NUEVO</span>
          </Link>
        </nav>
        <div className="mt-6 flex flex-col gap-3">
          <Link
            href="/cotizar"
            onClick={() => setOpen(false)}
            className="btn-pop bg-amber text-graphite-950 hover:bg-amber-dark rounded-full py-3.5 text-center font-mono text-xs font-bold tracking-widest uppercase shadow-lg transition-colors"
          >
            Solicitar cotizacion
          </Link>
          <a
            href={"https://wa.me/" + WHATSAPP_NUMERO}
            target="_blank"
            rel="noopener noreferrer"
            className="border-cement-800 text-offwhite hover:border-amber flex items-center justify-center gap-2 rounded-full border py-3.5 font-mono text-xs tracking-widest uppercase transition-colors"
          >
            <MessageCircle size={16} />
            <span>Escribir por WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
}
