import axiosInstance from "../utilidades/axios.config";

// Crear Producto/Servicio
export const postProductoServicio = async (body) => {
  try {
    const response = await axiosInstance.post(`/producto-servicio`, body, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response;
  } catch (error) {
    console.error(error.message);
  }
};
