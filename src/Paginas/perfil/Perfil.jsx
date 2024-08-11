import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BarraNavegacion from "../../componentes/barraNavegacion/BarraNavegacion";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import PilaProductosServicios from "../../componentes/pilaProductosServicios/PilaProductosServicios";
import PilaProveedores from "../../componentes/pilaProveedores/PilaProveedores";
import Typography from "@mui/material/Typography";
import { getStoredUser } from "@/utilidades/getUserSession";
import { getProvedores } from "@/servicios/getAxios";
import styles from "./Perfil.module.css";

function Perfil() {
  const [productsServices, setProductsServices] = useState([]);

  const user = getStoredUser();

  const getProductsServices = async () => {
    const productsServices = await getProvedores();
    setProductsServices(productsServices.data);
  };

  useEffect(() => {
    getProductsServices();
  }, []);

  return (
    <>
      <BarraNavegacion />
      <Box className={styles.contenedor}>
        <Typography color="negro.main" component="h1" className={styles.nombre}>
          {user.nombre} {user.apellido}
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

        {productsServices.length !== 0 && (
          <Box>
            <Typography
              color="negro.main"
              component="h3"
              className={styles.subtitulo}
            >
              Así se vería tu Producto/Servicio en el Directorio
            </Typography>
            <PilaProveedores proveedores={productsServices} />
          </Box>
        )}
      </Box>
    </>
  );
}

export default Perfil;
