'use client';

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

  // Ensure good contrast: determine if background is dark or light
  const isDarkBackground = (bgColor: string): boolean => {
    // Check for common dark colors or hex values
    const darkColors = ['#13283c', '#000', '#1a1a1a', '#2c2c2c'];
    if (darkColors.includes(bgColor.toLowerCase())) return true;
    
    // For hex colors, check luminance
    if (bgColor.startsWith('#')) {
      const hex = bgColor.replace('#', '');
      const r = parseInt(hex.substr(0, 2), 16);
      const g = parseInt(hex.substr(2, 2), 16);
      const b = parseInt(hex.substr(4, 2), 16);
      const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
      return luminance < 0.5;
    }
    
    return false;
  };

  // Auto-determine text color if not provided, ensuring good contrast
  const textColor = props.textColor || (isDarkBackground(props.bgColor) ? '#FFFFFF' : '#000000');

  return (
    <div className={`relative ${marginTopBottom}`} style={{ color: textColor }}>
      <div className={`wavy-background-top ${topWavePosition}`}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="h-[20px] md:h-[60px] lg:h-[70px]"
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

      <div className={`wavy-background-bottom ${bottomWavePosition}`}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="h-5 md:h-[60px] lg:h-[70px]"
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
