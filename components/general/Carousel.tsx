import {
  AccessTimeFilled,
  ArrowBackIos,
  ArrowBackIosNew,
  ArrowForwardIos,
  Circle,
  CircleOutlined,
  ControlPointSharp,
} from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import { alpha, Box, Container } from "@mui/system";
import { motion, useAnimationControls } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CarouselItem } from "../../utils/types";
import { useTheme } from '@mui/material/styles';

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

  const controls = useAnimationControls();

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
            return <CarouselImage key={i} src={image} isActive={true} />;
          }

          return <CarouselImage  key={i} src={image} isActive={false} handleClick={i == 0 ? clickBack : clickForward} />;
        })}
      </Box>
      <Typography color={"#FFF"}  textAlign={"center"} variant="h3">{descriptions![activeImage]}</Typography>
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

type CarouselImageProps = {
  key?: React.Key | undefined | null;
  src: string;
  isActive: boolean;
  handleClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
};

const CarouselImage: React.FC<CarouselImageProps> = (props) => {
  
  const [isHovered, setIsHovered] = useState(false);
  const [ratio, setRatio] = useState(16 / 9);
  const theme = useTheme();
  const handleClick = props.handleClick;

  
  const handleMouseEnter = () => {
    setIsHovered(true);
    
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  if (!props.isActive) {
    return (
      <Box key={props.key} position="relative" width="30%" 
        onClick={handleClick} onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
        >
        <Box position='absolute' display={"flex"} alignItems={'center'}  justifyContent={'center'} borderRadius={1} width='100%' height="100%" zIndex={2} sx={[
            isHovered ? {backgroundColor: alpha('#13283c', 0.5), cursor: "pointer",visibility: "visible"} : {visibility: "hidden"}
          ]}/>
        <Image
          width="100%"
          height="56.25%"
          style={{ borderRadius: 5}}
          src={props.src}
          layout="responsive"
          alt="Image in carousel"
          
        />
      </Box>
    );
  } else {

    return (
      <Box key={props.key} position="relative" width="50%" 
        onClick={handleClick} onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
      >
        <Box position='absolute' display={"flex"} alignItems={'center'}  justifyContent={'center'} borderRadius={1} width='100%' height="100%" zIndex={2} sx={[
            isHovered ? {backgroundColor: alpha('#13283c', 0.5), cursor: "pointer",visibility: "visible"} : {visibility: "hidden"}
          ]}>
            <Typography variant="h2" color={"#FFF"}>Klicka här för att läsa mer om oss</Typography>
        </Box>
        <Image
          width="100%"
          height="56.25%"
          style={{ borderRadius: 5 }}
          src={props.src}
          layout="responsive"
          alt="Image in carousel"
        />
      </Box>
    );
  }

};

export default Carousel;
