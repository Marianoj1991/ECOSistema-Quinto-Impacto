
import axiosInstance from "../utilidades/axios.config";

// http://localhost:8080/proveedores/buscar?proveedorNombre=lavanda

//localhost:8080/proveedores/categoria?nombre=bienestar

export async function obtenerProveedoresPorNombreAxios(nombre) {
  try {
    const { data } = await axiosInstance(
      `/proveedores/buscar?proveedorNombre=${nombre}`
    )
    console.log(data)
    return data
  } catch (err) {
   throw new Error(err.message)
  }
} 

export async function obtenerProveedoresPorCategoriaAxios (nombre) {

    try {
        const { data } = await axiosInstance(
          `/proveedores/categoria?nombre=${nombre}`
        )
        return data
    } catch(err) {
        throw new Error(err.message)
    }

} 

export async function getCategoriasAxios () {
    try {
        const {data} = await axiosInstance.get('/categorias')
        return data
    } catch(err) {
      throw new Error(err.message)
    }
}

