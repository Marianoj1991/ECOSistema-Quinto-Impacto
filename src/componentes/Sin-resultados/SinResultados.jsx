import { Grid, Typography } from '@mui/material'
import styles from './SinResultados.module.css'
import { SinResultadosIcon } from '../../utilidades/icon/SinResultadosIcon'

export default function SinResultados() {
  return (
    <Grid
      container
      direction='column'
      justifyContent='center'
      alignItems='center'
      rowSpacing={1}
      className={styles.container}
    >
      <Grid item>
        <SinResultadosIcon />
      </Grid>
      <Grid item>
        <Typography className={styles.textoColor}>No se encontraron resultados para tu búsqueda</Typography>
      </Grid>
      <Grid item>
        <Typography className={styles.textoNegro}>Intentá nuevamente con otra consulta</Typography>
      </Grid>
    </Grid>
  )
}