import axiosInstance from "../utilidades/axios.config";

export const getPublicacionUsuarioById = async (id) => {
    try {
      const response = await axiosInstance.patch(
        `inicio/publicacion/${id}/incrementar-visualizacion`
      );
  
      return response;
    } catch (error) {
      console.error(error.message);
    }
  };
  