import Box from "@mui/material/Box";
import TarjetaProveedor from "../tarjeta-proveedor/TarjetaProveedor";

function PilaPublicaciones({ proveedores }) {
  return (
    <Box>
      {proveedores.map((proveedor, index) => (
        <TarjetaProveedor
          expandible={true}
          categoria={proveedor.categoria}
          imagenes={proveedor.imagenes}
          nombre={proveedor.nombre}
          tipo={proveedor.tipo}
          ubicacion={proveedor.ubicacion}
          descripcion={proveedor.descripcion}
          key={index}
        />
      ))}
    </Box>
  );
}

export default PilaPublicaciones;
