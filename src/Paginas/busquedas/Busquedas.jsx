import { Grid, Typography } from "@mui/material";
import BarraNavegacion from "../../componentes/header/BarraNavegacion";
import Buscador from "../../componentes/buscador/Buscador";
import SinResultados from "../../componentes/Sin-resultados/SinResultados"; 

// Estilos CSS
import styles from './Busquedas.module.css'
import { useParams } from "react-router-dom";
import { buscarProveedorPorNombre } from "../../servicios/buscarProveedores";
import { useEffect, useRef, useState } from "react";


export function Busquedas() {

  const [ proveedores, setProveedores ] = useState([])
  const { nombre } = useParams()
  const esPrimerRenderizado = useRef(true)

  const manejarBusqueda = (nombreProveedorParam) => {
    console.log(nombreProveedorParam)
    const proveedor = buscarProveedorPorNombre(nombreProveedorParam)
    setProveedores(proveedor)
  }

    useEffect(() => {
      if (esPrimerRenderizado.current) {
        esPrimerRenderizado.current = false
        manejarBusqueda(nombre)
      }
    }, [nombre])

  return (
    <>
      <BarraNavegacion />
      <Grid
        container
        direction='column'
        rowSpacing={4}
        p={2}
      >
        <Grid
          item
          mb={-2}
        >
          <Buscador
            manejarBusqueda={manejarBusqueda}
            color='#eaeaea'
          />
        </Grid>

        <Grid item>
          <Typography className={styles.textoResultados}>
            Resultados de tu búsqueda
          </Typography>
        </Grid>

        <Grid item>
          {proveedores.length > 0 ? (
            <p>Hola</p>
          ) : (
            <SinResultados></SinResultados>
          )}
        </Grid>
      </Grid>
    </>
  )
}