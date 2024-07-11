import Carousel from "react-material-ui-carousel";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import styles from "./CarruselImagenes.module.css";

function CarruselImagenes({ imagenes }) {
  return (
    <Box className={styles.contenedor}>
      <Carousel
        autoPlay={false}
        navButtonsAlwaysVisible={true}
        navButtonsProps={{
          style: {
            backgroundColor: "rgba(20, 20, 20, 0.3)",
            color: "#4E169D",
          },
        }}
        indicatorContainerProps={{
          style: {
            marginTop: "0px",
          },
        }}
      >
        {imagenes.map((imagen, index) => (
          <CardMedia
            component="img"
            image={imagen.url}
            alt={imagen.alt}
            className={styles.imagen}
            key={index}
          />
        ))}
      </Carousel>
    </Box>
  );
}

export default CarruselImagenes;
