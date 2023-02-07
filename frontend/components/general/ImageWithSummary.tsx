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
      sx={{paddingBottom: "80px", maxWidth: "1200px", margin: "auto"}}
    >
        <Grid item xs={7} md={5}>
            <Image style={{ borderRadius: "40px"}} src={props.imageSrc} />
        </Grid>
        <Grid item xs={0} md={1}/>
        <Grid item xs={9} md={5}>
            <Stack>
              <Typography variant="h2" align="center" sx={{ color: "inherit" }} >{props.title}</Typography>
              <Typography variant="body1" align="center" sx={{ color: "inherit", fontSize: "19px"}}>{props.text}</Typography>
              {props.link != "" &&
                <Button href={props.link} variant="outlined" size="large" sx={{ margin: "40px auto" }}>Läs Mer</Button>
              } 
            </Stack>
        </Grid>
    </Grid>
  );
}