"use client";

import { useState } from "react";

const WHATSAPP_NUMERO = "59176387609";

const SERVICIOS = [
  "Pulido de concreto",
  "Recuperacion de galpones de concreto",
  "Uretano y resinas",
  "Vaciado y alisado de hormigon",
  "Impermeabilizacion de techos",
  "Otro",
];

export default function QuoteForm() {
  const [enviado, setEnviado] = useState(false);
  const [servicioSeleccionado, setServicioSeleccionado] = useState(SERVICIOS[0]);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const nombre = data.get("nombre") || "";
    const telefono = data.get("telefono") || "";
    const correo = data.get("correo") || "";
    let servicio = data.get("servicio") || "";
    const servicioOtro = data.get("servicioOtro") || "";
    if (servicio === "Otro" && servicioOtro) {
      servicio = servicioOtro;
    }
    const area = data.get("area") || "";
    const ubicacion = data.get("ubicacion") || "";
    const descripcion = data.get("descripcion") || "";
    const observaciones = data.get("observaciones") || "";

    const lineas = [
      "Hola, quiero solicitar una cotizacion:",
      "Servicio: " + servicio,
      "Nombre: " + nombre,
    ];
    if (telefono) lineas.push("Telefono: " + telefono);
    if (correo) lineas.push("Correo: " + correo);
    if (area) lineas.push("Area: " + area + " m2");
    if (ubicacion) lineas.push("Ubicacion: " + ubicacion);
    if (descripcion) lineas.push("Descripcion: " + descripcion);
    if (observaciones) lineas.push("Observaciones: " + observaciones);
    lineas.push("");
    lineas.push("(Te voy a mandar fotos del piso por este mismo chat)");

    const mensaje = lineas.join("\n");
    const url = "https://wa.me/" + WHATSAPP_NUMERO + "?text=" + encodeURIComponent(mensaje);
    window.open(url, "_blank");
    setEnviado(true);
  }

  if (enviado) {
    return (
      <div className="border-cement-600 bg-graphite-900 rounded-md border p-8 text-center">
        <p className="text-offwhite font-display text-2xl tracking-wide uppercase">Solicitud enviada</p>
        <p className="text-steel-300 mt-2">Se abrio WhatsApp con tu solicitud. Si tenes fotos del piso, adjuntalas ahi mismo en el chat.</p>
      </div>
    );
  }

  const inputClass = "rounded-sm border border-cement-600 bg-graphite-900 px-3 py-2.5 text-offwhite outline-none focus:border-rex-red";
  const labelClass = "text-steel-300 font-mono text-xs uppercase tracking-wider";

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <label className="flex flex-col gap-1.5 text-sm">
        <span className={labelClass}>Nombre completo</span>
        <input required name="nombre" type="text" className={inputClass} />
      </label>

      <label className="flex flex-col gap-1.5 text-sm">
        <span className={labelClass}>Telefono / WhatsApp (opcional)</span>
        <input name="telefono" type="tel" className={inputClass} />
      </label>

      <label className="flex flex-col gap-1.5 text-sm">
        <span className={labelClass}>Correo electronico</span>
        <input name="correo" type="email" className={inputClass} />
      </label>

      <label className="flex flex-col gap-1.5 text-sm">
        <span className={labelClass}>Tipo de servicio</span>
        <select required name="servicio" className={inputClass} value={servicioSeleccionado} onChange={(e) => setServicioSeleccionado(e.target.value)}>
          {SERVICIOS.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </label>

      {servicioSeleccionado === "Otro" && (
        <label className="flex flex-col gap-1.5 text-sm sm:col-span-2">
          <span className={labelClass}>Cual es el servicio que necesitas?</span>
          <input name="servicioOtro" type="text" placeholder="Escribi el trabajo que necesitas" className={inputClass} />
        </label>
      )}

      <label className="flex flex-col gap-1.5 text-sm">
        <span className={labelClass}>Area aproximada (m2)</span>
        <input name="area" type="number" min="0" className={inputClass} />
      </label>

      <label className="flex flex-col gap-1.5 text-sm">
        <span className={labelClass}>Ciudad / ubicacion</span>
        <input name="ubicacion" type="text" placeholder="Ciudad, zona" className={inputClass} />
      </label>

      <label className="flex flex-col gap-1.5 text-sm sm:col-span-2">
        <span className={labelClass}>Descripcion del trabajo</span>
        <textarea name="descripcion" rows={4} className={inputClass + " resize-none"} />
      </label>

      <label className="flex flex-col gap-1.5 text-sm sm:col-span-2">
        <span className={labelClass}>Observaciones (opcional)</span>
        <textarea name="observaciones" rows={3} className={inputClass + " resize-none"} />
      </label>

      <p className="text-steel-300 -mt-2 text-xs sm:col-span-2">Al enviar se va a abrir WhatsApp. Ahi mismo podes adjuntar fotos del piso.</p>

      <button type="submit" className="bg-amber text-graphite-950 hover:bg-amber-dark mt-2 rounded-sm px-6 py-3 font-display text-lg font-bold tracking-wide uppercase transition-colors sm:col-span-2">
        Enviar por WhatsApp
      </button>
    </form>
  );
}
