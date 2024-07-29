import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import CarruselImagenes from "../carruselImagenes/CarruselImagenes";
import CloseIcon from "@mui/icons-material/Close";
import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FacebookIcon from "../../estaticos/icon/FacebookIcon";
import IconButton from "@mui/material/IconButton";
import InstagramIcon from "../../estaticos/icon/InstagramIcon";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import MailIcon from "../../estaticos/icon/MailIcon";
import Typography from "@mui/material/Typography";
import WhatsAppIcon from "../../estaticos/icon/WhatsAppIcon";

import styles from "./TarjetaProveedor.module.css";

function TarjetaProveedor({
  expandible,
  categoria,
  imagenes,
  nombre,
  tipo,
  // ubicacion,
  ciudad,
  provincia,
  pais,
  descripcion,
}) {
  const [expandido, setExpandido] = useState(false);

  const manejarExpansion = () => setExpandido(!expandido);

  return (
    <Box className={styles.contenedor}>
      <Card
        sx={{ backgroundColor: "grisClaro.main" }}
        className={!expandible ? styles.tarjeta : styles.tarjetaExpandible}
      >
        {!expandible && (
          <Box className={styles.contenedorBotonCerrar}>
            <IconButton
              color="negro"
              size="medium"
              onClick={() => console.log("Cerrado")}
              aria-label="cerrar"
            >
              <CloseIcon />
            </IconButton>
          </Box>
        )}

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
        {/* <CarruselImagenes imagenes={imagenes} /> */}

        {/* ESTE DIV ES TEMPORAL */}
        <div className={styles.contenedorImagen}>
          <img src={imagenes} className={styles.imagen} />
        </div>
        <CardContent className={styles.contenedorContenido1}>
          <Typography
            color="negro.main"
            component="h5"
            className={styles.nombre}
          >
            {nombre}
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
              { ciudad }, { provincia }, { pais }
              {/* {ubicacion} */}
            </Typography>
          </Box>
        </CardContent>

        {!expandible && (
          <>
            <CardContent className={styles.contenedorContenido2}>
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
          </>
        )}

        {expandible && (
          <>
            <Collapse in={expandido} timeout="auto" collapsedSize={0}>
              <CardContent className={styles.contenedorContenido2}>
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
            </Collapse>
            <CardActions className={styles.contenedorBotonDesplegable}>
              <IconButton
                color="violeta"
                size="small"
                onClick={manejarExpansion}
                aria-label="expandir"
              >
                <ExpandMoreIcon
                  sx={{
                    width: "30px",
                    height: "30px",
                    transform: `${
                      !expandido ? "rotate(0deg)" : "rotate(180deg)"
                    }`,
                    transition: "transform 300ms ease-in-out",
                  }}
                />
              </IconButton>
            </CardActions>
          </>
        )}
      </Card>
    </Box>
  );
}

export default TarjetaProveedor;
