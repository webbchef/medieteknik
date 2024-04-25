import { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import InstagramGallery from "./InstagramGallery";
import useInstagramPosts from "./useInstagramPosts";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function ImageCarousel() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState<number>(0);
    const [hover, setHover] = useState<boolean>(false);
    const accessToken = process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN;
    const posts = useInstagramPosts(accessToken || '');
    const maxSteps = posts.length;

    const handleStepChange = (step: number) => {
        // Don't move slide if mouse hover
        if (!hover) setActiveStep(step);
    };

    return (
        <Box sx={{ maxWidth: 400, flexGrow: 1, borderRadius: "10px" }}>
            <AutoPlaySwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
                style={{ borderRadius: "10px" }}
            >
                {posts.map((post, index) => (
                    <div key={index}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Grid
                                onMouseEnter={() => setHover(true)}
                                onMouseLeave={() => setHover(false)}
                                sx={{
                                    borderRadius: "10px",
                                    height: 350,
                                    display: "block",
                                    maxWidth: 500,
                                    overflow: "hidden",
                                    width: "100%",
                                    backgroundImage: `url(${post.media_url})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center", // Add this line
                                    position: "relative",
                                }}
                            ></Grid>

                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
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