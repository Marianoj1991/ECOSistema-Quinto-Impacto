import axiosInstance from "../utilidades/axios.config";

// http://localhost:8080/proveedores/buscar?proveedorNombre=lavanda

//localhost:8080/proveedores/categoria?nombre=bienestar

export async function obtenerProveedoresPorNombreAxios(nombre) {
  try {
    const { data } = await axiosInstance(
      `/producto-servicio/activo/aceptado/buscar?nombre=${nombre}`
    );
    console.log(data);
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function obtenerProveedoresPorCategoriaAxios(nombre) {
  try {
    const { data } = await axiosInstance(
      `/producto-servicio/activo/aceptado/categoria?nombre=${nombre}`
    );
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function getCategoriasAxios() {
  try {
    const { data } = await axiosInstance.get("/categorias");
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

//Todos los proveedores
export async function getProvedores() {
  try {
    const data = await axiosInstance.get("/producto-servicio/activo/aceptado");
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

//proveedor por usuario
export async function getProvedoresByUser(userId) {
  try {
    const data = await axiosInstance.get(`/producto-servicio/activo/aceptado/${userId}` );
    console.log(data);
    return data;
  } catch (err) {
    console.log(err)
    throw new Error(err.message);
  }
}

//FUNCION PARA REGISTRO Y LOGIN
export const login = async (idToken) => {
  try {
    console.log(idToken);
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

//producto o sevicio por ID
export const getProductoById = async (id) => {
  try {
    const productServiceData = await axiosInstance.get(`/producto-servicio/activo/aceptado/${id}`);
    return productServiceData;
  } catch (error) {
    console.error("Error: ", error);

    throw error;
  }
};

//obtener paises
export const getPaises = async () => {
  try {
    const paisData = await axiosInstance.get("/pais");
    return paisData;
  } catch (error) {
    console.error("Error: ", error);

    throw error;
  }
};

//obtener provincia
export const getProvincia = async (country) => {
  try {
    const provinciaData = await axiosInstance.get(
      `/provincia?nombre=${country}`
    );
    console.log(provinciaData.data);
    return provinciaData;
  } catch (error) {
    console.error("Error provincia: ", error);

    throw error;
  }
};
