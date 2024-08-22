import { Categorias } from "../../componentes";
import { info } from "./inicioContenido";
import BarraNavegacion from "../../componentes/barraNavegacion/BarraNavegacion";
import Box from "@mui/material/Box";
import Buscador from "../../componentes/buscador/Buscador";
import EmpresasImpacto from "../../componentes/empresasImpacto/EmpresasImpacto";
import InvitacionRegistro from "../../componentes/invitacionRegistro/InvitacionRegistro";
import PilaPublicaciones from "../../componentes/pilaPublicaciones/PilaPublicaciones";
import Proveedores from "../../componentes/arregloProveedores/ArregloProveedores";
import SeccionTitulo from "../../componentes/seccionTitulo/SeccionTitulo";
import Typography from "@mui/material/Typography";
import  { useState, useEffect } from 'react';
import {getPublicacionesUser, getProductoSercvivioInicio} from '@/servicios/getAxios'
// Estilos CSS
import styles from "./Inicio.module.css";

const { categoria, titulo, imagen } = info;

export function Inicio() {
  const [user, setUser] = useState(null);
  const [publicaciones, setPublicaciones] =useState([])
  const [productsServices, setProductsServices] = useState([]);
  const [location, setLocation] = useState({ lat: null, lng: null });
  const [error, setError] = useState(null);

const getPublicacionesLista= async() => {
  const publicacionesInicio = await getPublicacionesUser();
  const allPublicaciones = publicacionesInicio.data;
  console.log(allPublicaciones)
  
  // Convertir y ordenar las publicaciones por fecha en orden descendente (más reciente primero)
  const sortedPublicaciones = allPublicaciones.sort((a, b) => {
    const dateA = new Date(a.fechaAlta.split('-').reverse().join('-')); // Convertir 'DD-MM-YYYY' a 'YYYY-MM-DD'
    const dateB = new Date(b.fechaAlta.split('-').reverse().join('-'));
    return dateB - dateA;
  });

  // Obtener las tres publicaciones más recientes
  const lastThreePublicaciones = sortedPublicaciones.slice(0, 3);

  // Configurar el estado con las publicaciones ordenadas
  setPublicaciones(lastThreePublicaciones);
  };


 



  const getProductsServices = async () => {
    const productsServices = await getProductoSercvivioInicio();
    setProductsServices(productsServices.data);
    console.log(productsServices.data)
  };



console.log(location)
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
    getProductsServices()
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
      <Proveedores proveedores={productsServices} />
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
