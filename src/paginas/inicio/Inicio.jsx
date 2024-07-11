import { Categorias } from "../../componentes"
import Proveedores from "../../componentes/arreglo-proveedores/ArregloProveedores"
import EmpresasImpacto from "../../componentes/empresas-impacto/EmpresasImpacto"
import BarraNavegacion from "../../componentes/header/BarraNavegacion"
import SeccionTitulo from "../../componentes/seccion-titulo/SeccionTitulo"
import proveedores from '../../componentes/arreglo-proveedores/proveedores'

import { info } from './inicioContenido'

const { categoria, titulo, imagen } = info

export function Inicio() {
  return (
    <>
      <BarraNavegacion />
      <SeccionTitulo categoria={categoria} titulo={titulo} imagen={imagen} />
      <EmpresasImpacto />
      <Proveedores proveedores={proveedores} />
      <Categorias />
    </>
  )
}