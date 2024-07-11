
import Header from '../../componentes/header/BarraNavegacion'
import PilaPublicaciones from '../../componentes/pila-publicaciones/PilaPublicaciones'
import SeccionTitulo from '../../componentes/seccion-titulo/SeccionTitulo'
import publicaciones from '../../componentes/tarjeta-publicacion/publicaciones'
import { info } from './publicacionesContenido'

const { categoria, texto, titulo, imagen } = info

export function Publicaciones() {

  return (
    <>
      <Header />
      <SeccionTitulo categoria={categoria} titulo={titulo} texto={texto} imagen={imagen} /> 
      <PilaPublicaciones publicaciones={publicaciones}/>
    </>
  )
}