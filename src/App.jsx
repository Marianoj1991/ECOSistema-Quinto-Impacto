import "./App.css";
import { StyledEngineProvider } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material";
import theme from "./conf/theme";

import EmpresasImpacto from "./componentes/empresas-impacto/EmpresasImpacto";
import { Categorias } from "./componentes";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <EmpresasImpacto />
        <Categorias />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
