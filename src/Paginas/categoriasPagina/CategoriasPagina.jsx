import Box from "@mui/material/Box";
import BarraNavegacion from "../../componentes/barraNavegacion/BarraNavegacion";
import SeccionTitulo from "../../componentes/seccionTitulo/SeccionTitulo";
import Buscador from "../../componentes/buscador/Buscador";
import { info } from "./categoriasContenido";
import { Typography } from "@mui/material";

import { infoBotones } from "../../componentes/botonCategoria/botones-info";

// ESTILOS CSS
import styles from "./CategoriasPagina.module.css";
import { BotonCategoria } from "../../componentes";

const { categoria, titulo, texto, imagen } = info;

export default function CategoriasPagina() {
  return (
    <Box>
      <BarraNavegacion />
      <SeccionTitulo
        categoria={categoria}
        titulo={titulo}
        texto={texto}
        imagen={imagen}
      >
        {<Buscador />}
      </SeccionTitulo>
      <Box className={styles.contenedorCategorias}>
        <Typography className={styles.titulo}>Categorías</Typography>
        <Box className={styles.contenedorBotones}>
          {infoBotones.map((boton) => (
            <BotonCategoria
              key={boton.id}
              icono={boton.icono}
              texto={boton.texto}
              border={false}
              seccCategorias={true}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
