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
    // Define a 'background' palette if you want to use it elsewhere
    background: {
      default: "#000000", // Set this to the black color you want for the background
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
          backgroundColor: "#000000", // Set the background color for the body element to black
          color: "white", // Set the default text color to white if desired
        },
        html: {
          backgroundColor: "#000000", // Ensures the background color is consistent
        },
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
    // ... (rest of your component overrides)
  },
});
