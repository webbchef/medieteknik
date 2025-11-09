'use client';

import React, { useContext, useEffect, useState } from "react";
import WavyBackground from "../general/WavyBackground";
import StyledButton from "../general/StyledButton";
import ImageCarousel from "./ImageCarousel";
import useInstagramPosts from "./useInstagramPosts";
import { MobileStateContext } from "../../contexts/MobileContexts";

export default function Studentkonto() {
  const [hasMounted, setHasMounted] = useState(false);
  const accessToken = process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN ?? "";
  const posts = useInstagramPosts(accessToken);
  const { isMobile, isIpad } = useContext(MobileStateContext);

  useEffect(() => {
    // Confirm component has mounted in the client environment
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  const paddingTop = isMobile ? "pt-[10px]" : isIpad ? "pt-[30px]" : "pt-[50px]";
  const paddingBottom = isMobile ? "pb-[10px]" : isIpad ? "pb-[30px]" : "pb-[70px]";

  return (
    <WavyBackground bgColor="#13283c" textColor="#FFFFFF">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-screen-lg w-full">
        <div
          className={`flex ${paddingTop} ${paddingBottom} min-h-[380px] flex-col items-center justify-center text-center ${
            accessToken === "" ? "md:col-span-2" : ""
          }`}
        >
          <h2 className="text-white text-4xl font-bold m-8">
            Studentkonto
          </h2>
          <p className="text-white m-8">
            Vill du få en inblick i hur det är att leva som en MT-student eller
            hur studentlivet är här i Norrköping?
            <br />
            <br />
            Då ska du följa vårat instagramkonto <i>medieteknik_student</i> där
            du varje vecka får du följa med en MT-student som delar med sig av
            sin vardag!
          </p>
          <StyledButton
            external={true}
            src="https://www.instagram.com/medieteknik_student/?hl=en"
          >
            Till kontot!
          </StyledButton>
        </div>
        {accessToken !== "" && (
          <div className="flex justify-center items-center">
            {posts && <ImageCarousel />}
          </div>
        )}
      </div>
    </WavyBackground>
  );
}
