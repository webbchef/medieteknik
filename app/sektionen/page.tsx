'use client';

import { motion } from "framer-motion";
import { useState, useContext } from "react";
import content from "../../content/styrare.json";
import PresentationModal from "../../components/sektionen/PresentationModal";
import PresentationCard from "../../components/sektionen/PresentationCard";
import ImageWithSummary from "../../components/general/ImageWithSummary";
import WavyBackground from "../../components/general/WavyBackground";
import BackgroundImage from "../../components/general/BackgroundImage";
import CopyText from "../../components/general/CopyText";
import StyledButton from "../../components/general/StyledButton";
import { MobileStateContext } from "../../contexts/MobileContexts";
import externalPagesContent from "../../content/external_documents_mt.json";
import type { Styrare, ExternalPagesMT } from "../../utils/types";
import { fadeInUp } from "../../animations/constants";

export default function SektionenPage() {
  const styrare: Styrare[] = content;
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
      className="overflow-hidden bg-white"
    >
      <BackgroundImage
        pageName="SEKTIONEN"
        imgSrc="/images/axels/styrelsen-4.webp"
      />

      {/* Styrelsen */}
      <div className="max-w-screen-lg w-[70vw] mx-auto py-5 px-0 pt-5">
        <h2 className="text-3xl md:text-4xl text-center my-6 text-black">
          STYRELSEN
        </h2>

        <p className="text-center mb-10">
          Hej! Vi är Medietekniksektionens styrelse under perioden 25/26. Vi
          representerar MT-eleverna gentemot LiU, verkar för en bättre
          arbetsmiljö för oss studenter och anordnar event för MT:are. Vi
          anordnar också föreläsningar där företag och alumner berättar om livet
          efter examen.
        </p>

        <div className="flex items-center justify-center mb-8">
          <img
            src="/images/GroupPictures/Styrelsen2526.jpg"
            alt="Styrelsen 25/26"
            className={isMobile ? 'w-[125%]' : isIpad ? 'w-[150%]' : 'w-full'}
          />
        </div>
      </div>

      {/* Styrelse-Grid */}
      <div className={`grid grid-cols-2 md:grid-cols-4 max-w-screen-lg mx-auto ${isMobile ? 'p-0' : 'py-12'}`}>
        {styrare.map((styr, index) => (
          <div key={index} className="p-5 h-full">
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
          </div>
        ))}
      </div>

      {/* Documents */}
      <div className="flex justify-center bg-white">
        <div className={`p-6 -mt-5 mb-4 flex flex-col justify-center items-center ${isIpad ? 'w-[70%]' : ''}`}>
          <div className="flex justify-center items-center">
            <svg className="w-8 h-8 text-[#EC6610]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>

            <h3 className="text-2xl font-bold mx-4">Dokument</h3>
          </div>

          <p className="text-center">
            Protokoll, stadgar och annat skoj från styrelsen hittar du{" "}
            <a
              href="https://drive.google.com/drive/folders/1xyIUmboYlJ3GJC0i6G_nVXaQTA34b2Iz?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#EC6610] underline"
            >
              här.
            </a>
          </p>
          <p className="text-center">
            Allmänna frågor till sektionen skickas till:
          </p>
          <CopyText text="info@medieteknik.nu" align="center" />
          <StyledButton
            src="https://drive.google.com/drive/folders/1xyIUmboYlJ3GJC0i6G_nVXaQTA34b2Iz?usp=sharing"
            external={true}
          >
            Läs mer
          </StyledButton>
        </div>
      </div>

      {/* Mette & 3Cant */}
      <WavyBackground bgColor="#13283c" textColor="#FFF">
        <div className="flex justify-center">
          <ImageWithSummary imageSrc={"/images/GroupPictures/Mette25_26.jpg"}> 
            <div className="flex flex-col items-center">
              <h2 className="text-3xl md:text-4xl text-center text-inherit my-4">
                METTE
              </h2>
              <p className="text-center text-inherit">
                Hej! Det är vi som är Medieteknikprogrammets tjejförening Mette!
                Vi är en förening för alla som identifierar sig som tjej eller
                icke-binär och studerar Medieteknik på Linköpings Universitet,
                campus Norrköping. Vi jobbar för att främja gemenskapen mellan
                alla tjejer och icke-binära på MT-programmet. Vi anordnar olika
                roliga aktiviteter, vissa är enbart för tjejer och icke-binära
                medan andra aktiviteter är till för alla som pluggar MT. Följ
                oss på Instagram och Facebook för att bli uppdaterad om våra
                kommande aktiviteter.
              </p>
              <StyledButton src="https://www.mette.nu/" external={true}>
                Läs mer
              </StyledButton>
            </div>
          </ImageWithSummary>
        </div>
      </WavyBackground>

      <div className="flex justify-center">
        <ImageWithSummary
          imageSrc={"/images/GroupPictures/3cant_2526.png"}
        >
          <div className="flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl text-center text-black my-4">
              3CANT
            </h2>
            <p className="text-center text-black">
              Hej! Det är vi som är 3Cant och vi är civilingenjörernas festeri!
              Vi består av 11 glada individer från antingen MT, ED eller KTS som
              är klädda i rosa skjorta och svarta hängselbyxor! Under vårt år
              arrangerar vi fester på trappan, framförallt vår stora
              Halloween-fest, men också inför våren en bal! Följ oss på sociala
              medier för att hänga med på vår resa, vi finns på Facebook,
              Instagram och på vår hemsida.
            </p>
            <StyledButton src="https://www.3cant.com/" external={true}>
              Läs mer
            </StyledButton>
          </div>
        </ImageWithSummary>
      </div>

      {modalOpen && (
        <PresentationModal
          open={modalOpen}
          handleClose={() => setModalOpen(false)}
          user={styrare[activeUser]}
        />
      )}
    </motion.div>
  );
}
