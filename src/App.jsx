import { StyledEngineProvider } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material";
import AppRouter from "./router/AppRouter";
import theme from "./conf/theme";
import "./App.css";

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
