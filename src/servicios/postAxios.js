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
    throw new Error();
  }
};

// Crear Publicacion
export const postPublicacion = async (data) => {
  console.log(data)
  try {
    const response = await axiosInstance.post('/publicaciones', data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(response)
    return response;
  } catch (error) {
    throw new Error();
  }
};
