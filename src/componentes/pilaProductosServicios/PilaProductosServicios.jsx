import Box from "@mui/material/Box";
import TarjetaEstadoProductoServicio from "../tarjetaEstadoProductoServicio/TarjetaEstadoProductoServicio";

function PilaProductosServicios({ productosServicios }) {
  return (
    <Box>
      {productosServicios.map((ps) => (
        <TarjetaEstadoProductoServicio
          titulo={ps.titulo}
          estado={ps.estado}
          explicacion={ps.explicacion}
          key={ps.id}
        />
      ))}
    </Box>
  );
}

export default PilaProductosServicios;
