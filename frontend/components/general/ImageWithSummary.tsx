import { Grid, Button, Typography } from "@mui/material";
import { Stack, GridDirection } from "@mui/system";
import Image, { StaticImageData } from "next/image";

interface InputProps {
  imageSrc: StaticImageData;
  title: string;
  text: string;
  direction: GridDirection;
  link: string;
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
            <Image style={{ borderRadius: "20px"}} src={props.imageSrc} />
        </Grid>
        <Grid item xs={7} md={1}/>
        <Grid item xs={9} md={5}>
            <Stack>
              <Typography variant="h2" align="center" sx={{ color: "inherit" }} >{props.title}</Typography>
              <Typography variant="body1" align="center" sx={{ color: "inherit", fontSize: "24px"}}>{props.text}</Typography>
              <Button href={props.link} variant="contained" size="large" sx={{ margin: "20px auto", backgroundColor: "#EC6610", color: "inherit" }}>Läs Mer</Button>
            </Stack>
        </Grid>
    </Grid>
  );
}