import axiosInstance from "../utilidades/axios.config";

// Editar Producto/Servicio
export const putProductoServicio = async (id, body) => {
  try {
    const response = await axiosInstance.put(`/producto-servicio/${id}`, body, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response;
  } catch (error) {
    throw new Error();
  }
};

// Editar Publicaciones
export const putPublicaciones = async (publicaionId, body) => {
  try {
    const response = await axiosInstance.put(`/publicaciones/${publicaionId}`, body, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response;
  } catch (error) {
    throw new Error();
  }
};
