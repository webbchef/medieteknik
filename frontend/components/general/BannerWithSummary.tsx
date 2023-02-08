import { Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import Image, { StaticImageData } from "next/image";

interface InputProps {
  imageSrc: StaticImageData;
  title: string;
  text: string;
}

export default function BannerWithSummary(props: InputProps) {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ padding: "100px 0" }}
    >
      <Grid item xs={5}>
          <Image style={{ borderRadius: "20px"}} src={props.imageSrc} />
      </Grid>
      <Grid item xs={8}>
        <Stack>
          <Typography variant="h2" align="center" sx={{ color: "inherit" }} >{props.title}</Typography>
          <Typography variant="body1" align="center" sx={{ color: "inherit", fontSize: "24px"}}>{props.text}</Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}