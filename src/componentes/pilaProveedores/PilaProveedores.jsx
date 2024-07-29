import Box from "@mui/material/Box";
import TarjetaProveedor from "../tarjetaProveedor/TarjetaProveedor";

function PilaProveedores({ proveedores }) {
  return (
    <Box>
      {proveedores.map((proveedor, index) => (
        <TarjetaProveedor
          expandible={true}
          categoria={proveedor.categoria}
          // imagenes={proveedor.imagenes}
          imagenes={proveedor.imagen}
          nombre={proveedor.nombre}
          tipo={proveedor.tipo}
          // ubicacion={proveedor.ubicacion}
          ciudad={proveedor.ciudad}
          provincia={proveedor.provincia}
          pais={proveedor.pais}
          descripcion={proveedor.descripcion}
          // key={proveedor.id}
          key={index}
        />
      ))}
    </Box>
  );
}

export default PilaProveedores;
