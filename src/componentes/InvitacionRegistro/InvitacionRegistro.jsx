import style from './InvitacionRegistro.module.css'

function InvitacionRegistro() {
  return (
    <div className={style.containerInvitacion}>
        <div className={style.textContainer}>
        <p>¿Querés formar parte de la
        Red de impacto ECO como Proveedor?</p>
        </div>
        
        <div className={style.btnContainer}>
            <button className={style.btnInvitacion}><p>Registrate</p></button>
        </div>
    </div>
  )
}

export default InvitacionRegistro