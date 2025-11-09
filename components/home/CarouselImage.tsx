'use client';

import React, { useState } from "react";
import Image from "next/image";

type CarouselImageProps = {
    imageKey?: React.Key | undefined | null;
    src: string;
    isActive: boolean;
    smallScreen?: boolean;
    handleClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
};

const CarouselImage: React.FC<CarouselImageProps> = (props) => {
    const [isHovered, setIsHovered] = useState(false);
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
            <div
                key={props.imageKey}
                className="relative w-4/5"
                onClick={handleClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div
                    className={`absolute flex items-center justify-center rounded-lg w-full h-full z-10 ${
                        isHovered ? 'bg-[#13283c]/50 cursor-pointer visible' : 'invisible'
                    }`}
                >
                    <h2 className="text-white text-3xl font-bold">Klicka här för att läsa mer om oss</h2>
                </div>
                <Image
                    width={800}
                    height={450}
                    className="rounded-lg w-full h-auto object-cover"
                    src={props.src}
                    alt="Image in carousel"
                />
            </div>
        );
    }

    if (!props.isActive) {
        return (
            <div
                key={props.imageKey}
                className="relative w-1/5"
                onClick={handleClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div
                    className={`absolute flex items-center justify-center rounded-lg w-full h-full z-10 ${
                        isHovered ? 'bg-[#13283c]/50 cursor-pointer visible' : 'invisible'
                    }`}
                />

                <Image
                    width={800}
                    height={450}
                    className="rounded-lg w-full h-auto object-cover"
                    src={props.src}
                    alt="Image in carousel"
                />
            </div>
        );
    } else {
        return (
            <div
                key={props.imageKey}
                className="relative w-[30%]"
                onClick={handleClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div
                    className={`absolute flex items-center justify-center rounded-lg w-full h-full z-10 ${
                        isHovered ? 'bg-[#13283c]/50 cursor-pointer visible' : 'invisible'
                    }`}
                >
                    <h3 className="text-center text-2xl font-bold text-white">Klicka här för att läsa mer om oss</h3>
                </div>
                <Image
                    width={800}
                    height={450}
                    className="rounded-lg w-full h-auto object-cover"
                    src={props.src}
                    alt="Image in carousel"
                />
            </div>
        );
    }
};

export default CarouselImage;