import { Grid, Typography } from "@mui/material";
import WavyBackground from "../general/WavyBackground";
import StyledButton from "../general/StyledButton";
import ImageCarousel from "./ImageCarousel";
import useInstagramPosts from "./useInstagramPosts";

export default function Studentkonto() {
    const posts = useInstagramPosts(process.env.INSTAGRAM_ACCESS_TOKEN);

    return (
        <WavyBackground bgColor="#13283c" textColor="#FFFFFF">
            <Grid container spacing={3} maxWidth="lg">
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                        display: "flex",
                        paddingTop: "70px !important",
                        paddingBottom: "70px",
                        minHeight: "380px",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                    }}
                >
                    <Typography variant="h2" sx={{ m: 2, color: "white" }}>
                        Studentkonto
                    </Typography>
                    <Typography sx={{ m: 2, color: "white" }}>
                        Vill du få en inblick i hur det är att leva som en MT-student eller
                        hur studentlivet är här i Norrköping?
                        <br />
                        <br />
                        Då ska du följa vårat instagramkonto <i>medieteknik_student</i> där
                        du varje vecka får du följa med en MT-student som delar med sig av
                        sin vardag!
                    </Typography>
                    <StyledButton
                        external={true}
                        src="https://www.instagram.com/medieteknik_student/?hl=en"
                    >
                        Till kontot!
                    </StyledButton>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    {posts && <ImageCarousel posts={posts} />}
                </Grid>
            </Grid>
        </WavyBackground>
    );
}
