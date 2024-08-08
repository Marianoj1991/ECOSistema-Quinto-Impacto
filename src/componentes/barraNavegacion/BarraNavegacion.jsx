import { useState, useEffect } from 'react'
import { styled, useTheme } from '@mui/material/styles'
import { Link, useNavigate } from 'react-router-dom'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CloseIcon from '@mui/icons-material/Close'
import CssBaseline from '@mui/material/CssBaseline'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Avatar from '@mui/material/Avatar'
import Logo from '@/estaticos/icon/Logo'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import styles from './BarraNavegacion.module.css'

const drawerWidth = 240
const drawerHeight = '56px'

const Main = styled('main')(({ theme, open }) => ({
  flexGrow: 1,
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  })
}))

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  })
}))

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
  backgroundColor: 'transparent'
}))

export default function BarraNavegacion({ hideUserIcon }) {
  const theme = useTheme()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const storedUser = sessionStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLogout = () => {
    sessionStorage.removeItem('user')
    localStorage.removeItem('token')
    setUser(null)
    handleClose()
    navigate('/')
  }

  const getInitials = (name, surname, role) => {
    if (role === 'admin') return 'AD'
    if (!name || !surname) return ''
    return `${name.charAt(0)}${surname.charAt(0)}`
  }

  const menuItems = user
    ? [
        { text: 'Dashboard Administrador', link: '/admin', role: 'admin' },
        { text: 'Proveedores', link: '/proveedores' },
        { text: 'Publicaciones', link: '/publicaciones' }
      ]
    : [
        { text: 'Inicio', link: '/' },
        { text: 'Proveedores', link: '/proveedores' },
        { text: 'Publicaciones', link: '/publicaciones' },
        { text: 'Inicia Sesión', link: '/login' }
      ]

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <CustomAppBar position='fixed'>
        <Toolbar
          className={styles.header}
          sx={{ justifyContent: 'space-between' }}
        >
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            sx={{ mr: 2 }}
          >
            {open ? (
              <CloseIcon className={styles.menuIcon} />
            ) : (
              <MenuIcon className={styles.menuIcon} />
            )}
          </IconButton>
          <Link
            to='/'
            className={`${styles.logoContainer} ${
              !hideUserIcon ? '' : styles.centerLogo
            }`}
          >
            <Logo
              alt='Logo'
              className={styles.logoHeader}
              sx={{ width: '152px', height: '56px' }}
            />
          </Link>
          {user ? (
            <div>
              <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleMenu}
                color='inherit'
                className={styles.iconContainer}
              >
                <Avatar
                  sx={{
                    color: `${theme.palette.blanco.main} !important`,
                    bgcolor: theme.palette.negro.main
                  }}
                  className={styles.icon}
                >
                  {getInitials(user.nombre, user.apellido, user.role)}
                </Avatar>
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {user.role !== 'admin' && (
                  <MenuItem onClick={handleClose}>
                    <AccountCircleOutlinedIcon sx={{ width: 32, height: 32 }} />
                    <div>
                      <Typography
                        variant='body1'
                        sx={{
                          fontSize: '16px',
                          lineHeight: '25px',
                          color: theme.palette.negro.main,
                          marginLeft: 1
                        }}
                      >
                        {user.nombre} {user.apellido}
                      </Typography>
                      <Typography
                        variant='body2'
                        sx={{
                          fontSize: '14px',
                          lineHeight: '25px',
                          color: theme.palette.negro.main,
                          marginLeft: 1
                        }}
                      >
                        {user.sub}
                      </Typography>
                    </div>
                  </MenuItem>
                )}
                {user.role !== 'admin' && (
                  <MenuItem
                    component={Link}
                    to='/perfil'
                    onClick={handleClose}
                    sx={{
                      fontSize: '16px',
                      lineHeight: '25px',
                      fontWeight: 900,
                      color: theme.palette.violeta.main,
                      marginLeft: 5
                    }}
                  >
                    Mi Perfil
                  </MenuItem>
                )}
                <MenuItem
                  onClick={handleLogout}
                  sx={{
                    fontSize: '14px',
                    lineHeight: '25px',
                    color: theme.palette.negro.main
                  }}
                >
                  Cerrar Sesión
                </MenuItem>
              </Menu>
            </div>
          ) : (
            !['/login', '/registro'].includes(location.pathname) && (
              <div>
                <Link
                  to='/login'
                  className={styles.iconLink}
                >
                  <IconButton
                    size='large'
                    aria-label='account of current user'
                    aria-controls='menu-appbar'
                    aria-haspopup='true'
                    onClick={handleMenu}
                    color='inherit'
                    className={styles.iconContainer}
                  >
                    <AccountCircleOutlinedIcon className={styles.icon} />
                    <Typography
                      component='p'
                      className={styles.inicioSesion}
                    >
                      Ingresá
                    </Typography>
                  </IconButton>
                </Link>
              </div>
            )
          )}
        </Toolbar>
      </CustomAppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            marginTop: drawerHeight,
            backgroundColor: 'violeta.main',
            color: 'blanco.main'
          }
        }}
        variant='temporary'
        anchor='left'
        open={open}
        onClose={handleDrawerClose}
      >
        <List>
          {user && user.role === 'admin' && (
            <ListItem disablePadding>
              <ListItemText primary='ADMINISTRADOR' />
            </ListItem>
          )}
          ,
          {menuItems.map(
            ({ text, link, role }) =>
              (!role || user?.role === role) && (
                <ListItem
                  key={text}
                  disablePadding
                >
                  <ListItemButton
                    component={Link}
                    to={link}
                    onClick={handleDrawerClose}
                  >
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              )
          )}
          {!user && (
            <>
              <ListItem disablePadding>
                <ListItemText
                  primary='¿Querés formar parte de la Red de impacto ECO como Proveedor?'
                  sx={{ marginLeft: 2 }}
                />
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  component={Link}
                  to='/registro'
                  onClick={handleDrawerClose}
                >
                  <ListItemText primary='Registrate' />
                </ListItemButton>
              </ListItem>
            </>
          )}
        </List>
      </Drawer>
      <DrawerHeader />
    </Box>
  )
}