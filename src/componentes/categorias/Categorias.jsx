import { Button, Grid, Typography } from '@mui/material'
import { infoBotones } from '../boton-categoria/botones-info'
import { BotonCategoria } from '../boton-categoria/index'

import styles from './Categorias.module.css'

export function Categorias() {
  return (
    <Grid
      className={styles.fondoColor}
      container
      direction='column'
      justifyContent='center'
      alignItems='center'
      sx={{
        backgroundColor: '#111',
        height: '100vh'
      }}
    >
      <Grid
        className={styles.categoriasContenedor}
        container
        direction='column'
        alignItems='center'
        gap={2}
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
          <Grid container justifyContent='space-between' spacing={1} >
            {
              infoBotones.map(dato => (
                <BotonCategoria key={dato.id} icono={dato.icono} texto={dato.texto} />
              ))
            }
          </Grid>
        </Grid>

        <Grid item />
          <Button variant='contained'  sx={{backgroundColor: '#4E169D', width: '184px', height: '40px', borderRadius: '100px', padding: '10px, 24px, 10px, 24px', gap: '10px' }}>
            <Typography  sx={{
              textTransform: 'none',
              fontFamily: 'Nunito',
              fontWeight: 700,
              fontSize: '16px'
            }}>Ver más categorías</Typography>
          </Button>
        </Grid>
    </Grid>
  )
}
