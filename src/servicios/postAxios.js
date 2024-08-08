
import axiosInstance from "../utilidades/axios.config";


//actualizar publicacion
export const putProducto= async (data) => {
    try {
  const publicacionData = await axiosInstance.put(`/producto-servicio/${data}`)
  console.log(publicacionData.data)
  return publicacionData;
  
    }catch (error) {
      console.error("Error: ", error);
  
      throw error;
    }
  }