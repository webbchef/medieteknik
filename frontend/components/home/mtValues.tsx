import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  title: string;
  description: string;
}

const MtValues: React.FC<Props> = (Props) => {
  return (
    <Box display={"flex"} flexDirection={"column"} width="33%" alignItems={"center"} justifyContent={"center"}>
      <Image width={180} height={200} src={Props.image}></Image>
      <Typography textAlign={"center"} variant="h3">{Props.title}</Typography>
      <Typography marginTop={2} width={180} textAlign={"center"}>{Props.description}</Typography>
    </Box>
  );
}
  



export default MtValues;