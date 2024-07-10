
import GmailLogo from '../../utilidades/icon/GmailIcon.svg';
import logo from '../../utilidades/icon/logo-simple.svg';
import style from './CardInicioDeSesion.module.css';

const CardInicioSesion = () => {
  return (
    <div className={style.containerInicioSesion}>
      <div className={style.containerTop}>
        <div><h2>Inicia sesión</h2></div>
        
        <div><p>Seguí disfrutando de ECOSistema</p></div>
      
      <div>
        <img src={logo} alt="" />
      </div>
      </div>
      
      <div className={style.containerBtn}>
      <p>Ingresá con tu cuenta de Gmail</p>
      <button className={style.btnSesion}>
        <div className={style.imglogo}><img src={GmailLogo} alt="Gmail logo" /></div>
        <p>Continuá con Google</p>
      </button>
      </div>
    </div>
  );
}

export default CardInicioSesion;

