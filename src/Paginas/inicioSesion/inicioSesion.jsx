import CardInicioSesion from "@/componentes/InicioSesion/CardInicioDeSesion"
import style from './PaginaInicioSesion.module.css';
import BarraNavegacion from '@/componentes/header/BarraNavegacion'

const PageInicioSesion= () =>  {
  return (
    <div className={style.container}>
      <BarraNavegacion hideUserIcon={true} />
      <div className={style.CardSesion}>
        <CardInicioSesion />
      </div>
    </div>
  )
}
export default PageInicioSesion