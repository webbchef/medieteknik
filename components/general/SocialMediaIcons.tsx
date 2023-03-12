import { Grid, IconButton, Typography, Link } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useContext } from "react";
import { MobileStateContext } from "../../contexts/MobileContexts";

export default function SocialMediaIcons() {
  const { isMobile, isIpad, isDesktop } = useContext(MobileStateContext);

  return (
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
  );
}
