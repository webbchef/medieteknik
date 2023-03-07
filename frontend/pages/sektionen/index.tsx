import Head from "next/head";
import type { NextPage } from "next";
import { useState } from "react";
import content from "../../content/styrare.json";
import { Container, Grid, Stack, Button, Typography } from "@mui/material";
import PresentationModal from "../../components/sektionen/PresentationModal";
import PresentationCard from "../../components/sektionen/PresentationCard";
import { motion } from "framer-motion";
import { fadeInUp } from "../../animations/constants";
import { Styrare } from "../../utils/types";
import ImageWithSummary from "../../components/general/ImageWithSummary";
import WavyBackground from "../../components/general/WavyBackground";
import BackgroundImage from "../../components/general/BackgroundImage";
import gruppbild from "../../assets/gruppbild.jpg";

const PresentationPage: NextPage = () => {
  console.log(content);
  const styrare: Styrare[] = content;
  console.log(styrare);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [activeUser, setActiveUser] = useState<number>(0);

  function handleUserClick(index: number) {
    setActiveUser(index);
    setModalOpen(true);
  }

  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      <Head>
        <title>Medieteknik.nu | Sektionen</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BackgroundImage pageName="SEKTIONEN" imgSrc={gruppbild.src} />

      {/* Styrelsen */}

      <Container
        maxWidth="lg"
        sx={{ width: "70vw", margin: "auto", padding: "20px 0 100px 0" }}
      >
        <Typography
          variant="h1"
          align="center"
          sx={{ margin: "40px 0", color: "inherit" }}
        >
          STYRELSEN
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{ marginBottom: "40px", fontSize: "24px" }}
        >
          Hej! Vi är Medietekniksektionens styrelse under perioden 22/23. Vi
          representerar MT-eleverna gentemot LiU, verkar för en bättre
          arbetsmiljö för oss studenter och anordnar event för MT:are. Vi
          anordnar också föreläsningar där företag och alumner berättar om livet
          efter examen.
        </Typography>
        <Typography variant="body1" align="center" sx={{ fontSize: "24px" }}>
          Protokoll, stadgar och annat skoj från styrelsen hittar du
          <a
            href="https://drive.google.com/drive/folders/1xyIUmboYlJ3GJC0i6G_nVXaQTA34b2Iz?usp=sharing"
            target="blank"
          >
            här.
          </a>
        </Typography>
        <Typography variant="body1" align="center" sx={{ fontSize: "24px" }}>
          Allmäna frågor till sektionen skickas till
          <a href="mailto:info@medieteknik.nu">info@medieteknik.nu.</a>
        </Typography>
      </Container>

      {/* Mette & #3Cant */}

      <WavyBackground bgColor="#13283c" textColor="#FFF">
        <Container maxWidth="lg">
          <ImageWithSummary
            imageSrc={require("../../assets/3cant.jpg")}
            direction="row-reverse"
          >
            <Stack>
              <Typography variant="h2" align="center" sx={{ color: "inherit" }}>
                3CANT
              </Typography>
              <Typography
                variant="body1"
                align="center"
                sx={{ color: "inherit", fontSize: "24px" }}
              >
                3Cant är festeriet för civilinjengörerna i Norrköping. De
                arrangerar fester i alla dess slag bla bla bla bla.
              </Typography>
              <Button
                href="https://www.3cant.com/"
                variant="contained"
                size="large"
                sx={{
                  margin: "20px auto",
                  backgroundColor: "#EC6610",
                  color: "inherit",
                }}
              >
                Läs Mer
              </Button>
            </Stack>
          </ImageWithSummary>
          <ImageWithSummary
            imageSrc={require("../../assets/mette.jpg")}
            direction="row"
          >
            <Stack>
              <Typography variant="h2" align="center" sx={{ color: "inherit" }}>
                METTE
              </Typography>
              <Typography
                variant="body1"
                align="center"
                sx={{ color: "inherit", fontSize: "24px" }}
              >
                Mette är sektionens tjejförening som jobbar för att främja
                gemenskapen mellan alla tjejer och icke-binära på MT-programmet!
              </Typography>
              <Button
                href="/"
                variant="contained"
                size="large"
                sx={{
                  margin: "20px auto",
                  backgroundColor: "#EC6610",
                  color: "inherit",
                }}
              >
                Läs Mer
              </Button>
            </Stack>
          </ImageWithSummary>
        </Container>
      </WavyBackground>

      {/* Styrelse-Grid*/}

      <Grid container maxWidth="lg" sx={{ margin: "auto", padding: "50px 0" }}>
        {styrare.map((styr, index) => (
          <Grid
            item
            xs={6}
            md={3}
            key={index}
            sx={{ p: "20px", height: "100%" }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={fadeInUp}
            >
              <PresentationCard
                user={styr}
                openInfo={() => handleUserClick(index)}
              />
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {modalOpen && (
        <PresentationModal
          open={modalOpen}
          handleClose={() => setModalOpen(false)}
          user={styrare[activeUser]}
        />
      )}
    </motion.div>
  );
};

export default PresentationPage;
