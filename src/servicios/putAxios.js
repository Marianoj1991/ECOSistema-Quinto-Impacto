import axiosInstance from "../utilidades/axios.config";


//actualizar publicacion
export const putProducto= async (id, data) => {
    try {
  const publicacionData = await axiosInstance.put(`/producto-servicio/activo/${id}`, data)
  console.log(publicacionData.data)
  return publicacionData;
  
    }catch (error) {
      console.error("Error: ", error);
  
      throw error;
    }
  }