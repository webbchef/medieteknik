import { useTheme } from "@emotion/react";
import { Typography } from "@mui/material";
import { Box, alpha } from "@mui/system";
import React, { useState } from "react";
import Image from "next/image";

type CarouselImageProps = {
    key?: React.Key | undefined | null;
    src: string;
    isActive: boolean;
    smallScreen?: boolean;
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

    //if small screen return this 
    if(props.smallScreen) {
        return (
            <Box key={props.key} position="relative" width="80%"
                onClick={handleClick} onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <Box position='absolute' display={"flex"} alignItems={'center'} justifyContent={'center'} borderRadius={2} width='100%' height="100%" zIndex={2} sx={[
                    isHovered ? { backgroundColor: alpha('#13283c', 0.5), cursor: "pointer", visibility: "visible" } : { visibility: "hidden" }
                ]}>
                    <Typography variant="h2" color={"#FFF"}>Klicka här för att läsa mer om oss</Typography>
                </Box>
                <Image
                    width="100%"
                    height="56.25%"
                    style={{ borderRadius: 8 }}
                    src={props.src}
                    layout="responsive"
                    objectFit="cover"
                    alt="Image in carousel"
                />
            </Box>
        );
    }

    if (!props.isActive) {
        return (
            <Box key={props.key} position="relative" width="20%"
                onClick={handleClick} onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <Box position='absolute' display={"flex"} alignItems={'center'} justifyContent={'center'} borderRadius={2} width='100%' height="100%" zIndex={2} sx={[
                    isHovered ? { backgroundColor: alpha('#13283c', 0.5), cursor: "pointer", visibility: "visible" } : { visibility: "hidden" }
                ]} />
                
                <Image
                    width="100%"
                    height="56.25%"
                    style={{ borderRadius: 8 }}
                    src={props.src}
                    layout="responsive"
                    objectFit="cover"
                    alt="Image in carousel"

                />
            </Box>
        );
    } else {

        return (
            <Box key={props.key} position="relative" width="30%"
                onClick={handleClick} onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <Box position='absolute' display={"flex"} alignItems={'center'} justifyContent={'center'} borderRadius={2} width='100%' height="100%" zIndex={2} sx={[
                    isHovered ? { backgroundColor: alpha('#13283c', 0.5), cursor: "pointer", visibility: "visible" } : { visibility: "hidden" }
                ]}>
                    <Typography textAlign="center" variant="h3" color={"#FFF"}>Klicka här för att läsa mer om oss</Typography>
                </Box>
                <Image
                    width="100%"
                    height="56.25%"
                    style={{ borderRadius: 8 }}
                    src={props.src}
                    layout="responsive"
                    objectFit="cover"
                    alt="Image in carousel"
                />
            </Box>
        );
    }

};

export default CarouselImage;