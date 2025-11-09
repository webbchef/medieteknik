import { useEffect, useState, useCallback } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import InstagramGallery from "./InstagramGallery";
import useInstagramPosts from "./useInstagramPosts";

export default function ImageCarousel() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState<number>(0);
    const accessToken = process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN;
    const posts = useInstagramPosts(accessToken || '');
    
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { 
            loop: true,
            direction: theme.direction === "rtl" ? "rtl" : "ltr"
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
        <Box sx={{ maxWidth: 400, flexGrow: 1, borderRadius: "10px" }}>
            <div ref={emblaRef} style={{ overflow: "hidden", borderRadius: "10px" }}>
                <div style={{ display: "flex" }}>
                    {posts.map((post, index) => (
                        <Grid
                            key={index}
                            sx={{
                                borderRadius: "10px",
                                height: 350,
                                flex: "0 0 100%",
                                minWidth: 0,
                                maxWidth: 500,
                                backgroundImage: `url(${post.media_url})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                position: "relative",
                            }}
                        />
                    ))}
                </div>
            </div>
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                sx={{
                    width: "100%",
                    minHeight: "50px",
                    backgroundColor: "rgba(19, 40, 60, 0.8)",
                    borderRadius: "0 0 10px 10px",
                }}
            >
                <Typography variant="caption" color="white">
                    {posts[activeStep]?.caption?.substring(0, 100)}{posts[activeStep]?.caption.length > 100 ? "..." : ""}
                </Typography>
            </Grid>
        </Box>
    );
}