import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { info } from "./publicacionesContenido";
import Buscador from "../../componentes/buscador/Buscador";
import BarraNavegacion from "../../componentes/barraNavegacion/BarraNavegacion";
import PilaPublicaciones from "../../componentes/pilaPublicaciones/PilaPublicaciones";
// import publicaciones from "../../datosPrueba/publicaciones";
import SeccionTitulo from "../../componentes/seccionTitulo/SeccionTitulo";
import { ordenarPublicacionesPorFecha} from "@/utilidades/ordenarPublicaciones";
// Estilos CSS
import styles from "./Publicaciones.module.css";
import { getPublicacionesUser } from "../../servicios/getAxios";

const { categoria, texto, titulo, imagen } = info;

export function Publicaciones() {

  const [publicaciones, setPublicaciones] = useState([])
 
  useEffect(() => {
    const obtenerPublicaciones = async () => {
      try {
        const { data } = await getPublicacionesUser()
                const sortedPublicaciones = ordenarPublicacionesPorFecha(data)
                setPublicaciones(sortedPublicaciones);
      } catch(err) {
        setPublicaciones([])
      }
    }

    obtenerPublicaciones()
  }, [])

  return (
    <>
      <BarraNavegacion />
      <SeccionTitulo
        categoria={categoria}
        titulo={titulo}
        texto={texto}
        imagen={imagen}
      >
        {<Buscador />}
      </SeccionTitulo>
      {
        publicaciones.length > 0 
          ? <Grid className={styles.gridPublicaciones}>    <PilaPublicaciones publicaciones={publicaciones} /> </Grid>
          : <></>
      }
    </>
  );
}
