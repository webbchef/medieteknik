import "../styles/globals.css";
import "./styles.css";
import { MobileStateProvider } from "../contexts/MobileContexts";
import Navigation from "../components/navigation/Navigation";
import Footer from "../components/general/Footer";
import { ThemeProvider } from "@/components/provider/theme-provider"
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
    <html lang="sv" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;700&family=Lato:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <MobileStateProvider>
            <Navigation />
            {children}
            <Footer />
          </MobileStateProvider>
        </ThemeProvider>  
      </body>
    </html>
  );
}
