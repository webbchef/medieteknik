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
        fontSize: "18px",
        // fontWeight: 500,
      },
    },
  },
  typography: {
    h1: {
      fontSize: "60px !important",
      "@media (min-width:768px) and (max-width:1212px)": {
        fontSize: "50px !important",
      },
      "@media (max-width:768px)": {
        fontSize: "40px !important",
      },
      fontFamily: "Barlow, sans-serif !important",
      fontWeight: 700,
    },
    h2: {
      fontSize: "40px !important",
      "@media (min-width:768px) and (max-width:1212px)": {
        fontSize: "32px !important",
      },
      "@media (max-width:768px)": {
        fontSize: "28px !important",
      },
      fontWeight: "bold !important",
      fontFamily: "Barlow, sans-serif !important",
      margin: "20px 0",
    },
    h3: {
      fontSize: "30px !important",
      "@media (min-width:768px) and (max-width:1212px)": {
        fontSize: "26px !important",
      },
      "@media (max-width:768px)": {
        fontSize: "23px !important",
      },
      fontWeight: "bold !important",
      fontFamily: "Barlow, sans-serif !important",
      margin: "20px 0",
    },
    // Navigation
    h4: {
      fontSize: "20px !important",
      fontWeight: "500px !important",
      color: "white !important",
    },
    body1: {
      fontSize: "18px !important",
      "@media (min-width:768px) and (max-width:1212px)": {
        fontSize: "16px !important",
      },
      "@media (max-width:768px)": {
        fontSize: "14px !important",
      },
    },
  },
  palette: {
    background: {
      default: "#FFFFFF",
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
