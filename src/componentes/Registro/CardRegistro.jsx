import gmailLogo from '../../utilidades/icon/gmail.svg';
import logo from '../../utilidades/icon/logo.svg';
import style from './CardRegistro.module.css'


const CardRegistro= () =>  {
  return (
    <div className={style.containerRegistro}>
    <div className={style.containerTop}>
      <div><h2>Registrate</h2></div>
      
      <div><p>Sumate a ECOSistema</p></div>
    
    <div>
      <img src={logo} alt="" />
    </div>
    </div>
    
    <div className={style.containerBtn}>
    <p>Registrate con tu cuenta de Gmail</p>
    <button className={style.btnRegistro}>
      <div className={style.imglogo}><img src={gmailLogo} alt="Gmail logo" /></div>
      <p>Continuá con Google</p>
    </button>
    </div>
  </div>
);

}

export default CardRegistro;