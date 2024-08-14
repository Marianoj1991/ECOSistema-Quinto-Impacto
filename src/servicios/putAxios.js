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

export const actualizarFeedbackEstado = async (id, data) => {
  try {
    const resp = await axiosInstance.put(`/admin/producto-servicio/revision/${id}`, data)
    return resp
  } catch(err) {
    throw new Error('No se pudo actualizar el estado')
  }
}