import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MobileStateProvider } from "../contexts/MobileContexts";
import Navigation from "../components/navigation/Navigation";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MobileStateProvider>
      <>
        <Navigation />
        <Component {...pageProps} />
      </>
    </MobileStateProvider>
  );
}

export default MyApp;
