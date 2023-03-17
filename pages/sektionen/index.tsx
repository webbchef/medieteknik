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
import CopyText from "../../components/general/CopyText";
import StyledButton from "../../components/general/StyledButton";

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
        sx={{ width: "70vw", margin: "auto", padding: "20px 0 10px 0" }}
      >
        <Typography
          variant="h2"
          align="center"
          sx={{ margin: "40px 0", color: "inherit" }}
        >
          STYRELSEN
        </Typography>
        <Typography align="center" sx={{ marginBottom: "40px" }}>
          Hej! Vi är Medietekniksektionens styrelse under perioden 22/23. Vi
          representerar MT-eleverna gentemot LiU, verkar för en bättre
          arbetsmiljö för oss studenter och anordnar event för MT:are. Vi
          anordnar också föreläsningar där företag och alumner berättar om livet
          efter examen.
        </Typography>
        <Typography align="center">
          Protokoll, stadgar och annat skoj från styrelsen hittar du{" "}
          <a
            href="https://drive.google.com/drive/folders/1xyIUmboYlJ3GJC0i6G_nVXaQTA34b2Iz?usp=sharing"
            target="blank"
          >
            här.
          </a>
        </Typography>
        <Typography align="center">
          Allmäna frågor till sektionen skickas till:
          <CopyText text="info@medieteknik.nu" />
        </Typography>
      </Container>

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

      {/* Mette & #3Cant */}

      <WavyBackground bgColor="#13283c" textColor="#FFF">
        <Container maxWidth="lg" sx={{ p: 3 }}>
          <ImageWithSummary
            imageSrc={require("../../assets/mette.jpg")}
            direction="row"
          >
            <Stack>
              <Typography
                variant="h2"
                align="center"
                sx={{ color: "inherit", m: 2 }}
              >
                METTE
              </Typography>
              <Typography align="center" sx={{ color: "inherit" }}>
                Hej! Det är vi som är Medieteknikprogrammets tjejförening Mette!
                Vi är en förening för alla som identifierar sig som tjej eller
                icke-binär och studerar Medieteknik på Linköpings Universitet,
                campus Norrköping. Vi jobbar för att främja gemenskapen mellan
                alla tjejer och icke-binära på MT-programmet. Vi anordnar olika
                roliga aktiviteter, vissa är enbart för tjejer och icke-binära
                medan andra aktiviteter är till för alla som pluggar MT. Följ
                oss på Instagram och Facebook för att bli uppdaterad om våra
                kommande aktiviteter.
              </Typography>
              {/* <Button
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
              </Button> */}
              <StyledButton src="https://mette.nu/" external={true}>
                Läs mer
              </StyledButton>
            </Stack>
          </ImageWithSummary>
        </Container>
      </WavyBackground>
      <Container maxWidth="lg" sx={{ p: 3 }}>
        <ImageWithSummary
          imageSrc={require("../../assets/3cant.jpg")}
          direction="row-reverse"
        >
          <Stack>
            <Typography
              variant="h2"
              align="center"
              sx={{ color: "inherit", m: 2 }}
            >
              3CANT
            </Typography>
            <Typography align="center" sx={{ color: "inherit" }}>
              Hej! Det är vi som är 3Cant och vi är civilingenjörernas festeri!
              Vi består av 11 glada individer från antingen MT, ED eller KTS som
              är klädda i rosa skjorta och svarta hängselbyxor! Under vårt år
              arrangerar vi fester på trappan, framförallt vår stora
              Halloween-fest, men också inför våren en bal! Följ oss på sociala
              medier för att hänga med på vår resa, vi finns på Facebook,
              Instagram och på vår hemsida.
            </Typography>
            {/* <Button
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
            </Button> */}
            <StyledButton src="https://www.3cant.com/">Läs mer</StyledButton>
          </Stack>
        </ImageWithSummary>
      </Container>

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
