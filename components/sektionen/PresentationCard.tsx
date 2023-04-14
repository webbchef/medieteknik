import { Card, CardContent, CardHeader, Typography, CardMedia } from "@mui/material";
import { useContext } from "react";
import { Styrare } from "../../utils/types";
import { MobileStateContext } from "../../contexts/MobileContexts";

interface InputProps {
  user: Styrare;
  openInfo: () => void;
}
/**
 *
 * @param {user} user - active user
 * @param {() => void} openInfo - opens modal about user
 * @returns
 */
export default function PresentationCard(props: InputProps) {
  const { isMobile, isIpad, isDesktop } = useContext(MobileStateContext);

  return (
    <Card
      onClick={props.openInfo}
      sx={{
        cursor: "pointer",
        height: isMobile ? 375 : isIpad ? 500 : 400,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}
    >
      {props.user.imageName && (
        <CardMedia
          component="img"
          image={`/images/profilePictures/${props.user.imageName}.jpg`}
          alt={props.user.name}
        />
      )}
      <CardHeader title={props.user.name} align="center" />
      <CardContent>
      <Typography variant="subtitle1" sx={{ fontWeight: "bold", pb: isMobile ? 1 : 0, overflowWrap: 'break-word' }}>
        {props.user.responsibility}
      </Typography>
      <Typography sx={{ pt: isMobile ? 1 : 0, fontSize: isDesktop ? "16px !important" : "inherit", overflowWrap: 'break-word' }}>
        {props.user.email}
      </Typography>


      </CardContent>
    </Card>
  );
}