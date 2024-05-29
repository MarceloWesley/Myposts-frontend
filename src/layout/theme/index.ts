import { Poppins } from "next/font/google";

import { createTheme } from "@mui/material";
import createPalette from "@mui/material/styles/createPalette";

const poppins = Poppins({
  weight: "500",
  subsets: ["latin"],
  fallback: ["Roboto"],
});

const theme = createTheme({
  palette: createPalette({
    mode: "dark",
    background: {
      default: "#121214",
      paper: "#1A1A1E",
    },
    primary: {
      dark: "#A35DFF",
      main: "#A35DFF",
      light: "#b57dff",
    },
    secondary: {
      dark: "#1c1b20",
      main: "#28272E",
      light: "#535257",
    },
    error: {
      dark: "#9a1f27",
      main: "#DC2D38",
      light: "#e3575f",
    },
  }),
  shape: {
    borderRadius: 8,
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 768,
      desktop: 1024,
    },
  },
  typography: {
    fontFamily: poppins.style.fontFamily,
  },
  components: {
    MuiToolbar: {
      styleOverrides: {
        root: {
          height: "75px",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
        html, body {
          min-height: 100vh;
          display: grid;
        }
      `,
    },
  },
});

export { theme };
