import { Categorias } from "../../componentes"
import Proveedores from "../../componentes/arreglo-proveedores/ArregloProveedores"
import EmpresasImpacto from "../../componentes/empresas-impacto/EmpresasImpacto"
import BarraNavegacion from "../../componentes/header/BarraNavegacion"
import SeccionTitulo from "../../componentes/seccion-titulo/SeccionTitulo"
import proveedores from '../../componentes/arreglo-proveedores/proveedores'



export function Inicio() {
  return (
    <>
      <BarraNavegacion />
      <SeccionTitulo />
      <EmpresasImpacto />
      <Proveedores proveedores={proveedores} />
      <Categorias />
    </>
  )
}