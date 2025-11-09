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
      style={{ overflow: "hidden", background: "white" }}
    >
      <BackgroundImage pageName="STUDENTLIV" imgSrc="/images/nollep5.jpg" />
      <div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
        <h1>Studentliv</h1>
        <p>Content to be migrated from pages/studentliv/index.tsx</p>
        
        <Events />
        <ImageCarousel />
        <Studentkonto />
      </div>
    </motion.div>
  );
}
