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
    <div className="bg-black w-full">
      <div className="p-8 pt-[60px] mt-2.5 flex flex-wrap justify-around max-w-screen-xl mx-auto">
        <div className="w-full md:w-1/3 flex flex-col justify-start items-center md:items-start px-4 mb-8 md:mb-0">
        {/* Cubes and Logo Text */}
        <div className="flex items-start gap-4 mb-6">
          <div className="flex gap-2">
            <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] bg-[#EC6610]"></div>
            <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] bg-[#546d7a]"></div>
          </div>
        </div>
        
        <div className="text-white mb-6">
          <div className="text-[18px] md:text-[20px] font-light tracking-wider">
            CIVILINGENJÖR
          </div>
          <div className="text-[32px] md:text-[40px] font-bold tracking-wide leading-tight">
            MEDIETEKNIK
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-1">
          <Link
            target="_blank"
            rel="noopener"
            href="https://sv-se.facebook.com/mtsektionen/"
          >
            <Facebook className="h-5 w-5 text-[#EC6610] hover:text-[#EC6610]/80 transition-colors" />
          </Link>
          <Link
            target="_blank"
            rel="noopener"
            href="https://www.instagram.com/mtsektionen/?hl=en"
          >
            <Instagram className="h-5 w-5 text-[#EC6610] hover:text-[#EC6610]/80 transition-colors" />
          </Link>
        </div>
      </div>

      <div className={`w-full md:w-1/3 ${!isDesktop ? "text-center mb-8" : "text-left"} px-4`}>
        <h4 className="text-white text-xl font-bold mb-4">Kontakt</h4>
        <p className="text-white text-base leading-relaxed">
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

        <div className={`w-full md:w-1/3 ${!isDesktop ? "text-center" : "text-left"} px-4`}>
          <h4 className="text-white text-xl font-bold mb-4">Studentlänkar</h4>
          <div className="space-y-1">
            {links.map((link, index) => (
              <Link
                target="_blank"
                rel="noopener"
                href={link.path}
                key={index}
                className="block text-white! hover:text-[#EC6610] transition-colors"
                style={{ color: 'white' }}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
