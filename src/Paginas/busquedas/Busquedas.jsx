import { buscarProveedorPorNombre } from "../../servicios/buscarProveedores";
import { Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import BarraNavegacion from "../../componentes/barraNavegacion/BarraNavegacion";
import Buscador from "../../componentes/buscador/Buscador";
import PilaProveedores from "../../componentes/pilaProveedores/PilaProveedores";
import SinResultados from "../../componentes/sinResultados/SinResultados";

// Estilos CSS
import styles from "./Busquedas.module.css";

export function Busquedas() {
  const [proveedores, setProveedores] = useState([]);
  const [ searchParams ] = useSearchParams()

  const queryNombre = searchParams.get('nombre')

  const manejarBusqueda = useCallback((nombreProveedorParam) => {
    const proveedor = buscarProveedorPorNombre(nombreProveedorParam);
    setProveedores(proveedor);
  }, []);

  useEffect(() => {
    manejarBusqueda(queryNombre)
  }, [queryNombre, manejarBusqueda])

  return (
    <>
      <BarraNavegacion />
      <Buscador color="#EAEAEA" />
      <Typography className={styles.textoResultados}>
        Resultados de tu búsqueda
      </Typography>
      {proveedores.length > 0 ? (
        <PilaProveedores proveedores={proveedores} />
      ) : (
        <SinResultados />
      )}
    </>
  );
}
