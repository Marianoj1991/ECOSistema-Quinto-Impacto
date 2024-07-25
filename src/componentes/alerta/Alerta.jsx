import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import errorIcon from "@/estaticos/icon/ErrorIcon.jsx";
import successIcon from "@/estaticos/icon/SuccessIcon.jsx";
import warnigIcon from "@/estaticos/icon/WarningIcon.jsx";
import styles from "./Alerta.module.css";

const Alerta = ({ type, message, onClose }) => {
  const getIcon = () => {
    switch (type) {
      case "success":
        return <img src={successIcon} alt="Éxito" className={styles.icon} />;
      case "error":
        return <img src={errorIcon} alt="Error" className={styles.icon} />;
      case "warnig":
        return <img src={warnigIcon} alt="Error" className={styles.icon} />;
      default:
        return null;
    }
  };

  return ReactDOM.createPortal(
    <div className={styles.contenedor}>
      <div className={`${styles.modal} ${styles[`modal-${type}`]}`}>
        <div className={styles.iconContainer}>{getIcon()}</div>
        <div className={styles.message}>{message}</div>
        <div className={styles.errorMessage}>
          {type === "error" && <p> Por favor, volvé a intentarlo.</p>}
        </div>
        <div className={styles.actions}>
          {type === "error" && (
            <button onClick={onClose} className={styles.button}>
              Cancelar
            </button>
          )}

          <button onClick={onClose} className={styles.button}>
            {type === "error" ? "Intentar nuevamente" : "Aceptar"}
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

Alerta.propTypes = {
  type: PropTypes.oneOf(["success", "error", "warnig"]).isRequired,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Alerta;
