'use client';

import { motion } from "framer-motion";
import { useContext } from "react";
import { MobileStateContext } from "../../contexts/MobileContexts";
import Events from "../../components/studentliv/Events";
import ImageCarousel from "../../components/studentliv/ImageCarousel";
import Studentkonto from "../../components/studentliv/Studentkonto";
import BackgroundImage from "../../components/general/BackgroundImage";
import StyledButton from "../../components/general/StyledButton";
import ImageWithSummary from "../../components/general/ImageWithSummary";

export default function StudentlivPage() {
  const { isMobile, isIpad, isDesktop } = useContext(MobileStateContext);
  
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial="initial"
      animate="animate"
      className="overflow-hidden bg-white"
    >
      <BackgroundImage pageName="STUDENTLIV" imgSrc="/images/nollep5.jpg" />

      <div className="flex justify-center">
        {/* Bostad */}
        <ImageWithSummary imageSrc="/images/hus.jpg">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl font-bold my-4 text-black">Bostad</h2>
            <p className="my-4 text-black">
              Som student i Norrköping finns det flera olika boendemöjligheter.
              Studentbo i Norrköping tillhandahåller flera olika boenden med
              gångavstång till Campus. Studentbo erbjuder även bostadsgaranti för dig som är nyantagen student till höstterminen, vilket leder till lite mindre stress till dig som student.
              <br />
              <br />
              Det finns även bra pendlingsmöjligheter från Linköping.
              Campusbussen är gratis för alla studenter och åker mellan Campus
              US, Campus Valla och Campus Norrköping.
            </p>
            <StyledButton
              src="https://hyresbostader.se/studentbo"
              external={true}
            >
              Till studentbo.se
            </StyledButton>
            <StyledButton
              src="https://studentbo.se/sokande/bostadsgaranti/"
              external={true}
            >
              Om bostadsgaranti
            </StyledButton>
          </div>
        </ImageWithSummary>
      </div>

      {/* Nolle-P Image */}
      <div className="pt-6 pb-6">
        <img
          src="/images/nollep6.jpg"
          alt="Nolle-P"
          className="h-[50vh] w-full object-cover object-[center_25%]"
        />
        <p className="text-right w-full -mt-8 text-white mr-3">
          Foton: Sofia Krantz
        </p>
      </div>

      {/* Nolle-P Section */}
      <div className="flex justify-center">
        <div className={`text-center p-4 mt-2 mb-14 ${isDesktop ? 'w-[60%]' : 'w-[90%]'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-black">Nolle-P</h2>
          <p className="text-black">
            Under Nolle-P får du lära känna alla andra MT:are, göra stela
            lära-känna-varandra-aktiviteter, festa, fräscha upp gymnasiematten,
            och bekanta dig med LiUs studentkultur och -traditioner. Denna
            period pågår under två veckor och är ett perfekt tillfälle att
            bekanta dig med dina klasskompisar.
            <br />
            <br />
            Under Nolle-P anordnas aktiviter nästan varje lunch och kväll och
            under dagen är det fokus på plugg. Efter Nolle-P drar flera andra
            kurser igång och de roliga eventen sker lite mer utspritt!
            <br />
            <br />
            PS! Glöm inte matlådan ;)
          </p>
        </div>
      </div>

      {/* Student Accounts */}
      <div className="mt-12 mb-12">
        <Studentkonto />
      </div>

      {/* Sektionens Event */}
      <div className="flex justify-center">
        <div className={`text-center p-6 ${isDesktop ? 'w-[50%]' : isIpad ? 'w-[70%]' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center w-full mb-5 text-black">
            Sektionens event
          </h2>
          <p className="text-center w-full text-black">
            Utöver allmänna event anordrar styrelsen under året event för endast
            MT-studenter. Flera av dessa event anordas med hjälp av olika
            utskott som består av engagerade MT-studenter. Exempel på utskott är
            event- och midsommarutskottet.
          </p>
          <Events />
        </div>
      </div>
    </motion.div>
  );
}
