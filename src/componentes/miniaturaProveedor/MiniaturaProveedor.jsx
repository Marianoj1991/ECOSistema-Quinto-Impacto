import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import styles from "./MiniaturaProveedor.module.css";

function MiniaturaProveedor({
  categoria,
  imagenUrl,
  imagenAlt,
  nombre,
  tipo,
  ubicacionCorta,
}) {
  return (
    <Box className={styles.contenedor}>
      <Card
        sx={{ backgroundColor: "grisClaro.main" }}
        className={styles.tarjeta}
      >
        <Box className={styles.contenedorCategoria}>
          <Typography
            color="violeta.main"
            backgroundColor="blanco.main"
            border={2}
            borderColor="verde.main"
            component="h6"
            className={styles.categoria}
          >
            {categoria}
          </Typography>
        </Box>
        <Box className={styles.contenedorImagen}>
          <CardMedia
            component="img"
            image={imagenUrl}
            alt={imagenAlt}
            className={styles.imagen}
          />
        </Box>
        <CardContent className={styles.contenedorContenido}>
          <Typography
            color="negro.main"
            component="h5"
            className={styles.nombre}
            noWrap
          >
            {nombre}
          </Typography>
          <Typography
            color="negro.main"
            component="h6"
            className={styles.tipo}
            noWrap
          >
            {tipo}
          </Typography>
          <Box className={styles.contenedorUbicacion}>
            <LocationOnOutlinedIcon color="violeta" />
            <Typography
              color="negro.main"
              component="p"
              className={styles.ubicacion}
              noWrap
            >
              {ubicacionCorta}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default MiniaturaProveedor;
