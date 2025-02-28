import Head from "next/head";
import type { NextPage } from "next";
import { useState, useContext } from "react";
import { Button, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { MobileStateContext } from "../../contexts/MobileContexts";
import BackgroundImage from "../../components/general/BackgroundImage";
import Link from "next/link";
import { Alumn, ExternalPagesMT } from "../../utils/types";
import alumnContent from "../../content/alumn.json";
import externalPagesContent from "../../content/external_pages_mt.json";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import SocialMediaIcons from "../../components/general/SocialMediaIcons";
import StyledButton from "../../components/general/StyledButton";
import ImageWithSummary from "../../components/general/ImageWithSummary";

// export default function PresentationPage() {
const PresentationPage: NextPage = () => {
  const { isMobile, isIpad, isDesktop } = useContext(MobileStateContext);
  // console.log("Mobile " + isMobile);
  // console.log("Ipad " + isIpad);
  // console.log("Desktop " + isDesktop);

  const alumn: Alumn[] = alumnContent;
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
        <title>Medieteknik.nu | Om MT</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/logotyp_svart_text.png" />
      </Head>

      {/* <Grid container sx={{ marginTop: "100px" }}>
        <Typography variant="h1">OM MT</Typography>
      </Grid> */}

      {/* {isMobile ? <p>Mobile</p> : <p>desktop or ipad</p>}
      <Grid container></Grid>
      <Button variant="contained" color="secondary">
        Test
      </Button> */}

      <Grid
        container
        sx={{
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <BackgroundImage
          pageName="OM MT"
          imgSrc="/images/axels/styrelsen-5.webp"
        />

        {/* ----------Civilingengör i Medieteknik ------------*/}
        <ImageWithSummary
          //imageSrc="/images/axels/styrelsen-1.webp"
          imageSrc="/images/GroupPictures/Styrelsen2425.jpg"
          direction="row-reverse"
        >
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Typography variant="h2" sx={{ margin: 2 }}>
              Civilingenjör i Medieteknik
            </Typography>

            <Typography sx={{ margin: 2 }}>
              Medieteknik ger dig en bred civilingenjörsutbildning med grunden i
              visualisering och 3D-grafik. Våra alumner jobbar med många olika
              saker, till exempel garanterad färgkvalitet i trycksaker,
              filmeffekter i Hollywood, 3D-visualiseringar av röntgenbilder och
              galaxer, fysiksimuleringar inom spelbranschen, virtuella möbler i
              Ikea-katalogen och som IT-konsulter. Om du upptäcker att
              medieteknik verkligen är din grej finns det möjlighet att
              doktorera också.
            </Typography>

            <SocialMediaIcons />
          </Grid>
        </ImageWithSummary>
        {/* ----------END Civilingengör i Medieteknik ------------*/}

        {/* ----------Kurser, masterkurser, studievägledare ------------*/}
        <Grid
          container
          sx={{ justifyContent: "center", background: "#DEDEDE" }}
        >
          <Grid
            container
            sx={[
              {
                padding: 3,
                marginTop: 5,
                marginBottom: 5,
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              },
              isIpad ? { width: "70%" } : {},
            ]}
          >
            {externalPages.map((item, index) => (
              <Grid
                item
                key={index}
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

                <Typography sx={{ marginBottom: 5 }}>{item.text}</Typography>

                <StyledButton src={item.link} external={true}>
                  Läs mer
                </StyledButton>
              </Grid>
            ))}
          </Grid>
        </Grid>
        {/* ----------END Kurser, masterkurser, studievägledare ------------*/}

        {/* ----------Utlandsstudier ------------*/}
        {/* <Grid
          container
          spacing={1}
          sx={{
            padding: 9,
            background: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        > */}
        {/* <Grid
            item
            xs={isDesktop ? 6 : 12}
            sx={{ display: "flex", justifyContent: "right" }}
          >
            <img
              src={gruppbild.src}
              style={{ height: "90%", width: "80%", objectFit: "contain" }}
            />
          </Grid> */}
        <ImageWithSummary imageSrc="/images/utlandsstudier.jpg">
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              // m: "50px",
            }}
          >
            <Typography variant="h2" sx={{ margin: 1 }}>
              Utlandsstudier
            </Typography>

            <Typography sx={{ margin: 2 }}>
              Att studera utomlands som student från Linköpings Universitet kan
              vara en mycket berikande upplevelse. Det ger dig möjlighet att
              uppleva en annan kultur, förbättra dina språkkunskaper och få en
              bredare global syn på ditt ämne. Det kan vara en utmanande men
              också mycket givande upplevelse som kan hjälpa dig att utvecklas
              både personligt och akademiskt.
              <br></br>
            </Typography>

            <StyledButton
              src="https://liu.se/artikel/utlandsstudier"
              external={true}
            >
              Läs mer
            </StyledButton>
          </Grid>
        </ImageWithSummary>
        {/* </Grid> */}
        {/* ----------END Utlandsstudier ------------*/}

        {/* ----------Alumner ------------*/}
        <Grid
          container
          spacing={1}
          sx={{ padding: 6, justifyContent: "center", background: "#DEDEDE" }}
        >
          <Grid sx={{ textAlign: "center", margin: 2 }}>
            <Typography variant="h2">Alumner</Typography>
            <Typography>
              Just nu ekar det tomt här!
              <br />
              <br /> Vill du synas här och inspirera blivande och nuvarande
              MT-studenter? Kontakta alumniansvarig enligt nedan.
            </Typography>

            {/* <Grid container>
              {alumn.map((alumn, index) => (
                <Grid
                  item
                  xs={12}
                  md={6}
                  lg={3}
                  key={index}
                  sx={{ p: "20px", height: "100%" }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    variants={fadeInUp}
                  >
                    <PresentationAlumn
                      user={alumn}
                      openInfo={() => handleUserClick(index)}
                    />
                  </motion.div>
                </Grid>
              ))}
            </Grid> */}
          </Grid>
        </Grid>

        <Grid container sx={{ background: "white" }}>
          <Grid
            item
            xs={12}
            md={7}
            sx={{
              m: 7,
              display: "flex",
              flexDirection: "column",
              borderLeft: 3,
              borderColor: "#e27743",
            }}
          >
            <Grid item sx={{ marginLeft: 7 }}>
              <Typography
                variant="h3"
                sx={{ fontWeight: "bold", paddingBottom: 2 }}
              >
                För dig som är alumn
              </Typography>
              <Typography>
                Vi i styrelsen välkomnar varmt alla alumner som vill fortsätta
                att hålla kontakt med sektionen! På{" "}
                <a
                  href="https://alumni.liu.se/"
                  style={{ color: "#EC6610", textDecoration: "underline" }}
                >
                  LiUs alumninätverk
                </a>{" "}
                kan du registrera dig och få regelbunden information. Vill du
                komma hit och föreläsa? Du är varmt välkommen! Kontakta vår
                alumniansvarig.
              </Typography>

              <Button
                variant="contained"
                color="secondary"
                sx={{ marginTop: 3 }}
                component="a"
                LinkComponent={Link}
                href="mailto:naringsliv@medieteknik.nu"
              >
                <Typography
                  sx={[
                    {
                      paddingRight: 1,
                      paddingLeft: 1,
                      textAlign: "center",
                      color: "white",
                    },
                  ]}
                >
                  Kontakta
                </Typography>
              </Button>
            </Grid>
          </Grid>

          {/* <Grid
            item
            xs={2}
            sx={{ m: 7, display: "flex", justifyContent: "right" }}
          >
            <img
              src={gruppbild.src}
              style={{ height: "100%", width: "100%", objectFit: "contain" }}
            />
          </Grid> */}
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default PresentationPage;
