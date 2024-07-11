import "./App.css";
import { StyledEngineProvider } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material";
import theme from "./conf/theme";

// import Header from "./componentes/header/Header";
// import SeccionTitulo from "./componentes/seccion-titulo/SeccionTitulo";
// import InvitacionRegistro from './componentes/InvitacionRegistro/InvitacionRegistro'
// import EmpresasImpacto from "./componentes/empresas-impacto/EmpresasImpacto";
// import { Categorias } from "./componentes";
// import ArregloProveedores from "./componentes/arreglo-proveedores/ArregloProveedores";
// import TarjetaProveedor from "./componentes/tarjeta-proveedor/TarjetaProveedor";
// import PilaPublicaciones from "./componentes/pila-publicaciones/PilaPublicaciones";

// import proveedores from "./componentes/arreglo-proveedores/proveedores";
// import proveedor from "./componentes/tarjeta-proveedor/proveedor";
// import publicaciones from "./componentes/tarjeta-publicacion/publicaciones";

import PageInicioSesion from "@/Paginas/Registro/PaginaRegistro";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        {/* <Header /> 
        <SeccionTitulo />
        <EmpresasImpacto />
        <InvitacionRegistro />
        <Categorias />
        <ArregloProveedores proveedores={proveedores} />
        <TarjetaProveedor
          categoria={proveedor.categoria}
          imagenUrl={proveedor.imagenUrl}
          imagenAlt={proveedor.imagenAlt}
          nombre={proveedor.nombre}
          tipo={proveedor.tipo}
          ubicacion={proveedor.ubicacion}
          descripcion={proveedor.descripcion}
        />
        <PilaPublicaciones publicaciones={publicaciones} /> */}
        <PageInicioSesion />

      </ThemeProvider>
    </StyledEngineProvider>

        
  );
}

export default App;
