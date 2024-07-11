import "./App.css";
import { StyledEngineProvider } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material";
import theme from "./conf/theme";

// import proveedor from "./componentes/tarjeta-proveedor/proveedor";
// import publicaciones from "./componentes/tarjeta-publicacion/publicaciones";
import AppRouter from "./router/AppRouter";


function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
