import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MobileStateProvider } from "../contexts/MobileContexts";
import Navigation from "../components/navigation/Navigation";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./styles.css";
import Footer from "../components/general/Footer";

let theme = createTheme({
  components: {
    MuiTypography: {
      defaultProps: {
        fontFamily: "Lato, sans-serif",
        color: "black",
        // fontWeight: 500,
      },
    },
  },
  typography: {
    h1: {
      fontSize: "60px",
      fontFamily: "Barlow, sans-serif !important",
      fontWeight: 700,
    },
    h2: {
      fontSize: "40px",
      fontWeight: "bold !important",
      fontFamily: "Barlow, sans-serif !important",
      margin: "20px 0",
    },
    h3: {
      fontSize: "30px",
      fontWeight: "bold !important",
      fontFamily: "Barlow, sans-serif !important",
    },
    // Navigation
    h4: {
      fontSize: "20px",
      fontWeight: "bold !important",
    },
  },
  palette: {
    background: {
      default: "FFFFFF"
    },
    primary: {
      main: "#3A3A3C",
    },
    secondary: {
      main: "#EC6610",
    },
    info: {
      // Gray color
      dark: "#3A3A3C80",
      main: "#3A3A3C50",
      light: "#3A3A3C10",
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <MobileStateProvider>
        <>
          <Navigation />
          <Component {...pageProps} />
          <Footer />
        </>
      </MobileStateProvider>
    </ThemeProvider>
  );
}

export default MyApp;
