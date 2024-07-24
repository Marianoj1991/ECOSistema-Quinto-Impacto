import { Grid } from "@mui/material";
import { info } from "./publicacionesContenido";
import Buscador from "../../componentes/buscador/Buscador";
import BarraNavegacion from "../../componentes/barraNavegacion/BarraNavegacion";
import PilaPublicaciones from "../../componentes/pilaPublicaciones/PilaPublicaciones";
import publicaciones from "../../datosPrueba/publicaciones";
import SeccionTitulo from "../../componentes/seccionTitulo/SeccionTitulo";

// Estilos CSS
import styles from "./Publicaciones.module.css";

const { categoria, texto, titulo, imagen } = info;

export function Publicaciones() {
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
      <Grid className={styles.gridPublicaciones}>
        <PilaPublicaciones publicaciones={publicaciones} />
      </Grid>
    </>
  );
}
