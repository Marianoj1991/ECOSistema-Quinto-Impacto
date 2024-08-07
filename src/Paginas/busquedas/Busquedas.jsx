// import { buscarProveedorPorNombre } from "../../servicios/buscarProveedores";
import { Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import BarraNavegacion from "../../componentes/barraNavegacion/BarraNavegacion";
import Box from "@mui/material/Box";
import Buscador from "../../componentes/buscador/Buscador";
import PilaProveedores from "../../componentes/pilaProveedores/PilaProveedores";
import SinResultados from "../../componentes/sinResultados/SinResultados";

// Estilos CSS
import styles from "./Busquedas.module.css";
import { obtenerProveedoresPorNombreAxios } from "../../servicios/getAxios";

export function Busquedas() {
  const [proveedores, setProveedores] = useState([]);
  const [searchParams] = useSearchParams();

  const queryNombre = searchParams.get("nombre");

  const manejarBusqueda = useCallback(async (nombreProveedorParam) => {
    // const proveedor = buscarProveedorPorNombre(nombreProveedorParam);
    const proveedor = await obtenerProveedoresPorNombreAxios(nombreProveedorParam)
    setProveedores(proveedor);
  }, []);

  useEffect(() => {
    manejarBusqueda(queryNombre);
  }, [queryNombre, manejarBusqueda]);

  return (
    <>
      <BarraNavegacion />
      <Buscador color="#EAEAEA" />
      <Box className={styles.contenedor}>
        <Typography className={styles.textoResultados}>
          Resultados de tu búsqueda
        </Typography>

        {proveedores.length > 0 ? (
          <PilaProveedores proveedores={proveedores} />
        ) : (
          <SinResultados />
        )}
      </Box>
    </>
  );
}
