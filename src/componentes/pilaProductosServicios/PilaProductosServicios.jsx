import Box from "@mui/material/Box";
import TarjetaEstadoProductoServicio from "../tarjetaEstadoProductoServicio/TarjetaEstadoProductoServicio";

function PilaProductosServicios({ productosServicios }) {
  
  return (
    <Box>
      
      {productosServicios.map((ps, index,) => (
        
        <TarjetaEstadoProductoServicio
          titulo={ps.nombre}
          estado={ps.estado}
          explicacion={ps.feedback}
          key={index}
          id={ps.id}
        />

      ))}
    </Box>
  );
}

export default PilaProductosServicios;
