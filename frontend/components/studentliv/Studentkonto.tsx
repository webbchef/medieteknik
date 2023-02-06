import { Grid, Button, Typography } from "@mui/material";
import WavyBackground from "../general/WavyBackground";

export default function Studentkonto() {
  return (
    <WavyBackground bgColor="#13283c" textColor="#FFFFFF">
      <Grid container spacing={3}>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            paddingTop: "90px !important",
            paddingBottom: "70px",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography variant="h2" sx={{ m: 2, color: "white" }}>
            Studentkonto
          </Typography>
          <Typography sx={{ m: 2, color: "white" }}>
            Vill du få en inblick i hur det är att leva som MT-student? Då ska
            du följa vårat instagramkonto <i>medieteknik_student</i>!
            <br />
            <br />
            Här får du följa med en MT-student ...
          </Typography>
          <Button
            target="_blank"
            href="https://www.instagram.com/medieteknik_student/?hl=en"
            variant="contained"
            color="secondary"
            sx={{ marginTop: 2, marginBottom: "30px" }}
          >
            Till kontot!
          </Button>
        </Grid>
        <Grid item xs={6} sx={{ display: "flex", justifyContent: "center" }}>
          {/* <ImageCarousel /> */}
          <p>Instagram</p>
        </Grid>
      </Grid>
    </WavyBackground>
  );
}