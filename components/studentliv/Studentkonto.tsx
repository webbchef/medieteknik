import React, { useContext } from "react";
import { Grid, Typography, Box } from "@mui/material";
import WavyBackground from "../general/WavyBackground";
import StyledButton from "../general/StyledButton";
import ImageCarousel from "./ImageCarousel";
import useInstagramPosts from "./useInstagramPosts";
import { MobileStateContext } from "../../contexts/MobileContexts";

export default function Studentkonto() {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN ?? "";
  const posts = useInstagramPosts(accessToken);
  const { isMobile, isIpad } = useContext(MobileStateContext);

  const paddingTopValue = () => {
    if (isMobile) return "10px !important";
    if (isIpad) return "30px !important";
    return "50px !important";
  };

  const paddingBottomValue = () => {
    if (isMobile) return "10px !important";
    if (isIpad) return "30px !important";
    return "70px !important";
  };

  const contentWidth = () => {
    if (isMobile || isIpad) return "80%";
    return "100%";
  };

  const contentMargin = () => {
    if (isMobile || isIpad) return "0 auto";
    return "unset";
  };

return (
    <WavyBackground bgColor="#13283c" textColor="#FFFFFF">
      <Box sx={{ width: contentWidth(), margin: contentMargin() }}>
        <Grid container spacing={3} maxWidth="lg">
          <Grid
            item
            xs={12}
            md={accessToken !== "" ? 6 : 12}
            sx={{
              display: "flex",
              paddingTop: paddingTopValue(),
              paddingBottom: paddingBottomValue(),
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
          {accessToken !== "" && (
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
              {posts && <ImageCarousel />}
            </Grid>
          )}
        </Grid>
      </Box>
    </WavyBackground>
  );
}
