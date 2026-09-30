import type { Servicio } from "@/lib/types";

export const servicios: Servicio[] = [
  {
    slug: "alisado-de-pisos-en-fresco",
    nombre: "Alisado de pisos en fresco",
    resumen: "Nivelado y acabado de superficies de hormigon recien vaciado.",
    descripcion:
      "Trabajamos el hormigon fresco para lograr una superficie nivelada, resistente y lista para recibir el acabado final, ideal para naves industriales y plantas de alto transito.",
    aplicaciones: ["Naves industriales", "Plantas de produccion", "Bodegas y centros logisticos"],
    beneficios: ["Superficie nivelada y uniforme", "Mayor resistencia al desgaste", "Base solida para acabados posteriores"],
    proceso: ["Vaciado del hormigon", "Nivelado mecanico", "Alisado y curado", "Control de calidad final"],
  },
  {
    slug: "pulido-de-pisos-endurecidos",
    nombre: "Pulido de pisos endurecidos",
    resumen: "Pulido mecanico que devuelve brillo y resistencia a pisos existentes.",
    descripcion:
      "Recuperamos pisos de hormigon existentes mediante pulido mecanico progresivo, logrando una superficie brillante, facil de limpiar y de alta durabilidad.",
    aplicaciones: ["Showrooms", "Locales comerciales", "Plantas industriales existentes"],
    beneficios: ["Brillo duradero sin ceras", "Facil mantenimiento", "Mayor vida util del piso"],
    proceso: ["Diagnostico de la superficie", "Pulido progresivo por grano", "Sellado", "Pulido final"],
  },
  {
    slug: "pintura-epoxica",
    nombre: "Pintura epoxica",
    resumen: "Recubrimientos de alta resistencia quimica y mecanica.",
    descripcion:
      "Aplicamos sistemas epoxicos de alto desempeno para superficies sometidas a transito pesado, quimicos o condiciones exigentes de higiene.",
    aplicaciones: ["Talleres", "Plantas de alimentos", "Bodegas quimicas"],
    beneficios: ["Resistencia quimica", "Superficie higienica", "Terminacion uniforme y personalizable"],
    proceso: ["Preparacion de superficie", "Imprimacion", "Aplicacion de capas epoxicas", "Curado"],
  },
  {
    slug: "estampado-de-hormigon-en-fresco",
    nombre: "Estampado de hormigon en fresco",
    resumen: "Texturas y patrones decorativos sobre hormigon fresco.",
    descripcion:
      "Aplicamos texturas y patrones decorativos directamente sobre el hormigon fresco, combinando resistencia estructural con un acabado esteticamente cuidado.",
    aplicaciones: ["Areas exteriores", "Accesos y veredas", "Espacios comerciales"],
    beneficios: ["Acabado decorativo duradero", "Resistencia estructural", "Bajo mantenimiento"],
    proceso: ["Vaciado del hormigon", "Aplicacion de textura", "Estampado", "Sellado final"],
  },
  {
    slug: "uretano",
    nombre: "Uretano",
    resumen: "Recubrimientos flexibles de alta durabilidad.",
    descripcion:
      "Los sistemas de uretano ofrecen flexibilidad y resistencia al impacto termico, ideales para ambientes con cambios de temperatura o alto desgaste mecanico.",
    aplicaciones: ["Camaras frigorificas", "Plantas de procesamiento", "Areas de alto impacto"],
    beneficios: ["Resistencia al impacto termico", "Flexibilidad y durabilidad", "Bajo mantenimiento"],
    proceso: ["Preparacion de superficie", "Imprimacion", "Aplicacion de uretano", "Curado y control final"],
  },
];