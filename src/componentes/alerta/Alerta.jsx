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

// import PropTypes from "prop-types";
// import ReactDOM from "react-dom";
// import errorIcon from "@/estaticos/icon/ErrorIcon.jsx";
// import successIcon from "@/estaticos/icon/SuccessIcon.jsx";
// import warnigIcon from "@/estaticos/icon/WarningIcon.jsx";
// import styles from "./Alerta.module.css";

// const Alerta = ({ type, message, onClose }) => {
//   const getIcon = () => {
//     switch (type) {
//       case "success":
//         return <img src={successIcon} alt="Éxito" className={styles.icon} />;
//       case "error":
//         return <img src={errorIcon} alt="Error" className={styles.icon} />;
//       case "warnig":
//         return <img src={warnigIcon} alt="Error" className={styles.icon} />;
//       default:
//         return null;
//     }
//   };

//   return ReactDOM.createPortal(
//     <div className={styles.contenedor}>
//       <div className={`${styles.modal} ${styles[`modal-${type}`]}`}>
//         <div className={styles.iconContainer}>{getIcon()}</div>
//         <div className={styles.message}>{message}</div>
//         <div className={styles.errorMessage}>
//           {type === "error" && <p> Por favor, volvé a intentarlo.</p>}
//         </div>
//         <div className={styles.actions}>
//           {type === "error" && (
//             <button onClick={onClose} className={styles.button}>
//               Cancelar
//             </button>
//           )}

//           <button onClick={onClose} className={styles.button}>
//             {type === "error" ? "Intentar nuevamente" : "Aceptar"}
//           </button>
//         </div>
//       </div>
//     </div>,
//     document.getElementById("modal-root")
//   );
// };

// Alerta.propTypes = {
//   type: PropTypes.oneOf(["success", "error", "warnig"]).isRequired,
//   message: PropTypes.string.isRequired,
//   onClose: PropTypes.func.isRequired,
// };

// export default Alerta;
