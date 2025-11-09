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
      style={{ overflow: "hidden", background: "white" }}
    >
      {/* Page content will need to be migrated from the old about/index.tsx */}
      <BackgroundImage pageName="OM MT" imgSrc="/images/axels/styrelsen-6.webp" />
      <div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
        <h1>Om Medieteknik</h1>
        <p>Content to be migrated from pages/about/index.tsx</p>
      </div>
    </motion.div>
  );
}
