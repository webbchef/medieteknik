'use client';

import { motion } from "framer-motion";
import { useContext, useEffect, useRef, useState } from "react";
import BackgroundImage from "../components/general/BackgroundImage";
import ImageWithSummary from "../components/general/ImageWithSummary";
import StyledButton from "../components/general/StyledButton";
import WavyBackground from "../components/general/WavyBackground";
import Carousel from "../components/home/Carousel";
import MtValues from "../components/home/mtValues";
import carouselImages from "../content/carouselItems.json";
import jsonValues from "../content/values.json";
import { MobileStateContext } from "../contexts/MobileContexts";
import type { CarouselItem, Value } from "../utils/types";

export default function Home() {
  const { isMobile, isIpad, isDesktop } = useContext(MobileStateContext);

  const [cubeWidth, setCubeWidth] = useState<string>("150px");

  useEffect(() => {
    if (isMobile) {
      setCubeWidth("70px");
    } else {
      setCubeWidth("150px");
    }
  }, [isMobile]);

  const constraintsRef1 = useRef(null);
  const constraintsRef2 = useRef(null);
  const constraintsRef3 = useRef(null);
  const constraintsRef4 = useRef(null);

  const values: Value[] = jsonValues;
  const carouselItems: CarouselItem[] = carouselImages;

  return (
    <motion.div
      animate="animate"
      initial="initial"
      style={{ overflow: "hidden", background: "white" }}
    >
      <BackgroundImage imgSrc="/images/axels/styrelsen-6.webp">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%", height: "80vh", zIndex: 100 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <motion.div ref={constraintsRef1}>
              <motion.div
                drag
                dragConstraints={constraintsRef1}
                style={{
                  backgroundColor: "#EC6610",
                  width: cubeWidth,
                  height: cubeWidth,
                }}
              />
            </motion.div>
            <div style={{ margin: isMobile ? "10px" : "20px" }}></div>
            <motion.div ref={constraintsRef2}>
              <motion.div
                drag
                dragConstraints={constraintsRef2}
                style={{
                  backgroundColor: "#3b484f",
                  width: cubeWidth,
                  height: cubeWidth,
                }}
              />
            </motion.div>
          </div>
          <div style={{ margin: "10px" }}></div>
          <motion.div ref={constraintsRef3}>
            <motion.div
              drag
              dragConstraints={constraintsRef3}
              style={{
                fontFamily: "Lato, sans-serif !important",
                fontSize: isMobile ? "25px" : "45px",
                color: "white",
              }}
            >
              CIVILINGENJÖR
            </motion.div>
          </motion.div>
          <motion.div ref={constraintsRef4}>
            <motion.div
              drag
              dragConstraints={constraintsRef4}
              style={{
                fontFamily: "Barlow, sans-serif !important",
                fontWeight: "bold",
                fontSize: isMobile ? "30px" : "64px",
                color: "white",
              }}
            >
              MEDIETEKNIK
            </motion.div>
          </motion.div>
        </div>
      </BackgroundImage>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginLeft: "1rem", marginRight: "1rem" }}>
        <div style={{ maxWidth: "1200px", marginBottom: "2rem", width: "100%" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "1rem" }}>
            <h2 style={{ paddingTop: "2.5rem", color: "black", textAlign: "center" }}>
              Vad är MT?
            </h2>
            <p style={{ color: "black", textAlign: "center" }}>
              Hej! Välkommen till sidan om Medieteknik, eller MT som vi kallar
              det. Vår utbildning heter Medieteknik eftersom den handlar om
              tekniken bakom de olika medierna, d.v.s. ljud, bild, video,
              spel, m.m. Medietekniks logotyp är två kvadrater (men vi brukar
              kalla dem kuber). Den orangea kuben representerar kreativitet
              och de mjuka ämnena i medieteknik, och den grå kuben
              representerar teknik och de hårda ämnena. Utöver detta är det
              stort fokus på problemlösning, vilket är en viktig förmåga som
              civilingenjör.
            </p>
            <StyledButton src="/about">Läs mer</StyledButton>
          </div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", maxWidth: "1200px", justifyContent: "space-around", gap: "2rem" }}>
          {values.map((value, index) => (
            <div key={index} style={{ flex: "1 1 300px", maxWidth: "400px" }}>
              <MtValues
                description={value.description}
                title={value.title}
                image={value.image}
              />
            </div>
          ))}
        </div>
        <div style={{ width: "100%" }}>
          <ImageWithSummary
            imageSrc="/images/nollep6.jpg"
            title="Studentliv"
          >
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <p style={{ marginTop: "1.5rem", textAlign: "center" }}>
                De flesta som pluggar här flyttar hemifrån för att komma till
                Norrköping och det kan kännas rätt läskigt att lämna allt man
                vuxit upp med. Men oroa dig inte, det som väntar här är vad de
                flesta på MT minns som den bästa delen av deras studietid:
                Nolleperioden, eller Nolle-P. Nolle-P heter så eftersom de nya
                eleverna inte börjar ettan innan sista dagen på Nolle-P. Efter
                Nolle-P finns det massor av{" "}
                <a
                  href="https://studentlivet.se/orbi-associations/"
                  style={{ color: "#EC6610", textDecoration: "underline" }}
                >
                  föreningar
                </a>{" "}
                att engagera sig i för att främja studentlivet.
              </p>
              <StyledButton src="/studentliv">Läs mer här</StyledButton>
            </div>
          </ImageWithSummary>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <WavyBackground bgColor="#13283c">
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Carousel carouselItems={carouselItems} />
          </div>
        </WavyBackground>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginLeft: "1rem", marginRight: "1rem" }}>
        <div style={{ width: "100%" }}>
          <ImageWithSummary
            imageSrc="/images/mtd24.jpg"
            title="Medieteknikdagen"
          >
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <p style={{ marginTop: "1.5rem", textAlign: "center" }}>
                Medieteknikdagen är våran arbetsmarknadsdag och är ett ideellt
                arrangemang drivet av och för studenter. Syftet är att knyta
                kontakter mellan studenter, medietekniker ute i arbetslivet och
                företagen inom branschen. MTD är ett tillfälle för företag och
                studenter att inspirera, informera och integrera med varandra.
                Såväl företag som studenter får här en chans att visa det allra
                senaste inom medieteknik.
              </p>
              <StyledButton
                external={true}
                src="https://www.medieteknikdagen.se/"
              >
                Läs mer här
              </StyledButton>
            </div>
          </ImageWithSummary>
        </div>
      </div>
    </motion.div>
  );
}
