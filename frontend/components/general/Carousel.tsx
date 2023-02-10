import { Box } from "@mui/system";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";


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
    const carousel = useRef();

    useEffect(() => {
        console.log(carousel.current)
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);

    return (
        
        <Box ref={carousel} className="carousel" component={motion.div} overflow="hidden" sx={{cursor: "grab"}} whileTap={{cursor: "grabbing"}}>
            <Box className="innerCarousel" component={motion.div} drag="x" dragConstraints={{right: 0, left: -width}} display="flex" >
                {props.images.map((image) => {
                    return (
                        <Box className="item" width={400} height={200} padding={1} position="relative" key={image} component={motion.div}>
                            <Image draggable="false" width={300} height={200} src={image} alt=""/>
                        </Box>
                    );
                })}

            </Box>
        </Box>
       
    );
}





export default Carousel;