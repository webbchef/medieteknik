'use client';

import styles from "./WavyBackground.module.css";
import { useContext } from "react";
import { MobileStateContext } from "../../contexts/MobileContexts";

interface InputProps {
  bgColor: string;
  children: React.ReactNode;
  textColor?: string;
}

export default function WavyBackground(props: InputProps) {
  const { isMobile, isIpad, isDesktop } = useContext(MobileStateContext);

  const marginTopBottom = isDesktop ? "my-[69px]" : isIpad ? "my-[59px]" : "my-[19px]";
  const topWavePosition = isDesktop ? "-bottom-[69px]" : isIpad ? "-bottom-[59px]" : "-bottom-[19px]";
  const bottomWavePosition = isDesktop ? "-top-[69px]" : isIpad ? "-top-[59px]" : "-top-[19px]";
  const waveHeight = isDesktop ? "70px" : isIpad ? "60px" : "20px";

  return (
    <div className={`relative ${marginTopBottom} ${props.textColor ? `text-[${props.textColor}]` : ''}`}>
      <div
        className={styles.wavyBackgroundTop}
        style={{ bottom: isDesktop ? "-69px" : isIpad ? "-59px" : "-19px" }}
      >
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          height={waveHeight}
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
            fill={props.bgColor}
          ></path>
        </svg>
      </div>
      <div
        className="flex items-center flex-col justify-center"
        style={{ backgroundColor: props.bgColor }}
      >
        {props.children}
      </div>

      <div
        className={styles.wavyBackgroundBottom}
        style={{ top: isDesktop ? "-69px" : isIpad ? "-59px" : "-19px" }}
      >
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          height={waveHeight}
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
            fill={props.bgColor}
          ></path>
        </svg>
      </div>
    </div>
  );
}
