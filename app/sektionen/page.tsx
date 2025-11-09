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
      style={{ overflow: "hidden", background: "white" }}
    >
      <BackgroundImage pageName="SEKTIONEN" imgSrc="/images/gruppbild.jpg" />
      <div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
        <h1>Sektionen</h1>
        <p>Content to be migrated from pages/sektionen/index.tsx</p>
      </div>
      
      <PresentationModal
        open={modalOpen}
        handleClose={() => setModalOpen(false)}
        user={styrare[activeUser]}
      />
    </motion.div>
  );
}
