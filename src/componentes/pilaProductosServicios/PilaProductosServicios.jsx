import Box from "@mui/material/Box";
import TarjetaEstadoProductoServicio from "../tarjetaEstadoProductoServicio/TarjetaEstadoProductoServicio";

function PilaProductosServicios({ productosServicios }) {
  return (
    <Box>
      {productosServicios.map((ps) => (
        <TarjetaEstadoProductoServicio
          titulo={ps.nombre}
          estado={ps.estado}
          explicacion={ps.feedback}
          id={ps.id}
          key={ps.id}
        />
      ))}
    </Box>
  );
}

export default PilaProductosServicios;
