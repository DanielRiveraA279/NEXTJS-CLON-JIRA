import { createTheme } from "@mui/material";
import { grey, red } from "@mui/material/colors";

//definiciones de colores para el tema dark
export const lightTheme = createTheme({
    palette: {
      mode: 'light',
      background: {
        default: grey[300] //color gris estandar por defecto
      },
      primary: {
        main: '#4a148c'
      },
      secondary: {
        main: '#19857b'
      },
      error: {
        main: red.A400 //grado de intensidad en el color
      },
    },

    //estandarizar colores de componentes
    components: {
      MuiAppBar: {
        defaultProps: {
          elevation: 0 //elevacion del AppBar enviado por Prop
        },
        styleOverrides: {
          root: {}
        }
      }
    }
  });
