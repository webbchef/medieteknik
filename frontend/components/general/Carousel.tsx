import { AccessTimeFilled, ArrowBackIos, ArrowBackIosNew, ArrowForwardIos, Circle, CircleOutlined } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type CarouselProps = {
    titles?: string[];
    images: string [];
}

const Carousel: React.FC<CarouselProps> = (props) => {

    const [activeImage, setActiveImage] = useState(1);
    const amountOfImages: number = props.images.length;
    console.log(activeImage);
    const clickBack = () => {
        if(activeImage === 0) {
            setActiveImage(amountOfImages - 1);

        } else {
            setActiveImage(activeImage - 1);
        }       
    }

    const clickForward = () => {
        if(activeImage === amountOfImages - 1) {
            setActiveImage(0);
        }
        else {
            setActiveImage(activeImage + 1);
        }
    }

    //TODO: Images should swap place
    //TODO: Add animations to carousel. Framer motion : component={motion.div} etc
    
    return (
    <Container sx={{display: "flex", alignContent: "center", justifyContent: "center", flexDirection: "column"}} maxWidth={'lg'}>
        <Typography marginBottom={2} textAlign={"center"} variant="h3">{props.titles![activeImage]}</Typography>
        <Container sx={{display: "flex", justifyContent: "center", flexDirection: "row", gap: 5}}>
            {props.images.map((image, i) => {
                if (activeImage === i) {
                    return <Image key={i} style={{borderRadius: 5}} src={image} width={300} height={180}></Image>
                }
                else {
                    return <Image key={i} style={{borderRadius: 5}} src={image} width={250} height={20}></Image>
                }
            })}
        </Container>
        <Container sx={{ marginTop: 2, display: "flex", justifyContent: "center"}}>
            <IconButton onClick={clickBack}>
                <ArrowBackIosNew/>
            </IconButton>
            {props.images.map((image, i) => {
                    if(activeImage === i) {
                        return <IconButton onClick={() => {setActiveImage(i)}} key={i}><Circle/></IconButton>    
                    }
                    return <IconButton onClick={() => {setActiveImage(i)}} key={i}><CircleOutlined /></IconButton>
                })}
            <IconButton onClick={clickForward}>
                <ArrowForwardIos/>
            </IconButton>
        </Container>
    </Container>
    );
}





export default Carousel;