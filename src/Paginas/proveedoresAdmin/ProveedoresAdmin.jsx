import {useEffect, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TarjetaEstadoProveedor from '@/componentes/tarjetaEstadoProveedor/TarjetaEstadoProveedor.jsx';
import BarraNavegacion from '../../componentes/barraNavegacion/BarraNavegacion';
import { Box, Typography } from '@mui/material';
import {
  getProductoByIdAdmin,
  obtenerProveedoresPorEstado
} from '../../servicios/getAxios'
import SeleccionEstadoProveedor from '../../componentes/seleccionEstadoProveedor/SeleccionEstadoProveedor';


import styles from './ProveedoresAdmin.module.css'

const estadoInicial = 'revision_inicial'

export default function ProveedoresAdmin() {
  const [estado, setEstado] = useState(estadoInicial);
  const [ proveedores, setProveedores ] = useState([])
  const [editando, setEditando] = useState(false)
  const [proveedor, setProveedor] = useState(null)

  const proveedoresPorEstado = async (estado) => {
    try {
      const provs = await obtenerProveedoresPorEstado(estado)
      setProveedores(provs)
    } catch (err) {
      setProveedores([])
    } finally {
      setEditando(false)
    }
  }

  useEffect(() => {
    proveedoresPorEstado(estado)
  }, [estado])

  useEffect(() => {
    if (!editando) {
      proveedoresPorEstado(estado)
    }
  }, [editando])

  const handleClick = async (id) => {
    try{
      const prov = await getProductoByIdAdmin(id)
      setProveedor(prov)
    } catch(err){
      setEditando(false)
    } finally{
      setEditando(true)
      
    }
  }

  const handleChange = (event, newValue) => {
    setEstado(newValue);
  };

  const handleEditando = () => {
    setEditando(false)
  }

  return (
    <>
      <BarraNavegacion />
      <Box className={styles.tituloContenedor}>
        <Typography className={styles.titulo}>Proveedores</Typography>
      </Box>
      <Tabs
        value={estado}
        onChange={handleChange}
        variant='scrollable'
        scrollButtons={false}
        aria-label='scrollable prevent tabs example'
        sx={{
          borderBottom: 2,
          borderColor: 'violeta.main',
          color: 'negro.main',
          '.MuiTab-root': {
            textTransform: 'none',
            color: 'grisOscuro.main',
            fontSize: 16
          },
          '.Mui-selected': {
            color: 'negro.main',
            fontWeight: 'bold'
          },
          '.MuiTabs-indicator': {
            backgroundColor: 'violeta.main',
            color: 'negro.main'
          }
        }}
      >
        <Tab
          label='Nuevos Perfiles'
          value='revision_inicial'
        />
        <Tab
          label='Aprobados'
          value='aprobados'
        />
        <Tab
          label='En revisión'
          value='en_revision'
        />
        <Tab
          label='Cambios realizados'
          value='cambios_realizados'
        />
        <Tab
          label='Denegados'
          value='denegados'
        />
      </Tabs>
      {!editando ? (
        proveedores.map((prov) => (
          <TarjetaEstadoProveedor
            key={prov.id}
            nombre={prov.nombre}
            descripcion={prov.descripcionCorta}
            handleClick={handleClick}
            id={prov.id}
            estado={prov.estado}
          />
        ))
      ) : (
        <SeleccionEstadoProveedor
          {...proveedor}
          handleEditando={handleEditando}
        />
      )}
    </>
  )
}