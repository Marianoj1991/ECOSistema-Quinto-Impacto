import Box from "@mui/material/Box";
import TarjetaProveedor from "../tarjetaProveedor/TarjetaProveedor";

function PilaProveedores({ proveedores }) {
  return (
    <Box>
      {proveedores.map((proveedor, index) => (
        <TarjetaProveedor
          expandible={true}
          categoria={proveedor.categoria}
          imagenes={proveedor.imagen}
          nombre={proveedor.nombre}
          tipo={proveedor.tipo}
          ciudad={proveedor.ciudad}
          provincia={proveedor.provincia}
          pais={proveedor.pais}
          descripcion={proveedor.descripcion}
          key={index}
        />
      ))}
    </Box>
  );
}

export default PilaProveedores;
