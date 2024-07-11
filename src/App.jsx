import "./App.css";
import { StyledEngineProvider } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material";
import theme from "./conf/theme";

// import EmpresasImpacto from "./componentes/empresas-impacto/EmpresasImpacto";
// import { Categorias } from "./componentes";
// import TarjetaProveedor from "./componentes/tarjeta-proveedor/TarjetaProveedor";
// import PilaPublicaciones from "./componentes/pila-publicaciones/PilaPublicaciones";

// import proveedor from "./componentes/tarjeta-proveedor/proveedor";
// import publicaciones from "./componentes/tarjeta-publicacion/publicaciones";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        
        <AppRouter />
        {/* <TarjetaProveedor
          categoria={proveedor.categoria}
          imagenUrl={proveedor.imagenUrl}
          imagenAlt={proveedor.imagenAlt}
          nombre={proveedor.nombre}
          tipo={proveedor.tipo}
          ubicacion={proveedor.ubicacion}
          descripcion={proveedor.descripcion}
        /> */}
        {/* <Bienestar /> */}
        {/* <PilaPublicaciones publicaciones={publicaciones} /> */}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
