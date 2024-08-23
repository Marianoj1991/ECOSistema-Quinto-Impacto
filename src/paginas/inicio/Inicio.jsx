import { Categorias } from "../../componentes";
import { info } from "./inicioContenido";
import BarraNavegacion from "../../componentes/barraNavegacion/BarraNavegacion";
import Box from "@mui/material/Box";
import Buscador from "../../componentes/buscador/Buscador";
import EmpresasImpacto from "../../componentes/empresasImpacto/EmpresasImpacto";
import InvitacionRegistro from "../../componentes/invitacionRegistro/InvitacionRegistro";
import PilaPublicaciones from "../../componentes/pilaPublicaciones/PilaPublicaciones";
import Proveedores from "../../componentes/arregloProveedores/ArregloProveedores";
import SeccionTitulo from "../../componentes/seccionTitulo/SeccionTitulo";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import { getPublicacionesUser, getProductoSercvivioInicio } from "@/servicios/getAxios";
import { ordenarPublicacionesPorFecha } from "@/utilidades/ordenarPublicaciones";
import axios from "axios";

// Estilos CSS
import styles from "./Inicio.module.css";

const { categoria, titulo, imagen } = info;

export function Inicio() {
  const [user, setUser] = useState(null);
  const [publicaciones, setPublicaciones] = useState([]);
  const [productsServices, setProductsServices] = useState([]);
  const [location, setLocation] = useState({ lat: null, lng: null });
  const [error, setError] = useState(null);
  const [recomendacionesLocales, setRecomendacionesLocales] = useState(false);

  const getPublicacionesLista = async () => {
    const { data } = await getPublicacionesUser();
    const sortedPublicaciones = ordenarPublicacionesPorFecha(data);
    const lasTresPublicacionesRecientes = sortedPublicaciones.slice(0, 3);
    setPublicaciones(lasTresPublicacionesRecientes);
  };

  const obtenerUbicacion = async (lat, lng) => {
    try {
      const response = await axios.get("https://nominatim.openstreetmap.org/reverse", {
        params: {
          lat,
          lon: lng,
          format: "json",
        },
      });
      const { address } = response.data;
      const ciudad = address.city_district;
      const provincia = address.state;
      console.log()
      return { ciudad, provincia };
    } catch (error) {
      console.error("Error al obtener la ubicación:", error);
      return null;
    }
  };

  const compararUbicacionConProductos = (ciudad, provincia, productos) => {
    return productos.filter((producto) => {
      return producto.ciudad === ciudad || producto.provincia === provincia;
    });
  };

  const seleccionarCuatroAleatorios = (productos) => {
    return productos.sort(() => 0.5 - Math.random()).slice(0, 4);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: productos } = await getProductoSercvivioInicio();
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            async (position) => {
              const ubicacion = {
                latitud: position.coords.latitude,
                longitud: position.coords.longitude,
              };
              setLocation(ubicacion);

              const { ciudad, provincia } = await obtenerUbicacion(ubicacion.latitud, ubicacion.longitud);
              if (ciudad && provincia) {
                const productosFiltrados = compararUbicacionConProductos(ciudad, provincia, productos);

                if (productosFiltrados.length > 0) {
                  setProductsServices(productosFiltrados);
                  setRecomendacionesLocales(true);
                } else {
                  setProductsServices(seleccionarCuatroAleatorios(productos));
                  setRecomendacionesLocales(false);
                }
              }
            },
            (error) => {
              console.error("Error en getCurrentPosition:", error);
              setError(error.message);
              setProductsServices(seleccionarCuatroAleatorios(productos));
              setRecomendacionesLocales(false);
            }
          );
        } else {
          console.error("Geolocation no es compatible con este navegador.");
          setError("Geolocation is not supported by this browser.");
          setProductsServices(seleccionarCuatroAleatorios(productos));
          setRecomendacionesLocales(false);
        }
      } catch (error) {
        console.error("Error al obtener productos o servicios:", error);
        setError(error.message);
      }
    };

    fetchData();
    getPublicacionesLista();

    const userFromSession = sessionStorage.getItem("user");
    if (!userFromSession) {
      setUser(null);
    } else {
      setUser(JSON.parse(userFromSession));
    }
  }, []);

  return (
    <>
      <BarraNavegacion />
      <SeccionTitulo categoria={categoria} titulo={titulo} imagen={imagen}>
        <Buscador color="#FAFAFA" />
      </SeccionTitulo>
      <EmpresasImpacto />
      {user ? null : <InvitacionRegistro />}
      <Proveedores proveedores={productsServices} recomendacionesLocales={recomendacionesLocales} />
      <Categorias />
      <Box className={styles.publicaciones}>
        <Typography className={styles.titulo}>Publicaciones</Typography>
        <Typography className={styles.subtitulo}>
          Impulsando transformaciones
        </Typography>
      </Box>
      <PilaPublicaciones publicaciones={publicaciones} />
    </>
  );
}