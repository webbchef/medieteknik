import eventsContent from "../../content/events.json";
import { Event } from "../../utils/types";
import { Grid, IconButton, Typography } from "@mui/material";
import logo from "../../assets/logotyp_vit_text.png";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";

export default function Footer() {
  const events: Event[] = eventsContent;
  console.log(events);
  return (
    <Grid
      container
      spacing={3}
      sx={{ backgroundColor: "black", p: 3, marginTop: "50px" }}
    >
      <Grid item xs={4}>
        <Grid container justifyContent="center" alignItems="center">
          <img src={logo.src} height="100px" />
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <IconButton
              color="secondary"
              aria-label="upload picture"
              component="label"
            >
              <FacebookRoundedIcon />
            </IconButton>
            <IconButton
              color="secondary"
              aria-label="upload picture"
              component="label"
            >
              <InstagramIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h4" color="white">
          Kontakt
        </Typography>
        <Typography color="white">
          Sektionen för Medieteknik {"\n"}
          Campus Norrköping {"\n"}
          Sandgatan 31 601 74 Norrköping
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h4" color="white">
          Studentlänkar
        </Typography>
        <Link href="/blog/hello-world">
          <Typography color="white">TEXT</Typography>
        </Link>
      </Grid>
    </Grid>
  );
}