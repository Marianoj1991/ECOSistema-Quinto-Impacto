import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import WhatsAppIcon from "../../utilidades/icon/WhatsAppIcon";
import InstagramIcon from "../../utilidades/icon/InstagramIcon";
import FacebookIcon from "../../utilidades/icon/FacebookIcon";
import MailIcon from "../../utilidades/icon/MailIcon";
import styles from "./TarjetaProveedor.module.css";

function TarjetaProveedor({
  categoria,
  url,
  alt,
  titulo,
  tipo,
  ubicacion,
  descripcion,
}) {
  return (
    <Box className={styles.contenedor}>
      <Card
        sx={{ backgroundColor: "grisClaro.main" }}
        className={styles.tarjeta}
      >
        <Box className={styles.contenedorBotonCerrar}>
          <IconButton
            color="negro"
            size="medium"
            onClick={() => console.log("Cerrado")}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <Box className={styles.contenedorCategoria}>
          <Typography
            color="violeta.main"
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
            image={url}
            alt={alt}
            className={styles.imagen}
          />
        </Box>
        <CardContent>
          <Typography
            color="negro.main"
            component="h5"
            className={styles.titulo}
          >
            {titulo}
          </Typography>
          <Typography
            color="violeta.main"
            component="h6"
            className={styles.tipo}
          >
            {tipo}
          </Typography>
          <Box className={styles.contenedorUbicacion}>
            <LocationOnOutlinedIcon color="violeta" />
            <Typography
              color="negro.main"
              component="p"
              className={styles.ubicacion}
            >
              {ubicacion}
            </Typography>
          </Box>
          <Typography
            color="negro.main"
            component="p"
            className={styles.descripcion}
          >
            {descripcion}
          </Typography>
          <Typography
            color="negro.main"
            component="p"
            className={styles.contactanos}
          >
            Contactanos
          </Typography>
        </CardContent>
        <CardActions className={styles.contenedorBotonesRedesSociales}>
          <Box className={styles.botonRedSocial}>
            <WhatsAppIcon />
            <Typography
              color="negro.main"
              component="p"
              className={styles.redSocial}
            >
              WhatsApp
            </Typography>
          </Box>
          <Box className={styles.botonRedSocial}>
            <InstagramIcon />
            <Typography
              color="negro.main"
              component="p"
              className={styles.redSocial}
            >
              Instagram
            </Typography>
          </Box>
          <Box className={styles.botonRedSocial}>
            <FacebookIcon />
            <Typography
              color="negro.main"
              component="p"
              className={styles.redSocial}
            >
              Facebook
            </Typography>
          </Box>
          <Box className={styles.botonRedSocial}>
            <MailIcon />
            <Typography
              color="negro.main"
              component="p"
              className={styles.redSocial}
            >
              Mail
            </Typography>
          </Box>
        </CardActions>
      </Card>
    </Box>
  );
}

export default TarjetaProveedor;
