import { Box } from '@mui/material'
import style from './InvitacionRegistro.module.css'

function InvitacionRegistro() {
  return (
    <>
    <Box className={style.containerInvitacion}>
        <div className={style.textContainer}>
        <p>¿Querés formar parte de la
        Red de impacto ECO como Proveedor?</p>
        </div>
        
        <div className={style.btnContainer}>
            <button className={style.btnInvitacion}><p>Registrate</p></button>
        </div>
    </Box>
    </>
  )
}

export default InvitacionRegistro