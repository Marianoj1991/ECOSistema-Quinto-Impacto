
import GmailLogo from '@/utilidades/icon/GmailIcon';
import Logo from '@/utilidades/icon/LogoSimple';
import style from './CardInicioDeSesion.module.css';

const CardInicioSesion = () => {
  return (
    <div className={style.containerInicioSesion}>
      <div className={style.containerTop}>
        <div><h2>Inicia sesión</h2></div>
        
        <div><p>Seguí disfrutando de ECOSistema</p></div>
      
      
        <Logo sx={{ width: "80px", height: "75px"}}/>
      
      </div>
      
      <div className={style.containerBtn}>
      <p>Ingresá con tu cuenta de Gmail</p>
      <button className={style.btnSesion}>
        <div className={style.imglogo}><GmailLogo sx={{ width: "16px", height: "16px"}} /></div>
        <p>Continuá con Google</p>
      </button>
      </div>
    </div>
  );
}

export default CardInicioSesion;

