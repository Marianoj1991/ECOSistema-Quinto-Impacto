import { Grid, Typography } from '@mui/material'

import styles from './Categories.module.css'

export function Categorias() {
  return (
    <Grid
      className={styles.fondoColor}
      container
      direction='column'
      justifyContent='center'
      alignItems='center'
      sx={{
        height: '100vh'
      }}
    >
      <Grid
        className={styles.categoriasContenedor}
        container
        direction='column'
        alignItems='center'
        sx={{
          backgroundColor: 'white',
          textAlign: 'center'
        }}
      >
        <Grid item>
          <Grid container flexDirection='column'>
            <Grid item>
              <Typography
                variant='h6'
                className={styles.titulo}
              >
                Red de Proveedores ECO
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                className={styles.tituloCategoria}
                variant='h6'
              >
                Categorías
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid container></Grid>
        </Grid>
        <Grid item></Grid>
      </Grid>


    </Grid>
  )
}
