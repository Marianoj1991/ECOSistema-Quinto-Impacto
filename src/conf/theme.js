import { createTheme } from "@mui/material";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";

const theme = createTheme({
  palette: {
    blanco: {
      main: "#FFFFFF",
    },
    grisClaro: {
      main: "#EAEAEA",
    },
    grisMedio: {
      main: "#D2D2D2",
    },
    grisOscuro: {
      main: "#505050",
    },
    negro: {
      main: "#222222",
    },
    violeta: {
      main: "#4E169D",
    },
    verde: {
      main: "#00A364",
    },
    verdeExito: {
      main: "#1D9129",
    },
    naranja: {
      main: "#B86B11",
    },
    rojo: {
      main: "#BC1111",
    },
  },
  typography: {
    fontFamily: "Nunito",
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        outlined: {
          color: "#222222",
          "&.Mui-focused": {
            color: "#4E169D",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: "#222222",
        },
        root: {
          [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: "#4E169D",
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        contained: {
          color: "#222222",
        },
      },
    },
  },
});

export default theme;
