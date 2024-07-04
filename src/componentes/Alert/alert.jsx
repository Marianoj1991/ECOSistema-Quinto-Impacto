
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import warnigIcon from '../../utilidades/icon/WarningIcon.svg';
import errorIcon from '../../utilidades/icon/error.svg';
import successIcon from '../../utilidades/icon/SuccessIcon.svg';
import styles from './Alert.module.css';

const Alert = ({ type, message, onClose }) => {
  const getIcon = () => {
    switch (type) {
      case 'success':
        return <img src={successIcon} alt="Éxito" className={styles.icon} />;
      case 'error':
        return <img src={errorIcon} alt="Error" className={styles.icon} />;
        case 'warnig':
            return <img src={warnigIcon} alt="Error" className={styles.icon} />;
      default:
        return null;
    }
  };

  return ReactDOM.createPortal(
    <div className={styles.contenedor}>
      <div className={`${styles.modal} ${styles[`modal-${type}`]}`}>
        <div className={styles.iconContainer}>
          {getIcon()}
        </div>
        <div className={styles.message}>
          {message}
        </div>
        <div className={styles.errorMessage}>
        {type === 'error' && (<p> Por favor, volvé a intentarlo.</p>)}
        </div>
        <div className={styles.actions}>
        {type === 'error' && (
            <button onClick={onClose} className={styles.button}>
                Cancelar
            </button>
          )}

          <button onClick={onClose} className={styles.button}>
          {type === 'error' ? 'Intentar nuevamente' : 'Aceptar'}
          
          </button>

        </div>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

Alert.propTypes = {
  type: PropTypes.oneOf(['success', 'error', 'warnig']).isRequired,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Alert;
