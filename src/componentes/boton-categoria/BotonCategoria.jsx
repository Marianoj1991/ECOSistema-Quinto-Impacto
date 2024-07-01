import { Grid, Link, Typography } from '@mui/material'
import styles from './BotonCategoria.module.css'

export function BotonCategoria({ icono, texto }) {
  return (
    <Grid
      item
      xs={6}
      sx={{ padding: '0px', width: '152px', cursor: 'pointer' }}
    >
      <Link
        sx={{
        textDecoration: 'none',
        color: 'inherit'
      }}>
        <Grid
          container
          flexDirection='row'
          justifyContent='center'
          alignItems='center'
          className={styles.botonContenedor}
        >
          <Grid item>
            <img
              src={icono}
              alt={texto}
              className={styles.icono}
            />
          </Grid>
          <Grid item>
            <Typography className={styles.botonTexto}>{texto}</Typography>
            <div className={styles.border}></div>
          </Grid>
        </Grid>
      </Link>
    </Grid>
  )
}
