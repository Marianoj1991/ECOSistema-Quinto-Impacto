import CardInicioSesion from "../../componentes/InicioSesion/CardInicioDeSesion"
import style from './PaginaInicioSesion.module.css';

 const PageInicioSesion= () =>  {
  return (
    <div className={style.container}>
      <div className={style.CardSesion}>
      <CardInicioSesion/>
      </div>
      </div>
  )
}
export default PageInicioSesion