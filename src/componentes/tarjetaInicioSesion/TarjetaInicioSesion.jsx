import GmailLogo from "@/estaticos/icon/GmailIcon";
import Logo from "@/estaticos/icon/LogoSimple";
import style from "./TarjetaInicioSesion.module.css";

const TarjetaInicioSesion = () => {
  return (
    <div className={style.containerInicioSesion}>
      <div className={style.containerTop}>
        <div>
          <h2>Inicia sesión</h2>
        </div>

        <div>
          <p>Seguí disfrutando de ECOSistema</p>
        </div>

        <Logo sx={{ width: "80px", height: "75px" }} />
      </div>

      <div className={style.containerBtn}>
        <p>Ingresá con tu cuenta de Gmail</p>
        <button className={style.btnSesion}>
          <div className={style.imglogo}>
            <GmailLogo sx={{ width: "16px", height: "16px" }} />
          </div>
          <p>Continuá con Google</p>
        </button>
      </div>
    </div>
  );
};

export default TarjetaInicioSesion;
