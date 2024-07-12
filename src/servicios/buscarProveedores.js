import { proveedoresServicios } from './proveedoresServicios'

export const buscarProveedorPorNombre = (nombre) => {
  const proveedor = proveedoresServicios.filter(obj => obj.nombre === nombre)
  if (proveedor.length > 0) {
    return proveedor
  } else {
    return []
  }
}