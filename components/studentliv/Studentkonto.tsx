import { Grid, Button, Typography } from "@mui/material";
import WavyBackground from "../general/WavyBackground";
import Script from "next/script";

export default function Studentkonto() {
  return (
    <WavyBackground bgColor="#13283c" textColor="#FFFFFF">
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            paddingTop: "70px !important",
            paddingBottom: "70px",
            minHeight: "600px",
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
          {/* <ImageCarousel /> */}
          {/* <!-- SnapWidget --> */}
          <Script src="https://snapwidget.com/js/snapwidget.js" />
          <iframe
            src="https://snapwidget.com/embed/1024502"
            className="snapwidget-widget"
            allowTransparency={true}
            height="100%"
            style={{
              border: "none",
              // overflow: "hidden",
              width: "40%",
              borderRadius: "10px",
            }}
          ></iframe>
        </Grid>
      </Grid>
    </WavyBackground>
  );
}
