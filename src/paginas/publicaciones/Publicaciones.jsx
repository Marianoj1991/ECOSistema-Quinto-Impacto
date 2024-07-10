import { useLocation } from 'react-router-dom'
import Header from '../../componentes/header/BarraNavegacion'
import PilaPublicaciones from '../../componentes/pila-publicaciones/PilaPublicaciones'
import SeccionTitulo from '../../componentes/seccion-titulo/SeccionTitulo'
import publicaciones from '../../componentes/tarjeta-publicacion/publicaciones'

export function Publicaciones() {

  return (
    <>
      <Header />
      <SeccionTitulo /> 
      <PilaPublicaciones publicaciones={publicaciones}/>
    </>
  )
}
 