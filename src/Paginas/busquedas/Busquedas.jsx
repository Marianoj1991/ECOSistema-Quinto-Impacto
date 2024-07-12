import { Typography } from "@mui/material";
import BarraNavegacion from "../../componentes/header/BarraNavegacion";
import Buscador from "../../componentes/buscador/Buscador";
import SinResultados from "../../componentes/Sin-resultados/SinResultados"; 

// Estilos CSS
import styles from './Busquedas.module.css'
import { useParams } from "react-router-dom";
import { buscarProveedorPorNombre } from "../../servicios/buscarProveedores";
import { useEffect, useState } from "react";
import PilaProveedores from "../../componentes/pila-proveedores/PilaProveedores";



export function Busquedas() {

  const [ proveedores, setProveedores ] = useState([])
  let { nombre } = useParams()

  const manejarBusqueda = (nombreProveedorParam) => {
    console.log(nombreProveedorParam)
    const proveedor = buscarProveedorPorNombre(nombreProveedorParam)
    setProveedores(proveedor)
  }

  useEffect(() => {
      manejarBusqueda(nombre)
  }, [nombre])

  return (
    <>
      <BarraNavegacion />
      <Buscador
        manejarBusqueda={manejarBusqueda}
        color='#eaeaea'
      />
      <Typography className={styles.textoResultados}>
        Resultados de tu búsqueda
      </Typography>
      {proveedores.length > 0 ? (
            <PilaProveedores proveedores={proveedores} />
      ) : (
        <SinResultados />      
      )}
    </>
  )
}