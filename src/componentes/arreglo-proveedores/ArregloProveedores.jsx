import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import MiniaturaProveedor from "../miniatura-proveedor/MiniaturaProveedor";
import vectorVerde1 from "../../utilidades/icon/vector-verde-1.svg";
import styles from "./ArregloProveedores.module.css";

function Proveedores({ recomendacionesLocales, proveedores }) {
  return (
    <Box>
      <Box className={styles.contenedorTexto}>
        <Typography
          color="negro.main"
          component="h4"
          className={styles.textoRecomendaciones}
        >
          {`Recomendaciones ${
            recomendacionesLocales ? "locales para vos" : "para vos"
          }`}
        </Typography>
        <Typography
          color="negro.main"
          component="h3"
          className={styles.textoProveedores}
        >
          {`Proveedores ${recomendacionesLocales ? "cerca tuyo" : "ECO"}`}
        </Typography>
      </Box>
      <Box sx={{ backgroundImage: `url(${vectorVerde1})` }}>
        <Grid container spacing={2} className={styles.contenedorArreglo}>
          {proveedores.map((proveedor, index) => (
            <Grid xs={6} key={index}>
              <MiniaturaProveedor
                categoria={proveedor.categoria}
                imagenUrl={proveedor.imagenes[0].url}
                imagenAlt={proveedor.imagenes[0].alt}
                nombre={proveedor.nombre}
                tipo={proveedor.tipo}
                ubicacionCorta={proveedor.ubicacionCorta}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default Proveedores;
