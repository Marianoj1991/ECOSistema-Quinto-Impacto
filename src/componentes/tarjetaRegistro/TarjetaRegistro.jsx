import { useEffect } from 'react';
import GmailLogo from "@/estaticos/icon/GmailIcon";
import Logo from "@/estaticos/icon/LogoSimple";
import style from "./TarjetaRegistro.module.css";
import { login } from '@/servicios/getAxios.js';
import {decodeJWT} from '@/utilidades/decodedToken';

const TarjetaRegistro = () => {
  useEffect(() => {
    // Borra cookies
    document.cookie.split(";").forEach(cookie => {
      document.cookie = `${cookie.split("=")[0]}=;expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    });

    if (window.google && window.google.accounts) {
      window.google.accounts.id.initialize({
        client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
        callback: handleCredentialResponse,
      });
    } else {
      console.error('Google SDK no está cargado');
    }
  }, []);

  const handleCredentialResponse = async (response) => {
    const idToken = response.credential;
    console.log(idToken);
    try {
      const { token } = await login(idToken);
      const decodedToken = decodeJWT(token);

      if (!decodedToken) {
        throw new Error("Error decoding token");
      }

      sessionStorage.setItem('user', JSON.stringify(decodedToken));
      console.log(decodedToken);
      const rol = decodedToken?.rol;
      console.log(rol);

      window.location.href = (rol === 'ADMIN') ? '/dashboard' : '/';

    } catch (error) {
      console.error("Error al iniciar sesión con Google: ", error);
    }
  };

  const handleGoogleSignIn = () => {
    console.log("Click en botón de Google Sign-In");
    if (window.google && window.google.accounts) {
      window.google.accounts.id.prompt(); 
    } else {
      console.error('Google SDK no está cargado');
    }
  };
  
  return (
    <div className={style.containerRegistro}>
      <div className={style.containerTop}>
        <div>
          <h2>Registrate</h2>
        </div>

        <div>
          <p>Sumate a ECOSistema</p>
        </div>

        <Logo sx={{ width: "80px", height: "75px" }} />
      </div>

      <div className={style.containerBtn}>
        <p>Registrate con tu cuenta de Gmail</p>
        <button className={style.btnRegistro} onClick={handleGoogleSignIn}>
          <div className={style.imglogo}>
            <GmailLogo sx={{ width: "16px", height: "16px" }} />
          </div>
          <p>Continuá con Google</p>
        </button>
      </div>
    </div>
  );
};

export default TarjetaRegistro;
