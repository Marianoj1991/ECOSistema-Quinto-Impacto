import CardRegistro from "@/componentes/Registro/CardRegistro"
import style from './PaginaRegistro.module.css'
import Header from '@/componentes/header/Header'

function PaginaRegistro() {
  return (
    <div className={style.container}>
      <Header hideUserIcon={true}/>
      <div className={style.CardRegistro}>
      <CardRegistro/>
      </div>
      
      
      </div>
  )
}

export default PaginaRegistro;