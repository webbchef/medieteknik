'use client';

import { useContext } from "react";
import { Styrare } from "../../utils/types";
import { MobileStateContext } from "../../contexts/MobileContexts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface InputProps {
  user: Styrare;
  openInfo: () => void;
}

/**
 *
 * @param {user} user - active user
 * @param {() => void} openInfo - opens modal about user
 * @returns
 */
export default function PresentationCard(props: InputProps) {
  const { isMobile, isIpad, isDesktop } = useContext(MobileStateContext);

  return (
    <Card
      onClick={props.openInfo}
      className="cursor-pointer flex flex-col bg-white hover:shadow-lg transition-shadow duration-200 h-full min-h-[480px] md:min-h-[500px] text-black"
    >
      {props.user.imageName && (
        <div className="w-full aspect-square overflow-hidden rounded-t-xl">
          <img
            src={`/images/profilePictures/${props.user.imageName}.jpg`}
            alt={props.user.name}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <CardHeader className="text-center pb-3">
        <CardTitle className="text-lg md:text-xl text-black">{props.user.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="font-bold break-words text-sm md:text-base mb-2 text-black">
          {props.user.responsibility}
        </p>
        <p className="break-all overflow-wrap-anywhere text-xs md:text-sm text-black">
          {props.user.email}
        </p>
        {props.user.email2 && (
          <p className="break-all overflow-wrap-anywhere text-xs md:text-sm text-black mt-1">
            {props.user.email2}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
