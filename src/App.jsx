import "./App.css";
import  { useState } from 'react';
import { StyledEngineProvider } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material";
import theme from "./conf/theme";
import InvitacionRegistro from './componentes/InvitacionRegistro/InvitacionRegistro'
import EmpresasImpacto from "./componentes/empresas-impacto/EmpresasImpacto";
import { Categorias } from "./componentes";
import PageInicioSesion from "./Paginas/inicioSesion/inicioSesion";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <EmpresasImpacto />
        <InvitacionRegistro />
        <Categorias />
        <PageInicioSesion />
      </ThemeProvider>
    </StyledEngineProvider>

        
  );
}

export default App;
