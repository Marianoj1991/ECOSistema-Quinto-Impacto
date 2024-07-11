import CardRegistro from "@/componentes/Registro/CardRegistro"
import style from './PaginaRegistro.module.css'
import BarraNavegacion from '@/componentes/header/BarraNavegacion'

function PaginaRegistro() {
  return (
    <div className={style.container}>
      <BarraNavegacion hideUserIcon={true} />
      <div className={style.CardRegistro}>
        <CardRegistro />
      </div>
    </div>
  )
}

export default PaginaRegistro;