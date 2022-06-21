import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    secondary: {
      main: '#19857b'
    },
    error: {
      main: red.A400
    },
  },

  //estandarizar colores de componentes, invocamos componentes con el prefijo 'Mui'
  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0 //elevacion del AppBar enviado por Prop
      },
      styleOverrides: {
        root: {
          backgroundColor:'#4a148c'
        }
      }
    }
  }
  });