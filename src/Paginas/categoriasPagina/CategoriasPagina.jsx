import { useCallback, useEffect, useState } from "react";
import { obtenerProveedoresPorCategoriaAxios } from "../../servicios/getAxios";
import { useSearchParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { info } from "./categoriasContenido";
import BarraNavegacion from "../../componentes/barraNavegacion/BarraNavegacion";
import SeccionTitulo from "../../componentes/seccionTitulo/SeccionTitulo";
import Buscador from "../../componentes/buscador/Buscador";
import { categorias as nombresCategorias } from "../../componentes/botonCategoria/botones-info";
import { BotonCategoria } from "../../componentes";
import PilaProveedores from "../../componentes/pilaProveedores/PilaProveedores";
import SinResultados from "../../componentes/sinResultados/SinResultados";
// import { obtenerProvPorCat } from "../../servicios/buscarProveedoresPorCategoria";

// ESTILOS CSS
import styles from "./CategoriasPagina.module.css";

const { categoria, titulo, texto, imagen } = info;

export default function CategoriasPagina() {
  
  const [ proveedores, setProveedores ] = useState([])
  const [ searchParam ] = useSearchParams()

  const categoriaParam = searchParam.get('categoria')


  const buscarProveeCat = useCallback(async (categoria) => {
    try {
      const proveedor = await obtenerProveedoresPorCategoriaAxios(categoria)
      setProveedores(proveedor)
    } catch (err) {
      console.log(err.message)
      setProveedores([])
    }
    // setProveedores(obtenerProvPorCat(categoria))
  }, []) 

  useEffect(() => {
    if(categoriaParam){
      buscarProveeCat(categoriaParam)
    } else {
      setProveedores([])
    }
  }, [categoriaParam, buscarProveeCat])
  
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
      {categoriaParam === null ? (
        <Box className={styles.contenedorCategorias}>
          <Typography className={styles.titulo}>Categorías</Typography>
          <Box className={styles.contenedorBotones}>
            {nombresCategorias.map((boton) => (
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
      ) : proveedores.length === 0 ? (
        <Box className={styles.sinResultadosContainer}>
          <Typography
            variant='h4'
            className={styles.tituloCategoriaResultados}
          >
            {categoriaParam}
          </Typography>
          <Box className={styles.sinResultados}>
            <SinResultados />
          </Box>
        </Box>
      ) : (
        <>
          <Typography
            className={styles.titulo}
            sx={{ mt: 4, textAlign: 'center' }}
          >
            Categorías
          </Typography>
          <Box className={styles.contenedorCategorias}>
            <Typography
              variant='h4'
              className={styles.tituloCategoriaResultados}
            >
              {categoriaParam}
            </Typography>
            <Typography
              variant='body1'
              className={styles.cuerpoCategoriaResultados}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              accusantium mollitia quos nihil laudantium asperiores sapiente
              porro doloribus perferendis explicabo.
            </Typography>
            <PilaProveedores proveedores={proveedores} />
          </Box>
        </>
      )}
    </Box>
  )
}
