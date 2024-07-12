import Box from "@mui/material/Box";
import TarjetaProveedor from "../tarjetaProveedor/TarjetaProveedor";

function PilaProveedores({ proveedores }) {
  return (
    <Box>
      {proveedores.map((proveedor) => (
        <TarjetaProveedor
          expandible={true}
          categoria={proveedor.categoria}
          imagenes={proveedor.imagenes}
          nombre={proveedor.nombre}
          tipo={proveedor.tipo}
          ubicacion={proveedor.ubicacion}
          descripcion={proveedor.descripcion}
          key={proveedor.id}
        />
      ))}
    </Box>
  );
}

export default PilaProveedores;
