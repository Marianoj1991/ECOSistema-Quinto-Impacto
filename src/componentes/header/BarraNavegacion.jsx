import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Typography from "@mui/material/Typography";
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import CloseIcon from '@mui/icons-material/Close';

import Logo from '@/utilidades/icon/Logo';
import theme from '../../conf/theme';
import styles from "./Header.module.css";

const drawerWidth = 240;
const drawerHeight = '56px';

const Main = styled('main')(({ theme }) => ({
  flexGrow: 1,
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
  backgroundColor: 'transparent',
}));

export default function BarraNavegacion({ hideUserIcon }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

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
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <CustomAppBar position="fixed">
        <Toolbar className={styles.header} sx={{ justifyContent: 'space-between'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2 }}
          >
            {open ? <CloseIcon className={styles.menuIcon} /> : <MenuIcon className={styles.menuIcon} />}
          </IconButton>
          <Box className={`${styles.logoContainer} ${!hideUserIcon ? '' : styles.centerLogo}`}>
            <Logo alt="Logo" className={styles.logoHeader} sx={{width: "152px",height: "56px"}}/>
          </Box>
          {auth && !hideUserIcon &&  (
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
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            marginTop: drawerHeight,
            backgroundColor: theme.palette.violeta.main,
            color: theme.palette.blanco.main,
            fontFamily: theme.typography.fontFamily,
          },
        }}
        variant="temporary"
        anchor="left"
        open={open}
        onClose={handleDrawerClose}
      >
        <List>
          {['Inicio', 'Proveedores', 'Publicaciones', 'Inicia Sesión'].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={handleDrawerClose}>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <List>
          {['¿Querés formar parte de la Red de impacto ECO como Proveedor?', 'Registrate'].map((text) => (
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
