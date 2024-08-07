import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import SeleccionEstadoProveedor from '../seleccionEstadoProveedor/SeleccionEstadoProveedor.jsx';
import TarjetaEstadoProveedor from '../tarjetaEstadoProveedor/TarjetaEstadoProveedor.jsx';

export default function ScrollableTabsButtonPrevent() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={false}
        aria-label="scrollable prevent tabs example"
        sx={{
          borderBottom: 2,
          borderColor: 'violeta.main',
          color: 'negro.main',
          '.MuiTab-root': {
            textTransform: 'none',
            color: 'grisOscuro.main',
            fontSize: 16,
          },
          '.Mui-selected': {
            color: 'negro.main',
            fontWeight: 'bold',
          },
          '.MuiTabs-indicator': {
            backgroundColor: 'violeta.main',
            color: 'negro.main',
          },
        }}
      >
        <Tab label="Nuevos Perfiles" />
        <Tab label="Aprobados" />
        <Tab label="En revisión" />
        <Tab label="Denegados" />
      </Tabs>

      <SeleccionEstadoProveedor />
      
      <TarjetaEstadoProveedor />
    </>
  );
}