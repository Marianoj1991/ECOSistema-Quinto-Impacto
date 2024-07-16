import Box from "@mui/material/Box";
import BarraNavegacion from "../../componentes/barraNavegacion/BarraNavegacion";
import SeccionTitulo from "../../componentes/seccionTitulo/SeccionTitulo";
import Buscador from "../../componentes/buscador/Buscador";
import { info } from "./categoriasContenido";
import { Typography } from "@mui/material";
import { infoBotones } from "../../componentes/botonCategoria/botones-info";
import { BotonCategoria } from "../../componentes";
import { useEffect, useState } from "react";
import { obtenerProvPorCat } from "../../servicios/buscarProveedoresPorCategoria";

// ESTILOS CSS
import styles from "./CategoriasPagina.module.css";
import { useSearchParams } from "react-router-dom";
import PilaProveedores from "../../componentes/pilaProveedores/PilaProveedores";

const { categoria, titulo, texto, imagen } = info;

export default function CategoriasPagina() {
  
  const [ proveedores, setProveedores ] = useState([])
  const [searchParam] = useSearchParams()
  
  const categoriaParam = searchParam.get('categoria')

  const buscarProveeCat = (categoria) => {
    setProveedores(obtenerProvPorCat(categoria))
  } 

  useEffect(() => {
    buscarProveeCat(categoriaParam)
  }, [categoriaParam])
  
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
      {
        proveedores.length === 0 
          ? <Box className={styles.contenedorCategorias}>
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
          :
          <>
            <Typography className={styles.titulo} sx={{mt: 4, textAlign: 'center', }}>Categorías</Typography>
            <Box className={styles.contenedorCategorias}>
              <Typography variant="h4" className={styles.tituloCategoriaResultados}>{categoriaParam}</Typography>
              <Typography variant="body1" className={styles.cuerpoCategoriaResultados} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni accusantium mollitia quos nihil laudantium asperiores sapiente porro doloribus perferendis explicabo.</Typography>
              <PilaProveedores proveedores={proveedores} />
            </Box>
          </> 
      }
    </Box>
  )
}
