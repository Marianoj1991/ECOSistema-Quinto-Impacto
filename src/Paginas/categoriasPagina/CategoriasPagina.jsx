import Box from "@mui/material/Box";
import BarraNavegacion from "../../componentes/barraNavegacion/BarraNavegacion";
import SeccionTitulo from "../../componentes/seccionTitulo/SeccionTitulo";
import Buscador from "../../componentes/buscador/Buscador";

import { info } from "./categoriasContenido";

const { categoria, titulo, texto, imagen } = info

export default function CateogoriasPagina() {
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
    </Box>
  );
}
