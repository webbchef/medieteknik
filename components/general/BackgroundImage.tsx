'use client';

import { useContext } from "react";
import styles from "./BackgroundImage.module.css";
import Image from "next/image";
import { MobileStateContext } from "../../contexts/MobileContexts";

interface InputProps {
  pageName?: string;
  imgSrc: string;
  children?: React.ReactNode;
}
export default function BackgroundImage(props: InputProps) {
  const { isMobile, isIpad, isDesktop } = useContext(MobileStateContext);
  const waveHeight = isDesktop ? "90px" : isIpad ? "60px" : "30px";

  return (
    <>
      <div
        className={`relative flex items-center justify-center h-[80vh] ${styles.container}`}
      >
        <Image
          src={props.imgSrc}
          fill
          className="object-cover"
          priority={true}
          alt={props.pageName || "Background image"}
        />
        {props.pageName ? (
          <h1 className="text-center w-full z-[4] text-white text-5xl md:text-6xl lg:text-7xl font-bold">
            {props.pageName}
          </h1>
        ) : (
          props.children
        )}
        <div className={styles.shape}>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            height={waveHeight}
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className={styles.shapeFill}
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
}
