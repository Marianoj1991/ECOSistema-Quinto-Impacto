import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

import styles from "./Alerta.module.css";

function Alerta({
  type,
  mainMessage,
  minorMessage,
  openAlert,
  handleAccept,
  handleRetry,
  handleCancel,
}) {
  return (
    <Modal open={openAlert} className={styles.modal} disableEscapeKeyDown>
      <Box className={styles.container}>
        {type === "success" && (
          <CheckCircleOutlinedIcon color="verdeExito" className={styles.icon} />
        )}
        {type === "error" && (
          <CancelOutlinedIcon color="rojo" className={styles.icon} />
        )}

        <Typography
          color="negro.main"
          component="p"
          className={styles.textMain}
        >
          {mainMessage}
        </Typography>

        {type === "error" && (
          <Typography
            color="negro.main"
            component="p"
            className={styles.textMinor}
          >
            {minorMessage}
          </Typography>
        )}

        {type === "success" && (
          <Box className={styles.containerButtonSuccess}>
            <Button
              color="violeta"
              onClick={handleAccept}
              className={styles.buttonAccept}
            >
              Aceptar
            </Button>
          </Box>
        )}

        {type === "error" && (
          <Box className={styles.containerButtonError}>
            <Button
              color="violeta"
              onClick={handleCancel}
              className={styles.buttonAccept}
            >
              Cancelar
            </Button>
            
            <Button
              color="violeta"
              onClick={handleRetry}
              className={styles.buttonAccept}
            >
              Intentar nuevamente
            </Button>
          </Box>
        )}
      </Box>
    </Modal>
  );
}

export default Alerta;
