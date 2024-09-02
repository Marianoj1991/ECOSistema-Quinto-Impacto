import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CircleIcon from "@mui/icons-material/Circle";
import Typography from "@mui/material/Typography";

import styles from "./TarjetaEstadoProductoServicio.module.css";

// PENDIENTE: Ajustar nombre de estados con el Back
const etiquetasEstado = {
  REVISION_INICIAL: "Postulado",
  ACEPTADO: "Aprobado",
  REQUIERE_CAMBIOS: "En revisión",
  CAMBIOS_REALIZADOS: "Cambios realizados",
  DENEGADO: "Denegado",
};

const coloresCirculo = {
  REVISION_INICIAL: "grisOscuro",
  ACEPTADO: "verdeExito",
  REQUIERE_CAMBIOS: "naranja",
  DENEGADO: "rojo",
};

const textosTarjeta1 = {
  REVISION_INICIAL: "¡Gracias por querer formar parte de EcoSistema!",
  ACEPTADO: "¡Felicitaciones! Sos parte de EcoSistema",
  REQUIERE_CAMBIOS: "Devolución de la administración",
  DENEGADO: "Devolución de la administración",
};

const textosTarjeta2 = {
  REVISION_INICIAL:
    "La postulación de tu Producto/Servicio fue enviada correctamente.",
  ACEPTADO:
    "Tu Producto/Servicio está incluído dentro de nuestra Red de Impacto.",
};

function TarjetaEstadoProductoServicio({ titulo, estado, explicacion, id }) {
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
          <Link to={`/editar/${id}`}>
            <Button
              endIcon={<ChevronRightIcon />}
              color="blanco"
              className={styles.botonEditar}
            >
              Editar
            </Button>
          </Link>
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
              {etiquetasEstado[estado]}
            </Typography>
          </Box>
          <Typography
            color="violeta.main"
            component="h5"
            className={styles.textoTarjeta1}
          >
            {textosTarjeta1[estado]}
          </Typography>

          {(estado === "REVISION_INICIAL" || estado === "ACEPTADO") && (
            <Typography
              color="negro.main"
              component="h5"
              className={styles.textoTarjeta2}
            >
              {textosTarjeta2[estado]}
            </Typography>
          )}

          {estado !== "ACEPTADO" && (
            <Typography
              color="negro.main"
              component="h5"
              className={styles.textoTarjeta3}
            >
              {estado === "REVISION_INICIAL"
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
