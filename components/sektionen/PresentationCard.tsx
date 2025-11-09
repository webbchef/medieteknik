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

  const height = isMobile ? 375 : isIpad ? 500 : 400;

  return (
    <Card
      onClick={props.openInfo}
      className="cursor-pointer flex flex-col justify-between"
      style={{ height: `${height}px` }}
    >
      {props.user.imageName && (
        <img
          src={`/images/profilePictures/${props.user.imageName}.jpg`}
          alt={props.user.name}
          className="w-full object-cover"
        />
      )}
      <CardHeader className="text-center">
        <CardTitle>{props.user.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p
          className={`font-bold break-words ${isMobile ? "pb-1" : ""}`}
        >
          {props.user.responsibility}
        </p>
        <p
          className={`break-words ${isMobile ? "pt-1" : ""}`}
          style={{ fontSize: isDesktop ? "16px" : "inherit" }}
        >
          {props.user.email}
        </p>
        {props.user.email2 && (
          <p
            className={`break-words ${isMobile ? "pt-1" : ""}`}
            style={{ fontSize: isDesktop ? "16px" : "inherit" }}
          >
            {props.user.email2}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
