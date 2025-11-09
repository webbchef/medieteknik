'use client';

import linksContent from "../../content/footer_links.json";
import { FooterLink } from "../../utils/types";
import { Facebook, Instagram } from "lucide-react";
import { useContext } from "react";
import { MobileStateContext } from "../../contexts/MobileContexts";
import CopyText from "./CopyText";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Footer() {
  const { isMobile, isIpad, isDesktop } = useContext(MobileStateContext);
  const links: FooterLink[] = linksContent;

  return (
    <div className="bg-black p-3 pt-[60px] mt-2.5 flex flex-wrap justify-center">
      <div className="w-full md:w-1/3 flex flex-col justify-center items-center">
        <img src="/images/logotyp_vit_text.png" height="100px" alt="MT Logo" />
        <div className="flex justify-center">
          <Link
            target="_blank"
            rel="noopener"
            href="https://sv-se.facebook.com/mtsektionen/"
          >
            <Button variant="ghost" size="icon" className="text-[#EC6610] hover:text-[#EC6610]/80">
              <Facebook className="h-6 w-6" />
            </Button>
          </Link>
          <Link
            target="_blank"
            rel="noopener"
            href="https://www.instagram.com/mtsektionen/?hl=en"
          >
            <Button variant="ghost" size="icon" className="text-[#EC6610] hover:text-[#EC6610]/80">
              <Instagram className="h-6 w-6" />
            </Button>
          </Link>
        </div>
      </div>
      <div
        className={`w-full ${isMobile ? "w-full" : "w-1/2"} md:w-1/3 ${
          !isDesktop ? "text-center m-3" : "text-left"
        }`}
      >
        <h4 className="text-white text-xl font-bold mb-2">Kontakt</h4>
        <p className="text-white">
          Sektionen för Medieteknik <br />
          Campus Norrköping <br />
          Sandgatan 31 601 74 Norrköping
        </p>
        <br />

        <CopyText
          text="info@medieteknik.nu"
          color="#EC6610"
          align={!isDesktop ? "center" : "left"}
        />
      </div>
      <div
        className={`w-full ${isMobile ? "w-full" : "w-1/2"} md:w-1/3 ${
          !isDesktop ? "text-center m-3" : "text-left"
        }`}
      >
        <h4 className="text-white text-xl font-bold mb-2">Studentlänkar</h4>
        {links.map((link, index) => (
          <Link
            target="_blank"
            rel="noopener"
            href={link.path}
            key={index}
            className="block text-white hover:text-[#EC6610] transition-colors"
          >
            {link.title}
          </Link>
        ))}
      </div>
      <div className="w-full flex flex-row items-center justify-center p-1 m-2">
        <p className="text-center border-t border-white pt-2">
          <a
            href="https://www.flaticon.com/free-icons/work-in-progress"
            title="work in progress icons"
            className="text-gray-500 text-[11px] inline"
          >
            Work in progress icons,&nbsp;
          </a>

          <a
            href="https://www.flaticon.com/free-icons/initiative"
            title="initiative icons"
            className="text-gray-500 text-[11px] inline"
          >
            Initiative icons and&nbsp;
          </a>
          <a
            href="https://www.flaticon.com/free-icons/work"
            title="work icons"
            className="text-gray-500 text-[11px] inline"
          >
            Work icons created by Eucalyp - Flaticon
          </a>
        </p>
      </div>
    </div>
  );
}
