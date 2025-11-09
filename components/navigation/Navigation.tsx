'use client';

import React, { useState, useEffect, useContext } from "react";
import { usePathname } from "next/navigation";
import { Sling as Hamburger } from "hamburger-react";
import { MobileStateContext } from "../../contexts/MobileContexts";
import { LogIn } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import SocialMediaIcons from "../general/SocialMediaIcons";
import styles from "./Navigation.module.css";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

/**
 * Component for menu
 * @returns
 */
export default function Navigation() {
  const [isOpen, setOpen] = useState(false);
  const [bgColor, setBgColor] = useState<boolean>(false);
  const { isMobile, isIpad, isDesktop } = useContext(MobileStateContext);

  const currentRoute = usePathname();

  function closeMenu() {
    setOpen(false);
  }

  const changeBackground = () => {
    if (isDesktop) {
      if (window.scrollY >= 66) {
        setBgColor(true);
      } else {
        setBgColor(false);
      }
    } else {
      // No background in mobile
      setBgColor(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change Logo
    window.addEventListener("scroll", changeBackground);
  });

  const navigationLinks = [
    { name: "HEM", to: "/" },
    { name: "NYHETER", to: "/news" },
    { name: "STUDENTLIV", to: "/studentliv" },
    { name: "OM MT", to: "/about" },
    { name: "SEKTIONEN", to: "/sektionen" },
  ];

  const list = () => (
    <ul
      className={`flex ${
        isDesktop
          ? "flex-row w-[70%]"
          : "flex-col w-full mt-[60px]"
      }`}
    >
      {navigationLinks.map((link, index) => (
        <li
          key={index}
          className={`${isMobile ? "m-2.5" : ""} ${styles.center}`}
        >
          <Link
            href={link.to}
            onClick={closeMenu}
            className={
              currentRoute === link.to
                ? bgColor
                  ? styles.activeBlack
                  : styles.activeWhite
                : bgColor
                ? styles.blackLink
                : styles.whiteLink
            }
          >
            <h4 className={bgColor ? styles.blackText : styles.whiteText}>
              {link.name}
            </h4>
          </Link>
        </li>
      ))}
      <li
        className={`${styles.center} ${isMobile ? "m-2.5" : "cursor-pointer"}`}
      >
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.medieteknikdagen.se/"
          className={bgColor ? styles.blackLink : styles.whiteLink}
        >
          <h4 className={bgColor ? styles.blackText : styles.whiteText}>
            MÄSSA
          </h4>
        </a>
      </li>
      {!isDesktop && (
        <li className={styles.center}>
          <Link
            href="https://portalen.medieteknik.nu/"
            target="_blank"
            rel="noopener"
            onClick={closeMenu}
            className={bgColor ? styles.whiteLink : styles.blackLink}
          >
            <Button variant="ghost" className="gap-2">
              <LogIn className="text-white" />
              <h4 className={bgColor ? styles.blackText : styles.whiteText}>
                LOGGA IN
              </h4>
            </Button>
          </Link>
        </li>
      )}
    </ul>
  );

  return (
    <div
      className={`fixed top-0 z-999 w-full flex flex-row items-center p-2 transition-all duration-500 ${
        bgColor ? "bg-white shadow" : ""
      }`}
    >
      {isDesktop ? (
        <div className="w-full flex justify-between">
          <Image
            alt="MT LOGO"
            src={
              bgColor
                ? "/images/logotyp_svart_text.png"
                : "/images/logotyp_vit_text.png"
            }
            width={80}
            height={50}
          />
          {list()}
          <Link
            href="https://portalen.medieteknik.nu/"
            target="_blank"
            rel="noopener"
          >
            <Button variant="outline" className="gap-2">
              <LogIn className={bgColor ? "text-black" : "text-white"} />
              <h4 className={`text-[15px] ${bgColor ? styles.blackText : styles.whiteText}`}>
                LOGGA IN
              </h4>
            </Button>
          </Link>
        </div>
      ) : (
        <>
          <div className="absolute right-5 top-5 z-9999 flex justify-between p-1 m-1 rounded">
            <div className="z-99999">
              <Hamburger toggled={isOpen} toggle={setOpen} color="#EC6610" />
            </div>
          </div>

          <Sheet open={isOpen} onOpenChange={setOpen}>
            <SheetContent
              side="right"
              className={`${
                isMobile ? "w-full" : "w-1/2"
              } bg-black z-101 border-0`}
            >
              <div className="h-full p-3 flex flex-row justify-center items-center">
                {list()}
                <div className="mt-8">
                  <Image
                    alt="MT LOGO"
                    src="/images/logotyp_vit_text.png"
                    width={110}
                    height={70}
                  />
                  <SocialMediaIcons />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </>
      )}
    </div>
  );
}
