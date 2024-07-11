import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import CarruselImagenes from "../carrusel-imagenes/CarruselImagenes";
import styles from "./TarjetaPublicacion.module.css";

function TarjetaPublicacion({ titulo, fecha, cuerpo, imagenes }) {
  const [expandido, setExpandido] = useState(false);

  const manejarExpansion = () => setExpandido(!expandido);

  return (
    <Box className={styles.contenedor}>
      <Card
        sx={{ backgroundColor: "grisClaro.main" }}
        className={styles.tarjeta}
      >
        <CardHeader title={titulo} className={styles.titulo} />
        <CarruselImagenes imagenes={imagenes} />
        <CardContent>
          <Typography
            color="negro.main"
            component="h6"
            className={styles.fecha}
          >
            {fecha}
          </Typography>
          <Collapse in={expandido} timeout="auto" collapsedSize={100}>
            <Typography
              color="negro.main"
              component="p"
              className={styles.cuerpo}
              noWrap
            >
              {cuerpo}
            </Typography>
          </Collapse>
        </CardContent>
        <CardActions className={styles.contenedorBoton}>
          <Button
            color="violeta"
            onClick={manejarExpansion}
            className={styles.boton}
          >
            {`Ver ${expandido ? "menos" : "más"}`}
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default TarjetaPublicacion;
