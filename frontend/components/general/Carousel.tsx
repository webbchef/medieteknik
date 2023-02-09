import { ArrowBackIosNew, ArrowForwardIos, Circle, CircleOutlined } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { LayoutGroup, motion, useAnimationControls } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";


type CarouselProps = {
    titles?: string[];
    images: string[];
}

// A carousel that takes titles and images as props. Minimum 3 images in carousel
const Carousel: React.FC<CarouselProps> = (props) => {

    const [activeImage, setActiveImage] = useState(1);
    const [imagesToRender, setImagesToRender] = useState([""]);
    const amountOfImages: number = props.images.length;

    const controls = useAnimationControls();

    const clickBack = () => {
        if (activeImage === 0) {
            setActiveImage(amountOfImages - 1);

        } else {
            setActiveImage(activeImage - 1);
        }
        controls.start({
            x: 10,            
        });
    }

    const clickForward = () => {
        if (activeImage === amountOfImages - 1) {
            setActiveImage(0);
        }
        else {
            setActiveImage(activeImage + 1);
        }
        controls.start({
            x: -10,
        });
    }

    useEffect(() => {
        let temp = [];
        if (amountOfImages < 3) {
            if (activeImage === 0) {
                temp = props.images.slice(activeImage, activeImage + 2);
                temp.unshift(props.images[amountOfImages - 1]);
            } else if (activeImage === amountOfImages - 2) {
                temp = props.images.slice(activeImage - 1, activeImage + 2);
                temp.unshift(props.images[0]);
                temp.push(props.images[amountOfImages - 1]);
            }
            else if (activeImage === amountOfImages - 1) {
                temp = props.images.slice(activeImage - 2);
                temp.unshift(props.images[activeImage - 2]);
                temp.push(props.images[0]);
            }
            else {
                temp = props.images.slice(activeImage - 1, activeImage + 3);
            }
            setImagesToRender(temp);
        }
        //if there are 3 images in props
        else {
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
        }

        
    }, [activeImage])

    //TODO: Add animations to carousel. Framer motion : component={motion.div} etc
    return (
        <Box overflow={"hidden"}>
            <Typography marginBottom={2} textAlign={"center"} variant="h3">{props.titles![activeImage]}</Typography>
            <Box marginLeft={-10} marginRight={-10} justifyContent='center' display={'flex'} gap={1}>
                
                <LayoutGroup>
                    {imagesToRender.map((image, i) => {
                        if (i === 1) {
                            return <motion.div style={{display: "inline-block"}} layout key={image+i} ><Image style={{ borderRadius: 5 }} src={image} width={400} height={180}></Image></motion.div>
                        }
                        else {
                            return <motion.div style={{display: "inline-block"}} layout key={image+i} onLayoutAnimationStart={()=> console.log(1)}><Image style={{ borderRadius: 5 }} src={image} width={250} height={180}></Image></motion.div>
                        }
                    })}
                </LayoutGroup>
            </Box>
            <Container sx={{ marginTop: 2, display: "flex", justifyContent: "center" }}>
                <IconButton onClick={clickBack}>
                    <ArrowBackIosNew />
                </IconButton>
                {props.images.map((image, i) => {
                    if (activeImage === i) {
                        return <IconButton onClick={() => { setActiveImage(i) }} key={image}><Circle /></IconButton>
                    }
                    return <IconButton onClick={() => { setActiveImage(i) }} key={image}><CircleOutlined /></IconButton>
                })}
                <IconButton onClick={clickForward}>
                    <ArrowForwardIos />
                </IconButton>
            </Container>
        </Box>
    );
}





export default Carousel;