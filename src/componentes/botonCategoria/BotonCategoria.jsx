import { Box, Grid, Typography } from "@mui/material";
import styles from "./BotonCategoria.module.css";
import { Link } from "react-router-dom";

export function BotonCategoria({ icono, texto, border, seccCategorias }) {
  return (
    <Grid item xs={6} sx={{ padding: "0px", cursor: "pointer" }}>
      <Link
        to={`/categorias?categoria=${texto}`}
        className={styles.categoriaLink}
      >
          <Box className={ seccCategorias ? styles.botonSeccCategorias : styles.botonContenedor }>
            {icono}
            <Box>
              <Typography className={styles.botonTexto}>{texto}</Typography>
              <div
                style={
                  border
                    ? { width: "48px", borderBottom: "2px solid #4e169d" }
                    : {}
                }
              ></div>
            </Box>
          </Box>
      </Link>
    </Grid>
  );
}
