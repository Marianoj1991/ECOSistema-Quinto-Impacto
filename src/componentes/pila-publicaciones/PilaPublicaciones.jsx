import Box from "@mui/material/Box";
import TarjetaPublicacion from "../tarjeta-publicacion/TarjetaPublicacion";
import styles from "./PilaPublicaciones.module.css";

function PilaPublicaciones({ publicaciones }) {
  return (
    <Box className={styles.contenedor}>
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
