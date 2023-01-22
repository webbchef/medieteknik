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
            Vi erbjuder dig bostäder med närhet till centrum och Campus
            Norrköping. Här läser du mer om våra olika studentområden och du kan
            se på en karta var respektive hus ligger.
          </Typography>
          <Button
            target="_blank"
            href="https://hyresbostader.se/studentbo"
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
