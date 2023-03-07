import { Grid, Button, Typography } from "@mui/material";
import { Stack, GridDirection } from "@mui/system";
import Image, { StaticImageData } from "next/image";

interface InputProps {
  imageSrc: StaticImageData;
  direction: GridDirection;
  children: JSX.Element;
}

export default function ImageWithSummary(props: InputProps) {
  return (
    <Grid
      container
      direction={props.direction}
      justifyContent="center"
      alignItems="center"
      sx={{ padding: "20px 0" }}
    >
      <Grid item xs={7} md={4}>
        <Image style={{ borderRadius: "20px" }} src={props.imageSrc} alt="" />
      </Grid>
      <Grid item xs={7} md={1} />
      <Grid item xs={9} md={5}>
        {props.children}
      </Grid>
    </Grid>
  );
}
