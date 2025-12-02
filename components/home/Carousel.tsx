'use client';

import { motion, useAnimationControls } from "framer-motion";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Circle, CircleDot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useResponsive } from "@/hooks/use-responsive";
import { CarouselItem } from "../../utils/types";
import CarouselImage from "./CarouselImage";

type CarouselProps = {
  carouselItems: CarouselItem[];
};

// A carousel that takes titles and images as props. Minimum 3 images in carousel
//TODO: Make carousel responsive
const Carousel: React.FC<CarouselProps> = (props) => {
  const [activeImage, setActiveImage] = useState(1);
  const [buttonClicked, setButtonClicked] = useState("");
  const [imagesToRender, setImagesToRender] = useState([""]);
  const amountOfImages: number = props.carouselItems.length;

  const images: string[] = props.carouselItems.map((item) => item.image);
  const titles: string[] = props.carouselItems.map((item) => item.title);
  const descriptions: string[] = props.carouselItems.map((item) => item.description);
  const links: string[] = props.carouselItems.map((item) => item.link);

  const controls = useAnimationControls();
  const { isBelow } = useResponsive();
  const smallScreen = isBelow('lg');

  const router = useRouter();
  const redirect = (url: string) => {
    router.push(url);
  }

  const clickBack = () => {
    setButtonClicked("back");
    if (activeImage === 0) {
      setActiveImage(amountOfImages - 1);
    } else {
      setActiveImage(activeImage - 1);
    }
  };

  const clickForward = () => {
    setButtonClicked("forward");
    if (activeImage === amountOfImages - 1) {
      setActiveImage(0);
    } else {
      setActiveImage(activeImage + 1);
    }
  };

  //creates what images to render based on active image
  //TODO: make rendering dynamic, now supports 3 images
  useEffect(() => {
    let temp: string[] = [];

    if (activeImage === 0) {
      temp = images.slice(activeImage, activeImage + 2);
      temp.unshift(images[amountOfImages - 1]);
    } else if (activeImage === amountOfImages - 1) {
      temp = images.slice(activeImage - 1);
      temp.push(images[0]);
    } else {
      temp = images.slice(activeImage - 1, activeImage + 2);
    }
    setImagesToRender(temp);
  }, [activeImage, amountOfImages]);

  //animating carousel
  //TODO: fix animation when clicking on icon
  useEffect(() => {
    if (buttonClicked === "forward") {
      controls.set({ x: 30, transition: { type: "tween", delay: 0.5 } });
    } else {
      controls.set({ x: -30, transition: { type: "tween", delay: 0.5 } });
    }

    controls.start({
      x: 0,
      transition: {
        type: "tween",
        duration: 0.5,
      },
    });
  }, [buttonClicked, controls, imagesToRender]);

  return (
    <div className="flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-white mb-8 text-center text-4xl font-bold">
        {titles![activeImage]}
      </h2>
      {
        !smallScreen ?
          <motion.div
            className="w-screen flex gap-10 justify-center items-center flex-nowrap overflow-hidden p-8"
            animate={controls}
            initial={false}
          >
            {imagesToRender.map((image, i) => {
              if (i === 1) {
                return <CarouselImage key={i} src={image} isActive={true} handleClick={() => redirect(links[activeImage])} />;
              }

              return <CarouselImage key={i} src={image} isActive={false} handleClick={i == 0 ? clickBack : clickForward} />;
            })}
          </motion.div>
          :
          <motion.div
            className="w-screen flex justify-center"
            animate={controls}
            initial={false}
          >
            <CarouselImage src={images[activeImage]} isActive={true} smallScreen={smallScreen} handleClick={() => { }} />
          </motion.div>
      }
      <p className="text-white text-center pt-8 text-2xl">{descriptions![activeImage]}</p>
   <div className="mt-8 flex justify-center items-center gap-6">
      {/* Left Arrow */}
      <Button
        variant="ghost"
        size="icon"
        onClick={clickBack}
        className="text-gray-400 hover:text-white hover:bg-black/40 rounded-full transition-all duration-200"
      >
        <ArrowLeft className="h-6 w-6" />
      </Button>

      {/* Dots*/}
      {images.map((_, i) => (
        <Button
          key={i}
          variant="ghost"
          size="icon"
          onClick={() => setActiveImage(i)}
          className={`
            relative                     /* important for z-index stacking */
            rounded-full 
            transition-all duration-200
            hover:bg-black/40            /* darkens on hover */
            after:absolute after:inset-0 after:rounded-full 
            after:hover:bg-black/40      /* fallback for some browsers */
            ${activeImage === i
              ? "text-white"             /* active dot = bright white */
              : "text-gray-500 hover:text-white"
            }
          `}
        >
          {activeImage === i ? (
            <CircleDot className="h-7 w-7 relative z-10" />
          ) : (
            <Circle className="h-5 w-5 relative z-10" />
          )}
        </Button>
      ))}

      {/* Right Arrow */}
      <Button
        variant="ghost"
        size="icon"
        onClick={clickForward}
        className="text-gray-400 hover:text-white hover:bg-black/40 rounded-full transition-all duration-200"
      >
        <ArrowRight className="h-6 w-6" />
      </Button>
      </div>
    </div>
  );
};



export default Carousel;
