import { Categorias } from "../../componentes"
import Proveedores from "../../componentes/arreglo-proveedores/ArregloProveedores"
import EmpresasImpacto from "../../componentes/empresas-impacto/EmpresasImpacto"
import BarraNavegacion from "../../componentes/header/BarraNavegacion"
import SeccionTitulo from "../../componentes/seccion-titulo/SeccionTitulo"
import proveedores from '../../componentes/arreglo-proveedores/proveedores'
import { info } from './inicioContenido'
import InvitacionRegistro from "../../componentes/InvitacionRegistro/InvitacionRegistro"
import PilaPublicaciones from "../../componentes/pila-publicaciones/PilaPublicaciones"
import publicaciones from "../../componentes/tarjeta-publicacion/publicaciones"
import { Grid, Typography } from "@mui/material"
// Estilos CSS
import styles from './Inicio.module.css'


const { categoria, titulo, imagen } = info

export function Inicio() {
  return (
    <>
      <BarraNavegacion />
      <SeccionTitulo
        categoria={categoria}
        titulo={titulo}
        imagen={imagen}
      />
      <EmpresasImpacto />
      <InvitacionRegistro />
      <Proveedores proveedores={proveedores} />
      <Categorias />
      <Grid className={styles.gridPublicaciones}>
        <Typography className={styles.gridTitulo} >Publicaciones</Typography>
        <Typography className={styles.gridSubtitulo} >Impulsando transformaciones</Typography>
      </Grid>
      <PilaPublicaciones publicaciones={publicaciones} />
    </>
  )
}