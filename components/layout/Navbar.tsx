"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, MessageCircle, Wrench, Workflow, GalleryHorizontal, Phone } from "lucide-react";

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
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo-192.png" alt="Pisos Industriales" width={40} height={40} className="rounded-full" />
            <div className="leading-tight">
              <div className="font-display text-lg tracking-wider uppercase">Pisos Industriales</div>
              <div className="text-steel-300 font-mono text-[9px] tracking-[0.2em] uppercase">Aishvil</div>
            </div>
          </Link>
          <nav className="text-steel-300 hidden gap-8 font-mono text-xs tracking-widest uppercase md:flex">
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-offwhite">{l.label}</Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/cotizar" className="btn-pop bg-amber text-graphite-950 hover:bg-amber-dark hidden rounded-sm px-4 py-2 font-mono text-xs font-bold tracking-widest uppercase transition-colors sm:inline-block">Cotizar</Link>
            <button type="button" onClick={() => setOpen((v) => !v)} className="text-offwhite md:hidden" aria-label="Abrir menu">
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      <div
        onClick={() => setOpen(false)}
        className={
          "fixed left-0 right-0 top-[57px] bottom-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-500 " +
          (open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none")
        }
      />

      <div
        className={
          "fixed left-0 right-0 top-[57px] z-50 origin-top overflow-hidden rounded-b-3xl border-b border-amber/20 bg-gradient-to-b from-graphite-950 to-[#0d0d0c] shadow-2xl shadow-black/60 transition-all ease-[cubic-bezier(0.16,1,0.3,1)] duration-500 px-5 " +
          (open ? "max-h-[600px] opacity-100 py-6" : "max-h-0 opacity-0 py-0 pointer-events-none")
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
                style={{ transitionDelay: open ? (i * 60 + 80) + "ms" : "0ms" }}
                className={
                  "group flex items-center gap-3 border-b border-white/5 py-4 font-display text-base uppercase tracking-wide text-offwhite transition-all duration-300 hover:pl-2 hover:text-amber " +
                  (open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0")
                }
              >
                <Icon size={18} className="text-amber/80 group-hover:text-amber" />
                {l.label}
              </Link>
            );
          })}
        </nav>
        <div className="mt-6 flex flex-col gap-3">
          <Link
            href="/cotizar"
            onClick={() => setOpen(false)}
            className="btn-pop bg-amber text-graphite-950 hover:bg-amber-dark rounded-full py-3.5 text-center font-mono text-xs font-bold tracking-widest uppercase shadow-lg shadow-amber/20 transition-colors"
          >
            Solicitar cotizacion
          </Link>
          <a
            href={"https://wa.me/" + WHATSAPP_NUMERO}
            target="_blank"
            rel="noopener noreferrer"
            className="text-steel-300 flex items-center justify-center gap-2 rounded-full border border-white/10 py-3.5 font-mono text-xs tracking-widest uppercase transition-colors hover:border-amber/40 hover:text-amber"
          >
            <MessageCircle size={16} />
            <span>Escribir por WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
}