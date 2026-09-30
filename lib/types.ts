export type Servicio = {
  slug: string;
  nombre: string;
  resumen: string;
  descripcion: string;
  aplicaciones: string[];
  beneficios: string[];
  proceso: string[];
  color: string;
  photo: string;
  galeria?: string[];
};

export type Proyecto = {
  slug: string;
  titulo: string;
  servicioSlug: string;
  ubicacion: string;
  areaM2?: number;
  descripcion: string;
  proceso?: string;
  destacado?: boolean;
};
