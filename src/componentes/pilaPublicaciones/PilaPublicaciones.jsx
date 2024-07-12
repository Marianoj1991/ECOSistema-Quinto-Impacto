import Box from "@mui/material/Box";
import TarjetaPublicacion from "../tarjetaPublicacion/TarjetaPublicacion";

function PilaPublicaciones({ publicaciones }) {
  return (
    <Box>
      {publicaciones.map((publicacion) => (
        <TarjetaPublicacion
          titulo={publicacion.titulo}
          fecha={publicacion.fecha}
          cuerpo={publicacion.cuerpo}
          imagenes={publicacion.imagenes}
          key={publicacion.id}
        />
      ))}
    </Box>
  );
}

export default PilaPublicaciones;
