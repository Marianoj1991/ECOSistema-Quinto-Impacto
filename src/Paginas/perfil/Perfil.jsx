import BarraNavegacion from "../../componentes/barraNavegacion/BarraNavegacion";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import PilaProductosServicios from "../../componentes/pilaProductosServicios/PilaProductosServicios";
import productosServicios from "../../datosPrueba/productosServicios";
import proveedor from "../../datosPrueba/proveedor";
import PilaProveedores from "../../componentes/pilaProveedores/PilaProveedores";
import Typography from "@mui/material/Typography";

import styles from "./Perfil.module.css";

function Perfil() {
  return (
    <>
      <BarraNavegacion />
      <Box className={styles.contenedor}>
        <Typography color="negro.main" component="h1" className={styles.nombre}>
          Julieta Pérez
        </Typography>
        <Button
          variant="contained"
          color="violeta"
          onClick={() => console.log("CARGAR")}
          sx={{ color: "blanco.main" }}
          className={styles.boton}
          disableElevation
        >
          Cargar Producto/Servicio
        </Button>
        <Typography color="negro.main" component="h2" className={styles.titulo}>
          Mis Productos/Servicios
        </Typography>
        <PilaProductosServicios productosServicios={productosServicios} />
        <Typography
          color="negro.main"
          component="h3"
          className={styles.subtitulo}
        >
          Así se vería tu Producto/Servicio en el Directorio
        </Typography>
        <PilaProveedores proveedores={proveedor} />
      </Box>
    </>
  );
}

export default Perfil;
