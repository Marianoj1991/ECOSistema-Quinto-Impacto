import { StyledEngineProvider } from "@mui/material/styles";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { GoogleOAuthProvider } from '@react-oauth/google';
import AppRouter from "./router/AppRouter";
import theme from "./conf/theme";
import "./App.css";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
          <AppRouter />
        </GoogleOAuthProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;

