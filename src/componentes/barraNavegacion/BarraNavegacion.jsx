import { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Logo from "@/estaticos/icon/Logo";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import styles from "./BarraNavegacion.module.css";
import { Link } from "react-router-dom";

const drawerWidth = 240;
const drawerHeight = "56px";


const Main = styled("main")(({ theme }) => ({
  flexGrow: 1,
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
  backgroundColor: "transparent",
}));

export default function BarraNavegacion({ hideUserIcon }) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <CustomAppBar position="fixed">
        <Toolbar
          className={styles.header}
          sx={{ justifyContent: "space-between" }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2 }}
          >
            {open ? (
              <CloseIcon className={styles.menuIcon} />
            ) : (
              <MenuIcon className={styles.menuIcon} />
            )}
          </IconButton>
          <Link
            to={'/'}
            className={`${styles.logoContainer} ${
              !hideUserIcon ? "" : styles.centerLogo
            }`}
          >
            <Logo
              alt="Logo"
              className={styles.logoHeader}
              sx={{ width: "152px", height: "56px" }}
            />
          </Link>
          {auth && !hideUserIcon && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                className={styles.iconContainer}
              >
                <AccountCircleOutlinedIcon className={styles.icon} />
                <Typography component="p" className={styles.inicioSesion}>
                  Ingresá
                </Typography>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </CustomAppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            marginTop: drawerHeight,
            backgroundColor: "violeta.main",
            color: "blanco.main",
          },
        }}
        variant="temporary"
        anchor="left"
        open={open}
        onClose={handleDrawerClose}
      >
        <List>
          {["Inicio", "Proveedores", "Publicaciones", "Inicia Sesión"].map(
            (text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton onClick={handleDrawerClose}>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
        <List>
          {[{
            text: "¿Querés formar parte de la Red de impacto ECO como Proveedor?",
            link: null
          }, {
            text: "Registrate",
            link: '/registro'
          }
          ].map(({text, link}) => (
              link ? 
              <ListItem key={text} component={Link} to={link} style={{textDecoration: 'none', color: 'inherit'}} disablePadding>
                <ListItemButton onClick={handleDrawerClose}>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem> 
              :
              <ListItem key={text} disablePadding>
                <ListItemButton onClick={handleDrawerClose}>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
          ))}
        </List>
      </Drawer>

      <DrawerHeader />
    </Box>
  );
}
