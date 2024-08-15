import BarraNavegacion from "@/componentes/barraNavegacion/BarraNavegacion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./PublicacionesAdmin.module.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PilaPublicaciones from "@/componentes/pilaPublicaciones/pilaPublicaciones";
import { getPublicacionesAdmin } from "@/servicios/getAxios";
import { hidePublicacion, showPublicacion } from "@/servicios/putAxios";
import Alerta from "@/componentes/alerta/Alerta";

const PublicacionesAdmin = () => {
  const [publicaciones, setPublicaciones] = useState([]);
  const [alertMessage, setAlertMessage] = useState("");
  const [openSuccessAlert, setOpenSuccessAlert] = useState(false);
  const [openErrorAlert, setOpenErrorAlert] = useState(false);
  const [lastAction, setLastAction] = useState(null); // Guarda la última acción realizada
  const [currentId, setCurrentId] = useState(null); // Guarda el ID de la publicación en la última acción

  const getPublicacionesLista = async () => {
    try {
      const publicacionesAdmin = await getPublicacionesAdmin();
      setPublicaciones(publicacionesAdmin.data);
    } catch (error) {
      console.error("Error al obtener las publicaciones:", error);
    }
  };

  useEffect(() => {
    getPublicacionesLista();
  }, []);

  const handleHide = async (id) => {
    try {
      await hidePublicacion(id);
      setAlertMessage("Publicación ocultada con éxito");
      setOpenSuccessAlert(true);
      // Actualizar la lista de publicaciones después de ocultar
      getPublicacionesLista();
    } catch (error) {
      console.error("Error al ocultar la publicación:", error);
      setAlertMessage("Error al ocultar la publicación");
      setLastAction("hide");
      setCurrentId(id);
      setOpenErrorAlert(true);
    }
  };

  const handleShow = async (id) => {
    try {
      await showPublicacion(id);
      setAlertMessage("Publicación mostrada con éxito");
      setOpenSuccessAlert(true);
      // Actualizar la lista de publicaciones después de mostrar
      getPublicacionesLista();
    } catch (error) {
      console.error("Error al mostrar la publicación:", error);
      setAlertMessage("Error al mostrar la publicación");
      setLastAction("show");
      setCurrentId(id);
      setOpenErrorAlert(true);
    }
  };

  const handleAccept = () => {
    setOpenSuccessAlert(false);
  };

  const handleCancel = () => {
    setOpenErrorAlert(false);
  };

  const handleRetry = () => {
    setOpenErrorAlert(false);
    if (lastAction === "hide") {
      handleHide(currentId);
    } else if (lastAction === "show") {
      handleShow(currentId);
    }
  };

  return (
    <>
      <BarraNavegacion />
      <Box className={styles.contenedor}>
        <Typography color="negro.main" component="h1" className={styles.titulo}>
          Publicaciones
        </Typography>
        <Link to="/crear-publicacion">
          <Button
            variant="contained"
            color="violeta"
            sx={{ color: "blanco.main" }}
            className={styles.boton}
            disableElevation
            fullWidth
          >
            Crear publicación
          </Button>
        </Link>
        <Typography
          color="negro.main"
          component="h2"
          className={styles.subtitulo}
        >
          Publicaciones cargadas
        </Typography>
      </Box>
      <PilaPublicaciones
        publicaciones={publicaciones}
        onHide={handleHide}
        onShow={handleShow}
      />
      <Alerta
        type="success"
        mainMessage={alertMessage}
        openAlert={openSuccessAlert}
        handleAccept={handleAccept}
      />

      <Alerta
        type="error"
        mainMessage={alertMessage}
        minorMessage="Por favor, volvé a intentarlo."
        openAlert={openErrorAlert}
        handleCancel={handleCancel}
        handleRetry={handleRetry}
      />
    </>
  );
};

export default PublicacionesAdmin;
