// PENDIENTE: Endpoint para retornar productos/servicios por ID de usuario.

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BarraNavegacion from "../../componentes/barraNavegacion/BarraNavegacion";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import PilaProductosServicios from "../../componentes/pilaProductosServicios/PilaProductosServicios";
import PilaProveedores from "../../componentes/pilaProveedores/PilaProveedores";
import Typography from "@mui/material/Typography";

import styles from "./Perfil.module.css";

function Perfil() {
  const [productsServices, setProductsServices] = useState([]);

  const getProductsServices = async () => {
    const productsServicesResponse = await fetch(
      "http://localhost:8080/proveedores"
    );
    const productsServicesData = await productsServicesResponse.json();
    setProductsServices(productsServicesData);
  };

  useEffect(() => {
    getProductsServices();
  }, []);

  console.log(productsServices);

  return (
    <>
      <BarraNavegacion />
      <Box className={styles.contenedor}>
        <Typography color="negro.main" component="h1" className={styles.nombre}>
          Julieta Pérez
        </Typography>
        <Link to="/cargar">
          <Button
            variant="contained"
            color="violeta"
            sx={{ color: "blanco.main" }}
            className={styles.boton}
            disableElevation
            fullWidth
          >
            Cargar Producto/Servicio
          </Button>
        </Link>
        <Typography color="negro.main" component="h2" className={styles.titulo}>
          Mis Productos/Servicios
        </Typography>
        <PilaProductosServicios productosServicios={productsServices} />
        <Typography
          color="negro.main"
          component="h3"
          className={styles.subtitulo}
        >
          Así se vería tu Producto/Servicio en el Directorio
        </Typography>
        <PilaProveedores proveedores={productsServices} />
      </Box>
    </>
  );
}

export default Perfil;
