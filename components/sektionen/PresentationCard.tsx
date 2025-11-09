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
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogTitle,
  MorphingDialogDescription,
  MorphingDialogImage,
} from "@/components/ui/morphing-dialog";

interface InputProps {
  user: Styrare;
}

/**
 *
 * @param {user} user - active user
 * @returns
 */
export default function PresentationCard(props: InputProps) {
  const { isMobile, isIpad, isDesktop } = useContext(MobileStateContext);

  return (
    <MorphingDialog>
      <MorphingDialogTrigger className="w-full h-full">
        <Card className="cursor-pointer flex flex-col bg-white hover:shadow-lg transition-shadow duration-200 h-full text-black overflow-hidden !py-0 !gap-0">
          {props.user.imageName && (
            <div className="w-full aspect-square overflow-hidden">
              <MorphingDialogImage
                src={`/images/profilePictures/${props.user.imageName}.jpg`}
                alt={props.user.name}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <CardHeader className="text-center pb-3 pt-4">
            <MorphingDialogTitle>
              <CardTitle className="text-lg md:text-xl text-black">{props.user.name}</CardTitle>
            </MorphingDialogTitle>
          </CardHeader>
          <CardContent className="grow">
            <p className="font-bold wrap-break-word text-sm md:text-base mb-2 text-black">
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
      </MorphingDialogTrigger>

      <MorphingDialogContainer>
        <MorphingDialogContent className="relative max-w-[90vw] max-h-[85vh] md:max-w-3xl lg:max-w-4xl w-full bg-white rounded-2xl shadow-2xl p-6 md:p-8 overflow-y-auto">
          <MorphingDialogClose />

          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
            {props.user.imageName && (
              <div className="w-32 h-32 md:w-64 md:h-64 lg:w-80 lg:h-80 shrink-0 overflow-hidden rounded-2xl">
                <MorphingDialogImage
                  src={`/images/profilePictures/${props.user.imageName}.jpg`}
                  alt={props.user.name}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="text-center md:text-left space-y-3 md:space-y-4 w-full md:flex-1">
              <MorphingDialogTitle>
                <h2 className="text-2xl md:text-3xl font-bold text-black">
                  {props.user.name}
                </h2>
              </MorphingDialogTitle>

              <p className="text-lg md:text-xl font-semibold text-gray-700">
                {props.user.responsibility}
              </p>

              <div className="space-y-1 md:space-y-2 text-base md:text-lg text-gray-600">
                <p className="break-all">{props.user.email}</p>
                {props.user.email2 && (
                  <p className="break-all">{props.user.email2}</p>
                )}
              </div>

              <MorphingDialogDescription className="hidden">
                <div></div>
              </MorphingDialogDescription>
            </div>
          </div>
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}
