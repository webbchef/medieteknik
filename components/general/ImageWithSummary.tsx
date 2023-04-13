import { Button, Typography } from "@mui/material";
import { Stack, GridDirection, Box } from "@mui/system";
import Image, { StaticImageData } from "next/image";
import Grid from "@mui/system/Unstable_Grid/Grid";

interface InputProps {
  imageSrc: string;
  direction?: GridDirection;
  children: JSX.Element;
  imgWidth: string;
  imgHeight: string;
}

export default function ImageWithSummary(props: InputProps) {
  return (
    <Grid
      maxWidth="lg"
      container
      direction={props.direction ? props.direction : "row"}
    >
      <Grid xs={7} md={4} sx={{position: "relative", borderRadius: 2, overflow: "hidden"}}>
          <Image
            layout="fill"
            objectFit="cover"
            src={props.imageSrc}
          />
       
      </Grid>
      <Grid xs={9} md={1}/>
      <Grid xs={9} md={7}>
        {props.children}
      </Grid>
    </Grid>
  );
}
