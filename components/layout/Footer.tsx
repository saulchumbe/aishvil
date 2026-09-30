import Link from "next/link";
import Image from "next/image";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMERO = "59176387609";
const FACEBOOK_1 = "https://www.facebook.com/share/1Ehc8FEGLi/?mibextid=wwXIfr";
const FACEBOOK_2 = "https://www.facebook.com/share/19XiJvcvTe/?mibextid=wwXIfr";
const TIKTOK = "https://www.tiktok.com/@trabajosentodabolivia";

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18} {...props}>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94z" />
    </svg>
  );
}

function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18} {...props}>
      <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer id="contacto" className="border-cement-800 border-t px-6 py-16 lg:px-12">
      <div className="mx-auto grid max-w-6xl gap-12 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/logo-192.png" alt="Pisos Industriales" width={36} height={36} className="rounded-full" />
            <div className="leading-tight">
              <div className="font-display text-lg tracking-wider uppercase">Pisos Industriales</div>
              <div className="text-steel-300 font-mono text-[9px] tracking-[0.2em] uppercase">Aishvil</div>
            </div>
          </div>
          <p className="text-steel-300 mt-3 max-w-xs text-sm">
            Pisos industriales, comerciales y residenciales en Bolivia.
          </p>
          <div className="mt-4 flex items-center gap-3">
            <a href={FACEBOOK_1} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-steel-300 hover:text-offwhite">
              <FacebookIcon />
            </a>
            <a href={FACEBOOK_2} target="_blank" rel="noopener noreferrer" aria-label="Facebook 2" className="text-steel-300 hover:text-offwhite">
              <FacebookIcon />
            </a>
            <a href={TIKTOK} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-steel-300 hover:text-offwhite">
              <TikTokIcon />
            </a>
          </div>
        </div>
        <div className="text-steel-300 font-mono text-xs tracking-widest uppercase">
          <p className="text-offwhite mb-3">Contacto</p>
          <a href={"https://wa.me/" + WHATSAPP_NUMERO} target="_blank" rel="noopener noreferrer" className="hover:text-offwhite mb-2 flex items-center gap-2">
            <MessageCircle size={16} />
            <span>WhatsApp</span>
          </a>
          <p className="mb-2">contacto@aishvil.com</p>
          <p className="mb-2">Santa Cruz de la Sierra, Bolivia</p>
          <p>Lun a Sab, 8:00 - 18:00</p>
        </div>
        <div className="text-steel-300 font-mono text-xs tracking-widest uppercase">
          <p className="text-offwhite mb-3">Navegacion</p>
          <Link href="/#servicios" className="hover:text-offwhite mb-2 block">Servicios</Link>
          <Link href="/#proyectos" className="hover:text-offwhite mb-2 block">Proyectos</Link>
          <Link href="/cotizar" className="hover:text-offwhite block">Cotizar</Link>
        </div>
      </div>
    </footer>
  );
}
