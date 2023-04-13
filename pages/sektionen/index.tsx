import Head from "next/head";
import type { NextPage } from "next";
import { useState, useContext } from "react";
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
import gruppbild from "../../public/images/gruppbild.jpg";
import CopyText from "../../components/general/CopyText";
import StyledButton from "../../components/general/StyledButton";

{/* For the new section */ }
import { MobileStateContext } from "../../contexts/MobileContexts";
import externalPagesContent from "../../content/external_documents_mt.json";
import { ExternalPagesMT } from "../../utils/types";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";


const PresentationPage: NextPage = () => {
  const styrare: Styrare[] = content;

  {/* For the new section */ }
  const { isMobile, isIpad, isDesktop } = useContext(MobileStateContext);
  const externalPages: ExternalPagesMT[] = externalPagesContent;

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [activeUser, setActiveUser] = useState<number>(0);

  function handleUserClick(index: number) {
    setActiveUser(index);
    setModalOpen(true);
  }

  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial="initial"
      animate="animate"
      style={{ overflow: "hidden", background: "white" }}
    >
      <Head>
        <title>Medieteknik.nu | Sektionen</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BackgroundImage
        pageName="SEKTIONEN"
        imgSrc="/images/axels/styrelsen-4.jpg"
      />

      {/* Styrelsen */}

      <Container
        maxWidth="lg"
        sx={{ width: "70vw", margin: "auto", padding: "20px 0 10px 0" }}
      >
        <Typography
          variant="h2"
          align="center"
          sx={{ margin: "40px 0", color: "black" }}
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
        <Grid
          item
          xs={10}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "30px",
          }}
        >
          <img src="/images/axels/styrelsen-3.jpg" width="70%" />
        </Grid>
        
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

      {/* Documents */}
      <Grid
          container
          sx={{ justifyContent: "center", background: "#FFFFF" }}
        >
        <Grid
            container
            sx={[
              {
                padding: 3,
                marginTop: -5,
                marginBottom: 2,
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              },
              isIpad ? { width: "70%" } : {},
            ]}
          >
            {(() => {
              const item = externalPages[0];

              return (
                <>
                  <Grid
                    item
                    xs={12}
                    lg={4}
                    sx={{
                      alignItems: "center",
                      textAlign: "center",
                      padding: 2,
                    }}
                  >
                    <Grid
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <CreateOutlinedIcon color="secondary" fontSize="large" />

                      <Typography variant="h3" sx={{ fontWeight: "bold", m: 2 }}>
                        {item.title}
                      </Typography>
                    </Grid>

                    {item.text.split('\n').map((line, index) => (
                      <Typography key={index} sx={{ marginBottom: 0 }}>
                        {line}
                      </Typography>
                    ))}


                    <StyledButton src={item.link} external={true}>
                      Läs mer
                    </StyledButton>
                  </Grid>
                </>
              );
            })()}
        </Grid>
      </Grid>
      {/* End of Documents */}
      {/* Mette & #3Cant */}

      <WavyBackground bgColor="#13283c" textColor="#FFF">
        <Container maxWidth="lg" sx={{ p: 3 }}>
          <ImageWithSummary
            imageSrc={"/images/mette.jpg"}
            imgWidth="700px"
            imgHeight="500px"
          >
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
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
              <StyledButton src="https://mette.nu/" external={true}>
                Läs mer
              </StyledButton>
            </Grid>
          </ImageWithSummary>
        </Container>
      </WavyBackground>
      <Container maxWidth="lg" sx={{ p: 3 }}>
        <ImageWithSummary
          imageSrc={"/images/3cant.jpg"}
          direction="row-reverse"
          imgWidth="700px"
          imgHeight="500px"
        >
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h2"
              align="center"
              sx={{ color: "black", m: 2 }}
            >
              3CANT
            </Typography>
            <Typography align="center" sx={{ color: "black" }}>
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
            <StyledButton src="https://www.3cant.com/" external={true}>
              Läs mer
            </StyledButton>
          </Grid>
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
