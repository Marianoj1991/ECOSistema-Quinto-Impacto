import Grid from "@mui/material/Unstable_Grid2";
import MiniaturaProveedor from "../miniatura-proveedor/MiniaturaProveedor";
import styles from "./ArregloProveedores.module.css";

function Proveedores({ proveedores }) {
  return (
    <Grid container spacing={2} className={styles.contenedor}>
      {proveedores.map((proveedor, index) => (
        <Grid xs={6} key={index}>
          <MiniaturaProveedor
            categoria={proveedor.categoria}
            imagenUrl={proveedor.imagenUrl}
            imagenAlt={proveedor.imagenAlt}
            nombre={proveedor.nombre}
            tipo={proveedor.tipo}
            ubicacionCorta={proveedor.ubicacionCorta}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default Proveedores;
