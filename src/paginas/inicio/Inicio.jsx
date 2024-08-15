import { Categorias } from "../../componentes";
import { info } from "./inicioContenido";
import BarraNavegacion from "../../componentes/barraNavegacion/BarraNavegacion";
import Box from "@mui/material/Box";
import Buscador from "../../componentes/buscador/Buscador";
import EmpresasImpacto from "../../componentes/empresasImpacto/EmpresasImpacto";
import InvitacionRegistro from "../../componentes/invitacionRegistro/InvitacionRegistro";
import PilaPublicaciones from "../../componentes/pilaPublicaciones/PilaPublicaciones";
import Proveedores from "../../componentes/arregloProveedores/ArregloProveedores";
import proveedores from "../../datosPrueba/proveedores";
import SeccionTitulo from "../../componentes/seccionTitulo/SeccionTitulo";
import Typography from "@mui/material/Typography";
import  { useState, useEffect } from 'react';
import {getPublicaciones} from '@/servicios/getAxios'
// Estilos CSS
import styles from "./Inicio.module.css";

const { categoria, titulo, imagen } = info;

export function Inicio() {
  const [user, setUser] = useState(null);
  const [publicaciones, setPublicaciones] =useState([])

const getPublicacionesLista= async() => {
    const publicacionesAdmin = await getPublicaciones();
    setPublicaciones(publicacionesAdmin.data);
    console.log(publicacionesAdmin.data)
  };




  useEffect(() => {
    getPublicacionesLista();
    const userFromSession = sessionStorage.getItem('user');
    if (!userFromSession) {
      setUser(null);
    } else {
      setUser(JSON.parse(userFromSession));
    }
  }, []);
  return (
    <>
      <BarraNavegacion />
      <SeccionTitulo categoria={categoria} titulo={titulo} imagen={imagen}>
        <Buscador color="#FAFAFA" />
      </SeccionTitulo>
      <EmpresasImpacto />
      {user ? null : <InvitacionRegistro />}
      <Proveedores proveedores={proveedores} />
      <Categorias />
      <Box className={styles.publicaciones}>
        <Typography className={styles.titulo}>Publicaciones</Typography>
        <Typography className={styles.subtitulo}>
          Impulsando transformaciones
        </Typography>
      </Box>
      <PilaPublicaciones publicaciones={publicaciones} />
    </>
  );
}
