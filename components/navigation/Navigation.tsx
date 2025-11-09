'use client';

import React, { useState, useEffect, useContext } from "react";
import { usePathname } from "next/navigation";
import { Sling as Hamburger } from "hamburger-react";
import { MobileStateContext } from "../../contexts/MobileContexts";
import { LogIn } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import SocialMediaIcons from "../general/SocialMediaIcons";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AnimatedBackground } from "@/components/ui/animated-background";

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

  const list = () => {
    const desktopNavItems = [
      ...navigationLinks.map((link) => (
        <Link
          key={link.to}
          href={link.to}
          data-id={link.to}
          onClick={closeMenu}
          className={`px-4 py-2 transition-colors duration-300`}
        >
          <h4 className={`font-medium ${
            bgColor
              ? "text-zinc-600 hover:text-zinc-950"
              : "text-white hover:text-white"
          }`}>
            {link.name}
          </h4>
        </Link>
      )),
      <a
        key="/mässa"
        href="https://www.medieteknikdagen.se/"
        data-id="/mässa"
        target="_blank"
        rel="noreferrer"
        className={`px-4 py-2 transition-colors duration-300`}
      >
        <h4 className={`font-medium ${
          bgColor
            ? "text-zinc-600 hover:text-zinc-950"
            : "text-white hover:text-white"
        }`}>
          MÄSSA
        </h4>
      </a>
    ];

    const mobileNavItems = [
      ...navigationLinks.map((link, index) => (
        <li
          key={index}
          className="m-2.5 flex justify-center"
        >
          <Link
            href={link.to}
            onClick={closeMenu}
            className={
              currentRoute === link.to
                ? "nav-link-active-white"
                : "nav-link-white"
            }
          >
            <h4 className="transition-transform duration-300 text-white">
              {link.name}
            </h4>
          </Link>
        </li>
      )),
      <li
        key="mässa"
        className="m-2.5 flex justify-center"
      >
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.medieteknikdagen.se/"
          className="nav-link-white"
        >
          <h4 className="transition-transform duration-300 text-white">
            MÄSSA
          </h4>
        </a>
      </li>,
      <li key="login" className="flex justify-center">
        <Link
          href="https://portalen.medieteknik.nu/"
          target="_blank"
          rel="noopener"
          onClick={closeMenu}
        >
          <Button variant="ghost" className="gap-2">
            <LogIn className="text-white" />
            <span className="text-white font-semibold">
              LOGGA IN
            </span>
          </Button>
        </Link>
      </li>
    ];

    return isDesktop ? (
      <div className="flex flex-row w-[70%] justify-center">
        <AnimatedBackground
          defaultValue={currentRoute}
          className={`rounded-lg ${
            bgColor
              ? "bg-zinc-100 dark:bg-zinc-800"
              : "bg-white/10"
          }`}
          transition={{
            type: "spring",
            bounce: 0.2,
            duration: 0.3,
          }}
          enableHover
        >
          {desktopNavItems}
        </AnimatedBackground>
      </div>
    ) : (
      <ul className="flex flex-col w-full mt-[60px]">
        {mobileNavItems}
      </ul>
    );
  };

  return (
    <div
      className={`fixed top-0 z-999 w-full flex flex-row items-center p-2 transition-all duration-500 ${
        bgColor ? "bg-white shadow" : ""
      }`}
    >
      {isDesktop ? (
        <div className="w-full flex justify-between items-center">
          <Image
            alt="MT LOGO"
            src={
              bgColor
                ? "/images/logotyp_svart_text.png"
                : "/images/logotyp_vit_text.png"
            }
            width={80}
            height={50}
            className="object-contain"
          />
          {list()}
          <Link
            href="https://portalen.medieteknik.nu/"
            target="_blank"
            rel="noopener"
          >
            <Button 
              variant="outline" 
              className={`gap-2 backdrop-blur-md transition-all duration-300 ${
                bgColor 
                  ? 'bg-black/5 border-black/20 text-black hover:bg-black/10 hover:border-black/30' 
                  : 'bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50'
              }`}
            >
              <LogIn className="w-4 h-4" />
              <span className="text-sm font-semibold">
                LOGGA IN
              </span>
            </Button>
          </Link>
        </div>
      ) : (
        <>
          <div className="w-full flex justify-between items-center">
            <Image
              alt="MT LOGO"
              src="/images/logotyp_vit_text.png"
              width={60}
              height={40}
              className="object-contain"
            />
            <div className="z-9999">
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
              <div className="h-full p-3 flex flex-col justify-center items-center">
                {list()}
                <div className="mt-8 flex flex-col items-center">
                  <Image
                    alt="MT LOGO"
                    src="/images/logotyp_vit_text.png"
                    width={110}
                    height={70}
                    className="mb-4"
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
