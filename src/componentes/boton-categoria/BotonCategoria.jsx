import { Grid, Typography } from "@mui/material";
import styles from './BotonCategoria.module.css'

export function BotonCategoria({icono, texto}) {
  return (
    <Grid item xs={6} sx={{borderRadius: '20px'}} >
      <Grid container flexDirection='row' justifyContent='flex-start' alignItems='center' className={styles.botonContenedor}>

      <Grid item>
        <img src={icono} alt={texto} className={styles.icono} />
      </Grid>
      <Grid item > 
          <Typography className={styles.botonTexto}>{texto}</Typography>
      </Grid>
      </Grid>
    </Grid>
  )
}