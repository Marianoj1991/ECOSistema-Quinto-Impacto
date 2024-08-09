import {useEffect, useState} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

// import SeleccionEstadoProveedor from '@/componentes/seleccionEstadoProveedor/SeleccionEstadoProveedor.jsx';
import TarjetaEstadoProveedor from '@/componentes/tarjetaEstadoProveedor/TarjetaEstadoProveedor.jsx';
import BarraNavegacion from '../../componentes/barraNavegacion/BarraNavegacion';
import { Box, Typography } from '@mui/material';

import styles from './ProveedoresAdmin.module.css'
import { obtenerProveedoresPorEstado, obtenerProveedoresPorNombreAxios } from '../../servicios/getAxios';
import SinResultados from '../../componentes/sinResultados/SinResultados';
import SeleccionEstadoProveedor from '../../componentes/seleccionEstadoProveedor/SeleccionEstadoProveedor';

export default function ProveedoresAdmin() {
  const [estado, setEstado] = useState('revision_inicial');
  const [ proveedores, setProveedores ] = useState([])
  const [error, setError] = useState(false)
  const [editando, setEditando] = useState(false)

  useEffect(() => {
    const proveedoresPorEstado = async (estado) => {
      try{
        const provs = await obtenerProveedoresPorEstado(estado)
        setProveedores(provs)
      } catch (err) {
        setProveedores([])
        setError(true)
      }
    }
    proveedoresPorEstado(estado)
  }, [estado])

  const handleClick = async (nombre) => {
    try{
      const prov = await obtenerProveedoresPorNombreAxios(nombre)
      setProveedores(prov)
    } catch(err){
      setEditando(false)
    } finally{
      setEditando(true)
    }

  }

  const handleChange = (event, newValue) => {
    setEstado(newValue);
  };

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
          value='aprobado'
        />
        <Tab
          label='En revisión'
          value='en_revision'
        />
        <Tab
          label='Denegados'
          value='denegado'
        />
      </Tabs>
      {
      !editando 
        ?
          proveedores.map((prov) =>(
            <TarjetaEstadoProveedor key={prov.id} nombre={prov.nombre} descripcion={prov.descripcionCorta} handleClick={handleClick} />
          ))
        :
          proveedores.map(() => {
            <SeleccionEstadoProveedor />
          })
      }

    </>
  )
}



