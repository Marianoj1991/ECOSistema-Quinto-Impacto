import Box from "@mui/material/Box";
import TarjetaPublicacion from "../tarjetaPublicacion/TarjetaPublicacion";

function PilaPublicaciones({ publicaciones, onHide, onShow }) {
  
  return (
    <Box>
      {publicaciones?.map((publicacion) => (
        <TarjetaPublicacion
          titulo={publicacion.titulo}
          fecha={publicacion.fechaAlta}
          cuerpo={publicacion.descripcion}
          imagenes={publicacion.imagenes}
          key={publicacion.id}
          id={publicacion.id}
          state={publicacion.state}
          onHide={onHide}
          onShow={onShow}
        />
      ))}
    </Box>
  );
}

export default PilaPublicaciones;
