'use client';

import Image from "next/image";
import { useContext } from "react";
import { MobileStateContext } from "../../contexts/MobileContexts";

interface InputProps {
  imageSrc: string;
  children: JSX.Element;
  title?: string;
}

export default function ImageWithSummary(props: InputProps) {
  const { isMobile, isIpad, isDesktop } = useContext(MobileStateContext);
  const matchesSmall = isMobile || isIpad;

  return (
    <div className="max-w-[1200px] py-12 px-2">
      {matchesSmall && props.title && (
        <div>
          <h2 className="text-center text-3xl font-bold">{props.title}</h2>
        </div>
      )}

      <div className="relative overflow-hidden rounded-lg h-[350px] mb-4">
        <Image
          fill
          src={props.imageSrc}
          alt={props.title || ""}
          className="object-cover"
        />
      </div>
      <div>
        {!matchesSmall && props.title && (
          <h2 className="text-center text-3xl font-bold mb-4">{props.title}</h2>
        )}
        {props.children}
      </div>
    </div>
  );
}
