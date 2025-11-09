import "../styles/globals.css";
import "./styles.css";
import { MobileStateProvider } from "../contexts/MobileContexts";
import Navigation from "../components/navigation/Navigation";
import Footer from "../components/general/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medieteknik",
  description: "Medieteknik sektionen",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;700&family=Lato:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <MobileStateProvider>
          <Navigation />
          {children}
          <Footer />
        </MobileStateProvider>
      </body>
    </html>
  );
}
