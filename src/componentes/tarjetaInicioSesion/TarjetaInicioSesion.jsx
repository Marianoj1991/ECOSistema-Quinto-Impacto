
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GmailLogo from "@/estaticos/icon/GmailIcon";
import Logo from "@/estaticos/icon/LogoSimple";
import style from "./TarjetaInicioSesion.module.css";
import { login } from '@/servicios/getAxios'; 
import { decodeJWT } from '@/utilidades/decodedToken'; 

const TarjetaInicioSesion = () => {
  const navigate = useNavigate();
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

      navigate(rol === 'ADMIN' ? '/dashboard' : '/');

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
        <button className={style.btnSesion} onClick={handleGoogleSignIn}>
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




