import eventsContent from "../../content/events.json";
import linksContent from "../../content/footer_links.json";
import { Event, FooterLink } from "../../utils/types";
import { Grid, IconButton, Typography, Link } from "@mui/material";
import logo from "../../assets/logotyp_vit_text.png";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useContext } from "react";
import { MobileStateContext } from "../../contexts/MobileContexts";
import CopyText from "./CopyText";

export default function Footer() {
  const { isMobile, isIpad, isDesktop } = useContext(MobileStateContext);
  const events: Event[] = eventsContent;
  const links: FooterLink[] = linksContent;
  console.log(events);
  return (
    <Grid
      container
      spacing={3}
      sx={{ backgroundColor: "black", p: 3, marginTop: "50px" }}
    >
      <Grid item xs={12} md={4}>
        <Grid container justifyContent="center" alignItems="center">
          <img src={logo.src} height="100px" />
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Link
              target="_blank"
              rel="noopener"
              href="https://sv-se.facebook.com/mtsektionen/"
            >
              <IconButton
                color="secondary"
                aria-label="upload picture"
                component="label"
              >
                <FacebookRoundedIcon />
              </IconButton>
            </Link>
            <Link
              target="_blank"
              rel="noopener"
              href="https://www.instagram.com/mtsektionen/?hl=en"
            >
              <IconButton
                color="secondary"
                aria-label="upload picture"
                component="label"
              >
                <InstagramIcon />
              </IconButton>
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={isMobile ? 12 : 6}
        md={4}
        sx={!isDesktop ? { textAlign: "center" } : { textAlign: "left" }}
      >
        <Typography variant="h4" color="white">
          Kontakt
        </Typography>
        <Typography color="white">
          Sektionen för Medieteknik <br></br>
          Campus Norrköping <br></br>
          Sandgatan 31 601 74 Norrköping
        </Typography>
        <br></br>
        {/* <Typography color="white">
          <a href="mailto:info@medieteknik.nu">info@medieteknik.nu</a>
        </Typography> */}
        <CopyText text="info@medieteknikdagen.se" color="white" />
      </Grid>
      <Grid
        item
        xs={isMobile ? 12 : 6}
        md={4}
        sx={!isDesktop ? { textAlign: "center" } : { textAlign: "left" }}
      >
        <Typography variant="h4" color="white">
          Studentlänkar
        </Typography>
        {links.map((link, index) => (
          <Link target="_blank" rel="noopener" href={link.path} key={index}>
            <Typography color="white">{link.title}</Typography>
          </Link>
        ))}
      </Grid>
    </Grid>
  );
}
