import { Typography, Box} from "@mui/material";
import style from './InvitacionRegistro.module.css'
import { Link } from "react-router-dom";

function InvitacionRegistro() {
  return (
    <>
    <Box className={style.containerInvitacion}>
       
        <Typography color="negro.main" component="p" className={style.textContainer}>¿Querés formar parte de la
        Red de impacto ECO como Proveedor?</Typography>
        
        
        <Link to={'/registro'} className={style.btnContainer}>
            <button className={style.btnInvitacion} color="violeta"><Typography color="blanco" component="p">Registrate</Typography></button>
        </Link>
    </Box>
    </>
  )
}

export default InvitacionRegistro