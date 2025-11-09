'use client';

import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import InstagramGallery from "./InstagramGallery";
import useInstagramPosts from "./useInstagramPosts";

export default function ImageCarousel() {
    const [activeStep, setActiveStep] = useState<number>(0);
    const accessToken = process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN;
    const posts = useInstagramPosts(accessToken || '');

    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            direction: "ltr"
        },
        [Autoplay({ delay: 4000, stopOnInteraction: true })]
    );

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setActiveStep(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on("select", onSelect);
        return () => {
            emblaApi.off("select", onSelect);
        };
    }, [emblaApi, onSelect]);

    return (
        <div className="max-w-[400px] flex-grow rounded-[10px]">
            <div ref={emblaRef} className="overflow-hidden rounded-[10px]">
                <div className="flex">
                    {posts.map((post, index) => (
                        <div
                            key={index}
                            className="rounded-[10px] h-[350px] flex-[0_0_100%] min-w-0 max-w-[500px] bg-cover bg-no-repeat bg-center relative"
                            style={{
                                backgroundImage: `url(${post.media_url})`
                            }}
                        />
                    ))}
                </div>
            </div>
            <div className="w-full min-h-[50px] bg-[rgba(19,40,60,0.8)] rounded-b-[10px] flex justify-center items-center px-4">
                <p className="text-white text-sm">
                    {posts[activeStep]?.caption?.substring(0, 100)}{posts[activeStep]?.caption && posts[activeStep].caption.length > 100 ? "..." : ""}
                </p>
            </div>
        </div>
    );
}