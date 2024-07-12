import { Grid, Typography } from "@mui/material";
import styles from "./BotonCategoria.module.css";
import { Link } from "react-router-dom";

export function BotonCategoria({ icono, texto }) {
  return (
    <Grid
      item
      xs={6}
      sx={{ padding: "0px", width: "152px", cursor: "pointer" }}
    >
      <Link
        to={`/categorias?categoria=${texto}`}
        className={styles.categoriaLink}
      >
        <Grid
          container
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          className={styles.botonContenedor}
        >
          <Grid item display='flex'>
            {icono}
          </Grid>
          <Grid item>
            <Typography className={styles.botonTexto}>{texto}</Typography>
            <div className={styles.border}></div>
          </Grid>
        </Grid>
      </Link>
    </Grid>
  );
}
