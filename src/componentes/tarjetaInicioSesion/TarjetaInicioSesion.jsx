import { useEffect } from 'react';
import GmailLogo from "@/utilidades/icon/GmailIcon";
import Logo from "@/utilidades/icon/LogoSimple";
import style from "./TarjetaInicioSesion.module.css";
import { login } from '@/servicios/getRequest.js';
import {jwtDecode} from 'jwt-decode';

const TarjetaInicioSesion = () => {
  useEffect(() => {
    
    if (!window.google || !window.google.accounts) {
      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      script.onload = () => {
        window.google.accounts.id.initialize({
          client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
          callback: handleCredentialResponse
        });
        
      };
      document.body.appendChild(script);
    } else {
      window.google.accounts.id.initialize({
        client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
        callback: handleCredentialResponse
      });
    }
  }, []);

  const handleCredentialResponse = async (response) => {
     const idToken = response.credential;
  console.log(idToken)
    try {
      const { token} = await login(idToken);

      const decodedToken = jwtDecode(token);
      console.log(decodedToken);
      const rol =decodedToken.rol
  
       if (rol === 'admin') {
         window.location.href = '/dashboard';
       } else {
         window.location.href = '/';
       }
  
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
