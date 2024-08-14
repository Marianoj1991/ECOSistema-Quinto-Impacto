import axiosInstance from "../utilidades/axios.config";

const endpointsProductoServicios = {
  revision_inicial: '/admin/producto-servicio/estado/revision-inicial',
  aprobados: '/admin/producto-servicio/estado/aceptado',
  denegados: '/admin/producto-servicio/estado/denegado',
  en_revision: '/admin/producto-servicio/estado/requiere-cambios',
  cambios_realizados: '/admin/producto-servicio/estado/cambios-realizados'
}

export async function obtenerProveedoresPorNombreAxios(nombre) {
  try {
    const { data } = await axiosInstance(
      `/inicio/producto-servicio/buscar?nombre=${nombre}`
    )
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function obtenerProveedoresPorCategoriaAxios(nombre) {
  try {
    const { data } = await axiosInstance(
      `/inicio/producto-servicio/categoria?nombre=${nombre}`
    )
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function obtenerProveedoresPorEstado(estado) {
  const endpoint = endpointsProductoServicios[estado];
  try {
    const { data } = await axiosInstance.get(endpoint);
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function getCategorias() {
  try {
    const response = await axiosInstance.get("/categorias");
    return response;
  } catch (err) {
    console.log('AQUI')
    console.error(err.message);
  }
}

// Obtener todos los proveedores
export async function getProvedores() {
  try {
    const response = await axiosInstance.get(
      "/producto-servicio/mis-productos-y-servicios"
    );

    return response;
  } catch (err) {
    console.error(err.message);
  }
}

//proveedor por usuario
export async function getProvedoresByUser(userId) {
  try {
    const data = await axiosInstance.get(
      `/producto-servicio/activo/aceptado/${userId}`
    );
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    throw new Error(err.message);
  }
}

//FUNCION PARA REGISTRO Y LOGIN
export const login = async (idToken) => {
  try {
    const res = await axiosInstance.get("/login", {
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
      timeout: 0,
    });
    console.log(res);

    const authorization = res.headers["authorization"];
    const token = authorization.split(" ")[1];

    localStorage.setItem("token", token);

    return { token };
  } catch (error) {
    console.error("Error al iniciar sesión con Google: ", error);

    throw error;
  }
};

export async function getUser(userId) {
  try {
    const data = await axiosInstance.get(`/usuarios/${userId}`);
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

// Obtener Producto/Servicio por ID
export const getProductoById = async (id) => {
  try {
    const response = await axiosInstance.get(
      `/producto-servicio/mis-productos-y-servicios/${id}`
    );

    return response;
  } catch (error) {
    console.error(error.message);
  }
};

// Obtener Producto/Servicio por ID
export const getProductoByIdAdmin = async (id) => {
  try {
    const {data} = await axiosInstance.get(
      `/admin/producto-servicio/${id}`
    )

    return data;
  } catch (error) {
    console.error(error.message);
  }
};

// Obtener paises
export const getPaises = async () => {
  try {
    const response = await axiosInstance.get("/pais");

    return response;
  } catch (error) {
    console.error(error.message);
  }
};

// Obtener provincias
export const getProvincias = async (country) => {
  try {
    const response = await axiosInstance.get(
      `/provincia?nombrePais=${country}`
    );

    return response;
  } catch (error) {
    console.error(error.message);
  }
};
