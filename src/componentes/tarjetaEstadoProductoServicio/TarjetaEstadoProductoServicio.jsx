import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CircleIcon from "@mui/icons-material/Circle";
import Typography from "@mui/material/Typography";

import styles from "./TarjetaEstadoProductoServicio.module.css";

const coloresCirculo = {
  postulado: "grisOscuro",
  aprobado: "verdeExito",
  revisión: "naranja",
  denegado: "rojo",
};

const textosTarjeta1 = {
  postulado: "¡Gracias por querer formar parte de EcoSistema!",
  aprobado: "¡Felicitaciones! Sos parte de EcoSistema",
  revisión: "Devolución de la administración",
  denegado: "Devolución de la administración",
};

const textosTarjeta2 = {
  postulado:
    "La postulación de tu Producto/Servicio fue enviada correctamente.",
  aprobado:
    "Tu Producto/Servicio está incluído dentro de nuestra Red de Impacto.",
};

function TarjetaEstadoProductoServicio({ titulo, estado, explicacion }) {
  return (
    <Box className={styles.contenedor}>
      <Card
        sx={{
          backgroundColor: "grisClaro.main",
        }}
        className={styles.tarjeta}
      >
        <Box
          sx={{ backgroundColor: "violeta.main", color: "blanco.main" }}
          className={styles.encabezado}
        >
          <Typography
            color="blanco.main"
            component="h4"
            className={styles.tituloProductoServicio}
          >
            {titulo}
          </Typography>
          <Button
            endIcon={<ChevronRightIcon />}
            color="blanco"
            onClick={() => console.log("EDITAR")}
            className={styles.botonEditar}
          >
            Editar
          </Button>
        </Box>
        <CardContent
          sx={{
            borderColor: "violeta.main",
          }}
          className={styles.contenidoTarjeta}
        >
          <Box className={styles.estadoPostulacion}>
            <CircleIcon color={coloresCirculo[estado]} />
            <Typography
              color="negro.main"
              component="h6"
              display={"inline-block"}
              className={styles.textoEstadoPostulacion}
            >
              {estado}
            </Typography>
          </Box>
          <Typography
            color="violeta.main"
            component="h5"
            className={styles.textoTarjeta1}
          >
            {textosTarjeta1[estado]}
          </Typography>

          {(estado === "postulado" || estado === "aprobado") && (
            <Typography
              color="negro.main"
              component="h5"
              className={styles.textoTarjeta2}
            >
              {textosTarjeta2[estado]}
            </Typography>
          )}

          {estado !== "aprobado" && (
            <Typography
              color="negro.main"
              component="h5"
              className={styles.textoTarjeta3}
            >
              {estado === "postulado"
                ? "Pronto tendrás más novedades."
                : explicacion}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}

export default TarjetaEstadoProductoServicio;
