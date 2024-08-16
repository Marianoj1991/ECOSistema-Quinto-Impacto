import { useState } from "react";
import { useLocation, useNavigate  } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CarruselImagenes from "../carruselImagenes/CarruselImagenes";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import styles from "./TarjetaPublicacion.module.css";
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';



function TarjetaPublicacion({ titulo, fecha, cuerpo, imagenes, id, onHide,onShow,state }) {
  const [expandido, setExpandido] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();


  const manejarExpansion = () => setExpandido(!expandido);

  const open = Boolean(anchorEl);

const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};

const handleClose = () => {
  setAnchorEl(null);
};

const handleEdit = () => {
  navigate(`/editar-publicacion/${id}`);
  handleClose();
};

const handleHide = () => {
  onHide(id);
  handleClose();
};

const handleShow = ()=>{
  onShow(id);
  handleClose();
}



const hasMenu = location.pathname === "/admin/publicaciones";

  return (
    <>
    <Box className={styles.contenedor}>
      <Card
        sx={{ backgroundColor: "grisClaro.main" }}
        className={styles.tarjeta}
      >
        
        <CardHeader
          title={titulo}
          className={`${styles.titulo} ${styles.cardHeader} ${hasMenu ? styles.spaceBetween : styles.centered}`}
          action={
            location.pathname === "/admin/publicaciones" && (
              <>
                <IconButton
                  sx={{ color: "negro.main",                     
                    "&:hover": {
                    color: "blanco.main",
                    backgroundColor: "violeta.main", 
                  },
                  "&:active": {
                    color: "blanco.main", 
                    backgroundColor: "violeta.main", 
                  },
                }}
                  onClick={handleClick}
                >
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom", 
                    horizontal: "left",


                  }}
                  transformOrigin={{
                    vertical: "top", 
                    horizontal: "center",
                    
                  }}
                  
                >
                  <MenuItem onClick={handleEdit}>Editar</MenuItem>
                  { state === false ? (<MenuItem onClick={handleHide}>Ocultar</MenuItem>):
                  (<MenuItem onClick={handleShow}>Mostrar</MenuItem>)}
                </Menu>
              </>
            )
          }
        />


        <CarruselImagenes imagenes={imagenes} />
        <CardContent>
          <Typography
            color="negro.main"
            component="h6"
            className={styles.fecha}
          >
            {fecha}
          </Typography>
          <Collapse in={expandido} timeout="auto" collapsedSize={100}>
            <Typography
              color="negro.main"
              component="p"
              className={styles.cuerpo}
              noWrap
            >
              {cuerpo}
            </Typography>
          </Collapse>
        </CardContent>
        <CardActions className={styles.contenedorBoton}>
          <Button
            color="violeta"
            onClick={manejarExpansion}
            className={styles.boton}
          >
            {`Ver ${expandido ? "menos" : "más"}`}
          </Button>
        </CardActions>
      </Card>
    </Box>
            </>
  );
}

export default TarjetaPublicacion;
