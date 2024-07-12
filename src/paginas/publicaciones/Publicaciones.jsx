import { Grid } from '@mui/material'
import Header from '../../componentes/header/BarraNavegacion'
import PilaPublicaciones from '../../componentes/pila-publicaciones/PilaPublicaciones'
import SeccionTitulo from '../../componentes/seccion-titulo/SeccionTitulo'
import publicaciones from '../../componentes/pila-publicaciones/publicaciones'
import { info } from './publicacionesContenido'

// Estilos CSS
import styles from './Publicaciones.module.css'
import Buscador from '../../componentes/buscador/Buscador'

const { categoria, texto, titulo, imagen } = info

export function Publicaciones() {

  return (
    <>
      <Header />
      <SeccionTitulo categoria={categoria} titulo={titulo} texto={texto} imagen={imagen}>
        { <Buscador /> }
      </SeccionTitulo>
      <Grid className={styles.gridPublicaciones}  >
        <PilaPublicaciones publicaciones={publicaciones}/>
      </Grid>
    </>
  )
}