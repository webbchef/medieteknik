'use client';

import {
  ArrowBackIosNew,
  ArrowForwardIos,
  Circle,
  CircleOutlined
} from "@mui/icons-material";
import { IconButton, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { Box, Container } from "@mui/system";
import { motion, useAnimationControls } from "framer-motion";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
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

  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("lg"));

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
    <Box
      display={"flex"}
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
    >
      <Typography color={"#FFF"} marginBottom={2} textAlign={"center"} variant="h2">
        {titles![activeImage]}
      </Typography>
      {
        !smallScreen ?
          <Box
            width="100vw"
            component={motion.div}
            animate={controls}
            initial={false}
            display="flex"
            gap={10}
            justifyContent="center"
            alignItems="center"
            flexWrap="nowrap"
            overflow="hidden"
            padding="30px"
          >
            {imagesToRender.map((image, i) => {
              if (i === 1) {
                return <CarouselImage key={i} src={image} isActive={true} handleClick={() => redirect(links[activeImage])} />;
              }

              return <CarouselImage key={i} src={image} isActive={false} handleClick={i == 0 ? clickBack : clickForward} />;
            })}
          </Box>
          :
          <Box
            width="100vw"
            component={motion.div}
            animate={controls}
            initial={false}
            display="flex"
            justifyContent="center"
          ><CarouselImage src={images[activeImage]} isActive={true} smallScreen={smallScreen} handleClick={() => { }} /></Box>
      }
      <Typography color={"#FFF"} textAlign={"center"} pt={2} fontSize={25}>{descriptions![activeImage]}</Typography>
      <Container
        sx={{ marginTop: 2, display: "flex", justifyContent: "center" }}
      >
        <IconButton color="secondary" onClick={clickBack}>
          <ArrowBackIosNew />
        </IconButton>
        {images.map((image, i) => {
          if (activeImage === i) {
            return (
              <IconButton color="secondary"
                onClick={() => {
                  setActiveImage(i);
                }}
                key={i}
              >
                <Circle />
              </IconButton>
            );
          }
          return (
            <IconButton color="secondary"
              onClick={() => {
                setActiveImage(i);
              }}
              key={i}
            >
              <CircleOutlined />
            </IconButton>
          );
        })}
        <IconButton color="secondary" onClick={clickForward}>
          <ArrowForwardIos />
        </IconButton>
      </Container>
    </Box>
  );
};



export default Carousel;
