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
      className="overflow-hidden bg-white"
    >
      <BackgroundImage imgSrc="/images/axels/styrelsen-6.webp">
        <div className="flex flex-col items-center justify-center w-full h-[80vh] z-100">
          <div className="flex items-center justify-center">
            <motion.div ref={constraintsRef1}>
              <motion.div
                drag
                dragConstraints={constraintsRef1}
                className="bg-[#EC6610]"
                style={{
                  width: cubeWidth,
                  height: cubeWidth,
                }}
              />
            </motion.div>
            <div className={isMobile ? "mx-2.5" : "mx-5"}></div>
            <motion.div ref={constraintsRef2}>
              <motion.div
                drag
                dragConstraints={constraintsRef2}
                className="bg-[#3b484f]"
                style={{
                  width: cubeWidth,
                  height: cubeWidth,
                }}
              />
            </motion.div>
          </div>
          <div className="my-2.5"></div>
          <motion.div ref={constraintsRef3}>
            <motion.div
              drag
              dragConstraints={constraintsRef3}
              className={`font-['Lato',sans-serif] ${isMobile ? 'text-[25px]' : 'text-[45px]'} text-white`}
            >
              CIVILINGENJÖR
            </motion.div>
          </motion.div>
          <motion.div ref={constraintsRef4}>
            <motion.div
              drag
              dragConstraints={constraintsRef4}
              className={`font-['Barlow',sans-serif] font-bold ${isMobile ? 'text-[30px]' : 'text-[64px]'} text-white`}
            >
              MEDIETEKNIK
            </motion.div>
          </motion.div>
        </div>
      </BackgroundImage>
      <div className="flex flex-col items-center mx-4">
        <div className="max-w-[1200px] mb-8 w-full">
          <div className="flex flex-col items-center mb-4">
            <h2 className="pt-10 text-black text-center">
              Vad är MT?
            </h2>
            <p className="text-black text-center">
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
        <div className="flex flex-wrap max-w-[1200px] justify-around gap-8">
          {values.map((value, index) => (
            <div key={index} className="flex-[1_1_300px] max-w-[400px]">
              <MtValues
                description={value.description}
                title={value.title}
                image={value.image}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center w-full">
          <ImageWithSummary
            imageSrc="/images/nollep6.jpg"
            title="Studentliv"
          >
            <div className="flex flex-col items-center">
              <p className="mt-6 text-center text-black">
                De flesta som pluggar här flyttar hemifrån för att komma till
                Norrköping och det kan kännas rätt läskigt att lämna allt man
                vuxit upp med. Men oroa dig inte, det som väntar här är vad de
                flesta på MT minns som den bästa delen av deras studietid:
                Nolleperioden, eller Nolle-P. Nolle-P heter så eftersom de nya
                eleverna inte börjar ettan innan sista dagen på Nolle-P. Efter
                Nolle-P finns det massor av{" "}
                <a
                  href="https://studentlivet.se/orbi-associations/"
                  className="text-[#EC6610] underline"
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
      <div className="flex justify-center">
        <WavyBackground bgColor="#13283c">
          <div className="flex flex-col items-center">
            <Carousel carouselItems={carouselItems} />
          </div>
        </WavyBackground>
      </div>
      <div className="flex flex-col items-center mx-4">
        <div className="flex justify-center w-full">
          <ImageWithSummary
            imageSrc="/images/GroupPictures/mtd25.jpg"
            title="Medieteknikdagen"
          >
            <div className="flex flex-col items-center">
              <p className="mt-6 text-center text-black">
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
