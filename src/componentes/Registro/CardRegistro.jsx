import GmailLogo from '@/utilidades/icon/GmailIcon';
import Logo from '@/utilidades/icon/LogoSimple';
import style from './CardRegistro.module.css'


const CardRegistro= () =>  {
  return (
    <div className={style.containerRegistro}>
    <div className={style.containerTop}>
      <div><h2>Registrate</h2></div>
      
      <div><p>Sumate a ECOSistema</p></div>
    
   
    <Logo sx={{ width: "80px", height: "75px"}}/>
    
    </div>
    
    <div className={style.containerBtn}>
    <p>Registrate con tu cuenta de Gmail</p>
    <button className={style.btnRegistro}>
    <div className={style.imglogo}><GmailLogo sx={{ width: "16px", height: "16px"}} /></div>
      <p>Continuá con Google</p>
    </button>
    </div>
  </div>
);

}

export default CardRegistro;