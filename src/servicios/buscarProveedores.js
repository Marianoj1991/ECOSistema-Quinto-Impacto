import { proveedoresServicios } from "./proveedoresServicios";

export const buscarProveedorPorNombre = (nombre) => {
  return proveedoresServicios.filter((obj) => obj.nombre === nombre);
};
