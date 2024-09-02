import axiosInstance from "../utilidades/axios.config";

// Crear Producto/Servicio
export const postProductoServicio = async (body) => {
  try {
    const response = await axiosInstance.post(
      `/perfil/producto-servicio`,
      body,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response;
  } catch (error) {
    throw new Error();
  }
};

// Crear Publicacion
export const postPublicacion = async (data) => {
  console.log(data);
  try {
    const response = await axiosInstance.post("admin/publicacion", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response;
  } catch (error) {
    throw new Error();
  }
};

// // Crear Publicacion
// export const postUbicacion = async (data) => {
//   const { latitud, longitud } = data;

//   try {
//     const response = await axiosInstance.get('/inicio/producto-servicio/cercanos', {     params: {
//       latitud: latitud,
//       longitud: longitud,
//     }},

//     );
//     console.log("esto esssss",response);
//     return response;
//   } catch (error) {
//     console.error(error);
//     throw new Error();
//   }
// };
