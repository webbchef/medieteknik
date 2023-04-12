import eventsContent from "../../content/events.json";
import linksContent from "../../content/footer_links.json";
import { Event, FooterLink } from "../../utils/types";
import { Grid, IconButton, Typography, Link, Divider } from "@mui/material";
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
      sx={{
        backgroundColor: "black",
        p: 3,
        marginTop: "10px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid item xs={12} md={4}>
        <Grid container justifyContent="center" alignItems="center">
          <img src="/images/logotyp_vit_text.png" height="100px" />
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

        <CopyText text="info@medieteknikdagen.se" color="#EC6610" />
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
      <Grid
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: "40%",
          borderTop: "1px solid white",
          padding: 1,
          m: 2,
        }}
      >
        <a
          href="https://www.flaticon.com/free-icons/work-in-progress"
          title="work in progress icons"
          style={{ color: "gray", fontSize: "11px", display: "inline" }}
        >
          Work in progress icons,&nbsp;
        </a>

        <a
          href="https://www.flaticon.com/free-icons/initiative"
          title="initiative icons"
          style={{ color: "gray", fontSize: "11px", display: "inline" }}
        >
          Initiative icons and&nbsp;
        </a>
        <a
          href="https://www.flaticon.com/free-icons/work"
          title="work icons"
          style={{ color: "gray", fontSize: "11px", display: "inline" }}
        >
          Work icons created by Eucalyp - Flaticon
        </a>
      </Grid>
    </Grid>
  );
}
