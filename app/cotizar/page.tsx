import QuoteForm from "@/components/QuoteForm";

export default function CotizarPage() {
  return (
    <main className="bg-graphite-950 text-offwhite px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-3xl">
        <span className="text-rex-red font-mono text-xs tracking-widest uppercase">Cotizar</span>
        <h1 className="font-display mt-3 text-3xl tracking-tight uppercase sm:text-4xl">Contanos sobre tu proyecto</h1>
        <p className="text-steel-300 mt-4">Completa el formulario con el mayor detalle posible. Se abrira WhatsApp con tu solicitud.</p>
        <div className="mt-12"><QuoteForm /></div>
      </div>
    </main>
  );
}
