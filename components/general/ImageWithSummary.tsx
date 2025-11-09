'use client';

import Image from "next/image";
import { useContext } from "react";
import { MobileStateContext } from "../../contexts/MobileContexts";

interface InputProps {
  imageSrc: string;
  children: React.ReactNode;
  title?: string;
}

export default function ImageWithSummary(props: InputProps) {
  const { isMobile, isIpad, isDesktop } = useContext(MobileStateContext);
  const matchesSmall = isMobile || isIpad;

  return (
    <div className="max-w-[1200px] py-12 px-4 w-full">
      {matchesSmall && props.title && (
        <div>
          <h2 className="text-center text-3xl font-bold mb-4">{props.title}</h2>
        </div>
      )}

      <div className={`flex ${matchesSmall ? 'flex-col' : 'flex-row'} gap-8 items-center`}>
        <div className={`relative overflow-hidden rounded-lg ${matchesSmall ? 'h-[350px] w-full' : 'h-[500px] w-1/2 flex-shrink-0'}`}>
          <Image
            fill
            src={props.imageSrc}
            alt={props.title || ""}
            className="object-cover"
          />
        </div>
        <div className={matchesSmall ? 'w-full' : 'w-1/2'}>
          {!matchesSmall && props.title && (
            <h2 className="text-center text-3xl font-bold mb-4">{props.title}</h2>
          )}
          {props.children}
        </div>
      </div>
    </div>
  );
}
