import Box from "@mui/material/Box";
import TarjetaPublicacion from "../tarjeta-publicacion/TarjetaPublicacion";

function PilaPublicaciones({ publicaciones }) {
  return (
    <Box>
      {publicaciones.map((publicacion, index) => (
        <TarjetaPublicacion
          titulo={publicacion.titulo}
          fecha={publicacion.fecha}
          cuerpo={publicacion.cuerpo}
          imagenes={publicacion.imagenes}
          key={index}
        />
      ))}
    </Box>
  );
}

export default PilaPublicaciones;
