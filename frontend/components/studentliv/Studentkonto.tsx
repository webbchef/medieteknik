import { Grid, Button, Typography } from "@mui/material";
import WavyBackground from "../general/WavyBackground";

export default function Studentkonto() {
  return (
    <WavyBackground bgColor="#008081">
      <>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            paddingTop: "70px !important",
            paddingBottom: "70px",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Typography variant="h2" sx={{ m: 2 }}>
            Studentkonto
          </Typography>
          <Typography sx={{ m: 2 }}>
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
      </>
    </WavyBackground>

    // <Grid
    //   container
    //   spacing={3}
    //   sx={{
    //     position: "relative",
    //     backgroundColor: "#008081",
    //     // p: 3,
    //   }}
    // >
    //   <Grid item xs={12}>
    //     <div className="custom-shape-divider-top-1674383169">
    //       <svg
    //         data-name="Layer 1"
    //         xmlns="http://www.w3.org/2000/svg"
    //         viewBox="0 0 1200 120"
    //         preserveAspectRatio="none"
    //       >
    //         <path
    //           d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
    //           className="shape-fill"
    //         ></path>
    //       </svg>
    //     </div>
    //   </Grid>
    //   <Grid
    //     item
    //     xs={6}
    //     sx={{
    //       display: "flex",
    //       paddingTop: "70px !important",
    //       paddingBottom: "70px",
    //       flexDirection: "column",
    //       justifyContent: "center",
    //       textAlign: "center",
    //     }}
    //   >
    //     <Typography variant="h2" sx={{ m: 2 }}>
    //       Studentkonto
    //     </Typography>
    //     <Typography sx={{ m: 2 }}>
    //       Vi erbjuder dig bostäder med närhet till centrum och Campus
    //       Norrköping. Här läser du mer om våra olika studentområden och du kan
    //       se på en karta var respektive hus ligger.
    //     </Typography>
    //     <Button
    //       target="_blank"
    //       href="https://hyresbostader.se/studentbo"
    //       variant="contained"
    //       color="secondary"
    //       sx={{ marginTop: 2, marginBottom: "30px" }}
    //     >
    //       Till kontot!
    //     </Button>
    //   </Grid>
    //   <Grid item xs={6} sx={{ display: "flex", justifyContent: "center" }}>
    //     {/* <ImageCarousel /> */}
    //     <p>Instagram</p>
    //   </Grid>
    //   <div className="custom-shape-divider-bottom-1674382091">
    //     <svg
    //       data-name="Layer 1"
    //       xmlns="http://www.w3.org/2000/svg"
    //       viewBox="0 0 1200 120"
    //       preserveAspectRatio="none"
    //     >
    //       <path
    //         d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
    //         className="shape-fill"
    //       ></path>
    //     </svg>
    //   </div>
    // </Grid>
  );
}
