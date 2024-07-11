import { Grid } from '@mui/material'
import Header from '../../componentes/header/BarraNavegacion'
import PilaPublicaciones from '../../componentes/pila-publicaciones/PilaPublicaciones'
import SeccionTitulo from '../../componentes/seccion-titulo/SeccionTitulo'
import publicaciones from '../../componentes/tarjeta-publicacion/publicaciones'
import { info } from './publicacionesContenido'

// Estilos CSS
import styles from './Publicaciones.module.css'

const { categoria, texto, titulo, imagen } = info

export function Publicaciones() {

  return (
    <>
      <Header />
      <SeccionTitulo categoria={categoria} titulo={titulo} texto={texto} imagen={imagen} />
      <Grid className={styles.gridPublicaciones}  >
        <PilaPublicaciones publicaciones={publicaciones}/>
      </Grid>
    </>
  )
}