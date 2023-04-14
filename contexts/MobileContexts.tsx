import React, { useEffect, useState } from "react";

const initialState: MobileState = {
  isMobile: false,
  isIpad: false,
  isDesktop: false,
};

export const MobileStateContext = React.createContext(initialState);

interface MobileStateProviderProps {
  children: React.ReactElement;
}

interface MobileState {
  isMobile: boolean;
  isIpad: boolean;
  isDesktop: boolean;
}

export function MobileStateProvider({ children }: MobileStateProviderProps) {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isIpad, setIsIpad] = useState<boolean>(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  useEffect(setupViewSizeListener, []);
  useEffect(checkView, []);

  function setupViewSizeListener() {
    window.addEventListener("resize", checkView);
  }

  function checkView() {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
      setIsIpad(false);
      setIsDesktop(false);
    } else if (window.innerWidth < 1212 && window.innerWidth > 768) {
      setIsMobile(false);
      setIsIpad(true);
      setIsDesktop(false);
    } else {
      setIsMobile(false);
      setIsIpad(false);
      setIsDesktop(true);
    }
  }

  return (
    <MobileStateContext.Provider
      value={{
        isMobile,
        isIpad,
        isDesktop,
      }}
    >
      {children}
    </MobileStateContext.Provider>
  );
}
