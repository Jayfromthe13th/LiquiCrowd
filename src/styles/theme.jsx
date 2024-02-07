import { createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
  typography: {
    fontFamily: "Sora, sans-serif",
    h1: {
      color: "#FFFFFF",
      fontSize: "55px",
      fontWeight: "semibold",
    },
    subtitle1: {
      color: "#969696",
    },
    subtitle2: {
      color: "white",
      fontSize: "20px",
    },
    body1: {
      color: "#969696",
      fontFamily: "Roboto, sans-serif",
    },
    body2: {
      color: "#969696",
      fontFamily: "Roboto, sans-serif",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#111111",
        },
        html: {},
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "10px",
          padding: "10px 30px",
        },
        containedPrimary: {
          color: "#FFFFFF",
          background: "linear-gradient(90deg, #FCB808 0%, #F9075E 100%)",
        },
        outlinedPrimary: {
          color: "#FFFFFF",
          background: "transparent",
          // border: "1px solid #424242",
          borderWidth: "1px",
          borderColor: "#424242",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          cursor: "pointer",
          fontWeight: "bold",
          color: "#969696",
          "&:hover": {
            color: "#FCB808",
          },
        },
      },
    },
  },
});
