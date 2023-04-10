import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  CardMedia,
} from "@mui/material";
import { motion } from "framer-motion";
import { fadeInUp } from "../../animations/constants";
import { Alumn } from "../../utils/types";
interface InputProps {
  user: Alumn;
  openInfo: () => void;
}
/**
 *
 * @param {user} user - active user
 * @param {() => void} openInfo - opens modal about user
 * @returns
 */
export default function PresentationCard(props: InputProps) {
  const getLink = (mail: string) => {
    return `mailto:${mail}`;
  };
  console.log("test");
  return (
    <Card onClick={props.openInfo} sx={{ cursor: "pointer", height: "100%" }}>
      {props.user.imageName && (
        <CardMedia
          component="img"
          height="250"
          image={`/images/profilePictures/${props.user.imageName}.jpg`}
          alt={props.user.name}
        />
      )}
      <CardHeader title={props.user.name} align="center" />
      <CardContent sx={{ p: 0 }}>
        <Typography sx={{ fontWeight: "bold" }}>{props.user.post}</Typography>

        <Typography>{props.user.work}</Typography>
      </CardContent>
    </Card>
  );
}
