import { AccessTimeFilled, ArrowBackIos, ArrowBackIosNew, ArrowForwardIos, Circle, CircleOutlined, ControlPointSharp } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { motion, useAnimationControls } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type CarouselProps = {
    titles?: string[];
    images: string[];
}

// A carousel that takes titles and images as props. Minimum 3 images in carousel
//TODO: Make carousel responsive
const Carousel: React.FC<CarouselProps> = (props) => {

    const [activeImage, setActiveImage] = useState(1);
    const [buttonClicked, setButtonClicked] = useState("");
    const [imagesToRender, setImagesToRender] = useState([""]);
    const amountOfImages: number = props.images.length;


    const controls = useAnimationControls();

    const clickBack = () => {
        setButtonClicked("back")
        if (activeImage === 0) {
            setActiveImage(amountOfImages - 1);

        } else {
            setActiveImage(activeImage - 1);
        }
    }

    const clickForward = () => {
        setButtonClicked("forward");
        if (activeImage === amountOfImages - 1) {
            setActiveImage(0);
        }
        else {
            setActiveImage(activeImage + 1);
        }
    }
    
    //creates what images to render based on active image
    //TODO: make rendering dynamic, now supports 3 images
    useEffect(() => {
        let temp: string[] = [];

        if (activeImage === 0) {
            temp = props.images.slice(activeImage, activeImage + 2);
            temp.unshift(props.images[amountOfImages - 1]);
        }
        else if (activeImage === amountOfImages - 1) {
            temp = props.images.slice(activeImage - 1);
            temp.push(props.images[0]);

        }
        else {
            temp = props.images.slice(activeImage - 1, activeImage + 2);
        }
        setImagesToRender(temp);


    }, [activeImage, amountOfImages, props.images])

    //animating carousel
    //TODO: fix animation when clicking on icon
    useEffect(() => {
        if (buttonClicked === "forward") {
            controls.set({ x: 30, transition: { type: "tween", delay: 0.5 } });
        }
        else {
            controls.set({ x: -30, transition: { type: "tween", delay: 0.5 } });
        }

        controls.start({
            x: 0,
            transition: {
                type: "tween",
                duration: 0.5

            }
        });

    }, [buttonClicked, controls, imagesToRender])

    return (
        <Box width={"100vw"} display={"flex"} flexDirection="column" alignItems="center" overflow="hidden">
            <Typography marginBottom={2} textAlign={"center"} variant="h3">{props.titles![activeImage]}</Typography>
            <Box width="120vw" component={motion.div} animate={controls} initial={false} display="flex" gap={10} justifyContent="center" flexWrap="nowrap" overflow="hidden">
                {imagesToRender.map((image, i) => {
                    if(i === 1) {
                        return <CarouselItem key={i} src={image} width={450} height={180} />
                    }
                    return <CarouselItem key={i} src={image} width={250} height={180} />
                })}
            </Box>
            <Container sx={{ marginTop: 2, display: "flex", justifyContent: "center" }}>
                <IconButton onClick={clickBack}>
                    <ArrowBackIosNew />
                </IconButton>
                {props.images.map((image, i) => {
                    if (activeImage === i) {
                        return <IconButton onClick={() => { setActiveImage(i) }} key={i}><Circle /></IconButton>
                    }
                    return <IconButton onClick={() => { setActiveImage(i) }} key={i}><CircleOutlined /></IconButton>
                })}
                <IconButton onClick={clickForward}>
                    <ArrowForwardIos />
                </IconButton>
            </Container>
        </Box>
    );
}

type CarouselItemProps = {
    key?: React.Key | undefined | null;
    src: string;
    width: string | number;
    height: string | number;

};

const CarouselItem: React.FC<CarouselItemProps> = (props) => {

    return (
        <Box key={props.key} position="relative" width={props.width} height={props.height}>
            <Image style={{ borderRadius: 5 }} src={props.src} layout="fill" alt="Image in carousel" />
        </Box>
    );
}


export default Carousel;