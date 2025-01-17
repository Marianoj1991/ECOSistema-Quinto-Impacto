import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CircleIcon from '@mui/icons-material/Circle';

const TarjetaProveedor = ({ nombre, descripcion, handleClick, id, estado }) => {
  const getColorByEstado = (estado) => {
    switch (estado) {
      case 'ACEPTADO':
        return 'verdeExito.main'
      case 'REQUIERE_CAMBIOS':
        return 'naranja.main'
      case 'CAMBIOS_REALIZADOS':
        return 'naranja.main'
      case 'DENEGADO':
        return 'rojo.main'
    }
  }
  return (
    <Box
        sx={{
          backgroundColor: 'grisClaro.main',
          margin: 2,
          padding: 0.5,
          paddingLeft: 2,
          display: 'flex',
          alignItems: 'center',
          borderRadius: 2,
        }}>

        <Box sx={{ flexGrow: 1 }}>
          <Box sx={{  display: 'flex', alignItems:'center' ,color: 'violeta.main', fontSize: 18, fontWeight: 'bold', padding: 0.5, borderBottom: 1, borderColor: 'verde.main', marginRight: 10, gap: .5 }}>
            {estado !== 'REVISION_INICIAL' && (<CircleIcon sx={{ color: getColorByEstado(estado), fontSize: 20, }} />)}  
            {nombre}
          </Box> 
          <Box sx={{ fontSize: 16, padding: 0.5, }}>{descripcion} </Box>
        </Box>
        {
          estado !== 'ACEPTADO' && <IconButton onClick={() => handleClick(id)}>   <KeyboardArrowRightIcon sx={{ color: 'negro.main' }} /> </IconButton>
        }
        {/* {value === 0 &&
          filtrarProveedores('Nuevo').map((proveedor) => (
            <TarjetaProveedor
              key={proveedor.id}
              nombre={proveedor.nombre}
              categoria={proveedor.categoria}
              estado="Nuevo"
            />
          ))}
        {value === 1 &&
          filtrarProveedores('Aprobado').map((proveedor) => (
            <TarjetaProveedor
              key={proveedor.id}
              nombre={proveedor.nombre}
              categoria={proveedor.categoria}
              estado="Aprobado"
            />
          ))}
        {value === 2 &&
          filtrarProveedores('En revisión').map((proveedor) => (
            <TarjetaProveedor
              key={proveedor.id}
              nombre={proveedor.nombre}
              categoria={proveedor.categoria}
              estado="En revisión"
            />
          ))}
        {value === 3 &&
          filtrarProveedores('Denegado').map((proveedor) => (
            <TarjetaProveedor
              key={proveedor.id}
              nombre={proveedor.nombre}
              categoria={proveedor.categoria}
              estado="Denegado"
            />
          ))} */}
    </Box>
  );
};

export default TarjetaProveedor;
