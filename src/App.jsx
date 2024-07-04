import "./App.css";
import { StyledEngineProvider } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material";
import theme from "./conf/theme";

import EmpresasImpacto from "./componentes/empresas-impacto/EmpresasImpacto";
import { Categorias } from "./componentes";
import TarjetaPublicacion from "./componentes/tarjeta-publicacion/TarjetaPublicacion";
import TarjetaProveedor from "./componentes/tarjeta-proveedor/TarjetaProveedor";

import proveedor from "./componentes/tarjeta-proveedor/proveedor";
import publicaciones from "./componentes/tarjeta-publicacion/publicaciones";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <EmpresasImpacto />
        <Categorias />
        <TarjetaProveedor
          categoria={proveedor.categoria}
          url={proveedor.url}
          alt={proveedor.alt}
          titulo={proveedor.titulo}
          tipo={proveedor.tipo}
          ubicacion={proveedor.ubicacion}
          descripcion={proveedor.descripcion}
        />
        {publicaciones.map((publicacion, index) => (
          <TarjetaPublicacion
            titulo={publicacion.titulo}
            fecha={publicacion.fecha}
            cuerpo={publicacion.cuerpo}
            imagenes={publicacion.imagenes}
            key={index}
          />
        ))}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
