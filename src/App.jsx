import "./App.css";
import { StyledEngineProvider } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material";
import theme from "./conf/theme";

import Header from "./componentes/header/Header";
import SeccionTitulo from "./componentes/seccion-titulo/SeccionTitulo";
import InvitacionRegistro from "./componentes/InvitacionRegistro/InvitacionRegistro";
import EmpresasImpacto from "./componentes/empresas-impacto/EmpresasImpacto";
import { Categorias } from "./componentes";
import ArregloProveedores from "./componentes/arreglo-proveedores/ArregloProveedores";
import TarjetaProveedor from "./componentes/tarjeta-proveedor/TarjetaProveedor";
import PilaProveedores from "./componentes/pila-proveedores/PilaProveedores";
import PilaPublicaciones from "./componentes/pila-publicaciones/PilaPublicaciones";

import proveedores from "./componentes/pila-proveedores/proveedores";
import proveedor from "./componentes/tarjeta-proveedor/proveedor";
import publicaciones from "./componentes/pila-publicaciones/publicaciones";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Header />
        <SeccionTitulo />
        <EmpresasImpacto />
        <InvitacionRegistro />
        <Categorias />
        <ArregloProveedores
          recomendacionesLocales={true}
          proveedores={proveedores}
        />
        <TarjetaProveedor
          expandible={false}
          categoria={proveedor.categoria}
          imagenes={proveedor.imagenes}
          nombre={proveedor.nombre}
          tipo={proveedor.tipo}
          ubicacion={proveedor.ubicacion}
          descripcion={proveedor.descripcion}
        />
        <PilaProveedores proveedores={proveedores} />
        <PilaPublicaciones publicaciones={publicaciones} />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
