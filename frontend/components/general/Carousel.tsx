import { Box } from "@mui/system";
import { AnimatePresence, motion, PanInfo } from "framer-motion";
import React, { createRef, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Grid } from "@mui/material";


type CarouselProps = {
    titles?: string[]; //TODO: Combine title and image string to object for map
    images: string[];
}

// A carousel that takes titles and images as props. Minimum 3 images in carousel
const Carousel: React.FC<CarouselProps> = (props) => {

    // const [activeImage, setActiveImage] = useState(1);
    // const [imagesToRender, setImagesToRender] = useState([""]);
    // const amountOfImages: number = props.images.length;
    const [width, setWidth] = useState(0);
    const carousel = useRef<HTMLDivElement>();

    const imagesRef = useRef(props.images.map(() => createRef()));

    useEffect(() => {
        if (carousel.current) {
            setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
        }
    }, []);

    const handlePan = (event: any, info: PanInfo) => {
        
    }

    const handlePanEnd = (event: any, info: PanInfo) => {

    }

    return (

        <Box ref={carousel} className="carousel" component={motion.div} overflow="hidden" sx={{cursor: "grab"}} whileTap={{cursor: "grabbing"}}>
            <Box className="innerCarousel" component={motion.div} drag="x" dragConstraints={{right: 0, left: -width}} display="flex" alignItems={"center"} gap={10} width="120vw" onPan={handlePan} onPanEnd={handlePanEnd}>
                {props.images.map((image, i) => {
                    if(i === 1) {
                        return (
                            <Box className="item" ref={imagesRef.current[i]} width={"33%"} height={200} padding={1} position="relative" key={image} component={motion.div}>
                                <Image draggable="false" layout="fill" src={image} alt=""/>
                            </Box>
                        );
                    }
                    else {

                        return (
                            <Box className="item" ref={imagesRef.current[i]} width={"33%"} height={200} padding={1} position="relative" key={image} component={motion.div}>
                                <Image draggable="false" layout="fill" src={image} alt=""/>
                            </Box>
                        );
                    }
                })}

            </Box>
        </Box>
        
    );
}





export default Carousel;