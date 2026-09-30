"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

const LINKS = [
  { href: "/#servicios", label: "Servicios" },
  { href: "/#proceso", label: "Proceso" },
  { href: "/#transformaciones", label: "Transformaciones" },
  { href: "/#contacto", label: "Contacto" },
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
          "fixed left-0 right-0 top-[57px] bottom-0 z-40 bg-black/60 transition-opacity duration-300 " +
          (open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none")
        }
      />

      <div
        className={
          "fixed left-0 right-0 top-[57px] z-50 origin-top overflow-hidden bg-[#131313] border-b border-cement-800 shadow-2xl transition-all duration-300 ease-out px-6 " +
          (open ? "max-h-[520px] opacity-100 py-5" : "max-h-0 opacity-0 py-0 pointer-events-none")
        }
      >
        <div className="flex flex-col">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-cement-800 text-offwhite font-display border-b py-3.5 text-base uppercase tracking-wide"
            >
              {l.label}
            </Link>
          ))}
        </div>
        <div className="mt-5 flex flex-col gap-3">
          <Link
            href="/cotizar"
            onClick={() => setOpen(false)}
            className="btn-pop bg-amber text-graphite-950 rounded-sm py-3 text-center font-mono text-xs font-bold tracking-widest uppercase"
          >
            Solicitar cotizacion
          </Link>
          <a
            href={"https://wa.me/" + WHATSAPP_NUMERO}
            target="_blank"
            rel="noopener noreferrer"
            className="text-steel-300 flex items-center justify-center gap-2 py-1 font-mono text-xs tracking-widest uppercase"
          >
            <MessageCircle size={16} />
            <span>Escribir por WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
}