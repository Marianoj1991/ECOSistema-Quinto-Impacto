import "./App.css";
import  { useState } from 'react';
import { StyledEngineProvider } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material";
import theme from "./conf/theme";
import InvitacionRegistro from './componentes/InvitacionRegistro/InvitacionRegistro'
import EmpresasImpacto from "./componentes/empresas-impacto/EmpresasImpacto";
import { Categorias } from "./componentes";
import PageInicioSesion from "./Paginas/inicioSesion/inicioSesion";
import Alert from "./componentes/Alert/alert";

function App() {
   const [showAlert, setShowAlert] = useState(false);
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <EmpresasImpacto />
        <InvitacionRegistro />
        <Categorias />
        <PageInicioSesion />
        <div>
      <button onClick={() => setShowAlert(true)}>Mostrar Modal</button>
      {showAlert && (
        <Alert
          type="success"
          message="Lo sentimos, el estado no pudo ser modificado."
          onClose={() => setShowAlert(false)}
        />
      )}
    </div>
        
      </ThemeProvider>
    </StyledEngineProvider>

        
  );
}

export default App;
