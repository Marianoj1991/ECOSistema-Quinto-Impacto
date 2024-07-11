import CardInicioSesion from "@/componentes/InicioSesion/CardInicioDeSesion"
import style from './PaginaInicioSesion.module.css';
import Header from '@/componentes/header/Header'
 const PageInicioSesion= () =>  {
  return (
    <div className={style.container}>
      <Header hideUserIcon={true}/>
      <div className={style.CardSesion}>
      <CardInicioSesion />
      </div>
      
      
      </div>
  )
}
export default PageInicioSesion