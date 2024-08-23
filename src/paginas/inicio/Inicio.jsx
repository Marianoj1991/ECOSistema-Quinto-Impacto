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

// Estilos CSS
import styles from "./Inicio.module.css";

const { categoria, titulo, imagen } = info;

export function Inicio() {
  const [user, setUser] = useState(null);
  const [publicaciones, setPublicaciones] = useState([]);
  const [productsServices, setProductsServices] = useState([]);
  const [error, setError] = useState(null);

  const seleccionarCuatroAleatorios = (productos) => {
    return productos.sort(() => 0.5 - Math.random()).slice(0, 4);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Obtener productos recomendados
        const { data: productos } = await getProductoSercvivioInicio();
        setProductsServices(seleccionarCuatroAleatorios(productos));
        
        // Obtener publicaciones recientes
        const { data } = await getPublicacionesUser();
        const sortedPublicaciones = ordenarPublicacionesPorFecha(data);
        const lasTresPublicacionesRecientes = sortedPublicaciones.slice(0, 3);
        setPublicaciones(lasTresPublicacionesRecientes);
      } catch (error) {
        console.error("Error al obtener productos o servicios:", error);
        setError(error.message);
      }
    };

    fetchData();

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
      <Proveedores proveedores={productsServices} />
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
