import { Button, Typography, useMediaQuery } from "@mui/material";
import { Stack, GridDirection, Box, useTheme } from "@mui/system";
import Image, { StaticImageData } from "next/image";
import Grid from "@mui/system/Unstable_Grid/Grid";
import { useContext } from "react";
import { MobileStateContext } from "../../contexts/MobileContexts";

interface InputProps {
  imageSrc: string;
  direction?: GridDirection;
  children: JSX.Element;
  title?: string;
}
export default function ImageWithSummary(props: InputProps) {
  const theme = useTheme();
  const matchesSmall = useMediaQuery(theme.breakpoints.between("xs", "md"));

  return (
    <Grid
      maxWidth="lg"
      container
      direction={props.direction ? props.direction : "row"}
      py={12}
      mx={2}
    >
      {matchesSmall && (
        <Grid xs={12}>
          <Typography textAlign="center" variant="h2">
            {props.title}
          </Typography>
        </Grid>
      )}

      <Grid
        xs={12}
        md={4}
        my={{ md: 4 }}
        sx={{ position: "relative", overflow: "hidden", borderRadius: 2 }}
      >
        {" "}
        {/*mx={{xs: 10, md: 0}}  */}
        {matchesSmall && <Box height={"25vh"} />}
        <Image layout="fill" src={props.imageSrc} alt="" objectFit="cover" />
      </Grid>
      <Grid xs={0} md={1} />
      <Grid xs={12} md={7}>
        {!matchesSmall && (
          <Typography textAlign="center" variant="h2">
            {props.title}
          </Typography>
        )}
        {props.children}
      </Grid>
    </Grid>
  );
  // }

  // return(
  //   <Grid
  //       maxWidth="lg"
  //       container
  //       direction={props.direction ? props.direction : "row"}
  //     >
  //       <Grid xs={7} md={4} sx={{position: "relative", borderRadius: 2, overflow: "hidden"}}>
  //           <Image
  //             layout="fill"
  //             objectFit="cover"
  //             src={props.imageSrc}
  //             alt=""
  //           />

  //       </Grid>
  //       <Grid xs={9} md={1}/>
  //       <Grid xs={9} md={7}>
  //         {props.children}
  //       </Grid>
  //     </Grid>
  // );
}
