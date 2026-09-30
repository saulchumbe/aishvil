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

      {open && (
        <div
          style={{
            position: "fixed",
            top: 57,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 50,
            backgroundColor: "#131313",
          }}
          className="flex flex-col px-6 py-8"
        >
          <nav className="flex flex-col">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-cement-800 text-offwhite font-display border-b py-5 text-xl uppercase tracking-wide"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto flex flex-col gap-3 pt-8">
            <Link
              href="/cotizar"
              onClick={() => setOpen(false)}
              className="btn-pop bg-amber text-graphite-950 rounded-sm py-4 text-center font-mono text-sm font-bold tracking-widest uppercase"
            >
              Solicitar cotizacion
            </Link>
            <a
              href={"https://wa.me/" + WHATSAPP_NUMERO}
              target="_blank"
              rel="noopener noreferrer"
              className="border-cement-800 text-offwhite flex items-center justify-center gap-2 rounded-sm border py-4 font-mono text-sm tracking-widest uppercase"
            >
              <MessageCircle size={18} />
              <span>Escribir por WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}