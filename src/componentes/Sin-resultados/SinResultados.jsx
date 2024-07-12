import { Box, Typography } from '@mui/material'
import styles from './SinResultados.module.css'
import { SinResultadosIcon } from '../../utilidades/icon/SinResultadosIcon'

export default function SinResultados() {
  return (
    <Box className={styles.contenedor}>

      <SinResultadosIcon />

      <Typography className={styles.textoColor}>
        No se encontraron resultados para tu búsqueda
      </Typography>

      <Typography className={styles.textoNegro}>
        Intentá nuevamente con otra consulta
      </Typography>
    </Box>
  )
}
