import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  CardMedia,
} from "@mui/material";
import { motion } from "framer-motion";
import { fadeInUp } from "../../animations/constants";
import { Styrare } from "../../utils/types";
import amanda from "../../assets/profilePictures/amanda.jpg";
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
  console.log("test");
  const getLink = (mail: string) => {
    return `mailto:${mail}`;
  };
  return (
    <Card onClick={props.openInfo} sx={{ cursor: "pointer", height: "100%" }}>
      {props.user.imageName && (
        <CardMedia
          component="img"
          height="300"
          image={
            require(`../../assets/profilePictures/${props.user.imageName}.jpg`)
              .default.src
          }
          alt={props.user.name}
        />
      )}
      <CardHeader title={props.user.name} align="center" />
      <CardContent>
        <Typography sx={{ fontWeight: "bold" }}>
          {props.user.responsibility}
        </Typography>

        <Typography>{props.user.email}</Typography>
      </CardContent>
    </Card>
  );
}
