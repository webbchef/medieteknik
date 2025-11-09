'use client';

import { motion } from "framer-motion";
import { useState, useContext } from "react";
import { MobileStateContext } from "../../contexts/MobileContexts";
import BackgroundImage from "../../components/general/BackgroundImage";
import ImageWithSummary from "../../components/general/ImageWithSummary";
import StyledButton from "../../components/general/StyledButton";
import SocialMediaIcons from "../../components/general/SocialMediaIcons";
import alumnContent from "../../content/alumn.json";
import externalPagesContent from "../../content/external_pages_mt.json";
import type { Alumn, ExternalPagesMT } from "../../utils/types";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  const { isMobile, isIpad, isDesktop } = useContext(MobileStateContext);
  
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
      className="overflow-hidden bg-white"
    >
      <BackgroundImage pageName="OM MT" imgSrc="/images/axels/styrelsen-5.webp" />

      {/* Civilingenjör i Medieteknik */}
      <div className="flex justify-center mb-5">
        <ImageWithSummary
          imageSrc="/images/GroupPictures/Styrelsen2526.jpg"
        >
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl font-bold my-4 text-black">Civilingenjör i Medieteknik</h2>

            <p className="my-4 text-black">
              Medieteknik ger dig en bred civilingenjörsutbildning med grunden i
              visualisering och 3D-grafik. Våra alumner jobbar med många olika
              saker, till exempel garanterad färgkvalitet i trycksaker,
              filmeffekter i Hollywood, 3D-visualiseringar av röntgenbilder och
              galaxer, fysiksimuleringar inom spelbranschen, virtuella möbler i
              Ikea-katalogen och som IT-konsulter. Om du upptäcker att
              medieteknik verkligen är din grej finns det möjlighet att
              doktorera också.
            </p>

            <SocialMediaIcons />
          </div>
        </ImageWithSummary>
      </div>

      {/* Kurser, masterkurser, studievägledare */}
      <div className="flex justify-center bg-[#DEDEDE]">
        <div className={`p-6 mt-12 mb-12 flex flex-row justify-center ${isIpad ? 'w-[70%]' : ''}`}>
          {externalPages.map((item, index) => (
            <div
              key={index}
              className="flex-1 text-center p-4"
            >
              <div className="flex justify-center items-center">
                <svg className="w-8 h-8 text-[#EC6610]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>

                <h3 className="text-2xl font-bold mx-4 text-black">{item.title}</h3>
              </div>

              <p className="mb-12 text-black">{item.text}</p>

              <StyledButton src={item.link} external={true}>
                Läs mer
              </StyledButton>
            </div>
          ))}
        </div>
      </div>

      {/* Utlandsstudier */}
      <div className="flex justify-center">
        <ImageWithSummary imageSrc="/images/utlandsstudier.jpg">
          <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold my-2 text-black">Utlandsstudier</h2>

          <p className="my-4 text-black">
            Att studera utomlands som student från Linköpings Universitet kan
            vara en mycket berikande upplevelse. Det ger dig möjlighet att
            uppleva en annan kultur, förbättra dina språkkunskaper och få en
            bredare global syn på ditt ämne. Det kan vara en utmanande men
            också mycket givande upplevelse som kan hjälpa dig att utvecklas
            både personligt och akademiskt.
            <br /><br />
          </p>

          <StyledButton
            src="https://liu.se/artikel/utlandsstudier"
            external={true}
          >
            Läs mer
          </StyledButton>
        </div>
      </ImageWithSummary>
      </div>

      {/* Alumner */}
      <div className="p-12 flex justify-center bg-[#DEDEDE]">
        <div className="text-center my-4">
          <h2 className="text-3xl md:text-4xl font-bold text-black">Alumner</h2>
          <p className="text-black">
            Just nu ekar det tomt här!
            <br />
            <br /> Vill du synas här och inspirera blivande och nuvarande
            MT-studenter? Kontakta alumniansvarig enligt nedan.
          </p>
        </div>
      </div>

      {/* För dig som är alumn */}
      <div className="bg-white">
        <div className="m-14 flex flex-col border-l-4 border-[#e27743]">
          <div className="ml-14">
            <h3 className="text-2xl font-bold pb-4 text-black">För dig som är alumn</h3>
            <p className="text-black">
              Vi i styrelsen välkomnar varmt alla alumner som vill fortsätta
              att hålla kontakt med sektionen! På{" "}
              <a
                href="https://alumni.liu.se/"
                className="text-[#EC6610] underline"
              >
                LiUs alumninätverk
              </a>{" "}
              kan du registrera dig och få regelbunden information. Vill du
              komma hit och föreläsa? Du är varmt välkommen! Kontakta vår
              alumniansvarig.
            </p>

            <Button
              variant="default"
              className="mt-6 bg-[#EC6610] hover:bg-[#d15a0e]"
              asChild
            >
              <Link href="mailto:naringsliv@medieteknik.nu">
                <span className="px-2 text-white">Kontakta</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
